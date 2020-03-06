(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{468:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(459);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},469:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(459);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},470:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(459);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},472:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(82),r(25);var n={};var o={inheritAttrs:!1,render(e){return this.isLoaded?e("svg",{on:this.$listeners,attrs:Object.assign(this.initialAttrs,(t=this.$attrs,Object.keys(t).reduce((e,r)=>(!1!==t[r]&&null!==t[r]&&void 0!==t[r]&&(e[r]=t[r]),e),{}))),domProps:{innerHTML:this.initialContent}}):null;var t},props:{src:{type:String,required:!0},transformSource:{type:Function,default:svg=>svg}},data:()=>({isLoaded:!1,initialAttrs:{},initialContent:""}),watch:{src(e){this.inline(e)}},mounted(){this.inline(this.src)},methods:{inline(e){n[e]||(this.isLoaded&&(this.isLoaded=!1,this.$emit("unloaded")),n[e]=this.download(e)),n[e].then(svg=>{this.initialAttrs={};for(var e=svg.attributes,i=e.length-1;i>=0;i--)this.initialAttrs[e[i].name]=e[i].value;this.initialContent=svg.innerHTML,this.isLoaded=!0,this.$emit("loaded")}).catch(t=>{delete n[e],this.$emit("error",t)})},download(e){return new Promise((t,r)=>{var n=new XMLHttpRequest;n.open("GET",e,!0),n.onload=()=>{if(n.status>=200&&n.status<400)try{var e=(new DOMParser).parseFromString(n.responseText,"text/xml").getElementsByTagName("svg")[0];e?(e=this.transformSource(e),t(e)):r(new Error('Loaded file is not valid SVG"'))}catch(e){r(e)}else r(new Error("Error loading SVG"))},n.onerror=r,n.send()})}}}},476:function(e,t,r){"use strict";function n(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var r=document.getSelection(),n=r.rangeCount>0&&r.getRangeAt(0);t.select(),t.selectionStart=0,t.selectionEnd=e.length;var o=document.execCommand("copy");return document.body.removeChild(t),n&&(r.removeAllRanges(),r.addRange(n)),o}function o(){return"undefined"!=typeof document&&"function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}))},508:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(31),o=r(167),c=r(450),l=r(504);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){var{publicKey:t,coinSymbol:r,stake:y,feeCoinSymbol:O}=e,d=Object(o.a)(e,["publicKey","coinSymbol","stake","feeCoinSymbol"]);console.warn("DelegateTxParams is deprecated");var m=new l.a({publicKey:t,coin:r,stake:y});return O||(O=r),function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},d,{gasCoin:O,txType:c.a.DELEGATE,txData:m.serialize()})}},530:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return m}));r(22),r(15),r(17),r(264);var n=r(474),o=r(68),c=(r(262),r(41)),l=r(605),f=r(450),y=r(578),O=r(467);r(531);class d{constructor(data){data=data||{};var t=[{name:"type",length:1,allowLess:!0,default:e.from([])},{name:"data",alias:"input",allowZero:!0,default:e.from([])},{name:"payload",allowZero:!0,default:e.from([])},{name:"nonce",length:32,allowLess:!0,default:e.from([])},{name:"gasPrice",length:32,allowLess:!0,default:e.from([])},{name:"gasCoin",length:10,allowLess:!0,default:e.from([])}];Object(n.defineProperties)(this,t,data)}}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://bip.to",{nonce:n,gasPrice:o,gasCoin:c,type:l,txType:m,data:data,txData:w,password:P}=t,h={nonce:n&&"0x".concat(Object(O.d)(n)),gasPrice:o&&"0x".concat(Object(O.d)(o)),gasCoin:c&&Object(f.s)(c),type:l||m,data:Object(y.b)(data||w,l||m)},S=t.message||t.payload;S&&("string"==typeof S&&(S=e.from(S,"utf-8")),h.payload=S),-1===(r=r.replace(/\/$/,"")).indexOf("://")&&(r="https://".concat(r));var D=new d(h),C="".concat(r,"/tx/").concat(j(D.serialize()));return P&&(C+="?p=".concat(j(v(P)))),C}function j(e){return Object(l.fromByteArray)(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function v(t){return"string"!=typeof t||Object(c.isHexPrefixed)(t)?Object(o.toBuffer)(t):e.from(t,"utf8")}}).call(this,r(7).Buffer)},531:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return O}));var n=r(31),o=r(167),c=r(450),l=r(492),f=r(502);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(t){var{privateKey:r,check:O,password:d,proof:m}=t,j=Object(o.a)(t,["privateKey","check","password","proof"]);console.warn("RedeemCheckTxParams is deprecated");var v=Object(l.c)(O);"string"==typeof r&&(r=e.from(r,"hex"));var w=new f.a({privateKey:r,check:O,password:d,proof:m});return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},j,{privateKey:r,gasPrice:1,gasCoin:v,txType:c.a.REDEEM_CHECK,txData:w.serialize()})}}).call(this,r(7).Buffer)},532:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(31),o=r(167),c=r(450),l=r(500);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){var{address:address,amount:t=0,coinSymbol:r,feeCoinSymbol:y}=e,O=Object(o.a)(e,["address","amount","coinSymbol","feeCoinSymbol"]);console.warn("SendTxParams is deprecated");var d=new l.a({to:address,coin:r,value:t});return y||(y=r),function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},O,{gasCoin:y,txType:c.a.SEND,txData:d.serialize()})}},533:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(31),o=r(167),c=r(450),l=r(505);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){var{publicKey:t,coinSymbol:r,stake:y,feeCoinSymbol:O}=e,d=Object(o.a)(e,["publicKey","coinSymbol","stake","feeCoinSymbol"]);console.warn("UnbondTxParams is deprecated");var m=new l.a({publicKey:t,coin:r,stake:y});return O||(O=r),function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},d,{gasCoin:O,txType:c.a.UNBOND,txData:m.serialize()})}},534:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(31),o=r(167),c=r(450),l=r(501);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){var{name:t,symbol:symbol,initialAmount:r,initialReserve:y,constantReserveRatio:O,maxSupply:d,feeCoinSymbol:m}=e,j=Object(o.a)(e,["name","symbol","initialAmount","initialReserve","constantReserveRatio","maxSupply","feeCoinSymbol"]);console.warn("CreateCoinTxParams is deprecated");var v=new l.c({name:t,symbol:symbol,initialAmount:r,initialReserve:y,constantReserveRatio:O,maxSupply:d});return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},j,{gasCoin:m,txType:c.a.CREATE_COIN,txData:v.serialize()})}},559:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(31),o=r(167),c=r(450),l=r(524);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){var{coinFrom:t,coinTo:r,sellAmount:y,minBuyAmount:O=0,feeCoinSymbol:d}=e,m=Object(o.a)(e,["coinFrom","coinTo","sellAmount","minBuyAmount","feeCoinSymbol"]);console.warn("SellTxParams is deprecated");var j=new l.a({coinToSell:t,coinToBuy:r,valueToSell:y,minimumValueToBuy:O});return d||(d=t),function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},m,{gasCoin:d,txType:c.a.SELL,txData:j.serialize()})}},560:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(31),o=r(167),c=r(450),l=(r(456),r(525));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){var{coinFrom:t,coinTo:r,buyAmount:y,maxSellAmount:O=Number.MAX_SAFE_INTEGER,feeCoinSymbol:d}=e,m=Object(o.a)(e,["coinFrom","coinTo","buyAmount","maxSellAmount","feeCoinSymbol"]);console.warn("BuyTxParams is deprecated");var j=new l.a({coinToSell:t,coinToBuy:r,valueToBuy:y,maximumValueToSell:O});return d||(d=t),function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},m,{gasCoin:d,txType:c.a.BUY,txData:j.serialize()})}},561:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(31),o=r(167),c=r(450),l=r(527);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){var{address:address,publicKey:t,commission:r,coinSymbol:y,stake:O,feeCoinSymbol:d}=e,m=Object(o.a)(e,["address","publicKey","commission","coinSymbol","stake","feeCoinSymbol"]);console.warn("DeclareCandidacyTxParams is deprecated");var j=new l.a({address:address,publicKey:t,commission:r,coin:y,stake:O});return d||(d=y),function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},m,{gasCoin:d,txType:c.a.DECLARE_CANDIDACY,txData:j.serialize()})}},562:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var n=r(31),o=r(167),c=r(450),l=r(528);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){var{publicKey:t,rewardAddress:r,ownerAddress:y,feeCoinSymbol:O}=e,d=Object(o.a)(e,["publicKey","rewardAddress","ownerAddress","feeCoinSymbol"]);console.warn("EditCandidateTxParams is deprecated");var m=new l.a({publicKey:t,rewardAddress:r,ownerAddress:y});return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},d,{gasCoin:O,txType:c.a.EDIT_CANDIDATE,txData:m.serialize()})}},568:function(e,t,r){"use strict";var n=r(450);r(481),r(484),r(483),r(499);r(485),r(488),r(486),r(493),r(25);r(492),r(530),r(461);var o=r(531),c=(r(532),r(31)),l=r(167);r(523);r(559);var f=r(526);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){var{coinFrom:t,coinTo:r,minBuyAmount:o=0,feeCoinSymbol:O}=e,d=Object(l.a)(e,["coinFrom","coinTo","minBuyAmount","feeCoinSymbol"]);console.warn("SellAllTxParams is deprecated");var m=new f.a({coinToSell:t,coinToBuy:r,minimumValueToBuy:o});return O||(O=t),function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},d,{gasCoin:O,txType:n.a.SELL_ALL,txData:m.serialize()})}r(560),r(561);var d=r(503);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){var{publicKey:t,feeCoinSymbol:r}=e,o=Object(l.a)(e,["publicKey","feeCoinSymbol"]);console.warn("SetCandidateOnTxParams is deprecated");var f=new d.a({publicKey:t});return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},o,{gasCoin:r,txType:n.a.SET_CANDIDATE_ON,txData:f.serialize()})}var v=r(529);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function P(e){var{publicKey:t,feeCoinSymbol:r}=e,o=Object(l.a)(e,["publicKey","feeCoinSymbol"]);console.warn("SetCandidateOffTxParams is deprecated");var f=new v.a({publicKey:t});return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},o,{gasCoin:r,txType:n.a.SET_CANDIDATE_OFF,txData:f.serialize()})}r(562),r(508),r(533),r(534),r(506);r(502),r(500),r(524),r(525),r(527),r(528),r(504),r(505),r(501);r.d(t,"b",(function(){return O})),r.d(t,"d",(function(){return j})),r.d(t,"c",(function(){return P})),r.d(t,"a",(function(){return o.a}))},605:function(e,t,r){"use strict";r(22),r(35),r(267),r(280),r(282),t.byteLength=function(e){var t=f(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){var t,i,r=f(e),n=r[0],l=r[1],y=new c(function(e,t,r){return 3*(t+r)/4-r}(0,n,l)),O=0,d=l>0?n-4:n;for(i=0;i<d;i+=4)t=o[e.charCodeAt(i)]<<18|o[e.charCodeAt(i+1)]<<12|o[e.charCodeAt(i+2)]<<6|o[e.charCodeAt(i+3)],y[O++]=t>>16&255,y[O++]=t>>8&255,y[O++]=255&t;2===l&&(t=o[e.charCodeAt(i)]<<2|o[e.charCodeAt(i+1)]>>4,y[O++]=255&t);1===l&&(t=o[e.charCodeAt(i)]<<10|o[e.charCodeAt(i+1)]<<4|o[e.charCodeAt(i+2)]>>2,y[O++]=t>>8&255,y[O++]=255&t);return y},t.fromByteArray=function(e){for(var t,r=e.length,o=r%3,c=[],i=0,l=r-o;i<l;i+=16383)c.push(y(e,i,i+16383>l?l:i+16383));1===o?(t=e[r-1],c.push(n[t>>2]+n[t<<4&63]+"==")):2===o&&(t=(e[r-2]<<8)+e[r-1],c.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"="));return c.join("")};for(var n=[],o=[],c="undefined"!=typeof Uint8Array?Uint8Array:Array,code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,l=code.length;i<l;++i)n[i]=code[i],o[code.charCodeAt(i)]=i;function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function y(e,t,r){for(var o,c,output=[],i=t;i<r;i+=3)o=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]),output.push(n[(c=o)>>18&63]+n[c>>12&63]+n[c>>6&63]+n[63&c]);return output.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63}}]);