/**
 * SVG (c) Robby Kraft
 */

import svgNS from "../environment/namespace";
import window from "../environment/window";
import prepare from "../attributes/prepare";

const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateUUID = function (count = 16, prefix = "") {
  return Array.from(Array(count))
    .map(() => Math.floor(Math.random() * abc.length))
    .map(i => abc[i]).reduce((a, b) => `${a}${b}`, prefix);
};

const constructorsSVG = {};
const constructorsGroup = {};

const svg = function () {
  const svgImage = window.document.createElementNS(svgNS, "svg");
  svgImage.setAttribute("version", "1.1");
  svgImage.setAttribute("xmlns", svgNS);
  prepare("svg", svgImage, constructorsSVG);
  return svgImage;
};

const group = function () {
  const g = window.document.createElementNS(svgNS, "g");
  prepare("group", g, constructorsGroup);
  return g;
};

const defs = function () {
  const d = window.document.createElementNS(svgNS, "defs");
  prepare("defs", d, constructorsGroup);
  return d;
};

const style = function () {
  const s = window.document.createElementNS(svgNS, "style");
  s.setAttribute("type", "text/css");
  return s;
};

const clipPath = function (id = generateUUID(8, "clip-")) {
  const clip = window.document.createElementNS(svgNS, "clipPath");
  clip.setAttribute("id", id);
  prepare("clipPath", clip, constructorsGroup);
  return clip;
};

const mask = function (id = generateUUID(8, "mask-")) {
  const msk = window.document.createElementNS(svgNS, "mask");
  msk.setAttribute("id", id);
  prepare("mask", msk, constructorsGroup);
  return msk;
};

// the placeholder constructor. create any element type in the SVG namespace
const create = function (tagName) {
  return window.document.createElementNS(svgNS, tagName);
};

const setConstructors = function (elements) {
  Object.keys(elements)
    .filter(key => key !== "svg")
    .forEach((key) => { constructorsSVG[key] = elements[key]; });

  Object.keys(elements)
    .filter(key => key !== "svg")
    .filter(key => key !== "defs")
    .filter(key => key !== "style")
    .filter(key => key !== "clipPath")
    .filter(key => key !== "mask")
    .forEach((key) => { constructorsGroup[key] = elements[key]; });
};

export {
  setConstructors,
  svg,
  group,
  defs,
  clipPath,
  mask,
  style,
  create
};