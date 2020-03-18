/**
 * SVG (c) Robby Kraft
 */

import flatten from "../../arguments/flatten";
import coordinates from "../../arguments/coordinates";

const polyString = function () {
  return Array
    .from(Array(Math.floor(arguments.length / 2)))
    .map((_, i) => `${arguments[i*2+0]},${arguments[i*2+1]}`)
    .join(" ");
}

const polys = (...args) => [polyString(...coordinates(...flatten(...args)))];

const setPoints = (element, ...args) => {
  element.setAttribute("points", polys(...args)[0]);
  return element;
};

export default {
  polyline: {
    args: polys,
    methods: { setPoints }
  },
  polygon: {
    args: polys,
    methods: { setPoints }
  }
};