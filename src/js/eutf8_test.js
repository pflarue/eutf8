"use strict"
window.addEventListener("load", function(evt) {
	let decoder = new TextDecoder("utf-8");
	let encoder = new TextEncoder("utf-8");

	// testdata contains byte values (expressed as ASCII strings) for
	// pairs of raw byte data and equivalent eutf8 data

	let areequal = (a, b) => {
		if (a.length != b.length) {
			console.log("areequal lengths don't match", a.length, b.length);
			return false;
		}
		for (let i = 0; i < a.length; ++i) {
			if (a[i] != b[i]) {
				console.log("areequal failed at", i, a[i], b[i]);
				return false;
			}
		}
		return true;
	}

	// This function wraps all eutf8 escape sequences in spans with class set to
	// the provided cstr so that css styling can be used to disntinguish them.
	let tag_escapes = (srcstr, cstr) => {
		return srcstr.replace(/(\\[0-9A-F]{2})/g, "<span class=\"" + cstr + "\">$1</span>");
	}

	// Notice that none of the elements of testdata[] include a
	// NULL (\x00 -> \\00).  This allows other implementations of eutf8 which
	// are expected to use this same set of tests to use a string length
	// function to determine the size of these elements.  An element containing
	// a NULL (\x00) would then ignore any data after the NULL.
	// Later tests do include NULL characters to verify that to_eutf8() handles
	// these correctly.
	let testdata = [
		// ASCII text with tab, lf, and cr
		["This\tis a\r\ntest", "This\tis a\r\ntest"],

		// Various backslashes in source data with no change required
		["\\AX \\XA \\ab \\aB \\Ab \\\xE2\x80\x8BX",
			"\\AX \\XA \\ab \\aB \\Ab \\\xE2\x80\x8BX"],

		// Backslash + HH.  ZWS required
		["\\FF", "\\\xE2\x80\x8BFF"],
		// Backslash + ZWS + hex.  additional ZWS required
		["\\\xE2\x80\x8BAB",  "\\\xE2\x80\x8B\xE2\x80\x8BAB"],

		// All 32 valid UTF-8 C1 control codes
		["\xC2\x80\xC2\x81\xC2\x82\xC2\x83\xC2\x84\xC2\x85\xC2\x86\xC2\x87"
		+ "\xC2\x88\xC2\x89\xC2\x8A\xC2\x8B\xC2\x8C\xC2\x8D\xC2\x8E\xC2\x8F"
		+ "\xC2\x90\xC2\x91\xC2\x92\xC2\x93\xC2\x94\xC2\x95\xC2\x96\xC2\x97"
		+ "\xC2\x98\xC2\x99\xC2\x9A\xC2\x9B\xC2\x9C\xC2\x9D\xC2\x9E\xC2\x9F",
		"\\C2\\80\\C2\\81\\C2\\82\\C2\\83\\C2\\84\\C2\\85\\C2\\86\\C2\\87"
		+ "\\C2\\88\\C2\\89\\C2\\8A\\C2\\8B\\C2\\8C\\C2\\8D\\C2\\8E\\C2\\8F"
		+ "\\C2\\90\\C2\\91\\C2\\92\\C2\\93\\C2\\94\\C2\\95\\C2\\96\\C2\\97"
		+ "\\C2\\98\\C2\\99\\C2\\9A\\C2\\9B\\C2\\9C\\C2\\9D\\C2\\9E\\C2\\9F"],


		// All 66 valid UTF-8 noncharacters
		["\xEF\xB7\x90 \xEF\xB7\x91 \xEF\xB7\x92 \xEF\xB7\x93"
		+ "\xEF\xB7\x94 \xEF\xB7\x95 \xEF\xB7\x96 \xEF\xB7\x97"
		+ "\xEF\xB7\x98 \xEF\xB7\x99 \xEF\xB7\x9A \xEF\xB7\x9B"
		+ "\xEF\xB7\x9C \xEF\xB7\x9D \xEF\xB7\x9E \xEF\xB7\x9F"
		+ "\xEF\xB7\xA0 \xEF\xB7\xA1 \xEF\xB7\xA2 \xEF\xB7\xA3"
		+ "\xEF\xB7\xA4 \xEF\xB7\xA5 \xEF\xB7\xA6 \xEF\xB7\xA7"
		+ "\xEF\xB7\xA8 \xEF\xB7\xA9 \xEF\xB7\xAA \xEF\xB7\xAB"
		+ "\xEF\xB7\xAC \xEF\xB7\xAD \xEF\xB7\xAE \xEF\xB7\xAF"
		+ "\xEF\xBF\xBE \xEF\xBF\xBF"
		+ "\xF0\x9F\xBF\xBE \xF0\x9F\xBF\xBF"
		+ "\xF0\xAF\xBF\xBE \xF0\xAF\xBF\xBF"
		+ "\xF0\xBF\xBF\xBE \xF0\xBF\xBF\xBF"
		+ "\xF1\x8F\xBF\xBE \xF1\x8F\xBF\xBF"
		+ "\xF1\x9F\xBF\xBE \xF1\x9F\xBF\xBF"
		+ "\xF1\xAF\xBF\xBE \xF1\xAF\xBF\xBF"
		+ "\xF1\xBF\xBF\xBE \xF1\xBF\xBF\xBF"
		+ "\xF2\x8F\xBF\xBE \xF2\x8F\xBF\xBF"
		+ "\xF2\x9F\xBF\xBE \xF2\x9F\xBF\xBF"
		+ "\xF2\xAF\xBF\xBE \xF2\xAF\xBF\xBF"
		+ "\xF2\xBF\xBF\xBE \xF2\xBF\xBF\xBF"
		+ "\xF3\x8F\xBF\xBE \xF3\x8F\xBF\xBF"
		+ "\xF3\x9F\xBF\xBE \xF3\x9F\xBF\xBF"
		+ "\xF3\xAF\xBF\xBE \xF3\xAF\xBF\xBF"
		+ "\xF3\xBF\xBF\xBE \xF3\xBF\xBF\xBF"
		+ "\xF4\x8F\xBF\xBE \xF4\x8F\xBF\xBF",
		"\\EF\\B7\\90 \\EF\\B7\\91 \\EF\\B7\\92 \\EF\\B7\\93"
		+ "\\EF\\B7\\94 \\EF\\B7\\95 \\EF\\B7\\96 \\EF\\B7\\97"
		+ "\\EF\\B7\\98 \\EF\\B7\\99 \\EF\\B7\\9A \\EF\\B7\\9B"
		+ "\\EF\\B7\\9C \\EF\\B7\\9D \\EF\\B7\\9E \\EF\\B7\\9F"
		+ "\\EF\\B7\\A0 \\EF\\B7\\A1 \\EF\\B7\\A2 \\EF\\B7\\A3"
		+ "\\EF\\B7\\A4 \\EF\\B7\\A5 \\EF\\B7\\A6 \\EF\\B7\\A7"
		+ "\\EF\\B7\\A8 \\EF\\B7\\A9 \\EF\\B7\\AA \\EF\\B7\\AB"
		+ "\\EF\\B7\\AC \\EF\\B7\\AD \\EF\\B7\\AE \\EF\\B7\\AF"
		+ "\\EF\\BF\\BE \\EF\\BF\\BF"
		+ "\\F0\\9F\\BF\\BE \\F0\\9F\\BF\\BF"
		+ "\\F0\\AF\\BF\\BE \\F0\\AF\\BF\\BF"
		+ "\\F0\\BF\\BF\\BE \\F0\\BF\\BF\\BF"
		+ "\\F1\\8F\\BF\\BE \\F1\\8F\\BF\\BF"
		+ "\\F1\\9F\\BF\\BE \\F1\\9F\\BF\\BF"
		+ "\\F1\\AF\\BF\\BE \\F1\\AF\\BF\\BF"
		+ "\\F1\\BF\\BF\\BE \\F1\\BF\\BF\\BF"
		+ "\\F2\\8F\\BF\\BE \\F2\\8F\\BF\\BF"
		+ "\\F2\\9F\\BF\\BE \\F2\\9F\\BF\\BF"
		+ "\\F2\\AF\\BF\\BE \\F2\\AF\\BF\\BF"
		+ "\\F2\\BF\\BF\\BE \\F2\\BF\\BF\\BF"
		+ "\\F3\\8F\\BF\\BE \\F3\\8F\\BF\\BF"
		+ "\\F3\\9F\\BF\\BE \\F3\\9F\\BF\\BF"
		+ "\\F3\\AF\\BF\\BE \\F3\\AF\\BF\\BF"
		+ "\\F3\\BF\\BF\\BE \\F3\\BF\\BF\\BF"
		+ "\\F4\\8F\\BF\\BE \\F4\\8F\\BF\\BF"],

		// The start and end of each block of valid UTF-8 private use characters
		["\xEE\x80\x80\xEE\x80\x81 \xEF\xA3\xBE\xEF\xA3\xBF"
		+ "\xF3\xB0\x80\x80\xF3\xB0\x80\x81 \xF3\xBF\xBF\xBC\xF3\xBF\xBF\xBD"
		+ "\xF4\x80\x80\x80\xF4\x80\x80\x81 \xF4\x8F\xBF\xBC\xF4\x8F\xBF\xBD",
		"\\EE\\80\\80\\EE\\80\\81 \\EF\\A3\\BE\\EF\\A3\\BF"
		+ "\\F3\\B0\\80\\80\\F3\\B0\\80\\81 \\F3\\BF\\BF\\BC\\F3\\BF\\BF\\BD"
		+ "\\F4\\80\\80\\80\\F4\\80\\80\\81 \\F4\\8F\\BF\\BC\\F4\\8F\\BF\\BD"],

		// Some byte sequences just outside blocks of Well Formed UTF-8
		["\x80\x81"
		+ "\xC2\x7F\xC2\xC0 \xC3\x7F\xC3\xC0 \xDE\x7F\xDE\xC0 \xC5\xDF\xDF\xC0"
		+ "\xE0\xA0\x7F\xE0\xBF\xC0 \xE0\x9F\x80\xE0\xC0\xBF"
		+ "\xE1\x80\x7F\xE1\xBF\xC0 \xE1\x7F\x80\xE1\xC0\xBF"
		+ "\xEC\x80\x7F\xEC\xBF\xC0 \xEC\x7F\x80\xEC\xC0\xBF"
		+ "\xED\x80\x7F\xED\x9F\xC0 \xED\x7F\x80\xED\xA0\xBF"
		+ "\xEE\x80\x7F\xEE\xBF\xC0 \xEE\x7F\x80\xEE\xC0\xBF"
		+ "\xEF\x80\x7F\xEF\xBF\xC0 \xEF\x7F\x80\xEF\xC0\xBF"
		+ "\xF0\x90\x80\x7F\xF0\xBF\xBF\xC0 \xF0\x90\x7F\x80\xF0\xBF\xC0\xBF"
		+ "\xF1\x80\x80\x7F\xF1\xBF\xBF\xC0 \xF1\x7F\x80\x80\xF1\xC0\xBF\xBF"
		+ "\xF3\x80\x80\x7F\xF3\xBF\xBF\xC0 \xF3\x80\x7F\x80\xF3\xBF\xC0\xBF"
		+ "\xF4\x80\x80\x7F\xF4\x8F\xBF\xC0 \xF4\x80\x7F\x80\xF4\x8F\xC0\xBF",
		"\\80\\81"
		+ "\\C2\\7F\\C2\\C0 \\C3\\7F\\C3\\C0 \\DE\\7F\\DE\\C0 \\C5\\DF\\DF\\C0"
		+ "\\E0\\A0\\7F\\E0\\BF\\C0 \\E0\\9F\\80\\E0\\C0\\BF"
		+ "\\E1\\80\\7F\\E1\\BF\\C0 \\E1\\7F\\80\\E1\\C0\\BF"
		+ "\\EC\\80\\7F\\EC\\BF\\C0 \\EC\\7F\\80\\EC\\C0\\BF"
		+ "\\ED\\80\\7F\\ED\\9F\\C0 \\ED\\7F\\80\\ED\\A0\\BF"
		+ "\\EE\\80\\7F\\EE\\BF\\C0 \\EE\\7F\\80\\EE\\C0\\BF"
		+ "\\EF\\80\\7F\\EF\\BF\\C0 \\EF\\7F\\80\\EF\\C0\\BF"
		+ "\\F0\\90\\80\\7F\\F0\\BF\\BF\\C0 \\F0\\90\\7F\\80\\F0\\BF\\C0\\BF"
		+ "\\F1\\80\\80\\7F\\F1\\BF\\BF\\C0 \\F1\\7F\\80\\80\\F1\\C0\\BF\\BF"
		+ "\\F3\\80\\80\\7F\\F3\\BF\\BF\\C0 \\F3\\80\\7F\\80\\F3\\BF\\C0\\BF"
		+ "\\F4\\80\\80\\7F\\F4\\8F\\BF\\C0 \\F4\\80\\7F\\80\\F4\\8F\\C0\\BF"],

		// Some valid UTF-8 with first byte between 0xC2 and 0xDF (not C1 control)
		["\xC2\xAB\xCF\x80 \xDD\xBF \xDF\x86",
			"\xC2\xAB\xCF\x80 \xDD\xBF \xDF\x86"],

		// Some valid UTF-8 with first byte 0xE0
		["\xE0\xA0\x80 \xE0\xBF\xBF \xE0\xB5\x90 \xE0\xA5\xBB",
			"\xE0\xA0\x80 \xE0\xBF\xBF \xE0\xB5\x90 \xE0\xA5\xBB"],

		// Some valid UTF-8 with first byte 0xE1 to 0xEC
		["\xE1\x80\x80 \xEC\xBF\xBF \xE2\x95\x90 \xEA\xA5\xBB",
			"\xE1\x80\x80 \xEC\xBF\xBF \xE2\x95\x90 \xEA\xA5\xBB"],

		// Some valid UTF-8 with first byte 0xED
		["\xED\x80\x80 \xED\x9F\xBF \xED\x95\x90 \xED\x8D\xBB",
			"\xED\x80\x80 \xED\x9F\xBF \xED\x95\x90 \xED\x8D\xBB"],

		// Some valid (non-private) UTF-8 with first byte 0xEF
		["\xEF\xA4\x80 \xEF\xBF\xBD \xEF\xB7\x8F \xEF\xB8\xAF",
			"\xEF\xA4\x80 \xEF\xBF\xBD \xEF\xB7\x8F \xEF\xB8\xAF"],

		// Some private use UTF-8 with first byte 0xEE and 0xEF (escaped)
		["\xEE\x80\x80 \xEF\xA3\xBF \xEE\x80\xBF \xEF\xA3\x80",
			"\\EE\\80\\80 \\EF\\A3\\BF \\EE\\80\\BF \\EF\\A3\\80"],

		// Test proper handling of an othewise valid UTF-8 text which is
		// truncated in the middle of a multibyte character such that the
		// remaining initial bytes of that character must be escaped because
		// they are no longer valid.
		// A series of space separated 3-byte characters: OK
		["\xE3\x82\xB3 \xE3\x83\xB3 \xE3\x83\x8B \xE3\x83\x81 \xE3\x83\x8F",
			"\xE3\x82\xB3 \xE3\x83\xB3 \xE3\x83\x8B \xE3\x83\x81 \xE3\x83\x8F"],
		// This sequence with the last byte omitted
		["\xE3\x82\xB3 \xE3\x83\xB3 \xE3\x83\x8B \xE3\x83\x81 \xE3\x83",
			"\xE3\x82\xB3 \xE3\x83\xB3 \xE3\x83\x8B \xE3\x83\x81 \\E3\\83"],
		// This sequence with the last two bytes omitted
		["\xE3\x82\xB3 \xE3\x83\xB3 \xE3\x83\x8B \xE3\x83\x81 \xE3",
			"\xE3\x82\xB3 \xE3\x83\xB3 \xE3\x83\x8B \xE3\x83\x81 \\E3"],

		// A series of space separated 4-byte characters: OK
		["\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \xF3\xA2\x87\xB0",
			"\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \xF3\xA2\x87\xB0"],
		// This sequence with the last byte omitted
		["\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \xF3\xA2\x87",
			"\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \\F3\\A2\\87"],
		// This sequence with the last two bytes omitted
		["\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \xF3\xA2",
			"\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \\F3\\A2"],
		// This sequence with the last three bytes omitted
		["\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \xF3",
			"\xF0\xA2\x87\xB0 \xF1\xA2\x87\xB0 \xF2\xA2\x87\xB0 \\F3"],

		// Multiple zero width spaces after a backslash and followed by two upper
		// case hex digits.  The eutf8 encoding adds additional zero width
		// spaces.
		["\\DD \\\xE2\x80\x8BF0 \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8BCA",
			"\\\xE2\x80\x8BDD \\\xE2\x80\x8B\xE2\x80\x8BF0"
			+ " \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8BCA"],
		// This sequence with the last byte omitted such that an additional zero
		// width space is not added
		["\\DD \\\xE2\x80\x8BF0 \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8BC",
			"\\\xE2\x80\x8BDD \\\xE2\x80\x8B\xE2\x80\x8BF0"
			+ " \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8BC"],
		// This sequence with the last two bytes omitted such that an additional
		// zero width space is not added
		["\\DD \\\xE2\x80\x8BF0 \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8B",
			"\\\xE2\x80\x8BDD \\\xE2\x80\x8B\xE2\x80\x8BF0"
			+ " \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80\x8B"],
		// This sequence with the last three bytes omitted such the last zero
		// width space is incomplete so that its remaining bytes must be escaped.
		["\\DD \\\xE2\x80\x8BF0 \\\xE2\x80\x8B\xE2\x80\x8B\xE2\x80",
			"\\\xE2\x80\x8BDD \\\xE2\x80\x8B\xE2\x80\x8BF0"
			+ " \\\xE2\x80\x8B\xE2\x80\x8B\\E2\\80"],
		// This sequence with the last four bytes omitted such the last zero
		// width space is incomplete so that its remaining byte must be escaped.
		["\\DD \\\xE2\x80\x8BF0 \\\xE2\x80\x8B\xE2\x80\x8B\xE2",
			"\\\xE2\x80\x8BDD \\\xE2\x80\x8B\xE2\x80\x8BF0"
			+ " \\\xE2\x80\x8B\xE2\x80\x8B\\E2"],

		// Ending with a single zero width space after a backslash and followed
		// by two upper case hex digits.  The eutf8 encoding adds additional zero
		// width spaces.
		["\\DD \\\xE2\x80\x8BF0",
			"\\\xE2\x80\x8BDD \\\xE2\x80\x8B\xE2\x80\x8BF0"],
		// This sequence with the last byte omitted such that an additional zero
		// width space is not added
		["\\DD \\\xE2\x80\x8BF",
			"\\\xE2\x80\x8BDD \\\xE2\x80\x8BF"],
		// This sequence with the last two bytes omitted such that an additional
		// zero width space is not added
		["\\DD \\\xE2\x80\x8B",
			"\\\xE2\x80\x8BDD \\\xE2\x80\x8B"],
		// This sequence with the last three bytes omitted such the zero width
		// space is incomplete so that its remaining bytes must be escaped.
		["\\DD \\\xE2\x80",
			"\\\xE2\x80\x8BDD \\\\E2\\80"],
		// This sequence with the last four bytes omitted such the zero width
		// space is incomplete so that its remaining byte must be escaped.
		["\\DD \\\xE2",
			"\\\xE2\x80\x8BDD \\\\E2"],
		// This sequence with the last five bytes omitted such that it ends with
		// a backslash
		["\\DD \\",
			"\\\xE2\x80\x8BDD \\"],

		// Ending with a backslash and followed by two upper case hex digits.
		// The eutf8 encoding adds a zero width spaces.
		["\\DD \\BC",
			"\\\xE2\x80\x8BDD \\\xE2\x80\x8BBC"],
		// This sequence with the last byte omitted such that a zero width space
		// is not added
		["\\DD \\B",
			"\\\xE2\x80\x8BDD \\B"],
		// This sequence with the last two bytes omitted such that it ends with
		// a backslash
		["\\DD \\",
			"\\\xE2\x80\x8BDD \\"],

		// empty input
		["", ""],

		// An example where the eutf8 version is three times as long as raw
		["\xE2\x80\xF4\x9A", "\\E2\\80\\F4\\9A"],  // 4 bytes -> 12 bytes

	];

	// This test ensures that \x00 isn't mistakenly interpreted as an upper case
	// hex digit, as was the case in an early development version of eutf8.c
	// Because of the NULL, strlen(shortraw) isn't valid, so this cannot be
	// included in testdata[].
	let shortraw = Uint8Array.from("\\\x00CF", char => char.charCodeAt(0));
	let shorte8 = Uint8Array.from("\\\\00CF", char => char.charCodeAt(0));

	if (!areequal(to_eutf8(shortraw, false, false, false), shorte8)) {
		console.log("ERROR to_eutf8(shortraw)",
			decoder.decode(shorte8),
			JSON.stringify(Array.from(to_eutf8(shortraw, false, false, false))),
			JSON.stringify(Array.from(shorte8)));
	}
	if (!areequal(shortraw, from_eutf8(shorte8))) {
		console.log("ERROR from_eutf8(shorte8)",
			decoder.decode(shorte8), shortraw, from_eutf8(shorte8));
	}


	let raw = Uint8Array.from(
		"\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0A\x0B\x0C\x0D\x0E\x0F"
		+ "\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F"
		+ "\x20\x21\x22\x23\x24\x25\x26\x27\x28\x29\x2A\x2B\x2C\x2D\x2E\x2F"
		+ "\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x3A\x3B\x3C\x3D\x3E\x3F"
		+ "\x40\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F"
		+ "\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x5B\x5C\x5D\x5E\x5F"
		+ "\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F"
		+ "\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x7B\x7C\x7D\x7E\x7F",
		char => char.charCodeAt(0));

	// This version of e8 escapes all of horizontal tabs (\x09),
	// line feed (\x0A), and carriage return (\x0D)
	let e8 = Uint8Array.from(
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0A\\0B\\0C\\0D\\0E\\0F"
		+ "\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		+ " !\"#$%&'()*+,-./"
		+ "0123456789:;<=>?"
		+ "@ABCDEFGHIJKLMNO"
		+ "PQRSTUVWXYZ[\\]^_"
		+ "`abcdefghijklmno"
		+ "pqrstuvwxyz{|}~\\7F",
		char => char.charCodeAt(0));

	if (!areequal(to_eutf8(raw, true, true, true), e8)) {
		console.log("ERROR to_eutf8() for (ascii)",
			decoder.decode(e8),
			JSON.stringify(Array.from(to_eutf8(raw, true, true, true))),
			JSON.stringify(Array.from(e8)));
	}
	if (!areequal(raw, from_eutf8(e8))) {
		console.log("ERROR from_eutf8() for (ascii)",
			decoder.decode(e8), raw, from_eutf8(e8));
	}

	// This version of e8 escapes all but horizontal tab (\x09)
	let e8_tab = Uint8Array.from(
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\x09\\0A\\0B\\0C\\0D\\0E\\0F"
		+ "\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		+ " !\"#$%&'()*+,-./"
		+ "0123456789:;<=>?"
		+ "@ABCDEFGHIJKLMNO"
		+ "PQRSTUVWXYZ[\\]^_"
		+ "`abcdefghijklmno"
		+ "pqrstuvwxyz{|}~\\7F",
		char => char.charCodeAt(0));
	if (!areequal(to_eutf8(raw, false, true, true), e8_tab)) {
		console.log("ERROR to_eutf8() for (ascii tab)",
			decoder.decode(e8_tab),
			JSON.stringify(Array.from(to_eutf8(raw, false, true, true))),
			JSON.stringify(Array.from(e8_tab)));
	}
	if (!areequal(raw, from_eutf8(e8_tab))) {
		console.log("ERROR from_eutf8() for (ascii tab)",
			decoder.decode(e8_tab), raw, from_eutf8(e8_tab));
	}

	// This version of e8 escapes all but line feed (\x0A)
	let e8_lf = Uint8Array.from(
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\x0A\\0B\\0C\\0D\\0E\\0F"
		+ "\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		+ " !\"#$%&'()*+,-./"
		+ "0123456789:;<=>?"
		+ "@ABCDEFGHIJKLMNO"
		+ "PQRSTUVWXYZ[\\]^_"
		+ "`abcdefghijklmno"
		+ "pqrstuvwxyz{|}~\\7F",
		char => char.charCodeAt(0));
	if (!areequal(to_eutf8(raw, true, false, true), e8_lf)) {
		console.log("ERROR to_eutf8() for (ascii lf)",
			decoder.decode(e8_lf),
			JSON.stringify(Array.from(to_eutf8(raw, true, false, true))),
			JSON.stringify(Array.from(e8_lf)));
	}
	if (!areequal(raw, from_eutf8(e8_lf))) {
		console.log("ERROR from_eutf8() for (ascii lf)",
			decoder.decode(e8_lf), raw, from_eutf8(e8_lf));
	}

	// This version of e8 escapes all but carriage returns (\x0D)
	let e8_cr = Uint8Array.from(
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0A\\0B\\0C\x0D\\0E\\0F"
		+ "\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		+ " !\"#$%&'()*+,-./"
		+ "0123456789:;<=>?"
		+ "@ABCDEFGHIJKLMNO"
		+ "PQRSTUVWXYZ[\\]^_"
		+ "`abcdefghijklmno"
		+ "pqrstuvwxyz{|}~\\7F",
		char => char.charCodeAt(0));
	if (!areequal(to_eutf8(raw, true, true, false), e8_cr)) {
		console.log("ERROR to_eutf8() for (ascii cr)",
			decoder.decode(e8_lf),
			JSON.stringify(Array.from(to_eutf8(raw, true, true, false))),
			JSON.stringify(Array.from(e8_lf)));
	}
	if (!areequal(raw, from_eutf8(e8_lf))) {
		console.log("ERROR from_eutf8() for (ascii cr)",
			decoder.decode(e8_lf), raw, from_eutf8(e8_lf));
	}

	// This version of e8 escapes none of horizontal tabs (\x09),
	// line feed (\x0A), nor carriage return (\x0D)
	let e8_tablfcr = Uint8Array.from(
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\x09\x0A\\0B\\0C\x0D\\0E\\0F"
		+ "\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		+ " !\"#$%&'()*+,-./"
		+ "0123456789:;<=>?"
		+ "@ABCDEFGHIJKLMNO"
		+ "PQRSTUVWXYZ[\\]^_"
		+ "`abcdefghijklmno"
		+ "pqrstuvwxyz{|}~\\7F",
		char => char.charCodeAt(0));
	if (!areequal(to_eutf8(raw, false, false, false), e8_tablfcr)) {
		console.log("ERROR to_eutf8() for (ascii tablfcr)",
			decoder.decode(e8_tablfcr),
			JSON.stringify(Array.from(to_eutf8(raw, false, false, false))),
			JSON.stringify(Array.from(e8_tablfcr)));
	}
	if (!areequal(raw, from_eutf8(e8_tablfcr))) {
		console.log("ERROR from_eutf8() for (ascii tablfcr)",
			decoder.decode(e8_tablfcr), raw, from_eutf8(e8_tablfcr));
	}

	for (const testcase of testdata) {
		raw = Uint8Array.from(testcase[0], char => char.charCodeAt(0));
		e8 = Uint8Array.from(testcase[1],  char => char.charCodeAt(0));
		if (!areequal(to_eutf8(raw, false, false, false), e8)) {
			console.log("ERROR to_eutf8() for",
				decoder.decode(e8),
				JSON.stringify(Array.from(to_eutf8(raw, false, false, false))),
				JSON.stringify(Array.from(e8)));
		}
		if (!areequal(raw, from_eutf8(e8))) {
			console.log("ERROR from_eutf8() for", decoder.decode(e8), raw, from_eutf8(e8));
		}
	}

	// Use escape_tab=escape_lf=False, but escape_cr=True as was used in the
	// python function add_bit_errors(), which created them.
	console.log("Done with standard tests,  Continuing with UTF8 demo text");
	e8div0.innerHTML = "<pre>" + utf8demo_str + "</pre>";
	raw = encoder.encode(utf8demo_str);
	e8 = encoder.encode(utf8demo_str);
	if (!areequal(to_eutf8(raw, false, false, true), e8)) {
		console.log("ERROR to_eutf8() for UTF-8 demo text");
	}
	if (!areequal(raw, from_eutf8(e8))) {
		console.log("ERROR from_eutf8() for UTF-8 demo text");
	}

	console.log("testing UTF8 demo BER0001");
	e8div1.innerHTML = "<pre>" + utf8demo_BER0001_e8 + "</pre>";
	raw = utf8demo_BER0001;
	e8 = encoder.encode(utf8demo_BER0001_e8);
	if (!areequal(to_eutf8(raw, false, false, true), e8)) {
		console.log("ERROR to_eutf8() for UTF-8 demo BER0001");
	}
	if (!areequal(raw, from_eutf8(e8))) {
		console.log("ERROR from_eutf8() for UTF-8 demo BER0001");
	}

	console.log("testing UTF8 demo BER001");
	e8div1.innerHTML = tag_escapes(utf8demo_BER001_e8.replace(/\n/g, "<br />"), "ee") + "</pre>";
	raw = utf8demo_BER001;
	e8 = encoder.encode(utf8demo_BER001_e8);
	if (!areequal(to_eutf8(raw, false, false, true), e8)) {
		console.log("ERROR to_eutf8() for UTF-8 demo BER001");
	}
	if (!areequal(raw, from_eutf8(e8))) {
		console.log("ERROR from_eutf8() for UTF-8 demo BER001");
	}

	console.log("testing UTF8 demo BER01");
	e8div1.innerHTML = "<pre>" +  tag_escapes(utf8demo_BER01_e8.replace(/\n/g, "<br />"), "ee") + "</pre>";
	raw = utf8demo_BER01;
	e8 = encoder.encode(utf8demo_BER01_e8);
	if (!areequal(to_eutf8(raw, false, false, true), e8)) {
		console.log("ERROR to_eutf8() for UTF-8 demo BER001");
	}
	if (!areequal(raw, from_eutf8(e8))) {
		console.log("ERROR from_eutf8() for UTF-8 demo BER001");
	}

	console.log("test complete.  Successful if no ERROR messages were logged.");
});
