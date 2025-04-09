#include <getopt.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "easc.h"

static struct option long_options[] = {
	{"help", no_argument, 0, 'h'},
	{"version", no_argument, 0, 'v'},
	{"decode", no_argument, 0, 'd'},
	{"tab", no_argument, 0, 't'},
	{"lf", no_argument, 0, 'n'},
	{"cr", no_argument, 0, 'r'},
};

char helpstr[] =
	"usage: easc [-h] [-v] [-d] [-t] [-n] [-r] srcpath [dstpath]\n\n"
	"easc (escaped ASCII) v%s\n"
	"Encode a file that contains any mix of printable ASCII text and arbitrary byte data\n"
	"to easc format.  This encoding is guaranteed to be printable ASCII text, and is\n"
	"intended to be as human readable as possible.  If the source includes any non-ASCII\n"
	"text (Extended ASCII, UTF-8, etc), then those characters are escaped.\n\n"
	"This implementation does not work well for very large files.\n"
	"See https://www.GitHub.com/pflarue/eutf8 for more information and for free reference\n"
	"implementations for encoding and decoding easc in C, Python, and JavaScript.\n\n"
	"positional arguments:\n"
	"  srcpath        pathname of file to read\n"
	"  dstpath        if provided, encoded or decoded output is written there. Otherwise,\n"
	"                   easc encoded output is printed as text, or decoded raw data\n"
	"                   is printed as hex. WARNING: existing dstpath is overwritten\n\n"
	"options:\n"
	"  -h, --help     show this help message and exit\n"
	"  -v, --version  print the version number and exit\n"
	"  -d, --decode   decode srcfile from easc to raw data, else encode to easc\n"
	"  -t, --tab      escape horizontal tab characters (\\t 0x09) when encoding\n"
	"  -n, --lf       escape linefeed characters (\\n 0x0A) when encoding\n"
	"  -r, --cr       escape carriage return characters (\\r 0x0D) when encoding.\n"
	"                   This option is recommended where \\r is not used for line\n"
	"                   endings (Linux and newer MacOS)\n\n"
	"So: easc -r src.dat\n"
	"  prints the contents of any file in a format that is as human readable as possible,\n"
	"And: easc -r src.dat dst.txt\n"
	"  creates a file using that same easc encoded format (which is also printable ASCII),\n"
	"Where: easc -d dst.txt restored.dat\n"
	"  uses dst.txt to create restored.dat, which is identical to src.dat.\n";

char optstring[64] = "hvdtnr";

int main(int argc, char *argv[]) {
	int c;
	char *srcdata = NULL;
	long srclen = 0;
	char *dstdata = NULL;
	size_t dstsize = 0;  // amount of memory allocated for output
	size_t dstlen = 0;  // actual size of output
	char srcpath[256] = "";
	char dstpath[256] = "";
	bool decode = false;
	bool tab = false;
	bool lf = false;
	bool cr = false;

	while (true) {
		c = getopt_long(argc, argv, optstring, long_options, NULL);

		// Check for end of operation or error
		if (c == -1)
			break;

		// Handle options
		switch (c) {
			case 'h':
				printf(helpstr, easc_version);
				return 0;
			case 'v':
				printf("easc v%s\n", easc_version);
				return 0;
			case 'd':
				decode = true;
				break;
			case 't':
				tab = true;
				break;
			case 'n':
				lf = true;
				break;
			case 'r':
				cr = true;
				break;
		}
	}
	if (argc > optind + 2) {
		fprintf(stderr, "ERROR: More than two positional parameters (those that"
			" do not begin with - or --) were provided.  Only two are allowed. "
			" Use -h or --help to show help info.\n");
		return -1;
	}
	if (argc == optind) {
		fprintf(stderr, "ERROR: srcpath must be provided.  Use -h or --help to"
			" show help info.\n");
		return -1;
	}
	if (strlen(argv[optind]) >= sizeof(srcpath)) {
		fprintf(stderr, "ERROR: srcpath must not be more than %zu bytes.\n",
			sizeof(srcpath) - 1);
		return -1;
	}
	strcpy(srcpath, argv[optind]);

	if (argc > optind + 1) {
		if (strlen(argv[optind + 1]) >= sizeof(dstpath)) {
			fprintf(stderr, "ERROR: dstpath must not be more than %zu bytes.\n",
				sizeof(dstpath) - 1);
			return -1;
		}
		strcpy(dstpath, argv[optind + 1]);
	}

	FILE *srcfile = fopen(srcpath, "rb");
	if (srcfile == NULL) {
		fprintf(stderr, "Error opening srcpath=%s to read.\n", srcpath);
		return -1;
	}
	fseek(srcfile, 0, SEEK_END);
	srclen = ftell(srcfile);
	if (srclen < 1) {
		fprintf(stderr, "ERROR: Invalid file size (%li) for %s.\n",
			srclen, srcpath);
		fclose(srcfile);
		return -1;
	}
	fseek(srcfile, 0, SEEK_SET);  // reset file pointer
	srcdata = (char*) malloc(srclen);
	if (srcdata == NULL) {
		fprintf(stderr, "Error allocating %li bytes of memory to read contents"
			" of %s.\n", srclen, srcpath);
		fclose(srcfile);
		return -1;
	}
	if ((long) fread(srcdata, 1, srclen, srcfile) != srclen) {
		fprintf(stderr, "Error reading %li bytes from %s.\n", srclen, srcpath);
		free(srcdata);
		fclose(srcfile);
		return -1;
	}
	fclose(srcfile);
	if (decode)
		dstsize = srclen;  // decoded dstdata is never larger than srcdata
	else
		dstsize = 3 * srclen;  // may be as much as 3 times the size of srcdata
	dstdata = (char*) malloc(dstsize);
	if (dstdata == NULL) {
		fprintf(stderr, "Error allocating %zu bytes of memory for output.\n",
			dstsize);
		free(srcdata);
		return -1;
	}
	if (decode)
		dstlen = from_easc(dstdata, dstsize, srcdata, srclen);
	else
		dstlen = to_easc(dstdata, dstsize, srcdata, srclen, tab, lf, cr);

	int ret = 0;
	if (dstpath[0] != 0x00) {
		FILE *dstfile = fopen(dstpath, "wb");
		if (dstfile == NULL) {
			fprintf(stderr, "Error opening %s to write.\n", dstpath);
			ret = -1;
		} else if (fwrite(dstdata, 1, dstlen, dstfile) != dstlen) {
			fprintf(stderr, "Error writing %zu bytes to %s.\n",
				dstlen, dstpath);
			ret = -1;
		}
		if (dstfile != NULL)
			fclose(dstfile);
	} else if (decode) {
		// dstdata is raw binary data, and thus may not be printable.
		// So, print as hex
		for (size_t i = 0; i < dstlen; ++i)
			printf("%02X", (unsigned char) dstdata[i]);
		printf("\n");
	} else
		printf("%.*s\n", (int) dstlen, dstdata);
	free(srcdata);
	free(dstdata);
	return ret;
}
