#! /usr/bin/python

"""
Functions to convert data to/from eutf8 (escaped utf-8) encoding.

See eutf8.md for details about the properties and usefulness of eutf8 encoding.
"""

# These implementations of to_eutf8() and from_eutf8() are functional, but not
# optimized.  The logic of to_eutf8() should be easy enough to follow when
# compared to the content of Table 3-7, Well-Formed UTF-8 Byte Sequences, in
# the Unicode standard along with the Unicode Private-Use Characters,
# Noncharacters & Sentinels FAQ

eutf8_version = "0.9.0"

def from_eutf8(data):
    """Return a copy of the raw bytes object used to create a eutf8 object"""

    output = b""
    index = 0
    while (offset := data.find(b"\\", index)) != -1:
        output += data[index:offset]
        if len(data) > offset + 5 and data[offset + 1 : offset + 4] == b"\xE2\x80\x8B":
            # This Zero Width Space was probabaly inserted after the backslash
            # by to_eutf8(), but only if it is followed by zero or more
            # additional Zero Width Spaces and then two uppercase hex digits.
            zws_cnt = 1
            while len(data) > offset + 3 * (zws_cnt + 1) + 2 and (
                data[offset + 3 * zws_cnt + 1 : offset + 3 * zws_cnt + 4]
                == b"\xE2\x80\x8B"
            ):
                zws_cnt += 1
            if (
                data[offset + 3 * zws_cnt + 1] in b"0123456789ABCDEF"
                and data[offset + 3 * zws_cnt + 2] in b"0123456789ABCDEF"
            ):
                # Remove the first Unicode Zero Width Space after the backslash
                output += data[offset : offset + 1]
                index = offset + 4
            else:
                # The Zero Width Space after the backslash was not inserted by
                # to_eutf8(), so ignore it.
                output += data[offset : offset + 1]
                index = offset + 1
        elif (
            len(data) > offset + 2
            and data[offset + 1] in b"0123456789ABCDEF"
            and data[offset + 2] in b"0123456789ABCDEF"
        ):
            # restore escaped byte
            output += bytes.fromhex(data[offset + 1 : offset + 3].decode())
            index = offset + 3
        else:
            # This backslash is not part of an escape and did not require a Zero
            # Width Space to be added after it to prevent it from being
            # misinterpreted as part of an escape.
            output += data[offset : offset + 1]
            index = offset + 1
    output += data[index:]
    return output


