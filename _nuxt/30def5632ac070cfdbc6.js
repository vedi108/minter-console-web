/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{537:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(534);t.default=function(e){return(0,r.withParams)({type:"minLength",min:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e}))}},538:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(534);t.default=function(e){return(0,r.withParams)({type:"maxLength",max:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e}))}},541:function(e,t,n){"use strict";var r=n(557),o=n.n(r);t.a={bind:function(e,t,n){"TEXTAREA"===e.tagName&&n.context.$nextTick((function(){o()(e)}))},componentUpdated:function(e,t,n){"TEXTAREA"===e.tagName&&n.context.$nextTick((function(){o.a.update(e)}))},unbind:function(e){o.a.destroy(e)}}},555:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(177),n(45),n(46),n(5);var r={};var o={inheritAttrs:!1,render:function(e){return this.isLoaded?e("svg",{on:this.$listeners,attrs:Object.assign(this.svgAttrs,(t=this.$attrs,Object.keys(t).reduce((function(e,n){return!1!==t[n]&&null!==t[n]&&void 0!==t[n]&&(e[n]=t[n]),e}),{}))),domProps:{innerHTML:this.svgContent}}):null;var t},props:{src:{type:String,required:!0},transformSource:{type:Function,default:function(svg){return svg}}},data:function(){return{isLoaded:!1,svgAttrs:{},svgContent:""}},watch:{src:function(e){this.inline(e)}},mounted:function(){this.inline(this.src)},methods:{inline:function(e){var t=this;r[e]||(this.isLoaded&&(this.isLoaded=!1,this.$emit("unloaded")),r[e]=this.download(e)),r[e].then((function(svg){t.svgAttrs={};for(var e=svg.attributes,i=e.length-1;i>=0;i--)t.svgAttrs[e[i].name]=e[i].value;t.svgContent=svg.innerHTML,t.isLoaded=!0,t.$nextTick((function(){t.$emit("loaded",t.$el)}))})).catch((function(n){delete r[e],t.$emit("error",n)}))},download:function(e){var t=this;return new Promise((function(n,r){var o=new XMLHttpRequest;o.open("GET",e,!0),o.onload=function(){if(o.status>=200&&o.status<400)try{var e=(new DOMParser).parseFromString(o.responseText,"text/xml").getElementsByTagName("svg")[0];e?(e=t.transformSource(e),n(e)):r(new Error('Loaded file is not valid SVG"'))}catch(e){r(e)}else r(new Error("Error loading SVG"))},o.onerror=r,o.send()}))}}}},556:function(e,t,n){var r=n(6),o=n(334),c=n(9),d=n(24),l=n(228).onFreeze,f=Object.freeze;r({target:"Object",stat:!0,forced:c((function(){f(1)})),sham:!o},{freeze:function(e){return f&&d(e)?f(l(e)):e}})},557:function(e,t,n){var r,o,c;o=[e,t],void 0===(c="function"==typeof(r=function(e,t){"use strict";var n,r,map="function"==typeof Map?new Map:(n=[],r=[],{has:function(e){return n.indexOf(e)>-1},get:function(e){return r[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),r.push(t))},delete:function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),r.splice(t,1))}}),o=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){o=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function c(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!map.has(e)){var style,t=null,n=null,r=null,c=function(){e.clientWidth!==n&&h()},d=function(style){window.removeEventListener("resize",c,!1),e.removeEventListener("input",h,!1),e.removeEventListener("keyup",h,!1),e.removeEventListener("autosize:destroy",d,!1),e.removeEventListener("autosize:update",h,!1),Object.keys(style).forEach((function(t){e.style[t]=style[t]})),map.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",d,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",h,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",h,!1),e.addEventListener("autosize:update",h,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",map.set(e,{destroy:d,update:h}),"vertical"===(style=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===style.resize&&(e.style.resize="horizontal"),t="content-box"===style.boxSizing?-(parseFloat(style.paddingTop)+parseFloat(style.paddingBottom)):parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth),isNaN(t)&&(t=0),h()}function l(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function f(){if(0!==e.scrollHeight){var r=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),o=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+t+"px",n=e.clientWidth,r.forEach((function(e){e.node.scrollTop=e.scrollTop})),o&&(document.documentElement.scrollTop=o)}}function h(){f();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),c="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(c<t?"hidden"===n.overflowY&&(l("scroll"),f(),c="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(l("hidden"),f(),c="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),r!==c){r=c;var d=o("autosize:resized");try{e.dispatchEvent(d)}catch(e){}}}}function d(e){var t=map.get(e);t&&t.destroy()}function l(e){var t=map.get(e);t&&t.update()}var f=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((f=function(e){return e}).destroy=function(e){return e},f.update=function(e){return e}):((f=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return c(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],d),e},f.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],l),e}),t.default=f,e.exports=t.default})?r.apply(t,o):r)||(e.exports=c)},558:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(534);t.default=function(e){return(0,r.withParams)({type:"minValue",min:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},561:function(e,t,n){"use strict";function r(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection(),r=n.rangeCount>0&&n.getRangeAt(0);t.select(),t.selectionStart=0,t.selectionEnd=e.length;var o=document.execCommand("copy");return document.body.removeChild(t),r&&(n.removeAllRanges(),n.addRange(r)),o}function o(){return"undefined"!=typeof document&&"function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))},622:function(e,t,n){"use strict";var r=n(27);t.a=function(e){var t=Object(r.a)(e);return null!=e&&("object"==t||"function"==t)}},640:function(e,t,n){"use strict";n(57);var r=n(622),o=n(27),c=n(652),d="object"==("undefined"==typeof self?"undefined":Object(o.a)(self))&&self&&self.Object===Object&&self,l=c.a||d||Function("return this")(),f=function(){return l.Date.now()},h=(n(28),n(11),n(23),l.Symbol),v=(n(5),n(16),Object.prototype),m=v.hasOwnProperty,y=v.toString,w=h?h.toStringTag:void 0;var E=function(e){var t=m.call(e,w),n=e[w];try{e[w]=void 0;var r=!0}catch(e){}var o=y.call(e);return r&&(t?e[w]=n:delete e[w]),o},O=Object.prototype.toString;var j=function(e){return O.call(e)},x=h?h.toStringTag:void 0;var T=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":x&&x in Object(e)?E(e):j(e)};var L=function(e){return null!=e&&"object"==Object(o.a)(e)};var S=function(e){return"symbol"==Object(o.a)(e)||L(e)&&"[object Symbol]"==T(e)},D=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,P=/^0b[01]+$/i,F=/^0o[0-7]+$/i,z=parseInt;var C=function(e){if("number"==typeof e)return e;if(S(e))return NaN;if(Object(r.a)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Object(r.a)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(D,"");var n=P.test(e);return n||F.test(e)?z(e.slice(2),n?2:8):A.test(e)?NaN:+e},k=Math.max,U=Math.min;t.a=function(e,t,n){var o,c,d,l,h,v,m=0,y=!1,w=!1,E=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function O(time){var t=o,n=c;return o=c=void 0,m=time,l=e.apply(n,t)}function j(time){return m=time,h=setTimeout(T,t),y?O(time):l}function x(time){var e=time-v;return void 0===v||e>=t||e<0||w&&time-m>=d}function T(){var time=f();if(x(time))return L(time);h=setTimeout(T,function(time){var e=t-(time-v);return w?U(e,d-(time-m)):e}(time))}function L(time){return h=void 0,E&&o?O(time):(o=c=void 0,l)}function S(){var time=f(),e=x(time);if(o=arguments,c=this,v=time,e){if(void 0===h)return j(v);if(w)return clearTimeout(h),h=setTimeout(T,t),O(v)}return void 0===h&&(h=setTimeout(T,t)),l}return t=C(t)||0,Object(r.a)(n)&&(y=!!n.leading,d=(w="maxWait"in n)?k(C(n.maxWait)||0,t):d,E="trailing"in n?!!n.trailing:E),S.cancel=function(){void 0!==h&&clearTimeout(h),m=0,o=v=c=h=void 0},S.flush=function(){return void 0===h?l:L(f())},S}},652:function(e,t,n){"use strict";(function(e){var r=n(27),o="object"==(void 0===e?"undefined":Object(r.a)(e))&&e&&e.Object===Object&&e;t.a=o}).call(this,n(30))},653:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n(47),n(41),n(38),n(81),n(94),n(46),n(39);var r=n(15),o=n(225),c=n(542),d=n(634);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){var t=e.publicKey,n=e.coinSymbol,f=e.stake,h=e.feeCoinSymbol,v=Object(o.a)(e,["publicKey","coinSymbol","stake","feeCoinSymbol"]);console.warn("DelegateTxParams is deprecated");var m=new d.a({publicKey:t,coin:n,stake:f});return h||(h=n),function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},v,{gasCoin:h,txType:c.a.DELEGATE,txData:m.serialize()})}},654:function(e,t,n){var r=n(6),o=n(234);r({global:!0,forced:!n(235)},{DataView:o.DataView})},655:function(e,t){!function(){"use strict";"undefined"==typeof HTMLCanvasElement||HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,n){var canvas=this;setTimeout((function(){for(var r=atob(canvas.toDataURL(t,n).split(",")[1]),o=r.length,c=new Uint8Array(o),i=0;i<o;i++)c[i]=r.charCodeAt(i);e(new Blob([c],{type:t||"image/png"}))}))}})}()},659:function(e,t,n){"use strict";n(41),n(38),n(33),n(58),n(98),n(348),n(654),n(45),n(80),n(5),n(11),n(111),n(82),n(23),n(42),n(229),n(39),n(95),n(618),n(655);var r=n(640),o=n(622);var c=function(e,t,n){var c=!0,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Object(o.a)(n)&&(c="leading"in n?!!n.leading:c,d="trailing"in n?!!n.trailing:d),Object(r.a)(e,t,{leading:c,maxWait:t,trailing:d})},d=0,l=!1,f=!1;var h={props:{multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},accept:{type:String},maxWidth:{type:Number},maxHeight:{type:Number}},data:function(){return{fileApiError:!1}},computed:{acceptedTypes:function(){return"string"!=typeof this.accept?[]:this.accept.split(",").map((function(e){return e.replace("/*","").trim()})).filter((function(e){return!!e.length}))},emitDragState:function(){var e=this;return c((function(){!l||f||e.disabled?!l&&f&&(e.$emit("on-drag-end"),f=!1):(e.$emit("on-drag-start"),f=!0)}),50)}},beforeMount:function(){window.File&&window.FileReader&&window.FileList&&window.Blob||(this.$emit("on-error"),this.fileApiError=!0)},mounted:function(){function e(e,t){e.forEach((function(e){window.addEventListener(e,t)}))}this.fileApiError||(e(["dragover","drop"],this.preventPageReload),window.addEventListener("drop",this.onDrop),window.addEventListener("paste",this.onPaste),e(["dragenter","dragover"],this.onDragEnter),e(["dragleave","dragend","drop"],this.onDragLeave))},destroyed:function(){function e(e,t){e.forEach((function(e){window.removeEventListener(e,t)}))}this.fileApiError||(e(["dragover","drop"],this.preventPageReload),window.removeEventListener("drop",this.onDrop),window.removeEventListener("paste",this.onPaste),e(["dragenter","dragover"],this.onDragEnter),e(["dragleave","dragend","drop"],this.onDragLeave))},methods:{onChange:function(e){this.fileApiError||this.disabled||(e.preventDefault(),this.processFiles(e.target.files))},onDrop:function(e){this.disabled||e.dataTransfer.files.length&&this.processFiles(e.dataTransfer.files)},onPaste:function(e){if(!this.disabled){var t=[];for(var n in e.clipboardData.items){var r=e.clipboardData.items[n];"file"===r.kind&&t.push(r.getAsFile())}t.length&&this.processFiles(t)}},onDragEnter:function(){l=!0,this.emitDragState()},onDragLeave:function(){l=!1,this.emitDragState()},preventPageReload:function(e){e.preventDefault()},processFiles:function(e){for(var t=this,n=this.multiple?e.length:1,r=[],o=[],c=function(i){var n=e[i];if(!t.isAcceptedFile(n))return"continue";var c=new Promise((function(e){new Promise((function(e){n.type.match("image.*")&&(t.maxWidth||t.maxHeight)?function(e,t,n){return new Promise((function(r){var img=new Image,o=URL.createObjectURL(e);img.onload=function(){URL.revokeObjectURL(o);var c=img.width,d=img.height;c>d?c>t&&(d*=t/c,c=t):d>n&&(c*=n/d,d=n);var canvas=document.createElement("canvas");canvas.width=c,canvas.height=d;var l=canvas.getContext("2d");!function(e,t){var n=new FileReader;n.onload=function(e){var view=new DataView(e.target.result);if(65496!==view.getUint16(0,!1))return t(-2);for(var n=view.byteLength,r=2;r<n;){if(view.getUint16(r+2,!1)<=8)return t(-1);var marker=view.getUint16(r,!1);if(r+=2,65505===marker){if(1165519206!==view.getUint32(r+=2,!1))return t(-1);var o=18761===view.getUint16(r+=6,!1);r+=view.getUint32(r+4,o);var c=view.getUint16(r,o);r+=2;for(var i=0;i<c;i++)if(274===view.getUint16(r+12*i,o))return t(view.getUint16(r+12*i+8,o))}else{if(65280!=(65280&marker))break;r+=view.getUint16(r,!1)}}return t(-1)},n.readAsArrayBuffer(e)}(e,(function(t){!function(canvas,e,img,t,n,r){4<r&&r<9?(canvas.width=n,canvas.height=t):(canvas.width=t,canvas.height=n);switch(r){case 2:e.transform(-1,0,0,1,t,0);break;case 3:e.transform(-1,0,0,-1,t,n);break;case 4:e.transform(1,0,0,-1,0,n);break;case 5:e.transform(0,1,1,0,0,0);break;case 6:e.transform(0,1,-1,0,n,0);break;case 7:e.transform(0,-1,-1,0,n,t);break;case 8:e.transform(0,-1,1,0,0,t)}e.drawImage(img,0,0,canvas.width,canvas.height)}(canvas,l,img,c,d,t),canvas.toBlob(r,e.type)}))},img.src=o}))}(n,t.maxWidth,t.maxHeight).then(e):e(n)})).then((function(n){t.getDataUrlFromBlob(n).then((function(t){o[i]={id:d,dataUrl:t,name:n.name,size:n.size,type:n.type,blob:n},d++,e()}))}))}));r.push(c)},i=0;i<n;i++)c(i);r.length&&Promise.all(r).then((function(){t.$emit("on-add",o)}))},getDataUrlFromBlob:function(e){return new Promise((function(t){var n=new FileReader;n.onload=function(e){t(e.target.result)},n.readAsDataURL(e)}))},isAcceptedFile:function(e){return!this.acceptedTypes.length||this.acceptedTypes.some((function(t){return 0===e.type.indexOf(t)}))}}},v=n(37),component=Object(v.a)(h,(function(){var e=this.$createElement;return(this._self._c||e)("input",{staticClass:"file-input",attrs:{type:"file",multiple:this.multiple,disabled:this.disabled,accept:this.accept},on:{change:this.onChange}})}),[],!1,null,null,null);t.a=component.exports}}]);