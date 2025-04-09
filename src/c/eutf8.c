#include <stdbool.h>
#include <stdio.h>
#include <string.h>

#include "eutf8.h"

char *eutf8_version = "0.9.0";

// These implementations of to_eutf8() and from_eutf8() are functional, but not
// optimized.  The logic of to_eutf8() should be easy enough to follow when
// compared to the content of Table 3-7, Well-Formed UTF-8 Byte Sequences, in
// the Unicode standard along with the Unicode Private-Use Characters,
// Noncharacters & Sentinels FAQ.

// Whether char defaults to signed or unsigned is system/compiler dependent.
// So, it is necessary to cast some values to unsigned char to get
// consistently correct results.

// from_eutf8() takes srcdata of length srclen (which was produced by
// to_eutf8()), and populates dstdata with up to dstsize bytes of data that are
// the raw byte data from which srcdata was created.  srcdata may be, but is not
// required to be, null terminated.  dstsize should normally be greater than or
// equal to srclen.
//
// Return the length of the data in dstdata.  If the converted contents of
// srcdata would require dstsize or more bytes, then the return value will be
// exactly equal to dstsize.  Unlike to_eutf8(), the output for from_eutf8()
// is not expected to be valid UTF-8 encoded text.  So, no special handling is
// done to avoid broken characters at the end when dstsize is insufficient.
// dstdata will not be terminated with a null unless srcdata ends with "\\00".
size_t from_eutf8(char* dstdata, int dstsize, char* srcdata, int srclen) {
	// Return a copy of the data used to create the eutf8 data
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
		if (srclen > offset + 5
			&& (unsigned char) srcdata[offset + 1] == 0xE2
			&& (unsigned char) srcdata[offset + 2] == 0x80
			&& (unsigned char) srcdata[offset + 3] == 0x8B
		) {
			// This Zero Width Space was probabaly inserted after the backslash
			// by to_eutf8(), but only if it is followed by zero or more
			// additional Zero Width Spaces and then two uppercase hex digits.
			int zws_cnt = 1;
			while (
				srclen > offset + 3 * (zws_cnt + 1) + 2
				&& (unsigned char) srcdata[offset + 3 * zws_cnt + 1] == 0xE2
				&& (unsigned char) srcdata[offset + 3 * zws_cnt + 2] == 0x80
				&& (unsigned char) srcdata[offset + 3 * zws_cnt + 3] == 0x8B
			)
				zws_cnt += 1;
			if (
				strchr(upperhex, srcdata[offset + 3 * zws_cnt + 1]) != NULL
				&& strchr(upperhex, srcdata[offset + 3 * zws_cnt + 2]) != NULL
			) {
				// Remove the first Unicode Zero Width Space after the backslash
				dstdata[didx++] = srcdata[offset];
				sidx = offset + 4;
			} else {
				// The Zero Width Space after the backslash was not inserted by
				// to_eutf8(), so ignore it.
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
			// This backslash is not part of an escape and did not require a Zero
			// Width Space to be added after it to prevent it from being
			// misinterpreted as part of an escape.
			dstdata[didx++] = srcdata[offset];
			sidx = offset + 1;
		}
	}
	return didx;
}

// Return true if escapes written.  If there is not enough space in dstdata,
// fill with question marks (0x3F) and return false.
bool escbytes(char *dstdata, int *didx, char *srcdata, int *sidx,
	int count, int dstsize
) {
	if (*didx + 3 * count > dstsize) {
		// There isn't sufficient space to write count 3-byte escape sequences.
		// Fill with question marks and return false;
		while(*didx < dstsize)
			dstdata[(*didx)++] = 0x3F;  // question mark
		return false;
	}
	for (int i = 0; i < count; ++i) {
		dstdata[*didx] = 0x5C;  // backslash '\'
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
		dstdata[*didx + 1] = high;
		dstdata[*didx + 2] = low;
		*didx += 3;
		*sidx += 1;
	}
	return true;
}

