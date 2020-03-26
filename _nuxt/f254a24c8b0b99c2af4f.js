/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{537:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(534);e.default=function(t){return(0,n.withParams)({type:"minLength",min:t},(function(e){return!(0,n.req)(e)||(0,n.len)(e)>=t}))}},538:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(534);e.default=function(t){return(0,n.withParams)({type:"maxLength",max:t},(function(e){return!(0,n.req)(e)||(0,n.len)(e)<=t}))}},541:function(t,e,o){"use strict";var n=o(557),r=o.n(n);e.a={bind:function(t,e,o){"TEXTAREA"===t.tagName&&o.context.$nextTick((function(){r()(t)}))},componentUpdated:function(t,e,o){"TEXTAREA"===t.tagName&&o.context.$nextTick((function(){r.a.update(t)}))},unbind:function(t){r.a.destroy(t)}}},555:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));o(177),o(45),o(46),o(5);var n={};var r={inheritAttrs:!1,render:function(t){return this.isLoaded?t("svg",{on:this.$listeners,attrs:Object.assign(this.svgAttrs,(e=this.$attrs,Object.keys(e).reduce((function(t,o){return!1!==e[o]&&null!==e[o]&&void 0!==e[o]&&(t[o]=e[o]),t}),{}))),domProps:{innerHTML:this.svgContent}}):null;var e},props:{src:{type:String,required:!0},transformSource:{type:Function,default:function(svg){return svg}}},data:function(){return{isLoaded:!1,svgAttrs:{},svgContent:""}},watch:{src:function(t){this.inline(t)}},mounted:function(){this.inline(this.src)},methods:{inline:function(t){var e=this;n[t]||(this.isLoaded&&(this.isLoaded=!1,this.$emit("unloaded")),n[t]=this.download(t)),n[t].then((function(svg){e.svgAttrs={};for(var t=svg.attributes,i=t.length-1;i>=0;i--)e.svgAttrs[t[i].name]=t[i].value;e.svgContent=svg.innerHTML,e.isLoaded=!0,e.$nextTick((function(){e.$emit("loaded",e.$el)}))})).catch((function(o){delete n[t],e.$emit("error",o)}))},download:function(t){var e=this;return new Promise((function(o,n){var r=new XMLHttpRequest;r.open("GET",t,!0),r.onload=function(){if(r.status>=200&&r.status<400)try{var t=(new DOMParser).parseFromString(r.responseText,"text/xml").getElementsByTagName("svg")[0];t?(t=e.transformSource(t),o(t)):n(new Error('Loaded file is not valid SVG"'))}catch(t){n(t)}else n(new Error("Error loading SVG"))},r.onerror=n,r.send()}))}}}},556:function(t,e,o){var n=o(6),r=o(334),l=o(9),c=o(24),m=o(228).onFreeze,d=Object.freeze;n({target:"Object",stat:!0,forced:l((function(){d(1)})),sham:!r},{freeze:function(t){return d&&c(t)?d(m(t)):t}})},557:function(t,e,o){var n,r,l;r=[t,e],void 0===(l="function"==typeof(n=function(t,e){"use strict";var o,n,map="function"==typeof Map?new Map:(o=[],n=[],{has:function(t){return o.indexOf(t)>-1},get:function(t){return n[o.indexOf(t)]},set:function(t,e){-1===o.indexOf(t)&&(o.push(t),n.push(e))},delete:function(t){var e=o.indexOf(t);e>-1&&(o.splice(e,1),n.splice(e,1))}}),r=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch(t){r=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!1),e}}function l(t){if(t&&t.nodeName&&"TEXTAREA"===t.nodeName&&!map.has(t)){var style,e=null,o=null,n=null,l=function(){t.clientWidth!==o&&f()},c=function(style){window.removeEventListener("resize",l,!1),t.removeEventListener("input",f,!1),t.removeEventListener("keyup",f,!1),t.removeEventListener("autosize:destroy",c,!1),t.removeEventListener("autosize:update",f,!1),Object.keys(style).forEach((function(e){t.style[e]=style[e]})),map.delete(t)}.bind(t,{height:t.style.height,resize:t.style.resize,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",c,!1),"onpropertychange"in t&&"oninput"in t&&t.addEventListener("keyup",f,!1),window.addEventListener("resize",l,!1),t.addEventListener("input",f,!1),t.addEventListener("autosize:update",f,!1),t.style.overflowX="hidden",t.style.wordWrap="break-word",map.set(t,{destroy:c,update:f}),"vertical"===(style=window.getComputedStyle(t,null)).resize?t.style.resize="none":"both"===style.resize&&(t.style.resize="horizontal"),e="content-box"===style.boxSizing?-(parseFloat(style.paddingTop)+parseFloat(style.paddingBottom)):parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth),isNaN(e)&&(e=0),f()}function m(e){var o=t.style.width;t.style.width="0px",t.offsetWidth,t.style.width=o,t.style.overflowY=e}function d(){if(0!==t.scrollHeight){var n=function(t){for(var e=[];t&&t.parentNode&&t.parentNode instanceof Element;)t.parentNode.scrollTop&&e.push({node:t.parentNode,scrollTop:t.parentNode.scrollTop}),t=t.parentNode;return e}(t),r=document.documentElement&&document.documentElement.scrollTop;t.style.height="",t.style.height=t.scrollHeight+e+"px",o=t.clientWidth,n.forEach((function(t){t.node.scrollTop=t.scrollTop})),r&&(document.documentElement.scrollTop=r)}}function f(){d();var e=Math.round(parseFloat(t.style.height)),o=window.getComputedStyle(t,null),l="content-box"===o.boxSizing?Math.round(parseFloat(o.height)):t.offsetHeight;if(l<e?"hidden"===o.overflowY&&(m("scroll"),d(),l="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight):"hidden"!==o.overflowY&&(m("hidden"),d(),l="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight),n!==l){n=l;var c=r("autosize:resized");try{t.dispatchEvent(c)}catch(t){}}}}function c(t){var e=map.get(t);e&&e.destroy()}function m(t){var e=map.get(t);e&&e.update()}var d=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((d=function(t){return t}).destroy=function(t){return t},d.update=function(t){return t}):((d=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],(function(t){return l(t)})),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],c),t},d.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],m),t}),e.default=d,t.exports=e.default})?n.apply(e,r):n)||(t.exports=l)},558:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(534);e.default=function(t){return(0,n.withParams)({type:"minValue",min:t},(function(e){return!(0,n.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e>=+t}))}},559:function(t,e,o){"use strict";o(80);var n=o(225),r=o(563),l={ideFix:null,imaskAmount:{mask:Number,scale:18,signed:!1,thousandsSeparator:"",padFractionalZeros:!1,normalizeZeros:!1,radix:".",mapToRadix:[","]},directives:{imask:r.a},props:{value:{type:[String,Number],default:""}},data:function(){return{maskedValue:""}},computed:{listeners:function(){var t=this.$listeners,e=(t.input,Object(n.a)(t,["input"]));return e}},watch:{value:function(t){t!==this.maskedValue&&this.updateMaskState(t)}},mounted:function(){this.updateMaskState(this.value)},methods:{updateMaskState:function(t){this.$refs.input.maskRef.typedValue=t;var e=this.$refs.input.maskRef._value.length;this.$refs.input.maskRef._selection={start:e,end:e}},onAcceptInput:function(t){this.maskedValue=t.detail._unmaskedValue,this.$emit("input",t.detail._unmaskedValue)}}},c=o(37),component=Object(c.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("input",this._g({directives:[{name:"imask",rawName:"v-imask",value:this.$options.imaskAmount,expression:"$options.imaskAmount"}],ref:"input",attrs:{type:"text",autocapitalize:"off",inputmode:"decimal"},on:{accept:this.onAcceptInput}},this.listeners))}),[],!1,null,null,null);e.a=component.exports},561:function(t,e,o){"use strict";function n(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e);var o=document.getSelection(),n=o.rangeCount>0&&o.getRangeAt(0);e.select(),e.selectionStart=0,e.selectionEnd=t.length;var r=document.execCommand("copy");return document.body.removeChild(e),n&&(o.removeAllRanges(),o.addRange(n)),r}function r(){return"undefined"!=typeof document&&"function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")}o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return r}))},569:function(t,e,o){"use strict";o(112),o(80),o(226);var n=o(40),r=o(531),l={components:{InputMaskedAmount:o(559).a},directives:{checkEmpty:r.a},inheritAttrs:!1,props:{value:{type:[String,Number],required:!0},$value:{type:Object,required:!0},label:{type:String,required:!0},maxValue:{type:[String,Number],default:void 0},addressBalance:{type:Array,default:function(){return[]}},selectedCoinSymbol:{type:String,default:""},fee:{type:[Object,null],default:null}},data:function(){return{isUseMax:!1}},computed:{maxValueComputed:function(){var t,e,o=this;if(void 0!==this.maxValue)return this.maxValue;var r=this.addressBalance.find((function(t){return t.coin===o.selectedCoinSymbol}));if(r){if(r.coin!==(null===(t=this.fee)||void 0===t?void 0:t.coinSymbol))return r.amount;var l=new n.a(r.amount).minus(null===(e=this.fee)||void 0===e?void 0:e.value).toFixed();return l>0?l:"0"}},isMaxValueDefined:function(){return void 0!==this.maxValueComputed}},watch:{value:function(t){(t||0===t)&&this.isMaxValueDefined?new n.a(t).toFixed()!==new n.a(this.maxValueComputed).toFixed()&&(this.isUseMax=!1):this.isUseMax=!1},maxValueComputed:function(t){this.isMaxValueDefined&&this.isUseMax&&this.useMax()}},methods:{useMax:function(){if(!this.isMaxValueDefined)return!1;this.isUseMax=!0,this.$emit("input",this.maxValueComputed),this.$value.$touch()}}},c=o(37),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{staticClass:"form-field",class:{"is-error":t.$value.$error,"form-field--with-use-max":t.isMaxValueDefined}},[o("InputMaskedAmount",t._b({directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",inputmode:"decimal",value:t.value},on:{input:function(e){return t.$emit("input",e)},blur:function(e){return t.$value.$touch()}}},"InputMaskedAmount",t.$attrs,!1)),t._v(" "),t.isMaxValueDefined?o("button",{staticClass:"form-field__use-max link--main link--opacity u-semantic-button",attrs:{type:"button"},on:{click:t.useMax}},[t._v("Use max")]):t._e(),t._v(" "),o("span",{staticClass:"form-field__label"},[t._v(t._s(t.label))])],1)}),[],!1,null,null,null);e.a=component.exports},662:function(t,e,o){"use strict";o.r(e);o(59),o(5);var n=o(540),r=o(532),l=o(533),c=o.n(l),m=o(537),d=o.n(m),f=o(538),v=o.n(f),h=o(224),_=o(545),y=o(531),$=o(227),x=o(110),C=o(550),T=o(552),F=o(569),E={pretty:x.j,prettyExact:x.k,TX_TYPE:h.a,components:{TxForm:C.a,FieldCoin:T.a,FieldUseMax:F.a},directives:{checkEmpty:y.a},mixins:[r.validationMixin],data:function(){return{form:{sellAmount:"",coinFrom:"",coinTo:""},estimation:null}},validations:function(){return{form:{sellAmount:{required:c.a},coinFrom:{required:c.a,minLength:d()(3),maxLength:v()(10)},coinTo:{required:c.a,minLength:d()(3),maxLength:v()(10)}}}},computed:{},methods:{getEstimation:function(t){var e=this;return t.isFormSending=!0,t.serverError="",t.serverSuccess="",Object(_.c)({coinToSell:this.form.coinFrom,valueToSell:this.form.sellAmount,coinToBuy:this.form.coinTo}).then((function(o){e.estimation=o.will_get,t.isFormSending=!1})).catch((function(e){throw t.isFormSending=!1,t.serverError=Object($.a)(e),e}))},clearForm:function(){this.form.sellAmount="",this.form.coinFrom=this.balance&&this.balance.length?this.balance[0].coin:"",this.form.coinTo="",this.$v.$reset()}}},w=o(37),S=Object(w.a)(E,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("TxForm",{attrs:{"data-test-id":"convertSell",txData:{coinToSell:t.form.coinFrom,coinToBuy:t.form.coinTo,valueToSell:t.form.sellAmount},$txData:t.$v.form,txType:t.$options.TX_TYPE.SELL,"before-confirm-modal-show":t.getEstimation},on:{"clear-form":function(e){return t.clearForm()}},scopedSlots:t._u([{key:"panel-header",fn:function(){return[o("h1",{staticClass:"panel__header-title"},[t._v("\n            "+t._s(t.$td("Sell Coins","convert.sell-title"))+"\n        ")]),t._v(" "),o("p",{staticClass:"panel__header-description"},[t._v("\n            "+t._s(t.$td("Choose one of the coins that you own and specify the amount you would like to sell.","convert.sell-description"))+"\n        ")])]},proxy:!0},{key:"default",fn:function(e){var n=e.fee,r=e.addressBalance;return[o("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--xlarge--1-3"},[o("FieldCoin",{attrs:{"data-test-id":"convertSellInputSellCoin",$value:t.$v.form.coinFrom,label:t.$td("Coin to sell","form.convert-sell-coin-sell"),"coin-list":r},model:{value:t.form.coinFrom,callback:function(e){t.$set(t.form,"coinFrom",e)},expression:"form.coinFrom"}}),t._v(" "),t.$v.form.coinFrom.$dirty&&!t.$v.form.coinFrom.required?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Enter coin symbol","form.coin-error-required")))]):t.$v.form.coinFrom.$dirty&&!t.$v.form.coinFrom.minLength?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Min 3 letters","form.coin-error-min")))]):t.$v.form.coinFrom.$dirty&&!t.$v.form.coinFrom.maxLength?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Max 10 letters","form.coin-error-max")))]):t._e()],1),t._v(" "),o("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--xlarge--1-3"},[o("FieldUseMax",{attrs:{"data-test-id":"convertSellInputSellAmount",$value:t.$v.form.sellAmount,label:t.$td("Sell amount","form.convert-sell-amount"),"selected-coin-symbol":t.form.coinFrom,fee:n,"address-balance":r},model:{value:t.form.sellAmount,callback:function(e){t.$set(t.form,"sellAmount",e)},expression:"form.sellAmount"}}),t._v(" "),t.$v.form.sellAmount.$dirty&&!t.$v.form.sellAmount.required?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Enter amount","form.amount-error-required")))]):t._e()],1),t._v(" "),o("div",{staticClass:"u-cell u-cell--xlarge--1-3"},[o("FieldCoin",{attrs:{"data-test-id":"convertSellInputBuyCoin",$value:t.$v.form.coinTo,label:t.$td("Coin to get","form.convert-sell-coin-get")},model:{value:t.form.coinTo,callback:function(e){t.$set(t.form,"coinTo",e)},expression:"form.coinTo"}}),t._v(" "),t.$v.form.coinTo.$dirty&&!t.$v.form.coinTo.required?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Enter coin symbol","form.coin-error-required")))]):t.$v.form.coinTo.$dirty&&!t.$v.form.coinTo.minLength?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Min 3 letters","form.coin-error-min")))]):t.$v.form.coinTo.$dirty&&!t.$v.form.coinTo.maxLength?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Max 10 letters","form.coin-error-max")))]):t._e()],1)]}},{key:"submit-title",fn:function(){return[t._v("\n        "+t._s(t.$td("Sell","form.convert-sell-button"))+"\n    ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[o("h1",{staticClass:"panel__header-title"},[o("img",{staticClass:"panel__header-title-icon",attrs:{src:t.BASE_URL_PREFIX+"/img/icon-feature-convert.svg",alt:"",role:"presentation",width:"40",height:"40"}}),t._v("\n            "+t._s(t.$td("Convert Coins","convert.convert-title"))+"\n        ")])]},proxy:!0},{key:"confirm-modal-body",fn:function(){return[o("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin"},[o("div",{staticClass:"u-cell"},[o("label",{staticClass:"form-field form-field--dashed"},[o("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:"",tabindex:"-1"},domProps:{value:t.form.coinFrom+" "+t.$options.prettyExact(t.form.sellAmount)}}),t._v(" "),o("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("You will send","form.convert-sell-confirm-send")))])])]),t._v(" "),o("div",{staticClass:"u-cell"},[t.estimation?[o("label",{staticClass:"form-field form-field--dashed"},[o("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:"",tabindex:"-1"},domProps:{value:t.form.coinTo+" "+t.$options.pretty(t.estimation)}}),t._v(" "),o("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("You will get approximately *","form.convert-sell-confirm-receive-estimation")))])]),t._v(" "),o("div",{staticClass:"form-field__help u-text-left"},[t._v("\n                        "+t._s(t.$td("* The result amount depends on the current rate at the time of the exchange and may differ from the above.","form.convert-confirm-note"))+"\n                    ")])]:[o("label",{staticClass:"form-field form-field--dashed"},[o("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:"",tabindex:"-1"},domProps:{value:t.form.coinTo}}),t._v(" "),o("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("You will get","form.convert-sell-confirm-receive")))])])]],2)])]},proxy:!0}])})}),[],!1,null,null,null).exports,k=(o(112),{pretty:x.j,prettyExact:x.k,TX_TYPE:h.a,components:{TxForm:C.a,FieldCoin:T.a},directives:{checkEmpty:y.a},mixins:[r.validationMixin],data:function(){return{form:{coinFrom:"",coinTo:""},estimation:null,addressBalance:[]}},validations:function(){return{form:{coinFrom:{required:c.a,minLength:d()(3),maxLength:v()(10)},coinTo:{required:c.a,minLength:d()(3),maxLength:v()(10)}}}},computed:{sellAmount:function(){var t=this,e=this.addressBalance.find((function(e){return e.coin===t.form.coinFrom}));return e&&e.amount}},methods:{getEstimation:function(t){var e=this;return t.isFormSending=!0,t.serverError="",t.serverSuccess="",Object(_.c)({coinToSell:this.form.coinFrom,valueToSell:this.sellAmount,coinToBuy:this.form.coinTo}).then((function(o){e.estimation=o.will_get,t.isFormSending=!1})).catch((function(e){throw t.isFormSending=!1,t.serverError=Object($.a)(e),e}))},clearForm:function(){this.form.coinFrom="",this.form.coinTo="",this.$v.$reset()}}}),A=Object(w.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("TxForm",{attrs:{"data-test-id":"convertSellAll",txData:{coinToSell:t.form.coinFrom,coinToBuy:t.form.coinTo},$txData:t.$v.form,txType:t.$options.TX_TYPE.SELL_ALL,"before-confirm-modal-show":t.getEstimation},on:{"update:addressBalance":function(e){t.addressBalance=e},"clear-form":function(e){return t.clearForm()}},scopedSlots:t._u([{key:"panel-header",fn:function(){return[o("h1",{staticClass:"panel__header-title"},[t._v("\n            "+t._s(t.$td("Sell All Coins","convert.sell-all-title"))+"\n        ")]),t._v(" "),o("p",{staticClass:"panel__header-description"},[t._v("\n            "+t._s(t.$td("Sell all of the coins that you possess in a single click.","convert.sell-all-description"))+"\n        ")])]},proxy:!0},{key:"default",fn:function(e){e.fee;var n=e.addressBalance;return[o("div",{staticClass:"u-cell u-cell--small--1-2"},[o("FieldCoin",{attrs:{"data-test-id":"convertSellAllInputSellCoin",$value:t.$v.form.coinFrom,label:t.$td("Coin to sell","form.convert-sell-coin-sell"),"coin-list":n},model:{value:t.form.coinFrom,callback:function(e){t.$set(t.form,"coinFrom",e)},expression:"form.coinFrom"}}),t._v(" "),t.$v.form.coinFrom.$dirty&&!t.$v.form.coinFrom.required?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Enter coin symbol","form.coin-error-required")))]):t.$v.form.coinFrom.$dirty&&!t.$v.form.coinFrom.minLength?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Min 3 letters","form.coin-error-min")))]):t.$v.form.coinFrom.$dirty&&!t.$v.form.coinFrom.maxLength?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Max 10 letters","form.coin-error-max")))]):t._e()],1),t._v(" "),o("div",{staticClass:"u-cell u-cell--small--1-2"},[o("FieldCoin",{attrs:{"data-test-id":"convertSellAllInputBuyCoin",$value:t.$v.form.coinTo,label:t.$td("Coin to get","form.convert-sell-coin-get")},model:{value:t.form.coinTo,callback:function(e){t.$set(t.form,"coinTo",e)},expression:"form.coinTo"}}),t._v(" "),t.$v.form.coinTo.$dirty&&!t.$v.form.coinTo.required?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Enter coin symbol","form.coin-error-required")))]):t.$v.form.coinTo.$dirty&&!t.$v.form.coinTo.minLength?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Min 3 letters","form.coin-error-min")))]):t.$v.form.coinTo.$dirty&&!t.$v.form.coinTo.maxLength?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Max 10 letters","form.coin-error-max")))]):t._e()],1)]}},{key:"submit-title",fn:function(){return[t._v("\n        "+t._s(t.$td("Sell","form.convert-sell-button"))+"\n    ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[o("h1",{staticClass:"panel__header-title"},[o("img",{staticClass:"panel__header-title-icon",attrs:{src:t.BASE_URL_PREFIX+"/img/icon-feature-convert.svg",alt:"",role:"presentation",width:"40",height:"40"}}),t._v("\n            "+t._s(t.$td("Convert Coins","convert.convert-title"))+"\n        ")])]},proxy:!0},{key:"confirm-modal-body",fn:function(){return[o("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin"},[o("div",{staticClass:"u-cell"},[o("label",{staticClass:"form-field form-field--dashed"},[o("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:"",tabindex:"-1"},domProps:{value:t.form.coinFrom+" "+t.$options.prettyExact(t.sellAmount)}}),t._v(" "),o("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("You will send","form.convert-sell-confirm-send")))])])]),t._v(" "),o("div",{staticClass:"u-cell"},[t.estimation?[o("label",{staticClass:"form-field form-field--dashed"},[o("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:"",tabindex:"-1"},domProps:{value:t.form.coinTo+" "+t.$options.pretty(t.estimation)}}),t._v(" "),o("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("You will get approximately *","form.convert-sell-confirm-receive-estimation")))])]),t._v(" "),o("div",{staticClass:"form-field__help u-text-left"},[t._v("\n                        "+t._s(t.$td("* The result amount depends on the current rate at the time of the exchange and may differ from the above.","form.convert-confirm-note"))+"\n                    ")])]:[o("label",{staticClass:"form-field form-field--dashed"},[o("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:"",tabindex:"-1"},domProps:{value:t.form.coinTo}}),t._v(" "),o("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("You will get","form.convert-sell-confirm-receive")))])])]],2)])]},proxy:!0}])})}),[],!1,null,null,null).exports,L=o(559),M={TX_TYPE:h.a,components:{TxForm:C.a,FieldCoin:T.a,InputMaskedAmount:L.a},directives:{checkEmpty:y.a},mixins:[r.validationMixin],data:function(){return{form:{buyAmount:"",coinFrom:"",coinTo:""},estimation:null}},validations:function(){return{form:{buyAmount:{required:c.a},coinFrom:{required:c.a,minLength:d()(3),maxLength:v()(10)},coinTo:{required:c.a,minLength:d()(3),maxLength:v()(10)}}}},computed:{},methods:{pretty:x.j,prettyExact:x.k,getEstimation:function(t){var e=this;return t.isFormSending=!0,t.serverError="",t.serverSuccess="",Object(_.b)({coinToBuy:this.form.coinTo,valueToBuy:this.form.buyAmount,coinToSell:this.form.coinFrom}).then((function(o){e.estimation=o.will_pay,t.isFormSending=!1})).catch((function(e){throw t.isFormSending=!1,t.serverError=Object($.a)(e),e}))},clearForm:function(){this.form.buyAmount="",this.form.coinFrom="",this.form.coinTo="",this.$v.$reset()}}},B={components:{CoinSellForm:S,CoinSellAllForm:A,CoinBuyForm:Object(w.a)(M,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("TxForm",{attrs:{"data-test-id":"convertBuy",txData:{coinToSell:t.form.coinFrom,coinToBuy:t.form.coinTo,valueToBuy:t.form.buyAmount},$txData:t.$v.form,txType:t.$options.TX_TYPE.BUY,"before-confirm-modal-show":t.getEstimation},on:{"clear-form":function(e){return t.clearForm()}},scopedSlots:t._u([{key:"panel-header",fn:function(){return[o("h1",{staticClass:"panel__header-title"},[t._v("\n            "+t._s(t.$td("Buy Coins","convert.buy-title"))+"\n        ")]),t._v(" "),o("p",{staticClass:"panel__header-description"},[t._v("\n            "+t._s(t.$td("If you want to buy a specific coin, you can do it here.","convert.buy-description"))+"\n        ")])]},proxy:!0},{key:"default",fn:function(e){e.fee;var n=e.addressBalance;return[o("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--xlarge--1-3"},[o("FieldCoin",{attrs:{"data-test-id":"convertBuyInputBuyCoin",$value:t.$v.form.coinTo,label:t.$td("Coin to buy","form.convert-buy-coin-buy")},model:{value:t.form.coinTo,callback:function(e){t.$set(t.form,"coinTo",e)},expression:"form.coinTo"}}),t._v(" "),t.$v.form.coinTo.$dirty&&!t.$v.form.coinTo.required?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Enter coin symbol","form.coin-error-required")))]):t.$v.form.coinTo.$dirty&&!t.$v.form.coinTo.minLength?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Min 3 letters","form.coin-error-min")))]):t.$v.form.coinTo.$dirty&&!t.$v.form.coinTo.maxLength?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Max 10 letters","form.coin-error-max")))]):t._e()],1),t._v(" "),o("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--xlarge--1-3"},[o("label",{staticClass:"form-field",class:{"is-error":t.$v.form.buyAmount.$error}},[o("InputMaskedAmount",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{"data-test-id":"convertBuyInputBuyAmount"},on:{blur:function(e){return t.$v.form.buyAmount.$touch()}},model:{value:t.form.buyAmount,callback:function(e){t.$set(t.form,"buyAmount",e)},expression:"form.buyAmount"}}),t._v(" "),o("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("Buy amount","form.convert-buy-amount")))])],1),t._v(" "),t.$v.form.buyAmount.$dirty&&!t.$v.form.buyAmount.required?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Enter amount","form.amount-error-required")))]):t._e()]),t._v(" "),o("div",{staticClass:"u-cell u-cell--xlarge--1-3"},[o("FieldCoin",{attrs:{"data-test-id":"convertBuyInputSellCoin",$value:t.$v.form.coinFrom,label:t.$td("Coin to spend","form.convert-buy-coin-spend"),"coin-list":n},model:{value:t.form.coinFrom,callback:function(e){t.$set(t.form,"coinFrom",e)},expression:"form.coinFrom"}}),t._v(" "),t.$v.form.coinFrom.$dirty&&!t.$v.form.coinFrom.required?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Enter coin symbol","form.coin-error-required")))]):t.$v.form.coinFrom.$dirty&&!t.$v.form.coinFrom.minLength?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Min 3 letters","form.coin-error-min")))]):t.$v.form.coinFrom.$dirty&&!t.$v.form.coinFrom.maxLength?o("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Max 10 letters","form.coin-error-max")))]):t._e()],1)]}},{key:"submit-title",fn:function(){return[t._v("\n        "+t._s(t.$td("Buy","form.convert-buy-button"))+"\n    ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[o("h1",{staticClass:"panel__header-title"},[o("img",{staticClass:"panel__header-title-icon",attrs:{src:t.BASE_URL_PREFIX+"/img/icon-feature-convert.svg",alt:"",role:"presentation",width:"40",height:"40"}}),t._v("\n            "+t._s(t.$td("Convert Coins","convert.convert-title"))+"\n        ")])]},proxy:!0},{key:"confirm-modal-body",fn:function(){return[o("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin"},[o("div",{staticClass:"u-cell"},[o("label",{staticClass:"form-field form-field--dashed"},[o("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:"",tabindex:"-1"},domProps:{value:t.form.coinTo+" "+t.prettyExact(t.form.buyAmount)}}),t._v(" "),o("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("You buy","form.convert-buy-confirm-get")))])])]),t._v(" "),o("div",{staticClass:"u-cell"},[t.estimation?[o("label",{staticClass:"form-field form-field--dashed"},[o("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:"",tabindex:"-1"},domProps:{value:t.form.coinFrom+" "+t.pretty(t.estimation)}}),t._v(" "),o("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("You will pay approximately *","form.convert-buy-confirm-pay-estimation")))])]),t._v(" "),o("div",{staticClass:"form-field__help u-text-left"},[t._v("\n                        "+t._s(t.$td("* The result amount depends on the current rate at the time of the exchange and may differ from the above.","form.convert-confirm-note"))+"\n                    ")])]:[o("label",{staticClass:"form-field form-field--dashed"},[o("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:"",tabindex:"-1"},domProps:{value:t.form.coinFrom}}),t._v(" "),o("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("You will pay","form.convert-buy-confirm-pay")))])])]],2)])]},proxy:!0}])})}),[],!1,null,null,null).exports},fetch:function(t){var e=t.app;return t.store.commit("SET_SECTION_NAME",e.$td("Convert","common.page-convert")),Promise.resolve()},head:function(){var title=Object(n.a)(this.$store.state.sectionName,this.$i18n.locale),t=this.$td("Sell—either partially or fully—a coin that you own or buy a new one.","convert.seo-description"),e="en"===this.$i18n.locale?"":"-"+this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:t},{hid:"og-description",name:"og:description",content:t},{hid:"og-image",name:"og:image",content:"".concat(this.BASE_URL_PREFIX,"/img/social-share-convert").concat(e,".png")}]}}},O=Object(w.a)(B,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"u-section u-container"},[e("CoinSellForm"),this._v(" "),e("CoinSellAllForm"),this._v(" "),e("CoinBuyForm")],1)}),[],!1,null,null,null);e.default=O.exports}}]);