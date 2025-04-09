#include <stdbool.h>
#include <stdio.h>
#include <string.h>

#include "eutf8.h"

char *easc_version = "0.9.0";

// These implementations of to_easc() and from_easc() are functional, but not
// optimized.

// Whether char defaults to signed or unsigned is system/compiler dependent.
// So, it is necessary to cast some values to unsigned char to get
// consistently correct results.


// Return true if full escape is written.  If there is not enough space in
// dstdata, write as much of the escape as will fit and return false.
bool escbyte(char *dstdata, int *didx, char *srcdata, int *sidx, int dstsize) {
	dstdata[(*didx)++] = 0x5C;  // backslash '\'
	if (*didx == dstsize)
		return false;
	char high = ((unsigned char) srcdata[*sidx]) >> 4;
	if (high <= 9)
		high += '0';
	else
		high = 'A' + (high - 10);
	char low = ((unsigned char) srcdata[*sidx]) & 0x0F;
	if (low <= 9)
		low += '0';
	else
		low = 'A' + (low - 10);
	dstdata[(*didx)++] = high;
	if (*didx == dstsize)
		return false;
	dstdata[(*didx)++] = low;
	if (*didx == dstsize)
		return false;
	*sidx += 1;
	return true;
}

// from_easc() takes srcdata of length srclen (which was produced by
// to_easc()), and populates dstdata with up to dstsize bytes of data that are
// the raw byte data from which srcdata was created.  srcdata may be, but is not
// required to be, null terminated.  dstsize should normally be greater than or
// equal to srclen.
//
// Return the length of the data in dstdata.  If the converted contents of
// srcdata would require dstsize or more bytes, then the return value will be
// exactly equal to dstsize.  dstdata will not be terminated with a null unless
// srcdata ends with "\\00".
size_t from_easc(char* dstdata, int dstsize, char* srcdata, int srclen) {
	// Return a copy of the data used to create the easc data
	int sidx = 0;  // index for srcdata
	int didx = 0;  // index for dstdata
	char upperhex[] = "0123456789ABCDEF";
	while (didx < dstsize) {
		// The above test ensures that at least one more byte can be written to
		// dstdata.  Wherever more than one byte will be written, check dstsize.
		char *ptr = memchr(srcdata + sidx, 0x5C, srclen - sidx);
		if (ptr == NULL) {
			// no match found.  Done
			if (didx + (srclen - sidx) > dstsize) {
				// copy only as much as will fit
				memcpy(dstdata + didx, srcdata + sidx, dstsize - didx);
				didx = dstsize;
				break;
			}
			memcpy(dstdata + didx, srcdata + sidx, srclen - sidx);
			didx += srclen - sidx;
			break;
		}
		int offset = ptr - srcdata;  // index of 0x5C (\) in srcdata
		// Copy offset - sidx bytes from srcdata to dstdata
		if (didx + (offset - sidx) > dstsize) {
			// copy only as much as will fit
			memcpy(dstdata + didx, srcdata + sidx, dstsize - didx);
			didx = dstsize;
			break;
		}
		memcpy(dstdata + didx, srcdata + sidx, offset - sidx);
		didx += offset - sidx;
		if (didx == dstsize) {
			// dstdata is full after copying
			break;
		}
		if (srclen > offset + 3 && (unsigned char) srcdata[offset + 1] == '.') {
			// This dot was probabaly inserted after the backslash by to_easc(),
			// but only if it is followed by zero or more additional dots and
			// then two uppercase hex digits.
			int dot_cnt = 1;
			while (srclen > offset + (dot_cnt + 1) + 2
				&& (unsigned char) srcdata[offset + dot_cnt + 1] == '.'
			)
				dot_cnt += 1;
			if (
				strchr(upperhex, srcdata[offset + dot_cnt + 1]) != NULL
				&& strchr(upperhex, srcdata[offset + dot_cnt + 2]) != NULL
			) {
				// Remove the first dot after the backslash
				dstdata[didx++] = srcdata[offset];
				sidx = offset + 2;
			} else {
				// The dot after the backslash was not inserted by to_easc(), so
				// ignore it.
				dstdata[didx++] = srcdata[offset];
				sidx = offset + 1;
			}
		} else if (
			srclen > offset + 2
			&& strchr(upperhex, srcdata[offset + 1]) != NULL
			&& strchr(upperhex, srcdata[offset + 2]) != NULL
		) {
			//  restore escaped byte
			int high = srcdata[offset + 1];
			if (high <= '9')
				high -= '0';
			else
				high = 0x09 + (high & 0x07);
			int low = srcdata[offset + 2];
			if (low <= '9')
				low -= '0';
			else
				low = 0x09 + (low & 0x07);
			dstdata[didx++] = (high << 4) + low;
			sidx = offset + 3;
		} else {
			// This backslash is not part of an escape and did not require a dot
			// to be added after it to prevent it from being misinterpreted as
			// part of an escape.
			dstdata[didx++] = srcdata[offset];
			sidx = offset + 1;
		}
	}
	return didx;
}

