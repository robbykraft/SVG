/* SVG (c) Robby Kraft, MIT License */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.SVG = factory());
}(this, (function () { 'use strict';
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
      return arr2;
    }
  }
  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }
  var Debug = {
    log: function log() {
      var _console;
      return (_console = console).log.apply(_console, arguments);
    }
  };
  var keys = ["number", "object", "transform", "class", "style", "function", "string", "undefined", "boolean", "path", "svg", "id"];
  var Keys = {};
  keys.forEach(function (key) {
    return Keys[key] = key;
  });
  var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) !== Keys.undefined && _typeof(window.document) !== Keys.undefined;
  var isNode = (typeof process === "undefined" ? "undefined" : _typeof(process)) !== Keys.undefined && process.versions != null && process.versions.node != null;
  var isWebWorker = (typeof self === "undefined" ? "undefined" : _typeof(self)) === Keys.object && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope";
  var htmlString = "<!DOCTYPE html><title> </title>";
  var win = function () {
    var w = {};
    if (isNode) {
      var _require = require("xmldom"),
          DOMParser = _require.DOMParser,
          XMLSerializer = _require.XMLSerializer;
      w.DOMParser = DOMParser;
      w.XMLSerializer = XMLSerializer;
      w.document = new DOMParser().parseFromString(htmlString, "text/html");
    } else if (isBrowser) {
      w = window;
    }
    return w;
  }();
  var NS = "http://www.w3.org/2000/svg";
  var isIterable = function isIterable(obj) {
    return obj != null && _typeof(obj[Symbol.iterator]) === Keys["function"];
  };
  var flatten = function flatten() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    switch (args.length) {
      case undefined:
      case 0:
        return args;
      case 1:
        return isIterable(args[0]) && _typeof(args[0]) !== Keys.string ? flatten.apply(void 0, _toConsumableArray(args[0])) : [args[0]];
      default:
        return Array.from(args).map(function (a) {
          return isIterable(a) ? _toConsumableArray(flatten(a)) : a;
        }).reduce(function (a, b) {
          return a.concat(b);
        }, []);
    }
  };
  var coordinates = (function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.filter(function (a) {
      return _typeof(a) === Keys.number;
    }).concat(args.filter(function (a) {
      return _typeof(a) === Keys.object;
    }).map(function (el) {
      if (_typeof(el.x) === Keys.number) return [el.x, el.y];
      if (_typeof(el[0]) === Keys.number) return [el[0], el[1]];
      return undefined;
    }).filter(function (a) {
      return a !== undefined;
    }).reduce(function (a, b) {
      return a.concat(b);
    }, []));
  });
  var args = (function (a, b, c, d) {
    return coordinates.apply(void 0, _toConsumableArray(flatten(a, b, c, d))).slice(0, 4);
  });
  var SingleElements = {
    svg: ["viewBox"],
    line: ["x1", "y1", "x2", "y2"],
    rect: ["x", "y", "width", "height"],
    circle: ["cx", "cy", "r"],
    ellipse: ["cx", "cy", "rx", "ry"],
    polygon: ["points"],
    polyline: ["points"],
    path: ["d"],
    mask: ["id"],
    symbol: ["id"],
    clipPath: ["id", "clip-rule"],
    marker: ["id", "markerHeight", "markerUnits", "markerWidth", "orient", "refX", "refY"],
    linearGradient: ["x1", "x2", "y1", "y2"],
    radialGradient: ["cx", "cy", "r", "fr", "fx", "fy"],
    stop: ["offset", "stop-color", "stop-opacity"],
    pattern: ["patternContentUnits", "patternTransform", "patternUnits"]
  };
  var setPoints = function setPoints(element, a, b, c, d) {
    return args(a, b, c, d).forEach(function (value, i) {
      return element.setAttribute(SingleElements.line[i], value);
    });
  };
  var methods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    setPoints: setPoints
  });
  var line = {
    nodeName: "line",
    attributes: SingleElements.line,
    arguments: args,
    methods: methods
  };
  var Nodes = {
    s: ["svg"],
    d: ["defs"],
    h: ["desc", "filter", "metadata", "style", "script", "title", "view"],
    c: ["cdata"],
    g: ["g"],
    v: ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"],
    t: ["text"],
    i: ["marker", "symbol", "clipPath", "mask"],
    p: ["linearGradient", "radialGradient", "pattern"],
    cT: ["textPath", "tspan"],
    cG: ["stop"],
    cF: ["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]
  };
  var ManyElements = {
    presentation: ["color", "color-interpolation", "cursor", "direction", "display", "fill", "fill-opacity", "fill-rule", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "image-rendering", "letter-spacing", "opacity", "overflow", "paint-order", "pointer-events", "preserveAspectRatio", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "tabindex", "transform-origin", "user-select", "vector-effect", "visibility"],
    animation: ["accumulate", "additive", "attributeName", "begin", "by", "calcMode", "dur", "end", "from", "keyPoints", "keySplines", "keyTimes", "max", "min", "repeatCount", "repeatDur", "restart", "to", "values"],
    effects: ["azimuth", "baseFrequency", "bias", "color-interpolation-filters", "diffuseConstant", "divisor", "edgeMode", "elevation", "exponent", "filter", "filterRes", "filterUnits", "flood-color", "flood-opacity", "in", "in2", "intercept", "k1", "k2", "k3", "k4", "kernelMatrix", "lighting-color", "limitingConeAngle", "mode", "numOctaves", "operator", "order", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "primitiveUnits", "radius", "result", "seed", "specularConstant", "specularExponent", "stdDeviation", "stitchTiles", "surfaceScale", "targetX", "targetY", "type", "xChannelSelector", "yChannelSelector"],
    text: ["x", "y", "dx", "dy", "alignment-baseline", "baseline-shift", "dominant-baseline", "lengthAdjust", "method", "overline-position", "overline-thickness", "rotate", "spacing", "startOffset", "strikethrough-position", "strikethrough-thickness", "text-anchor", "text-decoration", "text-rendering", "textLength", "underline-position", "underline-thickness", "word-spacing", "writing-mode"],
    gradient: ["gradientTransform", "gradientUnits", "spreadMethod"]
  };
  Object.values(Nodes).reduce(function (a, b) {
    return a.concat(b);
  }, []).filter(function (nodeName) {
    return SingleElements[nodeName] === undefined;
  }).forEach(function (nodeName) {
    SingleElements[nodeName] = [];
  });
  [[["svg", "defs", "g"].concat(Nodes.v), ManyElements.presentation], [["filter"], ManyElements.effects], [["text"], ManyElements.text], [Nodes.cF, ManyElements.effects], [Nodes.cG, ManyElements.gradient], [Nodes.cT, ManyElements.text]].forEach(function (pair) {
    return pair[0].forEach(function (key) {
      SingleElements[key] = SingleElements[key].concat(pair[1]);
    });
  });
  Debug.log(SingleElements);
  var RequiredAttributes = {
    svg: {
      version: "1.1",
      xmlns: NS
    },
    style: {
      type: "text/css"
    }
  };
  var Initializers = {};
  var ArgsShuffle = {};
  var ArgumentByNode = {};
  ArgumentByNode.line = line.arguments;
  console.log(ArgumentByNode);
  var Arguments = function Arguments(primitiveName, element) {
    var nodeName = element.nodeName;
    if (_typeof(RequiredAttributes[nodeName]) === Keys.object && RequiredAttributes[nodeName] !== null) {
      Object.keys(RequiredAttributes[nodeName]).forEach(function (key) {
        return element.setAttribute(key, RequiredAttributes[nodeName][key]);
      });
    }
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    if (Initializers[primitiveName] !== undefined) {
      Initializers[primitiveName].apply(Initializers, [element].concat(args));
    }
    var func = ArgumentByNode[primitiveName];
    if (typeof func === "function") {
      func.apply(void 0, args).forEach(function (v, i) {
        if (SingleElements[primitiveName][i] != null) {
          element.setAttribute(SingleElements[primitiveName][i], v);
        }
      });
    }
    return element;
  };
  Arguments.prepareCustomNodes = function (CustomNodes) {
    Object.keys(CustomNodes).filter(function (name) {
      return CustomNodes[name].attributes !== undefined;
    }).forEach(function (name) {
      SingleElements[name] = CustomNodes[name].attributes;
    });
    Object.keys(CustomNodes).filter(function (name) {
      return CustomNodes[name].arguments !== undefined;
    }).forEach(function (name) {
      ArgsShuffle[name] = CustomNodes[name].arguments;
    });
    Object.keys(CustomNodes).filter(function (name) {
      return CustomNodes[name].init !== undefined;
    }).forEach(function (name) {
      Initializers[name] = CustomNodes[name].init;
    });
  };
  var nodes = {};
  var customPrimitives = Object.keys(nodes);
  var headerStuff = [Nodes.h, Nodes.p, Nodes.i];
  var drawingShapes = [Nodes.g, Nodes.v, Nodes.t, customPrimitives];
  var folders = {
    svg: [Nodes.s, Nodes.d].concat(headerStuff).concat(drawingShapes),
    g: drawingShapes,
    text: [Nodes.cT],
    linearGradient: [Nodes.cG],
    radialGradient: [Nodes.cG],
    defs: headerStuff,
    filter: [Nodes.cF],
    marker: drawingShapes,
    symbol: drawingShapes,
    clipPath: drawingShapes,
    mask: drawingShapes
  };
  var nodesAndChildren = {};
  Object.keys(folders).forEach(function (key) {
    nodesAndChildren[key] = folders[key].reduce(function (a, b) {
      return a.concat(b);
    }, []);
  });
  Debug.log(nodesAndChildren);
  var methods$1 = {};
  var bound = {};
  Object.keys(methods$1).forEach(function (nodeName) {
    bound[nodeName] = {};
    Object.keys(methods$1[nodeName]).forEach(function (method) {
      bound[nodeName][method] = function (el) {
        var _methods$nodeName$met;
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return (_methods$nodeName$met = methods$1[nodeName][method]).call.apply(_methods$nodeName$met, [bound, el].concat(args)) || el;
      };
    });
  });
  var Case = {
    toCamel: function toCamel(s) {
      return s.replace(/([-_][a-z])/ig, function ($1) {
        return $1.toUpperCase().replace("-", "").replace("_", "");
      });
    },
    toKebab: function toKebab(s) {
      return s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z])(?=[a-z])/g, "$1-$2").toLowerCase();
    },
    capitalized: function capitalized(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  };
  var makeExist = function makeExist(obj, key) {
    if (obj[key] === undefined) {
      obj[key] = {};
    }
  };
  var AttrNodeFunc = {};
  Object.keys(SingleElements).forEach(function (nodeName) {
    makeExist(AttrNodeFunc, nodeName);
    SingleElements[nodeName].forEach(function (attribute) {
      AttrNodeFunc[nodeName][Case.toCamel(attribute)] = function (element) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        element.setAttribute.apply(element, [attribute].concat(args));
        return element;
      };
    });
  });
  Object.keys(nodesAndChildren).forEach(function (nodeName) {
    makeExist(AttrNodeFunc, nodeName);
    nodesAndChildren[nodeName].forEach(function (childNode) {
      AttrNodeFunc[nodeName][childNode] = function (element) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        var el = Methods.Constructor.apply(Methods, [childNode].concat(args));
        element.appendChild(el);
        return el;
      };
    });
  });
  Object.keys(bound).forEach(function (nodeName) {
    makeExist(AttrNodeFunc, nodeName);
    Object.assign(AttrNodeFunc[nodeName], bound[nodeName]);
  });
  var Methods = function Methods(nodeName, element) {
    bound.Constructor = Methods.Constructor;
    if (_typeof(AttrNodeFunc[nodeName]) === Keys.object && AttrNodeFunc[nodeName] !== null) {
      Object.keys(AttrNodeFunc[nodeName]).filter(function (attr) {
        return element[attr] == null;
      }).forEach(function (attr) {
        Object.defineProperty(element, attr, {
          value: function value() {
            var _AttrNodeFunc$nodeNam;
            return (_AttrNodeFunc$nodeNam = AttrNodeFunc[nodeName])[attr].apply(_AttrNodeFunc$nodeNam, [element].concat(Array.prototype.slice.call(arguments)));
          }
        });
      });
    }
    return element;
  };
  Debug.log(AttrNodeFunc);
  Methods.prepareCustomNodes = function (CustomNodes) {
    return Object.keys(CustomNodes).forEach(function (node) {
      makeExist(AttrNodeFunc, node);
      Object.assign(AttrNodeFunc[node], AttrNodeFunc[CustomNodes[node].nodeName], CustomNodes[node].methods);
    });
  };
  var nodeNames = {};
  Object.keys(Nodes).forEach(function (key) {
    return Nodes[key].forEach(function (nodeName) {
      nodeNames[nodeName] = nodeName;
    });
  });
  Object.keys(nodes).forEach(function (key) {
    nodeNames[key] = nodes[key].nodeName;
  });
  Arguments.prepareCustomNodes(nodes);
  Methods.prepareCustomNodes(nodes);
  Debug.log(nodeNames);
  var constructor = function constructor(nodeName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return Methods(nodeName, Arguments.apply(void 0, [nodeName, win.document.createElementNS(NS, nodeNames[nodeName])].concat(args)));
  };
  Methods.Constructor = constructor;
  var elements = {};
  Object.keys(Nodes).forEach(function (key) {
    return Nodes[key].forEach(function (nodeName) {
      elements[nodeName] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return constructor.apply(void 0, [nodeName].concat(args));
      };
    });
  });
  Debug.log(elements);
  var initialize = function initialize(svg) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    args.filter(function (arg) {
      return _typeof(arg) === Keys["function"];
    }).forEach(function (func) {
      return func.call(svg, svg);
    });
  };
  var SVG = function SVG() {
    var _arguments = arguments;
    var svg = constructor.apply(void 0, [Keys.svg].concat(Array.prototype.slice.call(arguments)));
    if (win.document.readyState === "loading") {
      win.document.addEventListener("DOMContentLoaded", function () {
        return initialize.apply(void 0, [svg].concat(_toConsumableArray(_arguments)));
      });
    } else {
      initialize.apply(void 0, [svg].concat(Array.prototype.slice.call(arguments)));
    }
    return svg;
  };
  Object.assign(SVG, elements);
  SVG.NS = NS;
  return SVG;
})));
