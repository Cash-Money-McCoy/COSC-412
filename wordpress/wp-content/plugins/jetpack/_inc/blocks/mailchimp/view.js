!function(e,t){for(var r in t)e[r]=t[r]}(window,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=253)}({253:function(e,t,r){r(38),e.exports=r(254)},254:function(e,t,r){"use strict";r.r(t);var n=r(36),o=r.n(n),i=(r(255),"wp-block-jetpack-mailchimp");function s(e,t){var r=e.querySelector("form"),n=e.querySelector("."+i+"_processing"),s=e.querySelector("."+i+"_error"),a=e.querySelector("."+i+"_success");r.addEventListener("submit",function(i){i.preventDefault();var u=r.querySelector("input");u.classList.remove("error");var c=u.value;o.a.validate(c)?(e.classList.add("is-processing"),n.classList.add("is-visible"),function(e,t){var r="https://public-api.wordpress.com/rest/v1.1/sites/"+encodeURIComponent(e)+"/email_follow/subscribe?email="+encodeURIComponent(t);return new Promise(function(e,t){var n=new XMLHttpRequest;n.open("GET",r),n.onload=function(){if(200===n.status){var r=JSON.parse(n.responseText);e(r)}else{var o=JSON.parse(n.responseText);t(o)}},n.send()})}(t,c).then(function(e){n.classList.remove("is-visible"),e.error&&"member_exists"!==e.error?s.classList.add("is-visible"):a.classList.add("is-visible")},function(){n.classList.remove("is-visible"),s.classList.add("is-visible")})):u.classList.add("error")})}var a=function(){Array.from(document.querySelectorAll("."+i)).forEach(function(e){var t=e.getAttribute("data-blog-id");try{s(e,t)}catch(r){0}})};"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",a):a())},255:function(e,t,r){},30:function(e,t,r){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(r.p=window.Jetpack_Block_Assets_Base_Url)},36:function(e,t,r){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some(function(e){return e.length>63})}},38:function(e,t,r){"use strict";r.r(t);r(30)}}));