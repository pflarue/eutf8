"use strict"

/*
functions to convert data to/from eutf8 (escaped utf-8) encoding

See eutf8.md for details about the properties and usefulness of eutf8 encoding.

These implementations of to_eutf8() and from_eutf8() are functional, but not
optimized.  The logic of to_eutf8() should be easy enough to follow when
compared to the content of Table 3-7, Well-Formed UTF-8 Byte Sequences, in
the Unicode standard along with the Unicode Private-Use Characters,
Noncharacters & Sentinels FAQ.
*/

let eutf8_version = "0.9.0";

let from_eutf8 = (data) => {
	// Return a copy of the data used to create the eutf8 data
	let encoder = new TextEncoder("utf-8");
	let decoder = new TextDecoder("utf-8");
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
		if (
			data.length > offset + 5
			&& data[offset + 1] == 0xE2
			&& data[offset + 2] == 0x80
			&& data[offset + 3] == 0x8B
		) {
			// This Zero Width Space was probabaly inserted after the backslash
			// by to_eutf8(), but only if it is followed by zero or more
			// additional Zero Width Spaces and then two uppercase hex digits.
			let zws_cnt = 1;
			while (
				data.length > offset + 3 * (zws_cnt + 1) + 2
				&& data[offset + 3 * zws_cnt + 1] == 0xE2
				&& data[offset + 3 * zws_cnt + 2] == 0x80
				&& data[offset + 3 * zws_cnt + 3] == 0x8B
			)
				zws_cnt += 1;
			if (
				upperhex.includes(data[offset + 3 * zws_cnt + 1])
				&& upperhex.includes(data[offset + 3 * zws_cnt + 2])
			) {
				// Remove the first Unicode Zero Width Space after the backslash
				output.set(data.slice(offset, offset + 1), dstindex);
				srcindex = offset + 4;
				dstindex += 1;
			} else {
				// The Zero Width Space after the backslash was not inserted by
				// to_eutf8(), so ignore it.
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
			// This backslash is not part of an escape and did not require a Zero
			// Width Space to be added after it to prevent it from being
			// misinterpreted as part of an escape.
			output.set(data.slice(offset, offset + 1), dstindex);
			srcindex = offset + 1;
			dstindex += 1;
		}
	}
	return output.slice(0, dstindex);
}

