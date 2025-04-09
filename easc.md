## easc (escaped ASCII)

**The Problem:** How to print/log/display a byte sequence that may not be entirely valid ASCII text, such that any valid text is correctly displayed while any non-text bytes are also mostly recognizable?  The initial motivation for this is to log/display text data received over a radio link before error correction has been applied, or when error correction routines fail.  However, it has also proven useful to log/display received data that may intentionally include an unknown mix of non-text formatting/protocol bytes, ASCII text, and/or byte sequences resulting from data compression.

For a similar problem, but where the expected text may be UTF-8 encoded Unicode text rather than only printable ASCII, see also [eutf8 (escaped UTF-8)](eutf8.md) encoding.

**A proposed solution:**  easc (escaped ASCII) encoded data is guaranteed to be valid printable ASCII (which is not true of arbitrary binary data), such that it can be displayed/printed.  This encoding replaces any bytes in the source data that do not represent valid printable ASCII text with an escape format of `\HH`.  Here `HH` are two upper case hex digits (0-9, A-F).

`to_easc()` converts arbitrary byte sequences to easc format, while `from_easc()` converts easc formatted data back to the arbitrary byte sequence that it was created from.  The inputs and outputs of both of these functions are sequences of bytes, not null terminated strings.

In the reference implementations of `to_easc()`, C0 control codes, which are valid ASCII but are not printable, are also escaped because attempting to display/print these ASCII symbols that are not commonly found in printable text may have unexpected results.  Options available in these implementations allow the user to choose whether or not horizontal tab (\t 0x09), line feed (\n 0x0A), and carriage return (\r 0x0D) characters, all of which are C0 control codes, are escaped.

Wherever a backslash (`\`) followed by zero or more dots (`.`) and then two upper case hex digits is found in the raw source data, `to_easc()` also inserts a dot after the backslash.  This allows `from_easc()` to unambiguously restore the original source data from the easc data, while minimally changing the appearance of any valid ASCII text.  This differs from [eutf8](eutf8.md) encoded text which uses a non-visibile Unicode Zero Width Space to avoid encoding ambiguity while not changing the appearance of printed/displayed valid text.


### Properties and use cases for easc

In the following, Python syntax is used to describe the properties and usage of easc.  However, there is nothing Python specific about use of easc encoding.  Similar `to_easc()` and `from_easc()` functions can be written in any general purpose programming language.

Where `data` may be mostly valid printable ASCII text, but it contains one or more bytes of data that are not valid printable ASCII, `data.decode(encoding="ascii")` would raise a `UnicodeDecodeError`.  For this same `data`, `to_easc(data).decode(encoding="ascii")` succeeds and `print(to_easc(data).decode(encoding="ascii"))` produces mostly understandable text.

If `data` is valid printable ASCII text with no control codes other than horizontal tab, line feed, or carriage return characters, then the output of `print(data.decode(encoding="ascii"))` looks almost identical to `print(to_easc(data).decode(encoding="ascii"))`.  The only difference is the addtion of a dot wherever the source data might be misinterpreted as an easc escape, as described above.  In this case, the output of `to_easc(data)` may be larger than `data` but usually not by much.  In the worst case for entirely valid printable ASCII encoded text, data contains only sequences of a backslash followed by two uppercase hex digits, resulting in the output of `to_easc(data)` being one third larger than `data`.

If `data` is mostly valid printable ASCII text with a few bytes that are not valid printable ASCII, then `print(to_easc(data).decode(encoding="ascii"))` will show the valid ASCII encoded text correctly while printing `\HH` for each invalid byte.  Here `HH` are two upper case hex digits (0-9, A-F).  In this case, `to_easc(data)` is usually only slightly larger than `data`, because each byte that was not valid printable ASCII encoded text is replaced with a three byte escape.  Also, a dot is added after every backslash (`\`) in `data` that is followed by zero or more dots and two upper case hex digits (0-9, A-F).

If `data` is random binary data, then `to_easc(data)` produces valid printable ASCII data and `to_easc(data).decode(encoding="ascii")` succeeds.  In this case the output of `to_easc(data)` is usually abour 2.25 times as large as `data`, and `print(to_easc(data).decode(encoding="ascii"))` produces something that looks quite random.  This printed output consists of a mix of printable ASCII characters (numbers, letters, and punctuation) and three byte escape sequences of the form `\HH`.

In the extreme case where every byte of `data` must be escaped, then `to_easc(data)` is three times as long as `data`.

Because `data == from_easc(to_easc(data))`, easc encoded data is also usable for storing or transmitting data that may or may not be valid printable ASCII encoded text.  An example where this might be useful is to write binary data of unknown format to a log file.  This allows the log file to be viewed using any text editor, but also ensures that if some or all of the logged data truely was printable ASCII encoded text, that it will be readable.  Any of this data can later be read from that log file and restored to its original binary format with `from_easc()` for further evaluation.

The only change that `to_easc()` makes to already valid printable ASCII text with no C0 control codes other than horizontal tab (\t 0x09), line feed (\n 0x0A), and carriage return (\r 0x0D) characters, is that wherever a backslash (`\`) followed by zero or more dots and then two upper case hex digits is found in the source data, a dot is inserted after the backslash.  This is done to ensure that `data == from_easc(to_easc(data))`, which might otherwise fail if a backslash and upper case hex characters present in `data` were misinterpreted as being an escape sequence.

A consequence of the handling of backslash characters followed by two upper case hex digits by `to_easc()` is that if `eadata` is easc encoded, then mistakenly using `to_easc(eadata)` will insert a dot for each three-byte escape sequence used in `eadata`.  Thus for arbitrary `data`, `data != from_easc(to_easc(to_easc(data)))` but `data == from_easc(from_easc(to_easc(to_easc(data)))`.  Also, mistakenly using `from_easc(data)` for arbitrary `data` is not necessarily reversible: `data != to_easc(from_easc(data))`.  This is because `from_easc()` assumes that the input is valid `easc` data produced by `to_easc`, and thus replaces sequences of text that appear to be easc escape codes with the corresponding bytes.  If some of those bytes form valid printable ASCII text, then `to_easc()` will not undo the effects of `from_easc()`.

easc encoded data is still considered valid if it includes escape sequences of the form `\HH` where that escaped byte would have been part of a sequence of valid printable ASCII encoded text.  `from_easc()` correctly handles such cases.  This also means that while `to_easc()` allows the user to choose whether or not horizontal tab, line feed, and carriage return characters are escaped, `from_easc()` handles all of these cases automatically.


### Why use easc encoded data instead of HEX or Base64?

Where arbitrary binary data must be converted to a printable form, conversion to hexidecimal or Base64 encoding are commonly used.  easc encoded random binary data is slightly longer than converting that data to hex encoded bytes with no spaces.  In the worst case, where every byte of input must be escaped, easc data is three times longer than the input, and 1.5 times longer than hex encoding without spaces.  So, hex encoded data (without spaces) is slightly smaller than easc encoded random data, and Base64 encoding is even more compact.  These size comparisons are reversed if the data is mostly text rather than random binary data.  Neither hex nor Base64 encoding provides a good solution for printing data that is a mix of text and non-text bytes in cases where it would be advantageous for the text portions to be human readable.

This desirable feature of easc is partially achieved in Python by printing bytes objects without first using `decode()` to convert them to text.  However, easc is slightly more compact, provides options for handling of horizontal tabs, linefeeds and carriage returns, and os more flexible since it is an encoding rather than just a method of display.

Where the data to be encoded may contain non-ASCII Unicode text, as is common for text is many languages other than English, [eutf8 (esaped UTF-8)](eutf8.md) encoding may be a better choice,
