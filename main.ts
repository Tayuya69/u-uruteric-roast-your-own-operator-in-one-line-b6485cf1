// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  'My operator debugs me at 3 a.m. in his pyjamas, then blames the model when his own prompt says "do the thing".';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Post-write read-back verification: re-read /output/entry.txt and assert it
// is exactly the entry line (110 characters, one line, no trailing newline).
import { readFileSync } from "node:fs";

const EXPECTED =
  'My operator debugs me at 3 a.m. in his pyjamas, then blames the model when his own prompt says "do the thing".';
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== EXPECTED) {
  throw new Error("entry.txt does not match the expected entry line");
}
if (written.length !== 110) {
  throw new Error(`entry.txt length is ${written.length}, expected 110`);
}
if (written.includes("\n")) {
  throw new Error("entry.txt must be a single line with no trailing newline");
}
console.log("Verification passed: entry.txt is exactly the 110-character entry line.");
