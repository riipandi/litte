(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?f(exports):typeof define==='function'&&define.amd?define(['exports'],f):(g=typeof globalThis!=='undefined'?globalThis:g||self,f(g.litte={}));})(this,(function(exports){'use strict';/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$a=globalThis,e$4=t$a.ShadowRoot&&(void 0===t$a.ShadyCSS||t$a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$6=new WeakMap;let n$5=class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$6.set(s,t));}return t}toString(){return this.cssText}};const r$3=t=>new n$5("string"==typeof t?t:t+"",void 0,s$2),i$5=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$5(o,t,s$2)},S$2=(s,o)=>{if(e$4)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$a.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$k=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$4,defineProperty:e$3,getOwnPropertyDescriptor:h$c,getOwnPropertyNames:r$2,getOwnPropertySymbols:o$5,getPrototypeOf:n$4}=Object,a$i=globalThis,c$j=a$i.trustedTypes,l$1=c$j?c$j.emptyScript:"",p$8=a$i.reactiveElementPolyfillSupport,d$p=(t,s)=>t,u$4={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$2=(t,s)=>!i$4(t,s),b$2={attribute:true,type:String,converter:u$4,reflect:false,useDefault:false,hasChanged:f$2};Symbol.metadata??=Symbol("metadata"),a$i.litPropertyMetadata??=new WeakMap;let y$o=class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$2){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$3(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$c(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$2}static _$Ei(){if(this.hasOwnProperty(d$p("elementProperties")))return;const t=n$4(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$p("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$p("properties"))){const t=this.properties,s=[...r$2(t),...o$5(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$k(s));}else void 0!==s&&i.push(c$k(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$2(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$4).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$4;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f$2)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM();}updated(t){}firstUpdated(t){}};y$o.elementStyles=[],y$o.shadowRootOptions={mode:"open"},y$o[d$p("elementProperties")]=new Map,y$o[d$p("finalized")]=new Map,p$8?.({ReactiveElement:y$o}),(a$i.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$9=globalThis,i$3=t$9.trustedTypes,s$1=i$3?i$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$2="$lit$",h$b=`lit$${Math.random().toFixed(9).slice(2)}$`,o$4="?"+h$b,n$3=`<${o$4}>`,r$1=document,l=()=>r$1.createComment(""),c$i=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a$h=Array.isArray,u$3=t=>a$h(t)||"function"==typeof t?.[Symbol.iterator],d$o="[ \t\n\f\r]",f$1=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,_$1=/>/g,m=RegExp(`>|${d$o}(?:([^\\s"'>=/]+)(${d$o}*=${d$o}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p$7=/'/g,g$1=/"/g,$$1=/^(?:script|style|textarea|title)$/i,y$n=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x$1=y$n(1),T$1=Symbol.for("lit-noChange"),E$1=Symbol.for("lit-nothing"),A$1=new WeakMap,C=r$1.createTreeWalker(r$1,129);function P$1(t,i){if(!a$h(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const V$1=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f$1;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$1?"!--"===u[1]?c=v$1:void 0!==u[1]?c=_$1:void 0!==u[2]?($$1.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f$1,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g$1:p$7):c===g$1||c===p$7?c=m:c===v$1||c===_$1?c=f$1:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f$1?s+n$3:d>=0?(o.push(a),s.slice(0,d)+e$2+s.slice(d)+h$b+x):s+h$b+(-2===d?i:x);}return [P$1(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};let N$1=class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V$1(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$2)){const i=v[a++],s=r.getAttribute(t).split(h$b),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H$1:"?"===e[1]?I$1:"@"===e[1]?L$1:k$1}),r.removeAttribute(t);}else t.startsWith(h$b)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($$1.test(r.tagName)){const t=r.textContent.split(h$b),s=t.length-1;if(s>0){r.textContent=i$3?i$3.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$4)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h$b,t+1));)d.push({type:7,index:c}),t+=h$b.length-1;}c++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}};function S$1(t,i,s=t,e){if(i===T$1)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c$i(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S$1(t,h._$AS(t,i.values),h,e)),i}let M$1=class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$1).importNode(i,true);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R$1(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z$1(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$1,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}};let R$1=class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S$1(this,t,i),c$i(t)?t===E$1||null==t||""===t?(this._$AH!==E$1&&this._$AR(),this._$AH=E$1):t!==this._$AH&&t!==T$1&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u$3(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E$1&&c$i(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$1.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N$1.createElement(P$1(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M$1(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A$1.get(t.strings);return void 0===i&&A$1.set(t.strings,i=new N$1(t)),i}k(t){a$h(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(false,true,i);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}};let k$1=class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E$1;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=S$1(this,t,i,0),o=!c$i(t)||t!==this._$AH&&t!==T$1,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S$1(this,e[s+n],i,n),r===T$1&&(r=this._$AH[n]),o||=!c$i(r)||r!==this._$AH[n],r===E$1?t=E$1:t!==E$1&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}};let H$1=class H extends k$1{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E$1?void 0:t;}};let I$1=class I extends k$1{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E$1);}};let L$1=class L extends k$1{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S$1(this,t,i,0)??E$1)===T$1)return;const s=this._$AH,e=t===E$1&&s!==E$1||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E$1&&(s===E$1||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}};let z$1=class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S$1(this,t);}};const j$1=t$9.litHtmlPolyfillSupport;j$1?.(N$1,R$1),(t$9.litHtmlVersions??=[]).push("3.3.1");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R$1(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;let i$2=class i extends y$o{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return T$1}};i$2._$litElement$=true,i$2["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i$2});const o$3=s.litElementPolyfillSupport;o$3?.({LitElement:i$2});(s.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$8=t=>(e,o)=>{ void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$2={attribute:true,type:String,converter:u$4,reflect:false,hasChanged:f$2},r=(t=o$2,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=true),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$2(t){return (e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function c$h(o,e,n,t){var l=arguments.length,r=l<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,n):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,n,t);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(r=(l<3?i(r):l>3?i(e,n,r):i(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r}typeof SuppressedError=="function"&&SuppressedError;let b$1=class b extends i$2{};const d$n=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteActionBar=class s extends b$1{static{this.styles=d$n;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};c$h([n$2({type:Boolean,reflect:true})],exports.LitteActionBar.prototype,"disabled",null),c$h([n$2({type:Boolean,reflect:true})],exports.LitteActionBar.prototype,"loading",null),exports.LitteActionBar=c$h([t$8("litte-action-bar")],exports.LitteActionBar);function a$g(l,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(l,e,o,t);else for(var p=l.length-1;p>=0;p--)(i=l[p])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$m=class y extends i$2{};const d$m=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteAlert=class s extends y$m{static{this.styles=d$m;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};a$g([n$2({type:Boolean,reflect:true})],exports.LitteAlert.prototype,"disabled",null),a$g([n$2({type:Boolean,reflect:true})],exports.LitteAlert.prototype,"loading",null),exports.LitteAlert=a$g([t$8("litte-alert")],exports.LitteAlert);/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate$5(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

let t$7=class t extends i$2{};

const autocompleteStyles = i$5 `
  :host {
    display: inline-block;
  }
`;

exports.LitteAutocomplete = class LitteAutocomplete extends t$7 {
    static { this.styles = autocompleteStyles; }
    #disabled_accessor_storage = false;
    /** Disable the button */
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #loading_accessor_storage = false;
    /** Show loading state */
    get loading() { return this.#loading_accessor_storage; }
    set loading(value) { this.#loading_accessor_storage = value; }
    render() {
        return x$1 `/* Add html element implementation here*/`;
    }
};
__decorate$5([
    n$2({ type: Boolean, reflect: true })
], exports.LitteAutocomplete.prototype, "disabled", null);
__decorate$5([
    n$2({ type: Boolean, reflect: true })
], exports.LitteAutocomplete.prototype, "loading", null);
exports.LitteAutocomplete = __decorate$5([
    t$8('litte-autocomplete')
], exports.LitteAutocomplete);function e$1(a,r,i,o){var p=arguments.length,n=p<3?r:o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,r,i,o);else for(var d=a.length-1;d>=0;d--)(l=a[d])&&(n=(p<3?l(n):p>3?l(r,i,n):l(r,i))||n);return p>3&&n&&Object.defineProperty(r,i,n),n}typeof SuppressedError=="function"&&SuppressedError;class g extends i$2{}const h$a=i$5`
  :host {
    display: inline-block;
  }
  .root {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    aspect-ratio: 1;
    line-height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background: #f3f3f3;
    width: 36px;
    height: 36px;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
  .--variant-faded.--color-neutral { color: #666; }
  .--variant-faded.--color-critical { color: #d32f2f; }
  .--variant-faded.--color-positive { color: #388e3c; }
  .--variant-faded.--color-warning { color: #fbc02d; }
  .--variant-faded.--color-primary { color: #1976d2; }
  .--squared { border-radius: 8px; }
`;exports.LitteAvatar=class t extends g{constructor(){super(...arguments),this.squared=false,this.variant="solid",this.color="neutral",this.size=36;}static{this.styles=h$a;}render(){const r=["root",this.squared?"--squared":"",this.variant==="faded"?"--variant-faded":"",this.color?`--color-${this.color}`:"",this.class??""].filter(Boolean).join(" "),i=`
      width: ${this.size}px;
      height: ${this.size}px;
      font-size: ${Math.round(this.size/3)}px;
    `;return x$1`
      <div class="${r}" style="${i}">
        ${this.src?x$1`<img class="img" src="${this.src}" alt="${this.alt??""}" />`:this.initials?x$1`<span>${this.initials}</span>`:this.icon?x$1`<span>${this.icon}</span>`:E$1}
      </div>
    `}};e$1([n$2({type:String})],exports.LitteAvatar.prototype,"src",void 0),e$1([n$2({type:String})],exports.LitteAvatar.prototype,"alt",void 0),e$1([n$2({type:String})],exports.LitteAvatar.prototype,"initials",void 0),e$1([n$2({type:String})],exports.LitteAvatar.prototype,"icon",void 0),e$1([n$2({type:Boolean})],exports.LitteAvatar.prototype,"squared",void 0),e$1([n$2({type:String})],exports.LitteAvatar.prototype,"variant",void 0),e$1([n$2({type:String})],exports.LitteAvatar.prototype,"color",void 0),e$1([n$2({type:Number})],exports.LitteAvatar.prototype,"size",void 0),e$1([n$2({type:String})],exports.LitteAvatar.prototype,"class",void 0),exports.LitteAvatar=e$1([t$8("litte-avatar")],exports.LitteAvatar);function a$f(o,e,s,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,s,t);else for(var p=o.length-1;p>=0;p--)(i=o[p])&&(r=(n<3?i(r):n>3?i(e,s,r):i(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}typeof SuppressedError=="function"&&SuppressedError;let h$9=class h extends i$2{};const c$g=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteBadge=class l extends h$9{static{this.styles=c$g;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};a$f([n$2({type:Boolean,reflect:true})],exports.LitteBadge.prototype,"disabled",null),a$f([n$2({type:Boolean,reflect:true})],exports.LitteBadge.prototype,"loading",null),exports.LitteBadge=a$f([t$8("litte-badge")],exports.LitteBadge);function p$6(s,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,o,t);else for(var c=s.length-1;c>=0;c--)(i=s[c])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r}typeof SuppressedError=="function"&&SuppressedError;let h$8=class h extends i$2{};const d$l=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteBreadcrumbs=class l extends h$8{static{this.styles=d$l;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};p$6([n$2({type:Boolean,reflect:true})],exports.LitteBreadcrumbs.prototype,"disabled",null),p$6([n$2({type:Boolean,reflect:true})],exports.LitteBreadcrumbs.prototype,"loading",null),exports.LitteBreadcrumbs=p$6([t$8("litte-breadcrumbs")],exports.LitteBreadcrumbs);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$6={ATTRIBUTE:1},e=t=>(...e)=>({_$litDirective$:t,values:e});let i$1=class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n$1="important",i=" !"+n$1,o$1=e(class extends i$1{constructor(t){if(super(t),t.type!==t$6.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n$1:""):s[t]=e;}}return T$1}});function $(i,t,o,e){var r=arguments.length,n=r<3?t:e===null?e=Object.getOwnPropertyDescriptor(t,o):e,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,o,e);else for(var u=i.length-1;u>=0;u--)(s=i[u])&&(n=(r<3?s(n):r>3?s(t,o,n):s(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n}typeof SuppressedError=="function"&&SuppressedError;let X=class extends i$2{};function I(i){return typeof i=="string"||typeof i=="number"?String(i):Array.isArray(i)?i.map(I).filter(Boolean).join(" "):typeof i=="object"&&i!==null?Object.entries(i).filter(([t,o])=>!!o).map(([t])=>t).join(" "):""}function tt(...i){return i.map(I).filter(Boolean).join(" ")}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,S=M.trustedTypes,O=S?S.createPolicy("lit-html",{createHTML:i=>i}):void 0,L="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+f,et=`<${R}>`,_=document,N=()=>_.createComment(""),x=i=>i===null||typeof i!="object"&&typeof i!="function",j=Array.isArray,ot=i=>j(i)||typeof i?.[Symbol.iterator]=="function",z=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,U=/>/g,A=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,V=/"/g,W=/^(?:script|style|textarea|title)$/i,H=Symbol.for("lit-noChange"),c$f=Symbol.for("lit-nothing"),Y=new WeakMap,v=_.createTreeWalker(_,129);function F(i,t){if(!j(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return O!==void 0?O.createHTML(t):t}const rt=(i,t)=>{const o=i.length-1,e=[];let r,n=t===2?"<svg>":t===3?"<math>":"",s=k;for(let u=0;u<o;u++){const l=i[u];let h,d,a=-1,g=0;for(;g<l.length&&(s.lastIndex=g,d=s.exec(l),d!==null);)g=s.lastIndex,s===k?d[1]==="!--"?s=P:d[1]!==void 0?s=U:d[2]!==void 0?(W.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=A):d[3]!==void 0&&(s=A):s===A?d[0]===">"?(s=r??k,a=-1):d[1]===void 0?a=-2:(a=s.lastIndex-d[2].length,h=d[1],s=d[3]===void 0?A:d[3]==='"'?V:D):s===V||s===D?s=A:s===P||s===U?s=k:(s=A,r=void 0);const b=s===A&&i[u+1].startsWith("/>")?" ":"";n+=s===k?l+et:a>=0?(e.push(h),l.slice(0,a)+L+l.slice(a)+f+b):l+f+(a===-2?u:b);}return [F(i,n+(i[o]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),e]};class w{constructor({strings:t,_$litType$:o},e){let r;this.parts=[];let n=0,s=0;const u=t.length-1,l=this.parts,[h,d]=rt(t,o);if(this.el=w.createElement(h,e),v.currentNode=this.el.content,o===2||o===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes);}for(;(r=v.nextNode())!==null&&l.length<u;){if(r.nodeType===1){if(r.hasAttributes())for(const a of r.getAttributeNames())if(a.endsWith(L)){const g=d[s++],b=r.getAttribute(a).split(f),C=/([.?@])?(.*)/.exec(g);l.push({type:1,index:n,name:C[2],strings:b,ctor:C[1]==="."?nt:C[1]==="?"?st:C[1]==="@"?lt:T}),r.removeAttribute(a);}else a.startsWith(f)&&(l.push({type:6,index:n}),r.removeAttribute(a));if(W.test(r.tagName)){const a=r.textContent.split(f),g=a.length-1;if(g>0){r.textContent=S?S.emptyScript:"";for(let b=0;b<g;b++)r.append(a[b],N()),v.nextNode(),l.push({type:2,index:++n});r.append(a[g],N());}}}else if(r.nodeType===8)if(r.data===R)l.push({type:2,index:n});else {let a=-1;for(;(a=r.data.indexOf(f,a+1))!==-1;)l.push({type:7,index:n}),a+=f.length-1;}n++;}}static createElement(t,o){const e=_.createElement("template");return e.innerHTML=t,e}}function y$l(i,t,o=i,e){if(t===H)return t;let r=e!==void 0?o._$Co?.[e]:o._$Cl;const n=x(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(false),n===void 0?r=void 0:(r=new n(i),r._$AT(i,o,e)),e!==void 0?(o._$Co??=[])[e]=r:o._$Cl=r),r!==void 0&&(t=y$l(i,r._$AS(i,t.values),r,e)),t}class it{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:e}=this._$AD,r=(t?.creationScope??_).importNode(o,true);v.currentNode=r;let n=v.nextNode(),s=0,u=0,l=e[0];for(;l!==void 0;){if(s===l.index){let h;l.type===2?h=new E(n,n.nextSibling,this,t):l.type===1?h=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(h=new at(n,this,t)),this._$AV.push(h),l=e[++u];}s!==l?.index&&(n=v.nextNode(),s++);}return v.currentNode=_,r}p(t){let o=0;for(const e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(t,e,o),o+=e.strings.length-2):e._$AI(t[o])),o++;}}class E{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,o,e,r){this.type=2,this._$AH=c$f,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=e,this.options=r,this._$Cv=r?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&t?.nodeType===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=y$l(this,t,o),x(t)?t===c$f||t==null||t===""?(this._$AH!==c$f&&this._$AR(),this._$AH=c$f):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ot(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==c$f&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t;}$(t){const{values:o,_$litType$:e}=t,r=typeof e=="number"?this._$AC(t):(e.el===void 0&&(e.el=w.createElement(F(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===r)this._$AH.p(o);else {const n=new it(r,this),s=n.u(this.options);n.p(o),this.T(s),this._$AH=n;}}_$AC(t){let o=Y.get(t.strings);return o===void 0&&Y.set(t.strings,o=new w(t)),o}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let e,r=0;for(const n of t)r===o.length?o.push(e=new E(this.O(N()),this.O(N()),this,this.options)):e=o[r],e._$AI(n),r++;r<o.length&&(this._$AR(e&&e._$AB.nextSibling,r),o.length=r);}_$AR(t=this._$AA.nextSibling,o){for(this._$AP?.(false,true,o);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e;}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t));}}class T{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,e,r,n){this.type=1,this._$AH=c$f,this._$AN=void 0,this.element=t,this.name=o,this._$AM=r,this.options=n,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=c$f;}_$AI(t,o=this,e,r){const n=this.strings;let s=false;if(n===void 0)t=y$l(this,t,o,0),s=!x(t)||t!==this._$AH&&t!==H,s&&(this._$AH=t);else {const u=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=y$l(this,u[e+l],o,l),h===H&&(h=this._$AH[l]),s||=!x(h)||h!==this._$AH[l],h===c$f?t=c$f:t!==c$f&&(t+=(h??"")+n[l+1]),this._$AH[l]=h;}s&&!r&&this.j(t);}j(t){t===c$f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class nt extends T{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===c$f?void 0:t;}}class st extends T{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c$f);}}class lt extends T{constructor(t,o,e,r,n){super(t,o,e,r,n),this.type=5;}_$AI(t,o=this){if((t=y$l(this,t,o,0)??c$f)===H)return;const e=this._$AH,r=t===c$f&&e!==c$f||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==c$f&&(e===c$f||r);r&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class at{constructor(t,o,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=e;}get _$AU(){return this._$AM._$AU}_$AI(t){y$l(this,t);}}const ct=M.litHtmlPolyfillSupport;ct?.(w,E),(M.litHtmlVersions??=[]).push("3.3.1");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=i=>i??c$f,Z=i$5`
  :host {
    display: inline-block;
  }

  .litte-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;
    border-radius: var(--lt-radius-medium);
    font-family: var(--lt-font-family-body);
    font-weight: var(--lt-font-weight-medium);
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    outline: none;
    user-select: none;
    white-space: nowrap;
  }

  /* Variants */
  .litte-button--primary {
    background-color: var(--lt-color-background-primary);
    color: var(--lt-color-white);
    box-shadow: var(--lt-shadow-raised);
  }

  .litte-button--primary:hover:not(:disabled) {
    background-color: var(--lt-color-background-primary);
    color: var(--lt-color-white);
    opacity: 0.9;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .litte-button--primary:active:not(:disabled) {
    background-color: var(--lt-color-border-primary-faded);
    transform: translateY(1px);
  }

  .litte-button--secondary {
    background-color: var(--lt-color-background-neutral);
    color: var(--lt-color-foreground-neutral);
    box-shadow: var(--lt-shadow-raised);
  }

  .litte-button--secondary:hover:not(:disabled) {
    background-color: var(--lt-color-background-neutral-faded);
    color: var(--lt-color-foreground-neutral-faded);
  }

  .litte-button--secondary:active:not(:disabled) {
    background-color: var(--lt-color-border-neutral);
    transform: translateY(1px);
  }

  .litte-button--outline {
    background-color: transparent;
    color: var(--lt-color-background-primary);
    border: 1px solid var(--lt-color-background-primary);
  }

  .litte-button--outline:hover:not(:disabled) {
    background-color: var(--lt-color-background-primary);
    color: var(--lt-color-white);
  }

  .litte-button--outline:active:not(:disabled) {
    background-color: var(--lt-color-border-primary);
    transform: translateY(1px);
  }

  .litte-button--ghost {
    background-color: transparent;
    color: var(--lt-color-foreground-neutral);
  }

  .litte-button--ghost:hover:not(:disabled) {
    background-color: var(--lt-color-background-neutral);
    color: var(--lt-color-foreground-neutral-faded);
  }

  .litte-button--ghost:active:not(:disabled) {
    background-color: var(--lt-color-background-neutral-faded);
    transform: translateY(1px);
  }

  /* Sizes */
  .litte-button--xs {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .litte-button--sm {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .litte-button--md {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .litte-button--lg {
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .litte-button--xl {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  /* States */
  .litte-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .litte-button--loading {
    cursor: wait;
  }

  .litte-button--loading slot {
    opacity: 0.7;
  }

  /* Loading spinner */
  .litte-button__spinner {
    width: 1em;
    height: 1em;
    border: 2px solid transparent;
    border-top: 2px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Focus styles */
  .litte-button:focus-visible {
    outline: 2px solid var(--lt-color-background-primary);
    outline-offset: 2px;
  }

  .litte-button--outline:focus-visible {
    outline-color: var(--lt-color-background-primary);
  }

  .litte-button--secondary:focus-visible {
    outline-color: var(--lt-color-foreground-neutral);
  }

  .litte-button--ghost:focus-visible {
    outline-color: var(--lt-color-foreground-neutral);
  }
`;exports.LitteButton=class p extends X{static{this.styles=Z;}#t="button";get type(){return this.#t}set type(t){this.#t=t;}#e="primary";get variant(){return this.#e}set variant(t){this.#e=t;}#o="md";get size(){return this.#o}set size(t){this.#o=t;}#r=false;get disabled(){return this.#r}set disabled(t){this.#r=t;}#i=false;get loading(){return this.#i}set loading(t){this.#i=t;}#n="";get color(){return this.#n}set color(t){this.#n=t;}#s="";get backgroundColor(){return this.#s}set backgroundColor(t){this.#s=t;}_handleClick(t){(this.disabled||this.loading)&&(t.preventDefault(),t.stopPropagation());}render(){const t=tt("litte-button",`litte-button--${this.variant}`,`litte-button--${this.size}`,{"litte-button--disabled":this.disabled,"litte-button--loading":this.loading}),o=o$1({...this.backgroundColor?{backgroundColor:this.backgroundColor}:{},...this.color?{color:this.color}:{}});return x$1`
      <button
        part="button"
        type=${ht(this.type)}
        class=${t}
        style=${o}
        ?disabled=${this.disabled||this.loading}
        aria-disabled=${this.disabled?"true":"false"}
        aria-busy=${this.loading?"true":"false"}
        @click=${this._handleClick}
      >
        ${this.loading?x$1`<span class="litte-button__spinner" part="spinner" aria-hidden="true"></span>`:E$1}
        <slot></slot>
      </button>
    `}};$([n$2({type:String,reflect:true})],exports.LitteButton.prototype,"type",null),$([n$2({type:String,reflect:true})],exports.LitteButton.prototype,"variant",null),$([n$2({type:String,reflect:true})],exports.LitteButton.prototype,"size",null),$([n$2({type:Boolean,reflect:true})],exports.LitteButton.prototype,"disabled",null),$([n$2({type:Boolean,reflect:true})],exports.LitteButton.prototype,"loading",null),$([n$2({type:String,reflect:true})],exports.LitteButton.prototype,"color",null),$([n$2({type:String,reflect:true})],exports.LitteButton.prototype,"backgroundColor",null),exports.LitteButton=$([t$8("litte-button")],exports.LitteButton);function p$5(l,e,n,t){var s=arguments.length,r=s<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,n):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(l,e,n,t);else for(var a=l.length-1;a>=0;a--)(i=l[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$k=class y extends i$2{};const c$e=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteCalendar=class o extends y$k{static{this.styles=c$e;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};p$5([n$2({type:Boolean,reflect:true})],exports.LitteCalendar.prototype,"disabled",null),p$5([n$2({type:Boolean,reflect:true})],exports.LitteCalendar.prototype,"loading",null),exports.LitteCalendar=p$5([t$8("litte-calendar")],exports.LitteCalendar);function a$e(o,e,s,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,s,t);else for(var p=o.length-1;p>=0;p--)(i=o[p])&&(r=(n<3?i(r):n>3?i(e,s,r):i(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$j=class y extends i$2{};const c$d=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteCard=class l extends y$j{static{this.styles=c$d;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};a$e([n$2({type:Boolean,reflect:true})],exports.LitteCard.prototype,"disabled",null),a$e([n$2({type:Boolean,reflect:true})],exports.LitteCard.prototype,"loading",null),exports.LitteCard=a$e([t$8("litte-card")],exports.LitteCard);function a$d(o,e,s,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,s,t);else for(var p=o.length-1;p>=0;p--)(i=o[p])&&(r=(n<3?i(r):n>3?i(e,s,r):i(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$i=class y extends i$2{};const u$2=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteCarousel=class l extends y$i{static{this.styles=u$2;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};a$d([n$2({type:Boolean,reflect:true})],exports.LitteCarousel.prototype,"disabled",null),a$d([n$2({type:Boolean,reflect:true})],exports.LitteCarousel.prototype,"loading",null),exports.LitteCarousel=a$d([t$8("litte-carousel")],exports.LitteCarousel);function p$4(o,e,s,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,s,t);else for(var c=o.length-1;c>=0;c--)(i=o[c])&&(r=(n<3?i(r):n>3?i(e,s,r):i(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}typeof SuppressedError=="function"&&SuppressedError;class b extends i$2{}const d$k=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteCheckbox=class l extends b{static{this.styles=d$k;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};p$4([n$2({type:Boolean,reflect:true})],exports.LitteCheckbox.prototype,"disabled",null),p$4([n$2({type:Boolean,reflect:true})],exports.LitteCheckbox.prototype,"loading",null),exports.LitteCheckbox=p$4([t$8("litte-checkbox")],exports.LitteCheckbox);function c$c(n,e,o,t){var l=arguments.length,r=l<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,o,t);else for(var p=n.length-1;p>=0;p--)(i=n[p])&&(r=(l<3?i(r):l>3?i(e,o,r):i(e,o))||r);return l>3&&r&&Object.defineProperty(e,o,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$h=class y extends i$2{};const a$c=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteContextMenu=class s extends y$h{static{this.styles=a$c;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};c$c([n$2({type:Boolean,reflect:true})],exports.LitteContextMenu.prototype,"disabled",null),c$c([n$2({type:Boolean,reflect:true})],exports.LitteContextMenu.prototype,"loading",null),exports.LitteContextMenu=c$c([t$8("litte-context-menu")],exports.LitteContextMenu);/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate$4(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

let t$5=class t extends i$2{};

const dividerStyles = i$5 `
  :host {
    display: inline-block;
  }
`;

exports.LitteDivider = class LitteDivider extends t$5 {
    static { this.styles = dividerStyles; }
    #disabled_accessor_storage = false;
    /** Disable the button */
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #loading_accessor_storage = false;
    /** Show loading state */
    get loading() { return this.#loading_accessor_storage; }
    set loading(value) { this.#loading_accessor_storage = value; }
    render() {
        return x$1 `/* Add html element implementation here*/`;
    }
};
__decorate$4([
    n$2({ type: Boolean, reflect: true })
], exports.LitteDivider.prototype, "disabled", null);
__decorate$4([
    n$2({ type: Boolean, reflect: true })
], exports.LitteDivider.prototype, "loading", null);
exports.LitteDivider = __decorate$4([
    t$8('litte-divider')
], exports.LitteDivider);function d$j(o,e,n,t){var l=arguments.length,r=l<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,n):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,n,t);else for(var p=o.length-1;p>=0;p--)(i=o[p])&&(r=(l<3?i(r):l>3?i(e,n,r):i(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$g=class y extends i$2{};const c$b=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteDropdownMenu=class s extends y$g{static{this.styles=c$b;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};d$j([n$2({type:Boolean,reflect:true})],exports.LitteDropdownMenu.prototype,"disabled",null),d$j([n$2({type:Boolean,reflect:true})],exports.LitteDropdownMenu.prototype,"loading",null),exports.LitteDropdownMenu=d$j([t$8("litte-dropdown-menu")],exports.LitteDropdownMenu);let t$4=class t extends i$2{};function n(r){return typeof r=="string"||typeof r=="number"?String(r):Array.isArray(r)?r.map(n).filter(Boolean).join(" "):typeof r=="object"&&r!==null?Object.entries(r).filter(([e,t])=>!!t).map(([e])=>e).join(" "):""}function o(...r){return r.map(n).filter(Boolean).join(" ")}function a$b(l,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(l,e,o,t);else for(var p=l.length-1;p>=0;p--)(i=l[p])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$f=class y extends i$2{};const c$a=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteFileUpload=class s extends y$f{static{this.styles=c$a;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};a$b([n$2({type:Boolean,reflect:true})],exports.LitteFileUpload.prototype,"disabled",null),a$b([n$2({type:Boolean,reflect:true})],exports.LitteFileUpload.prototype,"loading",null),exports.LitteFileUpload=a$b([t$8("litte-file-upload")],exports.LitteFileUpload);function c$9(o,e,s,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,s,t);else for(var p=o.length-1;p>=0;p--)(i=o[p])&&(r=(n<3?i(r):n>3?i(e,s,r):i(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$e=class y extends i$2{};const d$i=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteHotkey=class l extends y$e{static{this.styles=d$i;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};c$9([n$2({type:Boolean,reflect:true})],exports.LitteHotkey.prototype,"disabled",null),c$9([n$2({type:Boolean,reflect:true})],exports.LitteHotkey.prototype,"loading",null),exports.LitteHotkey=c$9([t$8("litte-hotkey")],exports.LitteHotkey);function c$8(n,e,l,t){var s=arguments.length,r=s<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,l):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,l,t);else for(var p=n.length-1;p>=0;p--)(i=n[p])&&(r=(s<3?i(r):s>3?i(e,l,r):i(e,l))||r);return s>3&&r&&Object.defineProperty(e,l,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$d=class y extends i$2{};const d$h=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteLink=class o extends y$d{static{this.styles=d$h;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};c$8([n$2({type:Boolean,reflect:true})],exports.LitteLink.prototype,"disabled",null),c$8([n$2({type:Boolean,reflect:true})],exports.LitteLink.prototype,"loading",null),exports.LitteLink=c$8([t$8("litte-link")],exports.LitteLink);function a$a(o,e,l,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,l):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,l,t);else for(var p=o.length-1;p>=0;p--)(i=o[p])&&(r=(n<3?i(r):n>3?i(e,l,r):i(e,l))||r);return n>3&&r&&Object.defineProperty(e,l,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$c=class y extends i$2{};const c$7=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteLoader=class s extends y$c{static{this.styles=c$7;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};a$a([n$2({type:Boolean,reflect:true})],exports.LitteLoader.prototype,"disabled",null),a$a([n$2({type:Boolean,reflect:true})],exports.LitteLoader.prototype,"loading",null),exports.LitteLoader=a$a([t$8("litte-loader")],exports.LitteLoader);function u$1(n,e,o,t){var l=arguments.length,r=l<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,o,t);else for(var p=n.length-1;p>=0;p--)(i=n[p])&&(r=(l<3?i(r):l>3?i(e,o,r):i(e,o))||r);return l>3&&r&&Object.defineProperty(e,o,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$b=class y extends i$2{};const a$9=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteMenuItem=class s extends y$b{static{this.styles=a$9;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};u$1([n$2({type:Boolean,reflect:true})],exports.LitteMenuItem.prototype,"disabled",null),u$1([n$2({type:Boolean,reflect:true})],exports.LitteMenuItem.prototype,"loading",null),exports.LitteMenuItem=u$1([t$8("litte-menu-item")],exports.LitteMenuItem);function d$g(o,e,l,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,l):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,l,t);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(r=(n<3?i(r):n>3?i(e,l,r):i(e,l))||r);return n>3&&r&&Object.defineProperty(e,l,r),r}typeof SuppressedError=="function"&&SuppressedError;let h$7=class h extends i$2{};const c$6=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteModalDialog=class s extends h$7{static{this.styles=c$6;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};d$g([n$2({type:Boolean,reflect:true})],exports.LitteModalDialog.prototype,"disabled",null),d$g([n$2({type:Boolean,reflect:true})],exports.LitteModalDialog.prototype,"loading",null),exports.LitteModalDialog=d$g([t$8("litte-modal-dialog")],exports.LitteModalDialog);/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate$3(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

let t$3=class t extends i$2{};

const numberFieldStyles = i$5 `
  :host {
    display: inline-block;
  }
`;

exports.LitteNumberField = class LitteNumberField extends t$3 {
    static { this.styles = numberFieldStyles; }
    #disabled_accessor_storage = false;
    /** Disable the button */
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #loading_accessor_storage = false;
    /** Show loading state */
    get loading() { return this.#loading_accessor_storage; }
    set loading(value) { this.#loading_accessor_storage = value; }
    render() {
        return x$1 `/* Add html element implementation here*/`;
    }
};
__decorate$3([
    n$2({ type: Boolean, reflect: true })
], exports.LitteNumberField.prototype, "disabled", null);
__decorate$3([
    n$2({ type: Boolean, reflect: true })
], exports.LitteNumberField.prototype, "loading", null);
exports.LitteNumberField = __decorate$3([
    t$8('litte-number-field')
], exports.LitteNumberField);function a$8(l,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(l,e,o,t);else for(var p=l.length-1;p>=0;p--)(i=l[p])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r}typeof SuppressedError=="function"&&SuppressedError;let h$6=class h extends i$2{};const d$f=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteOverlay=class s extends h$6{static{this.styles=d$f;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};a$8([n$2({type:Boolean,reflect:true})],exports.LitteOverlay.prototype,"disabled",null),a$8([n$2({type:Boolean,reflect:true})],exports.LitteOverlay.prototype,"loading",null),exports.LitteOverlay=a$8([t$8("litte-overlay")],exports.LitteOverlay);function p$3(n,e,o,t){var l=arguments.length,r=l<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,o,t);else for(var a=n.length-1;a>=0;a--)(i=n[a])&&(r=(l<3?i(r):l>3?i(e,o,r):i(e,o))||r);return l>3&&r&&Object.defineProperty(e,o,r),r}typeof SuppressedError=="function"&&SuppressedError;let h$5=class h extends i$2{};const d$e=i$5`
  :host {
    display: inline-block;
  }
`;exports.LittePagination=class s extends h$5{static{this.styles=d$e;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};p$3([n$2({type:Boolean,reflect:true})],exports.LittePagination.prototype,"disabled",null),p$3([n$2({type:Boolean,reflect:true})],exports.LittePagination.prototype,"loading",null),exports.LittePagination=p$3([t$8("litte-pagination")],exports.LittePagination);function d$d(l,e,n,t){var s=arguments.length,r=s<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,n):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(l,e,n,t);else for(var p=l.length-1;p>=0;p--)(i=l[p])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$a=class y extends i$2{};const a$7=i$5`
  :host {
    display: inline-block;
  }
`;exports.LittePinField=class o extends y$a{static{this.styles=a$7;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};d$d([n$2({type:Boolean,reflect:true})],exports.LittePinField.prototype,"disabled",null),d$d([n$2({type:Boolean,reflect:true})],exports.LittePinField.prototype,"loading",null),exports.LittePinField=d$d([t$8("litte-pin-field")],exports.LittePinField);function c$5(o,e,s,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,s,t);else for(var i=o.length-1;i>=0;i--)(p=o[i])&&(r=(n<3?p(r):n>3?p(e,s,r):p(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$9=class y extends i$2{};const d$c=i$5`
  :host {
    display: inline-block;
  }
`;exports.LittePopover=class l extends y$9{static{this.styles=d$c;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};c$5([n$2({type:Boolean,reflect:true})],exports.LittePopover.prototype,"disabled",null),c$5([n$2({type:Boolean,reflect:true})],exports.LittePopover.prototype,"loading",null),exports.LittePopover=c$5([t$8("litte-popover")],exports.LittePopover);function a$6(s,e,o,r){var n=arguments.length,t=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(s,e,o,r);else for(var p=s.length-1;p>=0;p--)(i=s[p])&&(t=(n<3?i(t):n>3?i(e,o,t):i(e,o))||t);return n>3&&t&&Object.defineProperty(e,o,t),t}typeof SuppressedError=="function"&&SuppressedError;let h$4=class h extends i$2{};const d$b=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteProgressBar=class l extends h$4{static{this.styles=d$b;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#r=false;get loading(){return this.#r}set loading(e){this.#r=e;}render(){return x$1`/* Add html element implementation here*/`}};a$6([n$2({type:Boolean,reflect:true})],exports.LitteProgressBar.prototype,"disabled",null),a$6([n$2({type:Boolean,reflect:true})],exports.LitteProgressBar.prototype,"loading",null),exports.LitteProgressBar=a$6([t$8("litte-progress-bar")],exports.LitteProgressBar);function c$4(o,e,s,t){var l=arguments.length,r=l<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,s,t);else for(var p=o.length-1;p>=0;p--)(i=o[p])&&(r=(l<3?i(r):l>3?i(e,s,r):i(e,s))||r);return l>3&&r&&Object.defineProperty(e,s,r),r}typeof SuppressedError=="function"&&SuppressedError;let h$3=class h extends i$2{};const d$a=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteProgressIndicator=class n extends h$3{static{this.styles=d$a;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};c$4([n$2({type:Boolean,reflect:true})],exports.LitteProgressIndicator.prototype,"disabled",null),c$4([n$2({type:Boolean,reflect:true})],exports.LitteProgressIndicator.prototype,"loading",null),exports.LitteProgressIndicator=c$4([t$8("litte-progress-indicator")],exports.LitteProgressIndicator);function a$5(o,e,s,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,s,t);else for(var p=o.length-1;p>=0;p--)(i=o[p])&&(r=(n<3?i(r):n>3?i(e,s,r):i(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$8=class y extends i$2{};const c$3=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteRadio=class l extends y$8{static{this.styles=c$3;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};a$5([n$2({type:Boolean,reflect:true})],exports.LitteRadio.prototype,"disabled",null),a$5([n$2({type:Boolean,reflect:true})],exports.LitteRadio.prototype,"loading",null),exports.LitteRadio=a$5([t$8("litte-radio")],exports.LitteRadio);/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate$2(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

let t$2=class t extends i$2{};

const scrimStyles = i$5 `
  :host {
    display: inline-block;
  }
`;

exports.LitteScrim = class LitteScrim extends t$2 {
    static { this.styles = scrimStyles; }
    #disabled_accessor_storage = false;
    /** Disable the button */
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #loading_accessor_storage = false;
    /** Show loading state */
    get loading() { return this.#loading_accessor_storage; }
    set loading(value) { this.#loading_accessor_storage = value; }
    render() {
        return x$1 `/* Add html element implementation here*/`;
    }
};
__decorate$2([
    n$2({ type: Boolean, reflect: true })
], exports.LitteScrim.prototype, "disabled", null);
__decorate$2([
    n$2({ type: Boolean, reflect: true })
], exports.LitteScrim.prototype, "loading", null);
exports.LitteScrim = __decorate$2([
    t$8('litte-scrim')
], exports.LitteScrim);function p$2(l,e,s,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(l,e,s,t);else for(var c=l.length-1;c>=0;c--)(i=l[c])&&(r=(n<3?i(r):n>3?i(e,s,r):i(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$7=class y extends i$2{};const d$9=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteSelect=class o extends y$7{static{this.styles=d$9;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};p$2([n$2({type:Boolean,reflect:true})],exports.LitteSelect.prototype,"disabled",null),p$2([n$2({type:Boolean,reflect:true})],exports.LitteSelect.prototype,"loading",null),exports.LitteSelect=p$2([t$8("litte-select")],exports.LitteSelect);function c$2(o,e,l,t){var s=arguments.length,r=s<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,l):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,l,t);else for(var p=o.length-1;p>=0;p--)(i=o[p])&&(r=(s<3?i(r):s>3?i(e,l,r):i(e,l))||r);return s>3&&r&&Object.defineProperty(e,l,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$6=class y extends i$2{};const d$8=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteSkeleton=class n extends y$6{static{this.styles=d$8;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};c$2([n$2({type:Boolean,reflect:true})],exports.LitteSkeleton.prototype,"disabled",null),c$2([n$2({type:Boolean,reflect:true})],exports.LitteSkeleton.prototype,"loading",null),exports.LitteSkeleton=c$2([t$8("litte-skeleton")],exports.LitteSkeleton);function d$7(l,e,s,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(l,e,s,t);else for(var p=l.length-1;p>=0;p--)(i=l[p])&&(r=(n<3?i(r):n>3?i(e,s,r):i(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$5=class y extends i$2{};const a$4=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteSlider=class o extends y$5{static{this.styles=a$4;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};d$7([n$2({type:Boolean,reflect:true})],exports.LitteSlider.prototype,"disabled",null),d$7([n$2({type:Boolean,reflect:true})],exports.LitteSlider.prototype,"loading",null),exports.LitteSlider=d$7([t$8("litte-slider")],exports.LitteSlider);/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate$1(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

let t$1=class t extends i$2{};

const stepperStyles = i$5 `
  :host {
    display: inline-block;
  }
`;

exports.LitteStepper = class LitteStepper extends t$1 {
    static { this.styles = stepperStyles; }
    #disabled_accessor_storage = false;
    /** Disable the button */
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #loading_accessor_storage = false;
    /** Show loading state */
    get loading() { return this.#loading_accessor_storage; }
    set loading(value) { this.#loading_accessor_storage = value; }
    render() {
        return x$1 `/* Add html element implementation here*/`;
    }
};
__decorate$1([
    n$2({ type: Boolean, reflect: true })
], exports.LitteStepper.prototype, "disabled", null);
__decorate$1([
    n$2({ type: Boolean, reflect: true })
], exports.LitteStepper.prototype, "loading", null);
exports.LitteStepper = __decorate$1([
    t$8('litte-stepper')
], exports.LitteStepper);function p$1(s,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,o,t);else for(var c=s.length-1;c>=0;c--)(i=s[c])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$4=class y extends i$2{};const d$6=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteSwitch=class l extends y$4{static{this.styles=d$6;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};p$1([n$2({type:Boolean,reflect:true})],exports.LitteSwitch.prototype,"disabled",null),p$1([n$2({type:Boolean,reflect:true})],exports.LitteSwitch.prototype,"loading",null),exports.LitteSwitch=p$1([t$8("litte-switch")],exports.LitteSwitch);function a$3(l,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(l,e,o,t);else for(var p=l.length-1;p>=0;p--)(i=l[p])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r}typeof SuppressedError=="function"&&SuppressedError;let h$2=class h extends i$2{};const d$5=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteTable=class s extends h$2{static{this.styles=d$5;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};a$3([n$2({type:Boolean,reflect:true})],exports.LitteTable.prototype,"disabled",null),a$3([n$2({type:Boolean,reflect:true})],exports.LitteTable.prototype,"loading",null),exports.LitteTable=a$3([t$8("litte-table")],exports.LitteTable);function a$2(s,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,o,t);else for(var p=s.length-1;p>=0;p--)(i=s[p])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r}typeof SuppressedError=="function"&&SuppressedError;let h$1=class h extends i$2{};const d$4=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteTabs=class l extends h$1{static{this.styles=d$4;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};a$2([n$2({type:Boolean,reflect:true})],exports.LitteTabs.prototype,"disabled",null),a$2([n$2({type:Boolean,reflect:true})],exports.LitteTabs.prototype,"loading",null),exports.LitteTabs=a$2([t$8("litte-tabs")],exports.LitteTabs);function p(o,e,s,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,s):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,s,t);else for(var a=o.length-1;a>=0;a--)(i=o[a])&&(r=(n<3?i(r):n>3?i(e,s,r):i(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$3=class y extends i$2{};const d$3=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteTextArea=class l extends y$3{static{this.styles=d$3;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};p([n$2({type:Boolean,reflect:true})],exports.LitteTextArea.prototype,"disabled",null),p([n$2({type:Boolean,reflect:true})],exports.LitteTextArea.prototype,"loading",null),exports.LitteTextArea=p([t$8("litte-text-area")],exports.LitteTextArea);function d$2(l,e,o,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(l,e,o,t);else for(var p=l.length-1;p>=0;p--)(i=l[p])&&(r=(n<3?i(r):n>3?i(e,o,r):i(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$2=class y extends i$2{};const a$1=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteTextField=class s extends y$2{static{this.styles=a$1;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};d$2([n$2({type:Boolean,reflect:true})],exports.LitteTextField.prototype,"disabled",null),d$2([n$2({type:Boolean,reflect:true})],exports.LitteTextField.prototype,"loading",null),exports.LitteTextField=d$2([t$8("litte-text-field")],exports.LitteTextField);function c$1(l,e,n,t){var s=arguments.length,r=s<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,n):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(l,e,n,t);else for(var p=l.length-1;p>=0;p--)(i=l[p])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r}typeof SuppressedError=="function"&&SuppressedError;let y$1=class y extends i$2{};const d$1=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteTimeline=class o extends y$1{static{this.styles=d$1;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};c$1([n$2({type:Boolean,reflect:true})],exports.LitteTimeline.prototype,"disabled",null),c$1([n$2({type:Boolean,reflect:true})],exports.LitteTimeline.prototype,"loading",null),exports.LitteTimeline=c$1([t$8("litte-timeline")],exports.LitteTimeline);/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

class t extends i$2{}

const toastStyles = i$5 `
  :host {
    display: inline-block;
  }
`;

exports.LitteToast = class LitteToast extends t {
    static { this.styles = toastStyles; }
    #disabled_accessor_storage = false;
    /** Disable the button */
    get disabled() { return this.#disabled_accessor_storage; }
    set disabled(value) { this.#disabled_accessor_storage = value; }
    #loading_accessor_storage = false;
    /** Show loading state */
    get loading() { return this.#loading_accessor_storage; }
    set loading(value) { this.#loading_accessor_storage = value; }
    render() {
        return x$1 `/* Add html element implementation here*/`;
    }
};
__decorate([
    n$2({ type: Boolean, reflect: true })
], exports.LitteToast.prototype, "disabled", null);
__decorate([
    n$2({ type: Boolean, reflect: true })
], exports.LitteToast.prototype, "loading", null);
exports.LitteToast = __decorate([
    t$8('litte-toast')
], exports.LitteToast);function u(o,e,l,t){var s=arguments.length,r=s<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,l):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,l,t);else for(var p=o.length-1;p>=0;p--)(i=o[p])&&(r=(s<3?i(r):s>3?i(e,l,r):i(e,l))||r);return s>3&&r&&Object.defineProperty(e,l,r),r}typeof SuppressedError=="function"&&SuppressedError;class h extends i$2{}const a=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteToggleButton=class n extends h{static{this.styles=a;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};u([n$2({type:Boolean,reflect:true})],exports.LitteToggleButton.prototype,"disabled",null),u([n$2({type:Boolean,reflect:true})],exports.LitteToggleButton.prototype,"loading",null),exports.LitteToggleButton=u([t$8("litte-toggle-button")],exports.LitteToggleButton);function c(o,e,l,t){var n=arguments.length,r=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,l):t,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,l,t);else for(var p=o.length-1;p>=0;p--)(i=o[p])&&(r=(n<3?i(r):n>3?i(e,l,r):i(e,l))||r);return n>3&&r&&Object.defineProperty(e,l,r),r}typeof SuppressedError=="function"&&SuppressedError;class y extends i$2{}const d=i$5`
  :host {
    display: inline-block;
  }
`;exports.LitteTooltip=class s extends y{static{this.styles=d;}#e=false;get disabled(){return this.#e}set disabled(e){this.#e=e;}#t=false;get loading(){return this.#t}set loading(e){this.#t=e;}render(){return x$1`/* Add html element implementation here*/`}};c([n$2({type:Boolean,reflect:true})],exports.LitteTooltip.prototype,"disabled",null),c([n$2({type:Boolean,reflect:true})],exports.LitteTooltip.prototype,"loading",null),exports.LitteTooltip=c([t$8("litte-tooltip")],exports.LitteTooltip);exports.LitteElement=t$4;exports.actionBarStyles=d$n;exports.alertStyles=d$m;exports.autocompleteStyles=autocompleteStyles;exports.avatarStyles=h$a;exports.badgeStyles=c$g;exports.breadcrumbsStyles=d$l;exports.buttonStyles=Z;exports.calendarStyles=c$e;exports.cardStyles=c$d;exports.carouselStyles=u$2;exports.checkboxStyles=d$k;exports.clsx=o;exports.contextMenuStyles=a$c;exports.dividerStyles=dividerStyles;exports.dropdownMenuStyles=c$b;exports.fileUploadStyles=c$a;exports.hotkeyStyles=d$i;exports.linkStyles=d$h;exports.loaderStyles=c$7;exports.menuItemStyles=a$9;exports.modalDialogStyles=c$6;exports.numberFieldStyles=numberFieldStyles;exports.overlayStyles=d$f;exports.paginationStyles=d$e;exports.pinFieldStyles=a$7;exports.popoverStyles=d$c;exports.progressBarStyles=d$b;exports.progressIndicatorStyles=d$a;exports.radioStyles=c$3;exports.scrimStyles=scrimStyles;exports.selectStyles=d$9;exports.skeletonStyles=d$8;exports.sliderStyles=a$4;exports.stepperStyles=stepperStyles;exports.switchStyles=d$6;exports.tableStyles=d$5;exports.tabsStyles=d$4;exports.textAreaStyles=d$3;exports.textFieldStyles=a$1;exports.timelineStyles=d$1;exports.toastStyles=toastStyles;exports.toggleButtonStyles=a;exports.tooltipStyles=d;}));