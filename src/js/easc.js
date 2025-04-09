"use strict"

/*
functions to convert data to/from easc (escaped ASCII) encoding

See easc.md for details about the properties and usefulness of easc encoding.

These implementations of to_easc() and from_easc() are functional, but not
optimized.  The logic of to_easc() should be easy enough to follow.
*/

let easc_version = "0.9.0";

let from_easc = (data) => {
	// Return a copy of the data used to create the easc data
	let encoder = new TextEncoder("utf-8");  // ASCII is a subset of UTF-8
	let decoder = new TextDecoder("utf-8");  // ASCII is a subset of UTF-8
	let output = new Uint8Array(data.length);
	let srcindex = 0;
	let dstindex = 0;
	let upperhex = encoder.encode("0123456789ABCDEF");
	while (true) {
		let offset = data.indexOf('\\'.charCodeAt(0), srcindex);
		if (offset == -1) {
			// no match found.  Done
			output.set(data.slice(srcindex), dstindex);
			dstindex += data.length - srcindex;
			break;
		}
		output.set(data.slice(srcindex, offset), dstindex);
		dstindex += offset - srcindex;
		if (data.length > offset + 3 && data[offset + 1] == 0x2E) {
			// This dot (0x2E) was probabaly inserted after the backslash
			// by to_easc(), but only if it is followed by zero or more
			// additional Zero Width Spaces and then two uppercase hex digits.
			let dot_cnt = 1;
			while (
				data.length > offset + (dot_cnt + 1) + 2
				&& data[offset + dot_cnt + 1] == 0x2E  // dot '.'
			)
				dot_cnt += 1;
			if (
				upperhex.includes(data[offset + dot_cnt + 1])
				&& upperhex.includes(data[offset + dot_cnt + 2])
			) {
				// Remove the first dot after the backslash
				output.set(data.slice(offset, offset + 1), dstindex);
				srcindex = offset + 2;
				dstindex += 1;
			} else {
				// The dot after the backslash was not inserted by
				// to_easc(), so ignore it.
				output.set(data.slice(offset, offset + 1), dstindex);
				srcindex = offset + 1;
				dstindex += 1;
			}
		} else if (
			data.length > offset + 2
			&& upperhex.includes(data[offset + 1])
			&& upperhex.includes(data[offset + 2])
		) {
			//  restore escaped byte
			output[dstindex] = parseInt(
				"0x" + decoder.decode(data.slice(offset + 1, offset + 3)));
			srcindex = offset + 3;
			dstindex += 1;
		} else {
			// This backslash is not part of an escape and did not require a dot
			// to be added after it to prevent it from being misinterpreted as
			// part of an escape.
			output.set(data.slice(offset, offset + 1), dstindex);
			srcindex = offset + 1;
			dstindex += 1;
		}
	}
	return output.slice(0, dstindex);
}

let to_easc = (data, escape_tab, escape_lf, escape_cr) => {
	//Return easc encoded data created from any data sequence
	let encoder = new TextEncoder("utf-8");  // ASCII is a subset of UTF-8
	let decoder = new TextDecoder("utf-8");  // ASCII is a subset of UTF-8
	let upperhex = encoder.encode("0123456789ABCDEF");

	// Allow sufficient space for maximum possible expansion of data
	let output = new Uint8Array(3 * data.length);
	let srcindex = 0;
	let dstindex = 0;

	let escbyte = () => {
		output.set(encoder.encode("\\"
				+ data[srcindex].toString(16).toUpperCase().padStart(2, "0")
			), dstindex);
		srcindex += 1;
		dstindex += 3;
	}

	let copybytes = (count) => {
		output.set(data.slice(srcindex, srcindex + count + 1), dstindex);
		srcindex += count;
		dstindex += count;
	}

	while (srcindex < data.length) {
		if (0x7F <= data[srcindex]) {
			// Not printable ASCII (or 0x7F C0 control code)
			// Escape 1 byte
			escbyte();
			continue;
		}
		// Valid ASCII
		if (data[srcindex] <= 0x08
			|| (data[srcindex] == 0x09 && escape_tab)
			|| (data[srcindex] == 0x0A && escape_lf)
			|| (0x0B <= data[srcindex] && data[srcindex] <= 0x0C)
			|| (data[srcindex] == 0x0D && escape_cr)
			|| (0x0E <= data[srcindex] && data[srcindex] <= 0x1F)
		) {
			// This is a C0 control code, so escape anyways
			escbyte();
			continue;
		}
		if (data[srcindex] == 0x5C) {
			/*
			Insert a dot after the backslash only if it is followed by zero or
			more additional dots and then two uppercase hex digits.
			*/
			let dot_cnt = 0;  // Number of existing dots
			while (
				data.length > srcindex + dot_cnt + 3
				&& data[srcindex + dot_cnt + 1] == 0x2E  // dot '.'
			)
				dot_cnt += 1;
			if (
				data.length > srcindex + dot_cnt + 2
				&& upperhex.includes(data[srcindex + dot_cnt + 1])
				&& upperhex.includes(data[srcindex + dot_cnt + 2])
			) {
				/*
				Add a dot after the backslash '\' (0x5C).  This prevents
				from_easc() from mistaking this this for an escape sequence or
				from removing the dot_cnt dots that are a part of the source
				data.
				*/
				output.set(encoder.encode("\\."), dstindex);
				srcindex += 1;
				dstindex += 2;
				continue;
			}
		}
		// copy 1-byte output.  This might be a backslash.
		copybytes(1);
		continue
	}
	return output.slice(0, dstindex);
}
