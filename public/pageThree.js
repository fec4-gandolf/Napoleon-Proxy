!function(e){function t(t){for(var r,a,s=t[0],l=t[1],u=t[2],f=0,p=[];f<s.length;f++)a=s[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={2:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;i.push([508,0]),n()}({12:function(e,t){e.exports={starPercents:e=>{let t={total:e.length,1:0,2:0,3:0,4:0,5:0};for(let n=0;n<e.length;n++)t[e[n].rating]++;return t},formatDate:function(e){return`${function(e){return{"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep",10:"Oct",11:"Nov",12:"Dec"}[e]}(e.substring(5,7))} ${e.substring(8,10)}, ${e.substring(0,4)}`},calculateRating:function(e){let t=0,n={1:0,2:0,3:0,4:0,5:0};for(let t=0;t<e.length;t++)n[e[t].rating]++;return(t=(5*n[5]+4*n[4]+3*n[3]+2*n[2]+1*n[1])/(n[5]+n[4]+n[3]+n[2]+n[1])).toFixed(1)}}},221:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,s,l=a(e),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))o.call(n,c)&&(l[c]=n[c]);if(r){s=r(n);for(var f=0;f<s.length;f++)i.call(n,s[f])&&(l[s[f]]=n[s[f]])}}return l}},25:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")});return[n].concat(i).concat([o]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},26:function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,u=0,c=[],f=n(77);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function v(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),v(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=l||(l=h(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),v(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){b(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},4:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},487:function(e,t,n){"use strict";e.exports=n(488)},488:function(e,t,n){"use strict";(function(e){
/** @license React v0.13.6
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(t,"__esModule",{value:!0});var n=null,r=!1,o=3,i=-1,a=-1,s=!1,l=!1;function u(){if(!s){var e=n.expirationTime;l?O():l=!0,_(p,e)}}function c(){var e=n,t=n.next;if(n===t)n=null;else{var r=n.previous;n=r.next=t,t.previous=r}e.next=e.previous=null,r=e.callback,t=e.expirationTime,e=e.priorityLevel;var i=o,s=a;o=e,a=t;try{var l=r()}finally{o=i,a=s}if("function"==typeof l)if(l={callback:l,priorityLevel:e,expirationTime:t,next:null,previous:null},null===n)n=l.next=l.previous=l;else{r=null,e=n;do{if(e.expirationTime>=t){r=e;break}e=e.next}while(e!==n);null===r?r=n:r===n&&(n=l,u()),(t=r.previous).next=r.previous=l,l.next=r,l.previous=t}}function f(){if(-1===i&&null!==n&&1===n.priorityLevel){s=!0;try{do{c()}while(null!==n&&1===n.priorityLevel)}finally{s=!1,null!==n?u():l=!1}}}function p(e){s=!0;var o=r;r=e;try{if(e)for(;null!==n;){var i=t.unstable_now();if(!(n.expirationTime<=i))break;do{c()}while(null!==n&&n.expirationTime<=i)}else if(null!==n)do{c()}while(null!==n&&!E())}finally{s=!1,r=o,null!==n?u():l=!1,f()}}var d,v,b=Date,h="function"==typeof setTimeout?setTimeout:void 0,m="function"==typeof clearTimeout?clearTimeout:void 0,y="function"==typeof requestAnimationFrame?requestAnimationFrame:void 0,g="function"==typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function w(e){d=y(function(t){m(v),e(t)}),v=h(function(){g(d),e(t.unstable_now())},100)}if("object"==typeof performance&&"function"==typeof performance.now){var x=performance;t.unstable_now=function(){return x.now()}}else t.unstable_now=function(){return b.now()};var _,O,E,j=null;if("undefined"!=typeof window?j=window:void 0!==e&&(j=e),j&&j._schedMock){var S=j._schedMock;_=S[0],O=S[1],E=S[2],t.unstable_now=S[3]}else if("undefined"==typeof window||"function"!=typeof MessageChannel){var k=null,P=function(e){if(null!==k)try{k(e)}finally{k=null}};_=function(e){null!==k?setTimeout(_,0,e):(k=e,setTimeout(P,0,!1))},O=function(){k=null},E=function(){return!1}}else{"undefined"!=typeof console&&("function"!=typeof y&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof g&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var C=null,T=!1,A=-1,N=!1,R=!1,D=0,M=33,I=33;E=function(){return D<=t.unstable_now()};var L=new MessageChannel,U=L.port2;L.port1.onmessage=function(){T=!1;var e=C,n=A;C=null,A=-1;var r=t.unstable_now(),o=!1;if(0>=D-r){if(!(-1!==n&&n<=r))return N||(N=!0,w(H)),C=e,void(A=n);o=!0}if(null!==e){R=!0;try{e(o)}finally{R=!1}}};var H=function(e){if(null!==C){w(H);var t=e-D+I;t<I&&M<I?(8>t&&(t=8),I=t<M?M:t):M=t,D=e+I,T||(T=!0,U.postMessage(void 0))}else N=!1};_=function(e,t){C=e,A=t,R||0>t?U.postMessage(void 0):N||(N=!0,w(H))},O=function(){C=null,T=!1,A=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=o,a=i;o=e,i=t.unstable_now();try{return n()}finally{o=r,i=a,f()}},t.unstable_next=function(e){switch(o){case 1:case 2:case 3:var n=3;break;default:n=o}var r=o,a=i;o=n,i=t.unstable_now();try{return e()}finally{o=r,i=a,f()}},t.unstable_scheduleCallback=function(e,r){var a=-1!==i?i:t.unstable_now();if("object"==typeof r&&null!==r&&"number"==typeof r.timeout)r=a+r.timeout;else switch(o){case 1:r=a+-1;break;case 2:r=a+250;break;case 5:r=a+1073741823;break;case 4:r=a+1e4;break;default:r=a+5e3}if(e={callback:e,priorityLevel:o,expirationTime:r,next:null,previous:null},null===n)n=e.next=e.previous=e,u();else{a=null;var s=n;do{if(s.expirationTime>r){a=s;break}s=s.next}while(s!==n);null===a?a=n:a===n&&(n=e,u()),(r=a.previous).next=a.previous=e,e.next=a,e.previous=r}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)n=null;else{e===n&&(n=t);var r=e.previous;r.next=t,t.previous=r}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=o;return function(){var r=o,a=i;o=n,i=t.unstable_now();try{return e.apply(this,arguments)}finally{o=r,i=a,f()}}},t.unstable_getCurrentPriorityLevel=function(){return o},t.unstable_shouldYield=function(){return!r&&(null!==n&&n.expirationTime<a||E())},t.unstable_continueExecution=function(){null!==n&&u()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return n}}).call(this,n(4))},489:function(e,t,n){var r=n(490);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(26)(r,o);r.locals&&(e.exports=r.locals)},490:function(e,t,n){(e.exports=n(25)(!1)).push([e.i,"#header {\n  font-family: Arial, Helvetica, sans-serif;\n  position: relative;\n  line-height: 13px;\n  border-bottom: 1px solid #c2c1c3;\n  margin: 0 0 20px 0;\n  padding: 0 0 60px 0;\n  display: block\n}\n\nh2 {\n  font-size: 20px;\n}\n\n#h2Title{\n  line-height: 26px;\n  height: 25px;\n  width: 199.609px;\n  float: left;\n  display: block;\n}\n\n#button {\n  font-size: 14px;\n  line-height: 10px;\n  text-decoration: none solid rgb(6, 84, 186);\n  color: #0654BA;\n  border: 1px solid #AAAAAA;\n  margin: 12px 0 0 0;\n  padding: 7px 17px 7px 17px;\n  text-align: center;\n  white-space: nowrap;\n  word-spacing: 0px;\n  background-color: #FAFAFA;\n  float: right;\n  display: block;\n  border-radius: 3px;\n}\n\n#button:hover {\n  border: 1px solid black;\n}",""])},491:function(e,t,n){var r=n(492);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(26)(r,o);r.locals&&(e.exports=r.locals)},492:function(e,t,n){(e.exports=n(25)(!1)).push([e.i,"#ratings {\n  position: relative;\n  border-bottom: 1px solid #c2c1c3;\n  height: 140.008px;\n  display: block;\n}\n\n/* Number rating section */\n#number_rating {\n  height: 133.008px;\n  width: 176.719px;\n  font-size: 13px;\n  line-height: 13px;\n  margin: 0 55px 0 0;\n  float: left;\n}\n\n#number {\n  font-family: Helvetica, Verdana, sans-serif;\n  font-size: 64px;\n  font-weight: 100;\n  color: rgb(85, 85, 85);\n  text-align: center;\n  word-spacing: 0px;\n  color: #555555;\n}\n\n#stars {\n  text-align: center;\n  font-size: 20px;\n  margin: 0 0 5px 0;\n}\n\n#count {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 200;\n  line-height: 14px;\n  color: #555555;\n  text-align: center;\n  height: 14px;\n}\n\n/* Rating bars section */\n\n#rating_bars {\n  line-height: 13px;\n  float: left;\n  width: 230px;\n  height: 116.25;\n  padding: 0 0 20px 0;\n  max-width: 230px;\n}\n\n\n/* rating charts section */\n\n#rating_charts {\n  float: left;\n  width: 230px;\n  height: 116.25;\n}",""])},493:function(e,t,n){e.exports=n(494)()},494:function(e,t,n){"use strict";var r=n(495);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},495:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},496:function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},497:function(e,t,n){var r=n(498);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(26)(r,o);r.locals&&(e.exports=r.locals)},498:function(e,t,n){(e.exports=n(25)(!1)).push([e.i,".ratings_bar {\n  position: relative;\n  margin: 5px 5px 5px 40px;\n  height: 12.73px;\n  width: 230px;\n  border-radius: 50px;\n  background-color: #DDDDDD;\n}\n\n.filler {\n  background: #999999;\n  height: 100%;\n  border-radius: inherit;\n  transition: width .2s ease-in\n}\n\n.num_stars {\n  color: #DDDDDD;\n  float: left\n}\n\n#rating_bars {\n  margin: 8px 0 0 10px;\n  position: relative;\n  width: 500\n}",""])},499:function(e,t,n){var r=n(500);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(26)(r,o);r.locals&&(e.exports=r.locals)},500:function(e,t,n){(e.exports=n(25)(!1)).push([e.i,"/* reviews */\nh3 {\n  font-size: 17px;\n}\n\n/* each review */\n#each_review {\n  font: Helvetica, Verdana, sans-serif;\n  height: 120.172px;\n  width: 1124.11px;\n  margin: 20px 0 0 0;\n  padding: 10px 10px 10px 10px;\n  position: relative;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  display: inline-block\n}\n\n/* user */\n.users {\n  width:213px;\n  float: left;\n  position: relative;\n}\n\n#users_rating {\n  font-size: 12px;\n  text-align: center;\n}\n\n#users_author {\n  font: Helvetica, Verdana, sans-serif;\n  font-size: 12px;\n  text-align: center;\n}\n\n#users_date {\n  font: Helvetica, Verdana, sans-serif;\n  font-size: 12px;\n  text-align: center;\n}\n\n/* review */\n.reviews {\n  font: Helvetica, Verdana, sans-serif;\n  width: 600px;\n  float: left;\n  position: relative;\n}\n\n#review_title {\n  font: Helvetica, Verdana, sans-serif;\n  font-size: 20px;\n}\n\n#review {\n  font: Helvetica, Verdana, sans-serif;\n  font-size: 13px;\n}\n\n#link {\n  color:#0654BA\n}",""])},508:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(227),a=n.n(i),s=(n(489),function(){return o.a.createElement("div",{id:"header"},o.a.createElement("div",{id:"h2Title"},o.a.createElement("h2",null,"Ratings & Reviews")),o.a.createElement("div",null,o.a.createElement("button",{id:"button"},"Write a review")))}),l=(n(491),n(76)),u=n.n(l),c=(n(497),n(12));function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,v(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",{id:"rating_bars"},o.a.createElement("div",{className:"bars"},o.a.createElement("div",{className:"num_stars"},"★  5"),o.a.createElement("div",{id:"bar_five",className:"ratings_bar"},o.a.createElement(x,{starAmounts:Object(c.starPercents)(this.props.reviews)}))),o.a.createElement("div",{className:"bars"},o.a.createElement("div",{className:"num_stars"},"★  4"),o.a.createElement("div",{id:"bar_four",className:"ratings_bar"},o.a.createElement(w,{starAmounts:Object(c.starPercents)(this.props.reviews)}))),o.a.createElement("div",{className:"bars"},o.a.createElement("div",{className:"num_stars"},"★  3"),o.a.createElement("div",{id:"bar_three",className:"ratings_bar"},o.a.createElement(g,{starAmounts:Object(c.starPercents)(this.props.reviews)}))),o.a.createElement("div",{className:"bars"},o.a.createElement("div",{className:"num_stars"},"★  2"),o.a.createElement("div",{id:"bar_two",className:"ratings_bar"},o.a.createElement(y,{starAmounts:Object(c.starPercents)(this.props.reviews)}))),o.a.createElement("div",{className:"bars"},o.a.createElement("div",{className:"num_stars"},"★  1"),o.a.createElement("div",{id:"bar_one",className:"ratings_bar"},o.a.createElement(m,{starAmounts:Object(c.starPercents)(this.props.reviews)}))))}}])&&p(n.prototype,r),i&&p(n,i),t}(),m=function(e){return o.a.createElement("div",{className:"filler",style:{width:"".concat(e.starAmounts[1]/e.starAmounts.total*100,"%")}})},y=function(e){return o.a.createElement("div",{className:"filler",style:{width:"".concat(e.starAmounts[2]/e.starAmounts.total*100,"%")}})},g=function(e){return o.a.createElement("div",{className:"filler",style:{width:"".concat(e.starAmounts[3]/e.starAmounts.total*100,"%")}})},w=function(e){return o.a.createElement("div",{className:"filler",style:{width:"".concat(e.starAmounts[4]/e.starAmounts.total*100,"%")}})},x=function(e){return o.a.createElement("div",{className:"filler",style:{width:"".concat(e.starAmounts[5]/e.starAmounts.total*100,"%")}})},_=h;function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,S(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",{id:"ratings"},o.a.createElement("div",{id:"ratings_box"},o.a.createElement("div",{id:"number_rating"},o.a.createElement("h1",{id:"number"},Object(c.calculateRating)(this.props.reviews)),o.a.createElement("div",{id:"stars"},o.a.createElement(u.a,{name:"rate2",editing:!1,renderStarIcon:function(){return o.a.createElement("span",null,"★")},starCount:5,value:Math.floor(Object(c.calculateRating)(this.props.reviews)),emptyStarColor:"#DDDDDD"})),o.a.createElement("div",{id:"count"},this.props.reviews.length," product ratings")),o.a.createElement("div",{id:"rating_bars"},o.a.createElement(_,{reviews:this.props.reviews}))))}}])&&E(n.prototype,r),i&&E(n,i),t}();n(499);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=A(this,N(t).call(this,e))).state={mostPopular:[],allReviews:[]},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",{id:"reviews"},o.a.createElement("div",{className:"review"},o.a.createElement("h3",null,"Most relevant reviews"),this.props.reviews.map(function(e,t){return o.a.createElement("div",{id:"each_review",key:t},o.a.createElement("div",{className:"users"},o.a.createElement("div",{id:"users_rating"},o.a.createElement(u.a,{name:"rate2",editing:!1,renderStarIcon:function(){return o.a.createElement("span",null,"★")},starCount:5,value:e.rating,emptyStarColor:"#DDDDDD"})),o.a.createElement("div",{id:"users_author"},"by ",o.a.createElement("a",{id:"link",href:""},e.author)),o.a.createElement("div",{id:"users_date"},Object(c.formatDate)(e.date))),o.a.createElement("div",{className:"reviews"},o.a.createElement("div",{id:"review_title"},e.review.title),o.a.createElement("div",{id:"review"},e.review.review)))})))}}])&&T(n.prototype,r),i&&T(n,i),t}();function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=L(this,U(t).call(this,e))).state={urlId:window.location.href.substring(26)||1,reviews:[]},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3002/reviews/".concat(this.state.urlId)).then(function(e){return e.json()}).then(function(t){return e.setState({reviews:t}),t}).catch(function(e){return console.log("There was an error")})}},{key:"render",value:function(){return o.a.createElement("div",{id:"app"},o.a.createElement(s,null),o.a.createElement(P,{reviews:this.state.reviews}),o.a.createElement(D,{reviews:this.state.reviews}))}}])&&I(n.prototype,r),i&&I(n,i),t}();a.a.render(o.a.createElement(F,null),document.getElementById("ratings_reviews"))},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=l(o),a=l(n(493)),s=l(n(496));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={value:e.value},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;null!=t&&t!==this.state.value&&this.setState({value:t})}},{key:"onChange",value:function(e){var t=this.props,n=t.editing,r=t.value;n&&null==r&&this.setState({value:e})}},{key:"onStarClick",value:function(e,t,n,r){r.stopPropagation();var o=this.props,i=o.onStarClick;o.editing&&i&&i(e,t,n,r)}},{key:"onStarHover",value:function(e,t,n,r){r.stopPropagation();var o=this.props,i=o.onStarHover;o.editing&&i&&i(e,t,n,r)}},{key:"onStarHoverOut",value:function(e,t,n,r){r.stopPropagation();var o=this.props,i=o.onStarHoverOut;o.editing&&i&&i(e,t,n,r)}},{key:"renderStars",value:function(){for(var e=this,t=this.props,n=t.name,r=t.starCount,o=t.starColor,a=t.emptyStarColor,s=t.editing,l=this.state.value,u=function(e,t){return{float:"right",cursor:s?"pointer":"default",color:t>=e?o:a}},c={display:"none",position:"absolute",marginLeft:-9999},f=[],p=function(t){var r=n+"_"+t,o=i.default.createElement("input",{key:"input_"+r,style:c,className:"dv-star-rating-input",type:"radio",name:n,id:r,value:t,checked:l===t,onChange:e.onChange.bind(e,t,n)}),a=i.default.createElement("label",{key:"label_"+r,style:u(t,l),className:"dv-star-rating-star "+(l>=t?"dv-star-rating-full-star":"dv-star-rating-empty-star"),htmlFor:r,onClick:function(r){return e.onStarClick(t,l,n,r)},onMouseOver:function(r){return e.onStarHover(t,l,n,r)},onMouseLeave:function(r){return e.onStarHoverOut(t,l,n,r)}},e.renderIcon(t,l,n,r));f.push(o),f.push(a)},d=r;d>0;d--)p(d);return f.length?f:null}},{key:"renderIcon",value:function(e,t,n,r){var o=this.props,a=o.renderStarIcon,s=o.renderStarIconHalf;return"function"==typeof s&&Math.ceil(t)===e&&t%1!=0?s(e,t,n,r):"function"==typeof a?a(e,t,n,r):i.default.createElement("i",{key:"icon_"+r,style:{fontStyle:"normal"}},"★")}},{key:"render",value:function(){var e=this.props,t=e.editing,n=e.className,r=(0,s.default)("dv-star-rating",{"dv-star-rating-non-editable":!t},n);return i.default.createElement("div",{style:{display:"inline-block",position:"relative"},className:r},this.renderStars())}}]),t}();u.propTypes={name:a.default.string.isRequired,value:a.default.number,editing:a.default.bool,starCount:a.default.number,starColor:a.default.string,onStarClick:a.default.func,onStarHover:a.default.func,onStarHoverOut:a.default.func,renderStarIcon:a.default.func,renderStarIconHalf:a.default.func},u.defaultProps={starCount:5,editing:!0,starColor:"#ffb400",emptyStarColor:"#333"},t.default=u,e.exports=t.default},77:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}});