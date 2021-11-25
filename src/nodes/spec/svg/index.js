/**
 * SVG (c) Robby Kraft
 */
import * as K from "../../../environment/keys";
import window from "../../../environment/window";
import viewBox from "../../../arguments/viewBox";
import coordinates from "../../../arguments/coordinates";
import methods from "./methods";
import { loadSVG } from "./methods";
import Touch from "../../../events/touch";
import Animation from "../../../events/animation";
import Controls from "../../../events/controls";

const ElementConstructor = (new window.DOMParser())
  .parseFromString("<div />", "text/xml").documentElement.constructor;

// const findWindowBooleanParam = (...params) => params
//   .filter(arg => typeof arg === K._object)
//   .filter(o => typeof o.window === K._boolean)
//   .reduce((a, b) => a.window || b.window, false);

export default {
  svg: {
    args: (...args) => [viewBox(coordinates(...args))].filter(a => a != null),
    methods,
    init: (element, ...args) => {
      args.filter(a => typeof a === K._string)
        .forEach(string => loadSVG(element, string));
      args.filter(a => a != null)
        .filter(arg => arg instanceof ElementConstructor)
        .filter(el => typeof el.appendChild === K._function)
        .forEach(parent => parent.appendChild(element));
      Touch(element);
      Animation(element);
      Controls(element);
    }
  }
};
