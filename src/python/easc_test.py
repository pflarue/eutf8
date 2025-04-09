#! /usr/bin/python

import sys
from random import randbytes, random

from easc import to_easc, from_easc


##########################################################################
# Run this test script from src/py to correctly find the test data files #
##########################################################################


def rnd_easc_test(length, count, escape_tab=False, escape_lf=False, escape_cr=False):
    """Test whether data == from_easc(to_easc(data)) for random data

    length: The number of random bytes used for each tests
    count: The number of tests run

    This also prints the ratio of encoded length to raw data length.
    """

    sum_length = 0
    max_factor = 0
    for cnt in range(count):
        bdata = randbytes(length)
        # print(bdata)
        eascdata = to_easc(
            bdata, escape_tab=escape_tab, escape_lf=escape_lf, escape_cr=escape_cr
        )
        sum_length += len(eascdata)
        try:
            restoreddata = from_easc(eascdata)
        except ValueError:
            print(bdata)
            print(eascdata)
            raise
        if bdata != restoreddata:
            print(bdata)
            print(eascdata)
            print(restoreddata)
            raise ValueError("easc round trip error.")
        if len(eascdata) / len(bdata) > max_factor:
            max_factor = len(eascdata) / len(bdata)
        try:
            print(
                round(len(eascdata) / len(bdata), 3),
                eascdata.decode("ascii")[:80],
                "..." if len(eascdata) > 80 else "",
            )
        except UnicodeDecodeError:
            print(bdata)
            print(eascdata)
            raise ValueError("eascdata is not valid printable ASCII")
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
# If eascdstpth is not None, then also write to that file the error containing
# data encoded as easc with escape_tabs and escape_lf both false, but escape_cr
# true.  ASCII-demo.txt has unix line endings (\x0A).  So, retain these and
# tabs, but escape any carriage returns.  Since carriage returns are not present
# in the source, they are the result of bit errors.
def add_bit_errors(srcpath, dstpath, biterrorrate, eascdstpath):
    print(f"Creating {dstpath} from {srcpath} with biterrorrate={biterrorrate}")
    with open(srcpath, "rb") as src:
        data = bytearray(src.read())
    for i in range(len(data) * 8):
        # i is a bit number in srcdata
        if random() < biterrorrate:
            data[i // 8] ^= 1 << (7 - (i % 8))
    try:
        data.decode("ascii")
    except UnicodeDecodeError:
        print(f"As expected: {dstpath} is not valid ASCII text")
    with open(dstpath, "wb") as dst:
        dst.write(data)
    if eascdstpath is not None:
        ea = to_easc(data, escape_tab=False, escape_lf=False, escape_cr=True)
        try:
            ea.decode("ascii")
        except UnicodeDecodeError:
            print(f"ERROR: {eascdstpath} is not valid ASCII text")
        with open(eascdstpath, "wb") as dst:
            dst.write(ea)


def test():
    # Notice that none of the elements of testdata[] include a
    # NULL (\x00 -> \\00).  This allows other implementations of easc which
    # are expected to use this same set of tests to use a string length
    # function to determine the size of these elements.  An element containing
    # a NULL (\x00) would then ignore any data after the NULL.
    # Later tests do include NULL characters to verify that to_easc() handles
    # these correctly.
    #
    # testdata contains byte data values for pairs of raw byte data and
    # equivalent easc data.
    # TODO: Review and expand this test set to be more rigorous
    testdata = [
        # ASCII text with tab, lf, and cr
        [b"This\tis a\r\ntest", b"This\tis a\r\ntest"],
        # Various backslashes in source data with no change required
        [
            b"\\AX \\XA \\ab \\aB \\Ab \\.X",
            b"\\AX \\XA \\ab \\aB \\Ab \\.X",
        ],
        # Backslash + HH.  dot required
        [b"\\FF", b"\\.FF"],
        # Backslash + dot + hex.  additional dot required
        [b"\\.AB", b"\\..AB"],

        # Multiple dots after a backslash and followed by two upper
        # case hex digits.  The easc encoding adds additional dots
        [b"\\DD \\.F0 \\...CA", b"\\.DD \\..F0 \\....CA"],
        # This sequence with the last byte omitted such that an dot
        # not added
        [b"\\DD \\.F0 \\...C", b"\\.DD \\..F0 \\...C"],
        # This sequence with the last two bytes omitted such that an additional
        # dot is not added
        [b"\\DD \\.F0 \\...", b"\\.DD \\..F0 \\..."],

        # Ending with a single dot after a backslash and followed
        # by two upper case hex digits.  The easc encoding adds additional dots.
        [b"\\DD \\.F0", b"\\.DD \\..F0"],
        # This sequence with the last byte omitted such that an additional dot
        # is not added
        [b"\\DD \\.F", b"\\.DD \\.F"],
        # This sequence with the last two bytes omitted such that an additional
        # dot is not added
        [b"\\DD \\.", b"\\.DD \\."],
        # This sequence with the last three bytes omitted such that it ends with
        # a backslash
        [b"\\DD \\", b"\\.DD \\"],

        # Ending with a backslash and followed by two upper case hex digits.
        # The easc encoding adds a dot.
        [b"\\DD \\BC", b"\\.DD \\.BC"],
        # This sequence with the last byte omitted such that a dot
        # is not added
        [b"\\DD \\B", b"\\.DD \\B"],
        # This sequence with the last two bytes omitted such that it ends with
        # a backslash
        [b"\\DD \\", b"\\.DD \\"],
        # empty input
        [b"", b""],
        # An example where the easc version is three times as long as raw
        [b"\xE2\x80\xF4\x9A", b"\\E2\\80\\F4\\9A"],  # 4 bytes -> 12 bytes
    ]

    # This test ensures that \x00 isn't mistakenly interpreted as an upper case
    # hex digit, as was the case in an early development version of easc.c
    # Because of the NULL, strlen(shortraw) isn't valid, so this cannot be
    # included in testdata[].
    shortraw = b"\\\x00CF"
    shortea = b"\\\\00CF"

    if to_easc(shortraw) != shortea:
        print(
            f'ERROR for shortraw "{shortea.decode("ascii")}":\n'
            f"  to_easc({shortraw}) != shortea\n"
            f"  {to_easc(shortraw)} != \n  {shortea}"
        )
        raise ValueError
    if shortraw != from_easc(shortea):
        print(
            f'ERROR for shortraw "{shortea.decode("ascii")}":\n'
            f"  shortraw != from_easc({shortea})\n"
            f"  {shortraw} != \n  {from_easc(shortea)}"
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
    # This version of ea escapes all of horizontal tabs (\x09), line feed (\x0A)
    # and carriage return (\x0D)
    ea = (
        b"\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0A\\0B\\0C\\0D\\0E\\0F"
        b"\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
        b" !\"#$%&'()*+,-./"
        b"0123456789:;<=>?"
        b"@ABCDEFGHIJKLMNO"
        b"PQRSTUVWXYZ[\\]^_"
        b"`abcdefghijklmno"
        b"pqrstuvwxyz{|}~\\7F"
    )

    if to_easc(raw, escape_tab=True, escape_lf=True, escape_cr=True) != ea:
        print(
            f'ERROR for (ascii) "{ea.decode("ascii")}":\n'
            f"  to_easc({raw}) != ea\n"
            f"  {to_easc(raw)} != \n  {ea}"
        )
        raise ValueError
    if raw != from_easc(ea):
        print(
            f'ERROR for (ascii) "{ea.decode("ascii")}":\n'
            f"  raw != from_easc({ea})\n"
            f"  {raw} != \n  {from_easc(ea)}"
        )
        raise ValueError

    ea_tab = ea.replace(b"\\09", b"\x09")
    if to_easc(raw, escape_tab=False, escape_lf=True, escape_cr=True) != ea_tab:
        print(
            f'ERROR for (ascii tab) "{ea_tab.decode("ascii")}":\n'
            f"  to_easc({raw}) != ea_tab\n"
            f"  {to_easc(raw)} != \n  {ea_tab}"
        )
        raise ValueError
    if raw != from_easc(ea_tab):
        print(
            f'ERROR for (ascii tab) "{ea_tab.decode("ascii")}":\n'
            f"  raw != from_easc({ea_tab})\n"
            f"  {raw} != \n  {from_easc(ea_tab)}"
        )
        raise ValueError

    ea_lf = ea.replace(b"\\0A", b"\x0A")
    if to_easc(raw, escape_tab=True, escape_lf=False, escape_cr=True) != ea_lf:
        print(
            f'ERROR for (ascii lf) "{ea_lf.decode("ascii")}":\n'
            f"  to_easc({raw}) != ea_lf\n"
            f"  {to_easc(raw)} != \n  {ea_lf}"
        )
        raise ValueError
    if raw != from_easc(ea_lf):
        print(
            f'ERROR for (ascii lf) "{ea_lf.decode("ascii")}":\n'
            f"  raw != from_easc({ea_lf})\n"
            f"  {raw} != \n  {from_easc(ea_lf)}"
        )
        raise ValueError

    ea_cr = ea.replace(b"\\0D", b"\x0D")
    if to_easc(raw, escape_tab=True, escape_lf=True, escape_cr=False) != ea_cr:
        print(
            f'ERROR for (ascii cr) "{ea_cr.decode("ascii")}":\n'
            f"  to_easc({raw}) != ea_cr\n"
            f"  {to_easc(raw)} != \n  {ea_cr}"
        )
        raise ValueError
    if raw != from_easc(ea_cr):
        print(
            f'ERROR for (ascii cr) "{ea_cr.decode("ascii")}":\n'
            f"  raw != from_easc({ea_cr})\n"
            f"  {raw} != \n  {from_easc(ea_cr)}"
        )
        raise ValueError

    ea_tablfcr = (
        ea.replace(b"\\09", b"\t").replace(b"\\0A", b"\n").replace(b"\\0D", b"\r")
    )
    if to_easc(raw, escape_tab=False, escape_lf=False, escape_cr=False) != ea_tablfcr:
        print(
            f'ERROR for (ascii tablfcr) "{ea_tablfcr.decode("ascii")}":\n'
            f"  to_easc({raw}) != ea_tablfcr\n"
            f"  {to_easc(raw)} != \n  {ea_tablfcr}"
        )
        raise ValueError
    if raw != from_easc(ea_tablfcr):
        print(
            f'ERROR for (ascii tablfcr) "{ea_tablfcr.decode("ascii")}":\n'
            f"  raw != from_easc({ea_tablfcr})\n"
            f"  {raw} != \n  {from_easc(ea_tablfcr)}"
        )
        raise ValueError

    for raw, ea in testdata:
        print(ea, ea)
        print(f'"{ea.decode("ascii")}":   ', raw, ea, to_easc(raw), from_easc(ea))
        if to_easc(raw, escape_tab=False, escape_lf=False, escape_cr=False) != ea:
            print(
                f'ERROR for "{ea.decode("ascii")}":\n'
                f"  to_easc({raw}) != ea\n"
                f"  {to_easc(raw, escape_tab=False, escape_lf=False, escape_cr=False)} != \n  {ea}"
            )
            raise ValueError
        if raw != from_easc(ea):
            print(
                f'ERROR for "{ea.decode("ascii")}":\n'
                f"  raw != from_easc({ea})\n"
                f"  {raw} != \n  {from_easc(ea)}"
            )
            raise ValueError

    # Read a file containing a variety of valid ASCII text.  to_easc() of the
    # contents of this file with escape_tab, escape_lf, and escape_cr all False
    # should not change anything
    with open("../../test_data/ASCII-demo.txt", "rb") as src:
        raw = src.read()
    # print(raw.decode("ascii"))  # optionally uncomment this line to see the test file
    ea = to_easc(raw, escape_tab=False, escape_lf=False, escape_cr=False)
    if raw != ea:
        print(
            "ERROR in to_easc(ASCII-demo.txt).  Output should be unchanged"
            " from input but is not"
        )
    raw = from_easc(ea)
    if raw != ea:
        print(
            "ERROR in from_easc(ASCII-demo.txt).  Output should be unchanged"
            " from input but is not"
        )

"""
    # The easc containing files for the following tests are not guaranteed to
    # be correct, since they were generated with easc_test.py.  However, their
    # use may be helpful to detect undesirable variation between the output of
    # different easc implementations.  Use escape_tab=escape_lf=False, but
    # escape_cr=True as was used in add_bit_errors(), which created them.
    print("testing ASCII-demo_BER0001.txt")
    with open("../../test_data/ASCII-demo_BER0001.txt", "rb") as src:
        raw = src.read()
    with open("../../test_data/ASCII-demo_BER0001_easc.txt", "rb") as src:
        ea = src.read()
    if to_easc(raw, escape_tab=False, escape_lf=False, escape_cr=True) != ea:
        print(f"ERROR in to_easc(ASCII-demo_BER0001.txt)")
        raise ValueError
    if raw != from_easc(ea):
        print(f"ERROR in from_easc(ASCII-demo_BER0001_easc.txt)")
        raise ValueError

    print("testing ASCII-demo_BER001.txt")
    with open("../../test_data/ASCII-demo_BER001.txt", "rb") as src:
        raw = src.read()
    with open("../../test_data/ASCII-demo_BER001_easc.txt", "rb") as src:
        ea = src.read()
    if to_easc(raw, escape_tab=False, escape_lf=False, escape_cr=True) != ea:
        print(f"ERROR in to_easc(ASCII-demo_BER001.txt)")
        raise ValueError
    if raw != from_easc(ea):
        print(f"ERROR in from_easc(ASCII-demo_BER001_easc.txt)")
        raise ValueError

    print("testing ASCII-demo_BER01.txt")
    with open("../../test_data/ASCII-demo_BER01.txt", "rb") as src:
        raw = src.read()
    with open("../../test_data/ASCII-demo_BER01_easc.txt", "rb") as src:
        ea = src.read()
    if to_easc(raw, escape_tab=False, escape_lf=False, escape_cr=True) != ea:
        print(f"ERROR in to_easc(ASCII-demo_BER01.txt)")
        raise ValueError
    if raw != from_easc(ea):
        print(f"ERROR in from_easc(ASCII-demo_BER01_easc.txt)")
        raise ValueError
"""

# Create 3 copies of ASCII-demo.txt with bit error rates of 0.01, 0.001, 0.0001
# add_bit_errors(
#     "../../test_data/ASCII-demo.txt", "../../test_data/ASCII-demo_BER01.txt",
#     0.01, "../../test_data/ASCII-demo_BER01_easc.txt")
# add_bit_errors(
#     "../../test_data/ASCII-demo.txt", "../../test_data/ASCII-demo_BER001.txt",
#     0.001, "../../test_data/ASCII-demo_BER001_easc.txt")
# The following took several runs before it produced something that was not
# valid printable ASCII.
# add_bit_errors(
#     "../../test_data/ASCII-demo.txt", "../../test_data/ASCII-demo_BER0001.txt",
#     0.0001, "../../test_data/ASCII-demo_BER0001_easc.txt")

# Use the Linux base64 utility to convert the files containg errors text strings
# for easy inclusion in test.html (for testing of the js implementation).
# Because these files contain invalid text, they cannot be included in an HTML
# or js file as text.

test()

print("test some random data")
# Small length and large count produce highest max expansion factor.
# Large length and large count give better average values
rnd_easc_test(100, 20, escape_tab=True, escape_lf=True, escape_cr=True)

print("Tests successfully completed.")
