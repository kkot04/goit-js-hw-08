function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function m(e,t,n){var o,r,i,f,a,u,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function h(e){return c=e,a=setTimeout(w,t),l?y(e):f}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function w(){var e=v();if(j(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-u);return s?p(n,i-(e-c)):n}(e))}function O(e){return a=void 0,m&&o?y(e):(o=r=void 0,f)}function T(){var e=v(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return h(u);if(s)return a=setTimeout(w,t),y(u)}return void 0===a&&(a=setTimeout(w,t)),f}return t=g(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(g(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},T.flush=function(){return void 0===a?f:O(v())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");let h={};(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(null!==e)for(const t in e)e.hasOwnProperty(t)&&(y.elements[t].value=e[t],e[t]&&(h[t]=e[t]))})();y.addEventListener("input",e(t)((({target:e})=>{const t=e.value,n=e.name;console.log("userData: ",h),h[n]=t,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),y.addEventListener("submit",e(t)((e=>{e.preventDefault(),y.reset(),localStorage.removeItem("feedback-form-state")}),500));
//# sourceMappingURL=03-feedback.d1381ce8.js.map
