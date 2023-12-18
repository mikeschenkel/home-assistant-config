/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function e(e,t,s,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,s,o):r(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},i=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${r}`);class o{constructor(e,t){this.parts=[],this.element=t;const s=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let c=0,h=-1,u=0;const{strings:p,values:{length:f}}=e;for(;u<f;){const e=o.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)a(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=p[u],s=d.exec(t)[2],i=s.toLowerCase()+"$lit$",r=e.getAttribute(i);e.removeAttribute(i);const o=r.split(n);this.parts.push({type:"attribute",index:h,name:s,strings:o}),u+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,r=t.split(n),o=r.length-1;for(let t=0;t<o;t++){let s,n=r[t];if(""===n)s=l();else{const e=d.exec(n);null!==e&&a(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),s=document.createTextNode(n)}i.insertBefore(s,e),this.parts.push({type:"node",index:++h})}""===r[o]?(i.insertBefore(l(),e),s.push(e)):e.data=r[o],u+=o}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&h!==c||(h++,t.insertBefore(l(),e)),c=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(s.push(e),h--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=r.pop()}for(const i of s)i.parentNode.removeChild(i)}}const a=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},c=e=>-1!==e.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:s},parts:i}=e,r=document.createTreeWalker(s,133,null,!1);let n=p(i),o=i[n],a=-1,c=0;const l=[];let d=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-c,n=p(i,n),o=i[n]}l.forEach(e=>e.parentNode.removeChild(e))}const u=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},p=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(c(t))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const f=new WeakMap,m=e=>"function"==typeof e&&f.has(e),g={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const s of this.__parts)void 0!==s&&s.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let n,o=0,a=0,l=r.nextNode();for(;o<i.length;)if(n=i[o],c(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(s.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=s.pop(),l=r.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),w=` ${i} `;class b{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let n=0;n<e;n++){const e=this.strings[n],o=e.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===e.indexOf("--\x3e",o+1);const a=d.exec(e);t+=null===a?e+(s?w:r):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==v&&(t=v.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let i=0;i<s.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new P(this)}_getValue(){const e=this.strings,t=e.length-1,s=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=s[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!x(e))return e}let i="";for(let r=0;r<t;r++){i+=e[r];const t=s[r];if(void 0!==t){const e=t.value;if(S(e)||!x(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===g||S(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=g,e(this)}this.value!==g&&this.committer.commit()}}class T{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}const e=this.__pendingValue;e!==g&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===_?(this.value=_,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const s=new y(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,i=0;for(const r of e)s=t[i],void 0===s&&(s=new T(this.options),t.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(r),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=g}}class N extends C{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new $(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class $ extends P{}let O=!1;(()=>{try{const e={get capture(){return O=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class R{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=g}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(O?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function k(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const r=e.strings.join(i);return s=t.keyString.get(r),void 0===s&&(s=new o(e,e.getTemplateElement()),t.keyString.set(r,s)),t.stringsArray.set(e.strings,s),s}const V=new Map,U=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const j=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,s,i){const r=t[0];if("."===r){return new N(e,t.slice(1),s).parts}if("@"===r)return[new R(e,t.slice(1),i.eventContext)];if("?"===r)return[new E(e,t.slice(1),s)];return new C(e,t,s).parts}handleTextExpression(e){return new T(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const z=(e,...t)=>new b(e,t,"html",j)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,M=(e,t)=>`${e}--${t}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const H=e=>t=>{const s=M(t.type,e);let r=V.get(s);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},V.set(s,r));let n=r.stringsArray.get(t.strings);if(void 0!==n)return n;const a=t.strings.join(i);if(n=r.keyString.get(a),void 0===n){const s=t.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(s,e),n=new o(t,s),r.keyString.set(a,n)}return r.stringsArray.set(t.strings,n),n},F=["html","svg"],L=new Set,I=(e,t,s)=>{L.add(e);const i=s?s.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let l=0;l<n;l++){const e=r[l];e.parentNode.removeChild(e),o.textContent+=e.textContent}(e=>{F.forEach(t=>{const s=V.get(M(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),h(e,s)})})})(e);const a=i.content;s?function(e,t,s=null){const{element:{content:i},parts:r}=e;if(null==s)return void i.appendChild(t);const n=document.createTreeWalker(i,133,null,!1);let o=p(r),a=0,c=-1;for(;n.nextNode();){c++;for(n.currentNode===s&&(a=u(t),s.parentNode.insertBefore(t,s));-1!==o&&r[o].index===c;){if(a>0){for(;-1!==o;)r[o].index+=a,o=p(r,o);return}o=p(r,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),h(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const W={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},B=(e,t)=>t!==e&&(t==t||e==e),D={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:B};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);void 0!==i&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=D){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdateInternal(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||D}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=B){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||W,r="function"==typeof i?i:i.fromAttribute;return r?r(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||W.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=D){const i=this.constructor,r=i._attributeNameForProperty(e,s);if(void 0!==r){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,s){let i=!0;if(void 0!==e){const r=this.constructor;s=s||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(re){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(re){throw e=!1,this._markUpdated(),re}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Y=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(s){s.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function G(e){return(t,s)=>void 0!==s?((e,t,s)=>{t.constructor.createProperty(s,e)})(e,t,s):Y(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(e,t){if(t!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Z=(e,...t)=>{const s=t.reduce((t,s,i)=>t+(e=>{if(e instanceof X)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[i+1],e[0]);return new X(s,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const ee={};class te extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,s)=>e.reduceRight((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e),s),s=t(e,new Set),i=[];s.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!K){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new X(String(t),Q)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ee&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ee}}var se,ie,re;te.finalized=!0,te.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,n=U.has(t),o=q&&11===t.nodeType&&!!t.host,a=o&&!L.has(r),c=a?document.createDocumentFragment():t;if(((e,t,i)=>{let r=U.get(t);void 0===r&&(s(t,t.firstChild),U.set(t,r=new T(Object.assign({templateFactory:k},i))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:H(r)},i)),a){const e=U.get(c);U.delete(c);const i=e.value instanceof y?e.value.template:void 0;I(r,c,i),s(t,t.firstChild),t.appendChild(c),U.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)},te.shadowRootOptions={mode:"open"},(re=se||(se={})).language="language",re.system="system",re.comma_decimal="comma_decimal",re.decimal_comma="decimal_comma",re.space_comma="space_comma",re.none="none",function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ie||(ie={}));var ne=new Set(["call-service","divider","section","weblink","cast","select"]),oe={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},ae=function(e,t){void 0===t&&(t=!1);var s=function(e,t){return i("hui-error-card",{type:"error",error:e,config:t})},i=function(e,t){var i=window.document.createElement(e);try{if(!i.setConfig)return;i.setConfig(t)}catch(i){return console.error(e,i),s(i.message,t)}return i};if(!e||"object"!=typeof e||!t&&!e.type)return s("No type defined",e);var r=e.type;if(r&&r.startsWith("custom:"))r=r.substr("custom:".length);else if(t)if(ne.has(r))r="hui-"+r+"-row";else{if(!e.entity)return s("Invalid config given.",e);var n=e.entity.split(".",1)[0];r="hui-"+(oe[n]||"text")+"-entity-row"}else r="hui-"+r+"-card";if(customElements.get(r))return i(r,e);var o=s("Custom element doesn't exist: "+e.type+".",e);o.style.display="None";var a=setTimeout((function(){o.style.display=""}),2e3);return customElements.whenDefined(e.type).then((function(){clearTimeout(a),function(e,t,s,i){i=i||{},s=null==s?{}:s;var r=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});r.detail=s,e.dispatchEvent(r)}(o,"ll-rebuild",{},o)})),o};var ce={},le={},de={};Object.defineProperty(de,"__esModule",{value:!0});de.ContentRect=function(e){if("getBBox"in e){var t=e.getBBox();return Object.freeze({height:t.height,left:0,top:0,width:t.width})}var s=window.getComputedStyle(e);return Object.freeze({height:parseFloat(s.height||"0"),left:parseFloat(s.paddingLeft||"0"),top:parseFloat(s.paddingTop||"0"),width:parseFloat(s.width||"0")})},Object.defineProperty(le,"__esModule",{value:!0});var he=de,ue=function(){function e(e){this.target=e,this.$$broadcastWidth=this.$$broadcastHeight=0}return Object.defineProperty(e.prototype,"broadcastWidth",{get:function(){return this.$$broadcastWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"broadcastHeight",{get:function(){return this.$$broadcastHeight},enumerable:!0,configurable:!0}),e.prototype.isActive=function(){var e=he.ContentRect(this.target);return!!e&&(e.width!==this.broadcastWidth||e.height!==this.broadcastHeight)},e}();le.ResizeObservation=ue;var pe={};Object.defineProperty(pe,"__esModule",{value:!0});var fe=de,me=function(e){this.target=e,this.contentRect=fe.ContentRect(e)};pe.ResizeObserverEntry=me,Object.defineProperty(ce,"__esModule",{value:!0});var ge=le,_e=pe,ye=[],ve=function(){function e(e){this.$$observationTargets=[],this.$$activeTargets=[],this.$$skippedTargets=[];var t=function(e){if(void 0===e)return"Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";if("function"!=typeof e)return"Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."}(e);if(t)throw TypeError(t);this.$$callback=e}return e.prototype.observe=function(e){var t,s=Se("observe",e);if(s)throw TypeError(s);xe(this.$$observationTargets,e)>=0||(this.$$observationTargets.push(new ge.ResizeObservation(e)),t=this,ye.indexOf(t)<0&&(ye.push(t),$e()))},e.prototype.unobserve=function(e){var t=Se("unobserve",e);if(t)throw TypeError(t);var s=xe(this.$$observationTargets,e);s<0||(this.$$observationTargets.splice(s,1),0===this.$$observationTargets.length&&be(this))},e.prototype.disconnect=function(){this.$$observationTargets=[],this.$$activeTargets=[],be(this)},e}(),we=ce.ResizeObserver=ve;function be(e){var t=ye.indexOf(e);t>=0&&(ye.splice(t,1),Re())}function Se(e,t){return void 0===t?"Failed to execute '"+e+"' on 'ResizeObserver': 1 argument required, but only 0 present.":t&&t.nodeType===window.Node.ELEMENT_NODE?void 0:"Failed to execute '"+e+"' on 'ResizeObserver': parameter 1 is not of type 'Element'."}function xe(e,t){for(var s=0;s<e.length;s+=1)if(e[s].target===t)return s;return-1}var Ce,Pe=function(e){ye.forEach((function(t){t.$$activeTargets=[],t.$$skippedTargets=[],t.$$observationTargets.forEach((function(s){s.isActive()&&(Ee(s.target)>e?t.$$activeTargets.push(s):t.$$skippedTargets.push(s))}))}))},Te=function(){var e=1/0;return ye.forEach((function(t){if(t.$$activeTargets.length){var s=[];t.$$activeTargets.forEach((function(t){var i=new _e.ResizeObserverEntry(t.target);s.push(i),t.$$broadcastWidth=i.contentRect.width,t.$$broadcastHeight=i.contentRect.height;var r=Ee(t.target);r<e&&(e=r)})),t.$$callback(s,t),t.$$activeTargets=[]}})),e},Ee=function(e){for(var t=0;e.parentNode;)e=e.parentNode,t+=1;return t},Ne=function(){var e,t=0;for(Pe(t);ye.some((function(e){return!!e.$$activeTargets.length}));)t=Te(),Pe(t);ye.some((function(e){return!!e.$$skippedTargets.length}))&&(e=new window.ErrorEvent("ResizeLoopError",{message:"ResizeObserver loop completed with undelivered notifications."}),window.dispatchEvent(e))},$e=function(){Ce||Oe()},Oe=function(){Ce=window.requestAnimationFrame((function(){Ne(),Oe()}))},Re=function(){Ce&&!ye.some((function(e){return!!e.$$observationTargets.length}))&&(window.cancelAnimationFrame(Ce),Ce=void 0)};ce.install=function(){return window.ResizeObserver=ve};const Ae=window.loadCardHelpers?window.loadCardHelpers():void 0;console.info("%c DECLUTTERING-CARD \n%c   Version 1.0.0   ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let ke=class extends te{set hass(e){e&&(!this._hass&&e&&this._createCard(this._config,this._type).then(e=>{var t;return this._card=e,this._card&&(null===(t=this._ro)||void 0===t||t.observe(this._card)),this._card}),this._hass=e,this._card&&(this._card.hass=e))}static get styles(){return Z`
      :host(.child-card-hidden) {
        display: none;
      }
    `}firstUpdated(){this.updateComplete.then(()=>{this._displayHidden()})}_displayHidden(){var e;"none"===(null===(e=this._card)||void 0===e?void 0:e.style.display)?this.classList.add("child-card-hidden"):this.classList.contains("child-card-hidden")&&this.classList.remove("child-card-hidden")}setConfig(e){if(!e.template)throw new Error("Missing template object in your config");const t=function(){let e=document.querySelector("home-assistant");if(e=e&&e.shadowRoot,e=e&&e.querySelector("home-assistant-main"),e=e&&e.shadowRoot,e=e&&e.querySelector("app-drawer-layout partial-panel-resolver, ha-drawer partial-panel-resolver"),e=e&&e.shadowRoot||e,e=e&&e.querySelector("ha-panel-lovelace"),e=e&&e.shadowRoot,e=e&&e.querySelector("hui-root"),e){const t=e.lovelace;return t.current_view=e.___curView,t}return null}()||function(){let e=document.querySelector("hc-main");if(e=e&&e.shadowRoot,e=e&&e.querySelector("hc-lovelace"),e=e&&e.shadowRoot,e=e&&e.querySelector("hui-view"),e){const t=e.lovelace;return t.current_view=e.___curView,t}return null}();if(!t.config&&!t.config.decluttering_templates)throw new Error("The object decluttering_templates doesn't exist in your main lovelace config.");const s=t.config.decluttering_templates[e.template];if(!s)throw new Error(`The template "${e.template}" doesn't exist in decluttering_templates`);if(!s.card&&!s.element)throw new Error("You shoud define either a card or an element in the template");if(s.card&&s.element)throw new Error("You can define a card and an element in the template");this._ro=new we(()=>{this._displayHidden()}),this._config=((e,t)=>{if(!e&&!t.default)return t.card;let s=[];e&&(s=e.slice(0)),t.default&&(s=s.concat(t.default));let i=t.card?JSON.stringify(t.card):JSON.stringify(t.element);return s.forEach(e=>{const t=Object.keys(e)[0],s=Object.values(e)[0];if("number"==typeof s||"boolean"==typeof s){const e=new RegExp(`"\\[\\[${t}\\]\\]"`,"gm");i=i.replace(e,s)}if("object"==typeof s){const e=new RegExp(`"\\[\\[${t}\\]\\]"`,"gm"),r=JSON.stringify(s);i=i.replace(e,r)}else{const e=new RegExp(`\\[\\[${t}\\]\\]`,"gm");i=i.replace(e,s)}}),JSON.parse(i)})(e.variables,s),this._type=s.card?"card":"element"}render(){return this._hass&&this._card&&this._config?z`
      <div id="root">${this._card}</div>
    `:z``}async _createCard(e,t){let s;return Ae?"card"===t?s="divider"===e.type?(await Ae).createRowElement(e):(await Ae).createCardElement(e):(s=(await Ae).createHuiElement(e),e.style&&Object.keys(e.style).forEach(t=>{this.style.setProperty(t,e.style[t])})):s=ae(e),this._hass&&(s.hass=this._hass),s.addEventListener("ll-rebuild",i=>{i.stopPropagation(),this._rebuildCard(s,e,t)},{once:!0}),s.id="declutter-child",s}async _rebuildCard(e,t,s){var i;const r=await this._createCard(t,s);e.replaceWith(r),this._card=r,null===(i=this._ro)||void 0===i||i.observe(this._card)}getCardSize(){return this._card&&"function"==typeof this._card.getCardSize?this._card.getCardSize():1}};var Ve;e([G()],ke.prototype,"_card",void 0),e([G()],ke.prototype,"_config",void 0),ke=e([(Ve="decluttering-card",e=>"function"==typeof e?((e,t)=>(window.customElements.define(e,t),t))(Ve,e):((e,t)=>{const{kind:s,elements:i}=t;return{kind:s,elements:i,finisher(t){window.customElements.define(e,t)}}})(Ve,e))],ke);
