(self.webpackChunk_aniyajs_components=self.webpackChunk_aniyajs_components||[]).push([[340],{2143:function(C,W,p){"use strict";var x=p(29),j=p(67294),g=p(96057);function M(a,s){return L(a)||T(a,s)||_(a,s)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _(a,s){if(a){if(typeof a=="string")return O(a,s);var l=Object.prototype.toString.call(a).slice(8,-1);if(l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set")return Array.from(a);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return O(a,s)}}function O(a,s){(s==null||s>a.length)&&(s=a.length);for(var l=0,e=new Array(s);l<s;l++)e[l]=a[l];return e}function T(a,s){var l=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(l!=null){var e=[],r=!0,n=!1,o,i;try{for(l=l.call(a);!(r=(o=l.next()).done)&&(e.push(o.value),!(s&&e.length===s));r=!0);}catch(u){n=!0,i=u}finally{try{!r&&l.return!=null&&l.return()}finally{if(n)throw i}}return e}}function L(a){if(Array.isArray(a))return a}var B=function(s){var l,e=useRouteMeta(),r=e.frontmatter,n=useAtomAssets(),o=n.components,i=s.id||r.atomId,u=useIntl();if(!i)throw new Error("`id` properties if required for API component!");var v=o==null?void 0:o[i];return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,u.formatMessage({id:"api.component.name"})),React.createElement("th",null,u.formatMessage({id:"api.component.description"})),React.createElement("th",null,u.formatMessage({id:"api.component.type"})),React.createElement("th",null,u.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,v&&(l=v.propsConfig)!==null&&l!==void 0&&l.properties?Object.entries(v.propsConfig.properties).map(function(R){var t,c=M(R,2),f=c[0],m=c[1];return React.createElement("tr",{key:f},React.createElement("td",null,f),React.createElement("td",null,m.description||"--"),React.createElement("td",null,React.createElement("code",null,m.type)),React.createElement("td",null,React.createElement("code",null,(t=v.propsConfig.required)!==null&&t!==void 0&&t.includes(f)?u.formatMessage({id:"api.component.required"}):m.default||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},u.formatMessage({id:"api.component.".concat(o?"not.found":"loading")},{id:i}))))))},D=null},93359:function(C,W,p){"use strict";var x=p(67294);function j(){return j=Object.assign?Object.assign.bind():function(A){for(var _=1;_<arguments.length;_++){var O=arguments[_];for(var T in O)Object.prototype.hasOwnProperty.call(O,T)&&(A[T]=O[T])}return A},j.apply(this,arguments)}var g=function(_){return React.createElement("span",j({className:"dumi-default-badge"},_))},M=null},96057:function(C,W,p){"use strict";p.d(W,{Z:function(){return l}});var x=p(93096),j=p.n(x),g=p(67294),M=["children"];function A(e,r){return B(e)||L(e,r)||O(e,r)||_()}function _(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(e,r){if(e){if(typeof e=="string")return T(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,r)}}function T(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,o=new Array(r);n<r;n++)o[n]=e[n];return o}function L(e,r){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var o=[],i=!0,u=!1,v,R;try{for(n=n.call(e);!(i=(v=n.next()).done)&&(o.push(v.value),!(r&&o.length===r));i=!0);}catch(t){u=!0,R=t}finally{try{!i&&n.return!=null&&n.return()}finally{if(u)throw R}}return o}}function B(e){if(Array.isArray(e))return e}function D(e,r){if(e==null)return{};var n=a(e,r),o,i;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(i=0;i<u.length;i++)o=u[i],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function a(e,r){if(e==null)return{};var n={},o=Object.keys(e),i,u;for(u=0;u<o.length;u++)i=o[u],!(r.indexOf(i)>=0)&&(n[i]=e[i]);return n}var s=function(r){var n=r.children,o=D(r,M),i=(0,g.useRef)(null),u=(0,g.useState)(!1),v=A(u,2),R=v[0],t=v[1],c=(0,g.useState)(!1),f=A(c,2),m=f[0],h=f[1];return(0,g.useEffect)(function(){var y=i.current;if(y){var b=j()(function(){t(y.scrollLeft>0),h(y.scrollLeft<y.scrollWidth-y.offsetWidth)},100);return b(),y.addEventListener("scroll",b),window.addEventListener("resize",b),function(){y.removeEventListener("scroll",b),window.removeEventListener("resize",b)}}},[]),g.createElement("div",{className:"dumi-default-table"},g.createElement("div",{className:"dumi-default-table-content",ref:i,"data-left-folded":R||void 0,"data-right-folded":m||void 0},g.createElement("table",o,n)))},l=s},93096:function(C,W,p){var x="Expected a function",j=NaN,g="[object Symbol]",M=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,O=/^0o[0-7]+$/i,T=parseInt,L=typeof p.g=="object"&&p.g&&p.g.Object===Object&&p.g,B=typeof self=="object"&&self&&self.Object===Object&&self,D=L||B||Function("return this")(),a=Object.prototype,s=a.toString,l=Math.max,e=Math.min,r=function(){return D.Date.now()};function n(t,c,f){var m,h,y,b,E,S,P=0,K=!1,k=!1,N=!0;if(typeof t!="function")throw new TypeError(x);c=R(c)||0,i(f)&&(K=!!f.leading,k="maxWait"in f,y=k?l(R(f.maxWait)||0,c):y,N="trailing"in f?!!f.trailing:N);function $(d){var I=m,w=h;return m=h=void 0,P=d,b=t.apply(w,I),b}function G(d){return P=d,E=setTimeout(F,c),K?$(d):b}function Z(d){var I=d-S,w=d-P,X=c-I;return k?e(X,y-w):X}function H(d){var I=d-S,w=d-P;return S===void 0||I>=c||I<0||k&&w>=y}function F(){var d=r();if(H(d))return z(d);E=setTimeout(F,Z(d))}function z(d){return E=void 0,N&&m?$(d):(m=h=void 0,b)}function J(){E!==void 0&&clearTimeout(E),P=0,m=S=h=E=void 0}function Q(){return E===void 0?b:z(r())}function U(){var d=r(),I=H(d);if(m=arguments,h=this,S=d,I){if(E===void 0)return G(S);if(k)return E=setTimeout(F,c),$(S)}return E===void 0&&(E=setTimeout(F,c)),b}return U.cancel=J,U.flush=Q,U}function o(t,c,f){var m=!0,h=!0;if(typeof t!="function")throw new TypeError(x);return i(f)&&(m="leading"in f?!!f.leading:m,h="trailing"in f?!!f.trailing:h),n(t,c,{leading:m,maxWait:c,trailing:h})}function i(t){var c=typeof t;return!!t&&(c=="object"||c=="function")}function u(t){return!!t&&typeof t=="object"}function v(t){return typeof t=="symbol"||u(t)&&s.call(t)==g}function R(t){if(typeof t=="number")return t;if(v(t))return j;if(i(t)){var c=typeof t.valueOf=="function"?t.valueOf():t;t=i(c)?c+"":c}if(typeof t!="string")return t===0?t:+t;t=t.replace(M,"");var f=_.test(t);return f||O.test(t)?T(t.slice(2),f?2:8):A.test(t)?j:+t}C.exports=o}}]);
