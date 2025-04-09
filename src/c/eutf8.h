#include <stdbool.h>
#include <stddef.h>

extern char *eutf8_version;

// to_eutf8() takes srcdata of length srclen, which is arbitrary byte data, and
// populates dstdata with up to dstsize bytes of data that is guaranteed to be
// valid utf-8 encoding using eutf8 escape sequences for data in srcdata that is
// not valid utf-8 and also inserting 3-byte utf-8 encoded Zero Width Space
// characters as necessary to allow from_eutf8() to reconstruct srcdata from
// dstdata.  srcdata may, but is not required to be null terminated.  For
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
	bool escape_tab, bool escape_lf, bool escape_cr);


// from_eutf8() takes srcdata of length srclen (which was produced by
// to_eutf8()), and populates dstdata with up to dstsize bytes of data that are
// the raw byte data from which srcdata was created.  srcdata may, but is not
// required to be null terminated.  dstsize should normally be greater than or
// equal to srclen.
//
// Return the length of the data in dstdata.  If the converted contents of
// srcdata would require dstsize or more bytes, then the return value will be
// exactly equal to dstsize.  dstdata will not be terminated with a null unless
// srcdata[srclen - 1] is null.
size_t from_eutf8(char* dstdata, int dstsize, char* srcdata, int srclen);
