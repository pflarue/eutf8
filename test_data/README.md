# Test data

This directory contains data files used by the test programs in the src/c and src/python directories.  The contents of these files are also incorporated into js files used for testing of the Javascript implementations.

Everything here is derived from `ASCII-demo.txt` and `UTF-8-demo.txt`, which contain valid ASCII text and UTF-8 encoded Unicode text respectively.  The `BERXXX` refer to the Bit Error Rate of corruption intentionally applied to create tests cases of text mixed with varying amounts of arbitrary byte data.  This is intended to simulate text data recieved over a radio link before error correction has been applied or after error correction has failed.

The eutf8.txt and easc.txt files are the output of `to_eutf8()` and `to_easc()` functions applied to the txt files.  The files with b64 extensions contain the base-64 encoded contents of the corresponding BERXXX.txt files.  These were created for inclusion in test files for the Javascript implementations.

These files were created with code in `src/python/eutf8_test.py` and `src/python/easc_test.py`.  That code is commented out to avoid overwriting these files.  Re-running that code would produce random variations on these files.

These files, and the shorter test strings found in the various test programs should be used to test other implementations of eutf8 and easc encoding.  Unlike the python and javascript implementations, the implemetation in c includes additional tests to verify the behavior of `to_eutf8()` and `to_easc()` when the buffer provided for the output data is too small to hold the full results.
