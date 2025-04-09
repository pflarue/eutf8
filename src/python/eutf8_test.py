#! /usr/bin/python

import sys
from random import randbytes, random

from eutf8 import to_eutf8, from_eutf8

sys.stdout.reconfigure(encoding="utf-8")


##########################################################################
# Run this test script from src/py to correctly find the test data files #
##########################################################################


def rnd_eutf8_test(length, count, escape_tab=False, escape_lf=False, escape_cr=False):
    """Test whether data == from_eutf8(to_eutf8(data)) for random data

    length: The number of random bytes used for each tests
    count: The number of tests run

    This also prints the ratio of encoded length to raw data length.
    """

    sum_length = 0
    max_factor = 0
    for cnt in range(count):
        bdata = randbytes(length)
        # print(bdata)
        eutf8data = to_eutf8(
            bdata, escape_tab=escape_tab, escape_lf=escape_lf, escape_cr=escape_cr
        )
        sum_length += len(eutf8data)
        try:
            restoreddata = from_eutf8(eutf8data)
        except ValueError:
            print(bdata)
            print(eutf8data)
            raise
        if bdata != restoreddata:
            print(bdata)
            print(eutf8data)
            print(restoreddata)
            raise ValueError("eutf8 round trip error.")
        if len(eutf8data) / len(bdata) > max_factor:
            max_factor = len(eutf8data) / len(bdata)
        try:
            print(
                round(len(eutf8data) / len(bdata), 3),
                eutf8data.decode()[:80],
                "..." if len(eutf8data) > 80 else "",
            )
        except UnicodeDecodeError:
            print(bdata)
            print(eutf8data)
            raise ValueError("eutf8data is not valid UTF-8")
    print(
        f"average expansion factor={round(sum_length/(length * count), 3)}"
        f" max={max_factor}"
    )


