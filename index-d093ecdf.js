(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function gv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hp={exports:{}},tl={},pp={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),vv=Symbol.for("react.portal"),_v=Symbol.for("react.fragment"),xv=Symbol.for("react.strict_mode"),yv=Symbol.for("react.profiler"),Sv=Symbol.for("react.provider"),Mv=Symbol.for("react.context"),Ev=Symbol.for("react.forward_ref"),Tv=Symbol.for("react.suspense"),wv=Symbol.for("react.memo"),Av=Symbol.for("react.lazy"),Id=Symbol.iterator;function Rv(t){return t===null||typeof t!="object"?null:(t=Id&&t[Id]||t["@@iterator"],typeof t=="function"?t:null)}var mp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gp=Object.assign,vp={};function vs(t,e,n){this.props=t,this.context=e,this.refs=vp,this.updater=n||mp}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _p(){}_p.prototype=vs.prototype;function Pc(t,e,n){this.props=t,this.context=e,this.refs=vp,this.updater=n||mp}var Dc=Pc.prototype=new _p;Dc.constructor=Pc;gp(Dc,vs.prototype);Dc.isPureReactComponent=!0;var Fd=Array.isArray,xp=Object.prototype.hasOwnProperty,Uc={current:null},yp={key:!0,ref:!0,__self:!0,__source:!0};function Sp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xp.call(e,i)&&!yp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:go,type:t,key:s,ref:o,props:r,_owner:Uc.current}}function Cv(t,e){return{$$typeof:go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Nc(t){return typeof t=="object"&&t!==null&&t.$$typeof===go}function bv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Od=/\/+/g;function wl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bv(""+t.key):e.toString(36)}function ma(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case go:case vv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+wl(o,0):i,Fd(r)?(n="",t!=null&&(n=t.replace(Od,"$&/")+"/"),ma(r,e,n,"",function(u){return u})):r!=null&&(Nc(r)&&(r=Cv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Od,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Fd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+wl(s,a);o+=ma(s,e,n,l,r)}else if(l=Rv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+wl(s,a++),o+=ma(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function bo(t,e,n){if(t==null)return t;var i=[],r=0;return ma(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Lv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},ga={transition:null},Pv={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:ga,ReactCurrentOwner:Uc};function Mp(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:bo,forEach:function(t,e,n){bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bo(t,function(){e++}),e},toArray:function(t){return bo(t,function(e){return e})||[]},only:function(t){if(!Nc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=vs;ze.Fragment=_v;ze.Profiler=yv;ze.PureComponent=Pc;ze.StrictMode=xv;ze.Suspense=Tv;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv;ze.act=Mp;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=gp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Uc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xp.call(e,l)&&!yp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:go,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:Mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Sv,_context:t},t.Consumer=t};ze.createElement=Sp;ze.createFactory=function(t){var e=Sp.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:Ev,render:t}};ze.isValidElement=Nc;ze.lazy=function(t){return{$$typeof:Av,_payload:{_status:-1,_result:t},_init:Lv}};ze.memo=function(t,e){return{$$typeof:wv,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=ga.transition;ga.transition={};try{t()}finally{ga.transition=e}};ze.unstable_act=Mp;ze.useCallback=function(t,e){return jt.current.useCallback(t,e)};ze.useContext=function(t){return jt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return jt.current.useEffect(t,e)};ze.useId=function(){return jt.current.useId()};ze.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return jt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};ze.useRef=function(t){return jt.current.useRef(t)};ze.useState=function(t){return jt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return jt.current.useTransition()};ze.version="18.3.1";pp.exports=ze;var Je=pp.exports;const Dv=gv(Je);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv=Je,Nv=Symbol.for("react.element"),Iv=Symbol.for("react.fragment"),Fv=Object.prototype.hasOwnProperty,Ov=Uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kv={key:!0,ref:!0,__self:!0,__source:!0};function Ep(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Fv.call(e,i)&&!kv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Nv,type:t,key:s,ref:o,props:r,_owner:Ov.current}}tl.Fragment=Iv;tl.jsx=Ep;tl.jsxs=Ep;hp.exports=tl;var b=hp.exports,Cu={},Tp={exports:{}},dn={},wp={exports:{}},Ap={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,H){var V=D.length;D.push(H);e:for(;0<V;){var N=V-1>>>1,j=D[N];if(0<r(j,H))D[N]=H,D[V]=j,V=N;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var H=D[0],V=D.pop();if(V!==H){D[0]=V;e:for(var N=0,j=D.length,oe=j>>>1;N<oe;){var se=2*(N+1)-1,ue=D[se],ge=se+1,Me=D[ge];if(0>r(ue,V))ge<j&&0>r(Me,ue)?(D[N]=Me,D[ge]=V,N=ge):(D[N]=ue,D[se]=V,N=se);else if(ge<j&&0>r(Me,V))D[N]=Me,D[ge]=V,N=ge;else break e}}return H}function r(D,H){var V=D.sortIndex-H.sortIndex;return V!==0?V:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,h=null,f=3,v=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(D){for(var H=n(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=D)i(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function S(D){if(y=!1,p(D),!x)if(n(l)!==null)x=!0,ee(w);else{var H=n(u);H!==null&&Z(S,H.startTime-D)}}function w(D,H){x=!1,y&&(y=!1,c(U),U=-1),v=!0;var V=f;try{for(p(H),h=n(l);h!==null&&(!(h.expirationTime>H)||D&&!Q());){var N=h.callback;if(typeof N=="function"){h.callback=null,f=h.priorityLevel;var j=N(h.expirationTime<=H);H=t.unstable_now(),typeof j=="function"?h.callback=j:h===n(l)&&i(l),p(H)}else i(l);h=n(l)}if(h!==null)var oe=!0;else{var se=n(u);se!==null&&Z(S,se.startTime-H),oe=!1}return oe}finally{h=null,f=V,v=!1}}var C=!1,R=null,U=-1,M=5,T=-1;function Q(){return!(t.unstable_now()-T<M)}function ne(){if(R!==null){var D=t.unstable_now();T=D;var H=!0;try{H=R(!0,D)}finally{H?z():(C=!1,R=null)}}else C=!1}var z;if(typeof _=="function")z=function(){_(ne)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,X=B.port2;B.port1.onmessage=ne,z=function(){X.postMessage(null)}}else z=function(){m(ne,0)};function ee(D){R=D,C||(C=!0,z())}function Z(D,H){U=m(function(){D(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||v||(x=!0,ee(w))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var V=f;f=H;try{return D()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=f;f=D;try{return H()}finally{f=V}},t.unstable_scheduleCallback=function(D,H,V){var N=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?N+V:N):V=N,D){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=V+j,D={id:d++,callback:H,priorityLevel:D,startTime:V,expirationTime:j,sortIndex:-1},V>N?(D.sortIndex=V,e(u,D),n(l)===null&&D===n(u)&&(y?(c(U),U=-1):y=!0,Z(S,V-N))):(D.sortIndex=j,e(l,D),x||v||(x=!0,ee(w))),D},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(D){var H=f;return function(){var V=f;f=H;try{return D.apply(this,arguments)}finally{f=V}}}})(Ap);wp.exports=Ap;var zv=wp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv=Je,cn=zv;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rp=new Set,Zs={};function vr(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(Zs[t]=e,t=0;t<e.length;t++)Rp.add(e[t])}var li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=Object.prototype.hasOwnProperty,Hv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kd={},zd={};function Gv(t){return bu.call(zd,t)?!0:bu.call(kd,t)?!1:Hv.test(t)?zd[t]=!0:(kd[t]=!0,!1)}function Vv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Wv(t,e,n,i){if(e===null||typeof e>"u"||Vv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Lt[t]=new Xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Lt[e]=new Xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Lt[t]=new Xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Lt[t]=new Xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Lt[t]=new Xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Lt[t]=new Xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Lt[t]=new Xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Lt[t]=new Xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Lt[t]=new Xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ic=/[\-:]([a-z])/g;function Fc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ic,Fc);Lt[e]=new Xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ic,Fc);Lt[e]=new Xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ic,Fc);Lt[e]=new Xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Lt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new Xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Lt[t]=new Xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Oc(t,e,n,i){var r=Lt.hasOwnProperty(e)?Lt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Wv(e,n,r,i)&&(n=null),i||r===null?Gv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var fi=Bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lo=Symbol.for("react.element"),Or=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),kc=Symbol.for("react.strict_mode"),Lu=Symbol.for("react.profiler"),Cp=Symbol.for("react.provider"),bp=Symbol.for("react.context"),zc=Symbol.for("react.forward_ref"),Pu=Symbol.for("react.suspense"),Du=Symbol.for("react.suspense_list"),Bc=Symbol.for("react.memo"),yi=Symbol.for("react.lazy"),Lp=Symbol.for("react.offscreen"),Bd=Symbol.iterator;function Es(t){return t===null||typeof t!="object"?null:(t=Bd&&t[Bd]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Object.assign,Al;function Fs(t){if(Al===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Al=e&&e[1]||""}return`
`+Al+t}var Rl=!1;function Cl(t,e){if(!t||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fs(t):""}function jv(t){switch(t.tag){case 5:return Fs(t.type);case 16:return Fs("Lazy");case 13:return Fs("Suspense");case 19:return Fs("SuspenseList");case 0:case 2:case 15:return t=Cl(t.type,!1),t;case 11:return t=Cl(t.type.render,!1),t;case 1:return t=Cl(t.type,!0),t;default:return""}}function Uu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case kr:return"Fragment";case Or:return"Portal";case Lu:return"Profiler";case kc:return"StrictMode";case Pu:return"Suspense";case Du:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bp:return(t.displayName||"Context")+".Consumer";case Cp:return(t._context.displayName||"Context")+".Provider";case zc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bc:return e=t.displayName||null,e!==null?e:Uu(t.type)||"Memo";case yi:e=t._payload,t=t._init;try{return Uu(t(e))}catch{}}return null}function Xv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uu(e);case 8:return e===kc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qv(t){var e=Pp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Po(t){t._valueTracker||(t._valueTracker=qv(t))}function Dp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Pp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ca(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nu(t,e){var n=e.checked;return rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Hd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Up(t,e){e=e.checked,e!=null&&Oc(t,"checked",e,!1)}function Iu(t,e){Up(t,e);var n=ki(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fu(t,e.type,ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fu(t,e,n){(e!=="number"||Ca(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Os=Array.isArray;function Kr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ki(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ou(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Os(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ki(n)}}function Np(t,e){var n=ki(e.value),i=ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Wd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ip(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ku(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ip(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Do,Fp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Do.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yv=["Webkit","ms","Moz","O"];Object.keys(Hs).forEach(function(t){Yv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hs[e]=Hs[t]})});function Op(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hs.hasOwnProperty(t)&&Hs[t]?(""+e).trim():e+"px"}function kp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Op(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var $v=rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zu(t,e){if(e){if($v[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hu=null;function Hc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gu=null,Zr=null,Qr=null;function jd(t){if(t=xo(t)){if(typeof Gu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=ol(e),Gu(t.stateNode,t.type,e))}}function zp(t){Zr?Qr?Qr.push(t):Qr=[t]:Zr=t}function Bp(){if(Zr){var t=Zr,e=Qr;if(Qr=Zr=null,jd(t),e)for(t=0;t<e.length;t++)jd(e[t])}}function Hp(t,e){return t(e)}function Gp(){}var bl=!1;function Vp(t,e,n){if(bl)return t(e,n);bl=!0;try{return Hp(t,e,n)}finally{bl=!1,(Zr!==null||Qr!==null)&&(Gp(),Bp())}}function Js(t,e){var n=t.stateNode;if(n===null)return null;var i=ol(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Vu=!1;if(li)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{Vu=!1}function Kv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Gs=!1,ba=null,La=!1,Wu=null,Zv={onError:function(t){Gs=!0,ba=t}};function Qv(t,e,n,i,r,s,o,a,l){Gs=!1,ba=null,Kv.apply(Zv,arguments)}function Jv(t,e,n,i,r,s,o,a,l){if(Qv.apply(this,arguments),Gs){if(Gs){var u=ba;Gs=!1,ba=null}else throw Error(te(198));La||(La=!0,Wu=u)}}function _r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xd(t){if(_r(t)!==t)throw Error(te(188))}function e_(t){var e=t.alternate;if(!e){if(e=_r(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xd(r),t;if(s===i)return Xd(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function jp(t){return t=e_(t),t!==null?Xp(t):null}function Xp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xp(t);if(e!==null)return e;t=t.sibling}return null}var qp=cn.unstable_scheduleCallback,qd=cn.unstable_cancelCallback,t_=cn.unstable_shouldYield,n_=cn.unstable_requestPaint,lt=cn.unstable_now,i_=cn.unstable_getCurrentPriorityLevel,Gc=cn.unstable_ImmediatePriority,Yp=cn.unstable_UserBlockingPriority,Pa=cn.unstable_NormalPriority,r_=cn.unstable_LowPriority,$p=cn.unstable_IdlePriority,nl=null,Gn=null;function s_(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(nl,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:l_,o_=Math.log,a_=Math.LN2;function l_(t){return t>>>=0,t===0?32:31-(o_(t)/a_|0)|0}var Uo=64,No=4194304;function ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Da(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ks(a):(s&=o,s!==0&&(i=ks(s)))}else o=n&~r,o!==0?i=ks(o):s!==0&&(i=ks(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Un(e),r=1<<n,i|=t[n],e&=~r;return i}function u_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Un(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=u_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kp(){var t=Uo;return Uo<<=1,!(Uo&4194240)&&(Uo=64),t}function Ll(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function d_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Un(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Vc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Un(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var We=0;function Zp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qp,Wc,Jp,em,tm,Xu=!1,Io=[],Ri=null,Ci=null,bi=null,eo=new Map,to=new Map,Mi=[],f_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yd(t,e){switch(t){case"focusin":case"focusout":Ri=null;break;case"dragenter":case"dragleave":Ci=null;break;case"mouseover":case"mouseout":bi=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xo(e),e!==null&&Wc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function h_(t,e,n,i,r){switch(e){case"focusin":return Ri=ws(Ri,t,e,n,i,r),!0;case"dragenter":return Ci=ws(Ci,t,e,n,i,r),!0;case"mouseover":return bi=ws(bi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return eo.set(s,ws(eo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,to.set(s,ws(to.get(s)||null,t,e,n,i,r)),!0}return!1}function nm(t){var e=ir(t.target);if(e!==null){var n=_r(e);if(n!==null){if(e=n.tag,e===13){if(e=Wp(n),e!==null){t.blockedOn=e,tm(t.priority,function(){Jp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Hu=i,n.target.dispatchEvent(i),Hu=null}else return e=xo(n),e!==null&&Wc(e),t.blockedOn=n,!1;e.shift()}return!0}function $d(t,e,n){va(t)&&n.delete(e)}function p_(){Xu=!1,Ri!==null&&va(Ri)&&(Ri=null),Ci!==null&&va(Ci)&&(Ci=null),bi!==null&&va(bi)&&(bi=null),eo.forEach($d),to.forEach($d)}function As(t,e){t.blockedOn===e&&(t.blockedOn=null,Xu||(Xu=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,p_)))}function no(t){function e(r){return As(r,t)}if(0<Io.length){As(Io[0],t);for(var n=1;n<Io.length;n++){var i=Io[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ri!==null&&As(Ri,t),Ci!==null&&As(Ci,t),bi!==null&&As(bi,t),eo.forEach(e),to.forEach(e),n=0;n<Mi.length;n++)i=Mi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Mi.length&&(n=Mi[0],n.blockedOn===null);)nm(n),n.blockedOn===null&&Mi.shift()}var Jr=fi.ReactCurrentBatchConfig,Ua=!0;function m_(t,e,n,i){var r=We,s=Jr.transition;Jr.transition=null;try{We=1,jc(t,e,n,i)}finally{We=r,Jr.transition=s}}function g_(t,e,n,i){var r=We,s=Jr.transition;Jr.transition=null;try{We=4,jc(t,e,n,i)}finally{We=r,Jr.transition=s}}function jc(t,e,n,i){if(Ua){var r=qu(t,e,n,i);if(r===null)Bl(t,e,i,Na,n),Yd(t,i);else if(h_(r,t,e,n,i))i.stopPropagation();else if(Yd(t,i),e&4&&-1<f_.indexOf(t)){for(;r!==null;){var s=xo(r);if(s!==null&&Qp(s),s=qu(t,e,n,i),s===null&&Bl(t,e,i,Na,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Bl(t,e,i,null,n)}}var Na=null;function qu(t,e,n,i){if(Na=null,t=Hc(i),t=ir(t),t!==null)if(e=_r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Na=t,null}function im(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i_()){case Gc:return 1;case Yp:return 4;case Pa:case r_:return 16;case $p:return 536870912;default:return 16}default:return 16}}var Ti=null,Xc=null,_a=null;function rm(){if(_a)return _a;var t,e=Xc,n=e.length,i,r="value"in Ti?Ti.value:Ti.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return _a=r.slice(t,1<i?1-i:void 0)}function xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function Kd(){return!1}function fn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fo:Kd,this.isPropagationStopped=Kd,this}return rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qc=fn(_s),_o=rt({},_s,{view:0,detail:0}),v_=fn(_o),Pl,Dl,Rs,il=rt({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(Pl=t.screenX-Rs.screenX,Dl=t.screenY-Rs.screenY):Dl=Pl=0,Rs=t),Pl)},movementY:function(t){return"movementY"in t?t.movementY:Dl}}),Zd=fn(il),__=rt({},il,{dataTransfer:0}),x_=fn(__),y_=rt({},_o,{relatedTarget:0}),Ul=fn(y_),S_=rt({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),M_=fn(S_),E_=rt({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T_=fn(E_),w_=rt({},_s,{data:0}),Qd=fn(w_),A_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=C_[t])?!!e[t]:!1}function Yc(){return b_}var L_=rt({},_o,{key:function(t){if(t.key){var e=A_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?R_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(t){return t.type==="keypress"?xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),P_=fn(L_),D_=rt({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=fn(D_),U_=rt({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),N_=fn(U_),I_=rt({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),F_=fn(I_),O_=rt({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),k_=fn(O_),z_=[9,13,27,32],$c=li&&"CompositionEvent"in window,Vs=null;li&&"documentMode"in document&&(Vs=document.documentMode);var B_=li&&"TextEvent"in window&&!Vs,sm=li&&(!$c||Vs&&8<Vs&&11>=Vs),ef=String.fromCharCode(32),tf=!1;function om(t,e){switch(t){case"keyup":return z_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function H_(t,e){switch(t){case"compositionend":return am(e);case"keypress":return e.which!==32?null:(tf=!0,ef);case"textInput":return t=e.data,t===ef&&tf?null:t;default:return null}}function G_(t,e){if(zr)return t==="compositionend"||!$c&&om(t,e)?(t=rm(),_a=Xc=Ti=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sm&&e.locale!=="ko"?null:e.data;default:return null}}var V_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!V_[t.type]:e==="textarea"}function lm(t,e,n,i){zp(i),e=Ia(e,"onChange"),0<e.length&&(n=new qc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ws=null,io=null;function W_(t){xm(t,0)}function rl(t){var e=Gr(t);if(Dp(e))return t}function j_(t,e){if(t==="change")return e}var um=!1;if(li){var Nl;if(li){var Il="oninput"in document;if(!Il){var rf=document.createElement("div");rf.setAttribute("oninput","return;"),Il=typeof rf.oninput=="function"}Nl=Il}else Nl=!1;um=Nl&&(!document.documentMode||9<document.documentMode)}function sf(){Ws&&(Ws.detachEvent("onpropertychange",cm),io=Ws=null)}function cm(t){if(t.propertyName==="value"&&rl(io)){var e=[];lm(e,io,t,Hc(t)),Vp(W_,e)}}function X_(t,e,n){t==="focusin"?(sf(),Ws=e,io=n,Ws.attachEvent("onpropertychange",cm)):t==="focusout"&&sf()}function q_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rl(io)}function Y_(t,e){if(t==="click")return rl(e)}function $_(t,e){if(t==="input"||t==="change")return rl(e)}function K_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:K_;function ro(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!bu.call(e,r)||!Fn(t[r],e[r]))return!1}return!0}function of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function af(t,e){var n=of(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=of(n)}}function dm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fm(){for(var t=window,e=Ca();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ca(t.document)}return e}function Kc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Z_(t){var e=fm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dm(n.ownerDocument.documentElement,n)){if(i!==null&&Kc(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=af(n,s);var o=af(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Q_=li&&"documentMode"in document&&11>=document.documentMode,Br=null,Yu=null,js=null,$u=!1;function lf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$u||Br==null||Br!==Ca(i)||(i=Br,"selectionStart"in i&&Kc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),js&&ro(js,i)||(js=i,i=Ia(Yu,"onSelect"),0<i.length&&(e=new qc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Br)))}function Oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hr={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},Fl={},hm={};li&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function sl(t){if(Fl[t])return Fl[t];if(!Hr[t])return t;var e=Hr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hm)return Fl[t]=e[n];return t}var pm=sl("animationend"),mm=sl("animationiteration"),gm=sl("animationstart"),vm=sl("transitionend"),_m=new Map,uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vi(t,e){_m.set(t,e),vr(e,[t])}for(var Ol=0;Ol<uf.length;Ol++){var kl=uf[Ol],J_=kl.toLowerCase(),e0=kl[0].toUpperCase()+kl.slice(1);Vi(J_,"on"+e0)}Vi(pm,"onAnimationEnd");Vi(mm,"onAnimationIteration");Vi(gm,"onAnimationStart");Vi("dblclick","onDoubleClick");Vi("focusin","onFocus");Vi("focusout","onBlur");Vi(vm,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function cf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Jv(i,e,void 0,t),t.currentTarget=null}function xm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;cf(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;cf(r,a,u),s=l}}}if(La)throw t=Wu,La=!1,Wu=null,t}function Ze(t,e){var n=e[ec];n===void 0&&(n=e[ec]=new Set);var i=t+"__bubble";n.has(i)||(ym(e,t,2,!1),n.add(i))}function zl(t,e,n){var i=0;e&&(i|=4),ym(n,t,i,e)}var ko="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[ko]){t[ko]=!0,Rp.forEach(function(n){n!=="selectionchange"&&(t0.has(n)||zl(n,!1,t),zl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ko]||(e[ko]=!0,zl("selectionchange",!1,e))}}function ym(t,e,n,i){switch(im(e)){case 1:var r=m_;break;case 4:r=g_;break;default:r=jc}n=r.bind(null,e,n,t),r=void 0,!Vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Bl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Vp(function(){var u=s,d=Hc(n),h=[];e:{var f=_m.get(t);if(f!==void 0){var v=qc,x=t;switch(t){case"keypress":if(xa(n)===0)break e;case"keydown":case"keyup":v=P_;break;case"focusin":x="focus",v=Ul;break;case"focusout":x="blur",v=Ul;break;case"beforeblur":case"afterblur":v=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=x_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=N_;break;case pm:case mm:case gm:v=M_;break;case vm:v=F_;break;case"scroll":v=v_;break;case"wheel":v=k_;break;case"copy":case"cut":case"paste":v=T_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Jd}var y=(e&4)!==0,m=!y&&t==="scroll",c=y?f!==null?f+"Capture":null:f;y=[];for(var _=u,p;_!==null;){p=_;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,c!==null&&(S=Js(_,c),S!=null&&y.push(oo(_,S,p)))),m)break;_=_.return}0<y.length&&(f=new v(f,x,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",f&&n!==Hu&&(x=n.relatedTarget||n.fromElement)&&(ir(x)||x[ui]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?ir(x):null,x!==null&&(m=_r(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(y=Zd,S="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=Jd,S="onPointerLeave",c="onPointerEnter",_="pointer"),m=v==null?f:Gr(v),p=x==null?f:Gr(x),f=new y(S,_+"leave",v,n,d),f.target=m,f.relatedTarget=p,S=null,ir(d)===u&&(y=new y(c,_+"enter",x,n,d),y.target=p,y.relatedTarget=m,S=y),m=S,v&&x)t:{for(y=v,c=x,_=0,p=y;p;p=xr(p))_++;for(p=0,S=c;S;S=xr(S))p++;for(;0<_-p;)y=xr(y),_--;for(;0<p-_;)c=xr(c),p--;for(;_--;){if(y===c||c!==null&&y===c.alternate)break t;y=xr(y),c=xr(c)}y=null}else y=null;v!==null&&df(h,f,v,y,!1),x!==null&&m!==null&&df(h,m,x,y,!0)}}e:{if(f=u?Gr(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var w=j_;else if(nf(f))if(um)w=$_;else{w=q_;var C=X_}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=Y_);if(w&&(w=w(t,u))){lm(h,w,n,d);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Fu(f,"number",f.value)}switch(C=u?Gr(u):window,t){case"focusin":(nf(C)||C.contentEditable==="true")&&(Br=C,Yu=u,js=null);break;case"focusout":js=Yu=Br=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,lf(h,n,d);break;case"selectionchange":if(Q_)break;case"keydown":case"keyup":lf(h,n,d)}var R;if($c)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else zr?om(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(sm&&n.locale!=="ko"&&(zr||U!=="onCompositionStart"?U==="onCompositionEnd"&&zr&&(R=rm()):(Ti=d,Xc="value"in Ti?Ti.value:Ti.textContent,zr=!0)),C=Ia(u,U),0<C.length&&(U=new Qd(U,t,null,n,d),h.push({event:U,listeners:C}),R?U.data=R:(R=am(n),R!==null&&(U.data=R)))),(R=B_?H_(t,n):G_(t,n))&&(u=Ia(u,"onBeforeInput"),0<u.length&&(d=new Qd("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=R))}xm(h,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ia(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Js(t,n),s!=null&&i.unshift(oo(t,s,r)),s=Js(t,e),s!=null&&i.push(oo(t,s,r))),t=t.return}return i}function xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function df(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Js(n,s),l!=null&&o.unshift(oo(n,l,a))):r||(l=Js(n,s),l!=null&&o.push(oo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var n0=/\r\n?/g,i0=/\u0000|\uFFFD/g;function ff(t){return(typeof t=="string"?t:""+t).replace(n0,`
`).replace(i0,"")}function zo(t,e,n){if(e=ff(e),ff(t)!==e&&n)throw Error(te(425))}function Fa(){}var Ku=null,Zu=null;function Qu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,r0=typeof clearTimeout=="function"?clearTimeout:void 0,hf=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof hf<"u"?function(t){return hf.resolve(null).then(t).catch(o0)}:Ju;function o0(t){setTimeout(function(){throw t})}function Hl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),no(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);no(e)}function Li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),Hn="__reactFiber$"+xs,ao="__reactProps$"+xs,ui="__reactContainer$"+xs,ec="__reactEvents$"+xs,a0="__reactListeners$"+xs,l0="__reactHandles$"+xs;function ir(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ui]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pf(t);t!==null;){if(n=t[Hn])return n;t=pf(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[Hn]||t[ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function ol(t){return t[ao]||null}var tc=[],Vr=-1;function Wi(t){return{current:t}}function Qe(t){0>Vr||(t.current=tc[Vr],tc[Vr]=null,Vr--)}function Ye(t,e){Vr++,tc[Vr]=t.current,t.current=e}var zi={},kt=Wi(zi),Zt=Wi(!1),fr=zi;function os(t,e){var n=t.type.contextTypes;if(!n)return zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Qt(t){return t=t.childContextTypes,t!=null}function Oa(){Qe(Zt),Qe(kt)}function mf(t,e,n){if(kt.current!==zi)throw Error(te(168));Ye(kt,e),Ye(Zt,n)}function Sm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Xv(t)||"Unknown",r));return rt({},n,i)}function ka(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zi,fr=kt.current,Ye(kt,t),Ye(Zt,Zt.current),!0}function gf(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Sm(t,e,fr),i.__reactInternalMemoizedMergedChildContext=t,Qe(Zt),Qe(kt),Ye(kt,t)):Qe(Zt),Ye(Zt,n)}var ei=null,al=!1,Gl=!1;function Mm(t){ei===null?ei=[t]:ei.push(t)}function u0(t){al=!0,Mm(t)}function ji(){if(!Gl&&ei!==null){Gl=!0;var t=0,e=We;try{var n=ei;for(We=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ei=null,al=!1}catch(r){throw ei!==null&&(ei=ei.slice(t+1)),qp(Gc,ji),r}finally{We=e,Gl=!1}}return null}var Wr=[],jr=0,za=null,Ba=0,mn=[],gn=0,hr=null,ni=1,ii="";function Qi(t,e){Wr[jr++]=Ba,Wr[jr++]=za,za=t,Ba=e}function Em(t,e,n){mn[gn++]=ni,mn[gn++]=ii,mn[gn++]=hr,hr=t;var i=ni;t=ii;var r=32-Un(i)-1;i&=~(1<<r),n+=1;var s=32-Un(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ni=1<<32-Un(e)+r|n<<r|i,ii=s+t}else ni=1<<s|n<<r|i,ii=t}function Zc(t){t.return!==null&&(Qi(t,1),Em(t,1,0))}function Qc(t){for(;t===za;)za=Wr[--jr],Wr[jr]=null,Ba=Wr[--jr],Wr[jr]=null;for(;t===hr;)hr=mn[--gn],mn[gn]=null,ii=mn[--gn],mn[gn]=null,ni=mn[--gn],mn[gn]=null}var un=null,ln=null,et=!1,bn=null;function Tm(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function vf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,ln=Li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:ni,overflow:ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,ln=null,!0):!1;default:return!1}}function nc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ic(t){if(et){var e=ln;if(e){var n=e;if(!vf(t,e)){if(nc(t))throw Error(te(418));e=Li(n.nextSibling);var i=un;e&&vf(t,e)?Tm(i,n):(t.flags=t.flags&-4097|2,et=!1,un=t)}}else{if(nc(t))throw Error(te(418));t.flags=t.flags&-4097|2,et=!1,un=t}}}function _f(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function Bo(t){if(t!==un)return!1;if(!et)return _f(t),et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qu(t.type,t.memoizedProps)),e&&(e=ln)){if(nc(t))throw wm(),Error(te(418));for(;e;)Tm(t,e),e=Li(e.nextSibling)}if(_f(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=un?Li(t.stateNode.nextSibling):null;return!0}function wm(){for(var t=ln;t;)t=Li(t.nextSibling)}function as(){ln=un=null,et=!1}function Jc(t){bn===null?bn=[t]:bn.push(t)}var c0=fi.ReactCurrentBatchConfig;function Cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Ho(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xf(t){var e=t._init;return e(t._payload)}function Am(t){function e(c,_){if(t){var p=c.deletions;p===null?(c.deletions=[_],c.flags|=16):p.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Ni(c,_),c.index=0,c.sibling=null,c}function s(c,_,p){return c.index=p,t?(p=c.alternate,p!==null?(p=p.index,p<_?(c.flags|=2,_):p):(c.flags|=2,_)):(c.flags|=1048576,_)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,p,S){return _===null||_.tag!==6?(_=$l(p,c.mode,S),_.return=c,_):(_=r(_,p),_.return=c,_)}function l(c,_,p,S){var w=p.type;return w===kr?d(c,_,p.props.children,S,p.key):_!==null&&(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===yi&&xf(w)===_.type)?(S=r(_,p.props),S.ref=Cs(c,_,p),S.return=c,S):(S=Aa(p.type,p.key,p.props,null,c.mode,S),S.ref=Cs(c,_,p),S.return=c,S)}function u(c,_,p,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==p.containerInfo||_.stateNode.implementation!==p.implementation?(_=Kl(p,c.mode,S),_.return=c,_):(_=r(_,p.children||[]),_.return=c,_)}function d(c,_,p,S,w){return _===null||_.tag!==7?(_=ar(p,c.mode,S,w),_.return=c,_):(_=r(_,p),_.return=c,_)}function h(c,_,p){if(typeof _=="string"&&_!==""||typeof _=="number")return _=$l(""+_,c.mode,p),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Lo:return p=Aa(_.type,_.key,_.props,null,c.mode,p),p.ref=Cs(c,null,_),p.return=c,p;case Or:return _=Kl(_,c.mode,p),_.return=c,_;case yi:var S=_._init;return h(c,S(_._payload),p)}if(Os(_)||Es(_))return _=ar(_,c.mode,p,null),_.return=c,_;Ho(c,_)}return null}function f(c,_,p,S){var w=_!==null?_.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return w!==null?null:a(c,_,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Lo:return p.key===w?l(c,_,p,S):null;case Or:return p.key===w?u(c,_,p,S):null;case yi:return w=p._init,f(c,_,w(p._payload),S)}if(Os(p)||Es(p))return w!==null?null:d(c,_,p,S,null);Ho(c,p)}return null}function v(c,_,p,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(p)||null,a(_,c,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Lo:return c=c.get(S.key===null?p:S.key)||null,l(_,c,S,w);case Or:return c=c.get(S.key===null?p:S.key)||null,u(_,c,S,w);case yi:var C=S._init;return v(c,_,p,C(S._payload),w)}if(Os(S)||Es(S))return c=c.get(p)||null,d(_,c,S,w,null);Ho(_,S)}return null}function x(c,_,p,S){for(var w=null,C=null,R=_,U=_=0,M=null;R!==null&&U<p.length;U++){R.index>U?(M=R,R=null):M=R.sibling;var T=f(c,R,p[U],S);if(T===null){R===null&&(R=M);break}t&&R&&T.alternate===null&&e(c,R),_=s(T,_,U),C===null?w=T:C.sibling=T,C=T,R=M}if(U===p.length)return n(c,R),et&&Qi(c,U),w;if(R===null){for(;U<p.length;U++)R=h(c,p[U],S),R!==null&&(_=s(R,_,U),C===null?w=R:C.sibling=R,C=R);return et&&Qi(c,U),w}for(R=i(c,R);U<p.length;U++)M=v(R,c,U,p[U],S),M!==null&&(t&&M.alternate!==null&&R.delete(M.key===null?U:M.key),_=s(M,_,U),C===null?w=M:C.sibling=M,C=M);return t&&R.forEach(function(Q){return e(c,Q)}),et&&Qi(c,U),w}function y(c,_,p,S){var w=Es(p);if(typeof w!="function")throw Error(te(150));if(p=w.call(p),p==null)throw Error(te(151));for(var C=w=null,R=_,U=_=0,M=null,T=p.next();R!==null&&!T.done;U++,T=p.next()){R.index>U?(M=R,R=null):M=R.sibling;var Q=f(c,R,T.value,S);if(Q===null){R===null&&(R=M);break}t&&R&&Q.alternate===null&&e(c,R),_=s(Q,_,U),C===null?w=Q:C.sibling=Q,C=Q,R=M}if(T.done)return n(c,R),et&&Qi(c,U),w;if(R===null){for(;!T.done;U++,T=p.next())T=h(c,T.value,S),T!==null&&(_=s(T,_,U),C===null?w=T:C.sibling=T,C=T);return et&&Qi(c,U),w}for(R=i(c,R);!T.done;U++,T=p.next())T=v(R,c,U,T.value,S),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?U:T.key),_=s(T,_,U),C===null?w=T:C.sibling=T,C=T);return t&&R.forEach(function(ne){return e(c,ne)}),et&&Qi(c,U),w}function m(c,_,p,S){if(typeof p=="object"&&p!==null&&p.type===kr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Lo:e:{for(var w=p.key,C=_;C!==null;){if(C.key===w){if(w=p.type,w===kr){if(C.tag===7){n(c,C.sibling),_=r(C,p.props.children),_.return=c,c=_;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===yi&&xf(w)===C.type){n(c,C.sibling),_=r(C,p.props),_.ref=Cs(c,C,p),_.return=c,c=_;break e}n(c,C);break}else e(c,C);C=C.sibling}p.type===kr?(_=ar(p.props.children,c.mode,S,p.key),_.return=c,c=_):(S=Aa(p.type,p.key,p.props,null,c.mode,S),S.ref=Cs(c,_,p),S.return=c,c=S)}return o(c);case Or:e:{for(C=p.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===p.containerInfo&&_.stateNode.implementation===p.implementation){n(c,_.sibling),_=r(_,p.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=Kl(p,c.mode,S),_.return=c,c=_}return o(c);case yi:return C=p._init,m(c,_,C(p._payload),S)}if(Os(p))return x(c,_,p,S);if(Es(p))return y(c,_,p,S);Ho(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,p),_.return=c,c=_):(n(c,_),_=$l(p,c.mode,S),_.return=c,c=_),o(c)):n(c,_)}return m}var ls=Am(!0),Rm=Am(!1),Ha=Wi(null),Ga=null,Xr=null,ed=null;function td(){ed=Xr=Ga=null}function nd(t){var e=Ha.current;Qe(Ha),t._currentValue=e}function rc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function es(t,e){Ga=t,ed=Xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kt=!0),t.firstContext=null)}function yn(t){var e=t._currentValue;if(ed!==t)if(t={context:t,memoizedValue:e,next:null},Xr===null){if(Ga===null)throw Error(te(308));Xr=t,Ga.dependencies={lanes:0,firstContext:t}}else Xr=Xr.next=t;return e}var rr=null;function id(t){rr===null?rr=[t]:rr.push(t)}function Cm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,id(e)):(n.next=r.next,r.next=n),e.interleaved=n,ci(t,i)}function ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Si=!1;function rd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,He&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ci(t,n)}return r=i.interleaved,r===null?(e.next=e,id(i)):(e.next=r.next,r.next=e),i.interleaved=e,ci(t,n)}function ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vc(t,n)}}function yf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Va(t,e,n,i){var r=t.updateQueue;Si=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,v=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(f=e,v=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(v,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(v,h,f):x,f==null)break e;h=rt({},h,f);break e;case 2:Si=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=h):d=d.next=v,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);mr|=o,t.lanes=o,t.memoizedState=h}}function Sf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var yo={},Vn=Wi(yo),lo=Wi(yo),uo=Wi(yo);function sr(t){if(t===yo)throw Error(te(174));return t}function sd(t,e){switch(Ye(uo,e),Ye(lo,t),Ye(Vn,yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ku(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ku(e,t)}Qe(Vn),Ye(Vn,e)}function us(){Qe(Vn),Qe(lo),Qe(uo)}function Lm(t){sr(uo.current);var e=sr(Vn.current),n=ku(e,t.type);e!==n&&(Ye(lo,t),Ye(Vn,n))}function od(t){lo.current===t&&(Qe(Vn),Qe(lo))}var nt=Wi(0);function Wa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vl=[];function ad(){for(var t=0;t<Vl.length;t++)Vl[t]._workInProgressVersionPrimary=null;Vl.length=0}var Sa=fi.ReactCurrentDispatcher,Wl=fi.ReactCurrentBatchConfig,pr=0,it=null,gt=null,Mt=null,ja=!1,Xs=!1,co=0,d0=0;function Dt(){throw Error(te(321))}function ld(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function ud(t,e,n,i,r,s){if(pr=s,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sa.current=t===null||t.memoizedState===null?m0:g0,t=n(i,r),Xs){s=0;do{if(Xs=!1,co=0,25<=s)throw Error(te(301));s+=1,Mt=gt=null,e.updateQueue=null,Sa.current=v0,t=n(i,r)}while(Xs)}if(Sa.current=Xa,e=gt!==null&&gt.next!==null,pr=0,Mt=gt=it=null,ja=!1,e)throw Error(te(300));return t}function cd(){var t=co!==0;return co=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?it.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function Sn(){if(gt===null){var t=it.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=Mt===null?it.memoizedState:Mt.next;if(e!==null)Mt=e,gt=t;else{if(t===null)throw Error(te(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Mt===null?it.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function fo(t,e){return typeof e=="function"?e(t):e}function jl(t){var e=Sn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((pr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,it.lanes|=d,mr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Fn(i,e.memoizedState)||(Kt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,it.lanes|=s,mr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xl(t){var e=Sn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Fn(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Pm(){}function Dm(t,e){var n=it,i=Sn(),r=e(),s=!Fn(i.memoizedState,r);if(s&&(i.memoizedState=r,Kt=!0),i=i.queue,dd(Im.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Mt!==null&&Mt.memoizedState.tag&1){if(n.flags|=2048,ho(9,Nm.bind(null,n,i,r,e),void 0,null),Tt===null)throw Error(te(349));pr&30||Um(n,e,r)}return r}function Um(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Nm(t,e,n,i){e.value=n,e.getSnapshot=i,Fm(e)&&Om(t)}function Im(t,e,n){return n(function(){Fm(e)&&Om(t)})}function Fm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function Om(t){var e=ci(t,1);e!==null&&Nn(e,t,1,-1)}function Mf(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:t},e.queue=t,t=t.dispatch=p0.bind(null,it,t),[e.memoizedState,t]}function ho(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function km(){return Sn().memoizedState}function Ma(t,e,n,i){var r=zn();it.flags|=t,r.memoizedState=ho(1|e,n,void 0,i===void 0?null:i)}function ll(t,e,n,i){var r=Sn();i=i===void 0?null:i;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,i!==null&&ld(i,o.deps)){r.memoizedState=ho(e,n,s,i);return}}it.flags|=t,r.memoizedState=ho(1|e,n,s,i)}function Ef(t,e){return Ma(8390656,8,t,e)}function dd(t,e){return ll(2048,8,t,e)}function zm(t,e){return ll(4,2,t,e)}function Bm(t,e){return ll(4,4,t,e)}function Hm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gm(t,e,n){return n=n!=null?n.concat([t]):null,ll(4,4,Hm.bind(null,e,t),n)}function fd(){}function Vm(t,e){var n=Sn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ld(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Wm(t,e){var n=Sn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ld(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function jm(t,e,n){return pr&21?(Fn(n,e)||(n=Kp(),it.lanes|=n,mr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=n)}function f0(t,e){var n=We;We=n!==0&&4>n?n:4,t(!0);var i=Wl.transition;Wl.transition={};try{t(!1),e()}finally{We=n,Wl.transition=i}}function Xm(){return Sn().memoizedState}function h0(t,e,n){var i=Ui(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},qm(t))Ym(e,n);else if(n=Cm(t,e,n,i),n!==null){var r=Wt();Nn(n,t,i,r),$m(n,e,i)}}function p0(t,e,n){var i=Ui(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(qm(t))Ym(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Fn(a,o)){var l=e.interleaved;l===null?(r.next=r,id(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Cm(t,e,r,i),n!==null&&(r=Wt(),Nn(n,t,i,r),$m(n,e,i))}}function qm(t){var e=t.alternate;return t===it||e!==null&&e===it}function Ym(t,e){Xs=ja=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $m(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vc(t,n)}}var Xa={readContext:yn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},m0={readContext:yn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:Ef,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ma(4194308,4,Hm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ma(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ma(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=h0.bind(null,it,t),[i.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:Mf,useDebugValue:fd,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=Mf(!1),e=t[0];return t=f0.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=it,r=zn();if(et){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Tt===null)throw Error(te(349));pr&30||Um(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ef(Im.bind(null,i,s,t),[t]),i.flags|=2048,ho(9,Nm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=Tt.identifierPrefix;if(et){var n=ii,i=ni;n=(i&~(1<<32-Un(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=d0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},g0={readContext:yn,useCallback:Vm,useContext:yn,useEffect:dd,useImperativeHandle:Gm,useInsertionEffect:zm,useLayoutEffect:Bm,useMemo:Wm,useReducer:jl,useRef:km,useState:function(){return jl(fo)},useDebugValue:fd,useDeferredValue:function(t){var e=Sn();return jm(e,gt.memoizedState,t)},useTransition:function(){var t=jl(fo)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:Pm,useSyncExternalStore:Dm,useId:Xm,unstable_isNewReconciler:!1},v0={readContext:yn,useCallback:Vm,useContext:yn,useEffect:dd,useImperativeHandle:Gm,useInsertionEffect:zm,useLayoutEffect:Bm,useMemo:Wm,useReducer:Xl,useRef:km,useState:function(){return Xl(fo)},useDebugValue:fd,useDeferredValue:function(t){var e=Sn();return gt===null?e.memoizedState=t:jm(e,gt.memoizedState,t)},useTransition:function(){var t=Xl(fo)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:Pm,useSyncExternalStore:Dm,useId:Xm,unstable_isNewReconciler:!1};function Rn(t,e){if(t&&t.defaultProps){e=rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ul={isMounted:function(t){return(t=t._reactInternals)?_r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Ui(t),s=oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Pi(t,s,r),e!==null&&(Nn(e,t,r,i),ya(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Wt(),r=Ui(t),s=oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pi(t,s,r),e!==null&&(Nn(e,t,r,i),ya(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),i=Ui(t),r=oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Pi(t,r,i),e!==null&&(Nn(e,t,i,n),ya(e,t,i))}};function Tf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ro(n,i)||!ro(r,s):!0}function Km(t,e,n){var i=!1,r=zi,s=e.contextType;return typeof s=="object"&&s!==null?s=yn(s):(r=Qt(e)?fr:kt.current,i=e.contextTypes,s=(i=i!=null)?os(t,r):zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ul,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function wf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ul.enqueueReplaceState(e,e.state,null)}function oc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},rd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=yn(s):(s=Qt(e)?fr:kt.current,r.context=os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ul.enqueueReplaceState(r,r.state,null),Va(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function cs(t,e){try{var n="",i=e;do n+=jv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ql(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ac(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _0=typeof WeakMap=="function"?WeakMap:Map;function Zm(t,e,n){n=oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ya||(Ya=!0,vc=i),ac(t,e)},n}function Qm(t,e,n){n=oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ac(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ac(t,e),typeof i!="function"&&(Di===null?Di=new Set([this]):Di.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Af(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new _0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=D0.bind(null,t,e,n),e.then(t,t))}function Rf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=oi(-1,1),e.tag=2,Pi(n,e,1))),n.lanes|=1),t)}var x0=fi.ReactCurrentOwner,Kt=!1;function Gt(t,e,n,i){e.child=t===null?Rm(e,null,n,i):ls(e,t.child,n,i)}function bf(t,e,n,i,r){n=n.render;var s=e.ref;return es(e,r),i=ud(t,e,n,i,s,r),n=cd(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(et&&n&&Zc(e),e.flags|=1,Gt(t,e,i,r),e.child)}function Lf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!yd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jm(t,e,s,i,r)):(t=Aa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ro,n(o,i)&&t.ref===e.ref)return di(t,e,r)}return e.flags|=1,t=Ni(s,i),t.ref=e.ref,t.return=e,e.child=t}function Jm(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ro(s,i)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,di(t,e,r)}return lc(t,e,n,i,r)}function eg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(Yr,an),an|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ye(Yr,an),an|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ye(Yr,an),an|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ye(Yr,an),an|=i;return Gt(t,e,r,n),e.child}function tg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lc(t,e,n,i,r){var s=Qt(n)?fr:kt.current;return s=os(e,s),es(e,r),n=ud(t,e,n,i,s,r),i=cd(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,di(t,e,r)):(et&&i&&Zc(e),e.flags|=1,Gt(t,e,n,r),e.child)}function Pf(t,e,n,i,r){if(Qt(n)){var s=!0;ka(e)}else s=!1;if(es(e,r),e.stateNode===null)Ea(t,e),Km(e,n,i),oc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yn(u):(u=Qt(n)?fr:kt.current,u=os(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&wf(e,o,i,u),Si=!1;var f=e.memoizedState;o.state=f,Va(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Zt.current||Si?(typeof d=="function"&&(sc(e,n,d,i),l=e.memoizedState),(a=Si||Tf(e,n,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,bm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Rn(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yn(l):(l=Qt(n)?fr:kt.current,l=os(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&wf(e,o,i,l),Si=!1,f=e.memoizedState,o.state=f,Va(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||Zt.current||Si?(typeof v=="function"&&(sc(e,n,v,i),x=e.memoizedState),(u=Si||Tf(e,n,u,i,f,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return uc(t,e,n,i,s,r)}function uc(t,e,n,i,r,s){tg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&gf(e,n,!1),di(t,e,s);i=e.stateNode,x0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ls(e,t.child,null,s),e.child=ls(e,null,a,s)):Gt(t,e,a,s),e.memoizedState=i.state,r&&gf(e,n,!0),e.child}function ng(t){var e=t.stateNode;e.pendingContext?mf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mf(t,e.context,!1),sd(t,e.containerInfo)}function Df(t,e,n,i,r){return as(),Jc(r),e.flags|=256,Gt(t,e,n,i),e.child}var cc={dehydrated:null,treeContext:null,retryLane:0};function dc(t){return{baseLanes:t,cachePool:null,transitions:null}}function ig(t,e,n){var i=e.pendingProps,r=nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ye(nt,r&1),t===null)return ic(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fl(o,i,0,null),t=ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dc(n),e.memoizedState=cc,t):hd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return y0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ni(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ni(a,s):(s=ar(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?dc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cc,i}return s=t.child,t=s.sibling,i=Ni(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function hd(t,e){return e=fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Go(t,e,n,i){return i!==null&&Jc(i),ls(e,t.child,null,n),t=hd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function y0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ql(Error(te(422))),Go(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fl({mode:"visible",children:i.children},r,0,null),s=ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ls(e,t.child,null,o),e.child.memoizedState=dc(o),e.memoizedState=cc,s);if(!(e.mode&1))return Go(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=ql(s,i,void 0),Go(t,e,o,i)}if(a=(o&t.childLanes)!==0,Kt||a){if(i=Tt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ci(t,r),Nn(i,t,r,-1))}return xd(),i=ql(Error(te(421))),Go(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=U0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ln=Li(r.nextSibling),un=e,et=!0,bn=null,t!==null&&(mn[gn++]=ni,mn[gn++]=ii,mn[gn++]=hr,ni=t.id,ii=t.overflow,hr=e),e=hd(e,i.children),e.flags|=4096,e)}function Uf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rc(t.return,e,n)}function Yl(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function rg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gt(t,e,i.children,n),i=nt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uf(t,n,e);else if(t.tag===19)Uf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ye(nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Wa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Yl(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Wa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Yl(e,!0,n,null,s);break;case"together":Yl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ea(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function S0(t,e,n){switch(e.tag){case 3:ng(e),as();break;case 5:Lm(e);break;case 1:Qt(e.type)&&ka(e);break;case 4:sd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ye(Ha,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ye(nt,nt.current&1),e.flags|=128,null):n&e.child.childLanes?ig(t,e,n):(Ye(nt,nt.current&1),t=di(t,e,n),t!==null?t.sibling:null);Ye(nt,nt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return rg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ye(nt,nt.current),i)break;return null;case 22:case 23:return e.lanes=0,eg(t,e,n)}return di(t,e,n)}var sg,fc,og,ag;sg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fc=function(){};og=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,sr(Vn.current);var s=null;switch(n){case"input":r=Nu(t,r),i=Nu(t,i),s=[];break;case"select":r=rt({},r,{value:void 0}),i=rt({},i,{value:void 0}),s=[];break;case"textarea":r=Ou(t,r),i=Ou(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Fa)}zu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ze("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ag=function(t,e,n,i){n!==i&&(e.flags|=4)};function bs(t,e){if(!et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function M0(t,e,n){var i=e.pendingProps;switch(Qc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Qt(e.type)&&Oa(),Ut(e),null;case 3:return i=e.stateNode,us(),Qe(Zt),Qe(kt),ad(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bn!==null&&(yc(bn),bn=null))),fc(t,e),Ut(e),null;case 5:od(e);var r=sr(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)og(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ut(e),null}if(t=sr(Vn.current),Bo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Hn]=e,i[ao]=s,t=(e.mode&1)!==0,n){case"dialog":Ze("cancel",i),Ze("close",i);break;case"iframe":case"object":case"embed":Ze("load",i);break;case"video":case"audio":for(r=0;r<zs.length;r++)Ze(zs[r],i);break;case"source":Ze("error",i);break;case"img":case"image":case"link":Ze("error",i),Ze("load",i);break;case"details":Ze("toggle",i);break;case"input":Hd(i,s),Ze("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ze("invalid",i);break;case"textarea":Vd(i,s),Ze("invalid",i)}zu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,t),r=["children",""+a]):Zs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ze("scroll",i)}switch(n){case"input":Po(i),Gd(i,s,!0);break;case"textarea":Po(i),Wd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Fa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ip(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Hn]=e,t[ao]=i,sg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bu(n,i),n){case"dialog":Ze("cancel",t),Ze("close",t),r=i;break;case"iframe":case"object":case"embed":Ze("load",t),r=i;break;case"video":case"audio":for(r=0;r<zs.length;r++)Ze(zs[r],t);r=i;break;case"source":Ze("error",t),r=i;break;case"img":case"image":case"link":Ze("error",t),Ze("load",t),r=i;break;case"details":Ze("toggle",t),r=i;break;case"input":Hd(t,i),r=Nu(t,i),Ze("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=rt({},i,{value:void 0}),Ze("invalid",t);break;case"textarea":Vd(t,i),r=Ou(t,i),Ze("invalid",t);break;default:r=i}zu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?kp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qs(t,l):typeof l=="number"&&Qs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ze("scroll",t):l!=null&&Oc(t,s,l,o))}switch(n){case"input":Po(t),Gd(t,i,!1);break;case"textarea":Po(t),Wd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ki(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Kr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Kr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Fa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)ag(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=sr(uo.current),sr(Vn.current),Bo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Hn]=e,(s=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:zo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Hn]=e,e.stateNode=i}return Ut(e),null;case 13:if(Qe(nt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(et&&ln!==null&&e.mode&1&&!(e.flags&128))wm(),as(),e.flags|=98560,s=!1;else if(s=Bo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Hn]=e}else as(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),s=!1}else bn!==null&&(yc(bn),bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||nt.current&1?vt===0&&(vt=3):xd())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return us(),fc(t,e),t===null&&so(e.stateNode.containerInfo),Ut(e),null;case 10:return nd(e.type._context),Ut(e),null;case 17:return Qt(e.type)&&Oa(),Ut(e),null;case 19:if(Qe(nt),s=e.memoizedState,s===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)bs(s,!1);else{if(vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wa(t),o!==null){for(e.flags|=128,bs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ye(nt,nt.current&1|2),e.child}t=t.sibling}s.tail!==null&&lt()>ds&&(e.flags|=128,i=!0,bs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Wa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!et)return Ut(e),null}else 2*lt()-s.renderingStartTime>ds&&n!==1073741824&&(e.flags|=128,i=!0,bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=lt(),e.sibling=null,n=nt.current,Ye(nt,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return _d(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?an&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function E0(t,e){switch(Qc(e),e.tag){case 1:return Qt(e.type)&&Oa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return us(),Qe(Zt),Qe(kt),ad(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return od(e),null;case 13:if(Qe(nt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));as()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Qe(nt),null;case 4:return us(),null;case 10:return nd(e.type._context),null;case 22:case 23:return _d(),null;case 24:return null;default:return null}}var Vo=!1,Ft=!1,T0=typeof WeakSet=="function"?WeakSet:Set,fe=null;function qr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ot(t,e,i)}else n.current=null}function hc(t,e,n){try{n()}catch(i){ot(t,e,i)}}var Nf=!1;function w0(t,e){if(Ku=Ua,t=fm(),Kc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var v;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)f=h,h=v;for(;;){if(h===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++d===i&&(l=o),(v=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zu={focusedElem:t,selectionRange:n},Ua=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,m=x.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?y:Rn(e.type,y),m);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){ot(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return x=Nf,Nf=!1,x}function qs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&hc(e,n,s)}r=r.next}while(r!==i)}}function cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function pc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lg(t){var e=t.alternate;e!==null&&(t.alternate=null,lg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[ao],delete e[ec],delete e[a0],delete e[l0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ug(t){return t.tag===5||t.tag===3||t.tag===4}function If(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fa));else if(i!==4&&(t=t.child,t!==null))for(mc(t,e,n),t=t.sibling;t!==null;)mc(t,e,n),t=t.sibling}function gc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gc(t,e,n),t=t.sibling;t!==null;)gc(t,e,n),t=t.sibling}var At=null,Cn=!1;function mi(t,e,n){for(n=n.child;n!==null;)cg(t,e,n),n=n.sibling}function cg(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:Ft||qr(n,e);case 6:var i=At,r=Cn;At=null,mi(t,e,n),At=i,Cn=r,At!==null&&(Cn?(t=At,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):At.removeChild(n.stateNode));break;case 18:At!==null&&(Cn?(t=At,n=n.stateNode,t.nodeType===8?Hl(t.parentNode,n):t.nodeType===1&&Hl(t,n),no(t)):Hl(At,n.stateNode));break;case 4:i=At,r=Cn,At=n.stateNode.containerInfo,Cn=!0,mi(t,e,n),At=i,Cn=r;break;case 0:case 11:case 14:case 15:if(!Ft&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&hc(n,e,o),r=r.next}while(r!==i)}mi(t,e,n);break;case 1:if(!Ft&&(qr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ot(n,e,a)}mi(t,e,n);break;case 21:mi(t,e,n);break;case 22:n.mode&1?(Ft=(i=Ft)||n.memoizedState!==null,mi(t,e,n),Ft=i):mi(t,e,n);break;default:mi(t,e,n)}}function Ff(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new T0),e.forEach(function(i){var r=N0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Mn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:At=a.stateNode,Cn=!1;break e;case 3:At=a.stateNode.containerInfo,Cn=!0;break e;case 4:At=a.stateNode.containerInfo,Cn=!0;break e}a=a.return}if(At===null)throw Error(te(160));cg(s,o,r),At=null,Cn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ot(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dg(e,t),e=e.sibling}function dg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mn(e,t),kn(t),i&4){try{qs(3,t,t.return),cl(3,t)}catch(y){ot(t,t.return,y)}try{qs(5,t,t.return)}catch(y){ot(t,t.return,y)}}break;case 1:Mn(e,t),kn(t),i&512&&n!==null&&qr(n,n.return);break;case 5:if(Mn(e,t),kn(t),i&512&&n!==null&&qr(n,n.return),t.flags&32){var r=t.stateNode;try{Qs(r,"")}catch(y){ot(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Up(r,s),Bu(a,o);var u=Bu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?kp(r,h):d==="dangerouslySetInnerHTML"?Fp(r,h):d==="children"?Qs(r,h):Oc(r,d,h,u)}switch(a){case"input":Iu(r,s);break;case"textarea":Np(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Kr(r,!!s.multiple,v,!1):f!==!!s.multiple&&(s.defaultValue!=null?Kr(r,!!s.multiple,s.defaultValue,!0):Kr(r,!!s.multiple,s.multiple?[]:"",!1))}r[ao]=s}catch(y){ot(t,t.return,y)}}break;case 6:if(Mn(e,t),kn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){ot(t,t.return,y)}}break;case 3:if(Mn(e,t),kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(y){ot(t,t.return,y)}break;case 4:Mn(e,t),kn(t);break;case 13:Mn(e,t),kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(gd=lt())),i&4&&Ff(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(u=Ft)||d,Mn(e,t),Ft=u):Mn(e,t),kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(fe=t,d=t.child;d!==null;){for(h=fe=d;fe!==null;){switch(f=fe,v=f.child,f.tag){case 0:case 11:case 14:case 15:qs(4,f,f.return);break;case 1:qr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){ot(i,n,y)}}break;case 5:qr(f,f.return);break;case 22:if(f.memoizedState!==null){kf(h);continue}}v!==null?(v.return=f,fe=v):kf(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Op("display",o))}catch(y){ot(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){ot(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Mn(e,t),kn(t),i&4&&Ff(t);break;case 21:break;default:Mn(e,t),kn(t)}}function kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ug(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qs(r,""),i.flags&=-33);var s=If(t);gc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=If(t);mc(t,a,o);break;default:throw Error(te(161))}}catch(l){ot(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function A0(t,e,n){fe=t,fg(t)}function fg(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Vo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ft;a=Vo;var u=Ft;if(Vo=o,(Ft=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?zf(r):l!==null?(l.return=o,fe=l):zf(r);for(;s!==null;)fe=s,fg(s),s=s.sibling;fe=r,Vo=a,Ft=u}Of(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):Of(t)}}function Of(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||cl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ft)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Rn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&no(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Ft||e.flags&512&&pc(e)}catch(f){ot(e,e.return,f)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function kf(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function zf(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cl(4,e)}catch(l){ot(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ot(e,r,l)}}var s=e.return;try{pc(e)}catch(l){ot(e,s,l)}break;case 5:var o=e.return;try{pc(e)}catch(l){ot(e,o,l)}}}catch(l){ot(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var R0=Math.ceil,qa=fi.ReactCurrentDispatcher,pd=fi.ReactCurrentOwner,xn=fi.ReactCurrentBatchConfig,He=0,Tt=null,pt=null,bt=0,an=0,Yr=Wi(0),vt=0,po=null,mr=0,dl=0,md=0,Ys=null,Yt=null,gd=0,ds=1/0,Jn=null,Ya=!1,vc=null,Di=null,Wo=!1,wi=null,$a=0,$s=0,_c=null,Ta=-1,wa=0;function Wt(){return He&6?lt():Ta!==-1?Ta:Ta=lt()}function Ui(t){return t.mode&1?He&2&&bt!==0?bt&-bt:c0.transition!==null?(wa===0&&(wa=Kp()),wa):(t=We,t!==0||(t=window.event,t=t===void 0?16:im(t.type)),t):1}function Nn(t,e,n,i){if(50<$s)throw $s=0,_c=null,Error(te(185));vo(t,n,i),(!(He&2)||t!==Tt)&&(t===Tt&&(!(He&2)&&(dl|=n),vt===4&&Ei(t,bt)),Jt(t,i),n===1&&He===0&&!(e.mode&1)&&(ds=lt()+500,al&&ji()))}function Jt(t,e){var n=t.callbackNode;c_(t,e);var i=Da(t,t===Tt?bt:0);if(i===0)n!==null&&qd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qd(n),e===1)t.tag===0?u0(Bf.bind(null,t)):Mm(Bf.bind(null,t)),s0(function(){!(He&6)&&ji()}),n=null;else{switch(Zp(i)){case 1:n=Gc;break;case 4:n=Yp;break;case 16:n=Pa;break;case 536870912:n=$p;break;default:n=Pa}n=yg(n,hg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hg(t,e){if(Ta=-1,wa=0,He&6)throw Error(te(327));var n=t.callbackNode;if(ts()&&t.callbackNode!==n)return null;var i=Da(t,t===Tt?bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ka(t,i);else{e=i;var r=He;He|=2;var s=mg();(Tt!==t||bt!==e)&&(Jn=null,ds=lt()+500,or(t,e));do try{L0();break}catch(a){pg(t,a)}while(1);td(),qa.current=s,He=r,pt!==null?e=0:(Tt=null,bt=0,e=vt)}if(e!==0){if(e===2&&(r=ju(t),r!==0&&(i=r,e=xc(t,r))),e===1)throw n=po,or(t,0),Ei(t,i),Jt(t,lt()),n;if(e===6)Ei(t,i);else{if(r=t.current.alternate,!(i&30)&&!C0(r)&&(e=Ka(t,i),e===2&&(s=ju(t),s!==0&&(i=s,e=xc(t,s))),e===1))throw n=po,or(t,0),Ei(t,i),Jt(t,lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Ji(t,Yt,Jn);break;case 3:if(Ei(t,i),(i&130023424)===i&&(e=gd+500-lt(),10<e)){if(Da(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Wt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ju(Ji.bind(null,t,Yt,Jn),e);break}Ji(t,Yt,Jn);break;case 4:if(Ei(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Un(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*R0(i/1960))-i,10<i){t.timeoutHandle=Ju(Ji.bind(null,t,Yt,Jn),i);break}Ji(t,Yt,Jn);break;case 5:Ji(t,Yt,Jn);break;default:throw Error(te(329))}}}return Jt(t,lt()),t.callbackNode===n?hg.bind(null,t):null}function xc(t,e){var n=Ys;return t.current.memoizedState.isDehydrated&&(or(t,e).flags|=256),t=Ka(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&yc(e)),t}function yc(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function C0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Fn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ei(t,e){for(e&=~md,e&=~dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),i=1<<n;t[n]=-1,e&=~i}}function Bf(t){if(He&6)throw Error(te(327));ts();var e=Da(t,0);if(!(e&1))return Jt(t,lt()),null;var n=Ka(t,e);if(t.tag!==0&&n===2){var i=ju(t);i!==0&&(e=i,n=xc(t,i))}if(n===1)throw n=po,or(t,0),Ei(t,e),Jt(t,lt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ji(t,Yt,Jn),Jt(t,lt()),null}function vd(t,e){var n=He;He|=1;try{return t(e)}finally{He=n,He===0&&(ds=lt()+500,al&&ji())}}function gr(t){wi!==null&&wi.tag===0&&!(He&6)&&ts();var e=He;He|=1;var n=xn.transition,i=We;try{if(xn.transition=null,We=1,t)return t()}finally{We=i,xn.transition=n,He=e,!(He&6)&&ji()}}function _d(){an=Yr.current,Qe(Yr)}function or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,r0(n)),pt!==null)for(n=pt.return;n!==null;){var i=n;switch(Qc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Oa();break;case 3:us(),Qe(Zt),Qe(kt),ad();break;case 5:od(i);break;case 4:us();break;case 13:Qe(nt);break;case 19:Qe(nt);break;case 10:nd(i.type._context);break;case 22:case 23:_d()}n=n.return}if(Tt=t,pt=t=Ni(t.current,null),bt=an=e,vt=0,po=null,md=dl=mr=0,Yt=Ys=null,rr!==null){for(e=0;e<rr.length;e++)if(n=rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}rr=null}return t}function pg(t,e){do{var n=pt;try{if(td(),Sa.current=Xa,ja){for(var i=it.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ja=!1}if(pr=0,Mt=gt=it=null,Xs=!1,co=0,pd.current=null,n===null||n.return===null){vt=1,po=e,pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Rf(o);if(v!==null){v.flags&=-257,Cf(v,o,a,s,e),v.mode&1&&Af(s,u,e),e=v,l=u;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){Af(s,u,e),xd();break e}l=Error(te(426))}}else if(et&&a.mode&1){var m=Rf(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Cf(m,o,a,s,e),Jc(cs(l,a));break e}}s=l=cs(l,a),vt!==4&&(vt=2),Ys===null?Ys=[s]:Ys.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Zm(s,l,e);yf(s,c);break e;case 1:a=l;var _=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Di===null||!Di.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Qm(s,a,e);yf(s,S);break e}}s=s.return}while(s!==null)}vg(n)}catch(w){e=w,pt===n&&n!==null&&(pt=n=n.return);continue}break}while(1)}function mg(){var t=qa.current;return qa.current=Xa,t===null?Xa:t}function xd(){(vt===0||vt===3||vt===2)&&(vt=4),Tt===null||!(mr&268435455)&&!(dl&268435455)||Ei(Tt,bt)}function Ka(t,e){var n=He;He|=2;var i=mg();(Tt!==t||bt!==e)&&(Jn=null,or(t,e));do try{b0();break}catch(r){pg(t,r)}while(1);if(td(),He=n,qa.current=i,pt!==null)throw Error(te(261));return Tt=null,bt=0,vt}function b0(){for(;pt!==null;)gg(pt)}function L0(){for(;pt!==null&&!t_();)gg(pt)}function gg(t){var e=xg(t.alternate,t,an);t.memoizedProps=t.pendingProps,e===null?vg(t):pt=e,pd.current=null}function vg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=E0(n,e),n!==null){n.flags&=32767,pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vt=6,pt=null;return}}else if(n=M0(n,e,an),n!==null){pt=n;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);vt===0&&(vt=5)}function Ji(t,e,n){var i=We,r=xn.transition;try{xn.transition=null,We=1,P0(t,e,n,i)}finally{xn.transition=r,We=i}return null}function P0(t,e,n,i){do ts();while(wi!==null);if(He&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(d_(t,s),t===Tt&&(pt=Tt=null,bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wo||(Wo=!0,yg(Pa,function(){return ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xn.transition,xn.transition=null;var o=We;We=1;var a=He;He|=4,pd.current=null,w0(t,n),dg(n,t),Z_(Zu),Ua=!!Ku,Zu=Ku=null,t.current=n,A0(n),n_(),He=a,We=o,xn.transition=s}else t.current=n;if(Wo&&(Wo=!1,wi=t,$a=r),s=t.pendingLanes,s===0&&(Di=null),s_(n.stateNode),Jt(t,lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ya)throw Ya=!1,t=vc,vc=null,t;return $a&1&&t.tag!==0&&ts(),s=t.pendingLanes,s&1?t===_c?$s++:($s=0,_c=t):$s=0,ji(),null}function ts(){if(wi!==null){var t=Zp($a),e=xn.transition,n=We;try{if(xn.transition=null,We=16>t?16:t,wi===null)var i=!1;else{if(t=wi,wi=null,$a=0,He&6)throw Error(te(331));var r=He;for(He|=4,fe=t.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var d=fe;switch(d.tag){case 0:case 11:case 15:qs(8,d,s)}var h=d.child;if(h!==null)h.return=d,fe=h;else for(;fe!==null;){d=fe;var f=d.sibling,v=d.return;if(lg(d),d===u){fe=null;break}if(f!==null){f.return=v,fe=f;break}fe=v}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qs(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,fe=c;break e}fe=s.return}}var _=t.current;for(fe=_;fe!==null;){o=fe;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,fe=p;else e:for(o=_;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cl(9,a)}}catch(w){ot(a,a.return,w)}if(a===o){fe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,fe=S;break e}fe=a.return}}if(He=r,ji(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(nl,t)}catch{}i=!0}return i}finally{We=n,xn.transition=e}}return!1}function Hf(t,e,n){e=cs(n,e),e=Zm(t,e,1),t=Pi(t,e,1),e=Wt(),t!==null&&(vo(t,1,e),Jt(t,e))}function ot(t,e,n){if(t.tag===3)Hf(t,t,n);else for(;e!==null;){if(e.tag===3){Hf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Di===null||!Di.has(i))){t=cs(n,t),t=Qm(e,t,1),e=Pi(e,t,1),t=Wt(),e!==null&&(vo(e,1,t),Jt(e,t));break}}e=e.return}}function D0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,Tt===t&&(bt&n)===n&&(vt===4||vt===3&&(bt&130023424)===bt&&500>lt()-gd?or(t,0):md|=n),Jt(t,e)}function _g(t,e){e===0&&(t.mode&1?(e=No,No<<=1,!(No&130023424)&&(No=4194304)):e=1);var n=Wt();t=ci(t,e),t!==null&&(vo(t,e,n),Jt(t,n))}function U0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_g(t,n)}function N0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),_g(t,n)}var xg;xg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kt=!1,S0(t,e,n);Kt=!!(t.flags&131072)}else Kt=!1,et&&e.flags&1048576&&Em(e,Ba,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ea(t,e),t=e.pendingProps;var r=os(e,kt.current);es(e,n),r=ud(null,e,i,t,r,n);var s=cd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(i)?(s=!0,ka(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rd(e),r.updater=ul,e.stateNode=r,r._reactInternals=e,oc(e,i,t,n),e=uc(null,e,i,!0,s,n)):(e.tag=0,et&&s&&Zc(e),Gt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ea(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=F0(i),t=Rn(i,t),r){case 0:e=lc(null,e,i,t,n);break e;case 1:e=Pf(null,e,i,t,n);break e;case 11:e=bf(null,e,i,t,n);break e;case 14:e=Lf(null,e,i,Rn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),lc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),Pf(t,e,i,r,n);case 3:e:{if(ng(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,bm(t,e),Va(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=cs(Error(te(423)),e),e=Df(t,e,i,n,r);break e}else if(i!==r){r=cs(Error(te(424)),e),e=Df(t,e,i,n,r);break e}else for(ln=Li(e.stateNode.containerInfo.firstChild),un=e,et=!0,bn=null,n=Rm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),i===r){e=di(t,e,n);break e}Gt(t,e,i,n)}e=e.child}return e;case 5:return Lm(e),t===null&&ic(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Qu(i,r)?o=null:s!==null&&Qu(i,s)&&(e.flags|=32),tg(t,e),Gt(t,e,o,n),e.child;case 6:return t===null&&ic(e),null;case 13:return ig(t,e,n);case 4:return sd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ls(e,null,i,n):Gt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),bf(t,e,i,r,n);case 7:return Gt(t,e,e.pendingProps,n),e.child;case 8:return Gt(t,e,e.pendingProps.children,n),e.child;case 12:return Gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ye(Ha,i._currentValue),i._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===r.children&&!Zt.current){e=di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=oi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,es(e,n),r=yn(r),i=i(r),e.flags|=1,Gt(t,e,i,n),e.child;case 14:return i=e.type,r=Rn(i,e.pendingProps),r=Rn(i.type,r),Lf(t,e,i,r,n);case 15:return Jm(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Rn(i,r),Ea(t,e),e.tag=1,Qt(i)?(t=!0,ka(e)):t=!1,es(e,n),Km(e,i,r),oc(e,i,r,n),uc(null,e,i,!0,t,n);case 19:return rg(t,e,n);case 22:return eg(t,e,n)}throw Error(te(156,e.tag))};function yg(t,e){return qp(t,e)}function I0(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,i){return new I0(t,e,n,i)}function yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function F0(t){if(typeof t=="function")return yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zc)return 11;if(t===Bc)return 14}return 2}function Ni(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Aa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")yd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case kr:return ar(n.children,r,s,e);case kc:o=8,r|=8;break;case Lu:return t=_n(12,n,e,r|2),t.elementType=Lu,t.lanes=s,t;case Pu:return t=_n(13,n,e,r),t.elementType=Pu,t.lanes=s,t;case Du:return t=_n(19,n,e,r),t.elementType=Du,t.lanes=s,t;case Lp:return fl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cp:o=10;break e;case bp:o=9;break e;case zc:o=11;break e;case Bc:o=14;break e;case yi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=_n(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ar(t,e,n,i){return t=_n(7,t,i,e),t.lanes=n,t}function fl(t,e,n,i){return t=_n(22,t,i,e),t.elementType=Lp,t.lanes=n,t.stateNode={isHidden:!1},t}function $l(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function Kl(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function O0(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sd(t,e,n,i,r,s,o,a,l){return t=new O0(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rd(s),t}function k0(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Or,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Sg(t){if(!t)return zi;t=t._reactInternals;e:{if(_r(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(Qt(n))return Sm(t,n,e)}return e}function Mg(t,e,n,i,r,s,o,a,l){return t=Sd(n,i,!0,t,r,s,o,a,l),t.context=Sg(null),n=t.current,i=Wt(),r=Ui(n),s=oi(i,r),s.callback=e??null,Pi(n,s,r),t.current.lanes=r,vo(t,r,i),Jt(t,i),t}function hl(t,e,n,i){var r=e.current,s=Wt(),o=Ui(r);return n=Sg(n),e.context===null?e.context=n:e.pendingContext=n,e=oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Pi(r,e,o),t!==null&&(Nn(t,r,o,s),ya(t,r,o)),o}function Za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Md(t,e){Gf(t,e),(t=t.alternate)&&Gf(t,e)}function z0(){return null}var Eg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ed(t){this._internalRoot=t}pl.prototype.render=Ed.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));hl(t,e,null,null)};pl.prototype.unmount=Ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gr(function(){hl(null,t,null,null)}),e[ui]=null}};function pl(t){this._internalRoot=t}pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=em();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mi.length&&e!==0&&e<Mi[n].priority;n++);Mi.splice(n,0,t),n===0&&nm(t)}};function Td(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vf(){}function B0(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Za(o);s.call(u)}}var o=Mg(e,i,t,0,null,!1,!1,"",Vf);return t._reactRootContainer=o,t[ui]=o.current,so(t.nodeType===8?t.parentNode:t),gr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Za(l);a.call(u)}}var l=Sd(t,0,!1,null,null,!1,!1,"",Vf);return t._reactRootContainer=l,t[ui]=l.current,so(t.nodeType===8?t.parentNode:t),gr(function(){hl(e,l,n,i)}),l}function gl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Za(o);a.call(l)}}hl(e,o,t,r)}else o=B0(n,e,t,r,i);return Za(o)}Qp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ks(e.pendingLanes);n!==0&&(Vc(e,n|1),Jt(e,lt()),!(He&6)&&(ds=lt()+500,ji()))}break;case 13:gr(function(){var i=ci(t,1);if(i!==null){var r=Wt();Nn(i,t,1,r)}}),Md(t,1)}};Wc=function(t){if(t.tag===13){var e=ci(t,134217728);if(e!==null){var n=Wt();Nn(e,t,134217728,n)}Md(t,134217728)}};Jp=function(t){if(t.tag===13){var e=Ui(t),n=ci(t,e);if(n!==null){var i=Wt();Nn(n,t,e,i)}Md(t,e)}};em=function(){return We};tm=function(t,e){var n=We;try{return We=t,e()}finally{We=n}};Gu=function(t,e,n){switch(e){case"input":if(Iu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ol(i);if(!r)throw Error(te(90));Dp(i),Iu(i,r)}}}break;case"textarea":Np(t,n);break;case"select":e=n.value,e!=null&&Kr(t,!!n.multiple,e,!1)}};Hp=vd;Gp=gr;var H0={usingClientEntryPoint:!1,Events:[xo,Gr,ol,zp,Bp,vd]},Ls={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G0={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jp(t),t===null?null:t.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{nl=jo.inject(G0),Gn=jo}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0;dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Td(e))throw Error(te(200));return k0(t,e,null,n)};dn.createRoot=function(t,e){if(!Td(t))throw Error(te(299));var n=!1,i="",r=Eg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sd(t,1,!1,null,null,n,!1,i,r),t[ui]=e.current,so(t.nodeType===8?t.parentNode:t),new Ed(e)};dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=jp(e),t=t===null?null:t.stateNode,t};dn.flushSync=function(t){return gr(t)};dn.hydrate=function(t,e,n){if(!ml(e))throw Error(te(200));return gl(null,t,e,!0,n)};dn.hydrateRoot=function(t,e,n){if(!Td(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Eg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Mg(e,null,t,1,n??null,r,!1,s,o),t[ui]=e.current,so(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new pl(e)};dn.render=function(t,e,n){if(!ml(e))throw Error(te(200));return gl(null,t,e,!1,n)};dn.unmountComponentAtNode=function(t){if(!ml(t))throw Error(te(40));return t._reactRootContainer?(gr(function(){gl(null,null,t,!1,function(){t._reactRootContainer=null,t[ui]=null})}),!0):!1};dn.unstable_batchedUpdates=vd;dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ml(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return gl(t,e,n,!1,i)};dn.version="18.3.1-next-f1338f8080-20240426";function Tg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tg)}catch(t){console.error(t)}}Tg(),Tp.exports=dn;var V0=Tp.exports,Wf=V0;Cu.createRoot=Wf.createRoot,Cu.hydrateRoot=Wf.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="155",W0=0,jf=1,j0=2,wg=1,X0=2,Qn=3,Bi=0,en=1,ti=2,Ii=0,ns=1,Sc=2,Xf=3,qf=4,q0=5,Fr=100,Y0=101,$0=102,Yf=103,$f=104,K0=200,Z0=201,Q0=202,J0=203,Ag=204,Rg=205,ex=206,tx=207,nx=208,ix=209,rx=210,sx=0,ox=1,ax=2,Mc=3,lx=4,ux=5,cx=6,dx=7,Cg=0,fx=1,hx=2,Fi=0,px=1,mx=2,gx=3,vx=4,_x=5,bg=300,fs=301,hs=302,Ec=303,Tc=304,vl=306,wc=1e3,Vt=1001,Ac=1002,Rt=1003,Kf=1004,Zl=1005,Ot=1006,xx=1007,mo=1008,Oi=1009,yx=1010,Sx=1011,Ad=1012,Lg=1013,Ai=1014,ri=1015,ps=1016,Pg=1017,Dg=1018,lr=1020,Mx=1021,vn=1023,Ex=1024,Tx=1025,ur=1026,ms=1027,wx=1028,Ug=1029,Ax=1030,Ng=1031,Ig=1033,Ql=33776,Jl=33777,eu=33778,tu=33779,Zf=35840,Qf=35841,Jf=35842,eh=35843,Rx=36196,th=37492,nh=37496,ih=37808,rh=37809,sh=37810,oh=37811,ah=37812,lh=37813,uh=37814,ch=37815,dh=37816,fh=37817,hh=37818,ph=37819,mh=37820,gh=37821,nu=36492,Cx=36283,vh=36284,_h=36285,xh=36286,Fg=3e3,cr=3001,bx=3200,Lx=3201,Px=0,Dx=1,dr="",Ie="srgb",Wn="srgb-linear",Og="display-p3",iu=7680,Ux=519,Nx=512,Ix=513,Fx=514,Ox=515,kx=516,zx=517,Bx=518,Hx=519,yh=35044,Sh="300 es",Rc=1035,si=2e3,Qa=2001;class ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=Math.PI/180,Cc=180/Math.PI;function So(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function Gx(t,e){return(t%e+e)%e}function su(t,e,n){return(1-n)*t+n*e}function Mh(t){return(t&t-1)===0&&t!==0}function bc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,n=0){Le.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],d=i[4],h=i[7],f=i[2],v=i[5],x=i[8],y=r[0],m=r[3],c=r[6],_=r[1],p=r[4],S=r[7],w=r[2],C=r[5],R=r[8];return s[0]=o*y+a*_+l*w,s[3]=o*m+a*p+l*C,s[6]=o*c+a*S+l*R,s[1]=u*y+d*_+h*w,s[4]=u*m+d*p+h*C,s[7]=u*c+d*S+h*R,s[2]=f*y+v*_+x*w,s[5]=f*m+v*p+x*C,s[8]=f*c+v*S+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return n*o*d-n*a*u-i*s*d+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],h=d*o-a*u,f=a*l-d*s,v=u*s-o*l,x=n*h+i*f+r*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(r*u-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=v*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ou.makeScale(e,n)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,n){return this.premultiply(ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ou=new Fe;function kg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ja(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Eh={};function Ks(t){t in Eh||(Eh[t]=!0,console.warn(t))}function is(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function au(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Vx=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Wx=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function jx(t){return t.convertSRGBToLinear().applyMatrix3(Wx)}function Xx(t){return t.applyMatrix3(Vx).convertLinearToSRGB()}const qx={[Wn]:t=>t,[Ie]:t=>t.convertSRGBToLinear(),[Og]:jx},Yx={[Wn]:t=>t,[Ie]:t=>t.convertLinearToSRGB(),[Og]:Xx},En={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Wn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=qx[e],r=Yx[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let yr;class zg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yr===void 0&&(yr=Ja("canvas")),yr.width=e.width,yr.height=e.height;const i=yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=yr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ja("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=is(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(is(n[i]/255)*255):n[i]=is(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $x=0;class Bg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=So(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lu(r[o].image)):s.push(lu(r[o]))}else s=lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kx=0;class tn extends ys{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Vt,r=Vt,s=Ot,o=mo,a=vn,l=Oi,u=tn.DEFAULT_ANISOTROPY,d=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=So(),this.name="",this.source=new Bg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===cr?Ie:dr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wc:e.x=e.x-Math.floor(e.x);break;case Vt:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wc:e.y=e.y-Math.floor(e.y);break;case Vt:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ie?cr:Fg}set encoding(e){Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===cr?Ie:dr}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=bg;tn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],h=l[8],f=l[1],v=l[5],x=l[9],y=l[2],m=l[6],c=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(x+m)<.1&&Math.abs(u+v+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const p=(u+1)/2,S=(v+1)/2,w=(c+1)/2,C=(d+f)/4,R=(h+y)/4,U=(x+m)/4;return p>S&&p>w?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=C/i,s=R/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=U/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=U/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-x)*(m-x)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(h-y)/_,this.z=(f-d)/_,this.w=Math.acos((u+v+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zx extends ys{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===cr?Ie:dr),this.texture=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ot,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Bg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends Zx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Hg extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qx extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],v=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=v,e[n+2]=x,e[n+3]=y;return}if(h!==y||l!==f||u!==v||d!==x){let m=1-a;const c=l*f+u*v+d*x+h*y,_=c>=0?1:-1,p=1-c*c;if(p>Number.EPSILON){const w=Math.sqrt(p),C=Math.atan2(w,c*_);m=Math.sin(m*C)/w,a=Math.sin(a*C)/w}const S=a*_;if(l=l*m+f*S,u=u*m+v*S,d=d*m+x*S,h=h*m+y*S,m===1-a){const w=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=w,u*=w,d*=w,h*=w}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o],f=s[o+1],v=s[o+2],x=s[o+3];return e[n]=a*x+d*h+l*v-u*f,e[n+1]=l*x+d*f+u*h-a*v,e[n+2]=u*x+d*v+a*f-l*h,e[n+3]=d*x-a*h-l*f-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),v=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*d*h+u*v*x,this._y=u*v*h-f*d*x,this._z=u*d*x+f*v*h,this._w=u*d*h-f*v*x;break;case"YXZ":this._x=f*d*h+u*v*x,this._y=u*v*h-f*d*x,this._z=u*d*x-f*v*h,this._w=u*d*h+f*v*x;break;case"ZXY":this._x=f*d*h-u*v*x,this._y=u*v*h+f*d*x,this._z=u*d*x+f*v*h,this._w=u*d*h-f*v*x;break;case"ZYX":this._x=f*d*h-u*v*x,this._y=u*v*h+f*d*x,this._z=u*d*x-f*v*h,this._w=u*d*h+f*v*x;break;case"YZX":this._x=f*d*h+u*v*x,this._y=u*v*h+f*d*x,this._z=u*d*x-f*v*h,this._w=u*d*h-f*v*x;break;case"XZY":this._x=f*d*h-u*v*x,this._y=u*v*h-f*d*x,this._z=u*d*x+f*v*h,this._w=u*d*h+f*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(d-l)*v,this._y=(s-u)*v,this._z=(o-r)*v}else if(i>a&&i>h){const v=2*Math.sqrt(1+i-a-h);this._w=(d-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+u)/v}else if(a>h){const v=2*Math.sqrt(1+a-i-h);this._w=(s-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+d)/v}else{const v=2*Math.sqrt(1+h-i-a);this._w=(o-r)/v,this._x=(s+u)/v,this._y=(l+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-i*u,this._z=s*d+o*u+i*l-r*a,this._w=o*d-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-n;return this._w=v*o+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),h=Math.sin((1-n)*d)/u,f=Math.sin(n*d)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Th.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,d=l*i+a*n-s*r,h=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=u*l+f*-s+d*-a-h*-o,this.y=d*l+f*-o+h*-s-u*-a,this.z=h*l+f*-a+u*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new k,Th=new Mo;class Eo{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox),Sr.applyMatrix4(e.matrixWorld),this.union(Sr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)qn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(qn)}else r.boundingBox===null&&r.computeBoundingBox(),Sr.copy(r.boundingBox),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Xo.subVectors(this.max,Ds),Mr.subVectors(e.a,Ds),Er.subVectors(e.b,Ds),Tr.subVectors(e.c,Ds),gi.subVectors(Er,Mr),vi.subVectors(Tr,Er),Yi.subVectors(Mr,Tr);let n=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-Yi.z,Yi.y,gi.z,0,-gi.x,vi.z,0,-vi.x,Yi.z,0,-Yi.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-Yi.y,Yi.x,0];return!cu(n,Mr,Er,Tr,Xo)||(n=[1,0,0,0,1,0,0,0,1],!cu(n,Mr,Er,Tr,Xo))?!1:(qo.crossVectors(gi,vi),n=[qo.x,qo.y,qo.z],cu(n,Mr,Er,Tr,Xo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new k,new k,new k,new k,new k,new k,new k,new k],qn=new k,Sr=new Eo,Mr=new k,Er=new k,Tr=new k,gi=new k,vi=new k,Yi=new k,Ds=new k,Xo=new k,qo=new k,$i=new k;function cu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$i.fromArray(t,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),u=n.dot($i),d=i.dot($i);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const Jx=new Eo,Us=new k,du=new k;class _l{constructor(e=new k,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Jx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const n=Us.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(du)),this.expandByPoint(Us.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new k,fu=new k,Yo=new k,_i=new k,hu=new k,$o=new k,pu=new k;class Gg{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,n),Yn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){fu.copy(e).add(n).multiplyScalar(.5),Yo.copy(n).sub(e).normalize(),_i.copy(this.origin).sub(fu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Yo),a=_i.dot(this.direction),l=-_i.dot(Yo),u=_i.lengthSq(),d=Math.abs(1-o*o);let h,f,v,x;if(d>0)if(h=o*l-a,f=o*a-l,x=s*d,h>=0)if(f>=-x)if(f<=x){const y=1/d;h*=y,f*=y,v=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),v=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),v=-h*h+f*(f+2*l)+u;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),v=-h*h+f*(f+2*l)+u):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),v=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),v=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),v=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(fu).addScaledVector(Yo,f),v}intersectSphere(e,n){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,n,i,r,s){hu.subVectors(n,e),$o.subVectors(i,e),pu.crossVectors(hu,$o);let o=this.direction.dot(pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot($o.crossVectors(_i,$o));if(l<0)return null;const u=a*this.direction.dot(hu.cross(_i));if(u<0||l+u>o)return null;const d=-a*_i.dot(pu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,o,a,l,u,d,h,f,v,x,y,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,d,h,f,v,x,y,m)}set(e,n,i,r,s,o,a,l,u,d,h,f,v,x,y,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=d,c[10]=h,c[14]=f,c[3]=v,c[7]=x,c[11]=y,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/wr.setFromMatrixColumn(e,0).length(),s=1/wr.setFromMatrixColumn(e,1).length(),o=1/wr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,v=o*h,x=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=u,n[1]=v+x*u,n[5]=f-y*u,n[9]=-a*l,n[2]=y-f*u,n[6]=x+v*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,v=l*h,x=u*d,y=u*h;n[0]=f+y*a,n[4]=x*a-v,n[8]=o*u,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=v*a-x,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,v=l*h,x=u*d,y=u*h;n[0]=f-y*a,n[4]=-o*h,n[8]=x+v*a,n[1]=v+x*a,n[5]=o*d,n[9]=y-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,v=o*h,x=a*d,y=a*h;n[0]=l*d,n[4]=x*u-v,n[8]=f*u+y,n[1]=l*h,n[5]=y*u+f,n[9]=v*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,v=o*u,x=a*l,y=a*u;n[0]=l*d,n[4]=y-f*h,n[8]=x*h+v,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-u*d,n[6]=v*h+x,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,v=o*u,x=a*l,y=a*u;n[0]=l*d,n[4]=-h,n[8]=u*d,n[1]=f*h+y,n[5]=o*d,n[9]=v*h-x,n[2]=x*h-v,n[6]=a*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ey,e,ty)}lookAt(e,n,i){const r=this.elements;return sn.subVectors(e,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),xi.crossVectors(i,sn),xi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),xi.crossVectors(i,sn)),xi.normalize(),Ko.crossVectors(sn,xi),r[0]=xi.x,r[4]=Ko.x,r[8]=sn.x,r[1]=xi.y,r[5]=Ko.y,r[9]=sn.y,r[2]=xi.z,r[6]=Ko.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],d=i[1],h=i[5],f=i[9],v=i[13],x=i[2],y=i[6],m=i[10],c=i[14],_=i[3],p=i[7],S=i[11],w=i[15],C=r[0],R=r[4],U=r[8],M=r[12],T=r[1],Q=r[5],ne=r[9],z=r[13],B=r[2],X=r[6],ee=r[10],Z=r[14],D=r[3],H=r[7],V=r[11],N=r[15];return s[0]=o*C+a*T+l*B+u*D,s[4]=o*R+a*Q+l*X+u*H,s[8]=o*U+a*ne+l*ee+u*V,s[12]=o*M+a*z+l*Z+u*N,s[1]=d*C+h*T+f*B+v*D,s[5]=d*R+h*Q+f*X+v*H,s[9]=d*U+h*ne+f*ee+v*V,s[13]=d*M+h*z+f*Z+v*N,s[2]=x*C+y*T+m*B+c*D,s[6]=x*R+y*Q+m*X+c*H,s[10]=x*U+y*ne+m*ee+c*V,s[14]=x*M+y*z+m*Z+c*N,s[3]=_*C+p*T+S*B+w*D,s[7]=_*R+p*Q+S*X+w*H,s[11]=_*U+p*ne+S*ee+w*V,s[15]=_*M+p*z+S*Z+w*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],h=e[6],f=e[10],v=e[14],x=e[3],y=e[7],m=e[11],c=e[15];return x*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*v-i*l*v)+y*(+n*l*v-n*u*f+s*o*f-r*o*v+r*u*d-s*l*d)+m*(+n*u*h-n*a*v-s*o*h+i*o*v+s*a*d-i*u*d)+c*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],h=e[9],f=e[10],v=e[11],x=e[12],y=e[13],m=e[14],c=e[15],_=h*m*u-y*f*u+y*l*v-a*m*v-h*l*c+a*f*c,p=x*f*u-d*m*u-x*l*v+o*m*v+d*l*c-o*f*c,S=d*y*u-x*h*u+x*a*v-o*y*v-d*a*c+o*h*c,w=x*h*l-d*y*l-x*a*f+o*y*f+d*a*m-o*h*m,C=n*_+i*p+r*S+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=_*R,e[1]=(y*f*s-h*m*s-y*r*v+i*m*v+h*r*c-i*f*c)*R,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*c+i*l*c)*R,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*v-i*l*v)*R,e[4]=p*R,e[5]=(d*m*s-x*f*s+x*r*v-n*m*v-d*r*c+n*f*c)*R,e[6]=(x*l*s-o*m*s-x*r*u+n*m*u+o*r*c-n*l*c)*R,e[7]=(o*f*s-d*l*s+d*r*u-n*f*u-o*r*v+n*l*v)*R,e[8]=S*R,e[9]=(x*h*s-d*y*s-x*i*v+n*y*v+d*i*c-n*h*c)*R,e[10]=(o*y*s-x*a*s+x*i*u-n*y*u-o*i*c+n*a*c)*R,e[11]=(d*a*s-o*h*s-d*i*u+n*h*u+o*i*v-n*a*v)*R,e[12]=w*R,e[13]=(d*y*r-x*h*r+x*i*f-n*y*f-d*i*m+n*h*m)*R,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*m-n*a*m)*R,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,d=o+o,h=a+a,f=s*u,v=s*d,x=s*h,y=o*d,m=o*h,c=a*h,_=l*u,p=l*d,S=l*h,w=i.x,C=i.y,R=i.z;return r[0]=(1-(y+c))*w,r[1]=(v+S)*w,r[2]=(x-p)*w,r[3]=0,r[4]=(v-S)*C,r[5]=(1-(f+c))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(x+p)*R,r[9]=(m-_)*R,r[10]=(1-(f+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=wr.set(r[0],r[1],r[2]).length();const o=wr.set(r[4],r[5],r[6]).length(),a=wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);const u=1/s,d=1/o,h=1/a;return Tn.elements[0]*=u,Tn.elements[1]*=u,Tn.elements[2]*=u,Tn.elements[4]*=d,Tn.elements[5]*=d,Tn.elements[6]*=d,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,n.setFromRotationMatrix(Tn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=si){const l=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let v,x;if(a===si)v=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Qa)v=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=si){const l=this.elements,u=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*u,v=(i+r)*d;let x,y;if(a===si)x=(o+s)*h,y=-2*h;else if(a===Qa)x=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const wr=new k,Tn=new wt,ey=new k(0,0,0),ty=new k(1,1,1),xi=new k,Ko=new k,sn=new k,wh=new wt,Ah=new Mo;class xl{constructor(e=0,n=0,i=0,r=xl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],h=r[2],f=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xl.DEFAULT_ORDER="XYZ";class Vg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ny=0;const Rh=new k,Ar=new Mo,$n=new wt,Zo=new k,Ns=new k,iy=new k,ry=new Mo,Ch=new k(1,0,0),bh=new k(0,1,0),Lh=new k(0,0,1),sy={type:"added"},Ph={type:"removed"};class nn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new k,n=new xl,i=new Mo,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Fe}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ar.setFromAxisAngle(e,n),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,n){return Ar.setFromAxisAngle(e,n),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Lh,e)}translateOnAxis(e,n){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Zo.copy(e):Zo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ns,Zo,this.up):$n.lookAt(Zo,Ns,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix($n),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ph)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Ph)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,iy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,ry,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),v=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),v.length>0&&(i.animations=v),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new k(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new k,Kn=new k,mu=new k,Zn=new k,Rr=new k,Cr=new k,Dh=new k,gu=new k,vu=new k,_u=new k;let Qo=!1;class Ln{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),wn.subVectors(e,n),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){wn.subVectors(r,n),Kn.subVectors(i,n),mu.subVectors(e,n);const o=wn.dot(wn),a=wn.dot(Kn),l=wn.dot(mu),u=Kn.dot(Kn),d=Kn.dot(mu),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,v=(u*l-a*d)*f,x=(o*d-a*l)*f;return s.set(1-v-x,x,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,n,i,r,s,o,a,l){return Qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qo=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Zn),l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l}static isFrontFacing(e,n,i,r){return wn.subVectors(i,n),Kn.subVectors(e,n),wn.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),wn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ln.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qo=!0),Ln.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Rr.subVectors(r,i),Cr.subVectors(s,i),gu.subVectors(e,i);const l=Rr.dot(gu),u=Cr.dot(gu);if(l<=0&&u<=0)return n.copy(i);vu.subVectors(e,r);const d=Rr.dot(vu),h=Cr.dot(vu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*u;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Rr,o);_u.subVectors(e,s);const v=Rr.dot(_u),x=Cr.dot(_u);if(x>=0&&v<=x)return n.copy(s);const y=v*u-l*x;if(y<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Cr,a);const m=d*x-v*h;if(m<=0&&h-d>=0&&v-x>=0)return Dh.subVectors(s,r),a=(h-d)/(h-d+(v-x)),n.copy(r).addScaledVector(Dh,a);const c=1/(m+y+f);return o=y*c,a=f*c,n.copy(i).addScaledVector(Rr,o).addScaledVector(Cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let oy=0;class To extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=So(),this.name="",this.type="Material",this.blending=ns,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ag,this.blendDst=Rg,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=iu,this.stencilZFail=iu,this.stencilZPass=iu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function xu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ie){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,En.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=En.workingColorSpace){return this.r=e,this.g=n,this.b=i,En.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=En.workingColorSpace){if(e=Gx(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=xu(o,s,e+1/3),this.g=xu(o,s,e),this.b=xu(o,s,e-1/3)}return En.toWorkingColorSpace(this,r),this}setStyle(e,n=Ie){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ie){const i=Wg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=au(e.r),this.g=au(e.g),this.b=au(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ie){return En.fromWorkingColorSpace(It.copy(this),e),Math.round($t(It.r*255,0,255))*65536+Math.round($t(It.g*255,0,255))*256+Math.round($t(It.b*255,0,255))}getHexString(e=Ie){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=En.workingColorSpace){En.fromWorkingColorSpace(It.copy(this),n);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=En.workingColorSpace){return En.fromWorkingColorSpace(It.copy(this),n),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Ie){En.fromWorkingColorSpace(It.copy(this),e);const n=It.r,i=It.g,r=It.b;return e!==Ie?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(An),An.h+=e,An.s+=n,An.l+=i,this.setHSL(An.h,An.s,An.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(An),e.getHSL(Jo);const i=su(An.h,Jo.h,n),r=su(An.s,Jo.s,n),s=su(An.l,Jo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Xe;Xe.NAMES=Wg;class jg extends To{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new k,ea=new Le;class In{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=yh,this.updateRange={offset:0,count:-1},this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ea.fromBufferAttribute(this,n),ea.applyMatrix3(e),this.setXY(n,ea.x,ea.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix3(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyMatrix4(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.applyNormalMatrix(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ht.fromBufferAttribute(this,n),ht.transformDirection(e),this.setXYZ(n,ht.x,ht.y,ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ps(n,this.array)),n}setX(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ps(n,this.array)),n}setY(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ps(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ps(n,this.array)),n}setW(e,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array),s=qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Xg extends In{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class qg extends In{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ai extends In{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ay=0;const pn=new wt,yu=new nn,br=new k,on=new Eo,Is=new Eo,St=new k;class hi extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kg(e)?qg:Xg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,n,i){return pn.makeTranslation(e,n,i),this.applyMatrix4(pn),this}scale(e,n,i){return pn.makeScale(e,n,i),this.applyMatrix4(pn),this}lookAt(e){return yu.lookAt(e),yu.updateMatrix(),this.applyMatrix4(yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ai(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(on.min,Is.min),on.expandByPoint(St),St.addVectors(on.max,Is.max),on.expandByPoint(St)):(on.expandByPoint(Is.min),on.expandByPoint(Is.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)St.fromBufferAttribute(a,u),l&&(br.fromBufferAttribute(e,u),St.add(br)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let T=0;T<a;T++)u[T]=new k,d[T]=new k;const h=new k,f=new k,v=new k,x=new Le,y=new Le,m=new Le,c=new k,_=new k;function p(T,Q,ne){h.fromArray(r,T*3),f.fromArray(r,Q*3),v.fromArray(r,ne*3),x.fromArray(o,T*2),y.fromArray(o,Q*2),m.fromArray(o,ne*2),f.sub(h),v.sub(h),y.sub(x),m.sub(x);const z=1/(y.x*m.y-m.x*y.y);isFinite(z)&&(c.copy(f).multiplyScalar(m.y).addScaledVector(v,-y.y).multiplyScalar(z),_.copy(v).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(z),u[T].add(c),u[Q].add(c),u[ne].add(c),d[T].add(_),d[Q].add(_),d[ne].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,Q=S.length;T<Q;++T){const ne=S[T],z=ne.start,B=ne.count;for(let X=z,ee=z+B;X<ee;X+=3)p(i[X+0],i[X+1],i[X+2])}const w=new k,C=new k,R=new k,U=new k;function M(T){R.fromArray(s,T*3),U.copy(R);const Q=u[T];w.copy(Q),w.sub(R.multiplyScalar(R.dot(Q))).normalize(),C.crossVectors(U,Q);const z=C.dot(d[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=z}for(let T=0,Q=S.length;T<Q;++T){const ne=S[T],z=ne.start,B=ne.count;for(let X=z,ee=z+B;X<ee;X+=3)M(i[X+0]),M(i[X+1]),M(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,v=i.count;f<v;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,d=new k,h=new k;if(e)for(let f=0,v=e.count;f<v;f+=3){const x=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(d),l.add(d),u.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,v=n.count;f<v;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)St.fromBufferAttribute(e,n),St.normalize(),e.setXYZ(n,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,h=a.normalized,f=new u.constructor(l.length*d);let v=0,x=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?v=l[y]*a.data.stride+a.offset:v=l[y]*d;for(let c=0;c<d;c++)f[x++]=u[v++]}return new In(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,h=u.length;d<h;d++){const f=u[d],v=e(f,i);l.push(v)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,f=u.length;h<f;h++){const v=u[h];d.push(v.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],h=s[u];for(let f=0,v=h.length;f<v;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uh=new wt,Ki=new Gg,ta=new _l,Nh=new k,Lr=new k,Pr=new k,Dr=new k,Su=new k,na=new k,ia=new Le,ra=new Le,sa=new Le,Ih=new k,Fh=new k,Oh=new k,oa=new k,aa=new k;class Dn extends nn{constructor(e=new hi,n=new jg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){na.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=a[l],h=s[l];d!==0&&(Su.fromBufferAttribute(h,e),o?na.addScaledVector(Su,d):na.addScaledVector(Su.sub(n),d))}n.add(na)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),!(ta.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ta,Nh)===null||Ki.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Uh.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(Uh),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ki)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,v=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const m=f[x],c=o[m.materialIndex],_=Math.max(m.start,v.start),p=Math.min(a.count,Math.min(m.start+m.count,v.start+v.count));for(let S=_,w=p;S<w;S+=3){const C=a.getX(S),R=a.getX(S+1),U=a.getX(S+2);r=la(this,c,e,i,u,d,h,C,R,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,v.start),y=Math.min(a.count,v.start+v.count);for(let m=x,c=y;m<c;m+=3){const _=a.getX(m),p=a.getX(m+1),S=a.getX(m+2);r=la(this,o,e,i,u,d,h,_,p,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const m=f[x],c=o[m.materialIndex],_=Math.max(m.start,v.start),p=Math.min(l.count,Math.min(m.start+m.count,v.start+v.count));for(let S=_,w=p;S<w;S+=3){const C=S,R=S+1,U=S+2;r=la(this,c,e,i,u,d,h,C,R,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,v.start),y=Math.min(l.count,v.start+v.count);for(let m=x,c=y;m<c;m+=3){const _=m,p=m+1,S=m+2;r=la(this,o,e,i,u,d,h,_,p,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ly(t,e,n,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Bi,a),l===null)return null;aa.copy(a),aa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(aa);return u<n.near||u>n.far?null:{distance:u,point:aa.clone(),object:t}}function la(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Lr),t.getVertexPosition(l,Pr),t.getVertexPosition(u,Dr);const d=ly(t,e,n,i,Lr,Pr,Dr,oa);if(d){r&&(ia.fromBufferAttribute(r,a),ra.fromBufferAttribute(r,l),sa.fromBufferAttribute(r,u),d.uv=Ln.getInterpolation(oa,Lr,Pr,Dr,ia,ra,sa,new Le)),s&&(ia.fromBufferAttribute(s,a),ra.fromBufferAttribute(s,l),sa.fromBufferAttribute(s,u),d.uv1=Ln.getInterpolation(oa,Lr,Pr,Dr,ia,ra,sa,new Le),d.uv2=d.uv1),o&&(Ih.fromBufferAttribute(o,a),Fh.fromBufferAttribute(o,l),Oh.fromBufferAttribute(o,u),d.normal=Ln.getInterpolation(oa,Lr,Pr,Dr,Ih,Fh,Oh,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new k,materialIndex:0};Ln.getNormal(Lr,Pr,Dr,h.normal),d.face=h}return d}class wo extends hi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],h=[];let f=0,v=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ai(u,3)),this.setAttribute("normal",new ai(d,3)),this.setAttribute("uv",new ai(h,2));function x(y,m,c,_,p,S,w,C,R,U,M){const T=S/R,Q=w/U,ne=S/2,z=w/2,B=C/2,X=R+1,ee=U+1;let Z=0,D=0;const H=new k;for(let V=0;V<ee;V++){const N=V*Q-z;for(let j=0;j<X;j++){const oe=j*T-ne;H[y]=oe*_,H[m]=N*p,H[c]=B,u.push(H.x,H.y,H.z),H[y]=0,H[m]=0,H[c]=C>0?1:-1,d.push(H.x,H.y,H.z),h.push(j/R),h.push(1-V/U),Z+=1}}for(let V=0;V<U;V++)for(let N=0;N<R;N++){const j=f+N+X*V,oe=f+N+X*(V+1),se=f+(N+1)+X*(V+1),ue=f+(N+1)+X*V;l.push(j,oe,ue),l.push(oe,se,ue),D+=6}a.addGroup(v,D,M),v+=D,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=gs(t[n]);for(const r in i)e[r]=i[r]}return e}function uy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Yg(t){return t.getRenderTarget()===null?t.outputColorSpace:Wn}const cy={clone:gs,merge:Ht};var dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends To{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dy,this.fragmentShader=fy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=uy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class el extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends el{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Cc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cc*2*Math.atan(Math.tan(ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ru*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ur=-90,Nr=1;class hy extends nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Pn(Ur,Nr,e,n);r.layers=this.layers,this.add(r);const s=new Pn(Ur,Nr,e,n);s.layers=this.layers,this.add(s);const o=new Pn(Ur,Nr,e,n);o.layers=this.layers,this.add(o);const a=new Pn(Ur,Nr,e,n);a.layers=this.layers,this.add(a);const l=new Pn(Ur,Nr,e,n);l.layers=this.layers,this.add(l);const u=new Pn(Ur,Nr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,d=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(d),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class $g extends tn{constructor(e,n,i,r,s,o,a,l,u,d){e=e!==void 0?e:[],n=n!==void 0?n:fs,super(e,n,i,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class py extends Hi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===cr?Ie:dr),this.texture=new $g(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ot}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wo(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Ii});s.uniforms.tEquirect.value=n;const o=new Dn(r,s),a=n.minFilter;return n.minFilter===mo&&(n.minFilter=Ot),new hy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Mu=new k,my=new k,gy=new Fe;class er{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Mu.subVectors(i,n).cross(my.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Mu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gy.getNormalMatrix(e),r=this.coplanarPoint(Mu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new _l,ua=new k;class Kg{constructor(e=new er,n=new er,i=new er,r=new er,s=new er,o=new er){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],v=r[8],x=r[9],y=r[10],m=r[11],c=r[12],_=r[13],p=r[14],S=r[15];if(i[0].setComponents(l-s,f-u,m-v,S-c).normalize(),i[1].setComponents(l+s,f+u,m+v,S+c).normalize(),i[2].setComponents(l+o,f+d,m+x,S+_).normalize(),i[3].setComponents(l-o,f-d,m-x,S-_).normalize(),i[4].setComponents(l-a,f-h,m-y,S-p).normalize(),n===si)i[5].setComponents(l+a,f+h,m+y,S+p).normalize();else if(n===Qa)i[5].setComponents(a,h,y,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ua.x=r.normal.x>0?e.max.x:e.min.x,ua.y=r.normal.y>0?e.max.y:e.min.y,ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function vy(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,d){const h=u.array,f=u.usage,v=t.createBuffer();t.bindBuffer(d,v),t.bufferData(d,h,f),u.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,d,h){const f=d.array,v=d.updateRange;t.bindBuffer(h,u),v.count===-1?t.bufferSubData(h,0,f):(n?t.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f,v.offset,v.count):t.bufferSubData(h,v.offset*f.BYTES_PER_ELEMENT,f.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(t.deleteBuffer(d.buffer),i.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,d)):h.version<u.version&&(s(h.buffer,u,d),h.version=u.version)}return{get:o,remove:a,update:l}}class rs extends hi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,h=e/a,f=n/l,v=[],x=[],y=[],m=[];for(let c=0;c<d;c++){const _=c*f-o;for(let p=0;p<u;p++){const S=p*h-s;x.push(S,-_,0),y.push(0,0,1),m.push(p/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const p=_+u*c,S=_+u*(c+1),w=_+1+u*(c+1),C=_+1+u*c;v.push(p,S,C),v.push(S,w,C)}this.setIndex(v),this.setAttribute("position",new ai(x,3)),this.setAttribute("normal",new ai(y,3)),this.setAttribute("uv",new ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var _y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,My=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ty=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,by=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ly=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,By=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",qy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ky=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,mS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_S=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,xS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,MS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ES=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,TS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,PS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,DS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,US=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,NS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,BS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$S=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,QS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,iM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,MM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,EM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bM=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:_y,alphahash_pars_fragment:xy,alphamap_fragment:yy,alphamap_pars_fragment:Sy,alphatest_fragment:My,alphatest_pars_fragment:Ey,aomap_fragment:Ty,aomap_pars_fragment:wy,begin_vertex:Ay,beginnormal_vertex:Ry,bsdfs:Cy,iridescence_fragment:by,bumpmap_pars_fragment:Ly,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Dy,clipping_planes_pars_vertex:Uy,clipping_planes_vertex:Ny,color_fragment:Iy,color_pars_fragment:Fy,color_pars_vertex:Oy,color_vertex:ky,common:zy,cube_uv_reflection_fragment:By,defaultnormal_vertex:Hy,displacementmap_pars_vertex:Gy,displacementmap_vertex:Vy,emissivemap_fragment:Wy,emissivemap_pars_fragment:jy,colorspace_fragment:Xy,colorspace_pars_fragment:qy,envmap_fragment:Yy,envmap_common_pars_fragment:$y,envmap_pars_fragment:Ky,envmap_pars_vertex:Zy,envmap_physical_pars_fragment:uS,envmap_vertex:Qy,fog_vertex:Jy,fog_pars_vertex:eS,fog_fragment:tS,fog_pars_fragment:nS,gradientmap_pars_fragment:iS,lightmap_fragment:rS,lightmap_pars_fragment:sS,lights_lambert_fragment:oS,lights_lambert_pars_fragment:aS,lights_pars_begin:lS,lights_toon_fragment:cS,lights_toon_pars_fragment:dS,lights_phong_fragment:fS,lights_phong_pars_fragment:hS,lights_physical_fragment:pS,lights_physical_pars_fragment:mS,lights_fragment_begin:gS,lights_fragment_maps:vS,lights_fragment_end:_S,logdepthbuf_fragment:xS,logdepthbuf_pars_fragment:yS,logdepthbuf_pars_vertex:SS,logdepthbuf_vertex:MS,map_fragment:ES,map_pars_fragment:TS,map_particle_fragment:wS,map_particle_pars_fragment:AS,metalnessmap_fragment:RS,metalnessmap_pars_fragment:CS,morphcolor_vertex:bS,morphnormal_vertex:LS,morphtarget_pars_vertex:PS,morphtarget_vertex:DS,normal_fragment_begin:US,normal_fragment_maps:NS,normal_pars_fragment:IS,normal_pars_vertex:FS,normal_vertex:OS,normalmap_pars_fragment:kS,clearcoat_normal_fragment_begin:zS,clearcoat_normal_fragment_maps:BS,clearcoat_pars_fragment:HS,iridescence_pars_fragment:GS,opaque_fragment:VS,packing:WS,premultiplied_alpha_fragment:jS,project_vertex:XS,dithering_fragment:qS,dithering_pars_fragment:YS,roughnessmap_fragment:$S,roughnessmap_pars_fragment:KS,shadowmap_pars_fragment:ZS,shadowmap_pars_vertex:QS,shadowmap_vertex:JS,shadowmask_pars_fragment:eM,skinbase_vertex:tM,skinning_pars_vertex:nM,skinning_vertex:iM,skinnormal_vertex:rM,specularmap_fragment:sM,specularmap_pars_fragment:oM,tonemapping_fragment:aM,tonemapping_pars_fragment:lM,transmission_fragment:uM,transmission_pars_fragment:cM,uv_pars_fragment:dM,uv_pars_vertex:fM,uv_vertex:hM,worldpos_vertex:pM,background_vert:mM,background_frag:gM,backgroundCube_vert:vM,backgroundCube_frag:_M,cube_vert:xM,cube_frag:yM,depth_vert:SM,depth_frag:MM,distanceRGBA_vert:EM,distanceRGBA_frag:TM,equirect_vert:wM,equirect_frag:AM,linedashed_vert:RM,linedashed_frag:CM,meshbasic_vert:bM,meshbasic_frag:LM,meshlambert_vert:PM,meshlambert_frag:DM,meshmatcap_vert:UM,meshmatcap_frag:NM,meshnormal_vert:IM,meshnormal_frag:FM,meshphong_vert:OM,meshphong_frag:kM,meshphysical_vert:zM,meshphysical_frag:BM,meshtoon_vert:HM,meshtoon_frag:GM,points_vert:VM,points_frag:WM,shadow_vert:jM,shadow_frag:XM,sprite_vert:qM,sprite_frag:YM},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Bn={basic:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Ht([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Ht([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Ht([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Ht([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Ht([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Ht([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Ht([ae.common,ae.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Ht([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Bn.physical={uniforms:Ht([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ca={r:0,b:0,g:0};function $M(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,u,d,h=null,f=0,v=null;function x(m,c){let _=!1,p=c.isScene===!0?c.background:null;switch(p&&p.isTexture&&(p=(c.backgroundBlurriness>0?n:e).get(p)),p===null?y(a,l):p&&p.isColor&&(y(p,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.mapping===vl)?(d===void 0&&(d=new Dn(new wo(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:gs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=p,d.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,d.material.toneMapped=p.colorSpace!==Ie,(h!==p||f!==p.version||v!==t.toneMapping)&&(d.material.needsUpdate=!0,h=p,f=p.version,v=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):p&&p.isTexture&&(u===void 0&&(u=new Dn(new rs(2,2),new Gi({name:"BackgroundMaterial",uniforms:gs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=p,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=p.colorSpace!==Ie,p.matrixAutoUpdate===!0&&p.updateMatrix(),u.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||f!==p.version||v!==t.toneMapping)&&(u.material.needsUpdate=!0,h=p,f=p.version,v=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function y(m,c){m.getRGB(ca,Yg(t)),i.buffers.color.setClear(ca.r,ca.g,ca.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(m,c=1){a.set(m),l=c,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:x}}function KM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,d=!1;function h(B,X,ee,Z,D){let H=!1;if(o){const V=y(Z,ee,X);u!==V&&(u=V,v(u.object)),H=c(B,Z,ee,D),H&&_(B,Z,ee,D)}else{const V=X.wireframe===!0;(u.geometry!==Z.id||u.program!==ee.id||u.wireframe!==V)&&(u.geometry=Z.id,u.program=ee.id,u.wireframe=V,H=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(H||d)&&(d=!1,U(B,X,ee,Z),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function v(B){return i.isWebGL2?t.bindVertexArray(B):s.bindVertexArrayOES(B)}function x(B){return i.isWebGL2?t.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function y(B,X,ee){const Z=ee.wireframe===!0;let D=a[B.id];D===void 0&&(D={},a[B.id]=D);let H=D[X.id];H===void 0&&(H={},D[X.id]=H);let V=H[Z];return V===void 0&&(V=m(f()),H[Z]=V),V}function m(B){const X=[],ee=[],Z=[];for(let D=0;D<r;D++)X[D]=0,ee[D]=0,Z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ee,attributeDivisors:Z,object:B,attributes:{},index:null}}function c(B,X,ee,Z){const D=u.attributes,H=X.attributes;let V=0;const N=ee.getAttributes();for(const j in N)if(N[j].location>=0){const se=D[j];let ue=H[j];if(ue===void 0&&(j==="instanceMatrix"&&B.instanceMatrix&&(ue=B.instanceMatrix),j==="instanceColor"&&B.instanceColor&&(ue=B.instanceColor)),se===void 0||se.attribute!==ue||ue&&se.data!==ue.data)return!0;V++}return u.attributesNum!==V||u.index!==Z}function _(B,X,ee,Z){const D={},H=X.attributes;let V=0;const N=ee.getAttributes();for(const j in N)if(N[j].location>=0){let se=H[j];se===void 0&&(j==="instanceMatrix"&&B.instanceMatrix&&(se=B.instanceMatrix),j==="instanceColor"&&B.instanceColor&&(se=B.instanceColor));const ue={};ue.attribute=se,se&&se.data&&(ue.data=se.data),D[j]=ue,V++}u.attributes=D,u.attributesNum=V,u.index=Z}function p(){const B=u.newAttributes;for(let X=0,ee=B.length;X<ee;X++)B[X]=0}function S(B){w(B,0)}function w(B,X){const ee=u.newAttributes,Z=u.enabledAttributes,D=u.attributeDivisors;ee[B]=1,Z[B]===0&&(t.enableVertexAttribArray(B),Z[B]=1),D[B]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,X),D[B]=X)}function C(){const B=u.newAttributes,X=u.enabledAttributes;for(let ee=0,Z=X.length;ee<Z;ee++)X[ee]!==B[ee]&&(t.disableVertexAttribArray(ee),X[ee]=0)}function R(B,X,ee,Z,D,H,V){V===!0?t.vertexAttribIPointer(B,X,ee,D,H):t.vertexAttribPointer(B,X,ee,Z,D,H)}function U(B,X,ee,Z){if(i.isWebGL2===!1&&(B.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const D=Z.attributes,H=ee.getAttributes(),V=X.defaultAttributeValues;for(const N in H){const j=H[N];if(j.location>=0){let oe=D[N];if(oe===void 0&&(N==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),N==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor)),oe!==void 0){const se=oe.normalized,ue=oe.itemSize,ge=n.get(oe);if(ge===void 0)continue;const Me=ge.buffer,_e=ge.type,Ve=ge.bytesPerElement,Pt=i.isWebGL2===!0&&(_e===t.INT||_e===t.UNSIGNED_INT||oe.gpuType===Lg);if(oe.isInterleavedBufferAttribute){const De=oe.data,O=De.stride,yt=oe.offset;if(De.isInstancedInterleavedBuffer){for(let Ee=0;Ee<j.locationSize;Ee++)w(j.location+Ee,De.meshPerAttribute);B.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Ee=0;Ee<j.locationSize;Ee++)S(j.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Ee=0;Ee<j.locationSize;Ee++)R(j.location+Ee,ue/j.locationSize,_e,se,O*Ve,(yt+ue/j.locationSize*Ee)*Ve,Pt)}else{if(oe.isInstancedBufferAttribute){for(let De=0;De<j.locationSize;De++)w(j.location+De,oe.meshPerAttribute);B.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let De=0;De<j.locationSize;De++)S(j.location+De);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let De=0;De<j.locationSize;De++)R(j.location+De,ue/j.locationSize,_e,se,ue*Ve,ue/j.locationSize*De*Ve,Pt)}}else if(V!==void 0){const se=V[N];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(j.location,se);break;case 3:t.vertexAttrib3fv(j.location,se);break;case 4:t.vertexAttrib4fv(j.location,se);break;default:t.vertexAttrib1fv(j.location,se)}}}}C()}function M(){ne();for(const B in a){const X=a[B];for(const ee in X){const Z=X[ee];for(const D in Z)x(Z[D].object),delete Z[D];delete X[ee]}delete a[B]}}function T(B){if(a[B.id]===void 0)return;const X=a[B.id];for(const ee in X){const Z=X[ee];for(const D in Z)x(Z[D].object),delete Z[D];delete X[ee]}delete a[B.id]}function Q(B){for(const X in a){const ee=a[X];if(ee[B.id]===void 0)continue;const Z=ee[B.id];for(const D in Z)x(Z[D].object),delete Z[D];delete ee[B.id]}}function ne(){z(),d=!0,u!==l&&(u=l,v(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:Q,initAttributes:p,enableAttribute:S,disableUnusedAttributes:C}}function ZM(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){t.drawArrays(s,u,d),n.update(d,s,1)}function l(u,d,h){if(h===0)return;let f,v;if(r)f=t,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](s,u,d,h),n.update(d,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function QM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),p=f>0,S=o||e.has("OES_texture_float"),w=p&&S,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:m,maxVaryings:c,maxFragmentUniforms:_,vertexTextures:p,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:C}}function JM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new er,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const v=h.length!==0||f||i!==0||r;return r=f,i=h.length,v},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,v){const x=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,c=t.get(h);if(!r||x===null||x.length===0||s&&!m)s?d(null):u();else{const _=s?0:i,p=_*4;let S=c.clippingState||null;l.value=S,S=d(x,f,p,v);for(let w=0;w!==p;++w)S[w]=n[w];c.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,v,x){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const c=v+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<c)&&(m=new Float32Array(c));for(let p=0,S=v;p!==y;++p,S+=4)o.copy(h[p]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function eE(t){let e=new WeakMap;function n(o,a){return a===Ec?o.mapping=fs:a===Tc&&(o.mapping=hs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ec||a===Tc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new py(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class tE extends el{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const $r=4,kh=[.125,.215,.35,.446,.526,.582],nr=20,Eu=new tE,zh=new Xe;let Tu=null;const tr=(1+Math.sqrt(5))/2,Ir=1/tr,Bh=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,tr,Ir),new k(0,tr,-Ir),new k(Ir,0,tr),new k(-Ir,0,tr),new k(tr,Ir,0),new k(-tr,Ir,0)];class Hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Tu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tu),e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fs||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:ps,format:vn,colorSpace:Wn,depthBuffer:!1},r=Gh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nE(s)),this._blurMaterial=iE(s,e,n)}return r}_compileMaterial(e){const n=new Dn(this._lodPlanes[0],e);this._renderer.compile(n,Eu)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(zh),d.toneMapping=Fi,d.autoClear=!1;const v=new jg({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),x=new Dn(new wo,v);let y=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,y=!0):(v.color.copy(zh),y=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const p=this._cubeSize;da(r,_*p,c>2?p:0,p,p),d.setRenderTarget(r),y&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===fs||e.mapping===hs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;da(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Eu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bh[(r-1)%Bh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Dn(this._lodPlanes[r],u),f=u.uniforms,v=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*nr-1),y=s/x,m=isFinite(s)?1+Math.floor(d*y):nr;m>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);const c=[];let _=0;for(let R=0;R<nr;++R){const U=R/y,M=Math.exp(-U*U/2);c.push(M),R===0?_+=M:R<m&&(_+=2*M)}for(let R=0;R<c.length;R++)c[R]=c[R]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=c,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:p}=this;f.dTheta.value=x,f.mipInt.value=p-i;const S=this._sizeLods[r],w=3*S*(r>p-$r?r-p+$r:0),C=4*(this._cubeSize-S);da(n,w,C,3*S,2*S),l.setRenderTarget(n),l.render(h,Eu)}}function nE(t){const e=[],n=[],i=[];let r=t;const s=t-$r+1+kh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-$r?l=kh[o-t+$r-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,x=6,y=3,m=2,c=1,_=new Float32Array(y*x*v),p=new Float32Array(m*x*v),S=new Float32Array(c*x*v);for(let C=0;C<v;C++){const R=C%3*2/3-1,U=C>2?0:-1,M=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];_.set(M,y*x*C),p.set(f,m*x*C);const T=[C,C,C,C,C,C];S.set(T,c*x*C)}const w=new hi;w.setAttribute("position",new In(_,y)),w.setAttribute("uv",new In(p,m)),w.setAttribute("faceIndex",new In(S,c)),e.push(w),r>$r&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Gh(t,e,n){const i=new Hi(t,e,n);return i.texture.mapping=vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function da(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function iE(t,e,n){const i=new Float32Array(nr),r=new k(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Vh(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Wh(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Rd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ec||l===Tc,d=l===fs||l===hs;if(u||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Hh(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new Hh(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function sE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function oE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const y=f.morphAttributes[x];for(let m=0,c=y.length;m<c;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const v=s.get(f);v&&(e.remove(v),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const v=h.morphAttributes;for(const x in v){const y=v[x];for(let m=0,c=y.length;m<c;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(h){const f=[],v=h.index,x=h.attributes.position;let y=0;if(v!==null){const _=v.array;y=v.version;for(let p=0,S=_.length;p<S;p+=3){const w=_[p+0],C=_[p+1],R=_[p+2];f.push(w,C,C,R,R,w)}}else if(x!==void 0){const _=x.array;y=x.version;for(let p=0,S=_.length/3-1;p<S;p+=3){const w=p+0,C=p+1,R=p+2;f.push(w,C,C,R,R,w)}}else return;const m=new(kg(f)?qg:Xg)(f,1);m.version=y;const c=s.get(h);c&&e.remove(c),s.set(h,m)}function d(h){const f=s.get(h);if(f){const v=h.index;v!==null&&f.version<v.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function aE(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function d(f,v){t.drawElements(s,v,a,f*l),n.update(v,s,1)}function h(f,v,x){if(x===0)return;let y,m;if(r)y=t,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](s,v,a,f*l,x),n.update(v,s,x)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h}function lE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function uE(t,e){return t[0]-e[0]}function cE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function dE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Et,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,d,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==x){let B=function(){ne.dispose(),s.delete(d),d.removeEventListener("dispose",B)};y!==void 0&&y.texture.dispose();const _=d.morphAttributes.position!==void 0,p=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,w=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let U=0;_===!0&&(U=1),p===!0&&(U=2),S===!0&&(U=3);let M=d.attributes.position.count*U,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const Q=new Float32Array(M*T*4*x),ne=new Hg(Q,M,T,x);ne.type=ri,ne.needsUpdate=!0;const z=U*4;for(let X=0;X<x;X++){const ee=w[X],Z=C[X],D=R[X],H=M*T*4*X;for(let V=0;V<ee.count;V++){const N=V*z;_===!0&&(o.fromBufferAttribute(ee,V),Q[H+N+0]=o.x,Q[H+N+1]=o.y,Q[H+N+2]=o.z,Q[H+N+3]=0),p===!0&&(o.fromBufferAttribute(Z,V),Q[H+N+4]=o.x,Q[H+N+5]=o.y,Q[H+N+6]=o.z,Q[H+N+7]=0),S===!0&&(o.fromBufferAttribute(D,V),Q[H+N+8]=o.x,Q[H+N+9]=o.y,Q[H+N+10]=o.z,Q[H+N+11]=D.itemSize===4?o.w:1)}}y={count:x,texture:ne,size:new Le(M,T)},s.set(d,y),d.addEventListener("dispose",B)}let m=0;for(let _=0;_<f.length;_++)m+=f[_];const c=d.morphTargetsRelative?1:1-m;h.getUniforms().setValue(t,"morphTargetBaseInfluence",c),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",y.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",y.size)}else{const v=f===void 0?0:f.length;let x=i[d.id];if(x===void 0||x.length!==v){x=[];for(let p=0;p<v;p++)x[p]=[p,0];i[d.id]=x}for(let p=0;p<v;p++){const S=x[p];S[0]=p,S[1]=f[p]}x.sort(cE);for(let p=0;p<8;p++)p<v&&x[p][1]?(a[p][0]=x[p][0],a[p][1]=x[p][1]):(a[p][0]=Number.MAX_SAFE_INTEGER,a[p][1]=0);a.sort(uE);const y=d.morphAttributes.position,m=d.morphAttributes.normal;let c=0;for(let p=0;p<8;p++){const S=a[p],w=S[0],C=S[1];w!==Number.MAX_SAFE_INTEGER&&C?(y&&d.getAttribute("morphTarget"+p)!==y[w]&&d.setAttribute("morphTarget"+p,y[w]),m&&d.getAttribute("morphNormal"+p)!==m[w]&&d.setAttribute("morphNormal"+p,m[w]),r[p]=C,c+=C):(y&&d.hasAttribute("morphTarget"+p)===!0&&d.deleteAttribute("morphTarget"+p),m&&d.hasAttribute("morphNormal"+p)===!0&&d.deleteAttribute("morphNormal"+p),r[p]=0)}const _=d.morphTargetsRelative?1:1-c;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function fE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Qg=new tn,Jg=new Hg,ev=new Qx,tv=new $g,jh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),$h=new Float32Array(4);function Ss(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=jh[r];if(s===void 0&&(s=new Float32Array(r),jh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function _t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yl(t,e){let n=Xh[e];n===void 0&&(n=new Int32Array(e),Xh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2fv(this.addr,e),xt(n,e)}}function mE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_t(n,e))return;t.uniform3fv(this.addr,e),xt(n,e)}}function gE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4fv(this.addr,e),xt(n,e)}}function vE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xt(n,e)}else{if(_t(n,i))return;$h.set(i),t.uniformMatrix2fv(this.addr,!1,$h),xt(n,i)}}function _E(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xt(n,e)}else{if(_t(n,i))return;Yh.set(i),t.uniformMatrix3fv(this.addr,!1,Yh),xt(n,i)}}function xE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xt(n,e)}else{if(_t(n,i))return;qh.set(i),t.uniformMatrix4fv(this.addr,!1,qh),xt(n,i)}}function yE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function SE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2iv(this.addr,e),xt(n,e)}}function ME(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3iv(this.addr,e),xt(n,e)}}function EE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4iv(this.addr,e),xt(n,e)}}function TE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function wE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2uiv(this.addr,e),xt(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3uiv(this.addr,e),xt(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4uiv(this.addr,e),xt(n,e)}}function CE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Qg,r)}function bE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ev,r)}function LE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||tv,r)}function PE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Jg,r)}function DE(t){switch(t){case 5126:return hE;case 35664:return pE;case 35665:return mE;case 35666:return gE;case 35674:return vE;case 35675:return _E;case 35676:return xE;case 5124:case 35670:return yE;case 35667:case 35671:return SE;case 35668:case 35672:return ME;case 35669:case 35673:return EE;case 5125:return TE;case 36294:return wE;case 36295:return AE;case 36296:return RE;case 35678:case 36198:case 36298:case 36306:case 35682:return CE;case 35679:case 36299:case 36307:return bE;case 35680:case 36300:case 36308:case 36293:return LE;case 36289:case 36303:case 36311:case 36292:return PE}}function UE(t,e){t.uniform1fv(this.addr,e)}function NE(t,e){const n=Ss(e,this.size,2);t.uniform2fv(this.addr,n)}function IE(t,e){const n=Ss(e,this.size,3);t.uniform3fv(this.addr,n)}function FE(t,e){const n=Ss(e,this.size,4);t.uniform4fv(this.addr,n)}function OE(t,e){const n=Ss(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kE(t,e){const n=Ss(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function zE(t,e){const n=Ss(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function BE(t,e){t.uniform1iv(this.addr,e)}function HE(t,e){t.uniform2iv(this.addr,e)}function GE(t,e){t.uniform3iv(this.addr,e)}function VE(t,e){t.uniform4iv(this.addr,e)}function WE(t,e){t.uniform1uiv(this.addr,e)}function jE(t,e){t.uniform2uiv(this.addr,e)}function XE(t,e){t.uniform3uiv(this.addr,e)}function qE(t,e){t.uniform4uiv(this.addr,e)}function YE(t,e,n){const i=this.cache,r=e.length,s=yl(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Qg,s[o])}function $E(t,e,n){const i=this.cache,r=e.length,s=yl(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ev,s[o])}function KE(t,e,n){const i=this.cache,r=e.length,s=yl(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||tv,s[o])}function ZE(t,e,n){const i=this.cache,r=e.length,s=yl(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Jg,s[o])}function QE(t){switch(t){case 5126:return UE;case 35664:return NE;case 35665:return IE;case 35666:return FE;case 35674:return OE;case 35675:return kE;case 35676:return zE;case 5124:case 35670:return BE;case 35667:case 35671:return HE;case 35668:case 35672:return GE;case 35669:case 35673:return VE;case 5125:return WE;case 36294:return jE;case 36295:return XE;case 36296:return qE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return $E;case 35680:case 36300:case 36308:case 36293:return KE;case 36289:case 36303:case 36311:case 36292:return ZE}}class JE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=DE(n.type)}}class eT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=QE(n.type)}}class tT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const wu=/(\w+)(\])?(\[|\.)?/g;function Kh(t,e){t.seq.push(e),t.map[e.id]=e}function nT(t,e,n){const i=t.name,r=i.length;for(wu.lastIndex=0;;){const s=wu.exec(i),o=wu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Kh(n,u===void 0?new JE(a,t,e):new eT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new tT(a),Kh(n,h)),n=h}}}class Ra{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);nT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Zh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let iT=0;function rT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function sT(t){switch(t){case Wn:return["Linear","( value )"];case Ie:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Qh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+rT(t.getShaderSource(e),o)}else return r}function oT(t,e){const n=sT(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function aT(t,e){let n;switch(e){case px:n="Linear";break;case mx:n="Reinhard";break;case gx:n="OptimizedCineon";break;case vx:n="ACESFilmic";break;case _x:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function lT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function uT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function cT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Bs(t){return t!==""}function Jh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ep(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(t){return t.replace(dT,hT)}const fT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hT(t,e){let n=Ne[e];if(n===void 0){const i=fT.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lc(n)}const pT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tp(t){return t.replace(pT,mT)}function mT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function np(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===wg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===X0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function vT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case fs:case hs:e="ENVMAP_TYPE_CUBE";break;case vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _T(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case hs:e="ENVMAP_MODE_REFRACTION";break}return e}function xT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Cg:e="ENVMAP_BLENDING_MULTIPLY";break;case fx:e="ENVMAP_BLENDING_MIX";break;case hx:e="ENVMAP_BLENDING_ADD";break}return e}function yT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ST(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=gT(n),u=vT(n),d=_T(n),h=xT(n),f=yT(n),v=n.isWebGL2?"":lT(n),x=uT(s),y=r.createProgram();let m,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Bs).join(`
`),m.length>0&&(m+=`
`),c=[v,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Bs).join(`
`),c.length>0&&(c+=`
`)):(m=[np(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),c=[v,np(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fi?"#define TONE_MAPPING":"",n.toneMapping!==Fi?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Fi?aT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,oT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bs).join(`
`)),o=Lc(o),o=Jh(o,n),o=ep(o,n),a=Lc(a),a=Jh(a,n),a=ep(a,n),o=tp(o),a=tp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const p=_+m+o,S=_+c+a,w=Zh(r,r.VERTEX_SHADER,p),C=Zh(r,r.FRAGMENT_SHADER,S);if(r.attachShader(y,w),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const M=r.getProgramInfoLog(y).trim(),T=r.getShaderInfoLog(w).trim(),Q=r.getShaderInfoLog(C).trim();let ne=!0,z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,w,C);else{const B=Qh(r,w,"vertex"),X=Qh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+B+`
`+X)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(T===""||Q==="")&&(z=!1);z&&(this.diagnostics={runnable:ne,programLog:M,vertexShader:{log:T,prefix:m},fragmentShader:{log:Q,prefix:c}})}r.deleteShader(w),r.deleteShader(C);let R;this.getUniforms=function(){return R===void 0&&(R=new Ra(r,y)),R};let U;return this.getAttributes=function(){return U===void 0&&(U=cT(r,y)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=C,this}let MT=0;class ET{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new TT(e),n.set(e,i)),i}}class TT{constructor(e){this.id=MT++,this.code=e,this.usedTimes=0}}function wT(t,e,n,i,r,s,o){const a=new Vg,l=new ET,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function m(M,T,Q,ne,z){const B=ne.fog,X=z.geometry,ee=M.isMeshStandardMaterial?ne.environment:null,Z=(M.isMeshStandardMaterial?n:e).get(M.envMap||ee),D=Z&&Z.mapping===vl?Z.image.height:null,H=x[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const V=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,N=V!==void 0?V.length:0;let j=0;X.morphAttributes.position!==void 0&&(j=1),X.morphAttributes.normal!==void 0&&(j=2),X.morphAttributes.color!==void 0&&(j=3);let oe,se,ue,ge;if(H){const Ke=Bn[H];oe=Ke.vertexShader,se=Ke.fragmentShader}else oe=M.vertexShader,se=M.fragmentShader,l.update(M),ue=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const Me=t.getRenderTarget(),_e=z.isInstancedMesh===!0,Ve=!!M.map,Pt=!!M.matcap,De=!!Z,O=!!M.aoMap,yt=!!M.lightMap,Ee=!!M.bumpMap,be=!!M.normalMap,we=!!M.displacementMap,$e=!!M.emissiveMap,Ce=!!M.metalnessMap,Pe=!!M.roughnessMap,je=M.anisotropy>0,ut=M.clearcoat>0,mt=M.iridescence>0,E=M.sheen>0,g=M.transmission>0,L=je&&!!M.anisotropyMap,Y=ut&&!!M.clearcoatMap,K=ut&&!!M.clearcoatNormalMap,J=ut&&!!M.clearcoatRoughnessMap,de=mt&&!!M.iridescenceMap,ie=mt&&!!M.iridescenceThicknessMap,G=E&&!!M.sheenColorMap,ve=E&&!!M.sheenRoughnessMap,xe=!!M.specularMap,ye=!!M.specularColorMap,pe=!!M.specularIntensityMap,me=g&&!!M.transmissionMap,Oe=g&&!!M.thicknessMap,qe=!!M.gradientMap,P=!!M.alphaMap,le=M.alphaTest>0,W=!!M.alphaHash,re=!!M.extensions,ce=!!X.attributes.uv1,Ge=!!X.attributes.uv2,tt=!!X.attributes.uv3;let ct=Fi;return M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ct=t.toneMapping),{isWebGL2:d,shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:oe,fragmentShader:se,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,instancing:_e,instancingColor:_e&&z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Me===null?t.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Wn,map:Ve,matcap:Pt,envMap:De,envMapMode:De&&Z.mapping,envMapCubeUVHeight:D,aoMap:O,lightMap:yt,bumpMap:Ee,normalMap:be,displacementMap:f&&we,emissiveMap:$e,normalMapObjectSpace:be&&M.normalMapType===Dx,normalMapTangentSpace:be&&M.normalMapType===Px,metalnessMap:Ce,roughnessMap:Pe,anisotropy:je,anisotropyMap:L,clearcoat:ut,clearcoatMap:Y,clearcoatNormalMap:K,clearcoatRoughnessMap:J,iridescence:mt,iridescenceMap:de,iridescenceThicknessMap:ie,sheen:E,sheenColorMap:G,sheenRoughnessMap:ve,specularMap:xe,specularColorMap:ye,specularIntensityMap:pe,transmission:g,transmissionMap:me,thicknessMap:Oe,gradientMap:qe,opaque:M.transparent===!1&&M.blending===ns,alphaMap:P,alphaTest:le,alphaHash:W,combine:M.combine,mapUv:Ve&&y(M.map.channel),aoMapUv:O&&y(M.aoMap.channel),lightMapUv:yt&&y(M.lightMap.channel),bumpMapUv:Ee&&y(M.bumpMap.channel),normalMapUv:be&&y(M.normalMap.channel),displacementMapUv:we&&y(M.displacementMap.channel),emissiveMapUv:$e&&y(M.emissiveMap.channel),metalnessMapUv:Ce&&y(M.metalnessMap.channel),roughnessMapUv:Pe&&y(M.roughnessMap.channel),anisotropyMapUv:L&&y(M.anisotropyMap.channel),clearcoatMapUv:Y&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:K&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:G&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(M.sheenRoughnessMap.channel),specularMapUv:xe&&y(M.specularMap.channel),specularColorMapUv:ye&&y(M.specularColorMap.channel),specularIntensityMapUv:pe&&y(M.specularIntensityMap.channel),transmissionMapUv:me&&y(M.transmissionMap.channel),thicknessMapUv:Oe&&y(M.thicknessMap.channel),alphaMapUv:P&&y(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(be||je),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:Ge,vertexUv3s:tt,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(Ve||P),fog:!!B,useFog:M.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:j,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&Q.length>0,shadowMapType:t.shadowMap.type,toneMapping:ct,useLegacyLights:t._useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ti,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:re&&M.extensions.derivatives===!0,extensionFragDepth:re&&M.extensions.fragDepth===!0,extensionDrawBuffers:re&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function c(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Q in M.defines)T.push(Q),T.push(M.defines[Q]);return M.isRawShaderMaterial===!1&&(_(T,M),p(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function p(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),M.push(a.mask)}function S(M){const T=x[M.type];let Q;if(T){const ne=Bn[T];Q=cy.clone(ne.uniforms)}else Q=M.uniforms;return Q}function w(M,T){let Q;for(let ne=0,z=u.length;ne<z;ne++){const B=u[ne];if(B.cacheKey===T){Q=B,++Q.usedTimes;break}}return Q===void 0&&(Q=new ST(t,T,M,s),u.push(Q)),Q}function C(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:S,acquireProgram:w,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:U}}function AT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function RT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ip(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,v,x,y,m){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:f,material:v,groupOrder:x,renderOrder:h.renderOrder,z:y,group:m},t[e]=c):(c.id=h.id,c.object=h,c.geometry=f,c.material=v,c.groupOrder=x,c.renderOrder=h.renderOrder,c.z=y,c.group=m),e++,c}function a(h,f,v,x,y,m){const c=o(h,f,v,x,y,m);v.transmission>0?i.push(c):v.transparent===!0?r.push(c):n.push(c)}function l(h,f,v,x,y,m){const c=o(h,f,v,x,y,m);v.transmission>0?i.unshift(c):v.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,f){n.length>1&&n.sort(h||RT),i.length>1&&i.sort(f||ip),r.length>1&&r.sort(f||ip)}function d(){for(let h=e,f=t.length;h<f;h++){const v=t[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:u}}function CT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new rp,t.set(i,[o])):r>=s.length?(o=new rp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function bT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Xe};break;case"SpotLight":n={position:new k,direction:new k,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function LT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let PT=0;function DT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function UT(t,e){const n=new bT,i=LT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new k);const s=new k,o=new wt,a=new wt;function l(d,h){let f=0,v=0,x=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let y=0,m=0,c=0,_=0,p=0,S=0,w=0,C=0,R=0,U=0;d.sort(DT);const M=h===!0?Math.PI:1;for(let Q=0,ne=d.length;Q<ne;Q++){const z=d[Q],B=z.color,X=z.intensity,ee=z.distance,Z=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=B.r*X*M,v+=B.g*X*M,x+=B.b*X*M;else if(z.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(z.sh.coefficients[D],X);else if(z.isDirectionalLight){const D=n.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity*M),z.castShadow){const H=z.shadow,V=i.get(z);V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,r.directionalShadow[y]=V,r.directionalShadowMap[y]=Z,r.directionalShadowMatrix[y]=z.shadow.matrix,S++}r.directional[y]=D,y++}else if(z.isSpotLight){const D=n.get(z);D.position.setFromMatrixPosition(z.matrixWorld),D.color.copy(B).multiplyScalar(X*M),D.distance=ee,D.coneCos=Math.cos(z.angle),D.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),D.decay=z.decay,r.spot[c]=D;const H=z.shadow;if(z.map&&(r.spotLightMap[R]=z.map,R++,H.updateMatrices(z),z.castShadow&&U++),r.spotLightMatrix[c]=H.matrix,z.castShadow){const V=i.get(z);V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,r.spotShadow[c]=V,r.spotShadowMap[c]=Z,C++}c++}else if(z.isRectAreaLight){const D=n.get(z);D.color.copy(B).multiplyScalar(X),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),r.rectArea[_]=D,_++}else if(z.isPointLight){const D=n.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity*M),D.distance=z.distance,D.decay=z.decay,z.castShadow){const H=z.shadow,V=i.get(z);V.shadowBias=H.bias,V.shadowNormalBias=H.normalBias,V.shadowRadius=H.radius,V.shadowMapSize=H.mapSize,V.shadowCameraNear=H.camera.near,V.shadowCameraFar=H.camera.far,r.pointShadow[m]=V,r.pointShadowMap[m]=Z,r.pointShadowMatrix[m]=z.shadow.matrix,w++}r.point[m]=D,m++}else if(z.isHemisphereLight){const D=n.get(z);D.skyColor.copy(z.color).multiplyScalar(X*M),D.groundColor.copy(z.groundColor).multiplyScalar(X*M),r.hemi[p]=D,p++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=v,r.ambient[2]=x;const T=r.hash;(T.directionalLength!==y||T.pointLength!==m||T.spotLength!==c||T.rectAreaLength!==_||T.hemiLength!==p||T.numDirectionalShadows!==S||T.numPointShadows!==w||T.numSpotShadows!==C||T.numSpotMaps!==R)&&(r.directional.length=y,r.spot.length=c,r.rectArea.length=_,r.point.length=m,r.hemi.length=p,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=C+R-U,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=U,T.directionalLength=y,T.pointLength=m,T.spotLength=c,T.rectAreaLength=_,T.hemiLength=p,T.numDirectionalShadows=S,T.numPointShadows=w,T.numSpotShadows=C,T.numSpotMaps=R,r.version=PT++)}function u(d,h){let f=0,v=0,x=0,y=0,m=0;const c=h.matrixWorldInverse;for(let _=0,p=d.length;_<p;_++){const S=d[_];if(S.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(c),f++}else if(S.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(c),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(c),x++}else if(S.isRectAreaLight){const w=r.rectArea[y];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(c),a.identity(),o.copy(S.matrixWorld),o.premultiply(c),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const w=r.point[v];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(c),v++}else if(S.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(c),m++}}}return{setup:l,setupView:u,state:r}}function sp(t,e){const n=new UT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function NT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new sp(t,e),n.set(s,[l])):o>=a.length?(l=new sp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class IT extends To{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FT extends To{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zT(t,e,n){let i=new Kg;const r=new Le,s=new Le,o=new Et,a=new IT({depthPacking:Lx}),l=new FT,u={},d=n.maxTextureSize,h={[Bi]:en,[en]:Bi,[ti]:ti},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:OT,fragmentShader:kT}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const x=new hi;x.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Dn(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wg;let c=this.type;this.render=function(w,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const U=t.getRenderTarget(),M=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(Ii),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ne=c!==Qn&&this.type===Qn,z=c===Qn&&this.type!==Qn;for(let B=0,X=w.length;B<X;B++){const ee=w[B],Z=ee.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const D=Z.getFrameExtents();if(r.multiply(D),s.copy(Z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/D.x),r.x=s.x*D.x,Z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/D.y),r.y=s.y*D.y,Z.mapSize.y=s.y)),Z.map===null||ne===!0||z===!0){const V=this.type!==Qn?{minFilter:Rt,magFilter:Rt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Hi(r.x,r.y,V),Z.map.texture.name=ee.name+".shadowMap",Z.camera.updateProjectionMatrix()}t.setRenderTarget(Z.map),t.clear();const H=Z.getViewportCount();for(let V=0;V<H;V++){const N=Z.getViewport(V);o.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),Q.viewport(o),Z.updateMatrices(ee,V),i=Z.getFrustum(),S(C,R,Z.camera,ee,this.type)}Z.isPointLightShadow!==!0&&this.type===Qn&&_(Z,R),Z.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(U,M,T)};function _(w,C){const R=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,v.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Hi(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,R,f,y,null),v.uniforms.shadow_pass.value=w.mapPass.texture,v.uniforms.resolution.value=w.mapSize,v.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,R,v,y,null)}function p(w,C,R,U){let M=null;const T=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)M=T;else if(M=R.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Q=M.uuid,ne=C.uuid;let z=u[Q];z===void 0&&(z={},u[Q]=z);let B=z[ne];B===void 0&&(B=M.clone(),z[ne]=B),M=B}if(M.visible=C.visible,M.wireframe=C.wireframe,U===Qn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Q=t.properties.get(M);Q.light=R}return M}function S(w,C,R,U,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Qn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const ne=e.update(w),z=w.material;if(Array.isArray(z)){const B=ne.groups;for(let X=0,ee=B.length;X<ee;X++){const Z=B[X],D=z[Z.materialIndex];if(D&&D.visible){const H=p(w,D,U,M);t.renderBufferDirect(R,null,ne,H,w,Z)}}}else if(z.visible){const B=p(w,z,U,M);t.renderBufferDirect(R,null,ne,B,w,null)}}const Q=w.children;for(let ne=0,z=Q.length;ne<z;ne++)S(Q[ne],C,R,U,M)}}function BT(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const le=new Et;let W=null;const re=new Et(0,0,0,0);return{setMask:function(ce){W!==ce&&!P&&(t.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){P=ce},setClear:function(ce,Ge,tt,ct,pi){pi===!0&&(ce*=ct,Ge*=ct,tt*=ct),le.set(ce,Ge,tt,ct),re.equals(le)===!1&&(t.clearColor(ce,Ge,tt,ct),re.copy(le))},reset:function(){P=!1,W=null,re.set(-1,0,0,0)}}}function s(){let P=!1,le=null,W=null,re=null;return{setTest:function(ce){ce?Me(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(ce){le!==ce&&!P&&(t.depthMask(ce),le=ce)},setFunc:function(ce){if(W!==ce){switch(ce){case sx:t.depthFunc(t.NEVER);break;case ox:t.depthFunc(t.ALWAYS);break;case ax:t.depthFunc(t.LESS);break;case Mc:t.depthFunc(t.LEQUAL);break;case lx:t.depthFunc(t.EQUAL);break;case ux:t.depthFunc(t.GEQUAL);break;case cx:t.depthFunc(t.GREATER);break;case dx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}W=ce}},setLocked:function(ce){P=ce},setClear:function(ce){re!==ce&&(t.clearDepth(ce),re=ce)},reset:function(){P=!1,le=null,W=null,re=null}}}function o(){let P=!1,le=null,W=null,re=null,ce=null,Ge=null,tt=null,ct=null,pi=null;return{setTest:function(Ke){P||(Ke?Me(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(Ke){le!==Ke&&!P&&(t.stencilMask(Ke),le=Ke)},setFunc:function(Ke,On,zt){(W!==Ke||re!==On||ce!==zt)&&(t.stencilFunc(Ke,On,zt),W=Ke,re=On,ce=zt)},setOp:function(Ke,On,zt){(Ge!==Ke||tt!==On||ct!==zt)&&(t.stencilOp(Ke,On,zt),Ge=Ke,tt=On,ct=zt)},setLocked:function(Ke){P=Ke},setClear:function(Ke){pi!==Ke&&(t.clearStencil(Ke),pi=Ke)},reset:function(){P=!1,le=null,W=null,re=null,ce=null,Ge=null,tt=null,ct=null,pi=null}}}const a=new r,l=new s,u=new o,d=new WeakMap,h=new WeakMap;let f={},v={},x=new WeakMap,y=[],m=null,c=!1,_=null,p=null,S=null,w=null,C=null,R=null,U=null,M=!1,T=null,Q=null,ne=null,z=null,B=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Z=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(D)[1]),ee=Z>=1):D.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),ee=Z>=2);let H=null,V={};const N=t.getParameter(t.SCISSOR_BOX),j=t.getParameter(t.VIEWPORT),oe=new Et().fromArray(N),se=new Et().fromArray(j);function ue(P,le,W,re){const ce=new Uint8Array(4),Ge=t.createTexture();t.bindTexture(P,Ge),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<W;tt++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,re,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(le+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return Ge}const ge={};ge[t.TEXTURE_2D]=ue(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=ue(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[t.TEXTURE_2D_ARRAY]=ue(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=ue(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Me(t.DEPTH_TEST),l.setFunc(Mc),we(!1),$e(jf),Me(t.CULL_FACE),Ee(Ii);function Me(P){f[P]!==!0&&(t.enable(P),f[P]=!0)}function _e(P){f[P]!==!1&&(t.disable(P),f[P]=!1)}function Ve(P,le){return v[P]!==le?(t.bindFramebuffer(P,le),v[P]=le,i&&(P===t.DRAW_FRAMEBUFFER&&(v[t.FRAMEBUFFER]=le),P===t.FRAMEBUFFER&&(v[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function Pt(P,le){let W=y,re=!1;if(P)if(W=x.get(le),W===void 0&&(W=[],x.set(le,W)),P.isWebGLMultipleRenderTargets){const ce=P.texture;if(W.length!==ce.length||W[0]!==t.COLOR_ATTACHMENT0){for(let Ge=0,tt=ce.length;Ge<tt;Ge++)W[Ge]=t.COLOR_ATTACHMENT0+Ge;W.length=ce.length,re=!0}}else W[0]!==t.COLOR_ATTACHMENT0&&(W[0]=t.COLOR_ATTACHMENT0,re=!0);else W[0]!==t.BACK&&(W[0]=t.BACK,re=!0);re&&(n.isWebGL2?t.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function De(P){return m!==P?(t.useProgram(P),m=P,!0):!1}const O={[Fr]:t.FUNC_ADD,[Y0]:t.FUNC_SUBTRACT,[$0]:t.FUNC_REVERSE_SUBTRACT};if(i)O[Yf]=t.MIN,O[$f]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(O[Yf]=P.MIN_EXT,O[$f]=P.MAX_EXT)}const yt={[K0]:t.ZERO,[Z0]:t.ONE,[Q0]:t.SRC_COLOR,[Ag]:t.SRC_ALPHA,[rx]:t.SRC_ALPHA_SATURATE,[nx]:t.DST_COLOR,[ex]:t.DST_ALPHA,[J0]:t.ONE_MINUS_SRC_COLOR,[Rg]:t.ONE_MINUS_SRC_ALPHA,[ix]:t.ONE_MINUS_DST_COLOR,[tx]:t.ONE_MINUS_DST_ALPHA};function Ee(P,le,W,re,ce,Ge,tt,ct){if(P===Ii){c===!0&&(_e(t.BLEND),c=!1);return}if(c===!1&&(Me(t.BLEND),c=!0),P!==q0){if(P!==_||ct!==M){if((p!==Fr||C!==Fr)&&(t.blendEquation(t.FUNC_ADD),p=Fr,C=Fr),ct)switch(P){case ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sc:t.blendFunc(t.ONE,t.ONE);break;case Xf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sc:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Xf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,w=null,R=null,U=null,_=P,M=ct}return}ce=ce||le,Ge=Ge||W,tt=tt||re,(le!==p||ce!==C)&&(t.blendEquationSeparate(O[le],O[ce]),p=le,C=ce),(W!==S||re!==w||Ge!==R||tt!==U)&&(t.blendFuncSeparate(yt[W],yt[re],yt[Ge],yt[tt]),S=W,w=re,R=Ge,U=tt),_=P,M=!1}function be(P,le){P.side===ti?_e(t.CULL_FACE):Me(t.CULL_FACE);let W=P.side===en;le&&(W=!W),we(W),P.blending===ns&&P.transparent===!1?Ee(Ii):Ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const re=P.stencilWrite;u.setTest(re),re&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Pe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Me(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(P){T!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),T=P)}function $e(P){P!==W0?(Me(t.CULL_FACE),P!==Q&&(P===jf?t.cullFace(t.BACK):P===j0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),Q=P}function Ce(P){P!==ne&&(ee&&t.lineWidth(P),ne=P)}function Pe(P,le,W){P?(Me(t.POLYGON_OFFSET_FILL),(z!==le||B!==W)&&(t.polygonOffset(le,W),z=le,B=W)):_e(t.POLYGON_OFFSET_FILL)}function je(P){P?Me(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function ut(P){P===void 0&&(P=t.TEXTURE0+X-1),H!==P&&(t.activeTexture(P),H=P)}function mt(P,le,W){W===void 0&&(H===null?W=t.TEXTURE0+X-1:W=H);let re=V[W];re===void 0&&(re={type:void 0,texture:void 0},V[W]=re),(re.type!==P||re.texture!==le)&&(H!==W&&(t.activeTexture(W),H=W),t.bindTexture(P,le||ge[P]),re.type=P,re.texture=le)}function E(){const P=V[H];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function L(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(P){oe.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),oe.copy(P))}function pe(P){se.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),se.copy(P))}function me(P,le){let W=h.get(le);W===void 0&&(W=new WeakMap,h.set(le,W));let re=W.get(P);re===void 0&&(re=t.getUniformBlockIndex(le,P.name),W.set(P,re))}function Oe(P,le){const re=h.get(le).get(P);d.get(le)!==re&&(t.uniformBlockBinding(le,re,P.__bindingPointIndex),d.set(le,re))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},H=null,V={},v={},x=new WeakMap,y=[],m=null,c=!1,_=null,p=null,S=null,w=null,C=null,R=null,U=null,M=!1,T=null,Q=null,ne=null,z=null,B=null,oe.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Me,disable:_e,bindFramebuffer:Ve,drawBuffers:Pt,useProgram:De,setBlending:Ee,setMaterial:be,setFlipSided:we,setCullFace:$e,setLineWidth:Ce,setPolygonOffset:Pe,setScissorTest:je,activeTexture:ut,bindTexture:mt,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:ve,texImage3D:xe,updateUBOMapping:me,uniformBlockBinding:Oe,texStorage2D:ie,texStorage3D:G,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:J,compressedTexSubImage3D:de,scissor:ye,viewport:pe,reset:qe}}function HT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let y;const m=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return c?new OffscreenCanvas(E,g):Ja("canvas")}function p(E,g,L,Y){let K=1;if((E.width>Y||E.height>Y)&&(K=Y/Math.max(E.width,E.height)),K<1||g===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const J=g?bc:Math.floor,de=J(K*E.width),ie=J(K*E.height);y===void 0&&(y=_(de,ie));const G=L?_(de,ie):y;return G.width=de,G.height=ie,G.getContext("2d").drawImage(E,0,0,de,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+de+"x"+ie+")."),G}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function S(E){return Mh(E.width)&&Mh(E.height)}function w(E){return a?!1:E.wrapS!==Vt||E.wrapT!==Vt||E.minFilter!==Rt&&E.minFilter!==Ot}function C(E,g){return E.generateMipmaps&&g&&E.minFilter!==Rt&&E.minFilter!==Ot}function R(E){t.generateMipmap(E)}function U(E,g,L,Y,K=!1){if(a===!1)return g;if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=g;return g===t.RED&&(L===t.FLOAT&&(J=t.R32F),L===t.HALF_FLOAT&&(J=t.R16F),L===t.UNSIGNED_BYTE&&(J=t.R8)),g===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(J=t.R8UI),L===t.UNSIGNED_SHORT&&(J=t.R16UI),L===t.UNSIGNED_INT&&(J=t.R32UI),L===t.BYTE&&(J=t.R8I),L===t.SHORT&&(J=t.R16I),L===t.INT&&(J=t.R32I)),g===t.RG&&(L===t.FLOAT&&(J=t.RG32F),L===t.HALF_FLOAT&&(J=t.RG16F),L===t.UNSIGNED_BYTE&&(J=t.RG8)),g===t.RGBA&&(L===t.FLOAT&&(J=t.RGBA32F),L===t.HALF_FLOAT&&(J=t.RGBA16F),L===t.UNSIGNED_BYTE&&(J=Y===Ie&&K===!1?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)),(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(E,g,L){return C(E,L)===!0||E.isFramebufferTexture&&E.minFilter!==Rt&&E.minFilter!==Ot?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function T(E){return E===Rt||E===Kf||E===Zl?t.NEAREST:t.LINEAR}function Q(E){const g=E.target;g.removeEventListener("dispose",Q),z(g),g.isVideoTexture&&x.delete(g)}function ne(E){const g=E.target;g.removeEventListener("dispose",ne),X(g)}function z(E){const g=i.get(E);if(g.__webglInit===void 0)return;const L=E.source,Y=m.get(L);if(Y){const K=Y[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&B(E),Object.keys(Y).length===0&&m.delete(L)}i.remove(E)}function B(E){const g=i.get(E);t.deleteTexture(g.__webglTexture);const L=E.source,Y=m.get(L);delete Y[g.__cacheKey],o.memory.textures--}function X(E){const g=E.texture,L=i.get(E),Y=i.get(g);if(Y.__webglTexture!==void 0&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(L.__webglFramebuffer[K]))for(let J=0;J<L.__webglFramebuffer[K].length;J++)t.deleteFramebuffer(L.__webglFramebuffer[K][J]);else t.deleteFramebuffer(L.__webglFramebuffer[K]);L.__webglDepthbuffer&&t.deleteRenderbuffer(L.__webglDepthbuffer[K])}else{if(Array.isArray(L.__webglFramebuffer))for(let K=0;K<L.__webglFramebuffer.length;K++)t.deleteFramebuffer(L.__webglFramebuffer[K]);else t.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&t.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&t.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let K=0;K<L.__webglColorRenderbuffer.length;K++)L.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(L.__webglColorRenderbuffer[K]);L.__webglDepthRenderbuffer&&t.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let K=0,J=g.length;K<J;K++){const de=i.get(g[K]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(g[K])}i.remove(g),i.remove(E)}let ee=0;function Z(){ee=0}function D(){const E=ee;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),ee+=1,E}function H(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function V(E,g){const L=i.get(E);if(E.isVideoTexture&&ut(E),E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(L,E,g);return}}n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+g)}function N(E,g){const L=i.get(E);if(E.version>0&&L.__version!==E.version){Ve(L,E,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+g)}function j(E,g){const L=i.get(E);if(E.version>0&&L.__version!==E.version){Ve(L,E,g);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+g)}function oe(E,g){const L=i.get(E);if(E.version>0&&L.__version!==E.version){Pt(L,E,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+g)}const se={[wc]:t.REPEAT,[Vt]:t.CLAMP_TO_EDGE,[Ac]:t.MIRRORED_REPEAT},ue={[Rt]:t.NEAREST,[Kf]:t.NEAREST_MIPMAP_NEAREST,[Zl]:t.NEAREST_MIPMAP_LINEAR,[Ot]:t.LINEAR,[xx]:t.LINEAR_MIPMAP_NEAREST,[mo]:t.LINEAR_MIPMAP_LINEAR},ge={[Nx]:t.NEVER,[Hx]:t.ALWAYS,[Ix]:t.LESS,[Ox]:t.LEQUAL,[Fx]:t.EQUAL,[Bx]:t.GEQUAL,[kx]:t.GREATER,[zx]:t.NOTEQUAL};function Me(E,g,L){if(L?(t.texParameteri(E,t.TEXTURE_WRAP_S,se[g.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,se[g.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,se[g.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,ue[g.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,ue[g.minFilter])):(t.texParameteri(E,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(E,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(g.wrapS!==Vt||g.wrapT!==Vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(E,t.TEXTURE_MAG_FILTER,T(g.magFilter)),t.texParameteri(E,t.TEXTURE_MIN_FILTER,T(g.minFilter)),g.minFilter!==Rt&&g.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,ge[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Rt||g.minFilter!==Zl&&g.minFilter!==mo||g.type===ri&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===ps&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(t.texParameterf(E,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function _e(E,g){let L=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",Q));const Y=g.source;let K=m.get(Y);K===void 0&&(K={},m.set(Y,K));const J=H(g);if(J!==E.__cacheKey){K[J]===void 0&&(K[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,L=!0),K[J].usedTimes++;const de=K[E.__cacheKey];de!==void 0&&(K[E.__cacheKey].usedTimes--,de.usedTimes===0&&B(g)),E.__cacheKey=J,E.__webglTexture=K[J].texture}return L}function Ve(E,g,L){let Y=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=t.TEXTURE_3D);const K=_e(E,g),J=g.source;n.bindTexture(Y,E.__webglTexture,t.TEXTURE0+L);const de=i.get(J);if(J.version!==de.__version||K===!0){n.activeTexture(t.TEXTURE0+L),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ie=w(g)&&S(g.image)===!1;let G=p(g.image,ie,!1,d);G=mt(g,G);const ve=S(G)||a,xe=s.convert(g.format,g.colorSpace);let ye=s.convert(g.type),pe=U(g.internalFormat,xe,ye,g.colorSpace);Me(Y,g,ve);let me;const Oe=g.mipmaps,qe=a&&g.isVideoTexture!==!0,P=de.__version===void 0||K===!0,le=M(g,G,ve);if(g.isDepthTexture)pe=t.DEPTH_COMPONENT,a?g.type===ri?pe=t.DEPTH_COMPONENT32F:g.type===Ai?pe=t.DEPTH_COMPONENT24:g.type===lr?pe=t.DEPTH24_STENCIL8:pe=t.DEPTH_COMPONENT16:g.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ur&&pe===t.DEPTH_COMPONENT&&g.type!==Ad&&g.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Ai,ye=s.convert(g.type)),g.format===ms&&pe===t.DEPTH_COMPONENT&&(pe=t.DEPTH_STENCIL,g.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=lr,ye=s.convert(g.type))),P&&(qe?n.texStorage2D(t.TEXTURE_2D,1,pe,G.width,G.height):n.texImage2D(t.TEXTURE_2D,0,pe,G.width,G.height,0,xe,ye,null));else if(g.isDataTexture)if(Oe.length>0&&ve){qe&&P&&n.texStorage2D(t.TEXTURE_2D,le,pe,Oe[0].width,Oe[0].height);for(let W=0,re=Oe.length;W<re;W++)me=Oe[W],qe?n.texSubImage2D(t.TEXTURE_2D,W,0,0,me.width,me.height,xe,ye,me.data):n.texImage2D(t.TEXTURE_2D,W,pe,me.width,me.height,0,xe,ye,me.data);g.generateMipmaps=!1}else qe?(P&&n.texStorage2D(t.TEXTURE_2D,le,pe,G.width,G.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,G.width,G.height,xe,ye,G.data)):n.texImage2D(t.TEXTURE_2D,0,pe,G.width,G.height,0,xe,ye,G.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){qe&&P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,Oe[0].width,Oe[0].height,G.depth);for(let W=0,re=Oe.length;W<re;W++)me=Oe[W],g.format!==vn?xe!==null?qe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,G.depth,xe,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,pe,me.width,me.height,G.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,G.depth,xe,ye,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,pe,me.width,me.height,G.depth,0,xe,ye,me.data)}else{qe&&P&&n.texStorage2D(t.TEXTURE_2D,le,pe,Oe[0].width,Oe[0].height);for(let W=0,re=Oe.length;W<re;W++)me=Oe[W],g.format!==vn?xe!==null?qe?n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,me.width,me.height,xe,me.data):n.compressedTexImage2D(t.TEXTURE_2D,W,pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?n.texSubImage2D(t.TEXTURE_2D,W,0,0,me.width,me.height,xe,ye,me.data):n.texImage2D(t.TEXTURE_2D,W,pe,me.width,me.height,0,xe,ye,me.data)}else if(g.isDataArrayTexture)qe?(P&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,G.width,G.height,G.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,xe,ye,G.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,G.width,G.height,G.depth,0,xe,ye,G.data);else if(g.isData3DTexture)qe?(P&&n.texStorage3D(t.TEXTURE_3D,le,pe,G.width,G.height,G.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,xe,ye,G.data)):n.texImage3D(t.TEXTURE_3D,0,pe,G.width,G.height,G.depth,0,xe,ye,G.data);else if(g.isFramebufferTexture){if(P)if(qe)n.texStorage2D(t.TEXTURE_2D,le,pe,G.width,G.height);else{let W=G.width,re=G.height;for(let ce=0;ce<le;ce++)n.texImage2D(t.TEXTURE_2D,ce,pe,W,re,0,xe,ye,null),W>>=1,re>>=1}}else if(Oe.length>0&&ve){qe&&P&&n.texStorage2D(t.TEXTURE_2D,le,pe,Oe[0].width,Oe[0].height);for(let W=0,re=Oe.length;W<re;W++)me=Oe[W],qe?n.texSubImage2D(t.TEXTURE_2D,W,0,0,xe,ye,me):n.texImage2D(t.TEXTURE_2D,W,pe,xe,ye,me);g.generateMipmaps=!1}else qe?(P&&n.texStorage2D(t.TEXTURE_2D,le,pe,G.width,G.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,ye,G)):n.texImage2D(t.TEXTURE_2D,0,pe,xe,ye,G);C(g,ve)&&R(Y),de.__version=J.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Pt(E,g,L){if(g.image.length!==6)return;const Y=_e(E,g),K=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+L);const J=i.get(K);if(K.version!==J.__version||Y===!0){n.activeTexture(t.TEXTURE0+L),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const de=g.isCompressedTexture||g.image[0].isCompressedTexture,ie=g.image[0]&&g.image[0].isDataTexture,G=[];for(let W=0;W<6;W++)!de&&!ie?G[W]=p(g.image[W],!1,!0,u):G[W]=ie?g.image[W].image:g.image[W],G[W]=mt(g,G[W]);const ve=G[0],xe=S(ve)||a,ye=s.convert(g.format,g.colorSpace),pe=s.convert(g.type),me=U(g.internalFormat,ye,pe,g.colorSpace),Oe=a&&g.isVideoTexture!==!0,qe=J.__version===void 0||Y===!0;let P=M(g,ve,xe);Me(t.TEXTURE_CUBE_MAP,g,xe);let le;if(de){Oe&&qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,P,me,ve.width,ve.height);for(let W=0;W<6;W++){le=G[W].mipmaps;for(let re=0;re<le.length;re++){const ce=le[re];g.format!==vn?ye!==null?Oe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,0,0,ce.width,ce.height,ye,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,0,0,ce.width,ce.height,ye,pe,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,re,me,ce.width,ce.height,0,ye,pe,ce.data)}}}else{le=g.mipmaps,Oe&&qe&&(le.length>0&&P++,n.texStorage2D(t.TEXTURE_CUBE_MAP,P,me,G[0].width,G[0].height));for(let W=0;W<6;W++)if(ie){Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,G[W].width,G[W].height,ye,pe,G[W].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,me,G[W].width,G[W].height,0,ye,pe,G[W].data);for(let re=0;re<le.length;re++){const Ge=le[re].image[W].image;Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,0,0,Ge.width,Ge.height,ye,pe,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,me,Ge.width,Ge.height,0,ye,pe,Ge.data)}}else{Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ye,pe,G[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,me,ye,pe,G[W]);for(let re=0;re<le.length;re++){const ce=le[re];Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,0,0,ye,pe,ce.image[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,re+1,me,ye,pe,ce.image[W])}}}C(g,xe)&&R(t.TEXTURE_CUBE_MAP),J.__version=K.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function De(E,g,L,Y,K,J){const de=s.convert(L.format,L.colorSpace),ie=s.convert(L.type),G=U(L.internalFormat,de,ie,L.colorSpace);if(!i.get(g).__hasExternalTextures){const xe=Math.max(1,g.width>>J),ye=Math.max(1,g.height>>J);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,J,G,xe,ye,g.depth,0,de,ie,null):n.texImage2D(K,J,G,xe,ye,0,de,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),je(g)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,K,i.get(L).__webglTexture,0,Pe(g)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,K,i.get(L).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function O(E,g,L){if(t.bindRenderbuffer(t.RENDERBUFFER,E),g.depthBuffer&&!g.stencilBuffer){let Y=t.DEPTH_COMPONENT16;if(L||je(g)){const K=g.depthTexture;K&&K.isDepthTexture&&(K.type===ri?Y=t.DEPTH_COMPONENT32F:K.type===Ai&&(Y=t.DEPTH_COMPONENT24));const J=Pe(g);je(g)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,Y,g.width,g.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,J,Y,g.width,g.height)}else t.renderbufferStorage(t.RENDERBUFFER,Y,g.width,g.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,E)}else if(g.depthBuffer&&g.stencilBuffer){const Y=Pe(g);L&&je(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,g.width,g.height):je(g)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Y,t.DEPTH24_STENCIL8,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,E)}else{const Y=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let K=0;K<Y.length;K++){const J=Y[K],de=s.convert(J.format,J.colorSpace),ie=s.convert(J.type),G=U(J.internalFormat,de,ie,J.colorSpace),ve=Pe(g);L&&je(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,G,g.width,g.height):je(g)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,G,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,G,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function yt(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V(g.depthTexture,0);const Y=i.get(g.depthTexture).__webglTexture,K=Pe(g);if(g.depthTexture.format===ur)je(g)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(g.depthTexture.format===ms)je(g)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ee(E){const g=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");yt(g.__webglFramebuffer,E)}else if(L){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]=t.createRenderbuffer(),O(g.__webglDepthbuffer[Y],E,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=t.createRenderbuffer(),O(g.__webglDepthbuffer,E,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(E,g,L){const Y=i.get(E);g!==void 0&&De(Y.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&Ee(E)}function we(E){const g=E.texture,L=i.get(E),Y=i.get(g);E.addEventListener("dispose",ne),E.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=g.version,o.memory.textures++);const K=E.isWebGLCubeRenderTarget===!0,J=E.isWebGLMultipleRenderTargets===!0,de=S(E)||a;if(K){L.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(a&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[ie]=[];for(let G=0;G<g.mipmaps.length;G++)L.__webglFramebuffer[ie][G]=t.createFramebuffer()}else L.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(a&&g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let ie=0;ie<g.mipmaps.length;ie++)L.__webglFramebuffer[ie]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(J)if(r.drawBuffers){const ie=E.texture;for(let G=0,ve=ie.length;G<ve;G++){const xe=i.get(ie[G]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&je(E)===!1){const ie=J?g:[g];L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let G=0;G<ie.length;G++){const ve=ie[G];L.__webglColorRenderbuffer[G]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[G]);const xe=s.convert(ve.format,ve.colorSpace),ye=s.convert(ve.type),pe=U(ve.internalFormat,xe,ye,ve.colorSpace,E.isXRRenderTarget===!0),me=Pe(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,me,pe,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,L.__webglColorRenderbuffer[G])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),O(L.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Me(t.TEXTURE_CUBE_MAP,g,de);for(let ie=0;ie<6;ie++)if(a&&g.mipmaps&&g.mipmaps.length>0)for(let G=0;G<g.mipmaps.length;G++)De(L.__webglFramebuffer[ie][G],E,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,G);else De(L.__webglFramebuffer[ie],E,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);C(g,de)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(J){const ie=E.texture;for(let G=0,ve=ie.length;G<ve;G++){const xe=ie[G],ye=i.get(xe);n.bindTexture(t.TEXTURE_2D,ye.__webglTexture),Me(t.TEXTURE_2D,xe,de),De(L.__webglFramebuffer,E,xe,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,0),C(xe,de)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ie=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ie,Y.__webglTexture),Me(ie,g,de),a&&g.mipmaps&&g.mipmaps.length>0)for(let G=0;G<g.mipmaps.length;G++)De(L.__webglFramebuffer[G],E,g,t.COLOR_ATTACHMENT0,ie,G);else De(L.__webglFramebuffer,E,g,t.COLOR_ATTACHMENT0,ie,0);C(g,de)&&R(ie),n.unbindTexture()}E.depthBuffer&&Ee(E)}function $e(E){const g=S(E)||a,L=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Y=0,K=L.length;Y<K;Y++){const J=L[Y];if(C(J,g)){const de=E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ie=i.get(J).__webglTexture;n.bindTexture(de,ie),R(de),n.unbindTexture()}}}function Ce(E){if(a&&E.samples>0&&je(E)===!1){const g=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],L=E.width,Y=E.height;let K=t.COLOR_BUFFER_BIT;const J=[],de=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=i.get(E),G=E.isWebGLMultipleRenderTargets===!0;if(G)for(let ve=0;ve<g.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){J.push(t.COLOR_ATTACHMENT0+ve),E.depthBuffer&&J.push(de);const xe=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(xe===!1&&(E.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),G&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ie.__webglColorRenderbuffer[ve]),xe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[de]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[de])),G){const ye=i.get(g[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,L,Y,0,0,L,Y,K,t.NEAREST),v&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,J)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),G)for(let ve=0;ve<g.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,ie.__webglColorRenderbuffer[ve]);const xe=i.get(g[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function Pe(E){return Math.min(h,E.samples)}function je(E){const g=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ut(E){const g=o.render.frame;x.get(E)!==g&&(x.set(E,g),E.update())}function mt(E,g){const L=E.colorSpace,Y=E.format,K=E.type;return E.isCompressedTexture===!0||E.format===Rc||L!==Wn&&L!==dr&&(L===Ie?a===!1?e.has("EXT_sRGB")===!0&&Y===vn?(E.format=Rc,E.minFilter=Ot,E.generateMipmaps=!1):g=zg.sRGBToLinear(g):(Y!==vn||K!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}this.allocateTextureUnit=D,this.resetTextureUnits=Z,this.setTexture2D=V,this.setTexture2DArray=N,this.setTexture3D=j,this.setTextureCube=oe,this.rebindTextures=be,this.setupRenderTarget=we,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=De,this.useMultisampledRTT=je}function GT(t,e,n){const i=n.isWebGL2;function r(s,o=dr){let a;if(s===Oi)return t.UNSIGNED_BYTE;if(s===Pg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Dg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===yx)return t.BYTE;if(s===Sx)return t.SHORT;if(s===Ad)return t.UNSIGNED_SHORT;if(s===Lg)return t.INT;if(s===Ai)return t.UNSIGNED_INT;if(s===ri)return t.FLOAT;if(s===ps)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Mx)return t.ALPHA;if(s===vn)return t.RGBA;if(s===Ex)return t.LUMINANCE;if(s===Tx)return t.LUMINANCE_ALPHA;if(s===ur)return t.DEPTH_COMPONENT;if(s===ms)return t.DEPTH_STENCIL;if(s===Rc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===wx)return t.RED;if(s===Ug)return t.RED_INTEGER;if(s===Ax)return t.RG;if(s===Ng)return t.RG_INTEGER;if(s===Ig)return t.RGBA_INTEGER;if(s===Ql||s===Jl||s===eu||s===tu)if(o===Ie)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ql)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ql)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zf||s===Qf||s===Jf||s===eh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Zf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===eh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===th||s===nh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===th)return o===Ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===nh)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===uh||s===ch||s===dh||s===fh||s===hh||s===ph||s===mh||s===gh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ih)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rh)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sh)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===oh)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ah)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lh)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===uh)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ch)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dh)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fh)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hh)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ph)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mh)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gh)return o===Ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===nu)return o===Ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Cx||s===vh||s===_h||s===xh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===nu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===vh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_h)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class VT extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fa extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WT={type:"move"};class Au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),c=this._getHandJoint(u,y);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),v=.02,x=.005;u.inputState.pinching&&f>v+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=v-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class jT extends tn{constructor(e,n,i,r,s,o,a,l,u,d){if(d=d!==void 0?d:ur,d!==ur&&d!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===ur&&(i=Ai),i===void 0&&d===ms&&(i=lr),super(null,r,s,o,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class XT extends ys{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,d=null,h=null,f=null,v=null,x=null;const y=n.getContextAttributes();let m=null,c=null;const _=[],p=[],S=new Pn;S.layers.enable(1),S.viewport=new Et;const w=new Pn;w.layers.enable(2),w.viewport=new Et;const C=[S,w],R=new VT;R.layers.enable(1),R.layers.enable(2);let U=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let j=_[N];return j===void 0&&(j=new Au,_[N]=j),j.getTargetRaySpace()},this.getControllerGrip=function(N){let j=_[N];return j===void 0&&(j=new Au,_[N]=j),j.getGripSpace()},this.getHand=function(N){let j=_[N];return j===void 0&&(j=new Au,_[N]=j),j.getHandSpace()};function T(N){const j=p.indexOf(N.inputSource);if(j===-1)return;const oe=_[j];oe!==void 0&&(oe.update(N.inputSource,N.frame,u||o),oe.dispatchEvent({type:N.type,data:N.inputSource}))}function Q(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",ne);for(let N=0;N<_.length;N++){const j=p[N];j!==null&&(p[N]=null,_[N].disconnect(j))}U=null,M=null,e.setRenderTarget(m),v=null,f=null,h=null,r=null,c=null,V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(N){u=N},this.getBaseLayer=function(){return f!==null?f:v},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",ne),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,n,j),r.updateRenderState({baseLayer:v}),c=new Hi(v.framebufferWidth,v.framebufferHeight,{format:vn,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let j=null,oe=null,se=null;y.depth&&(se=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,j=y.stencil?ms:ur,oe=y.stencil?lr:Ai);const ue={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(ue),r.updateRenderState({layers:[f]}),c=new Hi(f.textureWidth,f.textureHeight,{format:vn,type:Oi,depthTexture:new jT(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ge=e.properties.get(c);ge.__ignoreDepthValues=f.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ne(N){for(let j=0;j<N.removed.length;j++){const oe=N.removed[j],se=p.indexOf(oe);se>=0&&(p[se]=null,_[se].disconnect(oe))}for(let j=0;j<N.added.length;j++){const oe=N.added[j];let se=p.indexOf(oe);if(se===-1){for(let ge=0;ge<_.length;ge++)if(ge>=p.length){p.push(oe),se=ge;break}else if(p[ge]===null){p[ge]=oe,se=ge;break}if(se===-1)break}const ue=_[se];ue&&ue.connect(oe)}}const z=new k,B=new k;function X(N,j,oe){z.setFromMatrixPosition(j.matrixWorld),B.setFromMatrixPosition(oe.matrixWorld);const se=z.distanceTo(B),ue=j.projectionMatrix.elements,ge=oe.projectionMatrix.elements,Me=ue[14]/(ue[10]-1),_e=ue[14]/(ue[10]+1),Ve=(ue[9]+1)/ue[5],Pt=(ue[9]-1)/ue[5],De=(ue[8]-1)/ue[0],O=(ge[8]+1)/ge[0],yt=Me*De,Ee=Me*O,be=se/(-De+O),we=be*-De;j.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(we),N.translateZ(be),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const $e=Me+be,Ce=_e+be,Pe=yt-we,je=Ee+(se-we),ut=Ve*_e/Ce*$e,mt=Pt*_e/Ce*$e;N.projectionMatrix.makePerspective(Pe,je,ut,mt,$e,Ce),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function ee(N,j){j===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(j.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;R.near=w.near=S.near=N.near,R.far=w.far=S.far=N.far,(U!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,M=R.far);const j=N.parent,oe=R.cameras;ee(R,j);for(let se=0;se<oe.length;se++)ee(oe[se],j);oe.length===2?X(R,S,w):R.projectionMatrix.copy(S.projectionMatrix),Z(N,R,j)};function Z(N,j,oe){oe===null?N.matrix.copy(j.matrixWorld):(N.matrix.copy(oe.matrixWorld),N.matrix.invert(),N.matrix.multiply(j.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0);const se=N.children;for(let ue=0,ge=se.length;ue<ge;ue++)se[ue].updateMatrixWorld(!0);N.projectionMatrix.copy(j.projectionMatrix),N.projectionMatrixInverse.copy(j.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Cc*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&v===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=N)};let D=null;function H(N,j){if(d=j.getViewerPose(u||o),x=j,d!==null){const oe=d.views;v!==null&&(e.setRenderTargetFramebuffer(c,v.framebuffer),e.setRenderTarget(c));let se=!1;oe.length!==R.cameras.length&&(R.cameras.length=0,se=!0);for(let ue=0;ue<oe.length;ue++){const ge=oe[ue];let Me=null;if(v!==null)Me=v.getViewport(ge);else{const Ve=h.getViewSubImage(f,ge);Me=Ve.viewport,ue===0&&(e.setRenderTargetTextures(c,Ve.colorTexture,f.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(c))}let _e=C[ue];_e===void 0&&(_e=new Pn,_e.layers.enable(ue),_e.viewport=new Et,C[ue]=_e),_e.matrix.fromArray(ge.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ge.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Me.x,Me.y,Me.width,Me.height),ue===0&&(R.matrix.copy(_e.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),se===!0&&R.cameras.push(_e)}}for(let oe=0;oe<_.length;oe++){const se=p[oe],ue=_[oe];se!==null&&ue!==void 0&&ue.update(se,j,u||o)}D&&D(N,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),x=null}const V=new Zg;V.setAnimationLoop(H),this.setAnimationLoop=function(N){D=N},this.dispose=function(){}}}function qT(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,Yg(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,_,p,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),h(m,c)):c.isMeshPhongMaterial?(s(m,c),d(m,c)):c.isMeshStandardMaterial?(s(m,c),f(m,c),c.isMeshPhysicalMaterial&&v(m,c,S)):c.isMeshMatcapMaterial?(s(m,c),x(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),y(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,_,p):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===en&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===en&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const _=e.get(c).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap){m.lightMap.value=c.lightMap;const p=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=c.lightMapIntensity*p,n(c.lightMap,m.lightMapTransform)}c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,_,p){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*_,m.scale.value=p*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function d(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function h(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function f(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),e.get(c).envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function v(m,c,_){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===en&&m.clearcoatNormalScale.value.negate())),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,c){c.matcap&&(m.matcap.value=c.matcap)}function y(m,c){const _=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,p){const S=p.program;i.uniformBlockBinding(_,S)}function u(_,p){let S=r[_.id];S===void 0&&(x(_),S=d(_),r[_.id]=S,_.addEventListener("dispose",m));const w=p.program;i.updateUBOMapping(_,w);const C=e.render.frame;s[_.id]!==C&&(f(_),s[_.id]=C)}function d(_){const p=h();_.__bindingPointIndex=p;const S=t.createBuffer(),w=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,w,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const p=r[_.id],S=_.uniforms,w=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let C=0,R=S.length;C<R;C++){const U=S[C];if(v(U,C,w)===!0){const M=U.__offset,T=Array.isArray(U.value)?U.value:[U.value];let Q=0;for(let ne=0;ne<T.length;ne++){const z=T[ne],B=y(z);typeof z=="number"?(U.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,M+Q,U.__data)):z.isMatrix3?(U.__data[0]=z.elements[0],U.__data[1]=z.elements[1],U.__data[2]=z.elements[2],U.__data[3]=z.elements[0],U.__data[4]=z.elements[3],U.__data[5]=z.elements[4],U.__data[6]=z.elements[5],U.__data[7]=z.elements[0],U.__data[8]=z.elements[6],U.__data[9]=z.elements[7],U.__data[10]=z.elements[8],U.__data[11]=z.elements[0]):(z.toArray(U.__data,Q),Q+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,U.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(_,p,S){const w=_.value;if(S[p]===void 0){if(typeof w=="number")S[p]=w;else{const C=Array.isArray(w)?w:[w],R=[];for(let U=0;U<C.length;U++)R.push(C[U].clone());S[p]=R}return!0}else if(typeof w=="number"){if(S[p]!==w)return S[p]=w,!0}else{const C=Array.isArray(S[p])?S[p]:[S[p]],R=Array.isArray(w)?w:[w];for(let U=0;U<C.length;U++){const M=C[U];if(M.equals(R[U])===!1)return M.copy(R[U]),!0}}return!1}function x(_){const p=_.uniforms;let S=0;const w=16;let C=0;for(let R=0,U=p.length;R<U;R++){const M=p[R],T={boundary:0,storage:0},Q=Array.isArray(M.value)?M.value:[M.value];for(let ne=0,z=Q.length;ne<z;ne++){const B=Q[ne],X=y(B);T.boundary+=X.boundary,T.storage+=X.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,R>0){C=S%w;const ne=w-C;C!==0&&ne-T.boundary<0&&(S+=w-C,M.__offset=S)}S+=T.storage}return C=S%w,C>0&&(S+=w-C),_.__size=S,_.__cache={},this}function y(_){const p={boundary:0,storage:0};return typeof _=="number"?(p.boundary=4,p.storage=4):_.isVector2?(p.boundary=8,p.storage=8):_.isVector3||_.isColor?(p.boundary=16,p.storage=12):_.isVector4?(p.boundary=16,p.storage=16):_.isMatrix3?(p.boundary=48,p.storage=48):_.isMatrix4?(p.boundary=64,p.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),p}function m(_){const p=_.target;p.removeEventListener("dispose",m);const S=o.indexOf(p.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}function $T(){const t=Ja("canvas");return t.style.display="block",t}class nv{constructor(e={}){const{canvas:n=$T(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const v=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ie,this._useLegacyLights=!1,this.toneMapping=Fi,this.toneMappingExposure=1;const p=this;let S=!1,w=0,C=0,R=null,U=-1,M=null;const T=new Et,Q=new Et;let ne=null;const z=new Xe(0);let B=0,X=n.width,ee=n.height,Z=1,D=null,H=null;const V=new Et(0,0,X,ee),N=new Et(0,0,X,ee);let j=!1;const oe=new Kg;let se=!1,ue=!1,ge=null;const Me=new wt,_e=new Le,Ve=new k,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return R===null?Z:1}let O=i;function yt(A,F){for(let $=0;$<A.length;$++){const I=A[$],q=n.getContext(I,F);if(q!==null)return q}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wd}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",W,!1),n.addEventListener("webglcontextcreationerror",re,!1),O===null){const F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),O=yt(F,A),O===null)throw yt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,be,we,$e,Ce,Pe,je,ut,mt,E,g,L,Y,K,J,de,ie,G,ve,xe,ye,pe,me,Oe;function qe(){Ee=new sE(O),be=new QM(O,Ee,e),Ee.init(be),pe=new GT(O,Ee,be),we=new BT(O,Ee,be),$e=new lE(O),Ce=new AT,Pe=new HT(O,Ee,we,Ce,be,pe,$e),je=new eE(p),ut=new rE(p),mt=new vy(O,be),me=new KM(O,Ee,mt,be),E=new oE(O,mt,$e,me),g=new fE(O,E,mt,$e),ve=new dE(O,be,Pe),de=new JM(Ce),L=new wT(p,je,ut,Ee,be,me,de),Y=new qT(p,Ce),K=new CT,J=new NT(Ee,be),G=new $M(p,je,ut,we,g,f,l),ie=new zT(p,g,be),Oe=new YT(O,$e,be,we),xe=new ZM(O,Ee,$e,be),ye=new aE(O,Ee,$e,be),$e.programs=L.programs,p.capabilities=be,p.extensions=Ee,p.properties=Ce,p.renderLists=K,p.shadowMap=ie,p.state=we,p.info=$e}qe();const P=new XT(p,O);this.xr=P,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(X,ee,!1))},this.getSize=function(A){return A.set(X,ee)},this.setSize=function(A,F,$=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,ee=F,n.width=Math.floor(A*Z),n.height=Math.floor(F*Z),$===!0&&(n.style.width=A+"px",n.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(X*Z,ee*Z).floor()},this.setDrawingBufferSize=function(A,F,$){X=A,ee=F,Z=$,n.width=Math.floor(A*$),n.height=Math.floor(F*$),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(V)},this.setViewport=function(A,F,$,I){A.isVector4?V.set(A.x,A.y,A.z,A.w):V.set(A,F,$,I),we.viewport(T.copy(V).multiplyScalar(Z).floor())},this.getScissor=function(A){return A.copy(N)},this.setScissor=function(A,F,$,I){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,F,$,I),we.scissor(Q.copy(N).multiplyScalar(Z).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(A){we.setScissorTest(j=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){H=A},this.getClearColor=function(A){return A.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(A=!0,F=!0,$=!0){let I=0;if(A){let q=!1;if(R!==null){const he=R.texture.format;q=he===Ig||he===Ng||he===Ug}if(q){const he=R.texture.type,Se=he===Oi||he===Ai||he===Ad||he===lr||he===Pg||he===Dg,Ae=G.getClearColor(),Re=G.getClearAlpha(),ke=Ae.r,Te=Ae.g,Ue=Ae.b;Se?(v[0]=ke,v[1]=Te,v[2]=Ue,v[3]=Re,O.clearBufferuiv(O.COLOR,0,v)):(x[0]=ke,x[1]=Te,x[2]=Ue,x[3]=Re,O.clearBufferiv(O.COLOR,0,x))}else I|=O.COLOR_BUFFER_BIT}F&&(I|=O.DEPTH_BUFFER_BIT),$&&(I|=O.STENCIL_BUFFER_BIT),O.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",W,!1),n.removeEventListener("webglcontextcreationerror",re,!1),K.dispose(),J.dispose(),Ce.dispose(),je.dispose(),ut.dispose(),g.dispose(),me.dispose(),Oe.dispose(),L.dispose(),P.dispose(),P.removeEventListener("sessionstart",Ke),P.removeEventListener("sessionend",On),ge&&(ge.dispose(),ge=null),zt.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=$e.autoReset,F=ie.enabled,$=ie.autoUpdate,I=ie.needsUpdate,q=ie.type;qe(),$e.autoReset=A,ie.enabled=F,ie.autoUpdate=$,ie.needsUpdate=I,ie.type=q}function re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ce(A){const F=A.target;F.removeEventListener("dispose",ce),Ge(F)}function Ge(A){tt(A),Ce.remove(A)}function tt(A){const F=Ce.get(A).programs;F!==void 0&&(F.forEach(function($){L.releaseProgram($)}),A.isShaderMaterial&&L.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,$,I,q,he){F===null&&(F=Pt);const Se=q.isMesh&&q.matrixWorld.determinant()<0,Ae=fv(A,F,$,I,q);we.setMaterial(I,Se);let Re=$.index,ke=1;if(I.wireframe===!0){if(Re=E.getWireframeAttribute($),Re===void 0)return;ke=2}const Te=$.drawRange,Ue=$.attributes.position;let st=Te.start*ke,at=(Te.start+Te.count)*ke;he!==null&&(st=Math.max(st,he.start*ke),at=Math.min(at,(he.start+he.count)*ke)),Re!==null?(st=Math.max(st,0),at=Math.min(at,Re.count)):Ue!=null&&(st=Math.max(st,0),at=Math.min(at,Ue.count));const hn=at-st;if(hn<0||hn===1/0)return;me.setup(q,I,Ae,$,Re);let jn,dt=xe;if(Re!==null&&(jn=mt.get(Re),dt=ye,dt.setIndex(jn)),q.isMesh)I.wireframe===!0?(we.setLineWidth(I.wireframeLinewidth*De()),dt.setMode(O.LINES)):dt.setMode(O.TRIANGLES);else if(q.isLine){let Be=I.linewidth;Be===void 0&&(Be=1),we.setLineWidth(Be*De()),q.isLineSegments?dt.setMode(O.LINES):q.isLineLoop?dt.setMode(O.LINE_LOOP):dt.setMode(O.LINE_STRIP)}else q.isPoints?dt.setMode(O.POINTS):q.isSprite&&dt.setMode(O.TRIANGLES);if(q.isInstancedMesh)dt.renderInstances(st,hn,q.count);else if($.isInstancedBufferGeometry){const Be=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Sl=Math.min($.instanceCount,Be);dt.renderInstances(st,hn,Sl)}else dt.render(st,hn)},this.compile=function(A,F){function $(I,q,he){I.transparent===!0&&I.side===ti&&I.forceSinglePass===!1?(I.side=en,I.needsUpdate=!0,Co(I,q,he),I.side=Bi,I.needsUpdate=!0,Co(I,q,he),I.side=ti):Co(I,q,he)}m=J.get(A),m.init(),_.push(m),A.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights(p._useLegacyLights),A.traverse(function(I){const q=I.material;if(q)if(Array.isArray(q))for(let he=0;he<q.length;he++){const Se=q[he];$(Se,A,I)}else $(q,A,I)}),_.pop(),m=null};let ct=null;function pi(A){ct&&ct(A)}function Ke(){zt.stop()}function On(){zt.start()}const zt=new Zg;zt.setAnimationLoop(pi),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(A){ct=A,P.setAnimationLoop(A),A===null?zt.stop():zt.start()},P.addEventListener("sessionstart",Ke),P.addEventListener("sessionend",On),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(F),F=P.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,F,R),m=J.get(A,_.length),m.init(),_.push(m),Me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),oe.setFromProjectionMatrix(Me),ue=this.localClippingEnabled,se=de.init(this.clippingPlanes,ue),y=K.get(A,c.length),y.init(),c.push(y),bd(A,F,0,p.sortObjects),y.finish(),p.sortObjects===!0&&y.sort(D,H),this.info.render.frame++,se===!0&&de.beginShadows();const $=m.state.shadowsArray;if(ie.render($,A,F),se===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(y,A),m.setupLights(p._useLegacyLights),F.isArrayCamera){const I=F.cameras;for(let q=0,he=I.length;q<he;q++){const Se=I[q];Ld(y,A,Se,Se.viewport)}}else Ld(y,A,F);R!==null&&(Pe.updateMultisampleRenderTarget(R),Pe.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(p,A,F),me.resetDefaultState(),U=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,c.pop(),c.length>0?y=c[c.length-1]:y=null};function bd(A,F,$,I){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||oe.intersectsSprite(A)){I&&Ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const Se=g.update(A),Ae=A.material;Ae.visible&&y.push(A,Se,Ae,$,Ve.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||oe.intersectsObject(A))){const Se=g.update(A),Ae=A.material;if(I&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ve.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ve.copy(Se.boundingSphere.center)),Ve.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Ae)){const Re=Se.groups;for(let ke=0,Te=Re.length;ke<Te;ke++){const Ue=Re[ke],st=Ae[Ue.materialIndex];st&&st.visible&&y.push(A,Se,st,$,Ve.z,Ue)}}else Ae.visible&&y.push(A,Se,Ae,$,Ve.z,null)}}const he=A.children;for(let Se=0,Ae=he.length;Se<Ae;Se++)bd(he[Se],F,$,I)}function Ld(A,F,$,I){const q=A.opaque,he=A.transmissive,Se=A.transparent;m.setupLightsView($),se===!0&&de.setGlobalState(p.clippingPlanes,$),he.length>0&&dv(q,he,F,$),I&&we.viewport(T.copy(I)),q.length>0&&Ro(q,F,$),he.length>0&&Ro(he,F,$),Se.length>0&&Ro(Se,F,$),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function dv(A,F,$,I){const q=be.isWebGL2;ge===null&&(ge=new Hi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?ps:Oi,minFilter:mo,samples:q?4:0})),p.getDrawingBufferSize(_e),q?ge.setSize(_e.x,_e.y):ge.setSize(bc(_e.x),bc(_e.y));const he=p.getRenderTarget();p.setRenderTarget(ge),p.getClearColor(z),B=p.getClearAlpha(),B<1&&p.setClearColor(16777215,.5),p.clear();const Se=p.toneMapping;p.toneMapping=Fi,Ro(A,$,I),Pe.updateMultisampleRenderTarget(ge),Pe.updateRenderTargetMipmap(ge);let Ae=!1;for(let Re=0,ke=F.length;Re<ke;Re++){const Te=F[Re],Ue=Te.object,st=Te.geometry,at=Te.material,hn=Te.group;if(at.side===ti&&Ue.layers.test(I.layers)){const jn=at.side;at.side=en,at.needsUpdate=!0,Pd(Ue,$,I,st,at,hn),at.side=jn,at.needsUpdate=!0,Ae=!0}}Ae===!0&&(Pe.updateMultisampleRenderTarget(ge),Pe.updateRenderTargetMipmap(ge)),p.setRenderTarget(he),p.setClearColor(z,B),p.toneMapping=Se}function Ro(A,F,$){const I=F.isScene===!0?F.overrideMaterial:null;for(let q=0,he=A.length;q<he;q++){const Se=A[q],Ae=Se.object,Re=Se.geometry,ke=I===null?Se.material:I,Te=Se.group;Ae.layers.test($.layers)&&Pd(Ae,F,$,Re,ke,Te)}}function Pd(A,F,$,I,q,he){A.onBeforeRender(p,F,$,I,q,he),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(p,F,$,I,A,he),q.transparent===!0&&q.side===ti&&q.forceSinglePass===!1?(q.side=en,q.needsUpdate=!0,p.renderBufferDirect($,F,I,q,A,he),q.side=Bi,q.needsUpdate=!0,p.renderBufferDirect($,F,I,q,A,he),q.side=ti):p.renderBufferDirect($,F,I,q,A,he),A.onAfterRender(p,F,$,I,q,he)}function Co(A,F,$){F.isScene!==!0&&(F=Pt);const I=Ce.get(A),q=m.state.lights,he=m.state.shadowsArray,Se=q.state.version,Ae=L.getParameters(A,q.state,he,F,$),Re=L.getProgramCacheKey(Ae);let ke=I.programs;I.environment=A.isMeshStandardMaterial?F.environment:null,I.fog=F.fog,I.envMap=(A.isMeshStandardMaterial?ut:je).get(A.envMap||I.environment),ke===void 0&&(A.addEventListener("dispose",ce),ke=new Map,I.programs=ke);let Te=ke.get(Re);if(Te!==void 0){if(I.currentProgram===Te&&I.lightsStateVersion===Se)return Dd(A,Ae),Te}else Ae.uniforms=L.getUniforms(A),A.onBuild($,Ae,p),A.onBeforeCompile(Ae,p),Te=L.acquireProgram(Ae,Re),ke.set(Re,Te),I.uniforms=Ae.uniforms;const Ue=I.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=de.uniform),Dd(A,Ae),I.needsLights=pv(A),I.lightsStateVersion=Se,I.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.directionalShadowMap.value=q.state.directionalShadowMap,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotShadowMap.value=q.state.spotShadowMap,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMap.value=q.state.pointShadowMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix);const st=Te.getUniforms(),at=Ra.seqWithValue(st.seq,Ue);return I.currentProgram=Te,I.uniformsList=at,Te}function Dd(A,F){const $=Ce.get(A);$.outputColorSpace=F.outputColorSpace,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function fv(A,F,$,I,q){F.isScene!==!0&&(F=Pt),Pe.resetTextureUnits();const he=F.fog,Se=I.isMeshStandardMaterial?F.environment:null,Ae=R===null?p.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Wn,Re=(I.isMeshStandardMaterial?ut:je).get(I.envMap||Se),ke=I.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Te=!!$.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Ue=!!$.morphAttributes.position,st=!!$.morphAttributes.normal,at=!!$.morphAttributes.color;let hn=Fi;I.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(hn=p.toneMapping);const jn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,dt=jn!==void 0?jn.length:0,Be=Ce.get(I),Sl=m.state.lights;if(se===!0&&(ue===!0||A!==M)){const rn=A===M&&I.id===U;de.setState(I,A,rn)}let ft=!1;I.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Sl.state.version||Be.outputColorSpace!==Ae||q.isInstancedMesh&&Be.instancing===!1||!q.isInstancedMesh&&Be.instancing===!0||q.isSkinnedMesh&&Be.skinning===!1||!q.isSkinnedMesh&&Be.skinning===!0||q.isInstancedMesh&&Be.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Be.instancingColor===!1&&q.instanceColor!==null||Be.envMap!==Re||I.fog===!0&&Be.fog!==he||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==de.numPlanes||Be.numIntersection!==de.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==Te||Be.morphTargets!==Ue||Be.morphNormals!==st||Be.morphColors!==at||Be.toneMapping!==hn||be.isWebGL2===!0&&Be.morphTargetsCount!==dt)&&(ft=!0):(ft=!0,Be.__version=I.version);let Xi=Be.currentProgram;ft===!0&&(Xi=Co(I,F,q));let Ud=!1,Ms=!1,Ml=!1;const Bt=Xi.getUniforms(),qi=Be.uniforms;if(we.useProgram(Xi.program)&&(Ud=!0,Ms=!0,Ml=!0),I.id!==U&&(U=I.id,Ms=!0),Ud||M!==A){if(Bt.setValue(O,"projectionMatrix",A.projectionMatrix),be.logarithmicDepthBuffer&&Bt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,Ms=!0,Ml=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const rn=Bt.map.cameraPosition;rn!==void 0&&rn.setValue(O,Ve.setFromMatrixPosition(A.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Bt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||q.isSkinnedMesh)&&Bt.setValue(O,"viewMatrix",A.matrixWorldInverse)}if(q.isSkinnedMesh){Bt.setOptional(O,q,"bindMatrix"),Bt.setOptional(O,q,"bindMatrixInverse");const rn=q.skeleton;rn&&(be.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Bt.setValue(O,"boneTexture",rn.boneTexture,Pe),Bt.setValue(O,"boneTextureSize",rn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const El=$.morphAttributes;if((El.position!==void 0||El.normal!==void 0||El.color!==void 0&&be.isWebGL2===!0)&&ve.update(q,$,Xi),(Ms||Be.receiveShadow!==q.receiveShadow)&&(Be.receiveShadow=q.receiveShadow,Bt.setValue(O,"receiveShadow",q.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(qi.envMap.value=Re,qi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Ms&&(Bt.setValue(O,"toneMappingExposure",p.toneMappingExposure),Be.needsLights&&hv(qi,Ml),he&&I.fog===!0&&Y.refreshFogUniforms(qi,he),Y.refreshMaterialUniforms(qi,I,Z,ee,ge),Ra.upload(O,Be.uniformsList,qi,Pe)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Ra.upload(O,Be.uniformsList,qi,Pe),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Bt.setValue(O,"center",q.center),Bt.setValue(O,"modelViewMatrix",q.modelViewMatrix),Bt.setValue(O,"normalMatrix",q.normalMatrix),Bt.setValue(O,"modelMatrix",q.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const rn=I.uniformsGroups;for(let Tl=0,mv=rn.length;Tl<mv;Tl++)if(be.isWebGL2){const Nd=rn[Tl];Oe.update(Nd,Xi),Oe.bind(Nd,Xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xi}function hv(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function pv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,F,$){Ce.get(A.texture).__webglTexture=F,Ce.get(A.depthTexture).__webglTexture=$;const I=Ce.get(A);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=$===void 0,I.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,F){const $=Ce.get(A);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,$=0){R=A,w=F,C=$;let I=!0,q=null,he=!1,Se=!1;if(A){const Re=Ce.get(A);Re.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(O.FRAMEBUFFER,null),I=!1):Re.__webglFramebuffer===void 0?Pe.setupRenderTarget(A):Re.__hasExternalTextures&&Pe.rebindTextures(A,Ce.get(A.texture).__webglTexture,Ce.get(A.depthTexture).__webglTexture);const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Se=!0);const Te=Ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Te[F])?q=Te[F][$]:q=Te[F],he=!0):be.isWebGL2&&A.samples>0&&Pe.useMultisampledRTT(A)===!1?q=Ce.get(A).__webglMultisampledFramebuffer:Array.isArray(Te)?q=Te[$]:q=Te,T.copy(A.viewport),Q.copy(A.scissor),ne=A.scissorTest}else T.copy(V).multiplyScalar(Z).floor(),Q.copy(N).multiplyScalar(Z).floor(),ne=j;if(we.bindFramebuffer(O.FRAMEBUFFER,q)&&be.drawBuffers&&I&&we.drawBuffers(A,q),we.viewport(T),we.scissor(Q),we.setScissorTest(ne),he){const Re=Ce.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,$)}else if(Se){const Re=Ce.get(A.texture),ke=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Re.__webglTexture,$||0,ke)}U=-1},this.readRenderTargetPixels=function(A,F,$,I,q,he,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){we.bindFramebuffer(O.FRAMEBUFFER,Ae);try{const Re=A.texture,ke=Re.format,Te=Re.type;if(ke!==vn&&pe.convert(ke)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Te===ps&&(Ee.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Te!==Oi&&pe.convert(Te)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Te===ri&&(be.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-I&&$>=0&&$<=A.height-q&&O.readPixels(F,$,I,q,pe.convert(ke),pe.convert(Te),he)}finally{const Re=R!==null?Ce.get(R).__webglFramebuffer:null;we.bindFramebuffer(O.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,F,$=0){const I=Math.pow(2,-$),q=Math.floor(F.image.width*I),he=Math.floor(F.image.height*I);Pe.setTexture2D(F,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,A.x,A.y,q,he),we.unbindTexture()},this.copyTextureToTexture=function(A,F,$,I=0){const q=F.image.width,he=F.image.height,Se=pe.convert($.format),Ae=pe.convert($.type);Pe.setTexture2D($,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment),F.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,I,A.x,A.y,q,he,Se,Ae,F.image.data):F.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,I,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,Se,F.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,I,A.x,A.y,Se,Ae,F.image),I===0&&$.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(A,F,$,I,q=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,Ae=A.max.z-A.min.z+1,Re=pe.convert(I.format),ke=pe.convert(I.type);let Te;if(I.isData3DTexture)Pe.setTexture3D(I,0),Te=O.TEXTURE_3D;else if(I.isDataArrayTexture)Pe.setTexture2DArray(I,0),Te=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);const Ue=O.getParameter(O.UNPACK_ROW_LENGTH),st=O.getParameter(O.UNPACK_IMAGE_HEIGHT),at=O.getParameter(O.UNPACK_SKIP_PIXELS),hn=O.getParameter(O.UNPACK_SKIP_ROWS),jn=O.getParameter(O.UNPACK_SKIP_IMAGES),dt=$.isCompressedTexture?$.mipmaps[0]:$.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,dt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),$.isDataTexture||$.isData3DTexture?O.texSubImage3D(Te,q,F.x,F.y,F.z,he,Se,Ae,Re,ke,dt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Te,q,F.x,F.y,F.z,he,Se,Ae,Re,dt.data)):O.texSubImage3D(Te,q,F.x,F.y,F.z,he,Se,Ae,Re,ke,dt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ue),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,st),O.pixelStorei(O.UNPACK_SKIP_PIXELS,at),O.pixelStorei(O.UNPACK_SKIP_ROWS,hn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,jn),q===0&&I.generateMipmaps&&O.generateMipmap(Te),we.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Pe.setTextureCube(A,0):A.isData3DTexture?Pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Pe.setTexture2DArray(A,0):Pe.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){w=0,C=0,R=null,we.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ie?cr:Fg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===cr?Ie:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class KT extends nv{}KT.prototype.isWebGL1Renderer=!0;class op extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class ZT extends tn{constructor(e=null,n=1,i=1,r,s,o,a,l,u=Rt,d=Rt,h,f){super(null,o,a,l,u,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class QT extends To{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ap=new k,lp=new k,up=new wt,Ru=new Gg,ha=new _l;class JT extends nn{constructor(e=new hi,n=new QT){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ap.fromBufferAttribute(n,r-1),lp.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ap.distanceTo(lp);e.setAttribute("lineDistance",new ai(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(r),ha.radius+=s,e.ray.intersectsSphere(ha)===!1)return;up.copy(r).invert(),Ru.copy(e.ray).applyMatrix4(up);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new k,d=new k,h=new k,f=new k,v=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){const c=Math.max(0,o.start),_=Math.min(x.count,o.start+o.count);for(let p=c,S=_-1;p<S;p+=v){const w=x.getX(p),C=x.getX(p+1);if(u.fromBufferAttribute(m,w),d.fromBufferAttribute(m,C),Ru.distanceSqToSegment(u,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||n.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let p=c,S=_-1;p<S;p+=v){if(u.fromBufferAttribute(m,p),d.fromBufferAttribute(m,p+1),Ru.distanceSqToSegment(u,d,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||n.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:p,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const cp=new k,dp=new k;class e1 extends JT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)cp.fromBufferAttribute(n,r),dp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+cp.distanceTo(dp);e.setAttribute("lineDistance",new ai(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pa extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class t1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=fp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function fp(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);function n1({mouseForce:t=20,cursorSize:e=100,isViscous:n=!1,viscous:i=30,iterationsViscous:r=32,iterationsPoisson:s=32,dt:o=.014,BFECC:a=!0,resolution:l=.5,isBounce:u=!1,colors:d=["#5227FF","#FF9FFC","#B19EEF"],style:h={},className:f="",autoDemo:v=!0,autoSpeed:x=.5,autoIntensity:y=2.2,takeoverDuration:m=.25,autoResumeDelay:c=1e3,autoRampDuration:_=.6}){const p=Je.useRef(null),S=Je.useRef(null),w=Je.useRef(null),C=Je.useRef(null),R=Je.useRef(null),U=Je.useRef(!0),M=Je.useRef(null);return Je.useEffect(()=>{if(!p.current)return;function T(E){let g;Array.isArray(E)&&E.length>0?E.length===1?g=[E[0],E[0]]:g=E:g=["#ffffff","#ffffff"];const L=g.length,Y=new Uint8Array(L*4);for(let J=0;J<L;J++){const de=new Xe(g[J]);Y[J*4+0]=Math.round(de.r*255),Y[J*4+1]=Math.round(de.g*255),Y[J*4+2]=Math.round(de.b*255),Y[J*4+3]=255}const K=new ZT(Y,L,1,vn);return K.magFilter=Ot,K.minFilter=Ot,K.wrapS=Vt,K.wrapT=Vt,K.generateMipmaps=!1,K.needsUpdate=!0,K}const Q=T(d),ne=new Et(0,0,0,0);class z{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(g){this.container=g,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new nv({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Xe(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new t1,this.clock.start()}resize(){if(!this.container)return;const g=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(g.width)),this.height=Math.max(1,Math.floor(g.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const B=new z;class X{constructor(){this.mouseMoved=!1,this.coords=new Le,this.coords_old=new Le,this.diff=new Le,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new Le,this.takeoverTo=new Le,this.onInteract=null}init(g){this.container=g,g.addEventListener("mousemove",this._onMouseMove,!1),g.addEventListener("touchstart",this._onTouchStart,!1),g.addEventListener("touchmove",this._onTouchMove,!1),g.addEventListener("mouseenter",this._onMouseEnter,!1),g.addEventListener("mouseleave",this._onMouseLeave,!1),g.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(g,L){if(!this.container)return;this.timer&&clearTimeout(this.timer);const Y=this.container.getBoundingClientRect(),K=(g-Y.left)/Y.width,J=(L-Y.top)/Y.height;this.coords.set(K*2-1,-(J*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(g,L){this.coords.set(g,L),this.mouseMoved=!0}onDocumentMouseMove(g){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const L=this.container.getBoundingClientRect(),Y=(g.clientX-L.left)/L.width,K=(g.clientY-L.top)/L.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Y*2-1,-(K*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(g.clientX,g.clientY),this.hasUserControl=!0}onDocumentTouchStart(g){if(g.touches.length===1){const L=g.touches[0];this.onInteract&&this.onInteract(),this.setCoords(L.pageX,L.pageY),this.hasUserControl=!0}}onDocumentTouchMove(g){if(g.touches.length===1){const L=g.touches[0];this.onInteract&&this.onInteract(),this.setCoords(L.pageX,L.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const g=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(g>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const L=g*g*(3-2*g);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,L)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const ee=new X;class Z{constructor(g,L,Y){this.mouse=g,this.manager=L,this.enabled=Y.enabled,this.speed=Y.speed,this.resumeDelay=Y.resumeDelay||3e3,this.rampDurationMs=(Y.rampDuration||0)*1e3,this.active=!1,this.current=new Le(0,0),this.target=new Le,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new Le,this.pickNewTarget()}pickNewTarget(){const g=Math.random;this.target.set((g()*2-1)*(1-this.margin),(g()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const g=performance.now();if(g-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=g,this.activationTime=g),!this.active)return;this.mouse.isAutoActive=!0;let Y=(g-this.lastTime)/1e3;this.lastTime=g,Y>.2&&(Y=.016);const K=this._tmpDir.subVectors(this.target,this.current),J=K.length();if(J<.01){this.pickNewTarget();return}K.normalize();let de=1;if(this.rampDurationMs>0){const ve=Math.min(1,(g-this.activationTime)/this.rampDurationMs);de=ve*ve*(3-2*ve)}const ie=this.speed*Y*de,G=Math.min(ie,J);this.current.addScaledVector(K,G),this.mouse.setNormalized(this.current.x,this.current.y)}}const D=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,H=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,V=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,N=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,j=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,oe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,se=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,ue=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,ge=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,Me=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class _e{constructor(g){var L;this.props=g||{},this.uniforms=(L=this.props.material)==null?void 0:L.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new op,this.camera=new el,this.uniforms&&(this.material=new pa(this.props.material),this.geometry=new rs(2,2),this.plane=new Dn(this.geometry,this.material),this.scene.add(this.plane))}update(){B.renderer.setRenderTarget(this.props.output||null),B.renderer.render(this.scene,this.camera),B.renderer.setRenderTarget(null)}}class Ve extends _e{constructor(g){super({material:{vertexShader:D,fragmentShader:N,uniforms:{boundarySpace:{value:g.cellScale},px:{value:g.cellScale},fboSize:{value:g.fboSize},velocity:{value:g.src.texture},dt:{value:g.dt},isBFECC:{value:!0}}},output:g.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const g=new hi,L=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);g.setAttribute("position",new In(L,3));const Y=new pa({vertexShader:H,fragmentShader:N,uniforms:this.uniforms});this.line=new e1(g,Y),this.scene.add(this.line)}update({dt:g,isBounce:L,BFECC:Y}){this.uniforms.dt.value=g,this.line.visible=L,this.uniforms.isBFECC.value=Y,super.update()}}class Pt extends _e{constructor(g){super({output:g.dst}),this.init(g)}init(g){super.init();const L=new rs(1,1),Y=new pa({vertexShader:V,fragmentShader:se,blending:Sc,depthWrite:!1,uniforms:{px:{value:g.cellScale},force:{value:new Le(0,0)},center:{value:new Le(0,0)},scale:{value:new Le(g.cursor_size,g.cursor_size)}}});this.mouse=new Dn(L,Y),this.scene.add(this.mouse)}update(g){const L=ee.diff.x/2*g.mouse_force,Y=ee.diff.y/2*g.mouse_force,K=g.cursor_size*g.cellScale.x,J=g.cursor_size*g.cellScale.y,de=Math.min(Math.max(ee.coords.x,-1+K+g.cellScale.x*2),1-K-g.cellScale.x*2),ie=Math.min(Math.max(ee.coords.y,-1+J+g.cellScale.y*2),1-J-g.cellScale.y*2),G=this.mouse.material.uniforms;G.force.value.set(L,Y),G.center.value.set(de,ie),G.scale.value.set(g.cursor_size,g.cursor_size),super.update()}}class De extends _e{constructor(g){super({material:{vertexShader:D,fragmentShader:Me,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},velocity_new:{value:g.dst_.texture},v:{value:g.viscous},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({viscous:g,iterations:L,dt:Y}){let K,J;this.uniforms.v.value=g;for(let de=0;de<L;de++)de%2===0?(K=this.props.output0,J=this.props.output1):(K=this.props.output1,J=this.props.output0),this.uniforms.velocity_new.value=K.texture,this.props.output=J,this.uniforms.dt.value=Y,super.update();return J}}class O extends _e{constructor(g){super({material:{vertexShader:D,fragmentShader:oe,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g}){this.uniforms.velocity.value=g.texture,super.update()}}class yt extends _e{constructor(g){super({material:{vertexShader:D,fragmentShader:ue,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.dst_.texture},divergence:{value:g.src.texture},px:{value:g.cellScale}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({iterations:g}){let L,Y;for(let K=0;K<g;K++)K%2===0?(L=this.props.output0,Y=this.props.output1):(L=this.props.output1,Y=this.props.output0),this.uniforms.pressure.value=L.texture,this.props.output=Y,super.update();return Y}}class Ee extends _e{constructor(g){super({material:{vertexShader:D,fragmentShader:ge,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.src_p.texture},velocity:{value:g.src_v.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g,pressure:L}){this.uniforms.velocity.value=g.texture,this.uniforms.pressure.value=L.texture,super.update()}}class be{constructor(g){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...g},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new Le,this.cellScale=new Le,this.boundarySpace=new Le,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?ps:ri}createAllFBO(){const L={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Ot,magFilter:Ot,wrapS:Vt,wrapT:Vt};for(let Y in this.fbos)this.fbos[Y]=new Hi(this.fboSize.x,this.fboSize.y,L)}createShaderPass(){this.advection=new Ve({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Pt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new De({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new O({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new yt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Ee({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const g=Math.max(1,Math.round(this.options.resolution*B.width)),L=Math.max(1,Math.round(this.options.resolution*B.height)),Y=1/g,K=1/L;this.cellScale.set(Y,K),this.fboSize.set(g,L)}resize(){this.calcSize();for(let g in this.fbos)this.fbos[g].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let g=this.fbos.vel_1;this.options.isViscous&&(g=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:g});const L=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:g,pressure:L})}}class we{constructor(){this.init()}init(){this.simulation=new be,this.scene=new op,this.camera=new el,this.output=new Dn(new rs(2,2),new pa({vertexShader:D,fragmentShader:j,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new Le},palette:{value:Q},bgColor:{value:ne}}})),this.scene.add(this.output)}addScene(g){this.scene.add(g)}resize(){this.simulation.resize()}render(){B.renderer.setRenderTarget(null),B.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class $e{constructor(g){this.props=g,B.init(g.$wrapper),ee.init(g.$wrapper),ee.autoIntensity=g.autoIntensity,ee.takeoverDuration=g.takeoverDuration,this.lastUserInteraction=performance.now(),ee.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new Z(ee,this,{enabled:g.autoDemo,speed:g.autoSpeed,resumeDelay:g.autoResumeDelay,rampDuration:g.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():U.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(B.renderer.domElement),this.output=new we}resize(){B.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),ee.update(),B.update(),this.output.update()}loop(){this.running&&(this.render(),C.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,C.current&&(cancelAnimationFrame(C.current),C.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),ee.dispose(),B.renderer){const g=B.renderer.domElement;g&&g.parentNode&&g.parentNode.removeChild(g),B.renderer.dispose()}}catch{}}}const Ce=p.current;Ce.style.position=Ce.style.position||"relative",Ce.style.overflow=Ce.style.overflow||"hidden";const Pe=new $e({$wrapper:Ce,autoDemo:v,autoSpeed:x,autoIntensity:y,takeoverDuration:m,autoResumeDelay:c,autoRampDuration:_});S.current=Pe,(()=>{var L;if(!S.current)return;const E=(L=S.current.output)==null?void 0:L.simulation;if(!E)return;const g=E.options.resolution;Object.assign(E.options,{mouse_force:t,cursor_size:e,isViscous:n,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:u}),l!==g&&E.resize()})(),Pe.start();const ut=new IntersectionObserver(E=>{const g=E[0],L=g.isIntersecting&&g.intersectionRatio>0;U.current=L,S.current&&(L&&!document.hidden?S.current.start():S.current.pause())},{threshold:[0,.01,.1]});ut.observe(Ce),R.current=ut;const mt=new ResizeObserver(()=>{S.current&&(M.current&&cancelAnimationFrame(M.current),M.current=requestAnimationFrame(()=>{S.current&&S.current.resize()}))});return mt.observe(Ce),w.current=mt,()=>{if(C.current&&cancelAnimationFrame(C.current),w.current)try{w.current.disconnect()}catch{}if(R.current)try{R.current.disconnect()}catch{}S.current&&S.current.dispose(),S.current=null}},[a,e,o,u,n,s,r,t,l,i,d,v,x,y,m,c,_]),Je.useEffect(()=>{var z;const T=S.current;if(!T)return;const Q=(z=T.output)==null?void 0:z.simulation;if(!Q)return;const ne=Q.options.resolution;Object.assign(Q.options,{mouse_force:t,cursor_size:e,isViscous:n,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:u}),T.autoDriver&&(T.autoDriver.enabled=v,T.autoDriver.speed=x,T.autoDriver.resumeDelay=c,T.autoDriver.rampDurationMs=_*1e3,T.autoDriver.mouse&&(T.autoDriver.mouse.autoIntensity=y,T.autoDriver.mouse.takeoverDuration=m)),l!==ne&&Q.resize()},[t,e,n,i,r,s,o,a,l,u,v,x,y,m,c,_]),b.jsx("div",{ref:p,className:`liquid-ether-container ${f||""}`,style:h})}const i1=""+new URL("Avatar sans bg-2af57a94.png",import.meta.url).href;class Ao{constructor(e=0,n="Network Error"){this.status=e,this.text=n}}const r1=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,e)=>Promise.resolve(localStorage.setItem(t,e)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},Ct={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:r1()},Cd=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},s1=(t,e="https://api.emailjs.com")=>{if(!t)return;const n=Cd(t);Ct.publicKey=n.publicKey,Ct.blockHeadless=n.blockHeadless,Ct.storageProvider=n.storageProvider,Ct.blockList=n.blockList,Ct.limitRate=n.limitRate,Ct.origin=n.origin||e},iv=async(t,e,n={})=>{const i=await fetch(Ct.origin+t,{method:"POST",headers:n,body:e}),r=await i.text(),s=new Ao(i.status,r);if(i.ok)return s;throw s},rv=(t,e,n)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},o1=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},sv=t=>t.webdriver||!t.languages||t.languages.length===0,ov=()=>new Ao(451,"Unavailable For Headless Browser"),a1=(t,e)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},l1=t=>{var e;return!((e=t.list)!=null&&e.length)||!t.watchVariable},u1=(t,e)=>t instanceof FormData?t.get(e):t[e],av=(t,e)=>{if(l1(t))return!1;a1(t.list,t.watchVariable);const n=u1(e,t.watchVariable);return typeof n!="string"?!1:t.list.includes(n)},lv=()=>new Ao(403,"Forbidden"),c1=(t,e)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},d1=async(t,e,n)=>{const i=Number(await n.get(t)||0);return e-Date.now()+i},uv=async(t,e,n)=>{if(!e.throttle||!n)return!1;c1(e.throttle,e.id);const i=e.id||t;return await d1(i,e.throttle,n)>0?!0:(await n.set(i,Date.now().toString()),!1)},cv=()=>new Ao(429,"Too Many Requests"),f1=async(t,e,n,i)=>{const r=Cd(i),s=r.publicKey||Ct.publicKey,o=r.blockHeadless||Ct.blockHeadless,a=r.storageProvider||Ct.storageProvider,l={...Ct.blockList,...r.blockList},u={...Ct.limitRate,...r.limitRate};return o&&sv(navigator)?Promise.reject(ov()):(rv(s,t,e),o1(n),n&&av(l,n)?Promise.reject(lv()):await uv(location.pathname,u,a)?Promise.reject(cv()):iv("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"}))},h1=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},p1=t=>typeof t=="string"?document.querySelector(t):t,m1=async(t,e,n,i)=>{const r=Cd(i),s=r.publicKey||Ct.publicKey,o=r.blockHeadless||Ct.blockHeadless,a=Ct.storageProvider||r.storageProvider,l={...Ct.blockList,...r.blockList},u={...Ct.limitRate,...r.limitRate};if(o&&sv(navigator))return Promise.reject(ov());const d=p1(n);rv(s,t,e),h1(d);const h=new FormData(d);return av(l,h)?Promise.reject(lv()):await uv(location.pathname,u,a)?Promise.reject(cv()):(h.append("lib_version","4.4.1"),h.append("service_id",t),h.append("template_id",e),h.append("user_id",s),iv("/api/v1.0/email/send-form",h))},g1={init:s1,send:f1,sendForm:m1,EmailJSResponseStatus:Ao};function v1(){const[t,e]=Je.useState("home"),[n,i]=Je.useState(!1);Je.useRef(null);const[r,s]=Je.useState({name:"",email:"",projectType:"",message:""}),[o,a]=Je.useState(!1),[l,u]=Je.useState(null),d={serviceId:"service_portfolio",templateId:"template_contact",publicKey:"UtRh8phUM-lEa8QXl"},h=m=>{const{name:c,value:_}=m.target;s(p=>({...p,[c]:_}))},f=async m=>{m.preventDefault(),a(!0),u(null);const c=m.target.querySelector(".rocket-btn"),_=c.querySelector(".rocket-icon");c&&_&&(c.classList.add("rocket-launch"),_.classList.add("rocket-flying"));try{const p={from_name:r.name,from_email:r.email,project_type:r.projectType,message:r.message,to_email:"Anthonynunespro@gmail.com",reply_to:r.email};await g1.send(d.serviceId,d.templateId,p,d.publicKey),u("success"),s({name:"",email:"",projectType:"",message:""}),console.log("Email envoyé avec succès vers Anthonynunespro@gmail.com par Nuns Agency!")}catch(p){console.error("Erreur lors de l'envoi:",p),u("error")}finally{a(!1),setTimeout(()=>{c&&_&&(c.classList.remove("rocket-launch"),_.classList.remove("rocket-flying"))},3e3)}};Je.useEffect(()=>{const m=()=>{i(window.scrollY>50)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]),Je.useEffect(()=>{const m=new IntersectionObserver(_=>{_.forEach(p=>{p.isIntersecting&&p.target.classList.add("in-view")})},{threshold:.6,rootMargin:"0px 0px -10% 0px"}),c=document.querySelectorAll(".section-title");return c.forEach(_=>m.observe(_)),()=>{c.forEach(_=>m.unobserve(_))}},[]),Je.useEffect(()=>{const m=c=>{const _=document.querySelector(".liquid-background");if(_){const p=_.querySelector("canvas");if(p){p.getBoundingClientRect();const S=new MouseEvent("mousemove",{clientX:c.clientX,clientY:c.clientY,bubbles:!0});p.dispatchEvent(S)}}};return document.addEventListener("mousemove",m),()=>document.removeEventListener("mousemove",m)},[]);const v=Je.useCallback(m=>{const c=document.getElementById(m);c&&(c.scrollIntoView({behavior:"smooth"}),e(m))},[]),x=Je.useMemo(()=>[{title:"Site Vitrine",subtitle:"Page unique HTML5",price:"699€",description:"Site professionnel responsive avec design moderne",features:["Design sur mesure et responsive","Optimisation SEO de base","Formulaire de contact","Hébergement conseillé","Support 30 jours inclus","Site HTML5"],highlight:!1,cta:"Commander"},{title:"E-commerce",subtitle:"5 pages • 10 produits",price:"1500€",description:"Boutique en ligne complète avec gestion des commandes",features:["Jusqu'à 5 pages personnalisées","Catalogue 10 produits","Système de paiement sécurisé","Interface d'administration","Formation à la gestion","Support 60 jours inclus"],highlight:!0,cta:"Choisir ce plan"},{title:"Maintenance",subtitle:"Support mensuel",price:"80€/mois",description:"Maintenance et support technique pour votre site web",features:["Mises à jour sécuritaires","Sauvegarde automatique","Support technique prioritaire","Corrections de bugs","Monitoring de performance","Rapport mensuel d'activité"],highlight:!1,cta:"S'abonner"},{title:"Automatisation IA",subtitle:"Solution sur mesure",price:"Sur devis",description:"Automatisez vos processus avec l'intelligence artificielle",features:["Analyse des processus existants","Intégration ChatGPT/Claude API","Workflows automatisés","Formation à l'utilisation","Support dédié IA","Optimisation continue"],highlight:!1,cta:"Découvrir l'IA"},{title:"Sur Mesure",subtitle:"Projet illimité",price:"Sur devis",description:"Solution personnalisée selon vos besoins spécifiques",features:["Analyse complète des besoins","Développement sur mesure","Intégrations API avancées","Formation personnalisée","Support prioritaire","Maintenance évolutive"],highlight:!1,cta:"Me contacter"},{title:"Audit & Formation",subtitle:"Pour entreprises",price:"Sur devis",description:"Audit et formation sur mesure pour votre équipe",features:["Audit des processus actuels","Identification des opportunités","Formation équipe personnalisée","Plan de déploiement","Support post-formation","Suivi des performances"],highlight:!1,cta:"Planifier un audit"}],[]),y=Je.useMemo(()=>({"No-Code / Low-Code":["Webflow","Shopify","WordPress","Bubble","Zapier","Airtable"],"Frontend Development":["React","Vue.js","TypeScript","Tailwind CSS","Three.js"],"Automatisation IA":["ChatGPT","Claude","Make","Zapier AI","n8n","OpenAI API"],"Tools & Design":["Figma","Adobe CC","Git","Vercel","Netlify"]}),[]);return b.jsxs("div",{className:"App",children:[b.jsx("div",{className:"liquid-background",children:b.jsx(n1,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:30,cursorSize:150,autoDemo:!1,autoSpeed:.3,autoIntensity:1.5,autoResumeDelay:3e3,resolution:.7})}),b.jsxs("nav",{className:`navbar ${n?"scrolled":""}`,role:"navigation","aria-label":"Navigation principale",children:[b.jsxs("button",{type:"button",title:"Accueil",className:t==="home"?"active":"",onClick:()=>v("home"),children:[b.jsx("span",{children:"Accueil"}),b.jsx("span",{className:"material-symbols-outlined","aria-hidden":"true",children:"home"}),b.jsx("svg",{viewBox:"0 0 300 300","aria-hidden":"true",children:b.jsxs("g",{children:[b.jsx("text",{fill:"currentColor",children:b.jsx("textPath",{xlinkHref:"#circlePath",children:"Accueil"})}),b.jsx("text",{fill:"currentColor",children:b.jsx("textPath",{xlinkHref:"#circlePath",startOffset:"50%",children:"Accueil"})})]})})]}),b.jsxs("button",{type:"button",className:t==="about"?"active":"",onClick:()=>v("about"),children:[b.jsx("span",{children:"À propos"}),b.jsx("span",{className:"material-symbols-outlined","aria-hidden":"true",children:"info"}),b.jsx("svg",{viewBox:"0 0 300 300","aria-hidden":"true",children:b.jsxs("g",{children:[b.jsx("text",{fill:"currentColor",children:b.jsx("textPath",{xlinkHref:"#circlePath",children:"À propos"})}),b.jsx("text",{fill:"currentColor",children:b.jsx("textPath",{xlinkHref:"#circlePath",startOffset:"50%",children:"À propos"})})]})})]}),b.jsxs("button",{type:"button",className:t==="pricing"?"active":"",onClick:()=>v("pricing"),children:[b.jsx("span",{children:"Tarifs"}),b.jsx("span",{className:"material-symbols-outlined","aria-hidden":"true",children:"payments"}),b.jsx("svg",{viewBox:"0 0 300 300","aria-hidden":"true",children:b.jsxs("g",{children:[b.jsx("text",{fill:"currentColor",children:b.jsx("textPath",{xlinkHref:"#circlePath",children:"Tarifs"})}),b.jsx("text",{fill:"currentColor",children:b.jsx("textPath",{xlinkHref:"#circlePath",startOffset:"50%",children:"Tarifs"})})]})})]}),b.jsxs("button",{type:"button",className:t==="contact"?"active":"",onClick:()=>v("contact"),children:[b.jsx("span",{children:"Contact"}),b.jsx("span",{className:"material-symbols-outlined","aria-hidden":"true",children:"email"}),b.jsx("svg",{viewBox:"0 0 300 300",children:b.jsxs("g",{children:[b.jsx("text",{fill:"currentColor","aria-hidden":"true",children:b.jsx("textPath",{xlinkHref:"#circlePath",children:"Contact"})}),b.jsx("text",{fill:"currentColor",children:b.jsx("textPath",{xlinkHref:"#circlePath",startOffset:"50%",children:"Contact"})})]})})]})]}),b.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 300 300",width:"0",height:"0",style:{position:"absolute",left:"-9999px"},children:b.jsx("defs",{children:b.jsx("path",{id:"circlePath",d:"M 150, 150 m -50, 0 a 50,50 0 0,1 100,0 a 50,50 0 0,1 -100,0"})})}),b.jsxs("main",{children:[b.jsx("section",{id:"home",className:"hero","aria-labelledby":"hero-title",children:b.jsxs("div",{className:"hero-content",children:[b.jsxs("div",{className:"bitmoji-container hero-avatar",children:[b.jsx("img",{id:"bitmoji-face",src:i1,alt:"Nuns Agency Avatar"}),b.jsx("div",{className:"avatar-glow"})]}),b.jsxs("h1",{id:"hero-title",className:"hero-title-3d",children:[b.jsx("span",{className:"text-layer-1",children:"Créateur de"}),b.jsx("span",{className:"text-layer-2 gradient-text",children:"Sites Web"}),b.jsx("br",{}),b.jsx("span",{className:"text-layer-1",children:"& Expert"}),b.jsx("span",{className:"text-layer-2 gradient-text",children:"IA"})]}),b.jsxs("p",{className:"hero-subtitle",children:["1 an d'expérience • Site vitrine, E-commerce, SaaS & Applications web",b.jsx("br",{}),b.jsx("span",{className:"hero-tech",children:"No-Code • Low-Code • Automatisation IA • Développement sur mesure"})]}),b.jsxs("div",{className:"hero-stats",children:[b.jsxs("div",{className:"stat",children:[b.jsx("span",{className:"stat-number",children:"10+"}),b.jsx("span",{className:"stat-label",children:"Sites créés"})]}),b.jsxs("div",{className:"stat",children:[b.jsx("span",{className:"stat-number",children:"1"}),b.jsx("span",{className:"stat-label",children:"An d'expérience"})]}),b.jsxs("div",{className:"stat",children:[b.jsx("span",{className:"stat-number",children:"24h"}),b.jsx("span",{className:"stat-label",children:"Support réactif"})]})]}),b.jsxs("div",{className:"hero-buttons",children:[b.jsx("button",{className:"btn-primary",onClick:()=>v("pricing"),children:"Voir les tarifs"}),b.jsx("button",{className:"btn-secondary",onClick:()=>v("contact"),children:"Démarrer un projet"})]})]})}),b.jsx("section",{id:"about",className:"about","aria-labelledby":"about-title",children:b.jsxs("div",{className:"container",children:[b.jsx("h2",{id:"about-title",className:"section-title","data-text":"Expertise Technique",children:"Expertise Technique"}),b.jsxs("div",{className:"about-content",children:[b.jsxs("div",{className:"about-text",children:[b.jsxs("p",{children:[b.jsx("strong",{children:"Nuns Agency"})," est une agence de création de sites web avec 1 an d'expérience et une dizaine de sites créés. Nous transformons vos idées en solutions web performantes et sur mesure."]}),b.jsxs("p",{children:["Nous sommes spécialisés dans les outils ",b.jsx("strong",{children:"No-Code/Low-Code"})," pour une livraison rapide, avec la capacité de développer des solutions custom quand la complexité l'exige."]}),b.jsxs("div",{className:"value-props",children:[b.jsxs("div",{className:"value-prop",children:[b.jsx("span",{className:"material-symbols-outlined value-icon gradient-icon",children:"flash_on"}),b.jsxs("div",{children:[b.jsx("h4",{children:"Livraison Express"}),b.jsx("p",{children:"Sites vitrines en 5-7 jours ouvrés"})]})]}),b.jsxs("div",{className:"value-prop",children:[b.jsx("span",{className:"material-symbols-outlined value-icon gradient-icon",children:"gps_fixed"}),b.jsxs("div",{children:[b.jsx("h4",{children:"ROI Optimisé"}),b.jsx("p",{children:"Solutions adaptées à votre budget"})]})]}),b.jsxs("div",{className:"value-prop",children:[b.jsx("span",{className:"material-symbols-outlined value-icon gradient-icon",children:"rocket_launch"}),b.jsxs("div",{children:[b.jsx("h4",{children:"Support Continu"}),b.jsx("p",{children:"Maintenance et évolutions incluses"})]})]})]})]}),b.jsx("div",{className:"skills-grid",children:Object.entries(y).map(([m,c])=>b.jsxs("div",{className:"skill-category",children:[b.jsx("h3",{children:m}),b.jsx("div",{className:"skill-tags",children:c.map((_,p)=>b.jsx("span",{className:"skill-tag",children:_},p))})]},m))})]})]})}),b.jsx("section",{id:"pricing",className:"pricing","aria-labelledby":"pricing-title",children:b.jsxs("div",{className:"container",children:[b.jsx("h2",{id:"pricing-title",className:"section-title","data-text":"Tarifs & Services",children:"Tarifs & Services"}),b.jsx("p",{className:"section-subtitle",children:"Des solutions adaptées à chaque projet et budget"}),b.jsx("div",{className:"pricing-grid",children:x.map((m,c)=>b.jsxs("div",{className:`pricing-card ${m.highlight?"highlight":""}`,children:[m.highlight&&b.jsx("div",{className:"popular-badge",children:"Populaire"}),b.jsx("div",{className:"portal-particles"}),b.jsxs("div",{className:"pricing-header",children:[b.jsx("h3",{children:m.title}),b.jsx("p",{className:"pricing-subtitle",children:m.subtitle}),b.jsx("div",{className:"pricing-price",children:b.jsx("span",{className:`price ${m.price.includes("devis")?"custom-price":""}`,children:m.price})}),b.jsx("p",{className:"pricing-description",children:m.description})]}),b.jsx("div",{className:"pricing-features",children:b.jsx("ul",{children:m.features.map((_,p)=>b.jsxs("li",{children:[b.jsx("span",{className:"check-icon",children:"✓"}),_]},p))})}),b.jsx("div",{className:"pricing-cta",children:b.jsx("button",{className:m.highlight?"btn-primary":"btn-secondary",onClick:()=>v("contact"),children:m.cta})})]},c))}),b.jsx("div",{className:"pricing-note",children:b.jsxs("div",{className:"pricing-features",children:[b.jsxs("div",{className:"pricing-feature-item",children:[b.jsx("span",{className:"material-symbols-outlined gradient-icon",children:"lightbulb"}),b.jsxs("div",{children:[b.jsx("strong",{children:"Paiement flexible :"})," 50% à la commande, 50% à la livraison"]})]}),b.jsxs("div",{className:"pricing-feature-item",children:[b.jsx("span",{className:"material-symbols-outlined gradient-icon",children:"verified"}),b.jsxs("div",{children:[b.jsx("strong",{children:"Garantie :"})," Révisions jusqu'à validation finale"]})]})]})})]})}),b.jsx("section",{id:"contact",className:"contact","aria-labelledby":"contact-title",children:b.jsxs("div",{className:"container",children:[b.jsx("h2",{id:"contact-title",className:"section-title","data-text":"Démarrons votre projet",children:"Démarrons votre projet"}),b.jsxs("div",{className:"contact-content",children:[b.jsxs("div",{className:"contact-info",children:[b.jsx("h3",{children:"Services Professionnels"}),b.jsxs("p",{children:[b.jsx("strong",{children:"Nuns Agency est disponible pour vos projets"})," et propose des services web professionnels. Réponse garantie sous 24h !"]}),b.jsxs("div",{className:"contact-methods",children:[b.jsxs("div",{className:"contact-method contact-email",onClick:()=>window.open("mailto:Anthonynunespro@gmail.com","_blank"),children:[b.jsx("span",{className:"material-symbols-outlined contact-icon gradient-icon",children:"email"}),b.jsxs("div",{children:[b.jsx("span",{children:"Anthonynunespro@gmail.com"}),b.jsx("small",{children:"Réponse sous 24h"})]}),b.jsx("div",{className:"contact-tooltip",children:b.jsx("span",{children:"Cliquez pour envoyer un email"})})]}),b.jsxs("div",{className:"contact-method contact-whatsapp",onClick:()=>window.open("https://wa.me/33763550227","_blank"),children:[b.jsx("span",{className:"material-symbols-outlined contact-icon gradient-icon",children:"phone"}),b.jsxs("div",{children:[b.jsx("span",{children:"+33 07 63 55 02 27"}),b.jsx("small",{children:"Lun-Ven 9h-18h"})]}),b.jsx("div",{className:"contact-tooltip",children:b.jsx("span",{children:"Cliquez pour WhatsApp"})})]}),b.jsxs("div",{className:"contact-method contact-location",onClick:()=>window.open("https://www.google.com/maps/search/Avignon+84000","_blank"),children:[b.jsx("span",{className:"material-symbols-outlined contact-icon gradient-icon",children:"location_on"}),b.jsxs("div",{children:[b.jsx("span",{children:"Avignon, France"}),b.jsx("small",{children:"Télétravail / Sur site"})]}),b.jsx("div",{className:"contact-tooltip",children:b.jsx("span",{children:"Voir sur Google Maps"})})]})]}),b.jsxs("div",{className:"availability",children:[b.jsxs("div",{className:"availability-header",children:[b.jsx("span",{className:"material-symbols-outlined availability-icon gradient-icon",children:"schedule"}),b.jsx("h4",{children:"Disponible immédiatement"})]}),b.jsx("p",{children:"Planning : 2-3 projets par mois"})]})]}),b.jsxs("form",{className:"contact-form","aria-label":"Formulaire de contact",noValidate:!0,onSubmit:f,children:[b.jsxs("div",{className:"form-row",children:[b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"name",children:"Nom / Entreprise"}),b.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:h,required:!0,"aria-describedby":"name-error",autoComplete:"name"})]}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"email",children:"Email"}),b.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:h,required:!0,"aria-describedby":"email-error",autoComplete:"email"})]})]}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"project-type",children:"Type de projet"}),b.jsxs("select",{id:"project-type",name:"projectType",value:r.projectType,onChange:h,required:!0,"aria-describedby":"project-type-error",children:[b.jsx("option",{value:"",children:"Choisissez..."}),b.jsx("option",{value:"vitrine",children:"Site Vitrine (699€)"}),b.jsx("option",{value:"ecommerce",children:"E-commerce (1500€)"}),b.jsx("option",{value:"maintenance",children:"Maintenance (80€/mois)"}),b.jsx("option",{value:"ia",children:"Automatisation IA (Sur devis)"}),b.jsx("option",{value:"audit",children:"Audit & Formation (Sur devis)"}),b.jsx("option",{value:"custom",children:"Projet sur mesure (Sur devis)"}),b.jsx("option",{value:"emploi",children:"Opportunité d'emploi"})]})]}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"message",children:"Décrivez votre projet"}),b.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:h,rows:"4",placeholder:"Budget, délais, fonctionnalités souhaitées...",required:!0,"aria-describedby":"message-error"})]}),b.jsxs("button",{type:"submit",className:"btn-primary full-width rocket-btn",disabled:o,children:[b.jsx("span",{className:"material-symbols-outlined rocket-icon",style:{color:"white",fontSize:"1.2em",marginRight:"8px"},children:"rocket_launch"}),o?"Envoi en cours...":"Obtenir un devis gratuit"]}),l==="success"&&b.jsxs("div",{className:"form-status success",children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"0.5rem"},children:[b.jsx("span",{className:"material-symbols-outlined",style:{color:"white",fontSize:"1.2em",marginRight:"0.5rem"},children:"check_circle"}),b.jsx("span",{style:{color:"white"},children:"Message envoyé avec succès !"})]}),"Nuns Agency vous répondra rapidement sur ",b.jsx("strong",{style:{color:"white"},children:"Anthonynunespro@gmail.com"})]}),l==="error"&&b.jsxs("div",{className:"form-status error",children:["❌ Erreur lors de l'envoi. Veuillez réessayer ou contacter Nuns Agency directement à ",b.jsx("strong",{children:"Anthonynunespro@gmail.com"})]})]})]})]})})]}),b.jsx("footer",{className:"footer",role:"contentinfo",style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",padding:"2rem 0"},children:b.jsx("p",{children:"© 2024 Nuns Agency. Tous droits réservés."})})]})}Cu.createRoot(document.getElementById("root")).render(b.jsx(Dv.StrictMode,{children:b.jsx(v1,{})}));
