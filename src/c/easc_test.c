#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "easc.h"

/////////////////////////////////////////////////////////////////////
// Run these tests with:                                           //
// gcc -o easc_test easc.c easc_test.c && ./easc_test              //
// from the src/c directory to correctly find the test data files. //
/////////////////////////////////////////////////////////////////////

bool areequal(char *a, int alen, char *b, int blen) {
	if (alen != blen) {
		printf("areequal lengths don't match: %i %i\n", alen, blen);
		return false;
	}
	for (int i = 0; i < alen; ++i) {
		if (a[i] != b[i]) {
			printf("areequal failed at a[%i]=%02X != b[%i]=%02X\n",
				i, a[i], i, b[i]);
			return false;
		}
	}
	return true;
}

// Read a (binary) file, returning a pointer to the read data.  Use free() to
// free the results when they are no longer needed.  Return NULL if an error
// occcurs.  On return, *readlen is set to the number of bytes read (which will
// be zero if an error occured).
char *readfile(char *pathname, size_t *readlen) {
	FILE *file = fopen(pathname, "rb");
	if (file == NULL) {
		printf("Error opening %s to read.\n", pathname);
		*readlen = 0;
		return NULL;
	}
	fseek(file, 0, SEEK_END);
	long filesize = ftell(file);
	if (filesize < 1) {
		printf("Invalid filesize (%li) for %s.\n", filesize, pathname);
		fclose(file);
		*readlen = 0;
		return NULL;
	}
	fseek(file, 0, SEEK_SET);  // reset file pointer
	char *data = (char*) malloc(filesize);
	if (data == NULL) {
		printf("Error allocating %li bytes of memory to read contents of %s.\n",
			filesize, pathname);
		fclose(file);
		*readlen = 0;
		return NULL;
	}
	*readlen = fread(data, 1, filesize, file);
	fclose(file);
	if (*readlen != (size_t) filesize) {
		printf("Error reading %li bytes from %s.  Only %zu bytes were read.\n",
			filesize, pathname, *readlen);
		*readlen = 0;
		free(data);
		return NULL;
	}
	return data;
}


// Write a (binary) file.  Return true on success or false on failure.
// On failure, some data may have been written to the file.
bool writefile(char *pathname, char *data, size_t datalen) {
	FILE *file = fopen(pathname, "wb");
	if (file == NULL) {
		printf("Error opening %s to write.\n", pathname);
		return false;
	}
	if (fwrite(data, 1, datalen, file) != datalen) {
		printf("Error writing %li bytes to %s.\n",
			datalen, pathname);
		fclose(file);
		return false;
	}
	return true;
}

