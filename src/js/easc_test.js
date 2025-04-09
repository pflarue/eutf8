"use strict"
window.addEventListener("load", function(evt) {
	let decoder = new TextDecoder("utf-8");  // ASCII is a subset of UTF-8
	let encoder = new TextEncoder("utf-8");  // ASCII is a subset of UTF-8

	// testdata contains byte values (expressed as ASCII strings) for
	// pairs of raw byte data and equivalent easc data

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

	// This function wraps all easc escape sequences in spans with class set to
	// the provided cstr so that css styling can be used to disntinguish them.
	let tag_escapes = (srcstr, cstr) => {
		return srcstr.replace(/(\\[0-9A-F]{2})/g, "<span class=\"" + cstr + "\">$1</span>");
	}

	// Notice that none of the elements of testdata[] include a
	// NULL (\x00 -> \\00).  This allows other implementations of easc which
	// are expected to use this same set of tests to use a string length
	// function to determine the size of these elements.  An element containing
	// a NULL (\x00) would then ignore any data after the NULL.
	// Later tests do include NULL characters to verify that to_easc() handles
	// these correctly.
	let testdata = [
		// ASCII text with tab, lf, and cr
		["This\tis a\r\ntest", "This\tis a\r\ntest"],

		// Various backslashes in source data with no change required
		["\\AX \\XA \\ab \\aB \\Ab \\.X",
			"\\AX \\XA \\ab \\aB \\Ab \\.X"],

		// Backslash + HH.  dot required
		["\\FF", "\\.FF"],
		// Backslash + dot + hex.  additional dot required
		["\\.AB",  "\\..AB"],


		// Multiple dots after a backslash and followed by two upper
		// case hex digits.  The easc encoding adds additional dots.
		["\\DD \\.F0 \\...CA", "\\.DD \\..F0 \\....CA"],
		// This sequence with the last byte omitted such that an additional dot
		// is not added
		["\\DD \\.F0 \\...C", "\\.DD \\..F0 \\...C"],
		// This sequence with the last two bytes omitted such that an additional
		// dot is not added
		["\\DD \\.F0 \\...", "\\.DD \\..F0 \\..."],

		// Ending with a single dot after a backslash and followed by two upper
		// case hex digits.  The easc encoding adds additional dots.
		["\\DD \\.F0", "\\.DD \\..F0"],
		// This sequence with the last byte omitted such that an additional dot
		// is not added
		["\\DD \\.F", "\\.DD \\.F"],
		// This sequence with the last two bytes omitted such that an additional
		// dot is not added
		["\\DD \\.", "\\.DD \\."],
		// This sequence with the last three bytes omitted such that it ends
		// with a backslash
		["\\DD \\", "\\.DD \\"],

		// Ending with a backslash and followed by two upper case hex digits.
		// The easc encoding adds a dot.
		["\\DD \\BC", "\\.DD \\.BC"],
		// This sequence with the last byte omitted such that a dot is not added
		["\\DD \\B", "\\.DD \\B"],
		// This sequence with the last two bytes omitted such that it ends with
		// a backslash
		["\\DD \\", "\\.DD \\"],

		// empty input
		["", ""],

		// An example where the easc version is three times as long as raw
		["\xE2\x80\xF4\x9A", "\\E2\\80\\F4\\9A"],  // 4 bytes -> 12 bytes

	];

	// This test ensures that \x00 isn't mistakenly interpreted as an upper case
	// hex digit, as was the case in an early development version of easc.c
	// Because of the NULL, strlen(shortraw) isn't valid, so this cannot be
	// included in testdata[].
	let shortraw = Uint8Array.from("\\\x00CF", char => char.charCodeAt(0));
	let shortea = Uint8Array.from("\\\\00CF", char => char.charCodeAt(0));

	if (!areequal(to_easc(shortraw, false, false, false), shortea)) {
		console.log("ERROR to_easc(shortraw)",
			decoder.decode(shortea),
			JSON.stringify(Array.from(to_easc(shortraw, false, false, false))),
			JSON.stringify(Array.from(shortea)));
	}
	if (!areequal(shortraw, from_easc(shortea))) {
		console.log("ERROR from_easc(shortea)",
			decoder.decode(shortea), shortraw, from_easc(shortea));
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

	// This version of ea escapes all of horizontal tabs (\x09),
	// line feed (\x0A), and carriage return (\x0D)
	let ea = Uint8Array.from(
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0A\\0B\\0C\\0D\\0E\\0F"
		+ "\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		+ " !\"#$%&'()*+,-./"
		+ "0123456789:;<=>?"
		+ "@ABCDEFGHIJKLMNO"
		+ "PQRSTUVWXYZ[\\]^_"
		+ "`abcdefghijklmno"
		+ "pqrstuvwxyz{|}~\\7F",
		char => char.charCodeAt(0));

	if (!areequal(to_easc(raw, true, true, true), ea)) {
		console.log("ERROR to_easc() for (ascii)",
			decoder.decode(ea),
			JSON.stringify(Array.from(to_easc(raw, true, true, true))),
			JSON.stringify(Array.from(ea)));
	}
	if (!areequal(raw, from_easc(ea))) {
		console.log("ERROR from_easc() for (ascii)",
			decoder.decode(ea), raw, from_easc(ea));
	}

	// This version of ea escapes all but horizontal tab (\x09)
	let ea_tab = Uint8Array.from(
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\x09\\0A\\0B\\0C\\0D\\0E\\0F"
		+ "\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		+ " !\"#$%&'()*+,-./"
		+ "0123456789:;<=>?"
		+ "@ABCDEFGHIJKLMNO"
		+ "PQRSTUVWXYZ[\\]^_"
		+ "`abcdefghijklmno"
		+ "pqrstuvwxyz{|}~\\7F",
		char => char.charCodeAt(0));
	if (!areequal(to_easc(raw, false, true, true), ea_tab)) {
		console.log("ERROR to_easc() for (ascii tab)",
			decoder.decode(ea_tab),
			JSON.stringify(Array.from(to_easc(raw, false, true, true))),
			JSON.stringify(Array.from(ea_tab)));
	}
	if (!areequal(raw, from_easc(ea_tab))) {
		console.log("ERROR from_easc() for (ascii tab)",
			decoder.decode(ea_tab), raw, from_easc(ea_tab));
	}

	// This version of ea escapes all but line feed (\x0A)
	let ea_lf = Uint8Array.from(
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\x0A\\0B\\0C\\0D\\0E\\0F"
		+ "\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		+ " !\"#$%&'()*+,-./"
		+ "0123456789:;<=>?"
		+ "@ABCDEFGHIJKLMNO"
		+ "PQRSTUVWXYZ[\\]^_"
		+ "`abcdefghijklmno"
		+ "pqrstuvwxyz{|}~\\7F",
		char => char.charCodeAt(0));
	if (!areequal(to_easc(raw, true, false, true), ea_lf)) {
		console.log("ERROR to_easc() for (ascii lf)",
			decoder.decode(ea_lf),
			JSON.stringify(Array.from(to_easc(raw, true, false, true))),
			JSON.stringify(Array.from(ea_lf)));
	}
	if (!areequal(raw, from_easc(ea_lf))) {
		console.log("ERROR from_easc() for (ascii lf)",
			decoder.decode(ea_lf), raw, from_easc(ea_lf));
	}

	// This version of ea escapes all but carriage returns (\x0D)
	let ea_cr = Uint8Array.from(
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0A\\0B\\0C\x0D\\0E\\0F"
		+ "\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		+ " !\"#$%&'()*+,-./"
		+ "0123456789:;<=>?"
		+ "@ABCDEFGHIJKLMNO"
		+ "PQRSTUVWXYZ[\\]^_"
		+ "`abcdefghijklmno"
		+ "pqrstuvwxyz{|}~\\7F",
		char => char.charCodeAt(0));
	if (!areequal(to_easc(raw, true, true, false), ea_cr)) {
		console.log("ERROR to_easc() for (ascii cr)",
			decoder.decode(ea_lf),
			JSON.stringify(Array.from(to_easc(raw, true, true, false))),
			JSON.stringify(Array.from(ea_lf)));
	}
	if (!areequal(raw, from_easc(ea_lf))) {
		console.log("ERROR from_easc() for (ascii cr)",
			decoder.decode(ea_lf), raw, from_easc(ea_lf));
	}

	// This version of ea escapes none of horizontal tabs (\x09),
	// line feed (\x0A), nor carriage return (\x0D)
	let ea_tablfcr = Uint8Array.from(
		"\\00\\01\\02\\03\\04\\05\\06\\07\\08\x09\x0A\\0B\\0C\x0D\\0E\\0F"
		+ "\\10\\11\\12\\13\\14\\15\\16\\17\\18\\19\\1A\\1B\\1C\\1D\\1E\\1F"
		+ " !\"#$%&'()*+,-./"
		+ "0123456789:;<=>?"
		+ "@ABCDEFGHIJKLMNO"
		+ "PQRSTUVWXYZ[\\]^_"
		+ "`abcdefghijklmno"
		+ "pqrstuvwxyz{|}~\\7F",
		char => char.charCodeAt(0));
	if (!areequal(to_easc(raw, false, false, false), ea_tablfcr)) {
		console.log("ERROR to_easc() for (ascii tablfcr)",
			decoder.decode(ea_tablfcr),
			JSON.stringify(Array.from(to_easc(raw, false, false, false))),
			JSON.stringify(Array.from(ea_tablfcr)));
	}
	if (!areequal(raw, from_easc(ea_tablfcr))) {
		console.log("ERROR from_easc() for (ascii tablfcr)",
			decoder.decode(ea_tablfcr), raw, from_easc(ea_tablfcr));
	}

	for (const testcase of testdata) {
		raw = Uint8Array.from(testcase[0], char => char.charCodeAt(0));
		ea = Uint8Array.from(testcase[1],  char => char.charCodeAt(0));
		if (!areequal(to_easc(raw, false, false, false), ea)) {
			console.log("ERROR to_easc() for",
				decoder.decode(ea),
				JSON.stringify(Array.from(to_easc(raw, false, false, false))),
				JSON.stringify(Array.from(ea)));
		}
		if (!areequal(raw, from_easc(ea))) {
			console.log("ERROR from_easc() for", decoder.decode(ea), raw, from_easc(ea));
		}
	}

	// Use escape_tab=escape_lf=False, but escape_cr=True as was used in the
	// python function add_bit_errors(), which created them.
	console.log("Done with standard tests,  Continuing with ASCII demo text");
	eadiv0.innerHTML = "<pre>" + asciidemo_str + "</pre>";
	raw = encoder.encode(asciidemo_str);
	ea = encoder.encode(asciidemo_str);
	if (!areequal(to_easc(raw, false, false, true), ea)) {
		console.log("ERROR to_easc() for UTF-8 demo text");
	}
	if (!areequal(raw, from_easc(ea))) {
		console.log("ERROR from_easc() for UTF-8 demo text");
	}

	console.log("testing UTF8 demo BER0001");
	eadiv1.innerHTML = "<pre>" + asciidemo_BER0001_ea + "</pre>";
	raw = asciidemo_BER0001;
	ea = encoder.encode(asciidemo_BER0001_ea);
	if (!areequal(to_easc(raw, false, false, true), ea)) {
		console.log(to_easc(raw, false, false, true), ea);
		console.log("ERROR to_easc() for UTF-8 demo BER0001");
	}
	if (!areequal(raw, from_easc(ea))) {
		console.log("ERROR from_easc() for UTF-8 demo BER0001");
	}

	console.log("testing UTF8 demo BER001");
	eadiv1.innerHTML = tag_escapes(asciidemo_BER001_ea.replace(/\n/g, "<br />"), "ee") + "</pre>";
	raw = asciidemo_BER001;
	ea = encoder.encode(asciidemo_BER001_ea);
	if (!areequal(to_easc(raw, false, false, true), ea)) {
		console.log("ERROR to_easc() for UTF-8 demo BER001");
	}
	if (!areequal(raw, from_easc(ea))) {
		console.log("ERROR from_easc() for UTF-8 demo BER001");
	}

	console.log("testing UTF8 demo BER01");
	eadiv1.innerHTML = "<pre>" +  tag_escapes(asciidemo_BER01_ea.replace(/\n/g, "<br />"), "ee") + "</pre>";
	raw = asciidemo_BER01;
	ea = encoder.encode(asciidemo_BER01_ea);
	if (!areequal(to_easc(raw, false, false, true), ea)) {
		console.log("ERROR to_easc() for UTF-8 demo BER001");
	}
	if (!areequal(raw, from_easc(ea))) {
		console.log("ERROR from_easc() for UTF-8 demo BER001");
	}

	console.log("test complete.  Successful if no ERROR messages were logged.");
});
