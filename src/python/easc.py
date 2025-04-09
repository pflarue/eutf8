#! /usr/bin/python

"""
Functions to convert data to/from easc (escaped ASCII) encoding.

See easc.md for details about the properties and usefulness of easc encoding.
"""

# These implementations of to_easc() and from_easc() are functional, but not
# optimized.  The logic of to_easc() should be easy enough to follow.

easc_version = "0.9.0"

def from_easc(data):
    """Return a copy of the raw bytes object used to create a easc object"""

    output = b""
    index = 0
    while (offset := data.find(b"\\", index)) != -1:
        output += data[index:offset]
        if len(data) > offset + 3 and data[offset + 1] == 0x2E:  # dot '.'
            # This dot was probabaly inserted after the backslash by to_easc(),
            # but only if it is followed by zero or more additional dots and
            # then two uppercase hex digits.
            dot_cnt = 1
            while (len(data) > offset + (dot_cnt + 1) + 2
                and data[offset + dot_cnt + 1] == 0x2E  # dot '.'
            ):
                dot_cnt += 1
            if (
                data[offset + dot_cnt + 1] in b"0123456789ABCDEF"
                and data[offset + dot_cnt + 2] in b"0123456789ABCDEF"
            ):
                # Remove the first dot after the backslash
                output += data[offset : offset + 1]
                index = offset + 2
            else:
                # The dot after the backslash was not inserted by to_easc(), so
                # ignore it.
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
            # This backslash is not part of an escape and did not require a dot
            # to be added after it to prevent it from being misinterpreted as
            # part of an escape.
            output += data[offset : offset + 1]
            index = offset + 1
    output += data[index:]
    return output


def to_easc(data, escape_tab=False, escape_lf=False, escape_cr=False):
    """Return a easc encoded bytes object created from any bytes object"""
    output = b""
    index = 0
    while len(data) > index:
        if 0x7F <= data[index]:
            # Not printable ASCII (or 0x7F C0 control code)
            # Escape 1 byte
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue
        # valid ASCII
        if (
            data[index] <= 0x08
            or (data[index] == 0x09 and escape_tab is True)
            or (data[index] == 0x0A and escape_lf is True)
            or 0x0B <= data[index] <= 0x0C
            or (data[index] == 0x0D and escape_cr is True)
            or 0x0E <= data[index] <= 0x1F
        ):
            # This is a C0 control code, so escape anyways
            output += f"\\{data[index]:02X}".encode()
            index += 1
            continue
        if data[index] == 0x5C:  # backslash
            # Insert a dot after the backslash only if it is followed by zero or
            # more additional dots and then two uppercase hex digits.
            dot_cnt = 0  # Number of existing dots
            while len(data) > index + dot_cnt + 3 and (
                data[index + dot_cnt + 1] == 0x2E  # dot
            ):
                dot_cnt += 1
            if (
                len(data) > index + dot_cnt + 2
                and data[index + dot_cnt + 1] in b"0123456789ABCDEF"
                and data[index + dot_cnt + 2] in b"0123456789ABCDEF"
            ):
                # Add a dot '.' (0x2E) after the backslash '\' (0x5C).  This
                # prevents from_easc() from mistaking this for an escape
                # sequence or from removing the dot_cnt dots that are a part of
                # the source data.
                output += b"\\." + data[index + 1 : index + dot_cnt + 3]
                index += dot_cnt + 3
                continue
        # copy 1-byte output.  This might be a backslash.
        output += data[index : index + 1]
        index += 1
        continue
    return output


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(
        formatter_class=argparse.RawTextHelpFormatter,
        # Couldn't figure out how to make --version work without making srcpath
        # optional.  So, override usage to make srcpath appear required.
        usage="%(prog)s [-h] [-v] [-d] [-t] [-n] [-r] srcpath [dstpath]",
        description=
f"""easc.py (escaped ASCII) v{easc_version}
Encode a file that contains any mix of printable ASCII text and arbitrary byte data
to easc format.  This encoding is guaranteed to be printable ASCII text, and is
intended to be as human readable as possible.  If the source includes any non-ASCII
text (Extended ASCII, UTF-8, etc), then those characters are escaped.

This implementation does not work well for very large files.
See https://www.GitHub.com/pflarue/eutf8 for more information and for free reference
implementations for encoding and decoding easc in C, Python, and JavaScript.
""",
        epilog="""\
So: easc.py -r src.dat
  prints the contents of any file in a format that is as human readable as possible,
And: easc.py -r src.dat dst.txt
  creates a file using that same easc encoded format (which is also printable ASCII),
Where: easc.py -d dst.txt restored.dat
  uses dst.txt to create restored.dat, which is identical to src.dat.""")

    parser.add_argument("-v", "--version", action="store_true",
        help="print the version number and exit")
    parser.add_argument("-d", "--decode", action="store_true",
        help="decode srcfile from easc to raw data, else encode to easc")
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
  easc encoded output is printed as text, or decoded raw data
  is printed as hex. WARNING: existing dstpath is overwritten"""
)

    args = parser.parse_args()

    if args.version:
        print(f"easc v{easc_version}")
        quit()

    if args.srcpath is None:
        # Couldn't figure out how to make --version work without making srcpath
        # optional.  So, enforce requirement here.
        print("ERROR: srcpath must be provided.  Use -h or --help to show help info.")
        quit()
    with open(args.srcpath, "rb") as f:
        srcdata = f.read();

    if args.decode:
        dstdata = from_easc(srcdata)
    else:
        dstdata = to_easc(srcdata, escape_tab=args.tab, escape_lf=args.lf,
            escape_cr=args.cr)

    if args.dstpath:
        with open(args.dstpath, "wb") as f:
            f.write(dstdata)
            print(f"Output written to {args.dstpath}")
    elif args.decode:
        print(dstdata)  # print bytes object
    else:
        print(dstdata.decode())  # print as unicode text