def to_eutf8(data, escape_tab=False, escape_lf=False, escape_cr=False):
    """Return a eutf8 encoded bytes object created from any bytes object"""
    output = b""
    index = 0
    while len(data) > index:
        if 0x80 <= data[index] <= 0xC1 or 0xF5 <= data[index]:
            # Not UTF-8
            # Escape 1 byte
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue

        if data[index] <= 0x7F:
            # Valid 1-byte UTF-8
            if (
                data[index] <= 0x08
                or (data[index] == 0x09 and escape_tab is True)
                or (data[index] == 0x0A and escape_lf is True)
                or 0x0B <= data[index] <= 0x0C
                or (data[index] == 0x0D and escape_cr is True)
                or 0x0E <= data[index] <= 0x1F
                or data[index] == 0x7F
            ):
                # This is a C0 control code, so escape anyways
                output += f"\\{data[index]:02X}".encode()
                index += 1
                continue
            if data[index] == 0x5C:  # backslash
                # Insert a Zero Width Space after the backslash only if it is
                # followed by zero or more additional Zero Width Spaces and then
                # two uppercase hex digits.
                # While parsing multiple additional characters, check for end
                # of data.
                zws_cnt = 0  # Number of existing Zero Width Spaces found
                while len(data) > index + 3 * zws_cnt + 3 and (
                    data[index + 3 * zws_cnt + 1 : index + 3 * zws_cnt + 4]
                    == b"\xE2\x80\x8B"
                ):
                    zws_cnt += 1

                if (
                    len(data) > index + 3 * zws_cnt + 2
                    and data[index + 3 * zws_cnt + 1] in b"0123456789ABCDEF"
                    and data[index + 3 * zws_cnt + 2] in b"0123456789ABCDEF"
                ):
                    # Add a Unicode Zero Width Space (U+200b) after the
                    # backslash '\' (0x5C).  This prevents from_eutf8() from
                    # mistaking this for an escape sequence or from removing the
                    # zws_cnt Zero Width Spaces that are a part of the source
                    # data.  The latter is probably unlikely, but is possible.
                    # UTF-8 encoding of U+200b is the three byte sequence
                    # 0xE2, 0x80, 0x8B.
                    output += (
                        b"\\\xE2\x80\x8B" + data[index + 1 : index + 3 * zws_cnt + 3]
                    )
                    index += 3 * zws_cnt + 3
                    continue
            # copy 1-byte output.  This might be a backslash.
            output += data[index : index + 1]
            index += 1
            continue

        if len(data) <= index + 1:
            # data[index] may be the first byte of a multi-byte UTF-8 sequence,
            # but the required number of additional bytes are not available.
            # Escape 1 byte
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue

        if 0xC2 <= data[index] <= 0xDF:
            if 0x80 <= data[index + 1] <= 0xBF:
                # Valid 2-byte UTF-8
                if (data[index] == 0xC2) and (data[index + 1] <= 0x9F):
                    # This is a C1 control code, so escape anyways
                    # When valid UTF-8 is escaped, escape all bytes since
                    # following bytes are not valid as first byte of UTF-8.
                    output += f"\\{data[index]:02X}\\{data[index + 1]:02X}".encode()
                    index += 2
                    continue
                # copy 2-bytes to output
                output += data[index : index + 2]
                index += 2
                continue
            # Not UTF-8.  Escape 1 byte
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue

        if len(data) <= index + 2:
            # data[index] may be the first byte of a multi-byte UTF-8 sequence,
            # but the required number of additional bytes are not available.
            # Escape 1 byte
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue

        if data[index] == 0xE0:
            if (0xA0 <= data[index + 1] <= 0xBF) and (0x80 <= data[index + 2] <= 0xBF):
                # Valid 3-byte UTF-8
                # copy 3-bytes to output
                output += data[index : index + 3]
                index += 3
                continue
            # Not UTF-8.  Escape 1 byte
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue

        if 0xE1 <= data[index] <= 0xEC:
            if (0x80 <= data[index + 1] <= 0xBF) and (0x80 <= data[index + 2] <= 0xBF):
                # Valid 3-byte UTF-8
                # copy 3-bytes to output
                output += data[index : index + 3]
                index += 3
                continue
            # Not UTF-8.  Escape 1 byte
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue

        if data[index] == 0xED:
            if (0x80 <= data[index + 1] <= 0x9F) and (0x80 <= data[index + 2] <= 0xBF):
                # Valid 3-byte UTF-8
                # copy 3-bytes to output
                output += data[index : index + 3]
                index += 3
                continue
            # Not UTF-8.  Escape 1 byte
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue

        if 0xEE <= data[index] <= 0xEF:
            if (0x80 <= data[index + 1] <= 0xBF) and (0x80 <= data[index + 2] <= 0xBF):
                # Valid 3-byte UTF-8
                if data[index + 1] <= 0xA3:
                    # This is a private use character, so escape anyways.
                    # When valid UTF-8 is escaped, escape all bytes since
                    # following bytes are not valid as first byte of UTF-8.
                    output += (
                        f"\\{data[index]:02X}\\{data[index + 1]:02X}"
                        f"\\{data[index + 2]:02X}"
                    ).encode()
                    index += 3
                    continue
                if (data[index] == 0xEF) and (
                    ((data[index + 1] == 0xB7) and (0x90 <= data[index + 2] <= 0xAF))
                    or ((data[index + 1] == 0xBF) and (0xBE <= data[index + 2]))
                ):
                    # This is a noncharacter, so escape it anyways.
                    # When valid UTF-8 is escaped, escape all bytes since
                    # following bytes are not valid as first byte of UTF-8.
                    output += (
                        f"\\{data[index]:02X}\\{data[index + 1]:02X}"
                        f"\\{data[index + 2]:02X}"
                    ).encode()
                    index += 3
                    continue
                # Valid 3-byte UTF-8
                # copy 3-bytes to output
                output += data[index : index + 3]
                index += 3
                continue
            # Not UTF-8.  Escape 1 byte
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue

        if len(data) <= index + 3:
            # data[index] may be the first byte of a multi-byte UTF-8 sequence,
            # but the required number of additional bytes are not available.
            # Escape 1 byte
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue

        if data[index] == 0xF0:
            if (
                (0x90 <= data[index + 1] <= 0xBF)
                and (0x80 <= data[index + 2] <= 0xBF)
                and (0x80 <= data[index + 3] <= 0xBF)
            ):
                # Valid 4-byte UTF-8
                if (
                    (data[index + 1] & 0x0F == 0x0F)
                    and (data[index + 2] == 0xBF)
                    and (data[index + 3] >= 0xBE)
                ):
                    # This is a noncharacter, so escape it anyways.
                    # When valid UTF-8 is escaped, escape all bytes since
                    # following bytes are not valid as first byte of UTF-8.
                    output += (
                        f"\\{data[index]:02X}\\{data[index + 1]:02X}"
                        f"\\{data[index + 2]:02X}\\{data[index + 3]:02X}"
                    ).encode()
                    index += 4
                    continue
                # Valid 4-byte UTF-8
                # copy 4-bytes to output
                output += data[index : index + 4]
                index += 4
                continue
            # Not UTF-8.  Escape 1 byte
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue

        if 0xF1 <= data[index] <= 0xF3:
            if (
                (0x80 <= data[index + 1] <= 0xBF)
                and (0x80 <= data[index + 2] <= 0xBF)
                and (0x80 <= data[index + 3] <= 0xBF)
            ):
                # Valid 4-byte UTF-8
                if (
                    (data[index + 1] & 0x0F == 0x0F)
                    and (data[index + 2] == 0xBF)
                    and (data[index + 3] >= 0xBE)
                ):
                    # This is a noncharacter, so escape it anyways.
                    # When valid UTF-8 is escaped, escape all bytes since
                    # following bytes are not valid as first byte of UTF-8.
                    output += (
                        f"\\{data[index]:02X}\\{data[index + 1]:02X}"
                        f"\\{data[index + 2]:02X}\\{data[index + 3]:02X}"
                    ).encode()
                    index += 4
                    continue
                if (
                    (data[index] == 0xF3)
                    and (0xB0 <= data[index + 1])
                    and (data[index + 3] <= 0xBD)
                ):
                    # This is a private use character, so escape anyways.
                    # When valid UTF-8 is escaped, escape all bytes since
                    # following bytes are not valid as first byte of UTF-8.
                    output += (
                        f"\\{data[index]:02X}\\{data[index + 1]:02X}"
                        f"\\{data[index + 2]:02X}\\{data[index + 3]:02X}"
                    ).encode()
                    index += 4
                    continue
                # Valid 4-byte UTF-8
                # copy 4-bytes to output
                output += data[index : index + 4]
                index += 4
                continue
            # Not UTF-8.  Escape 1 byte
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue

        if data[index] == 0xF4:
            if (
                (0x80 <= data[index + 1] <= 0x8F)
                and (0x80 <= data[index + 2] <= 0xBF)
                and (0x80 <= data[index + 3] <= 0xBF)
            ):
                # Valid 4-byte UTF-8
                if (
                    (data[index + 1] == 0x8F)
                    and (data[index + 2] == 0xBF)
                    and (data[index + 3] >= 0xBE)
                ):
                    # This is a noncharacter, so escape it anyways.
                    # When valid UTF-8 is escaped, escape all bytes since
                    # following bytes are not valid as first byte of UTF-8.
                    output += (
                        f"\\{data[index]:02X}\\{data[index + 1]:02X}"
                        f"\\{data[index + 2]:02X}\\{data[index + 3]:02X}"
                    ).encode()
                    index += 4
                    continue
                if data[index + 3] <= 0xBD:
                    # This is a private use character, so escape anyways.
                    # When valid UTF-8 is escaped, escape all bytes since
                    # following bytes are not valid as first byte of UTF-8.
                    output += (
                        f"\\{data[index]:02X}\\{data[index + 1]:02X}"
                        f"\\{data[index + 2]:02X}\\{data[index + 3]:02X}"
                    ).encode()
                    index += 4
                    continue
                # Valid 4-byte UTF-8
                # copy 4-bytes to output
                output += data[index : index + 4]
                index += 4
                continue
            # Not UTF-8.  Escape 1 byte
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue
        # shouldn't get here
        print(f"WARNING: Logic error in to_eutf8() for data[{index}]={data[index]}")
        # Escape 1 byte
        output += f"\\{data[index]:02X}".encode()
        index += 1
    return output


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(
        formatter_class=argparse.RawTextHelpFormatter,
        # Couldn't figure out how to make --version work without making srcpath
        # optional.  So, override usage to make srcpath appear required.
        usage="%(prog)s [-h] [-v] [-d] [-t] [-n] [-r] srcpath [dstpath]",
        description=
f"""eutf8.py (escaped UTF-8) v{eutf8_version}
Encode a file that contains any mix of UTF-8 encoded text and arbitrary byte data
(including corrupted UTF-8 text) to eutf8 format.  This encoding is guaranteed to be
valid UTF-8 encoded text, and is intended to be as human readable as possible.

This implementation does not work well for very large files.
See https://www.GitHub.com/pflarue/eutf8 for more information and for free reference
implementations for encoding and decoding eutf8 in C, Python, and JavaScript.
""",
        epilog="""\
So: eutf8.py -r src.dat
  prints the contents of any file in a format that is as human readable as possible,
And: eutf8.py -r src.dat dst.txt
  creates a file using that same eutf8 encoded format (which is also valid UTF-8),
Where: eutf8.py -d dst.txt restored.dat
  uses dst.txt to create restored.dat, which is identical to src.dat.""")

    parser.add_argument("-v", "--version", action="store_true",
        help="print the version number and exit")
    parser.add_argument("-d", "--decode", action="store_true",
        help="decode srcfile from eutf8 to raw data, else encode to eutf8")
    parser.add_argument("-t", "--tab", action="store_true",
        help="escape horizontal tab characters (\\t 0x09) when encoding")
    parser.add_argument("-n", "--lf", action="store_true",
        help="escape linefeed characters (\\n 0x0A) when encoding")
    parser.add_argument("-r", "--cr", action="store_true",
        help="""\
escape carriage return characters (\\r 0x0D) when encoding.
  This option is recommended where \\r is not used for line
  endings (Linux and newer MacOS)""")
    # Couldn't figure out how to make --version work without making srcpath
    # optional
    parser.add_argument("srcpath", nargs="?",
        help="pathname of file to read")
    parser.add_argument("dstpath", nargs="?", help="""\
if provided, encoded or decoded output is written there. Otherwise,
  eutf8 encoded output is printed as UTF-8 text, or decoded raw data
  is printed as hex. WARNING: existing dstpath is overwritten"""
)

    args = parser.parse_args()

    if args.version:
        print(f"eutf8 v{eutf8_version}")
        quit()

    if args.srcpath is None:
        # Couldn't figure out how to make --version work without making srcpath
        # optional.  So, enforce requirement here.
        print("ERROR: srcpath must be provided.  Use -h or --help to show help info.")
        quit()
    with open(args.srcpath, "rb") as f:
        srcdata = f.read();

    if args.decode:
        dstdata = from_eutf8(srcdata)
    else:
        dstdata = to_eutf8(srcdata, escape_tab=args.tab, escape_lf=args.lf,
            escape_cr=args.cr)

    if args.dstpath:
        with open(args.dstpath, "wb") as f:
            f.write(dstdata)
            print(f"Output written to {args.dstpath}")
    elif args.decode:
        print(dstdata)  # print bytes object
    else:
        print(dstdata.decode())  # print as unicode text
