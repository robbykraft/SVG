/**
 * SVG (c) Robby Kraft
 */

/**
 * convert all user-supplied arguments into a flat array
 * to match the expected arguments ordered in "attributes"
 */
import window from "../environment/window";
import svgNS from "../environment/namespace";
import K from "../environment/keys";

import flatten from "./flatten";
import coordinates from "./coordinates";

import line from "../nodes/spec/line/index";

// import svgArguments from "./svg";
// import textArguments from "./text";

import attributes from "../attributes/index";
// import UUID from "./uuid";

// import viewBox from "./viewBox";

const RequiredAttributes = {
  svg: {
    version: "1.1",
    xmlns: svgNS,
  },
  style: {
    type: "text/css"
  }
};

const Initializers = {
  // text: textArguments,
  // svg: svgArguments
}

const polyString = function () {
  return Array
    .from(Array(Math.floor(arguments.length / 2)))
    .map((_, i) => `${arguments[i*2+0]},${arguments[i*2+1]}`)
    .join(" ");
}

const makeIDString = function () {
  return Array.from(arguments)
    .filter(a => typeof a === K.string || a instanceof String)
    .shift() || UUID();
}

const polys = (...args) => [polyString(...coordinates(...flatten(...args)))];
const masks = (...args) => [makeIDString(...args)];

const ArgsShuffle = {
  // svg: (...args) => [viewBox(...args)].filter(a => a !== undefined),
  // text: (...args) => coordinates(...flatten(...args)).slice(0, 2),
  // line: (...args) => coordinates(...flatten(...args)),
  // polyline: polys,
  // polygon: polys,
  // mask: masks,
  // clipPath: masks,
  // symbol: masks,
  // marker: masks,
};

const ArgumentByNode = {

};
ArgumentByNode.line = line.arguments;

console.log(ArgumentByNode);

// const passthrough = function () { return arguments; };
const passthrough = function () { return Array.from(arguments); }

// nodeName can be custom shapes too like "arrow"
const Arguments = (primitiveName, element, ...args) => {
  //
  // todo: figure out the difference between arc and curve why arguments are comign in differently
  //
  const nodeName = element.nodeName;

  // required attributes for elements like <svg>, <style>
  if (typeof RequiredAttributes[nodeName] === K.object && RequiredAttributes[nodeName] !== null) {
    Object.keys(RequiredAttributes[nodeName])
      .forEach(key => element.setAttribute(key, RequiredAttributes[nodeName][key]));
  }
  // custom initializers for anything that ISN'T an attribute=value pair.
  // for example: append the SVG to a parent.
  if (Initializers[primitiveName] !== undefined) {
    Initializers[primitiveName](element, ...args);
  }

  // const func = ArgsShuffle[attrElem] || passthrough;
  const func = ArgumentByNode[primitiveName];
  if (typeof func === "function") {
    func(...args).forEach((v, i) => {
      if (attributes[primitiveName][i] != null) {
        element.setAttribute(attributes[primitiveName][i], v);
      }
    });
  }

  // const attrElem = (attributes[primitiveName] !== undefined) ? primitiveName : nodeName;
  // // set attribute=value pair, if they exist, and if the user supplied arguments
  // const keys = attributes[attrElem];
  // if (keys === undefined) { return element; }
  // const func = ArgsShuffle[attrElem] || passthrough;
  // func(...args).forEach((v, i) => {
  //   if (keys[i] != null) {
  //     element.setAttribute(keys[i], v);
  //   }
  // });
  return element;
};

Arguments.prepareCustomNodes = CustomNodes => {
  Object.keys(CustomNodes)
    .filter(name => CustomNodes[name].attributes !== undefined)
    .forEach(name => {
      attributes[name] = CustomNodes[name].attributes;
    });

  Object.keys(CustomNodes)
    .filter(name => CustomNodes[name].arguments !== undefined)
    .forEach(name => {
      ArgsShuffle[name] = CustomNodes[name].arguments;
    });

  Object.keys(CustomNodes)
    .filter(name => CustomNodes[name].init !== undefined)
    .forEach(name => {
      Initializers[name] = CustomNodes[name].init;
    });
};

export default Arguments;
