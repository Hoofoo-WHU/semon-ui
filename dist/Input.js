!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.semon=t(require("react")):e.semon=t(e.react)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}({0:function(t,n){t.exports=e},23:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(3),s=n.n(o);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,l(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,(o=[{key:"classes",value:function(){var e=this.props,t=e.size,n=e.className,r=[];return n&&r.push(n),r.push(s.a.input),t&&r.push(s.a[t]),r.join(" ")}},{key:"wrapperClasses",value:function(){var e=this.props,t=e.size,n=e.className,r=[s.a.input,s.a["input-wrapper-affix-wrapper"]];return n&&r.unshift(n),t&&r.push(s.a[t]),r.join(" ")}},{key:"focusHandle",value:function(e){this.props.onFocus&&this.props.onFocus(e)}},{key:"blurHandle",value:function(e){this.props.onBlur&&this.props.onBlur(e)}},{key:"changeHandle",value:function(e){this.props.onChange&&this.props.onChange(e)}},{key:"keyPressHandle",value:function(e){switch(this.props.onKeyPress&&this.props.onKeyPress(e),e.key){case"Enter":this.props.onPressEnter&&this.props.onPressEnter(e)}}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.prefix,o=e.suffix,i=e.defaultValue,a=e.value,p=e.disabled,l={placeholder:t,defaultValue:i,value:a,disabled:p,readOnly:e.readOnly,onFocus:this.focusHandle.bind(this),onBlur:this.blurHandle.bind(this),onChange:this.changeHandle.bind(this),onKeyPress:this.keyPressHandle.bind(this)};return n||o?r.createElement("span",{className:this.wrapperClasses(),"data-disabled":p},n?r.createElement("span",{className:s.a.prefix},n):null,r.createElement("input",u({className:s.a["innert-input"]},l)),o?r.createElement("span",{className:s.a.suffix},o):null):r.createElement("input",u({className:this.classes()},l))}}])&&a(n.prototype,o),i&&a(n,i),t}();c.displayName="Input",t.default=c},3:function(e,t,n){e.exports={"input-wrapper-affix-wrapper":"s-input-wrapper-affix-wrapper",small:"s-small","innert-input":"s-innert-input",input:"s-input",large:"s-large",prefix:"s-prefix",suffix:"s-suffix"}}})});