let to_eutf8 = (data, escape_tab, escape_lf, escape_cr) => {
	//Return eutf8 encoded data created from any data sequence
	let encoder = new TextEncoder("utf-8");
	let decoder = new TextDecoder("utf-8");
	let upperhex = encoder.encode("0123456789ABCDEF");

	// Allow sufficient space for maximum possible expansion of data
	let output = new Uint8Array(3 * data.length);
	let srcindex = 0;
	let dstindex = 0;

	let escbytes = (count) => {
		for (let i = 0; i < count; i++) {
			output.set(encoder.encode("\\"
					+ data[srcindex].toString(16).toUpperCase().padStart(2, "0")
				), dstindex);
			srcindex += 1;
			dstindex += 3;
		}
	}

	let copybytes = (count) => {
		output.set(data.slice(srcindex, srcindex + count + 1), dstindex);
		srcindex += count;
		dstindex += count;
	}

	while (srcindex < data.length) {
		// Based on Unicode Table 3-7 Well-Formed UTF-8 Byte Sequences
		if ((0x80 <= data[srcindex] && data[srcindex] <= 0xC1)
			|| 0xF5 <= data[srcindex]
		) {
			// Not UTF-8
			// Escape 1 byte
			escbytes(1);
			continue;
		}

		if (data[srcindex] <= 0x7F) {
			// Valid 1-byte UTF-8
			if (data[srcindex] <= 0x08
				|| (data[srcindex] == 0x09 && escape_tab)
				|| (data[srcindex] == 0x0A && escape_lf)
				|| (0x0B <= data[srcindex] && data[srcindex] <= 0x0C)
				|| (data[srcindex] == 0x0D && escape_cr)
				|| (0x0E <= data[srcindex] && data[srcindex] <= 0x1F)
				||  data[srcindex] == 0x7F
			) {
				// This is a C0 control code, so escape anyways
				escbytes(1);
				continue;
			}
			if (data[srcindex] == 0x5C) {
				/*
				Insert a Zero Width Space after the backslash only if it is
				followed by zero or more additional Zero Width Sapces and then
				two uppercase hex digits.
				*/
				let zws_cnt = 0;  // Number of existing Zero Width Spaces
				while (
					data.length > srcindex + 3 * zws_cnt + 3
					&& data[srcindex + 3 * zws_cnt + 1] == 0xE2
					&& data[srcindex + 3 * zws_cnt + 2] == 0x80
					&& data[srcindex + 3 * zws_cnt + 3] == 0x8B
				)
					zws_cnt += 1;
				if (
					data.length > srcindex + 3 * zws_cnt + 2
					&& upperhex.includes(data[srcindex + 3 * zws_cnt + 1])
					&& upperhex.includes(data[srcindex + 3 * zws_cnt + 2])
				) {
					/*
					Add a Unicode Zero Width Space (U+200b) after the
					backslash '\' (0x5C).  This prevents from_eutf8() from
					mistaking this this for an escape sequence or from removing
					the zws_cnt Zero Width Spaces that are a part of the source
					data.  The latter is probably unlikely, but is possible.
					UTF-8 encoding of U+200b is the three byte sequence
					0xE2, 0x80, 0x8B.
					*/
					output.set(encoder.encode("\\\u200b"), dstindex);
					srcindex += 1;
					dstindex += 4;  // 0x5C, 0xE2, 0x80, 0x8B
					continue;
				}
			}
			// copy 1-byte output.  This might be a backslash.
			copybytes(1);
			continue
		}

		if (data.length <= srcindex + 1) {
			// data[srcindex] may be the first byte of a multi-byte UTF-8 sequence,
			// but the required number of additional bytes are not available.
			// Escape 1 byte
			escbytes(1);
			continue;
		}

		if (0xC2 <= data[srcindex] && data[srcindex] <= 0xDF) {
			if (0x80 <= data[srcindex + 1] && data[srcindex + 1] <= 0xBF) {
				// Valid 2-byte UTF-8
				if (data[srcindex] == 0xC2 && data[srcindex + 1] <= 0x9F) {
					// This is a C1 control code, so escape anyways
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					escbytes(2);
					continue;
				}
				// copy 2-bytes to output
				copybytes(2);
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			escbytes(1);
			continue;
		}

		if (data.length <= srcindex + 2) {
			// data[srcindex] may be the first byte of a multi-byte UTF-8 sequence,
			// but the required number of additional bytes are not available.
			// Escape 1 byte
			escbytes(1);
			continue;
		}


		if (data[srcindex] == 0xE0) {
			if ((0xA0 <= data[srcindex + 1] && data[srcindex + 1] <= 0xBF)
				&& (0x80 <= data[srcindex + 2] && data[srcindex + 2] <= 0xBF)
			) {
				// Valid 3-byte UTF-8
				// copy 3-bytes to output
				copybytes(3);
				continue
			}
			// Not UTF-8.  Escape 1 byte
			escbytes(1);
			continue;
		}

		if (0xE1 <= data[srcindex] && data[srcindex] <= 0xEC) {
			if ((0x80 <= data[srcindex + 1] && data[srcindex + 1] <= 0xBF)
				&& (0x80 <= data[srcindex + 2] && data[srcindex + 2]<= 0xBF)
			) {
				// Valid 3-byte UTF-8
				// copy 3-bytes to output
				copybytes(3);
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			escbytes(1);
			continue;
		}

		if (data[srcindex] == 0xED) {
			if ((0x80 <= data[srcindex + 1] && data[srcindex + 1] <= 0x9F)
				&& (0x80 <= data[srcindex + 2] && data[srcindex + 2] <= 0xBF)
			) {
				// Valid 3-byte UTF-8
				// copy 3-bytes to output
				copybytes(3);
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			escbytes(1);
			continue;
		}

		if (0xEE <= data[srcindex] && data[srcindex] <= 0xEF) {
			if ((0x80 <= data[srcindex + 1] && data[srcindex + 1] <= 0xBF)
				&& (0x80 <= data[srcindex + 2] && data[srcindex + 2] <= 0xBF)
			) {
				// Valid 3-byte UTF-8
				if (data[srcindex + 1] <= 0xA3) {
					// This is a private use character, so escape anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					escbytes(3);
					continue;
				}
				if ((data[srcindex] == 0xEF)
					&& (
						((data[srcindex + 1] == 0xB7)
							&& (0x90 <= data[srcindex + 2] && data[srcindex + 2] <= 0xAF)
						) || (
							(data[srcindex + 1] == 0xBF)
							&& (0xBE <= data[srcindex + 2])
						)
					)
				) {
					// This is a noncharacter, so escape it anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					escbytes(3);
					continue;
				}
				// Valid 3-byte UTF-8
				// copy 3-bytes to output
				copybytes(3);
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			escbytes(1);
			continue;
		}

		if (data.length <= srcindex + 3) {
			// data[srcindex] may be the first byte of a multi-byte UTF-8 sequence,
			// but the required number of additional bytes are not available.
			// Escape 1 byte
			escbytes(1);
			continue;
		}

		if (data[srcindex] == 0xF0) {
			if ((0x90 <= data[srcindex + 1] && data[srcindex + 1] <= 0xBF)
				&& (0x80 <= data[srcindex + 2] && data[srcindex + 2] <= 0xBF)
				&& (0x80 <= data[srcindex + 3] && data[srcindex + 3] <= 0xBF)
			) {
				// Valid 4-byte UTF-8
				if (((data[srcindex + 1] & 0x0F) == 0x0F)
					&& (data[srcindex + 2] == 0xBF)
					&& (data[srcindex + 3] >= 0xBE)
				) {
					// This is a noncharacter, so escape it anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					escbytes(4);
					continue;
				}
				// Valid 4-byte UTF-8
				// copy 4-bytes to output
				copybytes(4);
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			escbytes(1);
			continue;
		}

		if (0xF1 <= data[srcindex] && data[srcindex] <= 0xF3) {
			if ((0x80 <= data[srcindex + 1] && data[srcindex + 1] <= 0xBF)
				&& (0x80 <= data[srcindex + 2] && data[srcindex + 2] <= 0xBF)
				&& (0x80 <= data[srcindex + 3] && data[srcindex + 3] <= 0xBF)
			) {
				// Valid 4-byte UTF-8
				if ((data[srcindex + 1] & 0x0F == 0x0F)
					&& (data[srcindex + 2] == 0xBF)
					&& (data[srcindex + 3] >= 0xBE)
				) {
					// This is a noncharacter, so escape it anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					escbytes(4);
					continue;
				}
				if ((data[srcindex] == 0xF3)
					&& (0xB0 <= data[srcindex + 1])
					&& (data[srcindex + 3] <= 0xBD)
				) {
					// This is a private use character, so escape anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					escbytes(4);
					continue;
				}
				// Valid 4-byte UTF-8
				// copy 4-bytes to output
				copybytes(4);
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			escbytes(1);
			continue;
		}

		if (data[srcindex] == 0xF4) {
			if ((0x80 <= data[srcindex + 1] && data[srcindex + 1] <= 0x8F)
				&& (0x80 <= data[srcindex + 2] && data[srcindex + 2] <= 0xBF)
				&& (0x80 <= data[srcindex + 3] && data[srcindex + 3] <= 0xBF)
			) {
				// Valid 4-byte UTF-8
				if ((data[srcindex + 1] == 0x8F)
					&& (data[srcindex + 2] == 0xBF)
					&& (data[srcindex + 3] >= 0xBE)
				) {
					// This is a noncharacter, so escape it anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					escbytes(4);
					continue;
				}
				if (data[srcindex + 3] <= 0xBD) {
					// This is a private use character, so escape anyways.
					// When valid UTF-8 is escaped, escape all bytes since
					// following bytes are not valid as first byte of UTF-8.
					escbytes(4);
					continue;
				}
				// Valid 4-byte UTF-8
				// copy 4-bytes to output
				copybytes(4);
				continue;
			}
			// Not UTF-8.  Escape 1 byte
			escbytes(1);
			continue;
		}
		// shouldn't get here
		console.log("WARNING: Logic error in to_eutf8() for data[", srcindex, "]=", data[srcindex]);
		escbytes(1);
		continue;
	}
	return output.slice(0, dstindex);
}