// do tests of from_easc() and to_easc()
int main(int argc, char *argv[]) {
	(void) argc;
	(void) argv;

	// Notice that none of the elements of testdata[] include a
	// NULL (\x00 -> \\00).  This allows strlen() to be used to determine the
	// lengths of the elements.  An element containing a NULL (\x00) would then
	// ignore any data after the NULL.
	// Later tests do include NULL characters to verify that to_easc() handles
	// these correctly.
	//
	// In the values for *testdata[], writing something linke "\x8BFF" produces
	// a "hex escape sequence out of range" error.  To avoid this, such strings
	// can be broken into to automatrically concatenated string like "\x8B""FF".
	char * testdata[] = {
		// ASCII text with tab, lf, and cr [0, 1]
		"This\tis a\r\ntest", "This\tis a\r\ntest",

		// Various backslashes in source data with no change required [2. 3]
		"\\AX \\XA \\ab \\aB \\Ab \\.X",
			"\\AX \\XA \\ab \\aB \\Ab \\.X",

		// Backslash + HH.  dot required [4, 5]
		"\\FF", "\\.FF",
		// Backslash + dot + hex.  additional dot required [6, 7]
		"\\.AB",  "\\..AB",

		// Multiple dots after a backslash and followed by two upper
		// case hex digits.  The easc encoding adds additional dots. [8, 9]
		"\\DD \\.F0 \\...CA", "\\.DD \\..F0 \\....CA",
		// This sequence with the last byte omitted such that an additional dot
		// is not added [10, 11]
		"\\DD \\.F0 \\...C", "\\.DD \\..F0 \\...C",
		// This sequence with the last two bytes omitted such that an additional
		// dot is not added [12, 13]
		"\\DD \\.F0 \\...", "\\.DD \\..F0 \\...",

		// Ending with a single dot after a backslash and followed by two upper
		// case hex digits.  The easc encoding adds additional dots. [14, 15]
		"\\DD \\.F0", "\\.DD \\..F0",
		// This sequence with the last byte omitted such that an additional dot
		// is not added [16, 17]
		"\\DD \\.F", "\\.DD \\.F",
		// This sequence with the last two bytes omitted such that an additional
		// dot is not added [18, 19]
		"\\DD \\.", "\\.DD \\.",
		// This sequence with the last three bytes omitted such that it ends
		// with a backslash [20, 21]
		"\\DD \\", "\\.DD \\",

		// Ending with a backslash and followed by two upper case hex digits.
		// The easc encoding adds a dot. [22, 23]
		"\\DD \\BC", "\\.DD \\.BC",
		// This sequence with the last byte omitted such that a dot is not
		// added [24, 25]
		"\\DD \\B", "\\.DD \\B",
		// This sequence with the last two bytes omitted such that it ends with
		// a backslash [26, 27]
		"\\DD \\", "\\.DD \\",

		// empty input [28, 29]
		"", "",

		// An example where the easc version is three times as long as raw
		// [30, 31]
		"\xE2\x80\xF4\x9A", "\\E2\\80\\F4\\9A",  // 4 bytes -> 12 bytes
	};

	char tmpdata[1024];
	size_t tmplen;

	char raw[] =
		"\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0A\x0B\x0C\x0D\x0E\x0F"
		"\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F"
		"\x20\x21\x22\x23\x24\x25\x26\x27\x28\x29\x2A\x2B\x2C\x2D\x2E\x2F"
		"\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x3A\x3B\x3C\x3D\x3E\x3F"
		"\x40\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F"
		"\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x5B\x5C\x5D\x5E\x5F"
		"\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F"
		"\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x7B\x7C\x7D\x7E\x7F";


	// ea_options[3 * i], [3 * i + 1], and [3 * i + 2] contain sequences of
	// escape_tab, escape_lf, and escape_cr respectively, that should produce
	// ea_variants[i] from raw.
	//
	bool ea_options[] = {
		// escape_tab, escape_lf
		true, true, true,
		false, true, true,
		true, false, true,
		true, true, false,
		false, false, false,
	};

	char * ea_variants[] = {
		// This version of ea escapes all of horizontal tabs (\x09),
		// line feed (\x0A), and carriage return (\x0D)
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0A\\0B\\0C\\0D\\0E\\0F"
		"\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		" !\"#$%&'()*+,-./"
		"0123456789:;<=>?"
		"@ABCDEFGHIJKLMNO"
		"PQRSTUVWXYZ[\\]^_"
		"`abcdefghijklmno"
		"pqrstuvwxyz{|}~\\7F",

		// This version of ea escapes all but horizontal tab (\x09)
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\x09\\0A\\0B\\0C\\0D\\0E\\0F"
		"\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		" !\"#$%&'()*+,-./"
		"0123456789:;<=>?"
		"@ABCDEFGHIJKLMNO"
		"PQRSTUVWXYZ[\\]^_"
		"`abcdefghijklmno"
		"pqrstuvwxyz{|}~\\7F",

		// This version of ea escapes all but line feed (\x0A)
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\x0A\\0B\\0C\\0D\\0E\\0F"
		"\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		" !\"#$%&'()*+,-./"
		"0123456789:;<=>?"
		"@ABCDEFGHIJKLMNO"
		"PQRSTUVWXYZ[\\]^_"
		"`abcdefghijklmno"
		"pqrstuvwxyz{|}~\\7F",

		// This version of ea escapes all but carriage returns (\x0D)
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0A\\0B\\0C\x0D\\0E\\0F"
		"\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		" !\"#$%&'()*+,-./"
		"0123456789:;<=>?"
		"@ABCDEFGHIJKLMNO"
		"PQRSTUVWXYZ[\\]^_"
		"`abcdefghijklmno"
		"pqrstuvwxyz{|}~\\7F",

		// This version of ea escapes none of horizontal tab (\x09),
		// line feed (\x0A), nor carriage return (\x0D)
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\x09\x0A\\0B\\0C\x0D\\0E\\0F"
		"\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		" !\"#$%&'()*+,-./"
		"0123456789:;<=>?"
		"@ABCDEFGHIJKLMNO"
		"PQRSTUVWXYZ[\\]^_"
		"`abcdefghijklmno"
		"pqrstuvwxyz{|}~\\7F"
	};

	// Use sizeof() - 1 for lengths here and in later tests so as to ignore the
	// NULL terminator at the end of raw which would otherwise be converted to
	// \\00 which would then not match the unescaped NULL terminator at the end
	// of ea

	// This test ensures that \x00 isn't mistakenly interpreted as an upper case
	// hex digit, as was the case in an early development version of easc.c
	// Because of the NULL, strlen(shortraw) isn't valid, so this cannot be
	// included in testdata[].
	char shortraw[] = "\\\x00""CF";  // extra "" so \x00CF isn't a single byte
	char shortea[] = "\\\\00CF";
	if ((tmplen = to_easc(tmpdata, sizeof(tmpdata), shortraw, sizeof(shortraw) - 1,
		false, false, false)) == sizeof(tmpdata)
	) {
		printf("ERROR: tmpdata too small for dst of to_easc(shortraw)\n");
		return -1;
	}
	if (!areequal(tmpdata, tmplen, shortea, strlen(shortea))) {
		printf("Failure of to_easc(shortraw)"
			"\n  \"%.*s\" !=\n  \"%s\"\n",
			(int) tmplen, tmpdata, shortea);
		for (size_t j = 0; j < tmplen; ++j)
			printf("%.02X ", tmpdata[j]);
		printf(" !=\n");
		for (size_t j = 0; j < strlen(shortea); ++j)
			printf("%.02X ", shortea[j]);
		printf("\n");
		return -1;
	}
	if ((tmplen = from_easc(tmpdata, sizeof(tmpdata), shortea, strlen(shortea))
		) == sizeof(tmpdata)
	) {
		printf("ERROR: tmpdata too small for dst of from_easc(shortea)\n");
		return -1;
	}
	if (!areequal(tmpdata, tmplen, shortraw, sizeof(shortraw) - 1)) {
		printf("Failure of from_easc(shortea)\n");
		for (size_t j = 0; j < tmplen; ++j)
			printf("%.02X ", tmpdata[j]);
		printf(" !=\n");
		for (size_t j = 0; j < sizeof(shortraw) - 1; ++j)
			printf("%.02X ", shortraw[j]);
		printf("\n");
		return -1;
	}

	for (size_t i = 0; i < sizeof(ea_variants) / sizeof(ea_variants[0]); ++i) {
		// ea_options[3 * i] is escape_tab,
		// ea_options[3 * i + 1] is escape_lf,
		// ea_options[3 * i + 2] is escape_cr,
		if ((tmplen = to_easc(tmpdata, sizeof(tmpdata), raw, sizeof(raw) - 1,
			ea_options[3 * i], ea_options[3 * i + 1], ea_options[3 * i + 2])
			) == sizeof(tmpdata)
		) {
			printf("ERROR: tmpdata too small for dst of to_easc(raw) with"
				" escape_tab=%i, escape_lf=%i, and escape_cr=%i\n",
				ea_options[3 * i], ea_options[3 * i + 1], ea_options[3 * i + 2]);
			return -1;
		}
		if (!areequal(tmpdata, tmplen, ea_variants[i], strlen(ea_variants[i]))) {
			printf("%zu Failure of to_easc(raw) with escape_tab=%i, escape_lf=%i,"
				" and escape_cr=%i\n  \"%.*s\" !=\n  \"%s\"\n",
				i, ea_options[3 * i], ea_options[3 * i + 1], ea_options[3 * i + 2],
				(int) tmplen, tmpdata, ea_variants[i]);
			for (size_t j = 0; j < tmplen; ++j)
				printf("%.02X ", tmpdata[j]);
			printf(" !=\n");
			for (size_t j = 0; j < strlen(ea_variants[i]); ++j)
				printf("%.02X ", ea_variants[i][j]);
			printf("\n");
			return -1;
		}

		if ((tmplen = from_easc(tmpdata, sizeof(tmpdata), ea_variants[i],
			strlen(ea_variants[i]))) == sizeof(tmpdata)
		) {
			printf("ERROR: tmpdata too small for dst of"
				" from_easc(ea_variants[%zu]) for escape_tab=%i and"
				" escape_lf=%i\n",
				i, ea_options[2 * i], ea_options[2 * i + 1]);
			return -1;
		}
		if (!areequal(tmpdata, tmplen, raw, sizeof(raw) - 1)) {
			printf("Failure of from_easc(ea_variants[%zu])"
				" for escape_tab=%i and escape_lf=%i\n",
				i, ea_options[2 * i], ea_options[2 * i + 1]);
			for (size_t j = 0; j < tmplen; ++j)
				printf("%.02X ", tmpdata[j]);
			printf(" !=\n");
			for (size_t j = 0; j < sizeof(raw) - 1; ++j)
				printf("%.02X ", ea_variants[i][j]);
			printf("\n");
			return -1;
		}
	}


	// testdata contains ea values assuming escape_tab, escape_lf, and
	// escape_cr are all false.
	for (size_t i = 0; i < sizeof(testdata) / sizeof(testdata[0]); i += 2) {
		// testdata[i] is raw, testdata[i + 1] is ea
		if ((tmplen = to_easc(tmpdata, sizeof(tmpdata), testdata[i],
			strlen(testdata[i]), false, false, false)) == sizeof(tmpdata)) {
			printf("ERROR: tmpdata too small for dst of to_easc()\n");
			return -1;
		}
		if (!areequal(tmpdata, tmplen, testdata[i + 1], strlen(testdata[i + 1]))) {
			printf("Failure of to_easc() for testdata[%zu] and [%zu]"
				"\n  \"%.*s\" !=\n  \"%s\"\n",
				i, i + 1, (int) tmplen, tmpdata, testdata[i + 1]);
			for (size_t j = 0; j < tmplen; ++j)
				printf("%.02X ", tmpdata[j]);
			printf(" !=\n");
			for (size_t j = 0; j < strlen(testdata[i + 1]); ++j)
				printf("%.02X ", testdata[i + 1][j]);
			printf("\n");
			return -1;
		}

		if ((tmplen = from_easc(tmpdata, sizeof(tmpdata), testdata[i + 1],
			strlen(testdata[i + 1]))) == sizeof(tmpdata)
		) {
			printf("ERROR: tmpdata too small for dst of from_easc()\n");
			return -1;
		}
		if (!areequal(tmpdata, tmplen, testdata[i], strlen(testdata[i]))) {
			printf("Failure of from_easc() for testdata[%zu] and [%zu]\n",
				i, i + 1);
			for (size_t j = 0; j < tmplen; ++j)
				printf("%.02X ", tmpdata[j]);
			printf(" !=\n");
			for (size_t j = 0; j < strlen(testdata[i + 1]); ++j)
				printf("%.02X ", testdata[i + 1][j]);
			printf("\n");
			return -1;
		}
	}

	// The following tests what occurs when dstsize is insufficient to hold the
	// full output of to_easc() and from_easc().  Some implementations,
	// including the refernece implementations in python and js, do not use
	// output buffers whose size is externally limited like this.  So, these
	// tests are not required for those implementations.

	// For to_easc():
	// Return the length of the data in dstdata.  If the converted contents of
	// srcdata would require dstsize or more bytes, then the return value will be
	// exactly equal to dstsize.  dstdata will not be null terminated.

	// All of the following test cases can be performed using testraw, a single
	// well-chosen input data sequence by simply varying the value of dstsize.
	// testea_bysize[dstsize] is the expected output of to_easc(testraw).

	// to_easc() test case 1: dstsize is too small to hold the easc encoded
	// result, but the dstsize boundary falls after a valid printable ASCII byte
	// character that does not require an escape.


	// to_easc() test case 2: dstsize is too small to hold the easc encoded
	// result, but the dstsize boundary falls after a single byte that requires
	// an escape.

	// to_easc() test case 3: dstsize is too small to hold the easc encoded
	// result, but the dstsize boundary falls within a single byte that requires
	// an escape.


	// to_easc() test case 10: dstsize is too small to hold the easc encoded
	// result, but the dstsize boundary falls after a backslash, an inserted
	// dot, and two uppercase hex digits.

	// to_easc() test case 11: dstsize is too small to hold the easc encoded
	// result, but the dstsize boundary falls after a backslash, an inserted
	// dot, and one uppercase hex digit, where a second uppercase hex digit
	// follows.

	// to_easc() test case 12: dstsize is too small to hold the easc encoded
	// result, but the dstsize boundary falls after a backslash and an inserted
	// dot, where two uppercase hex digits follow.


	// to_easc() test case 14: dstsize is too small to hold the easc encoded
	// result, but the dstsize boundary falls after a backslash, an inserted
	// dot, an existing dot, and two uppercase hex digits.

	// to_easc() test case 15: dstsize is too small to hold the easc encoded
	// result, but the dstsize boundary falls after a backslash, an inserted
	// dot, an existing dot, and one uppercase hex digit, where a second
	// uppercase hex digit follows.

	// to_easc() test case 16: dstsize is too small to hold the easc encoded
	// result, but the dstsize boundary falls after a backslash, an inserted
	// dot, and an existing dot, where two uppercase hex digits follow.

	// to_easc() test case 18: dstsize is too small to hold the easc encoded
	// result, but the dstsize boundary falls after an inserted dot after a
	// backslash, where an existing dot and two uppercase hex digits follow.

	// to_easc() test case 20: dstsize is too small to hold the easc encoded
	// result, but the dstsize boundary falls after a backslash, were an
	// dot, an existing dot and two uppercase hex digits follow.


	// The use of double-double quotes ("") in testraw and testea_bysize[] are
	// required to avoid a "hex escape sequence out of range" error because
	// "\x8BDB" looks to the compiler like it contains a 4-digit hex sequence
	// and thus it must be written as "\x8B""DB".


	char testraw[] = "\\.DB\\CF\xC2\x94\xD0\x15""AB";
	char testea[] = "\\..DB\\.CF\\C2\\94\\D0\\15AB";
	for (size_t i = 0; i < strlen(testea); ++i) {
		tmplen = to_easc(tmpdata, i, testraw, strlen(testraw), true, true, true);
		if (tmplen != i) {
			printf("Failure of to_easc() for dstsize=%zu"
				" (tmplen=%zu) != %zu\n",
				i, tmplen, i);
			return -1;
		}
		if (!areequal(tmpdata, tmplen, testea, i)) {
			printf("Failure of to_easc() for dstsize=%zu"
				"\n  \"%.*s\" !=\n  \"%.*s\"\n",
				i, (int) tmplen, tmpdata, (int) i, testea);
			return -1;
		}
	}

	// for from_easc():
	// Return the length of the data in dstdata.  If the converted contents of
	// srcdata would require dstsize or more bytes, then the return value will be
	// exactly equal to dstsize.  dstdata will not be terminated with a null unless
	// srcdata ends with "\\00".

	for (size_t i = 0; i < strlen(testraw); ++i) {
		tmplen = from_easc(tmpdata, i, testea, strlen(testea));
		if (tmplen != i) {
			printf("Failure of from_easc() for dstsize=%zu"
				" (tmplen=%zu) != %zu\n",
				i, tmplen, i);
				return -1;
		}
		// tmpdata should be equal to the first i bytes of testraw
		if (!areequal(tmpdata, tmplen, testraw, i)) {
			printf("Failure of to_easc() for dstsize=%zu\n", i);
			for (size_t j = 0; j < tmplen; ++j)
				printf("%.02X ", tmpdata[j]);
			printf(" !=\n");
			for (size_t j = 0; j < i; ++j)
				printf("%.02X ", testraw[j]);
			printf("\n");
			return -1;
		}
	}

	char *berdata;
	size_t berdatalen;
	char *berea;
	size_t berealen;
	// bigtmp is large enough to hold the output of to_easc() and from_easc()
	// for the BER tests.
	char bigtmp[15700];
	size_t biglen;


	// The easc containing files for the following tests are not guaranteed to
	// be correct, since they were generated with easc_test.py.  However, their
	// use may be helpful to detect undesirable variation between the output of
	// different easc implementations.
	//
	// Alternating strings in pathnames are raw data files, possibly containing
	// bit errors, thus making them invalid printable ASCII, and the output of
	// easc() for those data files.
	//
	// Use escape_tab=escape_lf=False, but escape_cr=True as was used in the
	// python function add_bit_errors(), which created them.
	char * pathnames[] = {
		"../../test_data/ASCII-demo.txt", "../../test_data/ASCII-demo.txt",
//		"../../test_data/ASCII-demo_BER0001.txt",
//			"../../test_data/ASCII-demo_BER0001_easc.txt",
//		"../../test_data/ASCII-demo_BER001.txt",
//			"../../test_data/ASCII-demo_BER001_easc.txt",
//		"../../test_data/ASCII-demo_BER01.txt",
//			"../../test_data/ASCII-demo_BER01_easc.txt",
	};

	for (size_t i = 0; i < sizeof(pathnames) / sizeof(pathnames[0]); i += 2) {
		if ((berdata = readfile(pathnames[i], &berdatalen)) == NULL)
			return -1;
		if ((berea = readfile(pathnames[i + 1], &berealen)) == NULL) {
			free(berdata);
			return -1;
		}
		if ((biglen = to_easc(bigtmp, sizeof(bigtmp), berdata, berdatalen,
			false, false, true)) == sizeof(bigtmp)
		) {
			printf("ERROR: bigtmp too small for dst of to_easc(%s)\n",
				pathnames[i]);
			free(berdata);
			free(berea);
			return -1;
		}
		if (!areequal(bigtmp, biglen, berea, berealen)) {
			printf("Failure of to_easc(%s).  Output != %s.\n"
				"  Writing the output of to_easc(%s) to testerr.txt.\n",
				pathnames[i], pathnames[i + 1], pathnames[i]);
			writefile("testerr.txt", bigtmp, biglen);
			free(berdata);
			free(berea);
			return -1;
		}
		if ((biglen = from_easc(bigtmp, sizeof(bigtmp), berea, berealen))
			== sizeof(bigtmp)
		) {
			printf("ERROR: bigtmp too small for dst of from_easc(%s)\n",
				pathnames[i + 1]);
			free(berdata);
			free(berea);
			return -1;
		}
		if (!areequal(bigtmp, biglen, berdata, berdatalen)) {
			printf("Failure of from_easc(%s).  Output != %s.\n"
				"  Writing the output of from_easc(%s) to testerr.txt.\n",
				pathnames[i + 1], pathnames[i], pathnames[i + 1]);
			writefile("testerr.txt", bigtmp, biglen);
			free(berdata);
			free(berea);
			return -1;
		}
		free(berdata);
		free(berea);
	}

	printf("tests completed successfully\n");
	return 0;
}
