!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},r.parcelRequired7c6=o),o.register("ke5Oc",(function(e,t){"use strict";var r=o("c4C4W"),n=o("lGmLA"),i=o("9jbh3"),a=o("knWMA");var s=function e(t){var o=new i(t),s=n(i.prototype.request,o);return r.extend(s,i.prototype,o),r.extend(s,o),s.create=function(r){return e(a(t,r))},s}(o("c74ni"));s.Axios=i,s.CanceledError=o("dW1zJ"),s.CancelToken=o("77MZz"),s.isCancel=o("lXDKh"),s.VERSION=o("kLR29").version,s.toFormData=o("12Kat"),s.AxiosError=o("5TB86"),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=o("9BdDr"),s.isAxiosError=o("kv87N"),e.exports=s,e.exports.default=s})),o.register("c4C4W",(function(e,t){"use strict";var r,n=o("lGmLA"),i=Object.prototype.toString,a=(r=Object.create(null),function(e){var t=i.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return a(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var l=s("ArrayBuffer");function f(e){return null!==e&&"object"==typeof e}function h(e){if("object"!==a(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var p=s("Date"),d=s("File"),v=s("Blob"),m=s("FileList");function y(e){return"[object Function]"===i.call(e)}var g=s("URLSearchParams");function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var w,k=(w="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return w&&e instanceof w});e.exports={isArray:u,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:f,isPlainObject:h,isUndefined:c,isDate:p,isFile:d,isBlob:v,isFunction:y,isStream:function(e){return f(e)&&y(e.pipe)},isURLSearchParams:g,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:b,merge:function e(){var t={};function r(r,n){h(t[n])&&h(r)?t[n]=e(t[n],r):h(r)?t[n]=e({},r):u(r)?t[n]=r.slice():t[n]=r}for(var n=0,i=arguments.length;n<i;n++)b(arguments[n],r);return t},extend:function(e,t,r){return b(t,(function(t,i){e[i]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r){var n,i,a,o={};t=t||{};do{for(i=(n=Object.getOwnPropertyNames(e)).length;i-- >0;)o[a=n[i]]||(t[a]=e[a],o[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:s,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},isTypedArray:k,isFileList:m}})),o.register("lGmLA",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}})),o.register("9jbh3",(function(e,t){"use strict";var r=o("c4C4W"),n=o("6d5Pb"),i=o("JRZh2"),a=o("k04r0"),s=o("knWMA"),u=o("gYMA1"),c=o("9SeBc"),l=c.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&c.assertOptions(r,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var o,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var f=[a,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(u),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var h=t;n.length;){var p=n.shift(),d=n.shift();try{h=p(h)}catch(e){d(e);break}}try{o=a(h)}catch(e){return Promise.reject(e)}for(;u.length;)o=o.then(u.shift(),u.shift());return o},f.prototype.getUri=function(e){e=s(this.defaults,e);var t=u(e.baseURL,e.url);return n(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t,data:(r||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,i){return this.request(s(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)})),e.exports=f})),o.register("6d5Pb",(function(e,t){"use strict";var r=o("c4C4W");function n(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var a;if(i)a=i(t);else if(r.isURLSearchParams(t))a=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(n(t)+"="+n(e))})))})),a=o.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}})),o.register("JRZh2",(function(e,t){"use strict";var r=o("c4C4W");function n(){this.handlers=[]}n.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=n})),o.register("k04r0",(function(e,t){"use strict";var r=o("c4C4W"),n=o("jrAxF"),i=o("lXDKh"),a=o("c74ni"),s=o("dW1zJ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=n.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=n.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=n.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("jrAxF",(function(e,t){"use strict";var r=o("c4C4W"),n=o("c74ni");e.exports=function(e,t,i){var a=this||n;return r.forEach(i,(function(r){e=r.call(a,e,t)})),e}})),o.register("c74ni",(function(e,t){"use strict";var r=o("6qd2L"),n=o("c4C4W"),i=o("h8JMh"),a=o("5TB86"),s=o("gWbUy"),u=o("12Kat"),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var f,h={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==r&&"[object process]"===Object.prototype.toString.call(r))&&(f=o("btSY7")),f),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e))return e;if(n.isArrayBufferView(e))return e.buffer;if(n.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r,a=n.isObject(e),o=t&&t["Content-Type"];if((r=n.isFileList(e))||a&&"multipart/form-data"===o){var s=this.env&&this.env.FormData;return u(r?{"files[]":e}:e,s&&new s)}return a||"application/json"===o?(l(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||h.transitional,r=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||i&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw a.from(e,a.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("beknR")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){h.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){h.headers[e]=n.merge(c)})),e.exports=h})),o.register("6qd2L",(function(e,t){var r,n,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var e=s(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new d(e,t)),1!==c.length||l||s(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("h8JMh",(function(e,t){"use strict";var r=o("c4C4W");e.exports=function(e,t){r.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}})),o.register("5TB86",(function(e,t){"use strict";var r=o("c4C4W");function n(e,t,r,n,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}r.inherits(n,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=n.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){a[e]={value:e}})),Object.defineProperties(n,a),Object.defineProperty(i,"isAxiosError",{value:!0}),n.from=function(e,t,a,o,s,u){var c=Object.create(i);return r.toFlatObject(e,c,(function(e){return e!==Error.prototype})),n.call(c,e.message,t,a,o,s),c.name=e.name,u&&Object.assign(c,u),c},e.exports=n})),o.register("gWbUy",(function(e,t){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("12Kat",(function(e,t){"use strict";var r=o("3aNd6").Buffer,n=o("c4C4W");e.exports=function(e,t){t=t||new FormData;var i=[];function a(e){return null===e?"":n.isDate(e)?e.toISOString():n.isArrayBuffer(e)||n.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):r.from(e):e}return function e(r,o){if(n.isPlainObject(r)||n.isArray(r)){if(-1!==i.indexOf(r))throw Error("Circular reference detected in "+o);i.push(r),n.forEach(r,(function(r,i){if(!n.isUndefined(r)){var s,u=o?o+"."+i:i;if(r&&!o&&"object"==typeof r)if(n.endsWith(i,"{}"))r=JSON.stringify(r);else if(n.endsWith(i,"[]")&&(s=n.toArray(r)))return void s.forEach((function(e){!n.isUndefined(e)&&t.append(u,a(e))}));e(r,u)}})),i.pop()}else t.append(o,a(r))}(e),t}})),o.register("3aNd6",(function(r,n){t(r.exports,"Buffer",(function(){return i}),(function(e){return i=e})),t(r.exports,"INSPECT_MAX_BYTES",(function(){return a}),(function(e){return a=e}));var i,a,s=o("ds8z5"),u=o("8MBJY"),c=o("a2hTj"),l=o("eYQtU"),f=o("l5bVx"),h=o("2MbLg"),p=o("5d11t"),d=o("7rddL"),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=g,a=50;var m=2147483647;function y(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,g.prototype),t}function g(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return k(e)}return b(e,t,r)}function b(t,r,n){if("string"==typeof t)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!g.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=0|I(e,t),n=y(r),i=n.write(e,t);i!==r&&(n=n.slice(0,i));return n}(t,r);if(ArrayBuffer.isView(t))return function(e){if(ae(e,Uint8Array)){var t=new Uint8Array(e);return x(t.buffer,t.byteOffset,t.byteLength)}return _(e)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===t?"undefined":e(f)(t)));if(ae(t,ArrayBuffer)||t&&ae(t.buffer,ArrayBuffer))return x(t,r,n);if("undefined"!=typeof SharedArrayBuffer&&(ae(t,SharedArrayBuffer)||t&&ae(t.buffer,SharedArrayBuffer)))return x(t,r,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return g.from(i,r,n);var a=function(e){if(g.isBuffer(e)){var t=0|E(e.length),r=y(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||oe(e.length)?y(0):_(e);if("Buffer"===e.type&&Array.isArray(e.data))return _(e.data)}(t);if(a)return a;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return g.from(t[Symbol.toPrimitive]("string"),r,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===t?"undefined":e(f)(t)))}function w(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function k(e){return w(e),y(e<0?0:0|E(e))}function _(e){for(var t=e.length<0?0:0|E(e.length),r=y(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function x(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,g.prototype),n}function E(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return 0|e}function I(t,r){if(g.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||ae(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===t?"undefined":e(f)(t)));var n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var a=!1;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return re(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ne(t).length;default:if(a)return i?-1:re(t).length;r=(""+r).toLowerCase(),a=!0}}function T(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return F(this,t,r);case"utf8":case"utf-8":return D(this,t,r);case"ascii":return B(this,t,r);case"latin1":case"binary":return j(this,t,r);case"base64":return M(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return V(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function O(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function S(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),oe(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=g.from(t,n)),g.isBuffer(t))return 0===t.length?-1:R(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):R(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function R(e,t,r,n,i){var a,o=1,s=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;o=2,s/=2,u/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var l=-1;for(a=r;a<s;a++)if(c(e,a)===c(t,-1===l?0:a-l)){if(-1===l&&(l=a),a-l+1===u)return l*o}else-1!==l&&(a-=a-l),l=-1}else for(r+u>s&&(r=s-u),a=r;a>=0;a--){for(var f=!0,h=0;h<u;h++)if(c(e,a+h)!==c(t,h)){f=!1;break}if(f)return a}return-1}function A(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var a,o=t.length;for(n>o/2&&(n=o/2),a=0;a<n;++a){var s=parseInt(t.substr(2*a,2),16);if(oe(s))return a;e[r+a]=s}return a}function C(e,t,r,n){return ie(re(t,e.length-r),e,r,n)}function P(e,t,r,n){return ie(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function L(e,t,r,n){return ie(ne(t),e,r,n)}function N(e,t,r,n){return ie(function(e,t){for(var r,n,i,a=[],o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,i=r%256,a.push(i),a.push(n);return a}(t,e.length-r),e,r,n)}function M(e,t,r){return 0===t&&r===e.length?p.fromByteArray(e):p.fromByteArray(e.slice(t,r))}function D(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var a=e[i],o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s<=r){var u=void 0,c=void 0,l=void 0,f=void 0;switch(s){case 1:a<128&&(o=a);break;case 2:128==(192&(u=e[i+1]))&&(f=(31&a)<<6|63&u)>127&&(o=f);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(f=(15&a)<<12|(63&u)<<6|63&c)>2047&&(f<55296||f>57343)&&(o=f);break;case 4:u=e[i+1],c=e[i+2],l=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&l)&&(f=(15&a)<<18|(63&u)<<12|(63&c)<<6|63&l)>65535&&f<1114112&&(o=f)}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(e){var t=e.length;if(t<=U)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=U));return r}(n)}g.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),g.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.buffer}}),Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.byteOffset}}),g.poolSize=8192,g.from=function(e,t,r){return b(e,t,r)},Object.setPrototypeOf(g.prototype,Uint8Array.prototype),Object.setPrototypeOf(g,Uint8Array),g.alloc=function(e,t,r){return function(e,t,r){return w(e),e<=0?y(e):void 0!==t?"string"==typeof r?y(e).fill(t,r):y(e).fill(t):y(e)}(e,t,r)},g.allocUnsafe=function(e){return k(e)},g.allocUnsafeSlow=function(e){return k(e)},g.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==g.prototype},g.compare=function(e,t){if(ae(e,Uint8Array)&&(e=g.from(e,e.offset,e.byteLength)),ae(t,Uint8Array)&&(t=g.from(t,t.offset,t.byteLength)),!g.isBuffer(e)||!g.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,a=Math.min(r,n);i<a;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},g.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},g.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return g.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=g.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var a=e[r];if(ae(a,Uint8Array))i+a.length>n.length?(g.isBuffer(a)||(a=g.from(a)),a.copy(n,i)):Uint8Array.prototype.set.call(n,a,i);else{if(!g.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,i)}i+=a.length}return n},g.byteLength=I,g.prototype._isBuffer=!0,g.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)O(this,t,t+1);return this},g.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)O(this,t,t+3),O(this,t+1,t+2);return this},g.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)O(this,t,t+7),O(this,t+1,t+6),O(this,t+2,t+5),O(this,t+3,t+4);return this},g.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?D(this,0,e):T.apply(this,arguments)},g.prototype.toLocaleString=g.prototype.toString,g.prototype.equals=function(e){if(!g.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===g.compare(this,e)},g.prototype.inspect=function(){var e="",t=a;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(g.prototype[v]=g.prototype.inspect),g.prototype.compare=function(t,r,n,i,a){if(ae(t,Uint8Array)&&(t=g.from(t,t.offset,t.byteLength)),!g.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===t?"undefined":e(f)(t)));if(void 0===r&&(r=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===a&&(a=this.length),r<0||n>t.length||i<0||a>this.length)throw new RangeError("out of range index");if(i>=a&&r>=n)return 0;if(i>=a)return-1;if(r>=n)return 1;if(this===t)return 0;for(var o=(a>>>=0)-(i>>>=0),s=(n>>>=0)-(r>>>=0),u=Math.min(o,s),c=this.slice(i,a),l=t.slice(r,n),h=0;h<u;++h)if(c[h]!==l[h]){o=c[h],s=l[h];break}return o<s?-1:s<o?1:0},g.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},g.prototype.indexOf=function(e,t,r){return S(this,e,t,r,!0)},g.prototype.lastIndexOf=function(e,t,r){return S(this,e,t,r,!1)},g.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return A(this,e,t,r);case"utf8":case"utf-8":return C(this,e,t,r);case"ascii":case"latin1":case"binary":return P(this,e,t,r);case"base64":return L(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,e,t,r);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}},g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var U=4096;function B(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function j(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function F(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",a=t;a<r;++a)i+=se[e[a]];return i}function V(e,t,r){for(var n=e.slice(t,r),i="",a=0;a<n.length-1;a+=2)i+=String.fromCharCode(n[a]+256*n[a+1]);return i}function H(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function W(e,t,r,n,i,a){if(!g.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<a)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function z(e,t,r,n,i){$(t,n,i,e,r,7);var a=Number(t&BigInt(4294967295));e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a;var o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function q(e,t,r,n,i){$(t,n,i,e,r,7);var a=Number(t&BigInt(4294967295));e[r+7]=a,a>>=8,e[r+6]=a,a>>=8,e[r+5]=a,a>>=8,e[r+4]=a;var o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function J(e,t,r,n,i,a){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function G(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,4),d.write(e,t,r,n,23,4),r+4}function K(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,8),d.write(e,t,r,n,52,8),r+8}g.prototype.slice=function(e,t){var r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,g.prototype),n},g.prototype.readUintLE=g.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||H(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return n},g.prototype.readUintBE=g.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||H(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},g.prototype.readUint8=g.prototype.readUInt8=function(e,t){return e>>>=0,t||H(e,1,this.length),this[e]},g.prototype.readUint16LE=g.prototype.readUInt16LE=function(e,t){return e>>>=0,t||H(e,2,this.length),this[e]|this[e+1]<<8},g.prototype.readUint16BE=g.prototype.readUInt16BE=function(e,t){return e>>>=0,t||H(e,2,this.length),this[e]<<8|this[e+1]},g.prototype.readUint32LE=g.prototype.readUInt32LE=function(e,t){return e>>>=0,t||H(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},g.prototype.readUint32BE=g.prototype.readUInt32BE=function(e,t){return e>>>=0,t||H(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},g.prototype.readBigUInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24),i=this[++e]+256*this[++e]+65536*this[++e]+r*Math.pow(2,24);return BigInt(n)+(BigInt(i)<<BigInt(32))})),g.prototype.readBigUInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t*Math.pow(2,24)+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),g.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||H(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},g.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||H(e,t,this.length);for(var n=t,i=1,a=this[e+--n];n>0&&(i*=256);)a+=this[e+--n]*i;return a>=(i*=128)&&(a-=Math.pow(2,8*t)),a},g.prototype.readInt8=function(e,t){return e>>>=0,t||H(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},g.prototype.readInt16LE=function(e,t){e>>>=0,t||H(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},g.prototype.readInt16BE=function(e,t){e>>>=0,t||H(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},g.prototype.readInt32LE=function(e,t){return e>>>=0,t||H(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},g.prototype.readInt32BE=function(e,t){return e>>>=0,t||H(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},g.prototype.readBigInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24))})),g.prototype.readBigInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r)})),g.prototype.readFloatLE=function(e,t){return e>>>=0,t||H(e,4,this.length),d.read(this,e,!0,23,4)},g.prototype.readFloatBE=function(e,t){return e>>>=0,t||H(e,4,this.length),d.read(this,e,!1,23,4)},g.prototype.readDoubleLE=function(e,t){return e>>>=0,t||H(e,8,this.length),d.read(this,e,!0,52,8)},g.prototype.readDoubleBE=function(e,t){return e>>>=0,t||H(e,8,this.length),d.read(this,e,!1,52,8)},g.prototype.writeUintLE=g.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||W(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},g.prototype.writeUintBE=g.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||W(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},g.prototype.writeUint8=g.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,1,255,0),this[t]=255&e,t+1},g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},g.prototype.writeBigUInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return z(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),g.prototype.writeBigUInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),g.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);W(this,e,t,r,i-1,-i)}var a=0,o=1,s=0;for(this[t]=255&e;++a<r&&(o*=256);)e<0&&0===s&&0!==this[t+a-1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},g.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);W(this,e,t,r,i-1,-i)}var a=r-1,o=1,s=0;for(this[t+a]=255&e;--a>=0&&(o*=256);)e<0&&0===s&&0!==this[t+a+1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},g.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},g.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},g.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},g.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},g.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},g.prototype.writeBigInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return z(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),g.prototype.writeBigInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),g.prototype.writeFloatLE=function(e,t,r){return G(this,e,t,!0,r)},g.prototype.writeFloatBE=function(e,t,r){return G(this,e,t,!1,r)},g.prototype.writeDoubleLE=function(e,t,r){return K(this,e,t,!0,r)},g.prototype.writeDoubleBE=function(e,t,r){return K(this,e,t,!1,r)},g.prototype.copy=function(e,t,r,n){if(!g.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},g.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!g.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){var i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var a;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(a=t;a<r;++a)this[a]=e;else{var o=g.isBuffer(e)?e:g.from(e,n),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<r-t;++a)this[a+t]=o[a%s]}return this};var Y={};function X(t,r,n){Y[t]=function(n){e(l)(a,n);var i=e(h)(a);function a(){var n;return e(u)(this,a),n=i.call(this),Object.defineProperty(e(s)(n),"message",{value:r.apply(e(s)(n),arguments),writable:!0,configurable:!0}),n.name="".concat(n.name," [").concat(t,"]"),n.stack,delete n.name,n}return e(c)(a,[{key:"code",get:function(){return t},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(t,"]: ").concat(this.message)}}]),a}(n)}function Q(e){for(var t="",r=e.length,n="-"===e[0]?1:0;r>=n+4;r-=3)t="_".concat(e.slice(r-3,r)).concat(t);return"".concat(e.slice(0,r)).concat(t)}function $(t,r,n,i,a,o){if(t>n||t<r){var s,u="bigint"===(void 0===r?"undefined":e(f)(r))?"n":"";throw s=o>3?0===r||r===BigInt(0)?">= 0".concat(u," and < 2").concat(u," ** ").concat(8*(o+1)).concat(u):">= -(2".concat(u," ** ").concat(8*(o+1)-1).concat(u,") and < 2 ** ")+"".concat(8*(o+1)-1).concat(u):">= ".concat(r).concat(u," and <= ").concat(n).concat(u),new Y.ERR_OUT_OF_RANGE("value",s,t)}!function(e,t,r){Z(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||ee(t,e.length-(r+1))}(i,a,o)}function Z(e,t){if("number"!=typeof e)throw new Y.ERR_INVALID_ARG_TYPE(t,"number",e)}function ee(e,t,r){if(Math.floor(e)!==e)throw Z(e,r),new Y.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new Y.ERR_BUFFER_OUT_OF_BOUNDS;throw new Y.ERR_OUT_OF_RANGE(r||"offset",">= ".concat(r?1:0," and <= ").concat(t),e)}X("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),X("ERR_INVALID_ARG_TYPE",(function(t,r){return'The "'.concat(t,'" argument must be of type number. Received type ').concat(void 0===r?"undefined":e(f)(r))}),TypeError),X("ERR_OUT_OF_RANGE",(function(t,r,n){var i='The value of "'.concat(t,'" is out of range.'),a=n;return Number.isInteger(n)&&Math.abs(n)>Math.pow(2,32)?a=Q(String(n)):"bigint"===(void 0===n?"undefined":e(f)(n))&&(a=String(n),(n>Math.pow(BigInt(2),BigInt(32))||n<-Math.pow(BigInt(2),BigInt(32)))&&(a=Q(a)),a+="n"),i+=" It must be ".concat(r,". Received ").concat(a)}),RangeError);var te=/[^+/0-9A-Za-z-_]/g;function re(e,t){var r;t=t||1/0;for(var n=e.length,i=null,a=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&a.push(239,191,189);continue}if(o+1===n){(t-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&a.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return a}function ne(e){return p.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ie(e,t,r,n){var i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function ae(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function oe(e){return e!=e}var se=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();function ue(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}})),o.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),o.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),o.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n.default(e,t)};var r,n=(r=o("gD1JV"))&&r.__esModule?r:{default:r}})),o.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=r.default();return function(){var r,a=n.default(e);if(t){var o=n.default(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return i.default(this,r)}};var r=a(o("aTHs7")),n=a(o("fVNic")),i=a(o("jmhxu"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),o.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),o.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=i(o("ds8z5")),n=i(o("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),o.register("5d11t",(function(e,r){var n,i;t(e.exports,"toByteArray",(function(){return n}),(function(e){return n=e})),t(e.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),n=function(e){var t,r,n=f(e),i=n[0],a=n[1],u=new s(function(e,t,r){return 3*(t+r)/4-r}(0,i,a)),c=0,l=a>0?i-4:i;for(r=0;r<l;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===a&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,u[c++]=255&t);1===a&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,r=e.length,n=r%3,i=[],o=16383,s=0,u=r-n;s<u;s+=o)i.push(h(e,s,s+o>u?u:s+o));1===n?(t=e[r-1],i.push(a[t>>2]+a[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],i.push(a[t>>10]+a[t>>4&63]+a[t<<2&63]+"="));return i.join("")};for(var a=[],o=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)a[c]=u[c],o[u.charCodeAt(c)]=c;function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function h(e,t,r){for(var n,i,o=[],s=t;s<r;s+=3)n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(a[(i=n)>>18&63]+a[i>>12&63]+a[i>>6&63]+a[63&i]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),o.register("7rddL",(function(e,r){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var n,i;t(e.exports,"read",(function(){return n}),(function(e){return n=e})),t(e.exports,"write",(function(){return i}),(function(e){return i=e})),n=function(e,t,r,n,i){var a,o,s=8*i-n-1,u=(1<<s)-1,c=u>>1,l=-7,f=r?i-1:0,h=r?-1:1,p=e[t+f];for(f+=h,a=p&(1<<-l)-1,p>>=-l,l+=s;l>0;a=256*a+e[t+f],f+=h,l-=8);for(o=a&(1<<-l)-1,a>>=-l,l+=n;l>0;o=256*o+e[t+f],f+=h,l-=8);if(0===a)a=1-c;else{if(a===u)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,n),a-=c}return(p?-1:1)*o*Math.pow(2,a-n)},i=function(e,t,r,n,i,a){var o,s,u,c=8*a-i-1,l=(1<<c)-1,f=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:a-1,d=n?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-o))<1&&(o--,u*=2),(t+=o+f>=1?h/u:h*Math.pow(2,1-f))*u>=2&&(o++,u/=2),o+f>=l?(s=0,o=l):o+f>=1?(s=(t*u-1)*Math.pow(2,i),o+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,i),o=0));i>=8;e[r+p]=255&s,p+=d,s/=256,i-=8);for(o=o<<i|s,c+=i;c>0;e[r+p]=255&o,p+=d,o/=256,c-=8);e[r+p-d]|=128*v}})),o.register("btSY7",(function(e,t){"use strict";var r=o("c4C4W"),n=o("j97bH"),i=o("jFG8L"),a=o("6d5Pb"),s=o("gYMA1"),u=o("1nUSP"),c=o("9jFfm"),l=o("gWbUy"),f=o("5TB86"),h=o("dW1zJ"),p=o("4ULKu");e.exports=function(e){return new Promise((function(t,o){var d,v=e.data,m=e.headers,y=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}r.isFormData(v)&&r.isStandardBrowserEnv()&&delete m["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var w=e.auth.username||"",k=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(w+":"+k)}var _=s(e.baseURL,e.url);function x(){if(b){var r="getAllResponseHeaders"in b?u(b.getAllResponseHeaders()):null,i={data:y&&"text"!==y&&"json"!==y?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:r,config:e,request:b};n((function(e){t(e),g()}),(function(e){o(e),g()}),i),b=null}}if(b.open(e.method.toUpperCase(),a(_,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=x:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(x)},b.onabort=function(){b&&(o(new f("Request aborted",f.ECONNABORTED,e,b)),b=null)},b.onerror=function(){o(new f("Network Error",f.ERR_NETWORK,e,b,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new f(t,r.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,e,b)),b=null},r.isStandardBrowserEnv()){var E=(e.withCredentials||c(_))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;E&&(m[e.xsrfHeaderName]=E)}"setRequestHeader"in b&&r.forEach(m,(function(e,t){void 0===v&&"content-type"===t.toLowerCase()?delete m[t]:b.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),y&&"json"!==y&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(e){b&&(o(!e||e&&e.type?new h:e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),v||(v=null);var I=p(_);I&&-1===["http","https","file"].indexOf(I)?o(new f("Unsupported protocol "+I+":",f.ERR_BAD_REQUEST,e)):b.send(v)}))}})),o.register("j97bH",(function(e,t){"use strict";var r=o("5TB86");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}})),o.register("jFG8L",(function(e,t){"use strict";var r=o("c4C4W");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,a,o){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(a)&&s.push("domain="+a),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("gYMA1",(function(e,t){"use strict";var r=o("7xjuH"),n=o("ftRZn");e.exports=function(e,t){return e&&!r(t)?n(e,t):t}})),o.register("7xjuH",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("ftRZn",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("1nUSP",(function(e,t){"use strict";var r=o("c4C4W"),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,a,o={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),i=r.trim(e.substr(a+1)),t){if(o[t]&&n.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([i]):o[t]?o[t]+", "+i:i}})),o):o}})),o.register("9jFfm",(function(e,t){"use strict";var r=o("c4C4W");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}})),o.register("dW1zJ",(function(e,t){"use strict";var r=o("5TB86");function n(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}o("c4C4W").inherits(n,r,{__CANCEL__:!0}),e.exports=n})),o.register("4ULKu",(function(e,t){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("beknR",(function(e,t){e.exports=null})),o.register("lXDKh",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("knWMA",(function(e,t){"use strict";var r=o("c4C4W");e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function o(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function u(r){return r in t?i(e[r],t[r]):r in e?i(void 0,e[r]):void 0}var c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||a,i=t(e);r.isUndefined(i)&&t!==u||(n[e]=i)})),n}})),o.register("9SeBc",(function(t,r){var n=o("l5bVx"),i=o("kLR29").version,a=o("5TB86"),s={};["object","boolean","number","function","string","symbol"].forEach((function(t,r){s[t]=function(i){return(void 0===i?"undefined":e(n)(i))===t||"a"+(r<1?"n ":" ")+t}}));var u={};s.transitional=function(e,t,r){function n(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,o){if(!1===e)throw new a(n(i," has been removed"+(t?" in "+t:"")),a.ERR_DEPRECATED);return t&&!u[i]&&(u[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,o)}},t.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new a("options must be an object",a.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),i=n.length;i-- >0;){var o=n[i],s=t[o];if(s){var u=e[o],c=void 0===u||s(u,o,e);if(!0!==c)throw new a("option "+o+" must be "+c,a.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new a("Unknown option "+o,a.ERR_BAD_OPTION)}},validators:s}})),o.register("kLR29",(function(e,t){e.exports={version:"0.27.2"}})),o.register("77MZz",(function(e,t){"use strict";var r=o("dW1zJ");function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},n.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},n.source=function(){var e;return{token:new n((function(t){e=t})),cancel:e}},e.exports=n})),o.register("9BdDr",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("kv87N",(function(e,t){"use strict";var r=o("c4C4W");e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return a.apply(null,arguments)};var r,n=(r=o("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,r){return(a=i()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return r&&n.default(a,r.prototype),a}).apply(null,arguments)}})),o.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),o.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=o("fVNic"))&&r.__esModule?r:{default:r}}));var s={};function u(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){u(a,n,i,o,s,"next",e)}function s(e){u(a,n,i,o,s,"throw",e)}o(void 0)}))}};var c={},l=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new S(n||[]);return a._invoke=function(e,t,r){var n=f;return function(i,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw a;return A()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=I(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(e,r,o),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function m(){}function y(){}function g(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(R([])));k&&k!==r&&n.call(k,a)&&(b=k);var _=g.prototype=m.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,n){function a(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(a,a):a()}}function I(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function R(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:t,done:!0}}return y.prototype=g,u(_,"constructor",g),u(g,"constructor",y),y.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},x(E.prototype),u(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new E(c(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(_),u(_,s,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(c);try{regeneratorRuntime=l}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=l:Function("r","regeneratorRuntime = r")(l)}var f,h=(f=o("ke5Oc")).default,p="https://api.themoviedb.org/3/movie/",d={responseType:"stream",api_key:"a8de9bbb748883055cd7737934b96801"};function v(){return(v=e(s)(e(c).mark((function t(r){var n,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get("".concat(p).concat(r),{params:d});case 3:return n=e.sent,i=n.data,e.abrupt("return",i);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}var m={openModalBtn:document.querySelector(".main-gallery__list"),container:document.querySelector(".container-js")};m.openModalBtn.addEventListener("click",(function(){console.log(m.openModalBtn),window.addEventListener("keydown",w),document.body.classList.add("show__modal"),function(e){return v.apply(this,arguments)}(y).then((function(e){var t=e.poster_path,r=e.title,n=e.overview,i=e.vote_average,a=e.vote_count,o=e.popularity,s=e.original_title,u="https://image.tmdb.org/t/p/w500".concat(t),c=e.genres.map((function(e){return e.name})).join(", "),l='<div class="backdrop">\n        <div class="modal">\n            <button type="button" class="close__modal">\n            </button>\n            <div class="modal__wrapper">\n                <div class="modal__poster">\n                    <img class="modal__image" src="'.concat(u,'" alt="').concat(r,'">\n                </div>\n                <div class="modal__about">\n                    <h2 class="modal__title">').concat(r,'</h2>\n                    <table class="modal__table">\n                        <tbody>\n                            <tr>\n                            <td class="key__item">Vote / Votes</td>\n                            <td class="item__value"><span class="vote">').concat(i,"</span> / ").concat(a,'</td>\n                            </tr>\n                            <tr>\n                            <td class="key__item">Popularity</td>\n                            <td class="item__value">').concat(o,'</td>\n                            </tr>\n                            <tr>\n                            <td class="key__item">Original Title</td>\n                            <td class="item__value">').concat(s,'</td>\n                            </tr>\n                            <tr>\n                            <td class="key__item">Genre</td>\n                            <td class="item__value">').concat(c,'</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <h3 class="text__title">About</h3>\n                    <p class="modal__text">').concat(n,'</p>\n                    <div class="modal__buttons">\n                        <button class="modal__button watched__btn" type="button">add to watched</button>\n                        <button class="modal__button" type="button">add to queue</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>');m.container.insertAdjacentHTML("beforeend",l);var f=document.querySelector(".close__modal"),h=document.querySelector(".backdrop");f.addEventListener("click",g),h.addEventListener("click",b)}))}));var y="10770";function g(){window.removeEventListener("keydown",w),document.body.classList.remove("show__modal"),m.container.innerHTML=""}function b(e){e.currentTarget===e.target&&g()}function w(e){"Escape"===e.code&&g()}var k=o("8MBJY"),_=o("a2hTj"),x=function(){"use strict";function t(){e(k)(this,t),this.searchQuery="",this.page=3}return e(_)(t,[{key:"fetchMovies",value:function(){var t=this;return e(s)(e(c).mark((function r(){var n;return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e(f).get("".concat("https://api.themoviedb.org/3").concat(t.request),{params:{api_key:"a8de9bbb748883055cd7737934b96801",page:t.page,query:"car"}});case 3:return n=r.sent,r.abrupt("return",n.data);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:return r.prev=10,r.finish(10);case 12:case"end":return r.stop()}}),r,null,[[0,7,10,12]])})))()}},{key:"tranding",value:function(){this.request="/trending/".concat("movie","/").concat("day")}},{key:"search",value:function(){this.request="/search/movie"}},{key:"changePage",value:function(){this.page=page}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),t}(),E={galleryContainer:document.querySelector(".main-gallery__list"),headerLogo:document.querySelector(".header__logo"),homePageBtn:document.querySelector(".header__list").firstElementChild.firstElementChild,myLibraryBtn:document.querySelector(".header__list").lastElementChild.firstElementChild,headerSearch:document.querySelector(".header__searchform"),paginationList:document.querySelector(".pagination"),libraryBtns:document.querySelector(".library__list")},I=[{id:12,name:"Adventure"},{id:14,name:"Fantasy"},{id:16,name:"Animation"},{id:18,name:"Drama"},{id:27,name:"Horror"},{id:28,name:"Action"},{id:35,name:"Comedy"},{id:36,name:"History"},{id:37,name:"Western"},{id:53,name:"Thriller"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:878,name:"Science Fiction"},{id:9648,name:"Mystery"},{id:10402,name:"Music"},{id:10749,name:"Romance"},{id:10751,name:"Family"},{id:10752,name:"War"},{id:10770,name:"TV Movie"}],T="https://image.tmdb.org/t/p/w500";function O(e){return S.apply(this,arguments)}function S(){return(S=e(s)(e(c).mark((function t(r){var n,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.results,e.next=3,n.map((function(e){var t=e.release_date.match(/\d{4}/g),r=e.genre_ids.map((function(e){return I.find((function(t){return t.id===e})).name})).join(", "),n=e.poster_path,i="".concat(T).concat(n);return{id:e.id,title:e.title,genres:r,poster_path:i,release_date:t}}));case 3:return i=e.sent,e.next=6,R(i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function R(e){return A.apply(this,arguments)}function A(){return(A=e(s)(e(c).mark((function t(r){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.map((function(e){return'<li class="card" data-id = "'.concat(e.id,'">\n        <div class="card__container" data-id = "').concat(e.id,'">\n          <img src="').concat(e.poster_path,'" alt="').concat(e.title,'" class="card__poster">\n        \n        </div>\n        <div class="card__meta meta">\n          <p class="meta__title">').concat(e.title,'</p>\n          <ul class="meta__list list">\n            <li class="meta__item meta__item--genres">').concat(e.genres,'</li>\n            <li class="meta__item">').concat(e.release_date,"</li>\n \n          </ul>\n        </div>\n      </li>")})).join("");case 2:n=e.sent,E.galleryContainer.insertAdjacentHTML("beforeend",n);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function C(){E.galleryContainer.innerHTML=""}new x;function P(e,t){return L.apply(this,arguments)}function L(){return(L=e(s)(e(c).mark((function t(r,n){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=[],i=1;i<=r;i+=1)a.push('<button type="button" class="pagination__btn page">'.concat(i,"</button>"));return e.abrupt("return",a.join(""));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function N(e,t){return M.apply(this,arguments)}function M(){return(M=e(s)(e(c).mark((function t(r,n){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),console.log(n),e.next=4,P(r,n);case 4:i=e.sent,console.log(i),E.paginationList.insertAdjacentHTML("beforeend",i);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function D(){E.paginationList.innerHTML=""}addEventListener("DOMContentLoaded",(function(){B()})),E.headerLogo.addEventListener("click",F),E.homePageBtn.addEventListener("click",F);var U=new x;function B(){return j.apply(this,arguments)}function j(){return(j=e(s)(e(c).mark((function t(){var r,n,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U.tranding(),e.next=3,q();case 3:return r=e.sent,n=r.total_pages,i=r.page,e.next=8,O(r);case 8:return e.next=10,N(n,i);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function F(e){return V.apply(this,arguments)}function V(){return(V=e(s)(e(c).mark((function t(r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),U.resetPage(),e.next=4,C();case 4:return e.next=6,D();case 6:return e.next=8,H();case 8:return e.next=10,B();case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function H(){return W.apply(this,arguments)}function W(){return(W=e(s)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("loadHomePageHeader"),E.libraryBtns.classList.add("is-hidden"),E.myLibraryBtn.classList.remove("current"),E.homePageBtn.classList.add("current"),E.headerSearch.classList.remove("is-hidden");case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var z,q=(z=e(s)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.fetchMovies();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),t)}))),function(){return z.apply(this,arguments)}),J=(k=o("8MBJY"),_=o("a2hTj"),o("hKHmD")),G={};Object.defineProperty(G,"__esModule",{value:!0}),G.default=function(e){return K.default(e)||Y.default(e)||Q.default(e)||X.default()};var K=$(o("kMC0W")),Y=$(o("7AJDX")),X=$(o("8CtQK")),Q=$(o("auk6i"));function $(e){return e&&e.__esModule?e:{default:e}}k=o("8MBJY"),_=o("a2hTj");var Z={};Object.defineProperty(Z,"__esModule",{value:!0}),Z.default=function(e,t){return ee.default(e)||te.default(e,t)||ne.default(e,t)||re.default()};var ee=ie(o("8slrw")),te=ie(o("7AJDX")),re=ie(o("ifqQW")),ne=ie(o("auk6i"));function ie(e){return e&&e.__esModule?e:{default:e}}var ae=o("ds8z5"),oe=(k=o("8MBJY"),_=o("a2hTj"),o("eYQtU")),se={};Object.defineProperty(se,"__esModule",{value:!0}),se.default=function(e){return pe(e)};var ue=he(o("ge8co")),ce=he(o("cZGw3")),le=he(o("fVNic")),fe=he(o("gD1JV"));function he(e){return e&&e.__esModule?e:{default:e}}function pe(e){var t="function"==typeof Map?new Map:void 0;return pe=function(e){if(null===e||!ce.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return ue.default(e,arguments,le.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),fe.default(r,e)},pe(e)}var de=o("2MbLg"),ve=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},me={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,h=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(h=64)),n.push(r[l],r[f],r[h],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ve(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var a=r[e.charAt(i++)],o=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(n.push(c),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==u){var f=s<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ye=function(e){return function(e){var t=ve(e);return me.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ge=function(e){try{return me.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var be=function(){"use strict";function t(){var r=this;e(k)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return e(_)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function we(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ke=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(t,i,a){var o;return e(k)(this,n),(o=r.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(ae)(o),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(ae)(o),_e.prototype.create),o}return n}(e(se)(Error)),_e=function(){"use strict";function t(r,n,i){e(k)(this,t),this.service=r,this.serviceName=n,this.errors=i}return e(_)(t,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?xe(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new ke(a,u,i);return c}}]),t}();function xe(e,t){return e.replace(Ee,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var Ee=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Te(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(Oe(l)&&Oe(f)){if(!Te(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var h=!0,p=!1,d=void 0;try{for(var v,m=n[Symbol.iterator]();!(h=(v=m.next()).done);h=!0){var y=v.value;if(!r.includes(y))return!1}}catch(e){p=!0,d=e}finally{try{h||null==m.return||m.return()}finally{if(p)throw d}}return!0}function Oe(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=function(t,n){var i=e(Z)(n.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){r.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return r.length?"&"+r.join("&"):""}function Re(t){var r={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=e(Z)(t.split("="),2),i=n[0],a=n[1];r[decodeURIComponent(i)]=decodeURIComponent(a)}})),r}function Ae(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce=function(){"use strict";function t(r,n){var i=this;e(k)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(i)})).catch((function(e){i.error(e)}))}return e(_)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=Pe),void 0===n.error&&(n.error=Pe),void 0===n.complete&&(n.complete=Pe);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Pe(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Le(e){return e&&e._delegate?e._delegate:e}var Ne=function(){"use strict";function t(r,n,i){e(k)(this,t),this.name=r,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(_)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Me="[DEFAULT]",De=function(){"use strict";function t(r,n){e(k)(this,t),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(_)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new be;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:Me})}catch(e){}var r=!0,n=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=e(Z)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(s)(e(c).mark((function r(){var n;return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(t.instances.values()),r.next=3,Promise.all(e(G)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(G)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.options,n=void 0===r?{}:r,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:n}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=e(Z)(c.value,2),h=f[0],p=f[1],d=this.normalizeInstanceIdentifier(h);i===d&&p.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var a=this.instances.get(n);return a&&e(a,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,a=this.instances.get(r);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===Me?void 0:t),options:i}),this.instances.set(r,a),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(a,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me;return this.component?this.component.multipleInstances?e:Me:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,Be,je=function(){"use strict";function t(r){e(k)(this,t),this.name=r,this.providers=new Map}return e(_)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new De(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Fe=(k=o("8MBJY"),_=o("a2hTj"),J=o("hKHmD"),[]);(Be=Ue||(Ue={}))[Be.DEBUG=0]="DEBUG",Be[Be.VERBOSE=1]="VERBOSE",Be[Be.INFO=2]="INFO",Be[Be.WARN=3]="WARN",Be[Be.ERROR=4]="ERROR",Be[Be.SILENT=5]="SILENT";var Ve,He={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},We=Ue.INFO,ze=(Ve={},e(J)(Ve,Ue.DEBUG,"log"),e(J)(Ve,Ue.VERBOSE,"log"),e(J)(Ve,Ue.INFO,"info"),e(J)(Ve,Ue.WARN,"warn"),e(J)(Ve,Ue.ERROR,"error"),Ve),qe=function(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var o;if(!(r<t.logLevel)){var s=(new Date).toISOString(),u=ze[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(G)(i)))}},Je=function(){"use strict";function t(r){e(k)(this,t),this.name=r,this._logLevel=We,this._logHandler=qe,this._userLogHandler=null,Fe.push(this)}return e(_)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Ue))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?He[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ue.DEBUG].concat(e(G)(r))),this._logHandler.apply(this,[this,Ue.DEBUG].concat(e(G)(r)))}},{key:"log",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ue.VERBOSE].concat(e(G)(r))),this._logHandler.apply(this,[this,Ue.VERBOSE].concat(e(G)(r)))}},{key:"info",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ue.INFO].concat(e(G)(r))),this._logHandler.apply(this,[this,Ue.INFO].concat(e(G)(r)))}},{key:"warn",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ue.WARN].concat(e(G)(r))),this._logHandler.apply(this,[this,Ue.WARN].concat(e(G)(r)))}},{key:"error",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ue.ERROR].concat(e(G)(r))),this._logHandler.apply(this,[this,Ue.ERROR].concat(e(G)(r)))}}]),t}();var Ge={};Object.defineProperty(Ge,"__esModule",{value:!0}),Ge.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Ye.default(e,t,r[t])}))}return e};var Ke,Ye=(Ke=o("hKHmD"))&&Ke.__esModule?Ke:{default:Ke};var Xe,Qe;var $e=new WeakMap,Ze=new WeakMap,et=new WeakMap,tt=new WeakMap,rt=new WeakMap;var nt={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Ze.get(e);if("objectStoreNames"===t)return e.objectStoreNames||et.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ot(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function it(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Qe||(Qe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(st(this),r),ot($e.get(this))}:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return ot(t.apply(st(this),r))}:function(r){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[st(this),r].concat(e(G)(i)));return et.set(s,r.sort?r.sort():[r]),ot(s)}}function at(e){return"function"==typeof e?it(e):(e instanceof IDBTransaction&&function(e){if(!Ze.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),n()},a=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Ze.set(e,t)}}(e),t=e,(Xe||(Xe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,nt):e);var t}function ot(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(ot(t.result)),n()},a=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&$e.set(e,t)})).catch((function(){})),rt.set(r,t),r;var t,r;if(tt.has(e))return tt.get(e);var n=at(e);return n!==e&&(tt.set(e,n),rt.set(n,e)),n}var st=function(e){return rt.get(e)};function ut(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,a=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=ot(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(ot(s.result),e.oldVersion,e.newVersion,ot(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var ct=["get","getKey","getAll","getAllKeys","count"],lt=["put","add","delete","clear"],ft=new Map;function ht(t,r){if(t instanceof IDBDatabase&&!(r in t)&&"string"==typeof r){if(ft.get(r))return ft.get(r);var n=r.replace(/FromIndex$/,""),i=r!==n,a=lt.includes(n);if(n in(i?IDBIndex:IDBObjectStore).prototype&&(a||ct.includes(n))){var o=function(){var t=e(s)(e(c).mark((function t(r){var o,s,u,l,f,h,p=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o=p.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=p[u];return f=this.transaction(r,a?"readwrite":"readonly"),h=f.store,i&&(h=h.index(s.shift())),t.next=7,Promise.all([(l=h)[n].apply(l,e(G)(s)),a&&f.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}();return ft.set(r,o),o}}}nt=function(t){return e(Ge)({},t,{get:function(e,r,n){return ht(e,r)||t.get(e,r,n)},has:function(e,r){return!!ht(e,r)||t.has(e,r)}})}(nt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pt=function(){"use strict";function t(r){e(k)(this,t),this.container=r}return e(_)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var dt,vt,mt="@firebase/app",yt="0.7.25",gt=new Je("@firebase/app"),bt="[DEFAULT]",wt=(dt={},e(J)(dt,mt,"fire-core"),e(J)(dt,"@firebase/app-compat","fire-core-compat"),e(J)(dt,"@firebase/analytics","fire-analytics"),e(J)(dt,"@firebase/analytics-compat","fire-analytics-compat"),e(J)(dt,"@firebase/app-check","fire-app-check"),e(J)(dt,"@firebase/app-check-compat","fire-app-check-compat"),e(J)(dt,"@firebase/auth","fire-auth"),e(J)(dt,"@firebase/auth-compat","fire-auth-compat"),e(J)(dt,"@firebase/database","fire-rtdb"),e(J)(dt,"@firebase/database-compat","fire-rtdb-compat"),e(J)(dt,"@firebase/functions","fire-fn"),e(J)(dt,"@firebase/functions-compat","fire-fn-compat"),e(J)(dt,"@firebase/installations","fire-iid"),e(J)(dt,"@firebase/installations-compat","fire-iid-compat"),e(J)(dt,"@firebase/messaging","fire-fcm"),e(J)(dt,"@firebase/messaging-compat","fire-fcm-compat"),e(J)(dt,"@firebase/performance","fire-perf"),e(J)(dt,"@firebase/performance-compat","fire-perf-compat"),e(J)(dt,"@firebase/remote-config","fire-rc"),e(J)(dt,"@firebase/remote-config-compat","fire-rc-compat"),e(J)(dt,"@firebase/storage","fire-gcs"),e(J)(dt,"@firebase/storage-compat","fire-gcs-compat"),e(J)(dt,"@firebase/firestore","fire-fst"),e(J)(dt,"@firebase/firestore-compat","fire-fst-compat"),e(J)(dt,"fire-js","fire-js"),e(J)(dt,"firebase","fire-js-all"),dt),kt=new Map,_t=new Map;function xt(e,t){try{e.container.addComponent(t)}catch(r){gt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function Et(e){var t=e.name;if(_t.has(t))return gt.debug("There were multiple attempts to register component ".concat(t,".")),!1;_t.set(t,e);var r=!0,n=!1,i=void 0;try{for(var a,o=kt.values()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){xt(a.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!0}function It(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Tt=(vt={},e(J)(vt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(J)(vt,"bad-app-name","Illegal App name: '{$appName}"),e(J)(vt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(J)(vt,"app-deleted","Firebase App named '{$appName}' already deleted"),e(J)(vt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(J)(vt,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(J)(vt,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),e(J)(vt,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),e(J)(vt,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),e(J)(vt,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),vt),Ot=new _e("app","Firebase",Tt),St=function(){"use strict";function t(r,n,i){var a=this;e(k)(this,t),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ne("app",(function(){return a}),"PUBLIC"))}return e(_)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}]),t}(),Rt="9.8.2";function At(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=kt.get(e);if(!t)throw Ot.create("no-app",{appName:e});return t}function Ct(e,t,r){var n,i=null!==(n=wt[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void gt.warn(s.join(" "))}Et(new Ne("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pt="firebase-heartbeat-store",Lt=null;function Nt(){return Lt||(Lt=ut("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Pt)}}).catch((function(e){throw Ot.create("storage-open",{originalErrorMessage:e.message})}))),Lt}function Mt(e){return Dt.apply(this,arguments)}function Dt(){return(Dt=e(s)(e(c).mark((function t(r){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Nt();case 3:return n=e.sent,e.abrupt("return",n.transaction(Pt).objectStore(Pt).get(jt(r)));case 7:throw e.prev=7,e.t0=e.catch(0),Ot.create("storage-get",{originalErrorMessage:e.t0.message});case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Ut(e,t){return Bt.apply(this,arguments)}function Bt(){return(Bt=e(s)(e(c).mark((function t(r,n){var i,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Nt();case 3:return i=e.sent,a=i.transaction(Pt,"readwrite"),o=a.objectStore(Pt),e.next=8,o.put(n,jt(r));case 8:return e.abrupt("return",a.done);case 11:throw e.prev=11,e.t0=e.catch(0),Ot.create("storage-set",{originalErrorMessage:e.t0.message});case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function jt(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft=function(){"use strict";function t(r){var n=this;e(k)(this,t),this.container=r,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new zt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return e(_)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(s)(e(c).mark((function r(){var n,i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),a=Vt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(s)(e(c).mark((function r(){var n,i,a,o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(n=Vt(),i=Ht(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=ye(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=n,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),r)})))()}}]),t}();function Vt(){return(new Date).toISOString().substring(0,10)}function Ht(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=r.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),qt(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:a.agent,dates:[a.date]}),qt(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var Wt,zt=function(){"use strict";function t(r){e(k)(this,t),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(_)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(s)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(s)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Mt(t.app);case 9:return n=e.sent,e.abrupt("return",n||{heartbeats:[]});case 11:case"end":return e.stop()}}),r)})))()}},{key:"overwrite",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,r.read();case 10:return a=e.sent,e.abrupt("return",Ut(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),n)})))()}},{key:"add",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i,a;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return a=n.sent,n.abrupt("return",Ut(r.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(G)(a.heartbeats).concat(e(G)(t.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),t}();function qt(e){return ye(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt="",Et(new Ne("platform-logger",(function(e){return new pt(e)}),"PRIVATE")),Et(new Ne("heartbeat",(function(e){return new Ft(e)}),"PRIVATE")),Ct(mt,yt,Wt),Ct(mt,yt,"esm2017"),Ct("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ct("firebase","9.8.2","app");ae=o("ds8z5"),k=o("8MBJY"),_=o("a2hTj"),J=o("hKHmD");var Jt={};Object.defineProperty(Jt,"__esModule",{value:!0}),Jt.default=function(e,t,r){return Kt(e,t,r)};var Gt=function(e){return e&&e.__esModule?e:{default:e}}(o("2mz0K"));function Kt(e,t,r){return(Kt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=Gt.default(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r||e):i.value}})(e,t,r)}var Yt=o("fVNic");oe=o("eYQtU"),de=o("2MbLg");function Xt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create;function Qt(){return e(J)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var $t=Qt,Zt=new _e("auth","Firebase",Qt()),er=new Je("@firebase/auth");function tr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;er.logLevel<=Ue.ERROR&&(a=er).error.apply(a,["Auth (".concat(Rt,"): ").concat(t)].concat(e(G)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];throw or.apply(void 0,[t].concat(e(G)(n)))}function nr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return or.apply(void 0,[t].concat(e(G)(n)))}function ir(t,r,n){var i=Object.assign(Object.assign({},$t()),e(J)({},r,n));return new _e("auth","Firebase",i).create(r,{appName:t.name})}function ar(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&rr(e,"argument-error"),ir(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function or(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=n[0],u=e(G)(n.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(G)(u)))}return(a=Zt).create.apply(a,[t].concat(e(G)(n)))}function sr(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!t)throw or.apply(void 0,[r].concat(e(G)(i)))}function ur(e){var t="INTERNAL ASSERTION FAILED: "+e;throw tr(t),new Error(t)}function cr(e,t){e||ur(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lr=new Map;function fr(e){cr(e instanceof Function,"Expected a class definition");var t=lr.get(e);return t?(cr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,lr.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e,t){var r=It(e,"auth");if(r.isInitialized()){var n=r.getImmediate();if(Te(r.getOptions(),null!=t?t:{}))return n;rr(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function dr(){return"http:"===vr()||"https:"===vr()}function vr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!dr()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yr=function(){"use strict";function t(r,n){e(k)(this,t),this.shortDelay=r,this.longDelay=n,cr(n>r,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(_)(t,[{key:"get",value:function(){return mr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(e,t){cr(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var br,wr=function(){"use strict";function t(){e(k)(this,t)}return e(_)(t,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),kr=(br={},e(J)(br,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(J)(br,"MISSING_CUSTOM_TOKEN","internal-error"),e(J)(br,"INVALID_IDENTIFIER","invalid-email"),e(J)(br,"MISSING_CONTINUE_URI","internal-error"),e(J)(br,"INVALID_PASSWORD","wrong-password"),e(J)(br,"MISSING_PASSWORD","internal-error"),e(J)(br,"EMAIL_EXISTS","email-already-in-use"),e(J)(br,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(J)(br,"INVALID_IDP_RESPONSE","invalid-credential"),e(J)(br,"INVALID_PENDING_TOKEN","invalid-credential"),e(J)(br,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(J)(br,"MISSING_REQ_TYPE","internal-error"),e(J)(br,"EMAIL_NOT_FOUND","user-not-found"),e(J)(br,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(J)(br,"EXPIRED_OOB_CODE","expired-action-code"),e(J)(br,"INVALID_OOB_CODE","invalid-action-code"),e(J)(br,"MISSING_OOB_CODE","internal-error"),e(J)(br,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(J)(br,"INVALID_ID_TOKEN","invalid-user-token"),e(J)(br,"TOKEN_EXPIRED","user-token-expired"),e(J)(br,"USER_NOT_FOUND","user-token-expired"),e(J)(br,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(J)(br,"INVALID_CODE","invalid-verification-code"),e(J)(br,"INVALID_SESSION_INFO","invalid-verification-id"),e(J)(br,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(J)(br,"MISSING_SESSION_INFO","missing-verification-id"),e(J)(br,"SESSION_EXPIRED","code-expired"),e(J)(br,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(J)(br,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(J)(br,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(J)(br,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(J)(br,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(J)(br,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(J)(br,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(J)(br,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(J)(br,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(J)(br,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(J)(br,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),br),_r=new yr(3e4,6e4);function xr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Er(e,t,r,n){return Ir.apply(this,arguments)}function Ir(){return Ir=e(s)(e(c).mark((function t(r,n,i,a){var o,u=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},t.abrupt("return",Tr(r,o,e(s)(e(c).mark((function t(){var o,s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===n?s=a:o={body:JSON.stringify(a)}),u=Se(Object.assign({key:r.config.apiKey},s)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",wr.fetch()(Ar(r,r.config.apiHost,i,u),Object.assign({method:n,headers:l,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Ir.apply(this,arguments)}function Tr(e,t,r){return Or.apply(this,arguments)}function Or(){return(Or=e(s)(e(c).mark((function t(r,n,i){var a,o,s,u,l,f,h,p,d;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r._canInitEmulator=!1,a=Object.assign(Object.assign({},kr),n),t.prev=2,o=new Cr(r),t.next=6,Promise.race([i(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw Pr(r,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(l=s.ok?u.errorMessage:u.error.message,f=e(Z)(l.split(" : "),2),h=f[0],p=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==h){t.next=23;break}throw Pr(r,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==h){t.next=27;break}throw Pr(r,"email-already-in-use",u);case 27:if("USER_DISABLED"!==h){t.next=29;break}throw Pr(r,"user-disabled",u);case 29:if(d=a[h]||h.toLowerCase().replace(/[_\s]+/g,"-"),!p){t.next=34;break}throw ir(r,d,p);case 34:rr(r,d);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof ke)){t.next=41;break}throw t.t0;case 41:rr(r,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Sr(e,t,r,n){return Rr.apply(this,arguments)}function Rr(){return Rr=e(s)(e(c).mark((function t(r,n,i,a){var o,s,u=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,Er(r,n,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&rr(r,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),Rr.apply(this,arguments)}function Ar(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?gr(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Cr=function(){"use strict";function t(r){var n=this;e(k)(this,t),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(nr(r.auth,"network-request-failed"))}),_r.get())}))}return e(_)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Pr(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=nr(e,t,n);return i.customData._tokenResponse=r,i}function Lr(e,t){return Nr.apply(this,arguments)}function Nr(){return(Nr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Er(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Mr(e,t){return Dr.apply(this,arguments)}function Dr(){return(Dr=e(s)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Er(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(){return Br=e(s)(e(c).mark((function t(r){var n,i,a,o,s,u,l=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]&&l[1],i=Le(r),e.next=4,i.getIdToken(n);case 4:return a=e.sent,sr((o=Fr(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:Ur(jr(o.auth_time)),issuedAtTime:Ur(jr(o.iat)),expirationTime:Ur(jr(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Br.apply(this,arguments)}function jr(e){return 1e3*Number(e)}function Fr(t){var r=e(Z)(t.split("."),3),n=r[0],i=r[1],a=r[2];if(void 0===n||void 0===i||void 0===a)return tr("JWT malformed, contained fewer than 3 sections"),null;try{var o=ge(i);return o?JSON.parse(o):(tr("Failed to decode base64 JWT payload"),null)}catch(e){return tr("Caught error parsing JWT payload as JSON",e),null}}function Vr(e,t){return Hr.apply(this,arguments)}function Hr(){return Hr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(c).mark((function t(r,n){var i=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof ke&&Wr(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Hr.apply(this,arguments)}function Wr(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zr=function(){"use strict";function t(r){e(k)(this,t),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(_)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(t),n=this;this.timerId=setTimeout(e(s)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),t)}))),r)}}},{key:"iteration",value:function(){var t=this;return e(s)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===e.t0.code&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}}]),t}(),qr=function(){"use strict";function t(r,n){e(k)(this,t),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return e(_)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Ur(this.lastLoginAt),this.creationTime=Ur(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e){return Gr.apply(this,arguments)}function Gr(){return(Gr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(c).mark((function t(r){var n,i,a,o,s,u,l,f,h,p,d;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.auth,e.next=4,r.getIdToken();case 4:return a=e.sent,e.next=7,Vr(r,Mr(i,{idToken:a}));case 7:sr(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],r._notifyReloadListener(s),u=(null===(n=s.providerUserInfo)||void 0===n?void 0:n.length)?Xr(s.providerUserInfo):[],l=Yr(r.providerData,u),f=r.isAnonymous,h=!(r.email&&s.passwordHash||(null==l?void 0:l.length)),p=!!f&&h,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new qr(s.createdAt,s.lastLoginAt),isAnonymous:p},Object.assign(r,d);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Kr(){return(Kr=e(s)(e(c).mark((function t(r){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Le(r),e.next=3,Jr(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Yr(t,r){var n=t.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return e(G)(n).concat(e(G)(r))}function Xr(e){return e.map((function(e){var t=e.providerId,r=Xt(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function Qr(e,t){return $r.apply(this,arguments)}function $r(){return($r=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(c).mark((function t(r,n){var i;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Tr(r,{},e(s)(e(c).mark((function t(){var i,a,o,s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Se({grant_type:"refresh_token",refresh_token:n}).slice(1),a=r.config,o=a.tokenApiHost,s=a.apiKey,u=Ar(r,o,"/v1/token","key=".concat(s)),e.next=5,r._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",wr.fetch()(u,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zr=function(){"use strict";function t(){e(k)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(_)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){sr(e.idToken,"internal-error"),sr(void 0!==e.idToken,"internal-error"),sr(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,sr(r=Fr(t),"internal-error"),sr(void 0!==r.exp,"internal-error"),sr(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(s)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(sr(!n.accessToken||n.refreshToken,t,"user-token-expired"),r||!n.accessToken||n.isExpired){e.next=3;break}return e.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){e.next=7;break}return e.next=6,n.refresh(t,n.refreshToken);case 6:return e.abrupt("return",n.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,r){var n=this;return e(s)(e(c).mark((function i(){var a,o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Qr(t,r);case 2:a=e.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,n.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return ur("not implemented")}}],[{key:"fromJSON",value:function(e,r){var n=r.refreshToken,i=r.accessToken,a=r.expirationTime,o=new t;return n&&(sr("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(sr("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(sr("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e,t){sr("string"==typeof e||void 0===e,"internal-error",{appName:t})}var tn=function(){"use strict";function t(r){e(k)(this,t);var n=r.uid,i=r.auth,a=r.stsTokenManager,o=Xt(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(G)(o.providerData):[],this.metadata=new qr(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(_)(t,[{key:"getIdToken",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Vr(r,r.stsTokenManager.getToken(r.auth,t));case 2:if(sr(i=e.sent,r.auth,"internal-error"),r.accessToken===i){e.next=9;break}return r.accessToken=i,e.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Br.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Kr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(sr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){sr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(s)(e(c).mark((function i(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(t),a=!0),!r){e.next=5;break}return e.next=5,Jr(n);case 5:return e.next=7,n.auth._persistUserIfCurrent(n);case 7:a&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(s)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return n=e.sent,e.next=5,Vr(t,Lr(t.auth,{idToken:n}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,r){var n,i,a,o,s,u,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,h=null!==(i=r.email)&&void 0!==i?i:void 0,p=null!==(a=r.phoneNumber)&&void 0!==a?a:void 0,d=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,y=null!==(c=r.createdAt)&&void 0!==c?c:void 0,g=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,b=r.uid,w=r.emailVerified,k=r.isAnonymous,_=r.providerData,x=r.stsTokenManager;sr(b&&x,e,"internal-error");var E=Zr.fromJSON(this.name,x);sr("string"==typeof b,e,"internal-error"),en(f,e.name),en(h,e.name),sr("boolean"==typeof w,e,"internal-error"),sr("boolean"==typeof k,e,"internal-error"),en(p,e.name),en(d,e.name),en(v,e.name),en(m,e.name),en(y,e.name),en(g,e.name);var I=new t({uid:b,auth:e,email:h,emailVerified:w,displayName:f,isAnonymous:k,photoURL:d,phoneNumber:p,tenantId:v,stsTokenManager:E,createdAt:y,lastLoginAt:g});return _&&Array.isArray(_)&&(I.providerData=_.map((function(e){return Object.assign({},e)}))),m&&(I._redirectEventId=m),I}},{key:"_fromIdTokenResponse",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(s)(e(c).mark((function a(){var o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new Zr).updateFromServerResponse(n),s=new t({uid:n.localId,auth:r,stsTokenManager:o,isAnonymous:i}),e.next=5,Jr(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),rn=function(){"use strict";function t(){e(k)(this,t),this.type="NONE",this.storage={}}return e(_)(t,[{key:"_isAvailable",value:function(){return e(s)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,r){var n=this;return e(s)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.storage[t]=r;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(s)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete r.storage[t];case 1:case"end":return e.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.type="NONE";var nn=rn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var on=function(){"use strict";function t(r,n,i){e(k)(this,t),this.persistence=r,this.auth=n,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=an(this.userKey,o.apiKey,s),this.fullPersistenceKey=an("persistence",o.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(_)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(s)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return n=e.sent,e.abrupt("return",n?tn._fromJSON(t.auth,n):null);case 4:case"end":return e.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.getCurrentUser();case 4:return i=e.sent,e.next=7,r.removeCurrentUser();case 7:if(r.persistence=t,!i){e.next=10;break}return e.abrupt("return",r.setCurrentUser(i));case 10:case"end":return e.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(s)(e(c).mark((function a(){var o,u,l,f,h,p,d,v,m,y,g,b,w;return e(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.length){a.next=2;break}return a.abrupt("return",new t(fr(nn),r,i));case 2:return a.next=4,Promise.all(n.map(function(){var t=e(s)(e(c).mark((function t(r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:o=a.sent.filter((function(e){return e})),u=o[0]||fr(nn),l=an(i,r.config.apiKey,r.name),f=null,h=!0,p=!1,d=void 0,a.prev=9,v=n[Symbol.iterator]();case 11:if(h=(m=v.next()).done){a.next=29;break}return y=m.value,a.prev=13,a.next=16,y._get(l);case 16:if(!(g=a.sent)){a.next=22;break}return b=tn._fromJSON(r,g),y!==u&&(f=b),u=y,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:h=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),p=!0,d=a.t1;case 35:a.prev=35,a.prev=36,h||null==v.return||v.return();case 38:if(a.prev=38,!p){a.next=41;break}throw d;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(w=o.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&w.length){a.next=46;break}return a.abrupt("return",new t(u,r,i));case 46:if(u=w[0],!f){a.next=50;break}return a.next=50,u._set(l,f.toJSON());case 50:return a.next=52,Promise.all(n.map(function(){var t=e(s)(e(c).mark((function t(r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===u){e.next=8;break}return e.prev=1,e.next=4,r._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return a.abrupt("return",new t(u,r,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(un(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pn(t))return"Blackberry";if(dn(t))return"Webos";if(cn(t))return"Safari";if((t.includes("chrome/")||ln(t))&&!t.includes("edge/"))return"Chrome";if(hn(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function un(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we();return/firefox\//i.test(e)}function cn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ln(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we();return/crios\//i.test(e)}function fn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we();return/iemobile/i.test(e)}function hn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we();return/android/i.test(e)}function pn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we();return/blackberry/i.test(e)}function dn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we();return/webos/i.test(e)}function vn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we();return/iphone|ipad|ipod/i.test(e)}function mn(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we();return vn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function yn(){return((e=we()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function gn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we();return vn(e)||hn(e)||dn(e)||pn(e)||/windows phone/i.test(e)||fn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bn(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=sn(we());break;case"Worker":t="".concat(sn(we()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Rt,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wn=function(){"use strict";function t(r){e(k)(this,t),this.auth=r,this.queue=[]}return e(_)(t,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i,a,o,s,u,l,f,h,p,d,v,m,y;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,o=!1,s=void 0,e.prev=5,u=r.queue[Symbol.iterator]();case 7:if(a=(l=u.next()).done){e.next=15;break}return f=l.value,e.next=11,f(t);case 11:f.onAbort&&i.push(f.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),o=!0,s=e.t0;case 21:e.prev=21,e.prev=22,a||null==u.return||u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),h=!0,p=!1,d=void 0,e.prev=35,v=i[Symbol.iterator]();!(h=(m=v.next()).done);h=!0){y=m.value;try{y()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),p=!0,d=e.t2;case 43:e.prev=43,e.prev=44,h||null==v.return||v.return();case 46:if(e.prev=46,!p){e.next=49;break}throw d;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw r.auth._errorFactory.create("login-blocked",{originalMessage:e.t1.message});case 52:case"end":return e.stop()}}),n,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),kn=function(){"use strict";function t(r,n,i){e(k)(this,t),this.app=r,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xn(this),this.idTokenSubscription=new xn(this),this.beforeStateQueue=new wn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=i.sdkClientVersion}return e(_)(t,[{key:"_initializeWithPersistence",value:function(t,r){r&&(this._popupRedirectResolver=fr(r));var n=this;return this._initializationPromise=this.queue(e(s)(e(c).mark((function i(){var a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,on.create(n,t);case 5:if(n.persistenceManager=e.sent,!n._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,n._popupRedirectResolver._initialize(n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(o=n.currentUser)||void 0===o?void 0:o.uid)||null,!n._deleted){e.next=21;break}return e.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(s)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(n=e.sent,t.currentUser||n){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!n||t.currentUser.uid!==n.uid){e.next=12;break}return t._currentUser._assign(n),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(n,!0);case 14:case"end":return e.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i,a,o,s,u,l,f;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,s=!1,!t||!r.config.authDomain){e.next=15;break}return e.next=9,r.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==o?void 0:o._redirectEventId,e.next=13,r.tryRedirectSignIn(t);case 13:f=e.sent,u&&u!==l||!(null==f?void 0:f.user)||(o=f.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,r.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",r.directlySetCurrentUser(null));case 33:return sr(r._popupRedirectResolver,r,"argument-error"),e.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",r.directlySetCurrentUser(o));case 38:return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,r._popupRedirectResolver._completeRedirectFn(r,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,r._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var r=this;return e(s)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Jr(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===e.t0.code){e.next=9;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 9:return e.abrupt("return",r.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(s)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Le(t):null)&&sr(i.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),e.abrupt("return",r._updateCurrentUser(i&&i._clone(r)));case 3:case"end":return e.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(s)(e(c).mark((function i(){return e(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&sr(n.tenantId===t.tenantId,n,"tenant-id-mismatch"),r){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",n.queue(e(s)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.directlySetCurrentUser(t);case 2:n.notifyAuthListeners();case 3:case"end":return e.stop()}}),r)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(s)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),r)})))()}},{key:"setPersistence",value:function(t){var r=this;return this.queue(e(s)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.assertedPersistence.setPersistence(fr(t));case 2:case"end":return e.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new _e("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,r){var n=this;return e(s)(e(c).mark((function i(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.redirectPersistenceManager){e.next=9;break}return sr(i=t&&fr(t)||r._popupRedirectResolver,r,"argument-error"),e.next=5,on.create(r,[fr(i._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=e.sent,e.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=e.sent;case 9:return e.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return e.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i,a;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(e(s)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=r._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(a=r.redirectUser)||void 0===a?void 0:a._redirectEventId)!==t){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(t){var r=this;return e(s)(e(c).mark((function n(){return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(e(s)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return sr(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var r=this;return e(s)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.currentUser&&r.currentUser!==t&&(r._currentUser._stopProactiveRefresh(),t&&r.isProactiveRefreshEnabled&&t._startProactiveRefresh()),r.currentUser=t,!t){e.next=7;break}return e.next=5,r.assertedPersistence.setCurrentUser(t);case 5:e.next=9;break;case 7:return e.next=9,r.assertedPersistence.removeCurrentUser();case 9:case"end":return e.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return sr(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bn(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(s)(e(c).mark((function r(){var n,i,a;return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e(J)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),r.next=5,null===(n=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(a=r.sent)&&(i["X-Firebase-Client"]=a),r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(e){return Le(e)}var xn=function(){"use strict";function t(r){var n,i,a=this;e(k)(this,t),this.auth=r,this.observer=null,this.addObserver=(i=new Ce((function(e){return a.observer=e}),n)).subscribe.bind(i)}return e(_)(t,[{key:"next",get:function(){return sr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var En=function(){"use strict";function t(r,n){e(k)(this,t),this.providerId=r,this.signInMethod=n}return e(_)(t,[{key:"toJSON",value:function(){return ur("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return ur("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return ur("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return ur("not implemented")}}]),t}();function In(e,t){return Tn.apply(this,arguments)}function Tn(){return(Tn=e(s)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Er(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function On(e,t){return Sn.apply(this,arguments)}function Sn(){return(Sn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Sr(r,"POST","/v1/accounts:signInWithPassword",xr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Rn(e,t){return An.apply(this,arguments)}function An(){return(An=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Sr(r,"POST","/v1/accounts:signInWithEmailLink",xr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Cn(e,t){return Pn.apply(this,arguments)}function Pn(){return(Pn=e(s)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Sr(r,"POST","/v1/accounts:signInWithEmailLink",xr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ln=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(k)(this,n),(o=r.call(this,"password",a))._email=t,o._password=i,o._tenantId=s,o}return e(_)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var r=this;return e(s)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",On(t,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Rn(t,{email:r._email,oobCode:r._password}));case 5:rr(t,"internal-error");case 6:case"end":return e.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(t,r){var n=this;return e(s)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",In(t,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",Cn(t,{idToken:r,email:n._email,oobCode:n._password}));case 5:rr(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(En);function Nn(e,t){return Mn.apply(this,arguments)}function Mn(){return(Mn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Sr(r,"POST","/v1/accounts:signInWithIdp",xr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(){var t;return e(k)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(_)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Nn(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,Nn(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Nn(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Se(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rr("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=Xt(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(En);function Un(e,t){return Bn.apply(this,arguments)}function Bn(){return(Bn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Er(r,"POST","/v1/accounts:sendVerificationCode",xr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function jn(){return(jn=e(s)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Sr(r,"POST","/v1/accounts:signInWithPhoneNumber",xr(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fn(){return(Fn=e(s)(e(c).mark((function t(r,n){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Sr(r,"POST","/v1/accounts:signInWithPhoneNumber",xr(r,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Pr(r,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Vn=e(J)({},"USER_NOT_FOUND","user-not-found");function Hn(){return(Hn=e(s)(e(c).mark((function t(r,n){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",Sr(r,"POST","/v1/accounts:signInWithPhoneNumber",xr(r,i),Vn));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wn=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(t){var i;return e(k)(this,n),(i=r.call(this,"phone","phone")).params=t,i}return e(_)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return jn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Fn.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Hn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(En);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zn=function(){"use strict";function t(r){var n,i,a,o,s,u;e(k)(this,t);var c=Re(Ae(r)),l=null!==(n=c.apiKey)&&void 0!==n?n:null,f=null!==(i=c.oobCode)&&void 0!==i?i:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);sr(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(_)(t,null,[{key:"parseLink",value:function(e){var r=function(e){var t=Re(Ae(e)).link,r=t?Re(Ae(t)).deep_link_id:null,n=Re(Ae(e)).deep_link_id;return(n?Re(Ae(n)).link:null)||n||r||t||e}(e);try{return new t(r)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var qn=function(){"use strict";function t(){e(k)(this,t),this.providerId=t.PROVIDER_ID}return e(_)(t,null,[{key:"credential",value:function(e,t){return Ln._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=zn.parseLink(t);return sr(r,"argument-error"),Ln._fromEmailAndCode(e,r.code,r.tenantId)}}]),t}();qn.PROVIDER_ID="password",qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jn=function(){"use strict";function t(r){e(k)(this,t),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return e(_)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Gn=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(){var t;return e(k)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(_)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(G)(this.scopes)}}]),n}(Jn),Kn=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(){return e(k)(this,n),r.call(this,"facebook.com")}return e(_)(n,null,[{key:"credential",value:function(e){return Dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Gn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yn=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(){var t;return e(k)(this,n),(t=r.call(this,"google.com")).addScope("profile"),t}return e(_)(n,null,[{key:"credential",value:function(e,t){return Dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(Gn);Yn.GOOGLE_SIGN_IN_METHOD="google.com",Yn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xn=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(){return e(k)(this,n),r.call(this,"github.com")}return e(_)(n,null,[{key:"credential",value:function(e){return Dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Gn);Xn.GITHUB_SIGN_IN_METHOD="github.com",Xn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Qn=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(){return e(k)(this,n),r.call(this,"twitter.com")}return e(_)(n,null,[{key:"credential",value:function(e,t){return Dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(Gn);Qn.TWITTER_SIGN_IN_METHOD="twitter.com",Qn.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $n=function(){"use strict";function t(r){e(k)(this,t),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return e(_)(t,null,[{key:"_fromIdTokenResponse",value:function(r,n,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(s)(e(c).mark((function o(){var s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,tn._fromIdTokenResponse(r,i,a);case 2:return s=e.sent,u=Zn(i),l=new t({user:s,providerId:u,_tokenResponse:i,operationType:n}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(r,n,i){return e(s)(e(c).mark((function a(){var o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._updateTokensIfNecessary(i,!0);case 2:return o=Zn(i),e.abrupt("return",new t({user:r,providerId:o,_tokenResponse:i,operationType:n}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function Zn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ei=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(t,i,a,o){var s,u;return e(k)(this,n),(s=r.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(e(ae)(s),n.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return e(_)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(ke);function ti(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw ei._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e,t){return ni.apply(this,arguments)}function ni(){return ni=e(s)(e(c).mark((function t(r,n){var i,a,o=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=Vr,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",$n._forOperation(r,"link",a));case 14:case"end":return e.stop()}}),t)}))),ni.apply(this,arguments)}function ii(e,t){return ai.apply(this,arguments)}function ai(){return ai=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(c).mark((function t(r,n){var i,a,o,s,u,l,f=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=r.auth,o="reauthenticate",e.prev=3,e.next=6,Vr(r,ti(a,o,n,r),i);case 6:return sr((s=e.sent).idToken,a,"internal-error"),sr(u=Fr(s.idToken),a,"internal-error"),l=u.sub,sr(r.uid===l,a,"user-mismatch"),e.abrupt("return",$n._forOperation(r,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&rr(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),ai.apply(this,arguments)}function oi(e,t){return si.apply(this,arguments)}function si(){return si=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(c).mark((function t(r,n){var i,a,o,s,u=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,ti(r,a,n);case 4:return o=e.sent,e.next=7,$n._fromIdTokenResponse(r,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,r._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),si.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ui(e,t){return Er(e,"POST","/v2/accounts/mfaEnrollment:start",xr(e,t))}new WeakMap;var ci="__sak",li=function(){"use strict";function t(r,n){e(k)(this,t),this.storageRetriever=r,this.type=n}return e(_)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(ci,"1"),this.storage.removeItem(ci),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fi=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(){var t,i;return e(k)(this,n),(t=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,r){return t.onStorageEvent(e,r)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(cn(i=we())||vn(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=gn(),t._shouldAllowMigration=!0,t}return e(_)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var a=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);yn()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,r){var i=this,a=this;return e(s)(e(c).mark((function o(){return e(c).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(Jt)(e(Yt)(n.prototype),"_set",i).call(a,t,r);case 2:a.localCache[t]=JSON.stringify(r);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var r=this,i=this;return e(s)(e(c).mark((function a(){var o;return e(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Jt)(e(Yt)(n.prototype),"_get",r).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var r=this,i=this;return e(s)(e(c).mark((function a(){return e(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Jt)(e(Yt)(n.prototype),"_remove",r).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),n}(li);fi.type="LOCAL";var hi=fi,pi=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(){return e(k)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(_)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(li);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pi.type="SESSION";var di=pi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return Promise.all(t.map(function(){var t=e(s)(e(c).mark((function t(r){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mi=function(){"use strict";function t(r){e(k)(this,t),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(_)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i,a,o,u,l,f,h,p;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=(i=t).data,o=a.eventId,u=a.eventType,l=a.data,null==(f=r.handlersMap[u])?void 0:f.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:o,eventType:u}),h=Array.from(f).map(function(){var t=e(s)(e(c).mark((function t(r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.next=9,vi(h);case 9:p=n.sent,i.ports[0].postMessage({status:"done",eventId:o,eventType:u,response:p});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var r=this.receivers.find((function(t){return t.isListeningto(e)}));if(r)return r;var n=new t(e);return this.receivers.push(n),n}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mi.receivers=[];var gi=function(){"use strict";function t(r){e(k)(this,t),this.target=r,this.handlers=new Set}return e(_)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(s)(e(c).mark((function a(){var o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var c=yi("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),n);u={messageChannel:o,onMessage:function(t){var r=t;if(r.data.eventId===c)switch(r.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(r.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:r},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wi(){return void 0!==bi().WorkerGlobalScope&&"function"==typeof bi().importScripts}function ki(){return _i.apply(this,arguments)}function _i(){return(_i=e(s)(e(c).mark((function t(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xi="firebaseLocalStorageDb",Ei="firebaseLocalStorage",Ii="fbase_key",Ti=function(){"use strict";function t(r){e(k)(this,t),this.request=r}return e(_)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),t}();function Oi(e,t){return e.transaction([Ei],t?"readwrite":"readonly").objectStore(Ei)}function Si(){var e=indexedDB.deleteDatabase(xi);return new Ti(e).toPromise()}function Ri(){var t=indexedDB.open(xi,1);return new Promise((function(r,n){t.addEventListener("error",(function(){n(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Ei,{keyPath:Ii})}catch(e){n(e)}})),t.addEventListener("success",e(s)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Ei)){e.next=12;break}return i.close(),e.next=5,Si();case 5:return e.t0=r,e.next=8,Ri();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:r(i);case 13:case"end":return e.stop()}}),n)}))))}))}function Ai(e,t,r){return Ci.apply(this,arguments)}function Ci(){return(Ci=e(s)(e(c).mark((function t(r,n,i){var a,o;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Oi(r,!0).put((a={},e(J)(a,Ii,n),e(J)(a,"value",i),a)),t.abrupt("return",new Ti(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Pi(e,t){return Li.apply(this,arguments)}function Li(){return(Li=e(s)(e(c).mark((function t(r,n){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Oi(r,!1).get(n),e.next=3,new Ti(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ni(e,t){var r=Oi(e,!0).delete(t);return new Ti(r).toPromise()}var Mi=function(){"use strict";function t(){e(k)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(_)(t,[{key:"_openDb",value:function(){var t=this;return e(s)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Ri();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),r)})))()}},{key:"_withRetries",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,r._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(s)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",wi()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(s)(e(c).mark((function r(){return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.receiver=mi._getInstance(wi()?self:null),t.receiver._subscribe("keyChanged",function(){var r=e(s)(e(c).mark((function r(n,i){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(s)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var t=this;return e(s)(e(c).mark((function r(){var n,i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,ki();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new gi(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(n=a[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(t){var r=this;return e(s)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,r.sender._send("keyChanged",{key:t},r.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(s)(e(c).mark((function t(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Ri();case 5:return r=e.sent,e.next=8,Ai(r,ci,"1");case 8:return e.next=10,Ni(r,ci);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var r=this;return e(s)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,r.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,r){var n=this;return e(s)(e(c).mark((function i(){return e(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(e(s)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Ai(e,t,r)}));case 2:return n.localCache[t]=r,e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Pi(e,t)}));case 2:return i=e.sent,r.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(s)(e(c).mark((function n(){return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(e(s)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Ni(e,t)}));case 2:return delete r.localCache[t],e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var t=this;return e(s)(e(c).mark((function r(){var n,i,a,o,s,u,l,f,h,p,d,v,m,y,g,b,w;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Oi(e,!1).getAll();return new Ti(t).toPromise()}));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,e.prev=10,l=n[Symbol.iterator]();!(o=(f=l.next()).done);o=!0)h=f.value,p=h.fbase_key,d=h.value,a.add(p),JSON.stringify(t.localCache[p])!==JSON.stringify(d)&&(t.notifyListeners(p,d),i.push(p));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==l.return||l.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,y=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(v=(b=g.next()).done);v=!0)w=b.value,t.localCache[w]&&!a.has(w)&&(t.notifyListeners(w,null),i.push(w));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,y=e.t1;case 35:e.prev=35,e.prev=36,v||null==g.return||g.return();case 38:if(e.prev=38,!m){e.next=41;break}throw y;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(s)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();Mi.type="LOCAL";var Di=Mi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e,t){return Er(e,"POST","/v2/accounts/mfaSignIn:start",xr(e,t))}function Bi(e){return new Promise((function(t,r){var n,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=nr("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)}))}function ji(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ji("rcb"),new yr(3e4,6e4);var Fi="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e,t,r){return Hi.apply(this,arguments)}function Hi(){return(Hi=e(s)(e(c).mark((function t(r,n,i){var a,o,s,u,l,f,h,p;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,sr("string"==typeof o,r,"argument-error"),sr(i.type===Fi,r,"argument-error"),!("session"in(s="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return sr("enroll"===u.type,r,"internal-error"),e.next=15,ui(r,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return sr("signin"===u.type,r,"internal-error"),sr(f=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,Ui(r,{mfaPendingCredential:u.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:o}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Un(r,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return p=e.sent.sessionInfo,e.abrupt("return",p);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Wi=function(){"use strict";function t(r){e(k)(this,t),this.providerId=t.PROVIDER_ID,this.auth=_n(r)}return e(_)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Vi(this.auth,e,Le(t))}}],[{key:"credential",value:function(e,t){return Wn._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var r=e;return t.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?Wn._fromTokenResponse(r,n):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zi(e,t){return t?fr(t):(sr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wi.PROVIDER_ID="phone",Wi.PHONE_SIGN_IN_METHOD="phone";var qi=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(t){var i;return e(k)(this,n),(i=r.call(this,"custom","custom")).params=t,i}return e(_)(n,[{key:"_getIdTokenResponse",value:function(e){return Nn(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Nn(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Nn(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(En);function Ji(e){return oi(e.auth,new qi(e),e.bypassAuthState)}function Gi(e){var t=e.auth,r=e.user;return sr(r,t,"internal-error"),ii(r,new qi(e),e.bypassAuthState)}function Ki(e){return Yi.apply(this,arguments)}function Yi(){return(Yi=e(s)(e(c).mark((function t(r){var n,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,sr(i=r.user,n,"internal-error"),e.abrupt("return",ri(i,new qi(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xi=function(){"use strict";function t(r,n,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(k)(this,t),this.auth=r,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return e(_)(t,[{key:"execute",value:function(){var t=this;return new Promise(function(){var r=e(s)(e(c).mark((function r(n,i){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,t.resolver._initialize(t.auth);case 4:return t.eventManager=e.sent,e.next=7,t.onExecution();case 7:t.eventManager.registerConsumer(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.reject(e.t0);case 13:case"end":return e.stop()}}),r,null,[[1,10]])})));return function(e,t){return r.apply(this,arguments)}}())}},{key:"onAuthEvent",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i,a,o,s,u,l,f;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,l=t.type,!u){e.next=4;break}return r.reject(u),e.abrupt("return");case 4:return f={auth:r.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:r.user,bypassAuthState:r.bypassAuthState},e.prev=5,e.t0=r,e.next=9,r.getIdpTask(l)(f);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),r.reject(e.t2);case 16:case"end":return e.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ji;case"linkViaPopup":case"linkViaRedirect":return Ki;case"reauthViaPopup":case"reauthViaRedirect":return Gi;default:rr(this.auth,"internal-error")}}},{key:"resolve",value:function(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),Qi=new yr(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(){return($i=e(s)(e(c).mark((function t(r,n,i){var a,o,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=_n(r),ar(r,n,Jn),o=zi(a,i),s=new Zi(a,"signInViaPopup",n,o),e.abrupt("return",s.executeNotNull());case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Zi=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(t,i,a,o,s){var u;return e(k)(this,n),(u=r.call(this,t,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=e(ae)(u),u}return e(_)(n,[{key:"executeNotNull",value:function(){var t=this;return e(s)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return sr(n=e.sent,t.auth,"internal-error"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){var t=this;return e(s)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return cr(1===t.filter.length,"Popup operations only handle one event"),n=yi(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],n);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=n,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(nr(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(nr(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(nr(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Qi.get())};t()}}]),n}(Xi);Zi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ea=new Map,ta=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(k)(this,n),(a=r.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(_)(n,[{key:"execute",value:function(){var t=this,r=this;return e(s)(e(c).mark((function i(){var a,o;return e(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=ea.get(r.auth._key())){i.next=21;break}return i.prev=2,i.next=5,ra(r.resolver,r.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(Jt)(e(Yt)(n.prototype),"execute",t).call(r);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:ea.set(r.auth._key(),a);case 21:return r.bypassAuthState||ea.set(r.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var r=this,i=this,a=function(){return e(Jt)(e(Yt)(n.prototype),"onAuthEvent",r)};return e(s)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",a().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(n=e.sent)){e.next=16;break}return i.user=n,e.abrupt("return",a().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){return e(s)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),n}(Xi);function ra(e,t){return na.apply(this,arguments)}function na(){return(na=e(s)(e(c).mark((function t(r,n){var i,a,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=oa(n),a=aa(r),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ia(e,t){ea.set(e._key(),t)}function aa(e){return fr(e._redirectPersistence)}function oa(e){return an("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(e,t){return ua.apply(this,arguments)}function ua(){return ua=e(s)(e(c).mark((function t(r,n){var i,a,o,s,u,l=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=_n(r),o=zi(a,n),s=new ta(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,n);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),ua.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ca=function(){"use strict";function t(r){e(k)(this,t),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(_)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fa(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!fa(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(nr(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(la(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(la(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function la(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function fa(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function ha(e){return pa.apply(this,arguments)}function pa(){return pa=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(s)(e(c).mark((function t(r){var n,i=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Er(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),t)}))),pa.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var da=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,va=/^https?/;function ma(){return(ma=e(s)(e(c).mark((function t(r){var n,i,a,o,s,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ha(r);case 4:n=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=n[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(l=u.value,e.prev=10,!ya(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:rr(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function ya(e){var t=pr(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===i}if(!va.test(n))return!1;if(da.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ga=new yr(3e4,6e4);function ba(){var t=bi().___jsl,r=!0,n=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(G)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}var wa=null;function ka(e){return wa=wa||function(e){return new Promise((function(t,r){var n,i,a;function o(){ba(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){ba(),r(nr(e,"network-request-failed"))},timeout:ga.get()})}if(null===(i=null===(n=bi().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=bi().gapi)||void 0===a?void 0:a.load)){var s=ji("iframefcb");return bi()[s]=function(){gapi.load?o():r(nr(e,"network-request-failed"))},Bi("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw wa=null,e}))}(e),wa}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _a=new yr(5e3,15e3),xa={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ea=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ia(e){var t=e.config;sr(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?gr(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:Rt},i=Ea.get(e.config.apiHost);i&&(n.eid=i);var a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),"".concat(r,"?").concat(Se(n).slice(1))}function Ta(e){return Oa.apply(this,arguments)}function Oa(){return Oa=e(s)(e(c).mark((function t(r){var n,i;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ka(r);case 2:return n=t.sent,sr(i=bi().gapi,r,"internal-error"),t.abrupt("return",n.open({where:document.body,url:Ia(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xa,dontclear:!0},(function(t){return new Promise(function(){var n=e(s)(e(c).mark((function n(i,a){var o,s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){bi().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=nr(r,"network-request-failed"),s=bi().setTimeout((function(){a(o)}),_a.get()),t.ping(u).then(u,(function(){a(o)}));case 7:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())})));case 6:case"end":return t.stop()}}),t)}))),Oa.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ra="_blank",Aa="http://localhost",Ca=function(){"use strict";function t(r){e(k)(this,t),this.window=r,this.associatedEvent=null}return e(_)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Pa(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Sa),{width:i.toString(),height:a.toString(),top:o,left:s}),l=we().toLowerCase();n&&(u=ln(l)?Ra:n),un(l)&&(r=r||Aa,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,r){var n=e(Z)(r,2),i=n[0],a=n[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(mn(l)&&"_self"!==u)return La(r||"",u),new Ca(null);var h=window.open(r||"",u,f);sr(h,t,"popup-blocked");try{h.focus()}catch(e){}return new Ca(h)}function La(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Na="__/auth/handler",Ma="emulator/auth/handler";function Da(t,r,n,i,a,o){sr(t.config.authDomain,t,"auth-domain-config-required"),sr(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Rt,eventId:a};if(r instanceof Jn){r.setDefaultLanguage(t.languageCode),s.providerId=r.providerId||"",Ie(r.getCustomParameters())||(s.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,h=Object.entries(o||{})[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var p=e(Z)(f.value,2),d=p[0],v=p[1];s[d]=v}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}}if(r instanceof Gn){var m=r.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var y,g,b=s,w=!0,k=!1,_=void 0;try{for(var x,E=Object.keys(b)[Symbol.iterator]();!(w=(x=E.next()).done);w=!0){var I=x.value;void 0===b[I]&&delete b[I]}}catch(e){k=!0,_=e}finally{try{w||null==E.return||E.return()}finally{if(k)throw _}}return"".concat((y=t,g=y.config,g.emulator?gr(g,Ma):"https://".concat(g.authDomain,"/").concat(Na)),"?").concat(Se(b).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ua="webStorageSupport",Ba=function(){"use strict";function t(){e(k)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=di,this._completeRedirectFn=sa,this._overrideRedirectResult=ia}return e(_)(t,[{key:"_openPopup",value:function(t,r,n,i){var a=this;return e(s)(e(c).mark((function o(){var s,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return cr(null===(s=a.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=Da(t,r,n,pr(),i),e.abrupt("return",Pa(t,u,yi()));case 4:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,r,n,i){var a=this;return e(s)(e(c).mark((function o(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._originValidation(t);case 2:return o=Da(t,r,n,pr(),i),bi().location.href=o,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,a=n.promise;return i?Promise.resolve(i):(cr(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ta(t);case 2:return i=e.sent,a=new ca(t),i.register("authEvent",(function(e){return sr(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[t._key()]={manager:a},r.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Ua,{type:Ua},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),rr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return ma.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return gn()||cn()||vn()}}]),t}(),ja=Ba,Fa=function(t){"use strict";e(oe)(n,t);var r=e(de)(n);function n(t){var i;return e(k)(this,n),(i=r.call(this,"phone")).credential=t,i}return e(_)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return Er(e,"POST","/v2/accounts/mfaEnrollment:finalize",xr(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Er(e,"POST","/v2/accounts/mfaSignIn:finalize",xr(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function t(r){e(k)(this,t),this.factorId=r}return e(_)(t,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ur("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(k)(this,t)}return e(_)(t,null,[{key:"assertion",value:function(e){return Fa._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Va,Ha="@firebase/auth",Wa="0.20.2",za=function(){"use strict";function t(r){e(k)(this,t),this.auth=r,this.internalListeners=new Map}return e(_)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var r=this;return e(s)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.assertAuthConfigured(),e.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,r.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){sr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();Va="Browser",Et(new Ne("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=n.options,o=a.apiKey,s=a.authDomain;return function(e,t){sr(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),sr(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:s,clientPlatform:Va,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bn(Va)},i=new kn(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(fr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),Et(new Ne("auth-internal",(function(e){var t=_n(e.getProvider("auth").getImmediate());return new za(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(Ha,Wa,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Va)),Ct(Ha,Wa,"esm2017");!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var r=t;t={name:r}}var n=Object.assign({name:bt,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Ot.create("bad-app-name",{appName:String(i)});var a=kt.get(i);if(a){if(Te(e,a.options)&&Te(n,a.config))return a;throw Ot.create("duplicate-app",{appName:i})}var o=new je(i),s=!0,u=!1,c=void 0;try{for(var l,f=_t.values()[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var h=l.value;o.addComponent(h)}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}var p=new St(e,n,o);kt.set(i,p)}({apiKey:"AIzaSyAMQBKE0LsHmMVczHmNvXQYSEQXibGeA-M",authDomain:"fs44js-team-proj.firebaseapp.com",databaseURL:"https://fs44js-team-proj-default-rtdb.europe-west1.firebasedatabase.app",projectId:"fs44js-team-proj",storageBucket:"fs44js-team-proj.appspot.com",messagingSenderId:"160078472353",appId:"1:160078472353:web:f31cf36c72f9212e3ebce0"});var qa=new Yn,Ja=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At(),t=It(e,"auth");return t.isInitialized()?t.getImmediate():hr(e,{popupRedirectResolver:ja,persistence:[Di,hi,di]})}();r.currentUser||function(e,t,r){return $i.apply(this,arguments)}(Ja,qa).then((function(e){return Yn.credentialFromResult(e).accessToken,e.user.email})).catch((function(e){return e.code,e.message})).then((function(e){r.currentUser=e,console.log(r.currentUser)})).catch((function(e){console.log(e)}));var Ga={header:document.querySelector(".header"),inputForm:document.querySelector(".header__searchform"),navHome:document.querySelector(".home__btn"),navLibrary:document.querySelector(".library__btn"),libraryBtns:document.querySelector(".library__list"),watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn")};Ga.navLibrary.addEventListener("click",(function(){Ga.inputForm.classList.add("is-hidden"),Ga.libraryBtns.classList.remove("is-hidden"),Ga.navLibrary.classList.add("current"),Ga.navHome.classList.remove("current"),Ga.header.classList.add("header__my-library")})),Ga.watchedBtn.addEventListener("click",(function(){Ga.queueBtn.classList.remove("active"),Ga.watchedBtn.classList.add("active")})),Ga.queueBtn.addEventListener("click",(function(){Ga.queueBtn.classList.add("active"),Ga.watchedBtn.classList.remove("active")})),E.headerSearch.addEventListener("submit",(function(e){return Ya.apply(this,arguments)}));var Ka=new x;function Ya(){return(Ya=e(s)(e(c).mark((function t(r){var n,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),Ka.search(),E.galleryContainer.innerHTML="",e.next=5,Ka.fetchMovies();case 5:return n=e.sent,console.log(n),i=n.total_pages,e.next=10,O(n);case 10:return e.next=12,N(i);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}}();
//# sourceMappingURL=index.7f35038f.js.map