// to_easc() takes srcdata of length srclen, which is arbitrary byte data, and
// populates dstdata with up to dstsize bytes of data that is guaranteed to
// contain only valid printable ASCII characters, using easc escape sequences
// for data in srcdata that is not valid printable ASCII characters, and also
// inserting a dot (.) character as necessary to allow from_easc() to
// reconstruct srcdata from dstdata.  srcdata may be, but is not required to be,
// null terminated.  For arbitrary srcdata, dstsize should be greater than three
// times srclen.
//
// If escape_tab is true, then an ASCII horizontal tab ('\t' or '\x09') in
// srcdata will be converted to '\\09' in dstdata.  Otherwise, this character in
// in srcdata will be left unchanged in dstdata.
//
// If escape_lf is true, then an ASCII line feed ('\n' or '\x0A') in srcdata
// will be converted to '\\0A' in dstdata.  Otherwise, this character in srcdata
// will be left unchanged in dstdata.
//
// If escape_cr is true, then an ASCII carriage return ('\r' or '\x0D') in
// srcdata will be converted to '\\0D' in dstdata.  Otherwise, this character in
// srcdata will be left unchanged in dstdata.
//
// Return the length of the data in dstdata.  If the converted contents of
// srcdata would require dstsize or more bytes, then the return value will be
// exactly equal to dstsize.  dstdata will not be null terminated.
size_t to_easc(char* dstdata, int dstsize, char* srcdata, int srclen,
	bool escape_tab, bool escape_lf, bool escape_cr
) {
	//Return easc encoded data created from any data sequence
	char upperhex[] = "0123456789ABCDEF";
	int sidx = 0;  // Index in srcdata of the current byte
	int didx = 0;  // Index in dstdata where the next byte shall be written

	while (sidx < srclen && didx < dstsize) {
		// The above test ensures that at least one more byte can be written to
		// dstdata.  Wherever more than one byte will be written, check dstsize.
		unsigned char c = (unsigned char) srcdata[sidx];
		if (0x7F <= c) {
			// Not printable ASCII (or 0x7F C0 control code)
			// Escape 1 byte
			if (!escbyte(dstdata, &didx, srcdata, &sidx, dstsize))
				break;
			continue;
		}
		// Valid ASCII
		if (
			c <= 0x08
			|| (c == 0x09 && escape_tab)
			|| (c == 0x0A && escape_lf)
			|| (0x0B <= c && c <= 0x0C)
			|| (c == 0x0D && escape_cr)
			|| (0x0E <= c && c <= 0x1F)
		) {
			// This is a C0 control code, so escape anyways
			if (!escbyte(dstdata, &didx, srcdata, &sidx, dstsize))
				break;
			continue;
		}
		if (c == 0x5C) {
			// Insert a dot after the backslash only if it is followed by zero
			// or more additional dots and then two uppercase hex digits.
			int dot_cnt = 0;  // Number of existing Zero Width Spaces
			while (
				srclen > sidx + dot_cnt + 3
				&& (unsigned char) srcdata[sidx + dot_cnt + 1] == '.'
			)
				dot_cnt += 1;
			if (
				// strchr(char *s, char c) matches the terminating NULL of s
				// if c is NULL, which is undesirable here.  So, include tests
				// to exclude c == NULL which is not an uppercase hex digit.
				srclen > sidx + dot_cnt + 2
				&& (unsigned char) srcdata[sidx + dot_cnt + 1] != 0x00
				&& (unsigned char) srcdata[sidx + dot_cnt + 2] != 0x00
				&& strchr(upperhex, srcdata[sidx + dot_cnt + 1]) != NULL
				&& strchr(upperhex, srcdata[sidx + dot_cnt + 2]) != NULL
			) {
				// Add a dot '.' (0x2E) after the  backslash '\' (0x5C).  This
				// prevents from_easc() from mistaking this this for an escape
				// sequence or from removing the dot_cnt dots that are a part of
				// the source data.
				dstdata[didx++] = 0x5C;  // backslash '\'
				if (didx == dstsize)
					break;
				dstdata[didx++] = 0x2E;  // dot '.'
				sidx += 1;
				continue;
			}
		}
		// copy 1-byte output.  This might be a backslash
		dstdata[didx++] = srcdata[sidx++];
	}
	return didx;
}
