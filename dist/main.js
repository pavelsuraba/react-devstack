webpackJsonp([0],{192:function(e,n,t){t(193),e.exports=t(376)},376:function(e,n,t){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var a=t(71),l=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    * , *:before , *:after {\n        box-sizing: border-box;\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n    }\n\n    @-ms-viewport {\n        width: device-width;\n    }\n\n    html {\n        font-size: 100%;\n        line-height: 1.5;\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        touch-action: manipulation;\n    }\n\n    body {\n        font-family: 'Open Sans','Arial','sans-serif';\n        width: 100vw;\n        height: 100vh; \n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n"],["\n    * , *:before , *:after {\n        box-sizing: border-box;\n    }\n\n    * {\n        margin: 0;\n        padding: 0;\n    }\n\n    @-ms-viewport {\n        width: device-width;\n    }\n\n    html {\n        font-size: 100%;\n        line-height: 1.5;\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        touch-action: manipulation;\n    }\n\n    body {\n        font-family: 'Open Sans','Arial','sans-serif';\n        width: 100vw;\n        height: 100vh; \n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n"]),c=(a.c(l),t(71)),f={desktop:function(){return c.a(["@media (min-width: 1024px) {","}"],c.a.apply(void 0,arguments))}},u=t(65),p=t.n(u),s=t(71),h=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n        font-size: 24px;\n    "],["\n        font-size: 24px;\n    "]),d=s.b.p.withConfig({displayName:"Greeting__Text"})(["font-size: 16px;",""],f.desktop(h)),g=s.b.span.withConfig({displayName:"Greeting__Name"})(["color: #61dafb;font-weight: 700;"]),m=function(){return p.a.createElement(d,null,p.a.createElement(g,null,"React "),"devstack")},b=t(65),w=t.n(b),y=t(71),v=y.b.div.withConfig({displayName:"Logo__LogoWrapper"})(["svg {fill: #f60;fill-rule: evenodd;width: ","px;height: ","px;}"],function(e){return e.large?"60":"30"},function(e){return e.large?"60":"30"}),x=function(e){return w.a.createElement(v,e,w.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 84.29 84.29"},w.a.createElement("path",{d:"M42.15,0A42.15,42.15,0,1,0,84.29,42.15,42.15,42.15,0,0,0,42.15,0Zm2.46,63.22a8.16,8.16,0,0,1-7.33-5.05h0c-2.08-5-5.21-1.55-5.21-1.55v0a6.44,6.44,0,0,1-9.61-8.52h0c1.09-1.33,3.7-4.08.27-6.49h0a4.17,4.17,0,1,1,6.7-3.21,4.13,4.13,0,0,1-1.1,2.69h0l-0.12.12-0.11.13c-0.65.75-2.22,3,1.42,4.46A6.31,6.31,0,0,1,33.33,49c1.77,3.81,4.28,1.82,5.25.81,0.1-.12.21-0.24,0.32-0.34l0.1-.13v0A8.16,8.16,0,1,1,44.61,63.22ZM59,44.51a4.18,4.18,0,0,1-4.18-4.18,4,4,0,0,1,.34-1.65h0c1.81-3.95-1.58-4.23-1.58-4.23A4.93,4.93,0,0,1,50,31.9c-1.47-3-4.35-.94-5.59.18h0l-0.31.29v0A6.38,6.38,0,0,1,39.8,34a6.45,6.45,0,1,1,5.64-9.54c2.14,4.2,4.82,2,5.7,1.29a5,5,0,0,1,3.21-1.2,5,5,0,0,1,5,5,5.11,5.11,0,0,1-.85,2.78h0c-1.77,3.31,1.34,3.8,2.17,4.18h0A4.18,4.18,0,0,1,59,44.51Z"})))},_=t(65),O=t.n(_),j=t(71),E=function(){function e(e,n){for(var t,i=0;i<n.length;i++)t=n[i],t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),z=j.b.div.withConfig({displayName:"Main__Container"})(["display: flex;align-items: center;flex-direction: column;"]),C=j.b.div.withConfig({displayName:"Main__GreetingContext"})(["margin: 0 0 10px 0;"]),k=function(e){function n(){return i(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this))}return o(n,e),E(n,[{key:"render",value:function(){return O.a.createElement(z,null,O.a.createElement(C,null,O.a.createElement(m,null)),O.a.createElement(x,{large:!0}),O.a.createElement("img",{src:t(470),width:"70px",height:"70px",alt:""}))}}]),n}(_.Component),A=k,P=t(65),N=t.n(P),M=t(392);t.n(M);M.render(N.a.createElement(A,null),document.querySelector("#app"))},470:function(e,n,t){e.exports=t.p+"images/image.jpg"}},[192]);