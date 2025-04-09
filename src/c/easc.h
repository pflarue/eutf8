#include <stdbool.h>
#include <stddef.h>

extern char *easc_version;

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
size_t from_easc(char* dstdata, int dstsize, char* srcdata, int srclen);


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
	bool escape_tab, bool escape_lf, bool escape_cr);