// Return true if bytes copies.  If there is not enough space in dstdata,
// fill with question marks (0x3F) and return false.
bool copybytes(char *dstdata, int *didx, char *srcdata, int *sidx,
	int count, int dstsize
) {
	if (*didx + count > dstsize) {
		// There isn't sufficient space to write count bytes.
		// fill with question marks and return false;
		while(*didx < dstsize)
			dstdata[(*didx)++] = 0x3F;  // question mark
		return false;
	}
	memcpy(dstdata + *didx, srcdata + *sidx, count);
	*didx += count;
	*sidx += count;
	return true;
}


// to_eutf8() takes srcdata of length srclen, which is arbitrary byte data, and
// populates dstdata with up to dstsize bytes of data that is guaranteed to be
// valid utf-8 encoding, using eutf8 escape sequences for data in srcdata that
// is not valid utf-8, and also inserting 3-byte utf-8 encoded Zero Width Space
// characters as necessary to allow from_eutf8() to reconstruct srcdata from
// dstdata.  srcdata may be, but is not required to be, null terminated.  For
// arbitrary srcdata, dstsize should be greater than three times srclen.
//
// If escape_tab is true, then an ascii horizontal tab ('\t' or '\x09') in
// srcdata will be converted to '\\09' in dstdata.  Otherwise, this character in
// in srcdata will be left unchanged in dstdata.
//
// If escape_lf is true, then an ascii line feed ('\n' or '\x0A') in srcdata
// will be converted to '\\0A' in dstdata.  Otherwise, this character in srcdata
// will be left unchanged in dstdata.
//
// If escape_cr is true, then an ascii carriage return ('\r' or '\x0D') in
// srcdata will be converted to '\\0D' in dstdata.  Otherwise, this character in
// srcdata will be left unchanged in dstdata.
//
// Return the length of the data in dstdata.  If the converted contents of
// srcdata would require dstsize or more bytes, then the return value will be
// exactly equal to dstsize.  One or more question marks may be used to pad the
// end of dstdata in this case if a multi-byte utf-8 sequence would have
// required more than dstsize bytes to fully write.  dstdata will not be null
// terminated.
size_t to_eutf8(char* dstdata, int dstsize, char* srcdata, int srclen,
	bool escape_tab, bool escape_lf, bool escape_cr
) {
	//Return eutf8 encoded data created from any data sequence
	char upperhex[] = "0123456789ABCDEF";
	int sidx = 0;  // Index in srcdata of the current byte
	int didx = 0;  // Index in dstdata where the next byte shall be written

	while (sidx < srclen && didx < dstsize) {
		// The above test ensures that at least one more byte can be written to
		// dstdata.  Wherever more than one byte will be written, check dstsize.
		//
		// Based on Unicode Table 3-7 Well-Formed UTF-8 Byte Sequences
		unsigned char c = (unsigned char) srcdata[sidx];
		unsigned char c1 = (unsigned char) srcdata[sidx + 1];
		unsigned char c2 = (unsigned char) srcdata[sidx + 2];
		unsigned char c3 = (unsigned char) srcdata[sidx + 3];
		if ((0x80 <= c && c <= 0xC1) || 0xF5 <= c) {
			// Not UTF-8
			// Escape 1 byte
			if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
				break;
			continue;
		}

		if (c <= 0x7F) {
			// Valid 1-byte UTF-8
			if (
				c <= 0x08
				|| (c == 0x09 && escape_tab)
				|| (c == 0x0A && escape_lf)
				|| (0x0B <= c && c <= 0x0C)
				|| (c == 0x0D && escape_cr)
				|| (0x0E <= c && c <= 0x1F)
				|| (c == 0x7F)
			) {
				// This is a C0 control code, so escape anyways
				if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
					break;
				continue;
			}
			if (c == 0x5C) {
				// Insert a Zero Width Space after the backslash only if it is
				// followed by zero or more additional Zero Width Sapces and
				// then two uppercase hex digits.
				int zws_cnt = 0;  // Number of existing Zero Width Spaces
				while (
					srclen > sidx + 3 * zws_cnt + 3
					&& (unsigned char) srcdata[sidx + 3 * zws_cnt + 1] == 0xE2
					&& (unsigned char) srcdata[sidx + 3 * zws_cnt + 2] == 0x80
					&& (unsigned char) srcdata[sidx + 3 * zws_cnt + 3] == 0x8B
				)
					zws_cnt += 1;
				if (
					// strchr(char *s, char c) matches the terminating NULL of s
					// if c is NULL, which is undesirable here.  So, include tests
					// to exclude c == NULL which is not an uppercase hex digit.
					srclen > sidx + 3 * zws_cnt + 2
					&& (unsigned char) srcdata[sidx + 3 * zws_cnt + 1] != 0x00
					&& (unsigned char) srcdata[sidx + 3 * zws_cnt + 2] != 0x00
					&& strchr(upperhex, srcdata[sidx + 3 * zws_cnt + 1]) != NULL
					&& strchr(upperhex, srcdata[sidx + 3 * zws_cnt + 2]) != NULL
				) {
					// Add a Unicode Zero Width Space (U+200b) after the
					// backslash '\' (0x5C).  This prevents from_eutf8() from
					// mistaking this this for an escape sequence or from
					// removing the zws_cnt Zero Width Spaces that are a part of
					// the source data.  The latter is probably unlikely, but is
					// possible.  UTF-8 encoding of U+200b is the three byte
					// sequence 0xE2, 0x80, 0x8B.
					if (didx + 4 > dstsize) {
						// There isn't sufficient space to write a backslash
						// plus the 3-byte Zero Width Space.  Fill remaining
						// space with question marks (0x3F) and return.
						while(didx < dstsize)
							dstdata[didx++] = 0x3F;  // question mark
						break;
					}
					dstdata[didx++] = 0x5C;  // backslash '\'
					dstdata[didx++] = 0xE2;  // first byte of 0 Width Space
					dstdata[didx++] = 0x80;  // second byte of 0 Width Space
					dstdata[didx++] = 0x8B;  // third byte of 0 Width Space
					sidx += 1;
					continue;
				}
			}
			// copy 1-byte output.  This might be a backslash
			if (!copybytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
				break;
			continue;
		}

		if (srclen <= sidx + 1) {
			// c may be the first byte of a multi-byte UTF-8 sequence, but the
			// required number of additional bytes are not available.
			// Escape 1 byte
			if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
				break;
			continue;
		}

		if (0xC2 <= c && c <= 0xDF) {
			if (0x80 <= c1 && c1 <= 0xBF) {
				// Valid 2-byte UTF-8
				if (c == 0xC2 && c1 <= 0x9F) {
					// This is a C1 control code, so escape anyways
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					if (!escbytes(dstdata, &didx, srcdata, &sidx, 2, dstsize))
						break;
					continue;
				}
				// copy 2-bytes to output
				if (!copybytes(dstdata, &didx, srcdata, &sidx, 2, dstsize))
					break;
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
				break;
			continue;
		}

		if (srclen <= sidx + 2) {
			// c may be the first byte of a multi-byte UTF-8 sequence, but
			// the required number of additional bytes are not available.
			// Escape 1 byte
			if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
				break;
			continue;
		}

		if (c == 0xE0) {
			if ((0xA0 <= c1 && c1 <= 0xBF) && (0x80 <= c2 && c2 <= 0xBF)) {
				// Valid 3-byte UTF-8
				// copy 3-bytes to output
				if (!copybytes(dstdata, &didx, srcdata, &sidx, 3, dstsize))
					break;
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
				break;
			continue;
		}
		if (0xE1 <= c && c <= 0xEC) {
			if ((0x80 <= c1 && c1 <= 0xBF) && (0x80 <= c2 && c2 <= 0xBF) ) {
				// Valid 3-byte UTF-8
				// copy 3-bytes to output
				if (!copybytes(dstdata, &didx, srcdata, &sidx, 3, dstsize))
					break;
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
				break;
			continue;
		}
		if (c == 0xED) {
			if ((0x80 <= c1 && c1 <= 0x9F) && (0x80 <= c2 && c2 <= 0xBF)) {
				// Valid 3-byte UTF-8
				// copy 3-bytes to output
				if (!copybytes(dstdata, &didx, srcdata, &sidx, 3, dstsize))
					break;
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
				break;
			continue;
		}

		if (0xEE <= c && c <= 0xEF) {
			if ((0x80 <= c1 && c1 <= 0xBF) && (0x80 <= c2 && c2 <= 0xBF)) {
				// Valid 3-byte UTF-8
				if (c1 <= 0xA3) {
					// This is a private use character, so escape anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					if (!escbytes(dstdata, &didx, srcdata, &sidx, 3, dstsize))
						break;
					continue;
				}
				if ((c == 0xEF) && (((c1 == 0xB7) && (0x90 <= c2 && c2 <= 0xAF))
						|| ((c1 == 0xBF) && (0xBE <= c2)))
				) {
					// This is a noncharacter, so escape it anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					if (!escbytes(dstdata, &didx, srcdata, &sidx, 3, dstsize))
						break;
					continue;
				}
				// Valid 3-byte UTF-8
				// copy 3-bytes to output
				if (!copybytes(dstdata, &didx, srcdata, &sidx, 3, dstsize))
					break;
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
				break;
			continue;
		}

		if (srclen <= sidx + 3) {
			// c may be the first byte of a multi-byte UTF-8 sequence, but the
			// required number of additional bytes are not available.
			// Escape 1 byte
			if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
				break;
			continue;
		}

		if (c == 0xF0) {
			if ((0x90 <= c1 && c1 <= 0xBF)
				&& (0x80 <= c2 && c2 <= 0xBF)
				&& (0x80 <= c3 && c3 <= 0xBF)
			) {
				// Valid 4-byte UTF-8
				if (((c1 & 0x0F) == 0x0F) && (c2 == 0xBF) && (c3 >= 0xBE)) {
					// This is a noncharacter, so escape it anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					if (!escbytes(dstdata, &didx, srcdata, &sidx, 4, dstsize))
						break;
					continue;
				}
				// Valid 4-byte UTF-8
				// copy 4-bytes to output
				if (!copybytes(dstdata, &didx, srcdata, &sidx, 4, dstsize))
					break;
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
				break;
			continue;
		}
		if (0xF1 <= c && c <= 0xF3) {
			if ((0x80 <= c1 && c1 <= 0xBF)
				&& (0x80 <= c2 && c2 <= 0xBF)
				&& (0x80 <= c3 && c3 <= 0xBF)
			) {
				// Valid 4-byte UTF-8
				if (((c1 & 0x0F) == 0x0F) && (c2 == 0xBF) && (c3 >= 0xBE)) {
					// This is a noncharacter, so escape it anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					if (!escbytes(dstdata, &didx, srcdata, &sidx, 4, dstsize))
						break;
					continue;
				}
				if ((c == 0xF3) && (0xB0 <= c1) && (c3 <= 0xBD)) {
					// This is a private use character, so escape anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					if (!escbytes(dstdata, &didx, srcdata, &sidx, 4, dstsize))
						break;
					continue;
				}
				// Valid 4-byte UTF-8
				// copy 4-bytes to output
				if (!copybytes(dstdata, &didx, srcdata, &sidx, 4, dstsize))
					break;
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
				break;
			continue;
		}

		if (c == 0xF4) {
			if ((0x80 <= c1 && c1 <= 0x8F)
				&& (0x80 <= c2 && c2 <= 0xBF)
				&& (0x80 <= c3 && c3 <= 0xBF)
			) {
				// Valid 4-byte UTF-8
				if ((c1 == 0x8F) && (c2 == 0xBF) && (c3 >= 0xBE)) {
					// This is a noncharacter, so escape it anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					if (!escbytes(dstdata, &didx, srcdata, &sidx, 4, dstsize))
						break;
					continue;
				}
				if (c3 <= 0xBD) {
					// This is a private use character, so escape anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					if (!escbytes(dstdata, &didx, srcdata, &sidx, 4, dstsize))
						break;
					continue;
				}
				// Valid 4-byte UTF-8
				// copy 4-bytes to output
				if (!copybytes(dstdata, &didx, srcdata, &sidx, 4, dstsize))
					break;
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
				break;
			continue;
		}
		// shouldn't get here
		printf("Logic error in to_eutf8().  srcdata[%i] = %02X\n",
			sidx, c);
		if (!escbytes(dstdata, &didx, srcdata, &sidx, 1, dstsize))
			break;
	}
	return didx;
}
