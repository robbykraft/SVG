/**
 * SVG (c) Robby Kraft
 */

import Nodes from "./nodes/index";
import constructor from "./nodes/constructor";
import prepare from "./nodes/prepare";
import window from "./environment/window";
import NS from "./environment/namespace";

const initialize = function (svg, ...args) {
  args.filter(arg => typeof arg === "function")
    .forEach(func => func.call(svg, svg));
};

const SVG = function (...args) {
  const svg = prepare(constructor("svg", ...args));
  // call initialize as soon as possible. check if page has loaded
  if (window.document.readyState === "loading") {
    window.document.addEventListener("DOMContentLoaded", () => initialize(svg, ...args));
  } else {
    initialize(svg, ...args);
  }
  return svg;
};

Object.assign(SVG, Nodes);
SVG.NS = NS;

// Object.keys(elements).forEach((key) => { SVG[key] = elements[key]; });
// Object.keys(geometryMods).forEach((key) => { SVG[key] = geometryMods[key]; });
// Object.keys(ViewBox).forEach((key) => { SVG[key] = ViewBox[key]; });
// Object.keys(File).forEach((key) => { SVG[key] = File[key]; });

export default SVG;
