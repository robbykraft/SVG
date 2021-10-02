!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).SVG=n()}(this,(function(){"use strict";function t(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function n(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?t(Object(o),!0).forEach((function(t){r(n,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}))}return n}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var c={init:function(){}};function a(){return c.init.apply(c,arguments)}var u={};["number","object","transform","class","style","function","string","undefined","boolean","path","svg","id","viewBox"].forEach((function(t){return u[t]=t}));var s=("undefined"==typeof window?"undefined":e(window))!==u.undefined&&e(window.document)!==u.undefined,f=("undefined"==typeof process?"undefined":e(process))!==u.undefined&&null!=process.versions&&null!=process.versions.node,l=("undefined"==typeof self?"undefined":e(self))===u.object&&self.constructor&&"DedicatedWorkerGlobalScope"===self.constructor.name,d=Object.freeze({__proto__:null,isBrowser:s,isNode:f,isWebWorker:l}),p=function(){var t={};if(f){var n=require("xmldom"),e=n.DOMParser,r=n.XMLSerializer;t.DOMParser=e,t.XMLSerializer=r,t.document=(new e).parseFromString("<!DOCTYPE html><title>.</title>","text/html")}else s&&(t=window);return t}(),h="http://www.w3.org/2000/svg",v={s:["svg"],d:["defs"],h:["desc","filter","metadata","style","script","title","view"],c:["cdata"],g:["g"],v:["circle","ellipse","line","path","polygon","polyline","rect"],t:["text"],i:["marker","symbol","clipPath","mask"],p:["linearGradient","radialGradient","pattern"],cT:["textPath","tspan"],cG:["stop"],cF:["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]},g=function(t,n){return[Math.cos(t)*n,Math.sin(t)*n]},m=function(t,n,e,r,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(null==o)return"";var c=g(r,e),a=g(o,e),u=[a[0]-c[0],a[1]-c[1]],s=c[0]*a[1]-c[1]*a[0],f=c[0]*a[0]+c[1]*a[1],l=Math.atan2(s,f)>0?0:1,d=i?"M ".concat(t,",").concat(n," l ").concat(c[0],",").concat(c[1]," "):"M ".concat(t+c[0],",").concat(n+c[1]," ");return d+=["a ",e,e,0,l,1,u[0],u[1]].join(" "),i&&(d+=" Z"),d},y=function(t,n,e,r,o){return[m(t,n,e,r,o,!1)]},b={arc:{nodeName:"path",attributes:["d"],args:y,methods:{setArc:function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return t.setAttribute("d",y.apply(void 0,e))}}}},A=function(t,n,e,r,o){return[m(t,n,e,r,o,!0)]},w={wedge:{nodeName:"path",args:A,attributes:["d"],methods:{setArc:function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return t.setAttribute("d",A.apply(void 0,e))}}}},x=128,j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return Array.from(Array(129)).map((function(t,n){return(n-x)/x*2+1})).map((function(o){return[t+(o+1)*e*.5,n+Math.pow(o,2)*r]}))},O={parabola:{nodeName:"polyline",attributes:["points"],args:function(t,n,e,r){return[j(t,n,e,r).map((function(t){return"".concat(t[0],",").concat(t[1])})).join(" ")]}}},E=function(t,n,e,r){var o=[n,e];return Array.from(Array(t)).map((function(n,e){return 2*Math.PI*e/t})).map((function(t){return[Math.cos(t),Math.sin(t)]})).map((function(t){return o.map((function(n,e){return n+r*t[e]}))}))},C={regularPolygon:{nodeName:"polygon",attributes:["points"],args:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return[E(t,n,e,r).map((function(t){return"".concat(t[0],",").concat(t[1])})).join(" ")]}}},k={roundRect:{nodeName:"path",attributes:["d"],args:function(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;o>e/2&&(o=e/2),o>r/2&&(o=r/2);var i=e-2*o,c=r-2*o,a="A".concat(o," ").concat(o," 0 0 1");return["M".concat(t+(e-i)/2,",").concat(n),"h".concat(i),a,"".concat(t+e,",").concat(n+(r-c)/2),"v".concat(c),a,"".concat(t+e-o,",").concat(n+r),"h".concat(-i),a,"".concat(t,",").concat(n+r-o),"v".concat(-c),a,"".concat(t+o,",").concat(n)].join(" ")}}},P={toCamel:function(t){return t.replace(/([-_][a-z])/gi,(function(t){return t.toUpperCase().replace("-","").replace("_","")}))},toKebab:function(t){return t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z])(?=[a-z])/g,"$1-$2").toLowerCase()},capitalized:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},S=function(t){return null!=t&&e(t[Symbol.iterator])===u.function},M=function t(){switch(arguments.length){case void 0:case 0:return Array.from(arguments);case 1:return S(arguments[0])&&"string"!=typeof arguments[0]?t.apply(void 0,o(arguments[0])):[arguments[0]];default:return Array.from(arguments).map((function(n){return S(n)?o(t(n)):n})).reduce((function(t,n){return t.concat(n)}),[])}},N=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.filter((function(t){return e(t)===u.number})).concat(n.filter((function(t){return e(t)===u.object&&null!==t})).map((function(t){return e(t.x)===u.number?[t.x,t.y]:e(t[0])===u.number?[t[0],t[1]]:void 0})).filter((function(t){return void 0!==t})).reduce((function(t,n){return t.concat(n)}),[]))},T=function(t){return Math.pow(t[0],2)+Math.pow(t[1],2)},_=function(t){return Math.sqrt(T(t))},B=function(t,n){return T(D(t,n))},z=function(t,n){return Math.sqrt(B(t,n))},L=function(t,n){return[t[0]+n[0],t[1]+n[1]]},D=function(t,n){return[t[0]-n[0],t[1]-n[1]]},F=function(t,n){return[t[0]*n,t[1]*n]},G=Object.freeze({__proto__:null,magnitudeSq2:T,magnitude2:_,distanceSq2:B,distance2:z,add2:L,sub2:D,scale2:F}),U=["tail","head"],q=function(t){return t.join(",")},R=function(t){return"M"+t.map((function(t){return t.join(",")})).join("L")+"Z"},V=function(t,n,r){e(n)===u.boolean?t.options[r].visible=n:e(n)===u.object?(Object.assign(t.options[r],n),null==n.visible&&(t.options[r].visible=!0)):null==n&&(t.options[r].visible=!0)},X=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2?arguments[2]:void 0,r=t.getElementsByClassName("arrow-".concat(e))[0];Object.keys(n).map((function(t){return{key:t,fn:r[P.toCamel(t)]}})).filter((function(t){return"function"==typeof t.fn})).forEach((function(t){return t.fn(n[t.key])}))},Z=function(t){var n=function(t){var n=[[0,1],[2,3]].map((function(n){return n.map((function(n){return t.endpoints[n]||0}))})),e=D(n[1],n[0]),r=L(n[0],F(e,.5)),o=_(e),i=U.map((function(n){return t[n].visible?(1+t[n].padding)*t[n].height*2.5:0})).reduce((function(t,n){return t+n}),0);if(o<i){var c=0===o?[i,0]:F(e,i/o);n=[D,L].map((function(t){return t(r,F(c,.5))})),e=D(n[1],n[0])}var a=[e[1],-e[0]],u=L(r,F(a,t.bend)),s=n.map((function(t){return D(u,t)})),f=s.map((function(t){return _(t)})),l=s.map((function(t,n){return 0===f[n]?t:F(t,1/f[n])})),d=l.map((function(t){return F(t,-1)})),p=d.map((function(t){return[t[1],-t[0]]})),h=U.map((function(n){return t[n].height*((t[n].visible?1:0)+t[n].padding)})),v=n.map((function(t,n){return L(t,F(l[n],h[n]))}));a=[(e=D(v[1],v[0]))[1],-e[0]],r=L(v[0],F(e,.5)),u=L(r,F(a,t.bend));var g=v.map((function(n,e){return L(n,F(D(u,n),t.pinch))})),m=U.map((function(n,e){return[L(v[e],F(d[e],t[n].height)),L(v[e],F(p[e],t[n].width/2)),L(v[e],F(p[e],-t[n].width/2))]}));return{line:"M".concat(q(v[0]),"C").concat(q(g[0]),",").concat(q(g[1]),",").concat(q(v[1])),tail:R(m[0]),head:R(m[1])}}(t.options);return Object.keys(n).map((function(n){return{path:n,element:t.getElementsByClassName("arrow-".concat(n))[0]}})).filter((function(t){return t.element})).map((function(t){return t.element.setAttribute("d",n[t.path]),t})).filter((function(n){return t.options[n.path]})).forEach((function(n){return n.element.setAttribute("visibility",t.options[n.path].visible?"visible":"hidden")})),t},I={setPoints:function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return t.options.endpoints=N.apply(void 0,o(M.apply(void 0,e))).slice(0,4),Z(t)},bend:function(t,n){return t.options.bend=n,Z(t)},pinch:function(t,n){return t.options.pinch=n,Z(t)},head:function(t,n){return V(t,n,"head"),X(t,n,"head"),Z(t)},tail:function(t,n){return V(t,n,"tail"),X(t,n,"tail"),Z(t)},getLine:function(t){return t.getElementsByClassName("arrow-line")[0]}},Y={arrow:{nodeName:"g",attributes:[],args:function(){return[]},methods:I,init:function(t){t.setAttribute("class","arrow");var n=["line","tail","head"].map((function(n){return a.path().setClass("arrow-".concat(n)).appendTo(t)}));n[0].setAttribute("style","fill:none;"),t.options={head:{visible:!1,width:8,height:10,padding:0},tail:{visible:!1,width:8,height:10,padding:0},bend:0,pinch:.618,endpoints:[]};for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return I.setPoints.apply(I,[t].concat(r)),t}}},$=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=[t[0]||0,t[1]||0],o=[t[2]||0,t[3]||0],i=D(o,r),c=L(r,F(i,.5)),a=[i[1],-i[0]],u=L(c,F(a,n)),s=L(r,F(D(u,r),e)),f=L(o,F(D(u,o),e));return"M".concat(r[0],",").concat(r[1],"C").concat(s[0],",").concat(s[1]," ").concat(f[0],",").concat(f[1]," ").concat(o[0],",").concat(o[1])},W=function(t){return t.slice(1).split(/[, ]+/).map((function(t){return parseFloat(t)}))},H=function(t){var n=function(t){return t.match(/[Mm][(0-9), .-]+/).map((function(t){return W(t)}))}(t).shift(),e=function(t){return t.match(/[Cc][(0-9), .-]+/).map((function(t){return W(t)}))}(t).shift(),r=n?[n[n.length-2],n[n.length-1]]:[0,0],o=e?[e[e.length-2],e[e.length-1]]:[0,0];return[].concat(r,o)},Q=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var i=N.apply(void 0,o(M.apply(void 0,e))).slice(0,4);return t.setAttribute("d",$(i,t._bend,t._pinch)),t},K={curve:{nodeName:"path",attributes:["d"],args:function(){return[$(N.apply(void 0,o(M.apply(void 0,arguments))))]},methods:{setPoints:Q,bend:function(t,n){return t._bend=n,Q.apply(void 0,[t].concat(o(H(t.getAttribute("d")))))},pinch:function(t,n){return t._pinch=n,Q.apply(void 0,[t].concat(o(H(t.getAttribute("d")))))}}}},J={};Object.assign(J,b,w,O,C,k,Y,K);var tt=Object.keys(J),nt=[v.h,v.p,v.i],et=[v.g,v.v,v.t,tt],rt={svg:[v.s,v.d].concat(nt).concat(et),g:et,text:[v.cT],linearGradient:[v.cG],radialGradient:[v.cG],defs:nt,filter:[v.cF],marker:et,symbol:et,clipPath:et,mask:et},ot=Object.create(null);Object.keys(rt).forEach((function(t){ot[t]=rt[t].reduce((function(t,n){return t.concat(n)}),[])}));var it=function(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=1,c=e/i-e,a=t-c-o,u=n-c-o,s=e+2*c+2*o,f=r+2*c+2*o;return[a,u,s,f].join(" ")};function ct(){var t=N.apply(void 0,o(M(arguments)));return 2===t.length&&t.unshift(0,0),4===t.length?it.apply(void 0,o(t)):void 0}var at=function(t){return(new p.DOMParser).parseFromString("<root></root>","text/xml").createCDATASection("".concat(t))},ut=function(t){for(;t.lastChild;)t.removeChild(t.lastChild);return t},st=function(t,n){for(;n.childNodes.length>0;){var e=n.childNodes[0];n.removeChild(e),t.appendChild(e)}return t},ft=function(t,n){return Array.from(n.attributes).forEach((function(n){return t.setAttribute(n.name,n.value)})),st(t,n)},lt={removeChildren:ut,appendTo:function(t,n){return null!=n&&n.appendChild(t),t},setAttributes:function(t,n){return Object.keys(n).forEach((function(e){return t.setAttribute(P.toKebab(e),n[e])}))}},dt=function(t){return(new p.DOMParser).parseFromString(t,"text/xml")},pt=function(t){var n=t.getElementsByTagName("parsererror");if(n.length>0)throw new Error(n[0]);return function t(n){if(null===n)return n;for(var e=n.childNodes.length-1;e>=0;e-=1){var r=n.childNodes[e];3===r.nodeType&&r.data.match(/^\s*$/)&&n.removeChild(r),1===r.nodeType&&t(r)}return n}(t.documentElement)},ht=function(t){if(e(t)===u.string||t instanceof String)try{return pt(dt(t))}catch(t){return t}if(null!=t.childNodes)return t},vt=function(t){return function(t){return e(t)===u.string&&/^[\w,\s-]+\.[A-Za-z]{3}$/.test(t)&&t.length<1e4}(t)&&s&&e(p.fetch)===u.function?function(t){return new Promise((function(n,r){if(e(t)===u.string||t instanceof String)fetch(t).then((function(t){return t.text()})).then((function(t){return pt(dt(t))})).then((function(t){return"svg"===t.nodeName?t:t.getElementsByTagName("svg")[0]})).then((function(t){return null==t?r("valid XML found, but no SVG element"):n(t)})).catch((function(t){return r(t)}));else if(t instanceof p.Document)return asyncDone(t)}))}(t):ht(t)};var gt=function(t,n){if((n=Object.assign({download:!1,output:u.string,windowStyle:!1,filename:"image.svg"},n)).windowStyle){var e=p.document.createElementNS(h,u.style);e.setAttribute("type","text/css"),e.innerHTML=function(){var t=[];if(p.document.styleSheets)for(var n=0;n<p.document.styleSheets.length;n+=1){var e=p.document.styleSheets[n];try{for(var r=("cssRules"in e?e.cssRules:e.rules),o=0;o<r.length;o+=1){var i=r[o];"cssText"in i?t.push(i.cssText):t.push("".concat(i.selectorText," {\n").concat(i.style.cssText,"\n}\n"))}}catch(t){console.warn(t)}}return t.join("\n")}(),t.appendChild(e)}var r,o,i,c,a=function(t,n){for(var e=t.replace(/>\s{0,}</g,"><").replace(/</g,"~::~<").replace(/\s*xmlns\:/g,"~::~xmlns:").split("~::~"),r=e.length,o=!1,i=0,c="",a=null!=n&&"string"==typeof n?n:"\t",u=["\n"],s=0;s<100;s+=1)u.push(u[s]+a);for(var f=0;f<r;f+=1)e[f].search(/<!/)>-1?(c+=u[i]+e[f],o=!0,(e[f].search(/-->/)>-1||e[f].search(/\]>/)>-1||e[f].search(/!DOCTYPE/)>-1)&&(o=!1)):e[f].search(/-->/)>-1||e[f].search(/\]>/)>-1?(c+=e[f],o=!1):/^<\w/.exec(e[f-1])&&/^<\/\w/.exec(e[f])&&/^<[\w:\-\.\,]+/.exec(e[f-1])==/^<\/[\w:\-\.\,]+/.exec(e[f])[0].replace("/","")?(c+=e[f],o||(i-=1)):e[f].search(/<\w/)>-1&&-1===e[f].search(/<\//)&&-1===e[f].search(/\/>/)?c=c+=o?e[f]:u[i++]+e[f]:e[f].search(/<\w/)>-1&&e[f].search(/<\//)>-1?c=c+=o?e[f]:u[i]+e[f]:e[f].search(/<\//)>-1?c=c+=o?e[f]:u[--i]+e[f]:e[f].search(/\/>/)>-1?c=c+=o?e[f]:u[i]+e[f]:e[f].search(/<\?/)>-1||e[f].search(/xmlns\:/)>-1||e[f].search(/xmlns\=/)>-1?c+=u[i]+e[f]:c+=e[f];return"\n"===c[0]?c.slice(1):c}((new p.XMLSerializer).serializeToString(t));return n.download&&s&&!f&&(r=n.filename,o=a,i=new p.Blob([o],{type:"text/plain"}),(c=p.document.createElement("a")).setAttribute("href",p.URL.createObjectURL(i)),c.setAttribute("download",r),p.document.body.appendChild(c),c.click(),p.document.body.removeChild(c)),"svg"===n.output?t:a},mt=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var o=1===e.length&&"string"==typeof e[0]?e[0]:ct.apply(void 0,e);return o&&t.setAttribute(u.viewBox,o),t},yt=function(t){var n=t.getAttribute(u.viewBox);return null==n?void 0:n.split(" ").map((function(t){return parseFloat(t)}))},bt=function(t,n,e){var r=t.createSVGPoint();r.x=n,r.y=e;var o=r.matrixTransform(t.getScreenCTM().inverse());return[o.x,o.y]},At=Object.freeze({__proto__:null,setViewBox:mt,getViewBox:yt,convertToViewBox:bt}),wt=function(t,n){var r=vt(n);if(null!=r)return e(r.then)===u.function?r.then((function(n){return ft(t,n)})):ft(t,r)},xt=function(t){var n=yt(t);if(void 0!==n)return n;if(e(t.getBoundingClientRect)===u.function){var r=t.getBoundingClientRect();return[r.x,r.y,r.width,r.height]}return[]},jt="svg-background-rectangle",Ot=function(t,n){var e=function(t){var n=t.getElementsByTagName(u.style);return 0===n.length?void 0:n[0]}(t);return null==e&&(e=this.Constructor(u.style),t.insertBefore(e,t.firstChild)),e.textContent="",e.appendChild(at(n)),e},Et={clear:function(t){return Array.from(t.attributes).filter((function(t){return"xmlns"!==t})).forEach((function(n){return t.removeAttribute(n.name)})),ut(t)},size:mt,setViewBox:mt,getViewBox:yt,padding:function(t,n){var e=yt(t);return void 0!==e&&mt.apply(void 0,[t].concat(o([-n,-n,2*n,2*n].map((function(t,n){return e[n]+t}))))),t},background:function(t,n){var e=Array.from(t.childNodes).filter((function(t){return t.getAttribute(u.class)===jt})).shift();return null==e&&((e=this.Constructor.apply(this,["rect"].concat(o(xt(t))))).setAttribute(u.class,jt),e.setAttribute("stroke","none"),t.insertBefore(e,t.firstChild)),e.setAttribute("fill",n),t},getWidth:function(t){return xt(t)[2]},getHeight:function(t){return xt(t)[3]},stylesheet:function(t,n){return Ot.call(this,t,n)},load:wt,save:gt},Ct={math:{vector:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return[].concat(n)}}},kt={move:["mousemove","touchmove"],press:["mousedown","touchstart"],release:["mouseup","touchend"]},Pt=Object.values(kt).reduce((function(t,n){return t.concat(n)}),[]),St=function(t,n,e){return Object.defineProperty(t,n,{get:function(){return e},enumerable:!0,configurable:!0})},Mt=function(t,n){var e;(["pressX","pressY"].filter((function(n){return!t.hasOwnProperty(n)})).forEach((function(e,r){return St(t,e,n[r])})),t.hasOwnProperty("press"))||St(t,"press",(e=Ct.math).vector.apply(e,o(n)))},Nt=function(t){var n=[],e=[];Object.keys(kt).forEach((function(t){kt[t].forEach((function(t){e[t]=[]}))}));var r={press:function(t,e){Mt(t,n=e)},release:function(){},move:function(t,e){t.buttons>0&&void 0===n[0]?n=e:0===t.buttons&&void 0!==n[0]&&(n=[]),Mt(t,n)}};Object.keys(kt).forEach((function(n){var i="on"+P.capitalized(n);Object.defineProperty(t,i,{set:function(i){return null==i?function(n){return kt[n].forEach((function(n){return e[n].forEach((function(e){return t.removeEventListener(n,e)}))}))}(n):kt[n].forEach((function(c){var a=function(e){var c=null!=e.touches?e.touches[0]:e;if(void 0!==c){var a,u=bt(t,c.clientX,c.clientY).map((function(t){return isNaN(t)?void 0:t}));if(["x","y"].filter((function(t){return!e.hasOwnProperty(t)})).forEach((function(t,n){return St(e,t,u[n])})),!e.hasOwnProperty("position"))St(e,"position",(a=Ct.math).vector.apply(a,o(u)));r[n](e,u)}i(e)};t.addEventListener&&(e[c].push(a),t.addEventListener(c,a))}))},enumerable:!0})})),Object.defineProperty(t,"off",{value:function(){return function(t,n){return Pt.forEach((function(e){n[e].forEach((function(n){return t.removeEventListener(e,n)})),n[e]=[]}))}(t,e)}})},Tt=function(){return Math.random().toString(36).replace(/[^a-z]+/g,"").concat("aaaaa").substr(0,5)},_t=function(t){var n,e,r={},o=0,i=function(){p.cancelAnimationFrame&&p.cancelAnimationFrame(e),Object.keys(r).forEach((function(t){return delete r[t]})),n=void 0,o=0};Object.defineProperty(t,"play",{set:function(t){if(i(),null!=t){var c=Tt();r[c]=function(i){n||(n=i,o=0),t({time:.001*(i-n),frame:o}),o+=1,r[c]&&(e=p.requestAnimationFrame(r[c]))},p.requestAnimationFrame&&(e=p.requestAnimationFrame(r[c]))}},enumerable:!0}),Object.defineProperty(t,"stop",{value:i,enumerable:!0})},Bt=[["cx","cy"],["x","y"]],zt=function(t){var n=[0,0],e={selected:!1,svg:void 0,updatePosition:function(t){return t}},r=function(){e.svg&&(e.svg.parentNode||t.appendChild(e.svg),Bt.filter((function(t){return null!=e.svg[t[0]]})).forEach((function(t){return t.forEach((function(t,r){e.svg.setAttribute(t,n[r])}))})))},i=new Proxy(n,{set:function(t,n,e){return t[n]=e,r(),!0}}),c=function(){N.apply(void 0,o(M.apply(void 0,arguments))).forEach((function(t,e){n[e]=t})),r(),"function"==typeof n.delegate&&n.delegate.apply(n.pointsContainer,[i,n.pointsContainer])};return n.delegate=void 0,n.setPosition=c,n.onMouseMove=function(t){return e.selected?c(e.updatePosition(t)):void 0},n.onMouseUp=function(){e.selected=!1},n.distance=function(t){return Math.sqrt(B(t,n))},["x","y"].forEach((function(t,e){return Object.defineProperty(n,t,{get:function(){return n[e]},set:function(t){n[e]=t}})})),["svg","updatePosition","selected"].forEach((function(t){return Object.defineProperty(n,t,{get:function(){return e[t]},set:function(n){e[t]=n}})})),Object.defineProperty(n,"remove",{value:function(){!function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}(e.svg),n.delegate=void 0}}),i},Lt=function(t,n,e){var r,o,i=Array.from(Array(n)).map((function(){return zt(t)})),c=function(t){return"function"==typeof o?o.call(i,t,r,i):void 0};i.forEach((function(t){t.delegate=c,t.pointsContainer=i}));t.onPress=function(t){i.length>0&&(r=i.map((function(n,e){return{i:e,d:B(n,[t.x,t.y])}})).sort((function(t,n){return t.d-n.d})).shift().i,i[r].selected=!0)},t.onMove=function(t){i.forEach((function(n){return n.onMouseMove(t)}))},t.onRelease=function(){i.forEach((function(t){return t.onMouseUp()})),r=void 0},Object.defineProperty(i,"selectedIndex",{get:function(){return r}}),Object.defineProperty(i,"selected",{get:function(){return i[r]}}),Object.defineProperty(i,"add",{value:function(n){i.push(zt(t))}}),i.removeAll=function(){for(;i.length>0;)i.pop().remove()};var a={onChange:function(t,n){if(o=t,!0===n){var e=i.length-1;t.call(i,i[e],e,i)}},position:function(t){return i.forEach((function(n,e){return n.setPosition(t.call(i,n,e,i))}))},svg:function(t){return i.forEach((function(n,e){n.svg=t.call(i,n,e,i)}))}};return Object.keys(a).forEach((function(t){i[t]=function(){return"function"==typeof arguments[0]&&a[t].apply(a,arguments),i}})),i.parent=function(t){return null!=t&&null!=t.appendChild&&i.forEach((function(n){t.appendChild(n.svg)})),i},i},Dt=function(t){t.controls=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return Lt.call.apply(Lt,[t,t].concat(e))}},Ft=(new p.DOMParser).parseFromString("<div />","text/xml").documentElement.constructor,Gt={svg:{args:function(){return[ct(N.apply(void 0,arguments))].filter((function(t){return null!=t}))},methods:Et,init:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];r.filter((function(t){return e(t)===u.string})).forEach((function(n){return wt(t,n)})),r.filter((function(t){return null!=t})).filter((function(t){return t instanceof Ft})).filter((function(t){return e(t.appendChild)===u.function})).forEach((function(n){return n.appendChild(t)})),Nt(t),_t(t),Dt(t)}}},Ut=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var o=e.map((function(t){return ht(t)})).filter((function(t){return void 0!==t}));return o.filter((function(t){return t.tagName===u.svg})).forEach((function(n){return st(t,n)})),o.filter((function(t){return t.tagName!==u.svg})).forEach((function(n){return t.appendChild(n)})),t},qt={g:{init:Ut,methods:{load:Ut}}},Rt=Object.assign(Object.create(null),{svg:["viewBox"],line:["x1","y1","x2","y2"],rect:["x","y","width","height"],circle:["cx","cy","r"],ellipse:["cx","cy","rx","ry"],polygon:["points"],polyline:["points"],path:["d"],text:["x","y"],mask:["id"],symbol:["id"],clipPath:["id","clip-rule"],marker:["id","markerHeight","markerUnits","markerWidth","orient","refX","refY"],linearGradient:["x1","x2","y1","y2"],radialGradient:["cx","cy","r","fr","fx","fy"],stop:["offset","stop-color","stop-opacity"],pattern:["patternContentUnits","patternTransform","patternUnits"]}),Vt=function(t,n){return t.setAttribute(Rt.circle[2],n),t},Xt=function(t,n,e){return o(N.apply(void 0,o(M(n,e))).slice(0,2)).forEach((function(n,e){return t.setAttribute(Rt.circle[e],n)})),t},Zt=function(t,n,e,r){return[t,n,z([t,n],[e,r])]},It={circle:{args:function(t,n,e,r){var i=N.apply(void 0,o(M(t,n,e,r)));switch(i.length){case 0:case 1:return[,,].concat(o(i));case 2:case 3:return i;default:return Zt.apply(void 0,o(i))}},methods:{radius:Vt,setRadius:Vt,origin:Xt,setOrigin:Xt,center:Xt,setCenter:Xt,position:Xt,setPosition:Xt}}},Yt=function(t,n,e){return[,,n,e].forEach((function(n,e){return t.setAttribute(Rt.ellipse[e],n)})),t},$t=function(t,n,e){return o(N.apply(void 0,o(M(n,e))).slice(0,2)).forEach((function(n,e){return t.setAttribute(Rt.ellipse[e],n)})),t},Wt={ellipse:{args:function(t,n,e,r){var i=N.apply(void 0,o(M(t,n,e,r))).slice(0,4);switch(i.length){case 0:case 1:case 2:return[,,].concat(o(i));default:return i}},methods:{radius:Yt,setRadius:Yt,origin:$t,setOrigin:$t,center:$t,setCenter:$t,position:$t,setPosition:$t}}},Ht=function(t,n,e,r){return N.apply(void 0,o(M(t,n,e,r))).slice(0,4)},Qt={line:{args:Ht,methods:{setPoints:function(t,n,e,r,o){return Ht(n,e,r,o).forEach((function(n,e){return t.setAttribute(Rt.line[e],n)})),t}}}},Kt=/[MmLlSsQqLlHhVvCcSsQqTtAaZz]/g,Jt=/-?[0-9]*\.?\d+/g,tn={m:"move",l:"line",v:"vertical",h:"horizontal",a:"ellipse",c:"curve",s:"smoothCurve",q:"quadCurve",t:"smoothQuadCurve",z:"close"};Object.keys(tn).forEach((function(t){var n=tn[t];tn[t.toUpperCase()]=n.charAt(0).toUpperCase()+n.slice(1)}));var nn=function(t){var n=t.getAttribute("d");return null==n?"":n},en=function(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return t.setAttribute("d","".concat(nn(t)).concat(n).concat(M.apply(void 0,r).join(" "))),t},rn=function(t){return function(t){for(var n,e=[];null!==(n=Kt.exec(t));)e.push(n);return e.map((function(n){return{command:t[n.index],index:n.index}})).reduceRight((function(n,e){var r=t.substring(e.index,n.length?n[n.length-1].index:t.length);return n.concat([{command:e.command,index:e.index,chunk:r.length>0?r.substr(1,r.length-1):r}])}),[]).reverse().map((function(t){var n=t.chunk.match(Jt);return t.en=tn[t.command],t.values=n?n.map(parseFloat):[],delete t.chunk,t}))}(nn(t))},on={addCommand:en,appendCommand:en,clear:function(t){return t.removeAttribute("d"),t},getCommands:rn,get:rn,getD:function(t){return t.getAttribute("d")}};Object.keys(tn).forEach((function(t){on[tn[t]]=function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return en.apply(void 0,[n,t].concat(r))}}));var cn={path:{methods:on}},an=function(t,n,e){return[,,n,e].forEach((function(n,e){return t.setAttribute(Rt.rect[e],n)})),t},un=function(t,n,e){return o(N.apply(void 0,o(M(n,e))).slice(0,2)).forEach((function(n,e){return t.setAttribute(Rt.rect[e],n)})),t},sn=function(t){return[0,1].forEach((function(n){t[2+n]<0&&(void 0===t[0+n]&&(t[0+n]=0),t[0+n]+=t[2+n],t[2+n]=-t[2+n])})),t},fn={rect:{args:function(t,n,e,r){var i=N.apply(void 0,o(M(t,n,e,r))).slice(0,4);switch(i.length){case 0:case 1:case 2:case 3:return sn([,,].concat(o(i)));default:return sn(i)}},methods:{origin:un,setOrigin:un,center:un,setCenter:un,size:an,setSize:an}}},ln={style:{init:function(t,n){t.textContent="",t.appendChild(at(n))},methods:{setTextContent:function(t,n){return t.textContent="",t.appendChild(at(n)),t}}}},dn={text:{args:function(t,n,e){return N.apply(void 0,o(M(t,n,e))).slice(0,2)},init:function(t,n,r,o,i){var c=[n,r,o,i].filter((function(t){return e(t)===u.string})).shift();c&&t.appendChild(p.document.createTextNode(c))}}},pn=function(){return Array.from(arguments).filter((function(t){return e(t)===u.string||t instanceof String})).shift()||Tt()},hn=function(){return[pn.apply(void 0,arguments)]},vn={mask:{args:hn},clipPath:{args:hn},symbol:{args:hn},marker:{args:hn,methods:{size:mt,setViewBox:mt}}},gn=function(t){var n=t.getAttribute("points");return null==n?"":n},mn=function(){var t=arguments;return Array.from(Array(Math.floor(arguments.length/2))).map((function(n,e){return"".concat(t[2*e+0],",").concat(t[2*e+1])})).join(" ")},yn=function(){return[mn.apply(void 0,o(N.apply(void 0,o(M.apply(void 0,arguments)))))]},bn=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return t.setAttribute("points",yn.apply(void 0,e)[0]),t},An=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return t.setAttribute("points",[gn(t),yn.apply(void 0,e)[0]].filter((function(t){return""!==t})).join(" ")),t},wn=function(){return 1===arguments.length&&e(arguments.length<=0?void 0:arguments[0])===u.string?[arguments.length<=0?void 0:arguments[0]]:yn.apply(void 0,arguments)},xn={polyline:{args:wn,methods:{setPoints:bn,addPoint:An}},polygon:{args:wn,methods:{setPoints:bn,addPoint:An}}},jn=Object.assign({},Gt,qt,It,Wt,Qt,cn,fn,ln,dn,vn,xn),On={presentation:["color","color-interpolation","cursor","direction","display","fill","fill-opacity","fill-rule","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","opacity","overflow","paint-order","pointer-events","preserveAspectRatio","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tabindex","transform-origin","user-select","vector-effect","visibility"],animation:["accumulate","additive","attributeName","begin","by","calcMode","dur","end","from","keyPoints","keySplines","keyTimes","max","min","repeatCount","repeatDur","restart","to","values"],effects:["azimuth","baseFrequency","bias","color-interpolation-filters","diffuseConstant","divisor","edgeMode","elevation","exponent","filter","filterRes","filterUnits","flood-color","flood-opacity","in","in2","intercept","k1","k2","k3","k4","kernelMatrix","lighting-color","limitingConeAngle","mode","numOctaves","operator","order","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","primitiveUnits","radius","result","seed","specularConstant","specularExponent","stdDeviation","stitchTiles","surfaceScale","targetX","targetY","type","xChannelSelector","yChannelSelector"],text:["dx","dy","alignment-baseline","baseline-shift","dominant-baseline","lengthAdjust","method","overline-position","overline-thickness","rotate","spacing","startOffset","strikethrough-position","strikethrough-thickness","text-anchor","text-decoration","text-rendering","textLength","underline-position","underline-thickness","word-spacing","writing-mode"],gradient:["gradientTransform","gradientUnits","spreadMethod"]};Object.values(v).reduce((function(t,n){return t.concat(n)}),[]).filter((function(t){return void 0===Rt[t]})).forEach((function(t){Rt[t]=[]})),[[["svg","defs","g"].concat(v.v,v.t),On.presentation],[["filter"],On.effects],[v.cT.concat("text"),On.text],[v.cF,On.effects],[v.cG,On.gradient]].forEach((function(t){return t[0].forEach((function(n){Rt[n]=Rt[n].concat(t[1])}))}));var En=function(t){if(null==t)return[];var n=t.getAttribute(u.class);return null==n?[]:n.split(" ").filter((function(t){return""!==t}))},Cn={addClass:function(t,n){var e=En(t).filter((function(t){return t!==n}));e.push(n),t.setAttributeNS(null,u.class,e.join(" "))},removeClass:function(t,n){var e=En(t).filter((function(t){return t!==n}));t.setAttributeNS(null,u.class,e.join(" "))},setClass:function(t,n){t.setAttributeNS(null,u.class,n)},setId:function(t,n){t.setAttributeNS(null,u.id,n)}},kn=function(t){var n=t.getAttribute(u.transform);return null==n||""===n?void 0:n},Pn={clearTransform:function(t){return t.removeAttribute(u.transform),t}};["translate","rotate","scale","matrix"].forEach((function(t){Pn[t]=function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return n.setAttribute(u.transform,[kn(n),"".concat(t,"(").concat(r.join(" "),")")].filter((function(t){return void 0!==t})).join(" "))}}));var Sn,Mn={};["clip-path","mask","symbol","marker-end","marker-mid","marker-start"].forEach((function(t){Mn[P.toCamel(t)]=function(n,r){return n.setAttribute(t,function(t){if(null==t)return"";if(e(t)===u.string)return"url"===t.slice(0,3)?t:"url(#".concat(t,")");if(null!=t.getAttribute){var n=t.getAttribute(u.id);return"url(#".concat(n,")")}return""}(r))}}));var Nn={};(Sn=v.v).push.apply(Sn,o(Object.keys(J))),Object.keys(J).forEach((function(t){J[t].attributes=void 0===J[t].attributes?o(On.presentation):J[t].attributes.concat(On.presentation)})),Object.assign(Nn,jn,J),Object.keys(v).forEach((function(t){return v[t].filter((function(t){return void 0===Nn[t]})).forEach((function(t){Nn[t]={}}))}));var Tn=function(){return Array.from(arguments)};Object.keys(Nn).forEach((function(t){Nn[t].nodeName||(Nn[t].nodeName=t),Nn[t].init||(Nn[t].init=Tn),Nn[t].args||(Nn[t].args=Tn),Nn[t].methods||(Nn[t].methods={}),Nn[t].attributes||(Nn[t].attributes=Rt[t]||[])}));var _n=function(t,n){t.forEach((function(t){return Object.keys(n).forEach((function(e){Nn[t].methods[e]=function(){return n[e].apply(n,arguments),arguments[0]}}))}))};_n(M(v.t,v.v,v.g,v.s,v.p,v.i,v.h,v.d),Cn),_n(M(v.t,v.v,v.g,v.s,v.p,v.i,v.h,v.d),lt),_n(M(v.v,v.g,v.s),Pn),_n(M(v.t,v.v,v.g),Mn);var Bn={svg:{version:"1.1",xmlns:h},style:{type:"text/css"}},zn=function(t,n){Bn[n]&&Object.keys(Bn[n]).forEach((function(e){return t.setAttribute(e,Bn[n][e])}))},Ln={},Dn=function t(n){for(var e,r,o=arguments.length,i=new Array(o>1?o-1:0),c=1;c<o;c++)i[c-1]=arguments[c];var a=p.document.createElementNS(h,Nn[n].nodeName);return zn(a,n),(e=Nn[n]).init.apply(e,[a].concat(i)),(r=Nn[n]).args.apply(r,i).forEach((function(t,e){null!=Nn[n].attributes[e]&&a.setAttribute(Nn[n].attributes[e],t)})),Nn[n].attributes.forEach((function(t){Object.defineProperty(a,P.toCamel(t),{value:function(){return a.setAttribute.apply(a,[t].concat(Array.prototype.slice.call(arguments))),a}})})),Object.keys(Nn[n].methods).forEach((function(t){return Object.defineProperty(a,t,{value:function(){var e;return(e=Nn[n].methods[t]).call.apply(e,[Ln,a].concat(Array.prototype.slice.call(arguments)))}})})),ot[n]&&ot[n].forEach((function(n){Object.defineProperty(a,n,{value:function(){var e=t.apply(void 0,[n].concat(Array.prototype.slice.call(arguments)));return a.appendChild(e),e}})})),a};Ln.Constructor=Dn;var Fn={};Object.keys(v).forEach((function(t){return v[t].forEach((function(t){Fn[t]=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return Dn.apply(void 0,[t].concat(e))}}))}));var Gn=function(t){return t.filter((function(t){return function(t){if("object"!==e(t))return!1;var n=["vertices_coords","edges_vertices","faces_vertices","faces_edges"];return Object.keys(t).map((function(t){return n.includes(t)})).reduce((function(t,n){return t||n}),!1)}(t)})).shift()},Un=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];r.filter((function(t){return e(t)===u.function})).forEach((function(n){return n.call(t,t)}))};return c.init=function(){var t=arguments,n=Dn.apply(void 0,[u.svg].concat(Array.prototype.slice.call(arguments)));return"loading"===p.document.readyState?p.document.addEventListener("DOMContentLoaded",(function(){return Un.apply(void 0,[n].concat(o(t)))})):Un.apply(void 0,[n].concat(Array.prototype.slice.call(arguments))),n},Object.assign(a,Fn),a.NS=h,a.linker=function(t){t.graph&&t.origami&&function(t,e){e.svg=t,["segment","circle","ellipse","rect","polygon"].filter((function(t){return e[t]&&e[t].prototype})).forEach((function(n){e[n].prototype.svg=function(){return t.path(this.svgPath())}})),Nn.graph={nodeName:"g",init:function(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.graph.svg(r,n(n({},o),{},{parent:t})),t},args:function(){return[]},methods:Nn.g.methods,attributes:Nn.g.attributes},ot.graph=o(ot.g),ot.svg.push("graph"),ot.g.push("graph")}(this,t)}.bind(a),a.use=function(t){t.origami&&function(t,n){Ct.math.vector=n.vector}(0,t),t.render_into_svg&&function(t,n){var e=Nn.svg.init;Nn.svg.init=function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var c=Gn(o);if(c){var a=n.options.apply(n,o);n.render_into_svg(t,c,a)}return e.apply(void 0,[t].concat(o))}}(0,t)}.bind(a),a.core=Object.assign(Object.create(null),{load:vt,save:gt,coordinates:N,flatten:M,attributes:Rt,children:ot,cdata:at,detect:d},P,Cn,lt,G,Pn,At),a}));
