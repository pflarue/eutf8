# eutf8 and easc in Javascript

This directory contains the reference implementations for [eutf8](../../eutf8.md) and [easc](../../easc.md) written in Javascript to allow use in browser based apps.

`eutf8.js` contains the `to_euft8()` and `from_eutf8()` functions.

`easc.js` contains the `to_easc()` and `from_easc()` functions.

Opening `eutf8_test.html` and `easc_test.html` in browser windows, which require all of the Javascript files in this directory, will run a series of tests that confirm that both encoding/decoding functions work as expected and that they are reversible.  Info and error messages are written to `console.log`, so check that log to verify that all tests are successful.

`ASCII-demo.js` and `UTF-8-demo.js` contain copies of data found in the test_data directory of this respository.  The files in that directory are used for the test programs in the c and python source directories.  For testing the Javascript implementations, it is more convenient to merge them together into these js files.  Since these test files contain text that has been intentionally corrupted so that it is not valie UTF-8 encoded text, the demo.js files contain b64 encoded versions of them.
