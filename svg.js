!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).SVG=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(n){e(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c={};["number","object","transform","class","style","function","string","undefined","boolean","path","svg","id","viewBox"].forEach((function(t){return c[t]=t}));var a=("undefined"==typeof window?"undefined":t(window))!==c.undefined&&t(window.document)!==c.undefined,u=("undefined"==typeof process?"undefined":t(process))!==c.undefined&&null!=process.versions&&null!=process.versions.node,s=("undefined"==typeof self?"undefined":t(self))===c.object&&self.constructor&&"DedicatedWorkerGlobalScope"===self.constructor.name,f=Object.freeze({__proto__:null,isBrowser:a,isNode:u,isWebWorker:s}),l=function(){var t={};if(u){var e=require("xmldom"),n=e.DOMParser,r=e.XMLSerializer;t.DOMParser=n,t.XMLSerializer=r,t.document=(new n).parseFromString("<!DOCTYPE html><title>.</title>","text/html")}else a&&(t=window);return t}(),d="http://www.w3.org/2000/svg",p={s:["svg"],d:["defs"],h:["desc","filter","metadata","style","script","title","view"],c:["cdata"],g:["g"],v:["circle","ellipse","line","path","polygon","polyline","rect"],t:["text"],i:["marker","symbol","clipPath","mask"],p:["linearGradient","radialGradient","pattern"],cT:["textPath","tspan"],cG:["stop"],cF:["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]},h=function(t,e){return[Math.cos(t)*e,Math.sin(t)*e]},v=function(t,e,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(null==o)return"";var c=h(r,n),a=h(o,n),u=[a[0]-c[0],a[1]-c[1]],s=c[0]*a[1]-c[1]*a[0],f=c[0]*a[0]+c[1]*a[1],l=Math.atan2(s,f)>0?0:1,d=i?"M ".concat(t,",").concat(e," l ").concat(c[0],",").concat(c[1]," "):"M ".concat(t+c[0],",").concat(e+c[1]," ");return d+=["a ",n,n,0,l,1,u[0],u[1]].join(" "),i&&(d+=" Z"),d},g=function(t,e,n,r,o){return[v(t,e,n,r,o,!1)]},m={arc:{nodeName:"path",attributes:["d"],args:g,methods:{setArc:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return t.setAttribute("d",g.apply(void 0,n))}}}},y=function(t,e,n,r,o){return[v(t,e,n,r,o,!0)]},b={wedge:{nodeName:"path",args:y,attributes:["d"],methods:{setArc:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return t.setAttribute("d",y.apply(void 0,n))}}}},A=128,x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return Array.from(Array(129)).map((function(t,e){return(e-A)/A*2+1})).map((function(o){return[t+(o+1)*n*.5,e+Math.pow(o,2)*r]}))},w={parabola:{nodeName:"polyline",attributes:["points"],args:function(t,e,n,r){return[x(t,e,n,r).map((function(t){return"".concat(t[0],",").concat(t[1])})).join(" ")]}}},O=function(t,e,n,r){var o=[e,n];return Array.from(Array(t)).map((function(e,n){return 2*Math.PI*n/t})).map((function(t){return[Math.cos(t),Math.sin(t)]})).map((function(t){return o.map((function(e,n){return e+r*t[n]}))}))},j={regularPolygon:{nodeName:"polygon",attributes:["points"],args:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return[O(t,e,n,r).map((function(t){return"".concat(t[0],",").concat(t[1])})).join(" ")]}}},E={roundRect:{nodeName:"path",attributes:["d"],args:function(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;o>n/2&&(o=n/2),o>r/2&&(o=r/2);var i=n-2*o,c=r-2*o,a="A".concat(o," ").concat(o," 0 0 1");return["M".concat(t+(n-i)/2,",").concat(e),"h".concat(i),a,"".concat(t+n,",").concat(e+(r-c)/2),"v".concat(c),a,"".concat(t+n-o,",").concat(e+r),"h".concat(-i),a,"".concat(t,",").concat(e+r-o),"v".concat(-c),a,"".concat(t+o,",").concat(e)].join(" ")}}},C=function(e){return null!=e&&t(e[Symbol.iterator])===c.function},k=function t(){switch(arguments.length){case void 0:case 0:return Array.from(arguments);case 1:return C(arguments[0])&&"string"!=typeof arguments[0]?t.apply(void 0,o(arguments[0])):[arguments[0]];default:return Array.from(arguments).map((function(e){return C(e)?o(t(e)):e})).reduce((function(t,e){return t.concat(e)}),[])}},P=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.filter((function(e){return t(e)===c.number})).concat(n.filter((function(e){return t(e)===c.object&&null!==e})).map((function(e){return t(e.x)===c.number?[e.x,e.y]:t(e[0])===c.number?[e[0],e[1]]:void 0})).filter((function(t){return void 0!==t})).reduce((function(t,e){return t.concat(e)}),[]))},S=function(t,e){return[t[0]+e[0],t[1]+e[1]]},M=function(t,e){return[t[0]-e[0],t[1]-e[1]]},N=function(t,e){return[t[0]*e,t[1]*e]},T=function(){var t=P.apply(void 0,o(k.apply(void 0,arguments))),e=t.slice(0,4);if(!e.length)return[""];var n=t[4]||0,r=t[5]||.5,i=[e[0],e[1]],c=[e[2],e[3]],a=M(c,i),u=S(i,N(a,.5)),s=[a[1],-a[0]],f=S(u,N(s,n)),l=S(i,N(M(f,i),r)),d=S(c,N(M(f,c),r));return["M".concat(i[0],",").concat(i[1],"C").concat(l[0],",").concat(l[1]," ").concat(d[0],",").concat(d[1]," ").concat(c[0],",").concat(c[1])]},z={bend:function(t,e){return t.setAttribute("d",T.apply(void 0,o(function(t){var e=t.getAttribute("d");return null==e||""===e?[]:[e.slice(e.indexOf("M")+1,e.indexOf("C")).split(","),e.split(" ").pop().split(",")].map((function(t){return t.map((function(t){return parseFloat(t)}))}))}(t)).concat([e]))),t}},D={curve:{nodeName:"path",attributes:["d"],args:T,methods:z}},B={};Object.assign(B,m,b,w,j,E,D);var L=Object.keys(B),_=[p.h,p.p,p.i],F=[p.g,p.v,p.t,L],G={svg:[p.s,p.d].concat(_).concat(F),g:F,text:[p.cT],linearGradient:[p.cG],radialGradient:[p.cG],defs:_,filter:[p.cF],marker:F,symbol:F,clipPath:F,mask:F},U=Object.create(null);Object.keys(G).forEach((function(t){U[t]=G[t].reduce((function(t,e){return t.concat(e)}),[])}));var R={toCamel:function(t){return t.replace(/([-_][a-z])/gi,(function(t){return t.toUpperCase().replace("-","").replace("_","")}))},toKebab:function(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z])(?=[a-z])/g,"$1-$2").toLowerCase()},capitalized:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},q=function(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=1,c=n/i-n,a=t-c-o,u=e-c-o,s=n+2*c+2*o,f=r+2*c+2*o;return[a,u,s,f].join(" ")};function V(){var t=P.apply(void 0,o(k(arguments)));return 2===t.length&&t.unshift(0,0),4===t.length?q.apply(void 0,o(t)):void 0}var X=function(t){return(new l.DOMParser).parseFromString("<root></root>","text/xml").createCDATASection("".concat(t))},I=function(t){for(;t.lastChild;)t.removeChild(t.lastChild);return t},Y=function(t,e){for(;e.childNodes.length>0;){var n=e.childNodes[0];e.removeChild(n),t.appendChild(n)}return t},Z=function(t,e){return Array.from(e.attributes).forEach((function(e){return t.setAttribute(e.name,e.value)})),Y(t,e)},$={removeChildren:I,appendTo:function(t,e){return null!=e&&e.appendChild(t),t},setAttributes:function(t,e){return Object.keys(e).forEach((function(n){return t.setAttribute(R.toKebab(n),e[n])}))}},W=function(t){return(new l.DOMParser).parseFromString(t,"text/xml")},H=function(t){var e=t.getElementsByTagName("parsererror");if(e.length>0)throw new Error(e[0]);return function t(e){if(null===e)return e;for(var n=e.childNodes.length-1;n>=0;n-=1){var r=e.childNodes[n];3===r.nodeType&&r.data.match(/^\s*$/)&&e.removeChild(r),1===r.nodeType&&t(r)}return e}(t.documentElement)},Q=function(e){if(t(e)===c.string||e instanceof String)try{return H(W(e))}catch(t){return t}if(null!=e.childNodes)return e},K=function(e){return function(e){return t(e)===c.string&&/^[\w,\s-]+\.[A-Za-z]{3}$/.test(e)&&e.length<1e4}(e)&&a&&t(l.fetch)===c.function?function(e){return new Promise((function(n,r){if(t(e)===c.string||e instanceof String)fetch(e).then((function(t){return t.text()})).then((function(t){return H(W(t))})).then((function(t){return"svg"===t.nodeName?t:t.getElementsByTagName("svg")[0]})).then((function(t){return null==t?r("valid XML found, but no SVG element"):n(t)})).catch((function(t){return r(t)}));else if(e instanceof l.Document)return asyncDone(e)}))}(e):Q(e)};var J=function(t,e){if((e=Object.assign({download:!1,output:c.string,windowStyle:!1,filename:"image.svg"},e)).windowStyle){var n=l.document.createElementNS(d,c.style);n.setAttribute("type","text/css"),n.innerHTML=function(){var t=[];if(l.document.styleSheets)for(var e=0;e<l.document.styleSheets.length;e+=1){var n=l.document.styleSheets[e];try{for(var r=("cssRules"in n?n.cssRules:n.rules),o=0;o<r.length;o+=1){var i=r[o];"cssText"in i?t.push(i.cssText):t.push("".concat(i.selectorText," {\n").concat(i.style.cssText,"\n}\n"))}}catch(t){console.warn(t)}}return t.join("\n")}(),t.appendChild(n)}var r,o,i,s,f=function(t,e){for(var n=t.replace(/>\s{0,}</g,"><").replace(/</g,"~::~<").replace(/\s*xmlns\:/g,"~::~xmlns:").split("~::~"),r=n.length,o=!1,i=0,c="",a=null!=e&&"string"==typeof e?e:"\t",u=["\n"],s=0;s<100;s+=1)u.push(u[s]+a);for(var f=0;f<r;f+=1)n[f].search(/<!/)>-1?(c+=u[i]+n[f],o=!0,(n[f].search(/-->/)>-1||n[f].search(/\]>/)>-1||n[f].search(/!DOCTYPE/)>-1)&&(o=!1)):n[f].search(/-->/)>-1||n[f].search(/\]>/)>-1?(c+=n[f],o=!1):/^<\w/.exec(n[f-1])&&/^<\/\w/.exec(n[f])&&/^<[\w:\-\.\,]+/.exec(n[f-1])==/^<\/[\w:\-\.\,]+/.exec(n[f])[0].replace("/","")?(c+=n[f],o||(i-=1)):n[f].search(/<\w/)>-1&&-1===n[f].search(/<\//)&&-1===n[f].search(/\/>/)?c=c+=o?n[f]:u[i++]+n[f]:n[f].search(/<\w/)>-1&&n[f].search(/<\//)>-1?c=c+=o?n[f]:u[i]+n[f]:n[f].search(/<\//)>-1?c=c+=o?n[f]:u[--i]+n[f]:n[f].search(/\/>/)>-1?c=c+=o?n[f]:u[i]+n[f]:n[f].search(/<\?/)>-1||n[f].search(/xmlns\:/)>-1||n[f].search(/xmlns\=/)>-1?c+=u[i]+n[f]:c+=n[f];return"\n"===c[0]?c.slice(1):c}((new l.XMLSerializer).serializeToString(t));return e.download&&a&&!u&&(r=e.filename,o=f,i=new l.Blob([o],{type:"text/plain"}),(s=l.document.createElement("a")).setAttribute("href",l.URL.createObjectURL(i)),s.setAttribute("download",r),l.document.body.appendChild(s),s.click(),l.document.body.removeChild(s)),"svg"===e.output?t:f},tt=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=1===n.length&&"string"==typeof n[0]?n[0]:V.apply(void 0,n);return o&&t.setAttribute(c.viewBox,o),t},et=function(t){var e=t.getAttribute(c.viewBox);return null==e?void 0:e.split(" ").map((function(t){return parseFloat(t)}))},nt=function(t,e,n){var r=t.createSVGPoint();r.x=e,r.y=n;var o=r.matrixTransform(t.getScreenCTM().inverse());return[o.x,o.y]},rt=Object.freeze({__proto__:null,setViewBox:tt,getViewBox:et,convertToViewBox:nt}),ot=function(e,n){var r=K(n);if(null!=r)return t(r.then)===c.function?r.then((function(t){return Z(e,t)})):Z(e,r)},it=function(e){var n=et(e);if(void 0!==n)return n;if(t(e.getBoundingClientRect)===c.function){var r=e.getBoundingClientRect();return[r.x,r.y,r.width,r.height]}return[]},ct="svg-background-rectangle",at=function(t,e){var n=function(t){var e=t.getElementsByTagName(c.style);return 0===e.length?void 0:e[0]}(t);return null==n&&(n=this.Constructor(c.style),t.insertBefore(n,t.firstChild)),n.textContent="",n.appendChild(X(e)),n},ut={clear:function(t){return Array.from(t.attributes).filter((function(t){return"xmlns"!==t})).forEach((function(e){return t.removeAttribute(e.name)})),I(t)},size:tt,setViewBox:tt,getViewBox:et,padding:function(t,e){var n=et(t);return void 0!==n&&tt.apply(void 0,[t].concat(o([-e,-e,2*e,2*e].map((function(t,e){return n[e]+t}))))),t},background:function(t,e){var n=Array.from(t.childNodes).filter((function(t){return t.getAttribute(c.class)===ct})).shift();return null==n&&((n=this.Constructor.apply(this,["rect"].concat(o(it(t))))).setAttribute(c.class,ct),n.setAttribute("stroke","none"),t.insertBefore(n,t.firstChild)),n.setAttribute("fill",e),t},getWidth:function(t){return it(t)[2]},getHeight:function(t){return it(t)[3]},stylesheet:function(t,e){return at.call(this,t,e)},load:ot,save:J},st={math:{vector:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return[].concat(e)}}},ft={move:["mousemove","touchmove"],press:["mousedown","touchstart"],release:["mouseup","touchend"]},lt=Object.values(ft).reduce((function(t,e){return t.concat(e)}),[]),dt=function(t,e,n){return Object.defineProperty(t,e,{get:function(){return n},enumerable:!0,configurable:!0})},pt=function(t,e){var n;(["pressX","pressY"].filter((function(e){return!t.hasOwnProperty(e)})).forEach((function(n,r){return dt(t,n,e[r])})),t.hasOwnProperty("press"))||dt(t,"press",(n=st.math).vector.apply(n,o(e)))},ht=function(t){var e=[],n=[];Object.keys(ft).forEach((function(t){ft[t].forEach((function(t){n[t]=[]}))}));var r={press:function(t,n){pt(t,e=n)},release:function(){},move:function(t,n){t.buttons>0&&void 0===e[0]?e=n:0===t.buttons&&void 0!==e[0]&&(e=[]),pt(t,e)}};Object.keys(ft).forEach((function(e){var i="on"+R.capitalized(e);Object.defineProperty(t,i,{set:function(i){return null==i?function(e){return ft[e].forEach((function(e){return n[e].forEach((function(n){return t.removeEventListener(e,n)}))}))}(e):ft[e].forEach((function(c){var a=function(n){var c=null!=n.touches?n.touches[0]:n;if(void 0!==c){var a,u=nt(t,c.clientX,c.clientY).map((function(t){return isNaN(t)?void 0:t}));if(["x","y"].filter((function(t){return!n.hasOwnProperty(t)})).forEach((function(t,e){return dt(n,t,u[e])})),!n.hasOwnProperty("position"))dt(n,"position",(a=st.math).vector.apply(a,o(u)));r[e](n,u)}i(n)};t.addEventListener&&(n[c].push(a),t.addEventListener(c,a))}))},enumerable:!0})})),Object.defineProperty(t,"off",{value:function(){return function(t,e){return lt.forEach((function(n){e[n].forEach((function(e){return t.removeEventListener(n,e)})),e[n]=[]}))}(t,n)}})},vt=function(){return Math.random().toString(36).replace(/[^a-z]+/g,"").concat("aaaaa").substr(0,5)},gt=function(t){var e,n,r={},o=0,i=function(){l.cancelAnimationFrame&&l.cancelAnimationFrame(n),Object.keys(r).forEach((function(t){return delete r[t]})),e=void 0,o=0};Object.defineProperty(t,"play",{set:function(t){if(i(),null!=t){var c=vt();r[c]=function(i){e||(e=i,o=0),t({time:.001*(i-e),frame:o}),o+=1,r[c]&&(n=l.requestAnimationFrame(r[c]))},l.requestAnimationFrame&&(n=l.requestAnimationFrame(r[c]))}},enumerable:!0}),Object.defineProperty(t,"stop",{value:i,enumerable:!0})},mt=function(t,e){return Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)},yt=function(t,e){return Math.sqrt(mt(t,e))},bt=Object.freeze({__proto__:null,distanceSq2:mt,distance2:yt}),At=[["cx","cy"],["x","y"]],xt=function(t){var e=[0,0],n={selected:!1,svg:void 0,updatePosition:function(t){return t}},r=function(){n.svg&&(n.svg.parentNode||t.appendChild(n.svg),At.filter((function(t){return null!=n.svg[t[0]]})).forEach((function(t){return t.forEach((function(t,r){n.svg.setAttribute(t,e[r])}))})))},i=new Proxy(e,{set:function(t,e,n){return t[e]=n,r(),!0}}),c=function(){P.apply(void 0,o(k.apply(void 0,arguments))).forEach((function(t,n){e[n]=t})),r(),"function"==typeof e.delegate&&e.delegate.apply(e.pointsContainer,[i,e.pointsContainer])};return e.delegate=void 0,e.setPosition=c,e.onMouseMove=function(t){return n.selected?c(n.updatePosition(t)):void 0},e.onMouseUp=function(){n.selected=!1},e.distance=function(t){return Math.sqrt(mt(t,e))},["x","y"].forEach((function(t,n){return Object.defineProperty(e,t,{get:function(){return e[n]},set:function(t){e[n]=t}})})),["svg","updatePosition","selected"].forEach((function(t){return Object.defineProperty(e,t,{get:function(){return n[t]},set:function(e){n[t]=e}})})),Object.defineProperty(e,"remove",{value:function(){!function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}(n.svg),e.delegate=void 0}}),i},wt=function(t,e,n){var r,o,i=Array.from(Array(e)).map((function(){return xt(t)})),c=function(t){return"function"==typeof o?o.call(i,t,r,i):void 0};i.forEach((function(t){t.delegate=c,t.pointsContainer=i}));t.onPress=function(t){i.length>0&&(r=i.map((function(e,n){return{i:n,d:mt(e,[t.x,t.y])}})).sort((function(t,e){return t.d-e.d})).shift().i,i[r].selected=!0)},t.onMove=function(t){i.forEach((function(e){return e.onMouseMove(t)}))},t.onRelease=function(){i.forEach((function(t){return t.onMouseUp()})),r=void 0},Object.defineProperty(i,"selectedIndex",{get:function(){return r}}),Object.defineProperty(i,"selected",{get:function(){return i[r]}}),Object.defineProperty(i,"add",{value:function(e){i.push(xt(t))}}),i.removeAll=function(){for(;i.length>0;)i.pop().remove()};var a={onChange:function(t,e){if(o=t,!0===e){var n=i.length-1;t.call(i,i[n],n,i)}},position:function(t){return i.forEach((function(e,n){return e.setPosition(t.call(i,e,n,i))}))},svg:function(t){return i.forEach((function(e,n){e.svg=t.call(i,e,n,i)}))}};return Object.keys(a).forEach((function(t){i[t]=function(){return"function"==typeof arguments[0]&&a[t].apply(a,arguments),i}})),i.parent=function(t){return null!=t&&null!=t.appendChild&&i.forEach((function(e){t.appendChild(e.svg)})),i},i},Ot=function(t){t.controls=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return wt.call.apply(wt,[t,t].concat(n))}},jt=(new l.DOMParser).parseFromString("<div />","text/xml").documentElement.constructor,Et={svg:{args:function(){return[V(P.apply(void 0,arguments))].filter((function(t){return null!=t}))},methods:ut,init:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];r.filter((function(e){return t(e)===c.string})).forEach((function(t){return ot(e,t)})),r.filter((function(t){return null!=t})).filter((function(t){return t instanceof jt})).filter((function(e){return t(e.appendChild)===c.function})).forEach((function(t){return t.appendChild(e)})),ht(e),gt(e),Ot(e)}}},Ct=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=n.map((function(t){return Q(t)})).filter((function(t){return void 0!==t}));return o.filter((function(t){return t.tagName===c.svg})).forEach((function(e){return Y(t,e)})),o.filter((function(t){return t.tagName!==c.svg})).forEach((function(e){return t.appendChild(e)})),t},kt={g:{init:Ct,methods:{load:Ct}}},Pt=Object.assign(Object.create(null),{svg:["viewBox"],line:["x1","y1","x2","y2"],rect:["x","y","width","height"],circle:["cx","cy","r"],ellipse:["cx","cy","rx","ry"],polygon:["points"],polyline:["points"],path:["d"],text:["x","y"],mask:["id"],symbol:["id"],clipPath:["id","clip-rule"],marker:["id","markerHeight","markerUnits","markerWidth","orient","refX","refY"],linearGradient:["x1","x2","y1","y2"],radialGradient:["cx","cy","r","fr","fx","fy"],stop:["offset","stop-color","stop-opacity"],pattern:["patternContentUnits","patternTransform","patternUnits"]}),St=function(t,e){return t.setAttribute(Pt.circle[2],e),t},Mt=function(t,e,n){return o(P.apply(void 0,o(k(e,n))).slice(0,2)).forEach((function(e,n){return t.setAttribute(Pt.circle[n],e)})),t},Nt=function(t,e,n,r){return[t,e,yt([t,e],[n,r])]},Tt={circle:{args:function(t,e,n,r){var i=P.apply(void 0,o(k(t,e,n,r)));switch(i.length){case 0:case 1:return[,,].concat(o(i));case 2:case 3:return i;default:return Nt.apply(void 0,o(i))}},methods:{radius:St,setRadius:St,origin:Mt,setOrigin:Mt,center:Mt,setCenter:Mt,position:Mt,setPosition:Mt}}},zt=function(t,e,n){return[,,e,n].forEach((function(e,n){return t.setAttribute(Pt.ellipse[n],e)})),t},Dt=function(t,e,n){return o(P.apply(void 0,o(k(e,n))).slice(0,2)).forEach((function(e,n){return t.setAttribute(Pt.ellipse[n],e)})),t},Bt={ellipse:{args:function(t,e,n,r){var i=P.apply(void 0,o(k(t,e,n,r))).slice(0,4);switch(i.length){case 0:case 1:case 2:return[,,].concat(o(i));default:return i}},methods:{radius:zt,setRadius:zt,origin:Dt,setOrigin:Dt,center:Dt,setCenter:Dt,position:Dt,setPosition:Dt}}},Lt=function(t,e,n,r){return P.apply(void 0,o(k(t,e,n,r))).slice(0,4)},_t={line:{args:Lt,methods:{setPoints:function(t,e,n,r,o){return Lt(e,n,r,o).forEach((function(e,n){return t.setAttribute(Pt.line[n],e)})),t}}}},Ft=/[MmLlSsQqLlHhVvCcSsQqTtAaZz]/g,Gt=/-?[0-9]*\.?\d+/g,Ut={m:"move",l:"line",v:"vertical",h:"horizontal",a:"ellipse",c:"curve",s:"smoothCurve",q:"quadCurve",t:"smoothQuadCurve",z:"close"};Object.keys(Ut).forEach((function(t){var e=Ut[t];Ut[t.toUpperCase()]=e.charAt(0).toUpperCase()+e.slice(1)}));var Rt=function(t){var e=t.getAttribute("d");return null==e?"":e},qt=function(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return t.setAttribute("d","".concat(Rt(t)).concat(e).concat(k.apply(void 0,r).join(" "))),t},Vt=function(t){return function(t){for(var e,n=[];null!==(e=Ft.exec(t));)n.push(e);return n.map((function(e){return{command:t[e.index],index:e.index}})).reduceRight((function(e,n){var r=t.substring(n.index,e.length?e[e.length-1].index:t.length);return e.concat([{command:n.command,index:n.index,chunk:r.length>0?r.substr(1,r.length-1):r}])}),[]).reverse().map((function(t){var e=t.chunk.match(Gt);return t.en=Ut[t.command],t.values=e?e.map(parseFloat):[],delete t.chunk,t}))}(Rt(t))},Xt={addCommand:qt,appendCommand:qt,clear:function(t){return t.removeAttribute("d"),t},getCommands:Vt,get:Vt,getD:function(t){return t.getAttribute("d")}};Object.keys(Ut).forEach((function(t){Xt[Ut[t]]=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return qt.apply(void 0,[e,t].concat(r))}}));var It={path:{methods:Xt}},Yt=function(t,e,n){return[,,e,n].forEach((function(e,n){return t.setAttribute(Pt.rect[n],e)})),t},Zt=function(t,e,n){return o(P.apply(void 0,o(k(e,n))).slice(0,2)).forEach((function(e,n){return t.setAttribute(Pt.rect[n],e)})),t},$t=function(t){return[0,1].forEach((function(e){t[2+e]<0&&(void 0===t[0+e]&&(t[0+e]=0),t[0+e]+=t[2+e],t[2+e]=-t[2+e])})),t},Wt={rect:{args:function(t,e,n,r){var i=P.apply(void 0,o(k(t,e,n,r))).slice(0,4);switch(i.length){case 0:case 1:case 2:case 3:return $t([,,].concat(o(i)));default:return $t(i)}},methods:{origin:Zt,setOrigin:Zt,center:Zt,setCenter:Zt,size:Yt,setSize:Yt}}},Ht={style:{init:function(t,e){t.textContent="",t.appendChild(X(e))},methods:{setTextContent:function(t,e){return t.textContent="",t.appendChild(X(e)),t}}}},Qt={text:{args:function(t,e,n){return P.apply(void 0,o(k(t,e,n))).slice(0,2)},init:function(e,n,r,o,i){var a=[n,r,o,i].filter((function(e){return t(e)===c.string})).shift();a&&e.appendChild(l.document.createTextNode(a))}}},Kt=function(){return Array.from(arguments).filter((function(e){return t(e)===c.string||e instanceof String})).shift()||vt()},Jt=function(){return[Kt.apply(void 0,arguments)]},te={mask:{args:Jt},clipPath:{args:Jt},symbol:{args:Jt},marker:{args:Jt,methods:{size:tt,setViewBox:tt}}},ee=function(t){var e=t.getAttribute("points");return null==e?"":e},ne=function(){var t=arguments;return Array.from(Array(Math.floor(arguments.length/2))).map((function(e,n){return"".concat(t[2*n+0],",").concat(t[2*n+1])})).join(" ")},re=function(){return[ne.apply(void 0,o(P.apply(void 0,o(k.apply(void 0,arguments)))))]},oe=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return t.setAttribute("points",re.apply(void 0,n)[0]),t},ie=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return t.setAttribute("points",[ee(t),re.apply(void 0,n)[0]].filter((function(t){return""!==t})).join(" ")),t},ce=function(){return 1===arguments.length&&t(arguments.length<=0?void 0:arguments[0])===c.string?[arguments.length<=0?void 0:arguments[0]]:re.apply(void 0,arguments)},ae={polyline:{args:ce,methods:{setPoints:oe,addPoint:ie}},polygon:{args:ce,methods:{setPoints:oe,addPoint:ie}}},ue=Object.assign({},Et,kt,Tt,Bt,_t,It,Wt,Ht,Qt,te,ae),se={presentation:["color","color-interpolation","cursor","direction","display","fill","fill-opacity","fill-rule","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","opacity","overflow","paint-order","pointer-events","preserveAspectRatio","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tabindex","transform-origin","user-select","vector-effect","visibility"],animation:["accumulate","additive","attributeName","begin","by","calcMode","dur","end","from","keyPoints","keySplines","keyTimes","max","min","repeatCount","repeatDur","restart","to","values"],effects:["azimuth","baseFrequency","bias","color-interpolation-filters","diffuseConstant","divisor","edgeMode","elevation","exponent","filter","filterRes","filterUnits","flood-color","flood-opacity","in","in2","intercept","k1","k2","k3","k4","kernelMatrix","lighting-color","limitingConeAngle","mode","numOctaves","operator","order","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","primitiveUnits","radius","result","seed","specularConstant","specularExponent","stdDeviation","stitchTiles","surfaceScale","targetX","targetY","type","xChannelSelector","yChannelSelector"],text:["dx","dy","alignment-baseline","baseline-shift","dominant-baseline","lengthAdjust","method","overline-position","overline-thickness","rotate","spacing","startOffset","strikethrough-position","strikethrough-thickness","text-anchor","text-decoration","text-rendering","textLength","underline-position","underline-thickness","word-spacing","writing-mode"],gradient:["gradientTransform","gradientUnits","spreadMethod"]};Object.values(p).reduce((function(t,e){return t.concat(e)}),[]).filter((function(t){return void 0===Pt[t]})).forEach((function(t){Pt[t]=[]})),[[["svg","defs","g"].concat(p.v,p.t),se.presentation],[["filter"],se.effects],[p.cT.concat("text"),se.text],[p.cF,se.effects],[p.cG,se.gradient]].forEach((function(t){return t[0].forEach((function(e){Pt[e]=Pt[e].concat(t[1])}))}));var fe=function(t){if(null==t)return[];var e=t.getAttribute(c.class);return null==e?[]:e.split(" ").filter((function(t){return""!==t}))},le={addClass:function(t,e){var n=fe(t).filter((function(t){return t!==e}));n.push(e),t.setAttributeNS(null,c.class,n.join(" "))},removeClass:function(t,e){var n=fe(t).filter((function(t){return t!==e}));t.setAttributeNS(null,c.class,n.join(" "))},setClass:function(t,e){t.setAttributeNS(null,c.class,e)},setId:function(t,e){t.setAttributeNS(null,c.id,e)}},de=function(t){var e=t.getAttribute(c.transform);return null==e||""===e?void 0:e},pe={clearTransform:function(t){return t.removeAttribute(c.transform),t}};["translate","rotate","scale","matrix"].forEach((function(t){pe[t]=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return e.setAttribute(c.transform,[de(e),"".concat(t,"(").concat(r.join(" "),")")].filter((function(t){return void 0!==t})).join(" "))}}));var he,ve={};["clip-path","mask","symbol","marker-end","marker-mid","marker-start"].forEach((function(e){ve[R.toCamel(e)]=function(n,r){return n.setAttribute(e,function(e){if(null==e)return"";if(t(e)===c.string)return"url"===e.slice(0,3)?e:"url(#".concat(e,")");if(null!=e.getAttribute){var n=e.getAttribute(c.id);return"url(#".concat(n,")")}return""}(r))}}));var ge={};(he=p.v).push.apply(he,o(Object.keys(B))),Object.keys(B).forEach((function(t){B[t].attributes=void 0===B[t].attributes?o(se.presentation):B[t].attributes.concat(se.presentation)})),Object.assign(ge,ue,B),Object.keys(p).forEach((function(t){return p[t].filter((function(t){return void 0===ge[t]})).forEach((function(t){ge[t]={}}))}));var me=function(){return Array.from(arguments)};Object.keys(ge).forEach((function(t){ge[t].nodeName||(ge[t].nodeName=t),ge[t].init||(ge[t].init=me),ge[t].args||(ge[t].args=me),ge[t].methods||(ge[t].methods={}),ge[t].attributes||(ge[t].attributes=Pt[t]||[])}));var ye=function(t,e){t.forEach((function(t){return Object.keys(e).forEach((function(n){ge[t].methods[n]=function(){return e[n].apply(e,arguments),arguments[0]}}))}))};ye(k(p.t,p.v,p.g,p.s,p.p,p.i,p.h,p.d),le),ye(k(p.t,p.v,p.g,p.s,p.p,p.i,p.h,p.d),$),ye(k(p.v,p.g,p.s),pe),ye(k(p.t,p.v,p.g),ve);var be={svg:{version:"1.1",xmlns:d},style:{type:"text/css"}},Ae=function(t,e){be[e]&&Object.keys(be[e]).forEach((function(n){return t.setAttribute(n,be[e][n])}))},xe={},we=function t(e){for(var n,r,o=arguments.length,i=new Array(o>1?o-1:0),c=1;c<o;c++)i[c-1]=arguments[c];var a=l.document.createElementNS(d,ge[e].nodeName);return Ae(a,e),(n=ge[e]).init.apply(n,[a].concat(i)),(r=ge[e]).args.apply(r,i).forEach((function(t,n){null!=ge[e].attributes[n]&&a.setAttribute(ge[e].attributes[n],t)})),ge[e].attributes.forEach((function(t){Object.defineProperty(a,R.toCamel(t),{value:function(){return a.setAttribute.apply(a,[t].concat(Array.prototype.slice.call(arguments))),a}})})),Object.keys(ge[e].methods).forEach((function(t){return Object.defineProperty(a,t,{value:function(){var n;return(n=ge[e].methods[t]).call.apply(n,[xe,a].concat(Array.prototype.slice.call(arguments)))}})})),U[e]&&U[e].forEach((function(e){Object.defineProperty(a,e,{value:function(){var n=t.apply(void 0,[e].concat(Array.prototype.slice.call(arguments)));return a.appendChild(n),n}})})),a};xe.Constructor=we;var Oe={};Object.keys(p).forEach((function(t){return p[t].forEach((function(t){Oe[t]=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return we.apply(void 0,[t].concat(n))}}))}));var je=function(e){return e.filter((function(e){return function(e){if("object"!==t(e))return!1;var n=["vertices_coords","edges_vertices","faces_vertices","faces_edges"];return Object.keys(e).map((function(t){return n.includes(t)})).reduce((function(t,e){return t||e}),!1)}(e)})).shift()},Ee=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];r.filter((function(e){return t(e)===c.function})).forEach((function(t){return t.call(e,e)}))},Ce=function(){var t=arguments,e=we.apply(void 0,[c.svg].concat(Array.prototype.slice.call(arguments)));return"loading"===l.document.readyState?l.document.addEventListener("DOMContentLoaded",(function(){return Ee.apply(void 0,[e].concat(o(t)))})):Ee.apply(void 0,[e].concat(Array.prototype.slice.call(arguments))),e};return Object.assign(Ce,Oe),Ce.NS=d,Ce.linker=function(t){t.graph&&t.origami&&function(t,e){e.svg=t,["segment","circle","ellipse","rect","polygon"].filter((function(t){return e[t]&&e[t].prototype})).forEach((function(n){e[n].prototype.svg=function(){return t.path(this.svgPath())}})),ge.graph={nodeName:"g",init:function(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.graph.svg(n,r(r({},o),{},{parent:t})),t},args:function(){return[]},methods:ge.g.methods,attributes:ge.g.attributes},U.graph=o(U.g),U.svg.push("graph"),U.g.push("graph")}(this,t)}.bind(Ce),Ce.use=function(t){t.origami&&function(t,e){st.math.vector=e.vector}(0,t),t.render_into_svg&&function(t,e){var n=ge.svg.init;ge.svg.init=function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var c=je(o);if(c){var a=e.options.apply(e,o);e.render_into_svg(t,c,a)}return n.apply(void 0,[t].concat(o))}}(0,t)}.bind(Ce),Ce.core=Object.assign(Object.create(null),{load:K,save:J,coordinates:P,flatten:k,attributes:Pt,children:U,cdata:X,detect:f},R,le,$,bt,pe,rt),Ce}));
