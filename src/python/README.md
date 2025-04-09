# eutf8 and easc in Python

This directory contains the reference implementations for [eutf8](../../eutf8.md) and [easc](../../easc.md) written in Python.  They have no dependencies outside the standard library.  They have been tested on Linux and Windows.

`eutf8.py` contains the `to_euft8()` and `from_eutf8()` functions.

`easc.py` contains the `to_easc()` and `from_easc()` functions.

Both of these files can also be run as command line tools.

`eutf8_test.py` and `easc_test.py` runs tests that confirm that both encoding/decoding functions work as expected and that they are reversible.

`eutf8.py -h` displays the following help screen.  Operation of `easc.py` is almost identical, and both are very similar to the C based tools found in another source directory.

```
usage: eutf8.py [-h] [-v] [-d] [-t] [-n] [-r] srcpath [dstpath]

eutf8.py (escaped UTF-8) v0.9.0
Encode a file that contains any mix of UTF-8 encoded text and arbitrary byte data
(including corrupted UTF-8 text) to eutf8 format.  This encoding is guaranteed to be
valid UTF-8 encoded text, and is intended to be as human readable as possible.

This implementation does not work well for very large files.
See https://www.GitHub.com/pflarue/eutf8 for more information and for free reference
implementations for encoding and decoding eutf8 in C, Python, and JavaScript.

positional arguments:
  srcpath        pathname of file to read
  dstpath        if provided, encoded or decoded output is written there. Otherwise,
                   eutf8 encoded output is printed as UTF-8 text, or decoded raw data
                   is printed as hex. WARNING: existing dstpath is overwritten

options:
  -h, --help     show this help message and exit
  -v, --version  print the version number and exit
  -d, --decode   decode srcfile from eutf8 to raw data, else encode to eutf8
  -t, --tab      escape horizontal tab characters (\t 0x09) when encoding
  -n, --lf       escape linefeed characters (\n 0x0A) when encoding
  -r, --cr       escape carriage return characters (\r 0x0D) when encoding.
                   This option is recommended where \r is not used for line
                   endings (Linux and newer MacOS)

So: eutf8.py -r src.dat
  prints the contents of any file in a format that is as human readable as possible,
And: eutf8.py -r src.dat dst.txt
  creates a file using that same eutf8 encoded format (which is also valid UTF-8),
Where: eutf8.py -d dst.txt restored.dat
  uses dst.txt to create restored.dat, which is identical to src.dat.
```
