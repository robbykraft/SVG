import { expect, test } from "vitest";
import xmldom from "@xmldom/xmldom";
import SVG from "../src/index.js";

SVG.window = xmldom;

test("", () => expect(true).toBe(true));

// test("coordinates, two points", () => {
// 	SVG.makeCoordinates(1, 2, 3, 4)
// 		.forEach((n, i) => expect(n).toBe([1, 2, 3, 4][i]));
// 	SVG.makeCoordinates([1, 2], [3, 4])
// 		.forEach((n, i) => expect(n).toBe([1, 2, 3, 4][i]));
// 	SVG.makeCoordinates([1, 2, 3], [4, 5, 6])
// 		.forEach((n, i) => expect(n).toBe([1, 2, 4, 5][i]));
// 	SVG.makeCoordinates([1], [2])
// 		.forEach((n, i) => expect(n).toBe([1, undefined, 2, undefined][i]));
// });

// test("coordinates, not two points", () => {
// 	expect(SVG.makeCoordinates().length).toBe(0);
// 	expect(SVG.makeCoordinates([]).length).toBe(0);
// 	expect(SVG.makeCoordinates([[]]).length).toBe(0);
// 	expect(SVG.makeCoordinates([], []).length).toBe(0);

// 	SVG.makeCoordinates([1, 2], [3, 4], [5, 6])
// 		.forEach((n, i) => expect(n).toBe([1, 2, 3, 4, 5, 6][i]));
// });
