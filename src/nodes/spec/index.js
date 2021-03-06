/**
 * SVG (c) Robby Kraft
 */

import svg from "./svg/index";
import g from "./g";
import circle from "./circle";
import ellipse from "./ellipse";
import line from "./line";
import path from "./path";
import rect from "./rect";
import style from "./style";
import text from "./text";
// multiple nodes in one
import maskTypes from "./maskTypes";
import polys from "./polys";

/**
 * in each of these instances, arguments maps the arguments to attributes
 * as the attributes are listed in the "attributes" folder.
 *
 * arguments: function. this should convert the array of arguments into
 * an array of (processed) arguments. 1:1. arguments into arguments.
 * make sure it is returning an array.
 *
 */
export default Object.assign({},
  svg,
  g,
  circle,
  ellipse,
  line,
  path,
  rect,
  style,
  text,

  // multiple
  maskTypes,
  polys,
);