# biterrorrate is the probability that each bit in srcpath should be flipped
# before writing a copy of it to dstpath.  So, if biterrorrate is 0.0, dstpath
# will be a perfect copy of srcpath.  If biterror rate is 1.0, then every byte
# in dstpath will be the corresponding byty from srcpath with all bits inverted.
# If biterrorrate is 0.01 then about 1% of bits in srcpath will be changed in
# dstpath.
# If eutf8dstpth is not None, then also write to that file the error containing
# data encoded as eutf8 with escape_tabs and escape_lf both false, but escape_cr
# true.  UTF-8-demo.txt has unix line endings (\x0A).  So, retain these and
# tabs, but escape any carriage returns.  Since carriage returns are not present
# in the source, they are the result of bit errors.
def add_bit_errors(srcpath, dstpath, biterrorrate, eutf8dstpath):
    print(f"Creating {dstpath} from {srcpath} with biterrorrate={biterrorrate}")
    with open(srcpath, "rb") as src:
        data = bytearray(src.read())
    for i in range(len(data) * 8):
        # i is a bit number in srcdata
        if random() < biterrorrate:
            data[i // 8] ^= 1 << (7 - (i % 8))
    try:
        data.decode()
    except UnicodeDecodeError:
        print(f"As expected: {dstpath} is not valid UTF-8 data")
    with open(dstpath, "wb") as dst:
        dst.write(data)
    if eutf8dstpath is not None:
        e8 = to_eutf8(data, escape_tab=False, escape_lf=False, escape_cr=True)
        try:
            e8.decode()
        except UnicodeDecodeError:
            print(f"ERROR: {eutf8dstpath} is not valid UTF-8 data")
        with open(eutf8dstpath, "wb") as dst:
            dst.write(e8)


def test():
    # Notice that none of the elements of testdata[] include a
    # NULL (\x00 -> \\00).  This allows other implementations of eutf8 which
    # are expected to use this same set of tests to use a string length
    # function to determine the size of these elements.  An element containing
    # a NULL (\x00) would then ignore any data after the NULL.
    # Later tests do include NULL characters to verify that to_eutf8() handles
    # these correctly.
    #
    # testdata contains byte data values for pairs of raw byte data and
    # equivalent eutf8 data.
    # TODO: Review and expand this test set to be more rigorous
    testdata = [
        # ASCII text with tab, lf, and cr
        [b"This\tis a\r\ntest", b"This\tis a\r\ntest"],
        # Various backslashes in source data with no change required
        [
            b"\\AX \\XA \\ab \\aB \\Ab \\\xE2\x80\x8BX",
            b"\\AX \\XA \\ab \\aB \\Ab \\\xE2\x80\x8BX",
        ],
        # Backslash + HH.  ZWS required
        [b"\\FF", b"\\\xE2\x80\x8BFF"],
        # Backslash + ZWS + hex.  additional ZWS required
        [b"\\\xE2\x80\x8BAB", b"\\\xE2\x80\x8B\xE2\x80\x8BAB"],
        # All 32 valid UTF-8 C1 control codes
        [
            b"\xC2\x80\xC2\x81\xC2\x82\xC2\x83\xC2\x84\xC2\x85\xC2\x86\xC2\x87"
            b"\xC2\x88\xC2\x89\xC2\x8A\xC2\x8B\xC2\x8C\xC2\x8D\xC2\x8E\xC2\x8F"
            b"\xC2\x90\xC2\x91\xC2\x92\xC2\x93\xC2\x94\xC2\x95\xC2\x96\xC2\x97"
            b"\xC2\x98\xC2\x99\xC2\x9A\xC2\x9B\xC2\x9C\xC2\x9D\xC2\x9E\xC2\x9F",
            b"\\C2\\80\\C2\\81\\C2\\82\\C2\\83\\C2\\84\\C2\\85\\C2\\86\\C2\\87"
            b"\\C2\\88\\C2\\89\\C2\\8A\\C2\\8B\\C2\\8C\\C2\\8D\\C2\\8E\\C2\\8F"
            b"\\C2\\90\\C2\\91\\C2\\92\\C2\\93\\C2\\94\\C2\\95\\C2\\96\\C2\\97"
            b"\\C2\\98\\C2\\99\\C2\\9A\\C2\\9B\\C2\\9C\\C2\\9D\\C2\\9E\\C2\\9F",
        ],
        # All 66 valid UTF-8 noncharacters
        [
            b"\xEF\xB7\x90 \xEF\xB7\x91 \xEF\xB7\x92 \xEF\xB7\x93"
            b"\xEF\xB7\x94 \xEF\xB7\x95 \xEF\xB7\x96 \xEF\xB7\x97"
            b"\xEF\xB7\x98 \xEF\xB7\x99 \xEF\xB7\x9A \xEF\xB7\x9B"
            b"\xEF\xB7\x9C \xEF\xB7\x9D \xEF\xB7\x9E \xEF\xB7\x9F"
            b"\xEF\xB7\xA0 \xEF\xB7\xA1 \xEF\xB7\xA2 \xEF\xB7\xA3"
            b"\xEF\xB7\xA4 \xEF\xB7\xA5 \xEF\xB7\xA6 \xEF\xB7\xA7"
            b"\xEF\xB7\xA8 \xEF\xB7\xA9 \xEF\xB7\xAA \xEF\xB7\xAB"
            b"\xEF\xB7\xAC \xEF\xB7\xAD \xEF\xB7\xAE \xEF\xB7\xAF"
            b"\xEF\xBF\xBE \xEF\xBF\xBF"
            b"\xF0\x9F\xBF\xBE \xF0\x9F\xBF\xBF"
            b"\xF0\xAF\xBF\xBE \xF0\xAF\xBF\xBF"
            b"\xF0\xBF\xBF\xBE \xF0\xBF\xBF\xBF"
            b"\xF1\x8F\xBF\xBE \xF1\x8F\xBF\xBF"
            b"\xF1\x9F\xBF\xBE \xF1\x9F\xBF\xBF"
            b"\xF1\xAF\xBF\xBE \xF1\xAF\xBF\xBF"
            b"\xF1\xBF\xBF\xBE \xF1\xBF\xBF\xBF"
            b"\xF2\x8F\xBF\xBE \xF2\x8F\xBF\xBF"
            b"\xF2\x9F\xBF\xBE \xF2\x9F\xBF\xBF"
            b"\xF2\xAF\xBF\xBE \xF2\xAF\xBF\xBF"
            b"\xF2\xBF\xBF\xBE \xF2\xBF\xBF\xBF"
            b"\xF3\x8F\xBF\xBE \xF3\x8F\xBF\xBF"
            b"\xF3\x9F\xBF\xBE \xF3\x9F\xBF\xBF"
            b"\xF3\xAF\xBF\xBE \xF3\xAF\xBF\xBF"
            b"\xF3\xBF\xBF\xBE \xF3\xBF\xBF\xBF"
            b"\xF4\x8F\xBF\xBE \xF4\x8F\xBF\xBF",
            b"\\EF\\B7\\90 \\EF\\B7\\91 \\EF\\B7\\92 \\EF\\B7\\93"
            b"\\EF\\B7\\94 \\EF\\B7\\95 \\EF\\B7\\96 \\EF\\B7\\97"
            b"\\EF\\B7\\98 \\EF\\B7\\99 \\EF\\B7\\9A \\EF\\B7\\9B"
            b"\\EF\\B7\\9C \\EF\\B7\\9D \\EF\\B7\\9E \\EF\\B7\\9F"
            b"\\EF\\B7\\A0 \\EF\\B7\\A1 \\EF\\B7\\A2 \\EF\\B7\\A3"
            b"\\EF\\B7\\A4 \\EF\\B7\\A5 \\EF\\B7\\A6 \\EF\\B7\\A7"
            b"\\EF\\B7\\A8 \\EF\\B7\\A9 \\EF\\B7\\AA \\EF\\B7\\AB"
            b"\\EF\\B7\\AC \\EF\\B7\\AD \\EF\\B7\\AE \\EF\\B7\\AF"
            b"\\EF\\BF\\BE \\EF\\BF\\BF"
            b"\\F0\\9F\\BF\\BE \\F0\\9F\\BF\\BF"
            b"\\F0\\AF\\BF\\BE \\F0\\AF\\BF\\BF"
            b"\\F0\\BF\\BF\\BE \\F0\\BF\\BF\\BF"
            b"\\F1\\8F\\BF\\BE \\F1\\8F\\BF\\BF"
            b"\\F1\\9F\\BF\\BE \\F1\\9F\\BF\\BF"
            b"\\F1\\AF\\BF\\BE \\F1\\AF\\BF\\BF"
            b"\\F1\\BF\\BF\\BE \\F1\\BF\\BF\\BF"
            b"\\F2\\8F\\BF\\BE \\F2\\8F\\BF\\BF"
            b"\\F2\\9F\\BF\\BE \\F2\\9F\\BF\\BF"
            b"\\F2\\AF\\BF\\BE \\F2\\AF\\BF\\BF"
            b"\\F2\\BF\\BF\\BE \\F2\\BF\\BF\\BF"
            b"\\F3\\8F\\BF\\BE \\F3\\8F\\BF\\BF"
            b"\\F3\\9F\\BF\\BE \\F3\\9F\\BF\\BF"
            b"\\F3\\AF\\BF\\BE \\F3\\AF\\BF\\BF"
            b"\\F3\\BF\\BF\\BE \\F3\\BF\\BF\\BF"
            b"\\F4\\8F\\BF\\BE \\F4\\8F\\BF\\BF",
        ],
        # The start and end of each block of valid UTF-8 private use characters
        [
            b"\xEE\x80\x80\xEE\x80\x81 \xEF\xA3\xBE\xEF\xA3\xBF"
            b"\xF3\xB0\x80\x80\xF3\xB0\x80\x81 \xF3\xBF\xBF\xBC\xF3\xBF\xBF\xBD"
            b"\xF4\x80\x80\x80\xF4\x80\x80\x81 \xF4\x8F\xBF\xBC\xF4\x8F\xBF\xBD",
            b"\\EE\\80\\80\\EE\\80\\81 \\EF\\A3\\BE\\EF\\A3\\BF"
            b"\\F3\\B0\\80\\80\\F3\\B0\\80\\81 \\F3\\BF\\BF\\BC\\F3\\BF\\BF\\BD"
            b"\\F4\\80\\80\\80\\F4\\80\\80\\81 \\F4\\8F\\BF\\BC\\F4\\8F\\BF\\BD",
        ],
        # Some byte sequences just outside blocks of Well Formed UTF-8
        [
            b"\x80\x81"
            b"\xC2\x7F\xC2\xC0 \xC3\x7F\xC3\xC0 \xDE\x7F\xDE\xC0 \xC5\xDF\xDF\xC0"
            b"\xE0\xA0\x7F\xE0\xBF\xC0 \xE0\x9F\x80\xE0\xC0\xBF"
            b"\xE1\x80\x7F\xE1\xBF\xC0 \xE1\x7F\x80\xE1\xC0\xBF"
            b"\xEC\x80\x7F\xEC\xBF\xC0 \xEC\x7F\x80\xEC\xC0\xBF"
            b"\xED\x80\x7F\xED\x9F\xC0 \xED\x7F\x80\xED\xA0\xBF"
            b"\xEE\x80\x7F\xEE\xBF\xC0 \xEE\x7F\x80\xEE\xC0\xBF"
            b"\xEF\x80\x7F\xEF\xBF\xC0 \xEF\x7F\x80\xEF\xC0\xBF"
            b"\xF0\x90\x80\x7F\xF0\xBF\xBF\xC0 \xF0\x90\x7F\x80\xF0\xBF\xC0\xBF"
            b"\xF1\x80\x80\x7F\xF1\xBF\xBF\xC0 \xF1\x7F\x80\x80\xF1\xC0\xBF\xBF"
            b"\xF3\x80\x80\x7F\xF3\xBF\xBF\xC0 \xF3\x80\x7F\x80\xF3\xBF\xC0\xBF"
            b"\xF4\x80\x80\x7F\xF4\x8F\xBF\xC0 \xF4\x80\x7F\x80\xF4\x8F\xC0\xBF",
            b"\\80\\81"
            b"\\C2\\7F\\C2\\C0 \\C3\\7F\\C3\\C0 \\DE\\7F\\DE\\C0 \\C5\\DF\\DF\\C0"
            b"\\E0\\A0\\7F\\E0\\BF\\C0 \\E0\\9F\\80\\E0\\C0\\BF"
            b"\\E1\\80\\7F\\E1\\BF\\C0 \\E1\\7F\\80\\E1\\C0\\BF"
            b"\\EC\\80\\7F\\EC\\BF\\C0 \\EC\\7F\\80\\EC\\C0\\BF"
            b"\\ED\\80\\7F\\ED\\9F\\C0 \\ED\\7F\\80\\ED\\A0\\BF"
            b"\\EE\\80\\7F\\EE\\BF\\C0 \\EE\\7F\\80\\EE\\C0\\BF"
            b"\\EF\\80\\7F\\EF\\BF\\C0 \\EF\\7F\\80\\EF\\C0\\BF"
            b"\\F0\\90\\80\\7F\\F0\\BF\\BF\\C0 \\F0\\90\\7F\\80\\F0\\BF\\C0\\BF"
            b"\\F1\\80\\80\\7F\\F1\\BF\\BF\\C0 \\F1\\7F\\80\\80\\F1\\C0\\BF\\BF"
            b"\\F3\\80\\80\\7F\\F3\\BF\\BF\\C0 \\F3\\80\\7F\\80\\F3\\BF\\C0\\BF"
            b"\\F4\\80\\80\\7F\\F4\\8F\\BF\\C0 \\F4\\80\\7F\\80\\F4\\8F\\C0\\BF",
        ],
        # Some valid UTF-8 with first byte between 0xC2 and 0xDF (not C1 control)
        [b"\xC2\xAB\xCF\x80 \xDD\xBF \xDF\x86", b"\xC2\xAB\xCF\x80 \xDD\xBF \xDF\x86"],
        # Some valid UTF-8 with first byte 0xE0
        [
            b"\xE0\xA0\x80 \xE0\xBF\xBF \xE0\xB5\x90 \xE0\xA5\xBB",
            b"\xE0\xA0\x80 \xE0\xBF\xBF \xE0\xB5\x90 \xE0\xA5\xBB",
        ],
        # Some valid UTF-8 with first byte 0xE1 to 0xEC
        [
            b"\xE1\x80\x80 \xEC\xBF\xBF \xE2\x95\x90 \xEA\xA5\xBB",
            b"\xE1\x80\x80 \xEC\xBF\xBF \xE2\x95\x90 \xEA\xA5\xBB",
        ],
        # Some valid UTF-8 with first byte 0xED
        [
            b"\xED\x80\x80 \xED\x9F\xBF \xED\x95\x90 \xED\x8D\xBB",
            b"\xED\x80\x80 \xED\x9F\xBF \xED\x95\x90 \xED\x8D\xBB",
        ],
        # Some valid (non-private) UTF-8 with first byte 0xEF
        [
            b"\xEF\xA4\x80 \xEF\xBF\xBD \xEF\xB7\x8F \xEF\xB8\xAF",
            b"\xEF\xA4\x80 \xEF\xBF\xBD \xEF\xB7\x8F \xEF\xB8\xAF",
        ],
        # Some private use UTF-8 with first byte 0xEE and 0xEF (escaped)
        [
            b"\xEE\x80\x80 \xEF\xA3\xBF \xEE\x80\xBF \xEF\xA3\x80",
            b"\\EE\\80\\80 \\EF\\A3\\BF \\EE\\80\\BF \\EF\\A3\\80",
        ],
        # Test proper handling of an othewise valid UTF-8 text which is
        # truncated in the middle of a multibyte character such that the
        # remaining initial bytes of that character must be escaped because
        # they are no longer valid.
        # A series of space separated 3-byte characters: OK
        [
            b"\xE3\x82\xB3 \xE3\x83\xB3 \xE3\x83\x8B \xE3\x83\x81 \xE3\x83\x8F",
            b"\xE3\x82\xB3 \xE3\x83\xB3 \xE3\x83\x8B \xE3\x83\x81 \xE3\x83\x8F",
        ],
        # This sequence with the last byte omitted
        [
            b"\xE3\x82\xB3 \xE3\x83\xB3 \xE3\x83\x8B \xE3\x83\x81 \xE3\x83",
            b"\xE3\x82\xB3 \xE3\x83\xB3 \xE3\x83\x8B \xE3\x83\x81 \\E3\\83",
        ],
        # This sequence with the last two bytes omitted
        [
            b"\xE3\x82\xB3 \xE3\x83\xB3 \xE3\x83\x8B \xE3\x83\x81 \xE3",
            b"\xE3\x82\xB3 \xE3\x83\xB3 \xE3\x83\x8B \xE3\x83\x81 \\E3",
        ],
        # A series of space separated 4-byte characters: OK
        [
            b"\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \xF3\xA2\x87\xB0",
            b"\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \xF3\xA2\x87\xB0",
        ],
        # This sequence with the last byte omitted
        [
            b"\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \xF3\xA2\x87",
            b"\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \\F3\\A2\\87",
        ],
        # This sequence with the last two bytes omitted
        [
            b"\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \xF3\xA2",
            b"\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \\F3\\A2",
        ],
        # This sequence with the last three bytes omitted
        [
            b"\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \xF3",
            b"\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \\F3",
        ],
        # Multiple zero width spaces after a backslash and followed by two upper
        # case hex digits.  The eutf8 encoding adds additional zero width
        # spaces.
        [
            b"\\DD \\\xE2\x80\x8BF0 \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8BCA",
            b"\\\xE2\x80\x8BDD \\\xE2\x80\x8B\xE2\x80\x8BF0"
            b" \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8BCA",
        ],
        # This sequence with the last byte omitted such that an additional zero
        # width space is not added
        [
            b"\\DD \\\xE2\x80\x8BF0 \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8BC",
            b"\\\xE2\x80\x8BDD \\\xE2\x80\x8B\xE2\x80\x8BF0"
            b" \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8BC",
        ],
        # This sequence with the last two bytes omitted such that an additional
        # zero width space is not added
        [
            b"\\DD \\\xE2\x80\x8BF0 \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8B",
            b"\\\xE2\x80\x8BDD \\\xE2\x80\x8B\xE2\x80\x8BF0"
            b" \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8B",
        ],
        # This sequence with the last three bytes omitted such the last zero
        # width space is incomplete so that its remaining bytes must be escaped.
        [
            b"\\DD \\\xE2\x80\x8BF0 \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80",
            b"\\\xE2\x80\x8BDD \\\xE2\x80\x8B\xE2\x80\x8BF0"
            b" \\\xE2\x80\x8B\xE2\x80\x8B\\E2\\80",
        ],
        # This sequence with the last four bytes omitted such the last zero
        # width space is incomplete so that its remaining byte must be escaped.
        [
            b"\\DD \\\xE2\x80\x8BF0 \\\xE2\x80\x8B\xE2\x80\x8B\xE2",
            b"\\\xE2\x80\x8BDD \\\xE2\x80\x8B\xE2\x80\x8BF0"
            b" \\\xE2\x80\x8B\xE2\x80\x8B\\E2",
        ],
        # Ending with a single zero width space after a backslash and followed
        # by two upper case hex digits.  The eutf8 encoding adds additional zero
        # width spaces.
        [b"\\DD \\\xE2\x80\x8BF0", b"\\\xE2\x80\x8BDD \\\xE2\x80\x8B\xE2\x80\x8BF0"],
        # This sequence with the last byte omitted such that an additional zero
        # width space is not added
        [b"\\DD \\\xE2\x80\x8BF", b"\\\xE2\x80\x8BDD \\\xE2\x80\x8BF"],
        # This sequence with the last two bytes omitted such that an additional
        # zero width space is not added
        [b"\\DD \\\xE2\x80\x8B", b"\\\xE2\x80\x8BDD \\\xE2\x80\x8B"],
        # This sequence with the last three bytes omitted such the zero width
        # space is incomplete so that its remaining bytes must be escaped.
        [b"\\DD \\\xE2\x80", b"\\\xE2\x80\x8BDD \\\\E2\\80"],
        # This sequence with the last four bytes omitted such the zero width
        # space is incomplete so that its remaining byte must be escaped.
        [b"\\DD \\\xE2", b"\\\xE2\x80\x8BDD \\\\E2"],
        # This sequence with the last five bytes omitted such that it ends with
        # a backslash
        [b"\\DD \\", b"\\\xE2\x80\x8BDD \\"],
        # Ending with a backslash and followed by two upper case hex digits.
        # The eutf8 encoding adds a zero width spaces.
        [b"\\DD \\BC", b"\\\xE2\x80\x8BDD \\\xE2\x80\x8BBC"],
        # This sequence with the last byte omitted such that a zero width space
        # is not added
        [b"\\DD \\B", b"\\\xE2\x80\x8BDD \\B"],
        # This sequence with the last two bytes omitted such that it ends with
        # a backslash
        [b"\\DD \\", b"\\\xE2\x80\x8BDD \\"],
        # empty input
        [b"", b""],
        # An example where the eutf8 version is three times as long as raw
        [b"\xE2\x80\xF4\x9A", b"\\E2\\80\\F4\\9A"],  # 4 bytes -> 12 bytes
    ]

    # This test ensures that \x00 isn't mistakenly interpreted as an upper case
    # hex digit, as was the case in an early development version of eutf8.c
    # Because of the NULL, strlen(shortraw) isn't valid, so this cannot be
    # included in testdata[].
    shortraw = b"\\\x00CF"
    shorte8 = b"\\\\00CF"

    if to_eutf8(shortraw) != shorte8:
        print(
            f'ERROR for shortraw "{shorte8.decode()}":\n'
            f"  to_eutf8({shortraw}) != shorte8\n"
            f"  {to_eutf8(shortraw)} != \n  {shorte8}"
        )
        raise ValueError
    if shortraw != from_eutf8(shorte8):
        print(
            f'ERROR for shortraw "{shorte8.decode()}":\n'
            f"  shortraw != from_eutf8({shorte8})\n"
            f"  {shortraw} != \n  {from_eutf8(shorte8)}"
        )
        raise ValueError

    raw = (
        b"\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0A\x0B\x0C\x0D\x0E\x0F"
        b"\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F"
        b"\x20\x21\x22\x23\x24\x25\x26\x27\x28\x29\x2A\x2B\x2C\x2D\x2E\x2F"
        b"\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x3A\x3B\x3C\x3D\x3E\x3F"
        b"\x40\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F"
        b"\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x5B\x5C\x5D\x5E\x5F"
        b"\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F"
        b"\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x7B\x7C\x7D\x7E\x7F"
    )
    # This version of e8 escapes all of horizontal tabs (\x09), line feed (\x0A)
    # and carriage return (\x0D)
    e8 = (
        b"\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0A\\0B\\0C\\0D\\0E\\0F"
        b"\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
        b" !\"#$%&'()*+,-./"
        b"0123456789:;<=>?"
        b"@ABCDEFGHIJKLMNO"
        b"PQRSTUVWXYZ[\\]^_"
        b"`abcdefghijklmno"
        b"pqrstuvwxyz{|}~\\7F"
    )

    if to_eutf8(raw, escape_tab=True, escape_lf=True, escape_cr=True) != e8:
        print(
            f'ERROR for (ascii) "{e8.decode()}":\n'
            f"  to_eutf8({raw}) != e8\n"
            f"  {to_eutf8(raw)} != \n  {e8}"
        )
        raise ValueError
    if raw != from_eutf8(e8):
        print(
            f'ERROR for (ascii) "{e8.decode()}":\n'
            f"  raw != from_eutf8({e8})\n"
            f"  {raw} != \n  {from_eutf8(e8)}"
        )
        raise ValueError

    e8_tab = e8.replace(b"\\09", b"\x09")
    if to_eutf8(raw, escape_tab=False, escape_lf=True, escape_cr=True) != e8_tab:
        print(
            f'ERROR for (ascii tab) "{e8_tab.decode()}":\n'
            f"  to_eutf8({raw}) != e8_tab\n"
            f"  {to_eutf8(raw)} != \n  {e8_tab}"
        )
        raise ValueError
    if raw != from_eutf8(e8_tab):
        print(
            f'ERROR for (ascii tab) "{e8_tab.decode()}":\n'
            f"  raw != from_eutf8({e8_tab})\n"
            f"  {raw} != \n  {from_eutf8(e8_tab)}"
        )
        raise ValueError

    e8_lf = e8.replace(b"\\0A", b"\x0A")
    if to_eutf8(raw, escape_tab=True, escape_lf=False, escape_cr=True) != e8_lf:
        print(
            f'ERROR for (ascii lf) "{e8_lf.decode()}":\n'
            f"  to_eutf8({raw}) != e8_lf\n"
            f"  {to_eutf8(raw)} != \n  {e8_lf}"
        )
        raise ValueError
    if raw != from_eutf8(e8_lf):
        print(
            f'ERROR for (ascii lf) "{e8_lf.decode()}":\n'
            f"  raw != from_eutf8({e8_lf})\n"
            f"  {raw} != \n  {from_eutf8(e8_lf)}"
        )
        raise ValueError

    e8_cr = e8.replace(b"\\0D", b"\x0D")
    if to_eutf8(raw, escape_tab=True, escape_lf=True, escape_cr=False) != e8_cr:
        print(
            f'ERROR for (ascii cr) "{e8_cr.decode()}":\n'
            f"  to_eutf8({raw}) != e8_cr\n"
            f"  {to_eutf8(raw)} != \n  {e8_cr}"
        )
        raise ValueError
    if raw != from_eutf8(e8_cr):
        print(
            f'ERROR for (ascii cr) "{e8_cr.decode()}":\n'
            f"  raw != from_eutf8({e8_cr})\n"
            f"  {raw} != \n  {from_eutf8(e8_cr)}"
        )
        raise ValueError

    e8_tablfcr = (
        e8.replace(b"\\09", b"\t").replace(b"\\0A", b"\n").replace(b"\\0D", b"\r")
    )
    if to_eutf8(raw, escape_tab=False, escape_lf=False, escape_cr=False) != e8_tablfcr:
        print(
            f'ERROR for (ascii tablfcr) "{e8_tablfcr.decode()}":\n'
            f"  to_eutf8({raw}) != e8_tablfcr\n"
            f"  {to_eutf8(raw)} != \n  {e8_tablfcr}"
        )
        raise ValueError
    if raw != from_eutf8(e8_tablfcr):
        print(
            f'ERROR for (ascii tablfcr) "{e8_tablfcr.decode()}":\n'
            f"  raw != from_eutf8({e8_tablfcr})\n"
            f"  {raw} != \n  {from_eutf8(e8_tablfcr)}"
        )
        raise ValueError

    for raw, e8 in testdata:
        print(f'"{e8.decode()}":   ', raw, e8, to_eutf8(raw), from_eutf8(e8))
        if to_eutf8(raw, escape_tab=False, escape_lf=False, escape_cr=False) != e8:
            print(
                f'ERROR for "{e8.decode()}":\n'
                f"  to_eutf8({raw}) != e8\n"
                f"  {to_eutf8(raw, escape_tab=False, escape_lf=False, escape_cr=False)} != \n  {e8}"
            )
            raise ValueError
        if raw != from_eutf8(e8):
            print(
                f'ERROR for "{e8.decode()}":\n'
                f"  raw != from_eutf8({e8})\n"
                f"  {raw} != \n  {from_eutf8(e8)}"
            )
            raise ValueError

    # Read a file containing a variety of valid UTF-8 text.  to_eutf8() of the
    # contents of this file with escape_tab, escape_lf, and escape_cr all False
    # should not change anything
    with open("../../test_data/UTF-8-demo.txt", "rb") as src:
        raw = src.read()
    # print(raw.decode())  # optionally uncomment this line to see the test file
    e8 = to_eutf8(raw, escape_tab=False, escape_lf=False, escape_cr=False)
    if raw != e8:
        print(
            "ERROR in to_eutf8(UTF-8-demo.txt).  Output should be unchanged"
            " from input but is not"
        )
    raw = from_eutf8(e8)
    if raw != e8:
        print(
            "ERROR in from_eutf8(UTF-8-demo.txt).  Output should be unchanged"
            " from input but is not"
        )

    # The eutf8 containing files for the following tests are not guaranteed to
    # be correct, since they were generated with eutf8_test.py.  However, their
    # use may be helpful to detect undesirable variation between the output of
    # different eutf8 implementations.  Use escape_tab=escape_lf=False, but
    # escape_cr=True as was used in add_bit_errors(), which created them.
    print("testing UTF-8-demo_BER0001.txt")
    with open("../../test_data/UTF-8-demo_BER0001.txt", "rb") as src:
        raw = src.read()
    with open("../../test_data/UTF-8-demo_BER0001_eutf8.txt", "rb") as src:
        e8 = src.read()
    if to_eutf8(raw, escape_tab=False, escape_lf=False, escape_cr=True) != e8:
        print(f"ERROR in to_eutf8(UTF-8-demo_BER0001.txt)")
        raise ValueError
    if raw != from_eutf8(e8):
        print(f"ERROR in from_eutf8(UTF-8-demo_BER0001_eutf8.txt)")
        raise ValueError

    print("testing UTF-8-demo_BER001.txt")
    with open("../../test_data/UTF-8-demo_BER001.txt", "rb") as src:
        raw = src.read()
    with open("../../test_data/UTF-8-demo_BER001_eutf8.txt", "rb") as src:
        e8 = src.read()
    if to_eutf8(raw, escape_tab=False, escape_lf=False, escape_cr=True) != e8:
        print(f"ERROR in to_eutf8(UTF-8-demo_BER001.txt)")
        raise ValueError
    if raw != from_eutf8(e8):
        print(f"ERROR in from_eutf8(UTF-8-demo_BER001_eutf8.txt)")
        raise ValueError

    print("testing UTF-8-demo_BER01.txt")
    with open("../../test_data/UTF-8-demo_BER01.txt", "rb") as src:
        raw = src.read()
    with open("../../test_data/UTF-8-demo_BER01_eutf8.txt", "rb") as src:
        e8 = src.read()
    if to_eutf8(raw, escape_tab=False, escape_lf=False, escape_cr=True) != e8:
        print(f"ERROR in to_eutf8(UTF-8-demo_BER01.txt)")
        raise ValueError
    if raw != from_eutf8(e8):
        print(f"ERROR in from_eutf8(UTF-8-demo_BER01_eutf8.txt)")
        raise ValueError


# Create 3 copies of UTF-8-demo.txt with bit error rates of 0.01, 0.001, 0.0001
# add_bit_errors(
#    "../../test_data/UTF-8-demo.txt", "../../test_data/UTF-8-demo_BER01.txt",
#    0.01, "../../test_data/UTF-8-demo_BER01_eutf8.txt")
# add_bit_errors(
#    "../../test_data/UTF-8-demo.txt", "../../test_data/UTF-8-demo_BER001.txt",
#    0.001, "../../test_data/UTF-8-demo_BER001_eutf8.txt")
# add_bit_errors(
#    "../../test_data/UTF-8-demo.txt", "../../test_data/UTF-8-demo_BER0001.txt",
#    0.0001, "../../test_data/UTF-8-demo_BER0001_eutf8.txt")

# Use the Linux base64 utility to convert the files containg errors text strings
# for easy inclusion in test.html (for testing of the js implementation).
# Because these files contain invalid text, they cannot be included in an HTML
# or js file as text.

test()

print("test some random data")
# Small length and large count produce highest max expansion factor.
# Large length and large count give better average values
rnd_eutf8_test(100, 20, escape_tab=True, escape_lf=True, escape_cr=True)

print("Tests successfully completed.")
