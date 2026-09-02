/**
 * Netflix Streaming Platform - Production Consolidated Bundle
 * Includes React 18 UMD, ReactDOM 18 UMD, and Application Code
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(){'use strict';(function(c,x){"object"===typeof exports&&"undefined"!==typeof module?x(exports):"function"===typeof define&&define.amd?define(["exports"],x):(c=c||self,x(c.React={}))})(this,function(c){function x(a){if(null===a||"object"!==typeof a)return null;a=V&&a[V]||a["@@iterator"];return"function"===typeof a?a:null}function w(a,b,e){this.props=a;this.context=b;this.refs=W;this.updater=e||X}function Y(){}function K(a,b,e){this.props=a;this.context=b;this.refs=W;this.updater=e||X}function Z(a,b,
e){var m,d={},c=null,h=null;if(null!=b)for(m in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(c=""+b.key),b)aa.call(b,m)&&!ba.hasOwnProperty(m)&&(d[m]=b[m]);var l=arguments.length-2;if(1===l)d.children=e;else if(1<l){for(var f=Array(l),k=0;k<l;k++)f[k]=arguments[k+2];d.children=f}if(a&&a.defaultProps)for(m in l=a.defaultProps,l)void 0===d[m]&&(d[m]=l[m]);return{$$typeof:y,type:a,key:c,ref:h,props:d,_owner:L.current}}function oa(a,b){return{$$typeof:y,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}
function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===y}function pa(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?pa(""+a.key):b.toString(36)}function B(a,b,e,m,d){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;var h=!1;if(null===a)h=!0;else switch(c){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case y:case qa:h=!0}}if(h)return h=a,d=d(h),a=""===m?"."+
N(h,0):m,ca(d)?(e="",null!=a&&(e=a.replace(da,"$&/")+"/"),B(d,b,e,"",function(a){return a})):null!=d&&(M(d)&&(d=oa(d,e+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(da,"$&/")+"/")+a)),b.push(d)),1;h=0;m=""===m?".":m+":";if(ca(a))for(var l=0;l<a.length;l++){c=a[l];var f=m+N(c,l);h+=B(c,b,e,f,d)}else if(f=x(a),"function"===typeof f)for(a=f.call(a),l=0;!(c=a.next()).done;)c=c.value,f=m+N(c,l++),h+=B(c,b,e,f,d);else if("object"===c)throw b=String(a),Error("Objects are not valid as a React child (found: "+
("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}function C(a,b,e){if(null==a)return a;var c=[],d=0;B(a,c,"","",function(a){return b.call(e,a,d++)});return c}function ra(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=
0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}function O(a,b){var e=a.length;a.push(b);a:for(;0<e;){var c=e-1>>>1,d=a[c];if(0<D(d,b))a[c]=b,a[e]=d,e=c;else break a}}function p(a){return 0===a.length?null:a[0]}function E(a){if(0===a.length)return null;var b=a[0],e=a.pop();if(e!==b){a[0]=e;a:for(var c=0,d=a.length,k=d>>>1;c<k;){var h=2*(c+1)-1,l=a[h],f=h+1,g=a[f];if(0>D(l,e))f<d&&0>D(g,l)?(a[c]=g,a[f]=e,c=f):(a[c]=l,a[h]=e,c=h);else if(f<d&&0>D(g,e))a[c]=g,a[f]=e,c=f;else break a}}return b}
function D(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}function P(a){for(var b=p(r);null!==b;){if(null===b.callback)E(r);else if(b.startTime<=a)E(r),b.sortIndex=b.expirationTime,O(q,b);else break;b=p(r)}}function Q(a){z=!1;P(a);if(!u)if(null!==p(q))u=!0,R(S);else{var b=p(r);null!==b&&T(Q,b.startTime-a)}}function S(a,b){u=!1;z&&(z=!1,ea(A),A=-1);F=!0;var c=k;try{P(b);for(n=p(q);null!==n&&(!(n.expirationTime>b)||a&&!fa());){var m=n.callback;if("function"===typeof m){n.callback=null;
k=n.priorityLevel;var d=m(n.expirationTime<=b);b=v();"function"===typeof d?n.callback=d:n===p(q)&&E(q);P(b)}else E(q);n=p(q)}if(null!==n)var g=!0;else{var h=p(r);null!==h&&T(Q,h.startTime-b);g=!1}return g}finally{n=null,k=c,F=!1}}function fa(){return v()-ha<ia?!1:!0}function R(a){G=a;H||(H=!0,I())}function T(a,b){A=ja(function(){a(v())},b)}function ka(a){throw Error("act(...) is not supported in production builds of React.");}var y=Symbol.for("react.element"),qa=Symbol.for("react.portal"),sa=Symbol.for("react.fragment"),
ta=Symbol.for("react.strict_mode"),ua=Symbol.for("react.profiler"),va=Symbol.for("react.provider"),wa=Symbol.for("react.context"),xa=Symbol.for("react.forward_ref"),ya=Symbol.for("react.suspense"),za=Symbol.for("react.memo"),Aa=Symbol.for("react.lazy"),V=Symbol.iterator,X={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,c){},enqueueReplaceState:function(a,b,c,m){},enqueueSetState:function(a,b,c,m){}},la=Object.assign,W={};w.prototype.isReactComponent={};w.prototype.setState=function(a,
b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};w.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};Y.prototype=w.prototype;var t=K.prototype=new Y;t.constructor=K;la(t,w.prototype);t.isPureReactComponent=!0;var ca=Array.isArray,aa=Object.prototype.hasOwnProperty,L={current:null},
ba={key:!0,ref:!0,__self:!0,__source:!0},da=/\/+/g,g={current:null},J={transition:null};if("object"===typeof performance&&"function"===typeof performance.now){var Ba=performance;var v=function(){return Ba.now()}}else{var ma=Date,Ca=ma.now();v=function(){return ma.now()-Ca}}var q=[],r=[],Da=1,n=null,k=3,F=!1,u=!1,z=!1,ja="function"===typeof setTimeout?setTimeout:null,ea="function"===typeof clearTimeout?clearTimeout:null,na="undefined"!==typeof setImmediate?setImmediate:null;"undefined"!==typeof navigator&&
void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var H=!1,G=null,A=-1,ia=5,ha=-1,U=function(){if(null!==G){var a=v();ha=a;var b=!0;try{b=G(!0,a)}finally{b?I():(H=!1,G=null)}}else H=!1};if("function"===typeof na)var I=function(){na(U)};else if("undefined"!==typeof MessageChannel){t=new MessageChannel;var Ea=t.port2;t.port1.onmessage=U;I=function(){Ea.postMessage(null)}}else I=function(){ja(U,0)};t={ReactCurrentDispatcher:g,
ReactCurrentOwner:L,ReactCurrentBatchConfig:J,Scheduler:{__proto__:null,unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=k;k=a;try{return b()}finally{k=c}},unstable_next:function(a){switch(k){case 1:case 2:case 3:var b=3;break;default:b=k}var c=k;k=b;try{return a()}finally{k=c}},unstable_scheduleCallback:function(a,
b,c){var e=v();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?e+c:e):c=e;switch(a){case 1:var d=-1;break;case 2:d=250;break;case 5:d=1073741823;break;case 4:d=1E4;break;default:d=5E3}d=c+d;a={id:Da++,callback:b,priorityLevel:a,startTime:c,expirationTime:d,sortIndex:-1};c>e?(a.sortIndex=c,O(r,a),null===p(q)&&a===p(r)&&(z?(ea(A),A=-1):z=!0,T(Q,c-e))):(a.sortIndex=d,O(q,a),u||F||(u=!0,R(S)));return a},unstable_cancelCallback:function(a){a.callback=null},unstable_wrapCallback:function(a){var b=
k;return function(){var c=k;k=b;try{return a.apply(this,arguments)}finally{k=c}}},unstable_getCurrentPriorityLevel:function(){return k},unstable_shouldYield:fa,unstable_requestPaint:function(){},unstable_continueExecution:function(){u||F||(u=!0,R(S))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return p(q)},get unstable_now(){return v},unstable_forceFrameRate:function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):
ia=0<a?Math.floor(1E3/a):5},unstable_Profiling:null}};c.Children={map:C,forEach:function(a,b,c){C(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;C(a,function(){b++});return b},toArray:function(a){return C(a,function(a){return a})||[]},only:function(a){if(!M(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};c.Component=w;c.Fragment=sa;c.Profiler=ua;c.PureComponent=K;c.StrictMode=ta;c.Suspense=ya;c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=
t;c.act=ka;c.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var e=la({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=L.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(f in b)aa.call(b,f)&&!ba.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==l?l[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){l=
Array(f);for(var g=0;g<f;g++)l[g]=arguments[g+2];e.children=l}return{$$typeof:y,type:a.type,key:d,ref:k,props:e,_owner:h}};c.createContext=function(a){a={$$typeof:wa,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:va,_context:a};return a.Consumer=a};c.createElement=Z;c.createFactory=function(a){var b=Z.bind(null,a);b.type=a;return b};c.createRef=function(){return{current:null}};c.forwardRef=function(a){return{$$typeof:xa,
render:a}};c.isValidElement=M;c.lazy=function(a){return{$$typeof:Aa,_payload:{_status:-1,_result:a},_init:ra}};c.memo=function(a,b){return{$$typeof:za,type:a,compare:void 0===b?null:b}};c.startTransition=function(a,b){b=J.transition;J.transition={};try{a()}finally{J.transition=b}};c.unstable_act=ka;c.useCallback=function(a,b){return g.current.useCallback(a,b)};c.useContext=function(a){return g.current.useContext(a)};c.useDebugValue=function(a,b){};c.useDeferredValue=function(a){return g.current.useDeferredValue(a)};
c.useEffect=function(a,b){return g.current.useEffect(a,b)};c.useId=function(){return g.current.useId()};c.useImperativeHandle=function(a,b,c){return g.current.useImperativeHandle(a,b,c)};c.useInsertionEffect=function(a,b){return g.current.useInsertionEffect(a,b)};c.useLayoutEffect=function(a,b){return g.current.useLayoutEffect(a,b)};c.useMemo=function(a,b){return g.current.useMemo(a,b)};c.useReducer=function(a,b,c){return g.current.useReducer(a,b,c)};c.useRef=function(a){return g.current.useRef(a)};
c.useState=function(a){return g.current.useState(a)};c.useSyncExternalStore=function(a,b,c){return g.current.useSyncExternalStore(a,b,c)};c.useTransition=function(){return g.current.useTransition()};c.version="18.3.1"});
})();

;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(){/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';(function(Q,zb){"object"===typeof exports&&"undefined"!==typeof module?zb(exports,require("react")):"function"===typeof define&&define.amd?define(["exports","react"],zb):(Q=Q||self,zb(Q.ReactDOM={},Q.React))})(this,function(Q,zb){function m(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function mb(a,b){Ab(a,b);Ab(a+"Capture",b)}function Ab(a,b){$b[a]=b;for(a=0;a<b.length;a++)cg.add(b[a])}function bj(a){if(Zd.call(dg,a))return!0;if(Zd.call(eg,a))return!1;if(cj.test(a))return dg[a]=!0;eg[a]=!0;return!1}function dj(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function ej(a,b,c,d){if(null===
b||"undefined"===typeof b||dj(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function Y(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}function $d(a,b,c,d){var e=R.hasOwnProperty(b)?R[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==
b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])ej(b,c,e,d)&&(c=null),d||null===e?bj(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}function ac(a){if(null===a||"object"!==typeof a)return null;a=fg&&a[fg]||a["@@iterator"];return"function"===typeof a?a:null}function bc(a,b,
c){if(void 0===ae)try{throw Error();}catch(d){ae=(b=d.stack.trim().match(/\n( *(at )?)/))&&b[1]||""}return"\n"+ae+a}function be(a,b){if(!a||ce)return"";ce=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(n){var d=n}Reflect.construct(a,[],b)}else{try{b.call()}catch(n){d=n}a.call(b.prototype)}else{try{throw Error();
}catch(n){d=n}a()}}catch(n){if(n&&d&&"string"===typeof n.stack){for(var e=n.stack.split("\n"),f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{ce=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?bc(a):
""}function fj(a){switch(a.tag){case 5:return bc(a.type);case 16:return bc("Lazy");case 13:return bc("Suspense");case 19:return bc("SuspenseList");case 0:case 2:case 15:return a=be(a.type,!1),a;case 11:return a=be(a.type.render,!1),a;case 1:return a=be(a.type,!0),a;default:return""}}function de(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Bb:return"Fragment";case Cb:return"Portal";case ee:return"Profiler";case fe:return"StrictMode";
case ge:return"Suspense";case he:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case gg:return(a.displayName||"Context")+".Consumer";case hg:return(a._context.displayName||"Context")+".Provider";case ie:var b=a.render;a=a.displayName;a||(a=b.displayName||b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case je:return b=a.displayName||null,null!==b?b:de(a.type)||"Memo";case Ta:b=a._payload;a=a._init;try{return de(a(b))}catch(c){}}return null}function gj(a){var b=a.type;
switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(b);case 8:return b===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";
case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Ua(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}function ig(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===
b)}function hj(a){var b=ig(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Pc(a){a._valueTracker||(a._valueTracker=hj(a))}function jg(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=ig(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Qc(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ke(a,b){var c=b.checked;return E({},b,{defaultChecked:void 0,defaultValue:void 0,
value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function kg(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ua(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function lg(a,b){b=b.checked;null!=b&&$d(a,"checked",b,!1)}function le(a,b){lg(a,b);var c=Ua(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=
c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?me(a,b.type,c):b.hasOwnProperty("defaultValue")&&me(a,b.type,Ua(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}function mg(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;
c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}function me(a,b,c){if("number"!==b||Qc(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Db(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=
!0)}else{c=""+Ua(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}function ne(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(m(91));return E({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ng(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(m(92));if(cc(c)){if(1<c.length)throw Error(m(93));
c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Ua(c)}}function og(a,b){var c=Ua(b.value),d=Ua(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function pg(a,b){b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function qg(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function oe(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?qg(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}function rg(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||dc.hasOwnProperty(a)&&dc[a]?(""+b).trim():b+"px"}function sg(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rg(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}function pe(a,b){if(b){if(ij[a]&&
(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(m(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(m(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(m(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(m(62));}}function qe(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;
default:return!0}}function re(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function tg(a){if(a=ec(a)){if("function"!==typeof se)throw Error(m(280));var b=a.stateNode;b&&(b=Rc(b),se(a.stateNode,a.type,b))}}function ug(a){Eb?Fb?Fb.push(a):Fb=[a]:Eb=a}function vg(){if(Eb){var a=Eb,b=Fb;Fb=Eb=null;tg(a);if(b)for(a=0;a<b.length;a++)tg(b[a])}}function wg(a,b,c){if(te)return a(b,c);te=!0;try{return xg(a,b,c)}finally{if(te=
!1,null!==Eb||null!==Fb)yg(),vg()}}function fc(a,b){var c=a.stateNode;if(null===c)return null;var d=Rc(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;
if(c&&"function"!==typeof c)throw Error(m(231,b,typeof c));return c}function jj(a,b,c,d,e,f,g,h,k){gc=!1;Sc=null;kj.apply(lj,arguments)}function mj(a,b,c,d,e,f,g,h,k){jj.apply(this,arguments);if(gc){if(gc){var n=Sc;gc=!1;Sc=null}else throw Error(m(198));Tc||(Tc=!0,ue=n)}}function nb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function zg(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,
null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Ag(a){if(nb(a)!==a)throw Error(m(188));}function nj(a){var b=a.alternate;if(!b){b=nb(a);if(null===b)throw Error(m(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Ag(e),a;if(f===d)return Ag(e),b;f=f.sibling}throw Error(m(188));}if(c.return!==d.return)c=e,d=f;
else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(m(189));}}if(c.alternate!==d)throw Error(m(190));}if(3!==c.tag)throw Error(m(188));return c.stateNode.current===c?a:b}function Bg(a){a=nj(a);return null!==a?Cg(a):null}function Cg(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=Cg(a);if(null!==b)return b;a=a.sibling}return null}
function oj(a,b){if(Ca&&"function"===typeof Ca.onCommitFiberRoot)try{Ca.onCommitFiberRoot(Uc,a,void 0,128===(a.current.flags&128))}catch(c){}}function pj(a){a>>>=0;return 0===a?32:31-(qj(a)/rj|0)|0}function hc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&
4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Vc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=hc(h):(f&=g,0!==f&&(d=hc(f)))}else g=c&~e,0!==g?d=hc(g):0!==f&&(d=hc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&
(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-ta(b),e=1<<c,d|=a[c],b&=~e;return d}function sj(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;
case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tj(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-ta(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=sj(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function ve(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Dg(){var a=Wc;Wc<<=1;0===(Wc&4194240)&&(Wc=64);return a}function we(a){for(var b=[],c=0;31>c;c++)b.push(a);
return b}function ic(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-ta(b);a[b]=c}function uj(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-ta(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}function xe(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-ta(c),e=1<<d;e&b|a[d]&
b&&(a[d]|=b);c&=~e}}function Eg(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}function Fg(a,b){switch(a){case "focusin":case "focusout":Va=null;break;case "dragenter":case "dragleave":Wa=null;break;case "mouseover":case "mouseout":Xa=null;break;case "pointerover":case "pointerout":jc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":kc.delete(b.pointerId)}}function lc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,
nativeEvent:f,targetContainers:[e]},null!==b&&(b=ec(b),null!==b&&Gg(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}function vj(a,b,c,d,e){switch(b){case "focusin":return Va=lc(Va,a,b,c,d,e),!0;case "dragenter":return Wa=lc(Wa,a,b,c,d,e),!0;case "mouseover":return Xa=lc(Xa,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;jc.set(f,lc(jc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,kc.set(f,lc(kc.get(f)||null,a,b,
c,d,e)),!0}return!1}function Hg(a){var b=ob(a.target);if(null!==b){var c=nb(b);if(null!==c)if(b=c.tag,13===b){if(b=zg(c),null!==b){a.blockedOn=b;wj(a.priority,function(){xj(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=ye(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;
var d=new c.constructor(c.type,c);ze=d;c.target.dispatchEvent(d);ze=null}else return b=ec(c),null!==b&&Gg(b),a.blockedOn=c,!1;b.shift()}return!0}function Ig(a,b,c){Xc(a)&&c.delete(b)}function yj(){Ae=!1;null!==Va&&Xc(Va)&&(Va=null);null!==Wa&&Xc(Wa)&&(Wa=null);null!==Xa&&Xc(Xa)&&(Xa=null);jc.forEach(Ig);kc.forEach(Ig)}function mc(a,b){a.blockedOn===b&&(a.blockedOn=null,Ae||(Ae=!0,Jg(Kg,yj)))}function nc(a){if(0<Yc.length){mc(Yc[0],a);for(var b=1;b<Yc.length;b++){var c=Yc[b];c.blockedOn===a&&(c.blockedOn=
null)}}null!==Va&&mc(Va,a);null!==Wa&&mc(Wa,a);null!==Xa&&mc(Xa,a);b=function(b){return mc(b,a)};jc.forEach(b);kc.forEach(b);for(b=0;b<Ya.length;b++)c=Ya[b],c.blockedOn===a&&(c.blockedOn=null);for(;0<Ya.length&&(b=Ya[0],null===b.blockedOn);)Hg(b),null===b.blockedOn&&Ya.shift()}function zj(a,b,c,d){var e=z,f=Gb.transition;Gb.transition=null;try{z=1,Be(a,b,c,d)}finally{z=e,Gb.transition=f}}function Aj(a,b,c,d){var e=z,f=Gb.transition;Gb.transition=null;try{z=4,Be(a,b,c,d)}finally{z=e,Gb.transition=
f}}function Be(a,b,c,d){if(Zc){var e=ye(a,b,c,d);if(null===e)Ce(a,b,d,$c,c),Fg(a,d);else if(vj(e,a,b,c,d))d.stopPropagation();else if(Fg(a,d),b&4&&-1<Bj.indexOf(a)){for(;null!==e;){var f=ec(e);null!==f&&Cj(f);f=ye(a,b,c,d);null===f&&Ce(a,b,d,$c,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else Ce(a,b,d,null,c)}}function ye(a,b,c,d){$c=null;a=re(d);a=ob(a);if(null!==a)if(b=nb(a),null===b)a=null;else if(c=b.tag,13===c){a=zg(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===
b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);$c=a;return null}function Lg(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;
case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;case "message":switch(Dj()){case De:return 1;case Mg:return 4;case ad:case Ej:return 16;case Ng:return 536870912;default:return 16}default:return 16}}function Og(){if(bd)return bd;
var a,b=Ee,c=b.length,d,e="value"in Za?Za.value:Za.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return bd=e.slice(a,1<d?1-d:void 0)}function cd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function dd(){return!0}function Pg(){return!1}function ka(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;
for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?dd:Pg;this.isPropagationStopped=Pg;return this}E(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=dd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():
"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=dd)},persist:function(){},isPersistent:dd});return b}function Fj(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Gj[a])?!!b[a]:!1}function Fe(a){return Fj}function Qg(a,b){switch(a){case "keyup":return-1!==Hj.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function Rg(a){a=a.detail;return"object"===typeof a&&
"data"in a?a.data:null}function Ij(a,b){switch(a){case "compositionend":return Rg(b);case "keypress":if(32!==b.which)return null;Sg=!0;return Tg;case "textInput":return a=b.data,a===Tg&&Sg?null:a;default:return null}}function Jj(a,b){if(Hb)return"compositionend"===a||!Ge&&Qg(a,b)?(a=Og(),bd=Ee=Za=null,Hb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;
case "compositionend":return Ug&&"ko"!==b.locale?null:b.data;default:return null}}function Vg(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Kj[a.type]:"textarea"===b?!0:!1}function Lj(a){if(!Ia)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Wg(a,b,c,d){ug(d);b=ed(b,"onChange");0<b.length&&(c=new He("onChange","change",null,c,d),a.push({event:c,listeners:b}))}function Mj(a){Xg(a,
0)}function fd(a){var b=Ib(a);if(jg(b))return a}function Nj(a,b){if("change"===a)return b}function Yg(){oc&&(oc.detachEvent("onpropertychange",Zg),pc=oc=null)}function Zg(a){if("value"===a.propertyName&&fd(pc)){var b=[];Wg(b,pc,a,re(a));wg(Mj,b)}}function Oj(a,b,c){"focusin"===a?(Yg(),oc=b,pc=c,oc.attachEvent("onpropertychange",Zg)):"focusout"===a&&Yg()}function Pj(a,b){if("selectionchange"===a||"keyup"===a||"keydown"===a)return fd(pc)}function Qj(a,b){if("click"===a)return fd(b)}function Rj(a,b){if("input"===
a||"change"===a)return fd(b)}function Sj(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function qc(a,b){if(ua(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!Zd.call(b,e)||!ua(a[e],b[e]))return!1}return!0}function $g(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function ah(a,b){var c=$g(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;
if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=$g(c)}}function bh(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?bh(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function ch(){for(var a=window,b=Qc();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;
b=Qc(a.document)}return b}function Ie(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}function Tj(a){var b=ch(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&bh(c.ownerDocument.documentElement,c)){if(null!==d&&Ie(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);
else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=ah(c,f);var g=ah(c,d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),
a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}function dh(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Je||null==Jb||Jb!==Qc(d)||(d=Jb,"selectionStart"in d&&Ie(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d=
{anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),rc&&qc(rc,d)||(rc=d,d=ed(Ke,"onSelect"),0<d.length&&(b=new He("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Jb)))}function gd(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}function hd(a){if(Le[a])return Le[a];if(!Kb[a])return a;var b=Kb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in eh)return Le[a]=b[c];return a}function $a(a,
b){fh.set(a,b);mb(b,[a])}function gh(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;mj(d,b,void 0,a);a.currentTarget=null}function Xg(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,n=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;gh(e,h,n);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;n=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;
gh(e,h,n);f=k}}}if(Tc)throw a=ue,Tc=!1,ue=null,a;}function B(a,b){var c=b[Me];void 0===c&&(c=b[Me]=new Set);var d=a+"__bubble";c.has(d)||(hh(b,a,2,!1),c.add(d))}function Ne(a,b,c){var d=0;b&&(d|=4);hh(c,a,d,b)}function sc(a){if(!a[id]){a[id]=!0;cg.forEach(function(b){"selectionchange"!==b&&(Uj.has(b)||Ne(b,!1,a),Ne(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[id]||(b[id]=!0,Ne("selectionchange",!1,b))}}function hh(a,b,c,d,e){switch(Lg(b)){case 1:e=zj;break;case 4:e=Aj;break;default:e=
Be}c=e.bind(null,b,c,a);e=void 0;!Oe||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}function Ce(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;
if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=ob(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}wg(function(){var d=f,e=re(c),g=[];a:{var h=fh.get(a);if(void 0!==h){var k=He,m=a;switch(a){case "keypress":if(0===cd(c))break a;case "keydown":case "keyup":k=Vj;break;case "focusin":m="focus";k=Pe;break;case "focusout":m="blur";k=Pe;break;case "beforeblur":case "afterblur":k=Pe;break;
case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=ih;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=Wj;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Xj;break;case jh:case kh:case lh:k=Yj;break;case mh:k=Zj;break;case "scroll":k=ak;break;case "wheel":k=bk;break;case "copy":case "cut":case "paste":k=
ck;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=nh}var l=0!==(b&4),p=!l&&"scroll"===a,w=l?null!==h?h+"Capture":null:h;l=[];for(var A=d,t;null!==A;){t=A;var M=t.stateNode;5===t.tag&&null!==M&&(t=M,null!==w&&(M=fc(A,w),null!=M&&l.push(tc(A,M,t))));if(p)break;A=A.return}0<l.length&&(h=new k(h,m,null,c,e),g.push({event:h,listeners:l}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===
a;k="mouseout"===a||"pointerout"===a;if(h&&c!==ze&&(m=c.relatedTarget||c.fromElement)&&(ob(m)||m[Ja]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(m=c.relatedTarget||c.toElement,k=d,m=m?ob(m):null,null!==m&&(p=nb(m),m!==p||5!==m.tag&&6!==m.tag))m=null}else k=null,m=d;if(k!==m){l=ih;M="onMouseLeave";w="onMouseEnter";A="mouse";if("pointerout"===a||"pointerover"===a)l=nh,M="onPointerLeave",w="onPointerEnter",A="pointer";p=null==k?h:Ib(k);t=null==
m?h:Ib(m);h=new l(M,A+"leave",k,c,e);h.target=p;h.relatedTarget=t;M=null;ob(e)===d&&(l=new l(w,A+"enter",m,c,e),l.target=t,l.relatedTarget=p,M=l);p=M;if(k&&m)b:{l=k;w=m;A=0;for(t=l;t;t=Lb(t))A++;t=0;for(M=w;M;M=Lb(M))t++;for(;0<A-t;)l=Lb(l),A--;for(;0<t-A;)w=Lb(w),t--;for(;A--;){if(l===w||null!==w&&l===w.alternate)break b;l=Lb(l);w=Lb(w)}l=null}else l=null;null!==k&&oh(g,h,k,l,!1);null!==m&&null!==p&&oh(g,p,m,l,!0)}}}a:{h=d?Ib(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===
k&&"file"===h.type)var ma=Nj;else if(Vg(h))if(ph)ma=Rj;else{ma=Pj;var va=Oj}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(ma=Qj);if(ma&&(ma=ma(a,d))){Wg(g,ma,c,e);break a}va&&va(a,h,d);"focusout"===a&&(va=h._wrapperState)&&va.controlled&&"number"===h.type&&me(h,"number",h.value)}va=d?Ib(d):window;switch(a){case "focusin":if(Vg(va)||"true"===va.contentEditable)Jb=va,Ke=d,rc=null;break;case "focusout":rc=Ke=Jb=null;break;case "mousedown":Je=!0;break;case "contextmenu":case "mouseup":case "dragend":Je=
!1;dh(g,c,e);break;case "selectionchange":if(dk)break;case "keydown":case "keyup":dh(g,c,e)}var ab;if(Ge)b:{switch(a){case "compositionstart":var da="onCompositionStart";break b;case "compositionend":da="onCompositionEnd";break b;case "compositionupdate":da="onCompositionUpdate";break b}da=void 0}else Hb?Qg(a,c)&&(da="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(da="onCompositionStart");da&&(Ug&&"ko"!==c.locale&&(Hb||"onCompositionStart"!==da?"onCompositionEnd"===da&&Hb&&(ab=Og()):(Za=e,Ee=
"value"in Za?Za.value:Za.textContent,Hb=!0)),va=ed(d,da),0<va.length&&(da=new qh(da,a,null,c,e),g.push({event:da,listeners:va}),ab?da.data=ab:(ab=Rg(c),null!==ab&&(da.data=ab))));if(ab=ek?Ij(a,c):Jj(a,c))d=ed(d,"onBeforeInput"),0<d.length&&(e=new fk("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=ab)}Xg(g,b)})}function tc(a,b,c){return{instance:a,listener:b,currentTarget:c}}function ed(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==
f&&(e=f,f=fc(a,c),null!=f&&d.unshift(tc(a,f,e)),f=fc(a,b),null!=f&&d.push(tc(a,f,e)));a=a.return}return d}function Lb(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}function oh(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,n=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==n&&(h=n,e?(k=fc(c,f),null!=k&&g.unshift(tc(c,k,h))):e||(k=fc(c,f),null!=k&&g.push(tc(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function rh(a){return("string"===
typeof a?a:""+a).replace(gk,"\n").replace(hk,"")}function jd(a,b,c,d){b=rh(b);if(rh(a)!==b&&c)throw Error(m(425));}function kd(){}function Qe(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function ik(a){setTimeout(function(){throw a;})}function Re(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=
e.data,"/$"===c){if(0===d){a.removeChild(e);nc(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);nc(b)}function Ka(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}function sh(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}function ob(a){var b=a[Da];
if(b)return b;for(var c=a.parentNode;c;){if(b=c[Ja]||c[Da]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sh(a);null!==a;){if(c=a[Da])return c;a=sh(a)}return b}a=c;c=a.parentNode}return null}function ec(a){a=a[Da]||a[Ja];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Ib(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(m(33));}function Rc(a){return a[uc]||null}function bb(a){return{current:a}}function v(a,b){0>Mb||(a.current=Se[Mb],Se[Mb]=null,Mb--)}
function y(a,b,c){Mb++;Se[Mb]=a.current;a.current=b}function Nb(a,b){var c=a.type.contextTypes;if(!c)return cb;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function ea(a){a=a.childContextTypes;return null!==a&&void 0!==a}function th(a,b,c){if(J.current!==cb)throw Error(m(168));
y(J,b);y(S,c)}function uh(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(m(108,gj(a)||"Unknown",e));return E({},c,d)}function ld(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||cb;pb=J.current;y(J,a);y(S,S.current);return!0}function vh(a,b,c){var d=a.stateNode;if(!d)throw Error(m(169));c?(a=uh(a,b,pb),d.__reactInternalMemoizedMergedChildContext=a,v(S),v(J),y(J,a)):v(S);
y(S,c)}function wh(a){null===La?La=[a]:La.push(a)}function jk(a){md=!0;wh(a)}function db(){if(!Te&&null!==La){Te=!0;var a=0,b=z;try{var c=La;for(z=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}La=null;md=!1}catch(e){throw null!==La&&(La=La.slice(a+1)),xh(De,db),e;}finally{z=b,Te=!1}}return null}function qb(a,b){Ob[Pb++]=nd;Ob[Pb++]=od;od=a;nd=b}function yh(a,b,c){na[oa++]=Ma;na[oa++]=Na;na[oa++]=rb;rb=a;var d=Ma;a=Na;var e=32-ta(d)-1;d&=~(1<<e);c+=1;var f=32-ta(b)+e;if(30<f){var g=e-e%5;
f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;Ma=1<<32-ta(b)+e|c<<e|d;Na=f+a}else Ma=1<<f|c<<e|d,Na=a}function Ue(a){null!==a.return&&(qb(a,1),yh(a,1,0))}function Ve(a){for(;a===od;)od=Ob[--Pb],Ob[Pb]=null,nd=Ob[--Pb],Ob[Pb]=null;for(;a===rb;)rb=na[--oa],na[oa]=null,Na=na[--oa],na[oa]=null,Ma=na[--oa],na[oa]=null}function zh(a,b){var c=pa(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}function Ah(a,b){switch(a.tag){case 5:var c=
a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,la=a,fa=Ka(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,la=a,fa=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==rb?{id:Ma,overflow:Na}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=pa(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,la=a,fa=null,!0):!1;default:return!1}}function We(a){return 0!==
(a.mode&1)&&0===(a.flags&128)}function Xe(a){if(D){var b=fa;if(b){var c=b;if(!Ah(a,b)){if(We(a))throw Error(m(418));b=Ka(c.nextSibling);var d=la;b&&Ah(a,b)?zh(d,c):(a.flags=a.flags&-4097|2,D=!1,la=a)}}else{if(We(a))throw Error(m(418));a.flags=a.flags&-4097|2;D=!1;la=a}}}function Bh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;la=a}function pd(a){if(a!==la)return!1;if(!D)return Bh(a),D=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Qe(a.type,
a.memoizedProps));if(b&&(b=fa)){if(We(a)){for(a=fa;a;)a=Ka(a.nextSibling);throw Error(m(418));}for(;b;)zh(a,b),b=Ka(b.nextSibling)}Bh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(m(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){fa=Ka(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}fa=null}}else fa=la?Ka(a.stateNode.nextSibling):null;return!0}function Qb(){fa=la=null;D=!1}function Ye(a){null===
wa?wa=[a]:wa.push(a)}function vc(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(m(309));var d=c.stateNode}if(!d)throw Error(m(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(m(284));if(!c._owner)throw Error(m(290,a));}return a}function qd(a,b){a=
Object.prototype.toString.call(b);throw Error(m(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ch(a){var b=a._init;return b(a._payload)}function Dh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=eb(a,b);a.index=
0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ze(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===Bb)return l(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ta&&
Ch(f)===b.type))return d=e(b,c.props),d.ref=vc(a,b,c),d.return=a,d;d=rd(c.type,c.key,c.props,null,a.mode,d);d.ref=vc(a,b,c);d.return=a;return d}function n(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=$e(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function l(a,b,c,d,f){if(null===b||7!==b.tag)return b=sb(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function u(a,b,c){if("string"===
typeof b&&""!==b||"number"===typeof b)return b=Ze(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sd:return c=rd(b.type,b.key,b.props,null,a.mode,c),c.ref=vc(a,null,b),c.return=a,c;case Cb:return b=$e(b,a.mode,c),b.return=a,b;case Ta:var d=b._init;return u(a,d(b._payload),c)}if(cc(b)||ac(b))return b=sb(b,a.mode,c,null),b.return=a,b;qd(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==
e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sd:return c.key===e?k(a,b,c,d):null;case Cb:return c.key===e?n(a,b,c,d):null;case Ta:return e=c._init,r(a,b,e(c._payload),d)}if(cc(c)||ac(c))return null!==e?null:l(a,b,c,d,null);qd(a,c)}return null}function p(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sd:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,
e);case Cb:return a=a.get(null===d.key?c:d.key)||null,n(b,a,d,e);case Ta:var f=d._init;return p(a,b,c,f(d._payload),e)}if(cc(d)||ac(d))return a=a.get(c)||null,l(b,a,d,e,null);qd(b,d)}return null}function x(e,g,h,k){for(var n=null,m=null,l=g,t=g=0,q=null;null!==l&&t<h.length;t++){l.index>t?(q=l,l=null):q=l.sibling;var A=r(e,l,h[t],k);if(null===A){null===l&&(l=q);break}a&&l&&null===A.alternate&&b(e,l);g=f(A,g,t);null===m?n=A:m.sibling=A;m=A;l=q}if(t===h.length)return c(e,l),D&&qb(e,t),n;if(null===l){for(;t<
h.length;t++)l=u(e,h[t],k),null!==l&&(g=f(l,g,t),null===m?n=l:m.sibling=l,m=l);D&&qb(e,t);return n}for(l=d(e,l);t<h.length;t++)q=p(l,e,t,h[t],k),null!==q&&(a&&null!==q.alternate&&l.delete(null===q.key?t:q.key),g=f(q,g,t),null===m?n=q:m.sibling=q,m=q);a&&l.forEach(function(a){return b(e,a)});D&&qb(e,t);return n}function I(e,g,h,k){var n=ac(h);if("function"!==typeof n)throw Error(m(150));h=n.call(h);if(null==h)throw Error(m(151));for(var l=n=null,q=g,t=g=0,A=null,w=h.next();null!==q&&!w.done;t++,w=
h.next()){q.index>t?(A=q,q=null):A=q.sibling;var x=r(e,q,w.value,k);if(null===x){null===q&&(q=A);break}a&&q&&null===x.alternate&&b(e,q);g=f(x,g,t);null===l?n=x:l.sibling=x;l=x;q=A}if(w.done)return c(e,q),D&&qb(e,t),n;if(null===q){for(;!w.done;t++,w=h.next())w=u(e,w.value,k),null!==w&&(g=f(w,g,t),null===l?n=w:l.sibling=w,l=w);D&&qb(e,t);return n}for(q=d(e,q);!w.done;t++,w=h.next())w=p(q,e,t,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?t:w.key),g=f(w,g,t),null===l?n=w:l.sibling=
w,l=w);a&&q.forEach(function(a){return b(e,a)});D&&qb(e,t);return n}function v(a,d,f,h){"object"===typeof f&&null!==f&&f.type===Bb&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case sd:a:{for(var k=f.key,n=d;null!==n;){if(n.key===k){k=f.type;if(k===Bb){if(7===n.tag){c(a,n.sibling);d=e(n,f.props.children);d.return=a;a=d;break a}}else if(n.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ta&&Ch(k)===n.type){c(a,n.sibling);d=e(n,f.props);d.ref=vc(a,
n,f);d.return=a;a=d;break a}c(a,n);break}else b(a,n);n=n.sibling}f.type===Bb?(d=sb(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=rd(f.type,f.key,f.props,null,a.mode,h),h.ref=vc(a,d,f),h.return=a,a=h)}return g(a);case Cb:a:{for(n=f.key;null!==d;){if(d.key===n)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=$e(f,a.mode,h);d.return=a;
a=d}return g(a);case Ta:return n=f._init,v(a,d,n(f._payload),h)}if(cc(f))return x(a,d,f,h);if(ac(f))return I(a,d,f,h);qd(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ze(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return v}function af(){bf=Rb=td=null}function cf(a,b){b=ud.current;v(ud);a._currentValue=b}function df(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=
b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Sb(a,b){td=a;bf=Rb=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ha=!0),a.firstContext=null)}function qa(a){var b=a._currentValue;if(bf!==a)if(a={context:a,memoizedValue:b,next:null},null===Rb){if(null===td)throw Error(m(308));Rb=a;td.dependencies={lanes:0,firstContext:a}}else Rb=Rb.next=a;return b}function ef(a){null===tb?tb=[a]:tb.push(a)}function Eh(a,b,c,d){var e=b.interleaved;
null===e?(c.next=c,ef(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Oa(a,d)}function Oa(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}function ff(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue=
{baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function Pa(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function fb(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(p&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return kk(a,c)}e=d.interleaved;null===e?(b.next=b,ef(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Oa(a,c)}function vd(a,b,c){b=
b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;xe(a,c)}}function Gh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,
shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=b;c.lastBaseUpdate=b}function wd(a,b,c,d){var e=a.updateQueue;gb=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,n=k.next;k.next=null;null===g?f=n:g.next=n;g=k;var l=a.alternate;null!==l&&(l=l.updateQueue,h=l.lastBaseUpdate,h!==g&&(null===h?l.firstBaseUpdate=n:h.next=n,l.lastBaseUpdate=k))}if(null!==f){var m=e.baseState;g=0;l=
n=k=null;h=f;do{var r=h.lane,p=h.eventTime;if((d&r)===r){null!==l&&(l=l.next={eventTime:p,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});a:{var x=a,v=h;r=b;p=c;switch(v.tag){case 1:x=v.payload;if("function"===typeof x){m=x.call(p,m,r);break a}m=x;break a;case 3:x.flags=x.flags&-65537|128;case 0:x=v.payload;r="function"===typeof x?x.call(p,m,r):x;if(null===r||void 0===r)break a;m=E({},m,r);break a;case 2:gb=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=
[h]:r.push(h))}else p={eventTime:p,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===l?(n=l=p,k=m):l=l.next=p,g|=r;h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===l&&(k=m);e.baseState=k;e.firstBaseUpdate=n;e.lastBaseUpdate=l;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);ra|=g;a.lanes=g;a.memoizedState=m}}function Hh(a,
b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(m(191,e));e.call(d)}}}function ub(a){if(a===wc)throw Error(m(174));return a}function gf(a,b){y(xc,b);y(yc,a);y(Ea,wc);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:oe(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=oe(b,a)}v(Ea);y(Ea,b)}function Tb(a){v(Ea);v(yc);v(xc)}function Ih(a){ub(xc.current);
var b=ub(Ea.current);var c=oe(b,a.type);b!==c&&(y(yc,a),y(Ea,c))}function hf(a){yc.current===a&&(v(Ea),v(yc))}function xd(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=
b.return;b=b.sibling}return null}function jf(){for(var a=0;a<kf.length;a++)kf[a]._workInProgressVersionPrimary=null;kf.length=0}function V(){throw Error(m(321));}function lf(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!ua(a[c],b[c]))return!1;return!0}function mf(a,b,c,d,e,f){vb=f;C=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;yd.current=null===a||null===a.memoizedState?lk:mk;a=c(d,e);if(zc){f=0;do{zc=!1;Ac=0;if(25<=f)throw Error(m(301));f+=1;N=K=null;b.updateQueue=null;
yd.current=nk;a=c(d,e)}while(zc)}yd.current=zd;b=null!==K&&null!==K.next;vb=0;N=K=C=null;Ad=!1;if(b)throw Error(m(300));return a}function nf(){var a=0!==Ac;Ac=0;return a}function Fa(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===N?C.memoizedState=N=a:N=N.next=a;return N}function sa(){if(null===K){var a=C.alternate;a=null!==a?a.memoizedState:null}else a=K.next;var b=null===N?C.memoizedState:N.next;if(null!==b)N=b,K=a;else{if(null===a)throw Error(m(310));K=a;
a={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null};null===N?C.memoizedState=N=a:N=N.next=a}return N}function Bc(a,b){return"function"===typeof b?b(a):b}function of(a,b,c){b=sa();c=b.queue;if(null===c)throw Error(m(311));c.lastRenderedReducer=a;var d=K,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,n=f;do{var l=n.lane;if((vb&
l)===l)null!==k&&(k=k.next={lane:0,action:n.action,hasEagerState:n.hasEagerState,eagerState:n.eagerState,next:null}),d=n.hasEagerState?n.eagerState:a(d,n.action);else{var u={lane:l,action:n.action,hasEagerState:n.hasEagerState,eagerState:n.eagerState,next:null};null===k?(h=k=u,g=d):k=k.next=u;C.lanes|=l;ra|=l}n=n.next}while(null!==n&&n!==f);null===k?g=d:k.next=h;ua(d,b.memoizedState)||(ha=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=
e.lane,C.lanes|=f,ra|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}function pf(a,b,c){b=sa();c=b.queue;if(null===c)throw Error(m(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);ua(f,b.memoizedState)||(ha=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Jh(a,b,c){}function Kh(a,b,c){c=C;var d=sa(),
e=b(),f=!ua(d.memoizedState,e);f&&(d.memoizedState=e,ha=!0);d=d.queue;qf(Lh.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==N&&N.memoizedState.tag&1){c.flags|=2048;Cc(9,Mh.bind(null,c,d,e,b),void 0,null);if(null===O)throw Error(m(349));0!==(vb&30)||Nh(c,b,e)}return e}function Nh(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=C.updateQueue;null===b?(b={lastEffect:null,stores:null},C.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}function Mh(a,b,c,d){b.value=c;b.getSnapshot=
d;Oh(b)&&Ph(a)}function Lh(a,b,c){return c(function(){Oh(b)&&Ph(a)})}function Oh(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!ua(a,c)}catch(d){return!0}}function Ph(a){var b=Oa(a,1);null!==b&&xa(b,a,1,-1)}function Qh(a){var b=Fa();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bc,lastRenderedState:a};b.queue=a;a=a.dispatch=ok.bind(null,C,a);return[b.memoizedState,a]}function Cc(a,b,c,d){a={tag:a,create:b,
destroy:c,deps:d,next:null};b=C.updateQueue;null===b?(b={lastEffect:null,stores:null},C.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Rh(a){return sa().memoizedState}function Bd(a,b,c,d){var e=Fa();C.flags|=a;e.memoizedState=Cc(1|b,c,void 0,void 0===d?null:d)}function Cd(a,b,c,d){var e=sa();d=void 0===d?null:d;var f=void 0;if(null!==K){var g=K.memoizedState;f=g.destroy;if(null!==d&&lf(d,g.deps)){e.memoizedState=
Cc(b,c,f,d);return}}C.flags|=a;e.memoizedState=Cc(1|b,c,f,d)}function Sh(a,b){return Bd(8390656,8,a,b)}function qf(a,b){return Cd(2048,8,a,b)}function Th(a,b){return Cd(4,2,a,b)}function Uh(a,b){return Cd(4,4,a,b)}function Vh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Wh(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Cd(4,4,Vh.bind(null,b,a),c)}function rf(a,b){}function Xh(a,b){var c=
sa();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&lf(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function Yh(a,b){var c=sa();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&lf(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Zh(a,b,c){if(0===(vb&21))return a.baseState&&(a.baseState=!1,ha=!0),a.memoizedState=c;ua(c,b)||(c=Dg(),C.lanes|=c,ra|=c,a.baseState=!0);return b}function pk(a,b,c){c=z;z=0!==c&&4>c?c:4;a(!0);var d=sf.transition;sf.transition=
{};try{a(!1),b()}finally{z=c,sf.transition=d}}function $h(){return sa().memoizedState}function qk(a,b,c){var d=hb(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(ai(a))bi(b,c);else if(c=Eh(a,b,c,d),null!==c){var e=Z();xa(c,a,d,e);ci(c,b,d)}}function ok(a,b,c){var d=hb(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(ai(a))bi(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,
h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(ua(h,g)){var k=b.interleaved;null===k?(e.next=e,ef(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(n){}finally{}c=Eh(a,b,e,d);null!==c&&(e=Z(),xa(c,a,d,e),ci(c,b,d))}}function ai(a){var b=a.alternate;return a===C||null!==b&&b===C}function bi(a,b){zc=Ad=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function ci(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;xe(a,c)}}function ya(a,b){if(a&&
a.defaultProps){b=E({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function tf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:E({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}function di(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!qc(c,d)||!qc(e,f):!0}function ei(a,b,c){var d=!1,e=cb;var f=b.contextType;"object"===typeof f&&
null!==f?f=qa(f):(e=ea(b)?pb:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Nb(a,e):cb);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Dd;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}function fi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&
b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Dd.enqueueReplaceState(b,b.state,null)}function uf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};ff(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=qa(f):(f=ea(b)?pb:J.current,e.context=Nb(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(tf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==
typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Dd.enqueueReplaceState(e,e.state,null),wd(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ub(a,b){try{var c="",d=b;do c+=fj(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+
"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function vf(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function wf(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}function gi(a,b,c){c=Pa(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Ed||(Ed=!0,xf=d);wf(a,b)};return c}function hi(a,b,c){c=Pa(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};
c.callback=function(){wf(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){wf(a,b);"function"!==typeof d&&(null===ib?ib=new Set([this]):ib.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}function ii(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new rk;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=sk.bind(null,a,b,c),b.then(a,a))}function ji(a){do{var b;
if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}function ki(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=Pa(-1,1),b.tag=2,fb(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}function aa(a,b,c,d){b.child=null===a?li(b,null,c,d):Vb(b,a.child,c,d)}function mi(a,b,c,d,e){c=c.render;var f=b.ref;Sb(b,e);d=mf(a,b,c,d,f,
e);c=nf();if(null!==a&&!ha)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Qa(a,b,e);D&&c&&Ue(b);b.flags|=1;aa(a,b,d,e);return b.child}function ni(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!yf(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,oi(a,b,f,d,e);a=rd(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:qc;if(c(g,d)&&a.ref===
b.ref)return Qa(a,b,e)}b.flags|=1;a=eb(f,d);a.ref=b.ref;a.return=b;return b.child=a}function oi(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(qc(f,d)&&a.ref===b.ref)if(ha=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(ha=!0);else return b.lanes=a.lanes,Qa(a,b,e)}return zf(a,b,c,d,e)}function pi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},y(Ga,ba),ba|=c;
else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,y(Ga,ba),ba|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;y(Ga,ba);ba|=d}else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,y(Ga,ba),ba|=d;aa(a,b,e,c);return b.child}function qi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function zf(a,
b,c,d,e){var f=ea(c)?pb:J.current;f=Nb(b,f);Sb(b,e);c=mf(a,b,c,d,f,e);d=nf();if(null!==a&&!ha)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Qa(a,b,e);D&&d&&Ue(b);b.flags|=1;aa(a,b,c,e);return b.child}function ri(a,b,c,d,e){if(ea(c)){var f=!0;ld(b)}else f=!1;Sb(b,e);if(null===b.stateNode)Fd(a,b),ei(b,c,d),uf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,n=c.contextType;"object"===typeof n&&null!==n?n=qa(n):(n=ea(c)?pb:J.current,n=Nb(b,
n));var l=c.getDerivedStateFromProps,m="function"===typeof l||"function"===typeof g.getSnapshotBeforeUpdate;m||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==n)&&fi(b,g,d,n);gb=!1;var r=b.memoizedState;g.state=r;wd(b,d,g,e);k=b.memoizedState;h!==d||r!==k||S.current||gb?("function"===typeof l&&(tf(b,c,l,d),k=b.memoizedState),(h=gb||di(b,c,h,d,r,k,n))?(m||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||
("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=n,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;Fh(a,b);h=b.memoizedProps;n=b.type===b.elementType?h:ya(b.type,h);g.props=
n;m=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=qa(k):(k=ea(c)?pb:J.current,k=Nb(b,k));var p=c.getDerivedStateFromProps;(l="function"===typeof p||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==m||r!==k)&&fi(b,g,d,k);gb=!1;r=b.memoizedState;g.state=r;wd(b,d,g,e);var x=b.memoizedState;h!==m||r!==x||S.current||gb?("function"===typeof p&&(tf(b,c,p,d),x=b.memoizedState),
(n=gb||di(b,c,n,d,r,x,k)||!1)?(l||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=
4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=n):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return Af(a,b,c,d,f,e)}function Af(a,b,c,d,e,f){qi(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&vh(b,c,!1),
Qa(a,b,f);d=b.stateNode;tk.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Vb(b,a.child,null,f),b.child=Vb(b,null,h,f)):aa(a,b,h,f);b.memoizedState=d.state;e&&vh(b,c,!0);return b.child}function si(a){var b=a.stateNode;b.pendingContext?th(a,b.pendingContext,b.pendingContext!==b.context):b.context&&th(a,b.context,!1);gf(a,b.containerInfo)}function ti(a,b,c,d,e){Qb();Ye(e);b.flags|=256;aa(a,b,c,d);return b.child}function Bf(a){return{baseLanes:a,
cachePool:null,transitions:null}}function ui(a,b,c){var d=b.pendingProps,e=F.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;y(F,e&1);if(null===a){Xe(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==
f?(f.childLanes=0,f.pendingProps=g):f=Gd(g,d,0,null),a=sb(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=Bf(c),b.memoizedState=Cf,a):Df(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return uk(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=eb(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=eb(h,f):(f=
sb(f,g,c,null),f.flags|=2);f.return=b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?Bf(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=Cf;return d}f=a.child;a=f.sibling;d=eb(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function Df(a,b,c){b=Gd({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function Hd(a,b,c,d){null!==d&&Ye(d);Vb(b,a.child,null,c);a=Df(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}function uk(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=vf(Error(m(422))),Hd(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=Gd({mode:"visible",children:d.children},e,0,null);f=sb(f,e,g,null);f.flags|=2;d.return=
b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Vb(b,a.child,null,g);b.child.memoizedState=Bf(g);b.memoizedState=Cf;return f}if(0===(b.mode&1))return Hd(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;if(d)var h=d.dgst;d=h;f=Error(m(419));d=vf(f,d,void 0);return Hd(a,b,g,d)}h=0!==(g&a.childLanes);if(ha||h){d=O;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=
32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;0!==e&&e!==f.retryLane&&(f.retryLane=e,Oa(a,e),xa(d,a,e,-1))}Ef();d=vf(Error(m(421)));return Hd(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vk.bind(null,a),e._reactRetry=b,null;a=f.treeContext;fa=Ka(e.nextSibling);la=b;D=!0;wa=null;null!==a&&(na[oa++]=Ma,na[oa++]=Na,na[oa++]=rb,Ma=a.id,Na=a.overflow,rb=b);b=Df(b,d.children);b.flags|=4096;return b}function vi(a,b,c){a.lanes|=b;var d=a.alternate;
null!==d&&(d.lanes|=b);df(a.return,b,c)}function Ff(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}function wi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;aa(a,b,d.children,c);d=F.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&
vi(a,c,b);else if(19===a.tag)vi(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}y(F,d);if(0===(b.mode&1))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===xd(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ff(b,!1,e,c,f);break;case "backwards":c=
null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===xd(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}Ff(b,!0,c,null,f);break;case "together":Ff(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function Fd(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Qa(a,b,c){null!==a&&(b.dependencies=a.dependencies);ra|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(m(153));if(null!==
b.child){a=b.child;c=eb(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=eb(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}function wk(a,b,c){switch(b.tag){case 3:si(b);Qb();break;case 5:Ih(b);break;case 1:ea(b.type)&&ld(b);break;case 4:gf(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;y(ud,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return y(F,F.current&
1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return ui(a,b,c);y(F,F.current&1);a=Qa(a,b,c);return null!==a?a.sibling:null}y(F,F.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&128)){if(d)return wi(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);y(F,F.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,pi(a,b,c)}return Qa(a,b,c)}function Dc(a,b){if(!D)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==
b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}function W(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,
d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}function xk(a,b,c){var d=b.pendingProps;Ve(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(b),null;case 1:return ea(b.type)&&(v(S),v(J)),W(b),null;case 3:d=b.stateNode;Tb();v(S);v(J);jf();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)pd(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&
256)||(b.flags|=1024,null!==wa&&(Gf(wa),wa=null));xi(a,b);W(b);return null;case 5:hf(b);var e=ub(xc.current);c=b.type;if(null!==a&&null!=b.stateNode)yk(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(m(166));W(b);return null}a=ub(Ea.current);if(pd(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Da]=b;d[uc]=f;a=0!==(b.mode&1);switch(c){case "dialog":B("cancel",d);B("close",d);break;case "iframe":case "object":case "embed":B("load",d);break;
case "video":case "audio":for(e=0;e<Ec.length;e++)B(Ec[e],d);break;case "source":B("error",d);break;case "img":case "image":case "link":B("error",d);B("load",d);break;case "details":B("toggle",d);break;case "input":kg(d,f);B("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};B("invalid",d);break;case "textarea":ng(d,f),B("invalid",d)}pe(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&
jd(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&jd(d.textContent,h,a),e=["children",""+h]):$b.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&B("scroll",d)}switch(c){case "input":Pc(d);mg(d,f,!0);break;case "textarea":Pc(d);pg(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=kd)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===
a&&(a=qg(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Da]=b;a[uc]=d;zk(a,b,!1,!1);b.stateNode=a;a:{g=qe(c,d);switch(c){case "dialog":B("cancel",a);B("close",a);e=d;break;case "iframe":case "object":case "embed":B("load",a);e=d;break;
case "video":case "audio":for(e=0;e<Ec.length;e++)B(Ec[e],a);e=d;break;case "source":B("error",a);e=d;break;case "img":case "image":case "link":B("error",a);B("load",a);e=d;break;case "details":B("toggle",a);e=d;break;case "input":kg(a,d);e=ke(a,d);B("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=E({},d,{value:void 0});B("invalid",a);break;case "textarea":ng(a,d);e=ne(a,d);B("invalid",a);break;default:e=d}pe(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=
h[f];"style"===f?sg(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&yi(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&Fc(a,k):"number"===typeof k&&Fc(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&($b.hasOwnProperty(f)?null!=k&&"onScroll"===f&&B("scroll",a):null!=k&&$d(a,f,k,g))}switch(c){case "input":Pc(a);mg(a,d,!1);break;case "textarea":Pc(a);pg(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Ua(d.value));
break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?Db(a,!!d.multiple,f,!1):null!=d.defaultValue&&Db(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=kd)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}W(b);return null;case 6:if(a&&null!=b.stateNode)Ak(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===
b.stateNode)throw Error(m(166));c=ub(xc.current);ub(Ea.current);if(pd(b)){d=b.stateNode;c=b.memoizedProps;d[Da]=b;if(f=d.nodeValue!==c)if(a=la,null!==a)switch(a.tag){case 3:jd(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&jd(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Da]=b,b.stateNode=d}W(b);return null;case 13:v(F);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(D&&
null!==fa&&0!==(b.mode&1)&&0===(b.flags&128)){for(f=fa;f;)f=Ka(f.nextSibling);Qb();b.flags|=98560;f=!1}else if(f=pd(b),null!==d&&null!==d.dehydrated){if(null===a){if(!f)throw Error(m(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(m(317));f[Da]=b}else Qb(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;W(b);f=!1}else null!==wa&&(Gf(wa),wa=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&
d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(F.current&1)?0===L&&(L=3):Ef()));null!==b.updateQueue&&(b.flags|=4);W(b);return null;case 4:return Tb(),xi(a,b),null===a&&sc(b.stateNode.containerInfo),W(b),null;case 10:return cf(b.type._context),W(b),null;case 17:return ea(b.type)&&(v(S),v(J)),W(b),null;case 19:v(F);f=b.memoizedState;if(null===f)return W(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dc(f,!1);else{if(0!==L||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=
xd(a);if(null!==g){b.flags|=128;Dc(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,
f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;y(F,F.current&1|2);return b.child}a=a.sibling}null!==f.tail&&P()>Hf&&(b.flags|=128,d=!0,Dc(f,!1),b.lanes=4194304)}else{if(!d)if(a=xd(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dc(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!D)return W(b),null}else 2*P()-f.renderingStartTime>Hf&&1073741824!==c&&(b.flags|=
128,d=!0,Dc(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=b,f.tail=b.sibling,f.renderingStartTime=P(),b.sibling=null,c=F.current,y(F,d?c&1|2:c&1),b;W(b);return null;case 22:case 23:return ba=Ga.current,v(Ga),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(ba&1073741824)&&(W(b),b.subtreeFlags&6&&(b.flags|=8192)):W(b),null;case 24:return null;
case 25:return null}throw Error(m(156,b.tag));}function Bk(a,b,c){Ve(b);switch(b.tag){case 1:return ea(b.type)&&(v(S),v(J)),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Tb(),v(S),v(J),jf(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return hf(b),null;case 13:v(F);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(m(340));Qb()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return v(F),null;case 4:return Tb(),
null;case 10:return cf(b.type._context),null;case 22:case 23:return ba=Ga.current,v(Ga),null;case 24:return null;default:return null}}function Wb(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){G(a,b,d)}else c.current=null}function If(a,b,c){try{c()}catch(d){G(a,b,d)}}function Ck(a,b){Jf=Zc;a=ch();if(Ie(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();
if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(M){c=null;break a}var g=0,h=-1,k=-1,n=0,q=0,u=a,r=null;b:for(;;){for(var p;;){u!==c||0!==e&&3!==u.nodeType||(h=g+e);u!==f||0!==d&&3!==u.nodeType||(k=g+d);3===u.nodeType&&(g+=u.nodeValue.length);if(null===(p=u.firstChild))break;r=u;u=p}for(;;){if(u===a)break b;r===c&&++n===e&&(h=g);r===f&&++q===d&&(k=g);if(null!==(p=u.nextSibling))break;u=r;r=u.parentNode}u=p}c=-1===h||-1===k?null:
{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Kf={focusedElem:a,selectionRange:c};Zc=!1;for(l=b;null!==l;)if(b=l,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,l=a;else for(;null!==l;){b=l;try{var x=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;case 1:if(null!==x){var v=x.memoizedProps,z=x.memoizedState,w=b.stateNode,A=w.getSnapshotBeforeUpdate(b.elementType===b.type?v:ya(b.type,v),z);w.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var t=
b.stateNode.containerInfo;1===t.nodeType?t.textContent="":9===t.nodeType&&t.documentElement&&t.removeChild(t.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163));}}catch(M){G(b,b.return,M)}a=b.sibling;if(null!==a){a.return=b.return;l=a;break}l=b.return}x=zi;zi=!1;return x}function Gc(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&If(b,c,f)}e=e.next}while(e!==d)}}
function Id(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Lf(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}function Ai(a){var b=a.alternate;null!==b&&(a.alternate=null,Ai(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Da],delete b[uc],delete b[Me],delete b[Dk],
delete b[Ek]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Bi(a){return 5===a.tag||3===a.tag||4===a.tag}function Ci(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Bi(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&
2))return a.stateNode}}function Mf(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=kd));else if(4!==d&&(a=a.child,null!==a))for(Mf(a,b,c),a=a.sibling;null!==a;)Mf(a,b,c),a=a.sibling}function Nf(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);
else if(4!==d&&(a=a.child,null!==a))for(Nf(a,b,c),a=a.sibling;null!==a;)Nf(a,b,c),a=a.sibling}function jb(a,b,c){for(c=c.child;null!==c;)Di(a,b,c),c=c.sibling}function Di(a,b,c){if(Ca&&"function"===typeof Ca.onCommitFiberUnmount)try{Ca.onCommitFiberUnmount(Uc,c)}catch(h){}switch(c.tag){case 5:X||Wb(c,b);case 6:var d=T,e=za;T=null;jb(a,b,c);T=d;za=e;null!==T&&(za?(a=T,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):T.removeChild(c.stateNode));break;case 18:null!==T&&(za?
(a=T,c=c.stateNode,8===a.nodeType?Re(a.parentNode,c):1===a.nodeType&&Re(a,c),nc(a)):Re(T,c.stateNode));break;case 4:d=T;e=za;T=c.stateNode.containerInfo;za=!0;jb(a,b,c);T=d;za=e;break;case 0:case 11:case 14:case 15:if(!X&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?If(c,b,g):0!==(f&4)&&If(c,b,g));e=e.next}while(e!==d)}jb(a,b,c);break;case 1:if(!X&&(Wb(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=
c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){G(c,b,h)}jb(a,b,c);break;case 21:jb(a,b,c);break;case 22:c.mode&1?(X=(d=X)||null!==c.memoizedState,jb(a,b,c),X=d):jb(a,b,c);break;default:jb(a,b,c)}}function Ei(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Fk);b.forEach(function(b){var d=Gk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}function Aa(a,b,c){c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=
c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:T=h.stateNode;za=!1;break a;case 3:T=h.stateNode.containerInfo;za=!0;break a;case 4:T=h.stateNode.containerInfo;za=!0;break a}h=h.return}if(null===T)throw Error(m(160));Di(f,g,e);T=null;za=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(n){G(e,b,n)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)Fi(b,a),b=b.sibling}function Fi(a,b,c){var d=a.alternate;c=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:Aa(b,a);
Ha(a);if(c&4){try{Gc(3,a,a.return),Id(3,a)}catch(I){G(a,a.return,I)}try{Gc(5,a,a.return)}catch(I){G(a,a.return,I)}}break;case 1:Aa(b,a);Ha(a);c&512&&null!==d&&Wb(d,d.return);break;case 5:Aa(b,a);Ha(a);c&512&&null!==d&&Wb(d,d.return);if(a.flags&32){var e=a.stateNode;try{Fc(e,"")}catch(I){G(a,a.return,I)}}if(c&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==d?d.memoizedProps:f,h=a.type,k=a.updateQueue;a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&lg(e,f);
qe(h,g);var n=qe(h,f);for(g=0;g<k.length;g+=2){var q=k[g],u=k[g+1];"style"===q?sg(e,u):"dangerouslySetInnerHTML"===q?yi(e,u):"children"===q?Fc(e,u):$d(e,q,u,n)}switch(h){case "input":le(e,f);break;case "textarea":og(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var p=f.value;null!=p?Db(e,!!f.multiple,p,!1):r!==!!f.multiple&&(null!=f.defaultValue?Db(e,!!f.multiple,f.defaultValue,!0):Db(e,!!f.multiple,f.multiple?[]:"",!1))}e[uc]=f}catch(I){G(a,a.return,
I)}}break;case 6:Aa(b,a);Ha(a);if(c&4){if(null===a.stateNode)throw Error(m(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(I){G(a,a.return,I)}}break;case 3:Aa(b,a);Ha(a);if(c&4&&null!==d&&d.memoizedState.isDehydrated)try{nc(b.containerInfo)}catch(I){G(a,a.return,I)}break;case 4:Aa(b,a);Ha(a);break;case 13:Aa(b,a);Ha(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||null!==e.alternate&&null!==e.alternate.memoizedState||(Of=P()));c&4&&Ei(a);break;case 22:q=
null!==d&&null!==d.memoizedState;a.mode&1?(X=(n=X)||q,Aa(b,a),X=n):Aa(b,a);Ha(a);if(c&8192){n=null!==a.memoizedState;if((a.stateNode.isHidden=n)&&!q&&0!==(a.mode&1))for(l=a,q=a.child;null!==q;){for(u=l=q;null!==l;){r=l;p=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Gc(4,r,r.return);break;case 1:Wb(r,r.return);var x=r.stateNode;if("function"===typeof x.componentWillUnmount){c=r;b=r.return;try{d=c,x.props=d.memoizedProps,x.state=d.memoizedState,x.componentWillUnmount()}catch(I){G(c,b,I)}}break;
case 5:Wb(r,r.return);break;case 22:if(null!==r.memoizedState){Gi(u);continue}}null!==p?(p.return=r,l=p):Gi(u)}q=q.sibling}a:for(q=null,u=a;;){if(5===u.tag){if(null===q){q=u;try{e=u.stateNode,n?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=u.stateNode,k=u.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=rg("display",g))}catch(I){G(a,a.return,I)}}}else if(6===u.tag){if(null===q)try{u.stateNode.nodeValue=
n?"":u.memoizedProps}catch(I){G(a,a.return,I)}}else if((22!==u.tag&&23!==u.tag||null===u.memoizedState||u===a)&&null!==u.child){u.child.return=u;u=u.child;continue}if(u===a)break a;for(;null===u.sibling;){if(null===u.return||u.return===a)break a;q===u&&(q=null);u=u.return}q===u&&(q=null);u.sibling.return=u.return;u=u.sibling}}break;case 19:Aa(b,a);Ha(a);c&4&&Ei(a);break;case 21:break;default:Aa(b,a),Ha(a)}}function Ha(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Bi(c)){var d=c;
break a}c=c.return}throw Error(m(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(Fc(e,""),d.flags&=-33);var f=Ci(a);Nf(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Ci(a);Mf(a,h,g);break;default:throw Error(m(161));}}catch(k){G(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function Hk(a,b,c){l=a;Hi(a,b,c)}function Hi(a,b,c){for(var d=0!==(a.mode&1);null!==l;){var e=l,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jd;if(!g){var h=e.alternate,k=null!==h&&null!==
h.memoizedState||X;h=Jd;var n=X;Jd=g;if((X=k)&&!n)for(l=e;null!==l;)g=l,k=g.child,22===g.tag&&null!==g.memoizedState?Ii(e):null!==k?(k.return=g,l=k):Ii(e);for(;null!==f;)l=f,Hi(f,b,c),f=f.sibling;l=e;Jd=h;X=n}Ji(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,l=f):Ji(a,b,c)}}function Ji(a,b,c){for(;null!==l;){b=l;if(0!==(b.flags&8772)){c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:X||Id(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!X)if(null===c)d.componentDidMount();
else{var e=b.elementType===b.type?c.memoizedProps:ya(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&Hh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=b.child.stateNode;break;case 1:c=b.child.stateNode}Hh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&
c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var n=b.alternate;if(null!==n){var q=n.memoizedState;if(null!==q){var p=q.dehydrated;null!==p&&nc(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163));}X||b.flags&512&&Lf(b)}catch(r){G(b,b.return,r)}}if(b===a){l=null;break}c=b.sibling;if(null!==c){c.return=b.return;l=c;break}l=b.return}}function Gi(a){for(;null!==l;){var b=l;if(b===
a){l=null;break}var c=b.sibling;if(null!==c){c.return=b.return;l=c;break}l=b.return}}function Ii(a){for(;null!==l;){var b=l;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Id(4,b)}catch(k){G(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){G(b,e,k)}}var f=b.return;try{Lf(b)}catch(k){G(b,f,k)}break;case 5:var g=b.return;try{Lf(b)}catch(k){G(b,g,k)}}}catch(k){G(b,b.return,k)}if(b===a){l=null;break}var h=b.sibling;
if(null!==h){h.return=b.return;l=h;break}l=b.return}}function Hc(){Hf=P()+500}function Z(){return 0!==(p&6)?P():-1!==Kd?Kd:Kd=P()}function hb(a){if(0===(a.mode&1))return 1;if(0!==(p&2)&&0!==U)return U&-U;if(null!==Ik.transition)return 0===Ld&&(Ld=Dg()),Ld;a=z;if(0!==a)return a;a=window.event;a=void 0===a?16:Lg(a.type);return a}function xa(a,b,c,d){if(50<Ic)throw Ic=0,Pf=null,Error(m(185));ic(a,c,d);if(0===(p&2)||a!==O)a===O&&(0===(p&2)&&(Md|=c),4===L&&kb(a,U)),ia(a,d),1===c&&0===p&&0===(b.mode&1)&&
(Hc(),md&&db())}function ia(a,b){var c=a.callbackNode;tj(a,b);var d=Vc(a,a===O?U:0);if(0===d)null!==c&&Ki(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&Ki(c);if(1===b)0===a.tag?jk(Li.bind(null,a)):wh(Li.bind(null,a)),Jk(function(){0===(p&6)&&db()}),c=null;else{switch(Eg(d)){case 1:c=De;break;case 4:c=Mg;break;case 16:c=ad;break;case 536870912:c=Ng;break;default:c=ad}c=Mi(c,Ni.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}function Ni(a,b){Kd=-1;
Ld=0;if(0!==(p&6))throw Error(m(327));var c=a.callbackNode;if(Xb()&&a.callbackNode!==c)return null;var d=Vc(a,a===O?U:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Nd(a,d);else{b=d;var e=p;p|=2;var f=Oi();if(O!==a||U!==b)Ra=null,Hc(),wb(a,b);do try{Kk();break}catch(h){Pi(a,h)}while(1);af();Od.current=f;p=e;null!==H?b=0:(O=null,U=0,b=L)}if(0!==b){2===b&&(e=ve(a),0!==e&&(d=e,b=Qf(a,e)));if(1===b)throw c=Jc,wb(a,0),kb(a,d),ia(a,P()),c;if(6===b)kb(a,d);else{e=a.current.alternate;
if(0===(d&30)&&!Lk(e)&&(b=Nd(a,d),2===b&&(f=ve(a),0!==f&&(d=f,b=Qf(a,f))),1===b))throw c=Jc,wb(a,0),kb(a,d),ia(a,P()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(m(345));case 2:xb(a,ja,Ra);break;case 3:kb(a,d);if((d&130023424)===d&&(b=Of+500-P(),10<b)){if(0!==Vc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){Z();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Rf(xb.bind(null,a,ja,Ra),b);break}xb(a,ja,Ra);break;case 4:kb(a,d);if((d&4194240)===d)break;b=a.eventTimes;
for(e=-1;0<d;){var g=31-ta(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=P()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*Mk(d/1960))-d;if(10<d){a.timeoutHandle=Rf(xb.bind(null,a,ja,Ra),d);break}xb(a,ja,Ra);break;case 5:xb(a,ja,Ra);break;default:throw Error(m(329));}}}ia(a,P());return a.callbackNode===c?Ni.bind(null,a):null}function Qf(a,b){var c=Kc;a.current.memoizedState.isDehydrated&&(wb(a,b).flags|=256);a=Nd(a,b);2!==a&&(b=ja,ja=c,null!==b&&Gf(b));return a}function Gf(a){null===
ja?ja=a:ja.push.apply(ja,a)}function Lk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!ua(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}function kb(a,b){b&=~Sf;b&=~Md;a.suspendedLanes|=b;a.pingedLanes&=
~b;for(a=a.expirationTimes;0<b;){var c=31-ta(b),d=1<<c;a[c]=-1;b&=~d}}function Li(a){if(0!==(p&6))throw Error(m(327));Xb();var b=Vc(a,0);if(0===(b&1))return ia(a,P()),null;var c=Nd(a,b);if(0!==a.tag&&2===c){var d=ve(a);0!==d&&(b=d,c=Qf(a,d))}if(1===c)throw c=Jc,wb(a,0),kb(a,b),ia(a,P()),c;if(6===c)throw Error(m(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;xb(a,ja,Ra);ia(a,P());return null}function Tf(a,b){var c=p;p|=1;try{return a(b)}finally{p=c,0===p&&(Hc(),md&&db())}}function yb(a){null!==
lb&&0===lb.tag&&0===(p&6)&&Xb();var b=p;p|=1;var c=ca.transition,d=z;try{if(ca.transition=null,z=1,a)return a()}finally{z=d,ca.transition=c,p=b,0===(p&6)&&db()}}function wb(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Nk(c));if(null!==H)for(c=H.return;null!==c;){var d=c;Ve(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&(v(S),v(J));break;case 3:Tb();v(S);v(J);jf();break;case 5:hf(d);break;case 4:Tb();break;case 13:v(F);break;
case 19:v(F);break;case 10:cf(d.type._context);break;case 22:case 23:ba=Ga.current,v(Ga)}c=c.return}O=a;H=a=eb(a.current,null);U=ba=b;L=0;Jc=null;Sf=Md=ra=0;ja=Kc=null;if(null!==tb){for(b=0;b<tb.length;b++)if(c=tb[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}tb=null}return a}function Pi(a,b){do{var c=H;try{af();yd.current=zd;if(Ad){for(var d=C.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ad=
!1}vb=0;N=K=C=null;zc=!1;Ac=0;Uf.current=null;if(null===c||null===c.return){L=1;Jc=b;H=null;break}a:{var f=a,g=c.return,h=c,k=b;b=U;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var n=k,l=h,p=l.tag;if(0===(l.mode&1)&&(0===p||11===p||15===p)){var r=l.alternate;r?(l.updateQueue=r.updateQueue,l.memoizedState=r.memoizedState,l.lanes=r.lanes):(l.updateQueue=null,l.memoizedState=null)}var v=ji(g);if(null!==v){v.flags&=-257;ki(v,g,h,f,b);v.mode&1&&ii(f,n,b);b=v;k=n;var x=b.updateQueue;
if(null===x){var z=new Set;z.add(k);b.updateQueue=z}else x.add(k);break a}else{if(0===(b&1)){ii(f,n,b);Ef();break a}k=Error(m(426))}}else if(D&&h.mode&1){var y=ji(g);if(null!==y){0===(y.flags&65536)&&(y.flags|=256);ki(y,g,h,f,b);Ye(Ub(k,h));break a}}f=k=Ub(k,h);4!==L&&(L=2);null===Kc?Kc=[f]:Kc.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;b&=-b;f.lanes|=b;var w=gi(f,k,b);Gh(f,w);break a;case 1:h=k;var A=f.type,t=f.stateNode;if(0===(f.flags&128)&&("function"===typeof A.getDerivedStateFromError||
null!==t&&"function"===typeof t.componentDidCatch&&(null===ib||!ib.has(t)))){f.flags|=65536;b&=-b;f.lanes|=b;var B=hi(f,h,b);Gh(f,B);break a}}f=f.return}while(null!==f)}Qi(c)}catch(ma){b=ma;H===c&&null!==c&&(H=c=c.return);continue}break}while(1)}function Oi(){var a=Od.current;Od.current=zd;return null===a?zd:a}function Ef(){if(0===L||3===L||2===L)L=4;null===O||0===(ra&268435455)&&0===(Md&268435455)||kb(O,U)}function Nd(a,b){var c=p;p|=2;var d=Oi();if(O!==a||U!==b)Ra=null,wb(a,b);do try{Ok();break}catch(e){Pi(a,
e)}while(1);af();p=c;Od.current=d;if(null!==H)throw Error(m(261));O=null;U=0;return L}function Ok(){for(;null!==H;)Ri(H)}function Kk(){for(;null!==H&&!Pk();)Ri(H)}function Ri(a){var b=Qk(a.alternate,a,ba);a.memoizedProps=a.pendingProps;null===b?Qi(a):H=b;Uf.current=null}function Qi(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=xk(c,b,ba),null!==c){H=c;return}}else{c=Bk(c,b);if(null!==c){c.flags&=32767;H=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;
else{L=6;H=null;return}}b=b.sibling;if(null!==b){H=b;return}H=b=a}while(null!==b);0===L&&(L=5)}function xb(a,b,c){var d=z,e=ca.transition;try{ca.transition=null,z=1,Rk(a,b,c,d)}finally{ca.transition=e,z=d}return null}function Rk(a,b,c,d){do Xb();while(null!==lb);if(0!==(p&6))throw Error(m(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(m(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;
uj(a,f);a===O&&(H=O=null,U=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||Pd||(Pd=!0,Mi(ad,function(){Xb();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ca.transition;ca.transition=null;var g=z;z=1;var h=p;p|=4;Uf.current=null;Ck(a,c);Fi(c,a);Tj(Kf);Zc=!!Jf;Kf=Jf=null;a.current=c;Hk(c,a,e);Sk();p=h;z=g;ca.transition=f}else a.current=c;Pd&&(Pd=!1,lb=a,Qd=e);f=a.pendingLanes;0===f&&(ib=null);oj(c.stateNode,d);ia(a,P());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=
b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Ed)throw Ed=!1,a=xf,xf=null,a;0!==(Qd&1)&&0!==a.tag&&Xb();f=a.pendingLanes;0!==(f&1)?a===Pf?Ic++:(Ic=0,Pf=a):Ic=0;db();return null}function Xb(){if(null!==lb){var a=Eg(Qd),b=ca.transition,c=z;try{ca.transition=null;z=16>a?16:a;if(null===lb)var d=!1;else{a=lb;lb=null;Qd=0;if(0!==(p&6))throw Error(m(331));var e=p;p|=4;for(l=a.current;null!==l;){var f=l,g=f.child;if(0!==(l.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var n=
h[k];for(l=n;null!==l;){var q=l;switch(q.tag){case 0:case 11:case 15:Gc(8,q,f)}var u=q.child;if(null!==u)u.return=q,l=u;else for(;null!==l;){q=l;var r=q.sibling,v=q.return;Ai(q);if(q===n){l=null;break}if(null!==r){r.return=v;l=r;break}l=v}}}var x=f.alternate;if(null!==x){var y=x.child;if(null!==y){x.child=null;do{var C=y.sibling;y.sibling=null;y=C}while(null!==y)}}l=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,l=g;else b:for(;null!==l;){f=l;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Gc(9,
f,f.return)}var w=f.sibling;if(null!==w){w.return=f.return;l=w;break b}l=f.return}}var A=a.current;for(l=A;null!==l;){g=l;var t=g.child;if(0!==(g.subtreeFlags&2064)&&null!==t)t.return=g,l=t;else b:for(g=A;null!==l;){h=l;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Id(9,h)}}catch(ma){G(h,h.return,ma)}if(h===g){l=null;break b}var B=h.sibling;if(null!==B){B.return=h.return;l=B;break b}l=h.return}}p=e;db();if(Ca&&"function"===typeof Ca.onPostCommitFiberRoot)try{Ca.onPostCommitFiberRoot(Uc,
a)}catch(ma){}d=!0}return d}finally{z=c,ca.transition=b}}return!1}function Si(a,b,c){b=Ub(c,b);b=gi(a,b,1);a=fb(a,b,1);b=Z();null!==a&&(ic(a,1,b),ia(a,b))}function G(a,b,c){if(3===a.tag)Si(a,a,c);else for(;null!==b;){if(3===b.tag){Si(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===ib||!ib.has(d))){a=Ub(c,a);a=hi(b,a,1);b=fb(b,a,1);a=Z();null!==b&&(ic(b,1,a),ia(b,a));break}}b=b.return}}function sk(a,
b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Z();a.pingedLanes|=a.suspendedLanes&c;O===a&&(U&c)===c&&(4===L||3===L&&(U&130023424)===U&&500>P()-Of?wb(a,0):Sf|=c);ia(a,b)}function Ti(a,b){0===b&&(0===(a.mode&1)?b=1:(b=Rd,Rd<<=1,0===(Rd&130023424)&&(Rd=4194304)));var c=Z();a=Oa(a,b);null!==a&&(ic(a,b,c),ia(a,c))}function vk(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Ti(a,c)}function Gk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);
break;case 19:d=a.stateNode;break;default:throw Error(m(314));}null!==d&&d.delete(b);Ti(a,c)}function Mi(a,b){return xh(a,b)}function Tk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function yf(a){a=
a.prototype;return!(!a||!a.isReactComponent)}function Uk(a){if("function"===typeof a)return yf(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===ie)return 11;if(a===je)return 14}return 2}function eb(a,b){var c=a.alternate;null===c?(c=pa(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=
a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function rd(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)yf(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Bb:return sb(c.children,e,f,b);case fe:g=8;e|=8;break;case ee:return a=pa(12,c,b,e|2),a.elementType=ee,a.lanes=f,a;case ge:return a=
pa(13,c,b,e),a.elementType=ge,a.lanes=f,a;case he:return a=pa(19,c,b,e),a.elementType=he,a.lanes=f,a;case Ui:return Gd(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case hg:g=10;break a;case gg:g=9;break a;case ie:g=11;break a;case je:g=14;break a;case Ta:g=16;d=null;break a}throw Error(m(130,null==a?a:typeof a,""));}b=pa(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function sb(a,b,c,d){a=pa(7,a,d,b);a.lanes=c;return a}function Gd(a,b,c,d){a=pa(22,a,d,b);a.elementType=
Ui;a.lanes=c;a.stateNode={isHidden:!1};return a}function Ze(a,b,c){a=pa(6,a,null,b);a.lanes=c;return a}function $e(a,b,c){b=pa(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Vk(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=
0;this.eventTimes=we(0);this.expirationTimes=we(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=we(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=null}function Vf(a,b,c,d,e,f,g,h,k,l){a=new Vk(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=pa(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,
pendingSuspenseBoundaries:null};ff(f);return a}function Wk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Cb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}function Vi(a){if(!a)return cb;a=a._reactInternals;a:{if(nb(a)!==a||1!==a.tag)throw Error(m(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(ea(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(m(171));
}if(1===a.tag){var c=a.type;if(ea(c))return uh(a,c,b)}return b}function Wi(a,b,c,d,e,f,g,h,k,l){a=Vf(c,d,!0,a,e,f,g,h,k);a.context=Vi(null);c=a.current;d=Z();e=hb(c);f=Pa(d,e);f.callback=void 0!==b&&null!==b?b:null;fb(c,f,e);a.current.lanes=e;ic(a,e,d);ia(a,d);return a}function Sd(a,b,c,d){var e=b.current,f=Z(),g=hb(e);c=Vi(c);null===b.context?b.context=c:b.pendingContext=c;b=Pa(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=fb(e,b,g);null!==a&&(xa(a,e,g,f),vd(a,e,g));return g}
function Td(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Xi(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function Wf(a,b){Xi(a,b);(a=a.alternate)&&Xi(a,b)}function Xk(a){a=Bg(a);return null===a?null:a.stateNode}function Yk(a){return null}function Xf(a){this._internalRoot=a}function Ud(a){this._internalRoot=a}function Yf(a){return!(!a||1!==a.nodeType&&9!==
a.nodeType&&11!==a.nodeType)}function Vd(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function Yi(){}function Zk(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=Td(g);f.call(a)}}var g=Wi(b,d,a,0,null,!1,!1,"",Yi);a._reactRootContainer=g;a[Ja]=g.current;sc(8===a.nodeType?a.parentNode:a);yb();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=Td(k);
h.call(a)}}var k=Vf(a,0,!1,null,null,!1,!1,"",Yi);a._reactRootContainer=k;a[Ja]=k.current;sc(8===a.nodeType?a.parentNode:a);yb(function(){Sd(b,k,c,d)});return k}function Wd(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=Td(g);h.call(a)}}Sd(b,g,a,e)}else g=Zk(c,b,a,e,d);return Td(g)}var cg=new Set,$b={},Ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Zd=Object.prototype.hasOwnProperty,
cj=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eg={},dg={},R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){R[a]=
new Y(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];R[b]=new Y(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){R[a]=new Y(a,2,!1,a.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){R[a]=new Y(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){R[a]=
new Y(a,3,!1,a.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(a){R[a]=new Y(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){R[a]=new Y(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){R[a]=new Y(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){R[a]=new Y(a,5,!1,a.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g,$f=function(a){return a[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=
a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){R[a]=new Y(a,1,!1,a.toLowerCase(),null,!1,!1)});R.xlinkHref=new Y("xlinkHref",
1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){R[a]=new Y(a,1,!1,a.toLowerCase(),null,!0,!0)});var Sa=zb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sd=Symbol.for("react.element"),Cb=Symbol.for("react.portal"),Bb=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),hg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),
he=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Ta=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Ui=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var fg=Symbol.iterator,E=Object.assign,ae,ce=!1,cc=Array.isArray,Xd,yi=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,
c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{Xd=Xd||document.createElement("div");Xd.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Xd.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}),Fc=function(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b},dc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,
borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,
strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$k=["Webkit","ms","Moz","O"];Object.keys(dc).forEach(function(a){$k.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);dc[b]=dc[a]})});var ij=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),ze=null,se=null,Eb=null,Fb=null,xg=function(a,b){return a(b)},yg=function(){},te=!1,Oe=!1;if(Ia)try{var Lc={};Object.defineProperty(Lc,
"passive",{get:function(){Oe=!0}});window.addEventListener("test",Lc,Lc);window.removeEventListener("test",Lc,Lc)}catch(a){Oe=!1}var kj=function(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(q){this.onError(q)}},gc=!1,Sc=null,Tc=!1,ue=null,lj={onError:function(a){gc=!0;Sc=a}},Ba=zb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Jg=Ba.unstable_scheduleCallback,Kg=Ba.unstable_NormalPriority,xh=Jg,Ki=Ba.unstable_cancelCallback,Pk=Ba.unstable_shouldYield,
Sk=Ba.unstable_requestPaint,P=Ba.unstable_now,Dj=Ba.unstable_getCurrentPriorityLevel,De=Ba.unstable_ImmediatePriority,Mg=Ba.unstable_UserBlockingPriority,ad=Kg,Ej=Ba.unstable_LowPriority,Ng=Ba.unstable_IdlePriority,Uc=null,Ca=null,ta=Math.clz32?Math.clz32:pj,qj=Math.log,rj=Math.LN2,Wc=64,Rd=4194304,z=0,Ae=!1,Yc=[],Va=null,Wa=null,Xa=null,jc=new Map,kc=new Map,Ya=[],Bj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "),
Gb=Sa.ReactCurrentBatchConfig,Zc=!0,$c=null,Za=null,Ee=null,bd=null,Yb={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},He=ka(Yb),Mc=E({},Yb,{view:0,detail:0}),ak=ka(Mc),ag,bg,Nc,Yd=E({},Mc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fe,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:
a.relatedTarget},movementX:function(a){if("movementX"in a)return a.movementX;a!==Nc&&(Nc&&"mousemove"===a.type?(ag=a.screenX-Nc.screenX,bg=a.screenY-Nc.screenY):bg=ag=0,Nc=a);return ag},movementY:function(a){return"movementY"in a?a.movementY:bg}}),ih=ka(Yd),al=E({},Yd,{dataTransfer:0}),Wj=ka(al),bl=E({},Mc,{relatedTarget:0}),Pe=ka(bl),cl=E({},Yb,{animationName:0,elapsedTime:0,pseudoElement:0}),Yj=ka(cl),dl=E({},Yb,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),
ck=ka(dl),el=E({},Yb,{data:0}),qh=ka(el),fk=qh,fl={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",
112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},hl=E({},Mc,{key:function(a){if(a.key){var b=fl[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=cd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?gl[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,
metaKey:0,repeat:0,locale:0,getModifierState:Fe,charCode:function(a){return"keypress"===a.type?cd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?cd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Vj=ka(hl),il=E({},Yd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=ka(il),jl=E({},Mc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,
ctrlKey:0,shiftKey:0,getModifierState:Fe}),Xj=ka(jl),kl=E({},Yb,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zj=ka(kl),ll=E({},Yd,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),bk=ka(ll),Hj=[9,13,27,32],Ge=Ia&&"CompositionEvent"in window,Oc=null;Ia&&"documentMode"in document&&(Oc=document.documentMode);var ek=Ia&&"TextEvent"in
window&&!Oc,Ug=Ia&&(!Ge||Oc&&8<Oc&&11>=Oc),Tg=String.fromCharCode(32),Sg=!1,Hb=!1,Kj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},oc=null,pc=null,ph=!1;Ia&&(ph=Lj("input")&&(!document.documentMode||9<document.documentMode));var ua="function"===typeof Object.is?Object.is:Sj,dk=Ia&&"documentMode"in document&&11>=document.documentMode,Jb=null,Ke=null,rc=null,Je=!1,Kb={animationend:gd("Animation","AnimationEnd"),
animationiteration:gd("Animation","AnimationIteration"),animationstart:gd("Animation","AnimationStart"),transitionend:gd("Transition","TransitionEnd")},Le={},eh={};Ia&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete Kb.animationend.animation,delete Kb.animationiteration.animation,delete Kb.animationstart.animation),"TransitionEvent"in window||delete Kb.transitionend.transition);var jh=hd("animationend"),kh=hd("animationiteration"),lh=hd("animationstart"),mh=hd("transitionend"),
fh=new Map,Zi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
(function(){for(var a=0;a<Zi.length;a++){var b=Zi[a],c=b.toLowerCase();b=b[0].toUpperCase()+b.slice(1);$a(c,"on"+b)}$a(jh,"onAnimationEnd");$a(kh,"onAnimationIteration");$a(lh,"onAnimationStart");$a("dblclick","onDoubleClick");$a("focusin","onFocus");$a("focusout","onBlur");$a(mh,"onTransitionEnd")})();Ab("onMouseEnter",["mouseout","mouseover"]);Ab("onMouseLeave",["mouseout","mouseover"]);Ab("onPointerEnter",["pointerout","pointerover"]);Ab("onPointerLeave",["pointerout","pointerover"]);mb("onChange",
"change click focusin focusout input keydown keyup selectionchange".split(" "));mb("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mb("onBeforeInput",["compositionend","keypress","textInput","paste"]);mb("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mb("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mb("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ec="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uj=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ec)),id="_reactListening"+Math.random().toString(36).slice(2),gk=/\r\n?/g,hk=/\u0000|\uFFFD/g,Jf=null,Kf=null,Rf="function"===typeof setTimeout?setTimeout:void 0,Nk="function"===typeof clearTimeout?
clearTimeout:void 0,$i="function"===typeof Promise?Promise:void 0,Jk="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof $i?function(a){return $i.resolve(null).then(a).catch(ik)}:Rf,Zb=Math.random().toString(36).slice(2),Da="__reactFiber$"+Zb,uc="__reactProps$"+Zb,Ja="__reactContainer$"+Zb,Me="__reactEvents$"+Zb,Dk="__reactListeners$"+Zb,Ek="__reactHandles$"+Zb,Se=[],Mb=-1,cb={},J=bb(cb),S=bb(!1),pb=cb,La=null,md=!1,Te=!1,Ob=[],Pb=0,od=null,nd=0,na=[],oa=0,rb=null,Ma=1,Na="",la=
null,fa=null,D=!1,wa=null,Ik=Sa.ReactCurrentBatchConfig,Vb=Dh(!0),li=Dh(!1),ud=bb(null),td=null,Rb=null,bf=null,tb=null,kk=Oa,gb=!1,wc={},Ea=bb(wc),yc=bb(wc),xc=bb(wc),F=bb(0),kf=[],yd=Sa.ReactCurrentDispatcher,sf=Sa.ReactCurrentBatchConfig,vb=0,C=null,K=null,N=null,Ad=!1,zc=!1,Ac=0,ml=0,zd={readContext:qa,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useInsertionEffect:V,useLayoutEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,
useMutableSource:V,useSyncExternalStore:V,useId:V,unstable_isNewReconciler:!1},lk={readContext:qa,useCallback:function(a,b){Fa().memoizedState=[a,void 0===b?null:b];return a},useContext:qa,useEffect:Sh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Bd(4194308,4,Vh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Bd(4194308,4,a,b)},useInsertionEffect:function(a,b){return Bd(4,2,a,b)},useMemo:function(a,b){var c=Fa();b=void 0===b?null:b;a=a();c.memoizedState=
[a,b];return a},useReducer:function(a,b,c){var d=Fa();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=qk.bind(null,C,a);return[d.memoizedState,a]},useRef:function(a){var b=Fa();a={current:a};return b.memoizedState=a},useState:Qh,useDebugValue:rf,useDeferredValue:function(a){return Fa().memoizedState=a},useTransition:function(){var a=Qh(!1),b=a[0];a=pk.bind(null,a[1]);Fa().memoizedState=
a;return[b,a]},useMutableSource:function(a,b,c){},useSyncExternalStore:function(a,b,c){var d=C,e=Fa();if(D){if(void 0===c)throw Error(m(407));c=c()}else{c=b();if(null===O)throw Error(m(349));0!==(vb&30)||Nh(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;Sh(Lh.bind(null,d,f,a),[a]);d.flags|=2048;Cc(9,Mh.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Fa(),b=O.identifierPrefix;if(D){var c=Na;var d=Ma;c=(d&~(1<<32-ta(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Ac++;0<c&&
(b+="H"+c.toString(32));b+=":"}else c=ml++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},mk={readContext:qa,useCallback:Xh,useContext:qa,useEffect:qf,useImperativeHandle:Wh,useInsertionEffect:Th,useLayoutEffect:Uh,useMemo:Yh,useReducer:of,useRef:Rh,useState:function(a){return of(Bc)},useDebugValue:rf,useDeferredValue:function(a){var b=sa();return Zh(b,K.memoizedState,a)},useTransition:function(){var a=of(Bc)[0],b=sa().memoizedState;return[a,b]},useMutableSource:Jh,
useSyncExternalStore:Kh,useId:$h,unstable_isNewReconciler:!1},nk={readContext:qa,useCallback:Xh,useContext:qa,useEffect:qf,useImperativeHandle:Wh,useInsertionEffect:Th,useLayoutEffect:Uh,useMemo:Yh,useReducer:pf,useRef:Rh,useState:function(a){return pf(Bc)},useDebugValue:rf,useDeferredValue:function(a){var b=sa();return null===K?b.memoizedState=a:Zh(b,K.memoizedState,a)},useTransition:function(){var a=pf(Bc)[0],b=sa().memoizedState;return[a,b]},useMutableSource:Jh,useSyncExternalStore:Kh,useId:$h,
unstable_isNewReconciler:!1},Dd={isMounted:function(a){return(a=a._reactInternals)?nb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Z(),e=hb(a),f=Pa(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=fb(a,f,e);null!==b&&(xa(b,a,e,d),vd(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Z(),e=hb(a),f=Pa(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=fb(a,f,e);null!==b&&(xa(b,a,e,d),vd(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;
var c=Z(),d=hb(a),e=Pa(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=fb(a,e,d);null!==b&&(xa(b,a,d,c),vd(b,a,d))}},rk="function"===typeof WeakMap?WeakMap:Map,tk=Sa.ReactCurrentOwner,ha=!1,Cf={dehydrated:null,treeContext:null,retryLane:0};var zk=function(a,b,c,d){for(c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=
c.return;c=c.sibling}};var xi=function(a,b){};var yk=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){a=b.stateNode;ub(Ea.current);e=null;switch(c){case "input":f=ke(a,f);d=ke(a,d);e=[];break;case "select":f=E({},f,{value:void 0});d=E({},d,{value:void 0});e=[];break;case "textarea":f=ne(a,f);d=ne(a,d);e=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(a.onclick=kd)}pe(c,d);var g;c=null;for(l in f)if(!d.hasOwnProperty(l)&&f.hasOwnProperty(l)&&null!=f[l])if("style"===
l){var h=f[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&($b.hasOwnProperty(l)?e||(e=[]):(e=e||[]).push(l,null));for(l in d){var k=d[l];h=null!=f?f[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(e||(e=[]),e.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(e=e||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(e=e||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&($b.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&B("scroll",a),e||h===k||(e=[])):(e=e||[]).push(l,k))}c&&(e=e||[]).push("style",c);var l=e;if(b.updateQueue=l)b.flags|=4}};var Ak=function(a,
b,c,d){c!==d&&(b.flags|=4)};var Jd=!1,X=!1,Fk="function"===typeof WeakSet?WeakSet:Set,l=null,zi=!1,T=null,za=!1,Mk=Math.ceil,Od=Sa.ReactCurrentDispatcher,Uf=Sa.ReactCurrentOwner,ca=Sa.ReactCurrentBatchConfig,p=0,O=null,H=null,U=0,ba=0,Ga=bb(0),L=0,Jc=null,ra=0,Md=0,Sf=0,Kc=null,ja=null,Of=0,Hf=Infinity,Ra=null,Ed=!1,xf=null,ib=null,Pd=!1,lb=null,Qd=0,Ic=0,Pf=null,Kd=-1,Ld=0;var Qk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||S.current)ha=!0;else{if(0===(a.lanes&c)&&0===(b.flags&
128))return ha=!1,wk(a,b,c);ha=0!==(a.flags&131072)?!0:!1}else ha=!1,D&&0!==(b.flags&1048576)&&yh(b,nd,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;Fd(a,b);a=b.pendingProps;var e=Nb(b,J.current);Sb(b,c);e=mf(null,b,d,a,e,c);var f=nf();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=null,ea(d)?(f=!0,ld(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ff(b),e.updater=Dd,b.stateNode=
e,e._reactInternals=b,uf(b,d,a,c),b=Af(null,b,d,!0,f,c)):(b.tag=0,D&&f&&Ue(b),aa(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{Fd(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Uk(d);a=ya(d,a);switch(e){case 0:b=zf(null,b,d,a,c);break a;case 1:b=ri(null,b,d,a,c);break a;case 11:b=mi(null,b,d,a,c);break a;case 14:b=ni(null,b,d,ya(d.type,a),c);break a}throw Error(m(306,d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ya(d,e),zf(a,b,d,e,c);
case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ya(d,e),ri(a,b,d,e,c);case 3:a:{si(b);if(null===a)throw Error(m(387));d=b.pendingProps;f=b.memoizedState;e=f.element;Fh(a,b);wd(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=f,b.memoizedState=f,b.flags&256){e=Ub(Error(m(423)),b);b=ti(a,b,d,c,e);break a}else if(d!==e){e=
Ub(Error(m(424)),b);b=ti(a,b,d,c,e);break a}else for(fa=Ka(b.stateNode.containerInfo.firstChild),la=b,D=!0,wa=null,c=li(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Qb();if(d===e){b=Qa(a,b,c);break a}aa(a,b,d,c)}b=b.child}return b;case 5:return Ih(b),null===a&&Xe(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Qe(d,e)?g=null:null!==f&&Qe(d,f)&&(b.flags|=32),qi(a,b),aa(a,b,g,c),b.child;case 6:return null===a&&Xe(b),null;case 13:return ui(a,b,c);case 4:return gf(b,
b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Vb(b,null,d,c):aa(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ya(d,e),mi(a,b,d,e,c);case 7:return aa(a,b,b.pendingProps,c),b.child;case 8:return aa(a,b,b.pendingProps.children,c),b.child;case 12:return aa(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;g=e.value;y(ud,d._currentValue);d._currentValue=g;if(null!==f)if(ua(f.value,g)){if(f.children===
e.children&&!S.current){b=Qa(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=Pa(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var p=l.pending;null===p?k.next=k:(k.next=p.next,p.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);df(f.return,c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===
f.tag){g=f.return;if(null===g)throw Error(m(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);df(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}aa(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Sb(b,c),e=qa(e),d=d(e),b.flags|=1,aa(a,b,d,c),b.child;case 14:return d=b.type,e=ya(d,b.pendingProps),e=ya(d.type,e),ni(a,b,d,e,c);case 15:return oi(a,
b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ya(d,e),Fd(a,b),b.tag=1,ea(d)?(a=!0,ld(b)):a=!1,Sb(b,c),ei(b,d,e),uf(b,d,e,c),Af(null,b,d,!0,a,c);case 19:return wi(a,b,c);case 22:return pi(a,b,c)}throw Error(m(156,b.tag));};var pa=function(a,b,c,d){return new Tk(a,b,c,d)},aj="function"===typeof reportError?reportError:function(a){console.error(a)};Ud.prototype.render=Xf.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(m(409));
Sd(a,b,null,null)};Ud.prototype.unmount=Xf.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;yb(function(){Sd(null,a,null,null)});b[Ja]=null}};Ud.prototype.unstable_scheduleHydration=function(a){if(a){var b=nl();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Ya.length&&0!==b&&b<Ya[c].priority;c++);Ya.splice(c,0,a);0===c&&Hg(a)}};var Cj=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=
hc(b.pendingLanes);0!==c&&(xe(b,c|1),ia(b,P()),0===(p&6)&&(Hc(),db()))}break;case 13:yb(function(){var b=Oa(a,1);if(null!==b){var c=Z();xa(b,a,1,c)}}),Wf(a,1)}};var Gg=function(a){if(13===a.tag){var b=Oa(a,134217728);if(null!==b){var c=Z();xa(b,a,134217728,c)}Wf(a,134217728)}};var xj=function(a){if(13===a.tag){var b=hb(a),c=Oa(a,b);if(null!==c){var d=Z();xa(c,a,b,d)}Wf(a,b)}};var nl=function(){return z};var wj=function(a,b){var c=z;try{return z=a,b()}finally{z=c}};se=function(a,b,c){switch(b){case "input":le(a,
c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Rc(d);if(!e)throw Error(m(90));jg(d);le(d,e)}}}break;case "textarea":og(a,c);break;case "select":b=c.value,null!=b&&Db(a,!!c.multiple,b,!1)}};(function(a,b,c){xg=a;yg=c})(Tf,function(a,b,c,d,e){var f=z,g=ca.transition;try{return ca.transition=null,z=1,a(b,c,d,e)}finally{z=f,ca.transition=
g,0===p&&Hc()}},yb);var ol={usingClientEntryPoint:!1,Events:[ec,Ib,Rc,ug,vg,Tf]};(function(a){a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sa.ReactCurrentDispatcher,findHostInstanceByFiber:Xk,
findFiberByHostInstance:a.findFiberByHostInstance||Yk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1"};if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)a=!1;else{var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)a=!0;else{try{Uc=b.inject(a),Ca=b}catch(c){}a=b.checkDCE?!0:!1}}return a})({findFiberByHostInstance:ob,bundleType:0,version:"18.3.1-next-f1338f8080-20240426",
rendererPackageName:"react-dom"});Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ol;Q.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yf(b))throw Error(m(200));return Wk(a,b,null,c)};Q.createRoot=function(a,b){if(!Yf(a))throw Error(m(299));var c=!1,d="",e=aj;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=Vf(a,1,!1,null,null,
c,!1,d,e);a[Ja]=b.current;sc(8===a.nodeType?a.parentNode:a);return new Xf(b)};Q.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(m(188));a=Object.keys(a).join(",");throw Error(m(268,a));}a=Bg(b);a=null===a?null:a.stateNode;return a};Q.flushSync=function(a){return yb(a)};Q.hydrate=function(a,b,c){if(!Vd(b))throw Error(m(200));return Wd(null,a,b,!0,c)};Q.hydrateRoot=function(a,b,c){if(!Yf(a))throw Error(m(405));
var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=aj;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=Wi(b,null,a,1,null!=c?c:null,e,!1,f,g);a[Ja]=b.current;sc(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,e);return new Ud(b)};Q.render=
function(a,b,c){if(!Vd(b))throw Error(m(200));return Wd(null,a,b,!1,c)};Q.unmountComponentAtNode=function(a){if(!Vd(a))throw Error(m(40));return a._reactRootContainer?(yb(function(){Wd(null,null,a,!1,function(){a._reactRootContainer=null;a[Ja]=null})}),!0):!1};Q.unstable_batchedUpdates=Tf;Q.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!Vd(c))throw Error(m(200));if(null==a||void 0===a._reactInternals)throw Error(m(38));return Wd(a,b,c,!1,d)};Q.version="18.3.1-next-f1338f8080-20240426"});
})();

;
(function () {
  const React = window.React;
  const ReactDOM = window.ReactDOM;
  const {
    useState,
    useEffect,
    useRef,
    useCallback,
    useContext,
    createContext
  } = React;

  // --- src/services/avatarService.js ---
  // ==========================================
  // BULLETPROOF NETFLIX AVATAR SERVICE
  // Provides 100% reliable, zero-fail SVG avatars
  // ==========================================

  const AVATAR_OPTIONS = [{
    id: "avatar-alex",
    name: "Classic Red Smiley",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%23E50914"/><circle cx="34" cy="38" r="8" fill="%23FFFFFF"/><circle cx="66" cy="38" r="8" fill="%23FFFFFF"/><path d="M 28 62 Q 50 82 72 62" fill="none" stroke="%23FFFFFF" stroke-width="7" stroke-linecap="round"/></svg>`
  }, {
    id: "avatar-sarah",
    name: "Chic Violet Star",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%238338EC"/><circle cx="35" cy="40" r="7" fill="%23FFBE0B"/><circle cx="65" cy="40" r="7" fill="%23FFBE0B"/><path d="M 30 65 Q 50 80 70 65" fill="none" stroke="%23FFBE0B" stroke-width="6" stroke-linecap="round"/><polygon points="50,12 53,22 64,22 55,28 58,38 50,32 42,38 45,28 36,22 47,22" fill="%23FFBE0B"/></svg>`
  }, {
    id: "avatar-kids",
    name: "Kids Sunny Monster",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%233A86FF"/><circle cx="35" cy="36" r="10" fill="%23FFFFFF"/><circle cx="35" cy="36" r="5" fill="%23000000"/><circle cx="65" cy="36" r="10" fill="%23FFFFFF"/><circle cx="65" cy="36" r="5" fill="%23000000"/><path d="M 25 58 Q 50 85 75 58 Z" fill="%23FF006E"/><rect x="38" y="58" width="8" height="6" fill="%23FFFFFF" rx="1"/><rect x="54" y="58" width="8" height="6" fill="%23FFFFFF" rx="1"/></svg>`
  }, {
    id: "avatar-gamer",
    name: "Neon Gamer Green",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%2306D6A0"/><rect x="25" y="32" width="50" height="24" rx="6" fill="%23118AB2"/><circle cx="38" cy="44" r="5" fill="%23FFD166"/><circle cx="62" cy="44" r="5" fill="%23FFD166"/><path d="M 32 68 Q 50 78 68 68" fill="none" stroke="%23073B4C" stroke-width="5" stroke-linecap="round"/></svg>`
  }, {
    id: "avatar-hero",
    name: "Midnight Ninja",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%23111111"/><rect x="15" y="32" width="70" height="20" rx="4" fill="%23E50914"/><circle cx="36" cy="42" r="6" fill="%23FFFFFF"/><circle cx="64" cy="42" r="6" fill="%23FFFFFF"/><circle cx="36" cy="42" r="3" fill="%23111111"/><circle cx="64" cy="42" r="3" fill="%23111111"/><path d="M 35 72 L 65 72" stroke="%23E50914" stroke-width="4" stroke-linecap="round"/></svg>`
  }, {
    id: "avatar-pink",
    name: "Pink Anime Panda",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%23FF70A6"/><circle cx="32" cy="38" r="9" fill="%23FFFFFF"/><circle cx="32" cy="38" r="4.5" fill="%23FF006E"/><circle cx="68" cy="38" r="9" fill="%23FFFFFF"/><circle cx="68" cy="38" r="4.5" fill="%23FF006E"/><circle cx="20" cy="52" r="6" fill="%23FF9770" opacity="0.8"/><circle cx="80" cy="52" r="6" fill="%23FF9770" opacity="0.8"/><path d="M 38 62 Q 50 72 62 62" fill="none" stroke="%23FFFFFF" stroke-width="5" stroke-linecap="round"/></svg>`
  }];
  function getAvatarById(id) {
    const found = AVATAR_OPTIONS.find(a => a.id === id);
    return found ? found.svg : AVATAR_OPTIONS[0].svg;
  }

  // --- src/services/episodesData.js ---
  // ==========================================
  // TV SERIES SEASONS & EPISODES DATA
  // Realistic episode guides with thumbnails, durations, synopses
  // ==========================================

  const SERIES_EPISODES = {
    "squid-game": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Red Light, Green Light",
        duration: "60m",
        thumbnail: "https://images.unsplash.com/photo-1511875762315-c773eb98eec0?w=600&auto=format&fit=crop&q=80",
        description: "Hoping to win easy money, broke and desperate Gi-hun agrees to take part in an enigmatic game. Not long into the first round, unforeseen horrors unfold."
      }, {
        episodeNumber: 2,
        title: "Hell",
        duration: "63m",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        description: "Split on whether to continue or quit, the group holds a vote. But their realities outside prove to be just as unforgiving as the game."
      }, {
        episodeNumber: 3,
        title: "The Man with the Umbrella",
        duration: "54m",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
        description: "A few players enter the honeycomb round with hidden advantages. Meanwhile, Jun-ho sneaks his way inside the facility."
      }, {
        episodeNumber: 4,
        title: "Stick to the Team",
        duration: "52m",
        thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
        description: "As alliances form among the players, no one is safe in the dorm after lights out. The tug-of-war challenges the team to think strategically."
      }, {
        episodeNumber: 5,
        title: "A Fair World",
        duration: "51m",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
        description: "Gi-hun and his team take turns keeping watch through the night. The masked men face trouble with their co-conspirators."
      }, {
        episodeNumber: 6,
        title: "Gganbu",
        duration: "62m",
        thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",
        description: "Players pair off for the fourth game of marbles. Gi-hun grapples with a moral dilemma as tragic sacrifices are made."
      }]
    }, {
      seasonNumber: 2,
      seasonTitle: "Season 2",
      episodes: [{
        episodeNumber: 1,
        title: "Bread and Lottery",
        duration: "58m",
        thumbnail: "https://images.unsplash.com/photo-1511875762315-c773eb98eec0?w=600&auto=format&fit=crop&q=80",
        description: "Gi-hun abandons his plans to go to America after an ominous encounter, determined to stop the deadly organization once and for all."
      }, {
        episodeNumber: 2,
        title: "The Circle",
        duration: "55m",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        description: "Re-entering the arena as Player 456, Gi-hun attempts to warn new contestants of the gruesome realities of the games."
      }]
    }],
    "stranger-things": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Chapter One: The Vanishing of Will Byers",
        duration: "49m",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
        description: "On his way home, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab."
      }, {
        episodeNumber: 2,
        title: "Chapter Two: The Weirdo on Maple Street",
        duration: "56m",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        description: "Mike, Dustin and Lucas try to talk to the girl they found in the woods. Hopper questions Joyce about an unsettling phone call."
      }, {
        episodeNumber: 3,
        title: "Chapter Three: Holly, Jolly",
        duration: "52m",
        thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
        description: "Nancy looks for Barb and finds out what Jonathan has been doing. Joyce is convinced Will is speaking through the Christmas lights."
      }]
    }, {
      seasonNumber: 2,
      seasonTitle: "Season 2",
      episodes: [{
        episodeNumber: 1,
        title: "Chapter One: MADMAX",
        duration: "48m",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
        description: "As the town preps for Halloween, a high-scoring rival shakes things up at the arcade, and Hopper inspects a field of rotting pumpkins."
      }]
    }],
    "the-witcher": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "The End's Beginning",
        duration: "61m",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        description: "Hostile townsfolk greet Geralt in Blaviken. Princess Ciri finds her royal world upended when Nilfgaard attacks Cintra."
      }, {
        episodeNumber: 2,
        title: "Four Marks",
        duration: "61m",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
        description: "Bullied and neglected, Yennefer finds an unexpected means of escape. Geralt's hunt for a so-called devil goes wrong."
      }]
    }],
    "wednesday": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Wednesday's Child is Full of Woe",
        duration: "59m",
        thumbnail: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80",
        description: "When a delightfully wicked prank gets Wednesday expelled, her parents send her to Nevermore Academy boarding school."
      }, {
        episodeNumber: 2,
        title: "Woe is the Loneliest Number",
        duration: "48m",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        description: "The sheriff questions Wednesday about the forest attack. Wednesday competes in the cutthroat Poe Cup race."
      }]
    }],
    "the-vampire-diaries": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Pilot",
        duration: "44m",
        thumbnail: "assets/movie1.jpg",
        description: "High school student Elena is immediately drawn to Stefan Salvatore, unaware that he is a centuries-old vampire."
      }, {
        episodeNumber: 2,
        title: "Night of the Comet",
        duration: "42m",
        thumbnail: "assets/hero.jpg",
        description: "Mystic Falls prepares for a festival while Damon continues to torment Stefan and attempts to charm Elena."
      }]
    }],
    "queen-of-tears": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Episode 1",
        duration: "75m",
        thumbnail: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80",
        description: "Baek Hyun-woo and Hong Hae-in struggle through marital crisis three years after their wedding of the century."
      }, {
        episodeNumber: 2,
        title: "Episode 2",
        duration: "78m",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        description: "Hyun-woo begins to see Hae-in in a new light following an unexpected medical revelation."
      }]
    }],
    "crash-landing-on-you": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Episode 1",
        duration: "70m",
        thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
        description: "A paragliding mishap drops a South Korean heiress into North Korea and into the life of an army officer who decides to hide her."
      }, {
        episodeNumber: 2,
        title: "Episode 2",
        duration: "74m",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
        description: "Jeong Hyeok and his loyal soldiers scramble to find a safe way to sneak Se-ri back across the border without raising suspicion."
      }]
    }],
    "money-heist": [{
      seasonNumber: 1,
      seasonTitle: "Part 1",
      episodes: [{
        episodeNumber: 1,
        title: "Do as Planned",
        duration: "47m",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
        description: "The Professor recruits a young female robber and seven other criminals for a grand heist targeting the Royal Mint of Spain."
      }, {
        episodeNumber: 2,
        title: "Lethal Negligence",
        duration: "42m",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
        description: "Hostage negotiator Raquel Murillo makes initial contact with The Professor as Tokyo and Denver face emergency protocol."
      }]
    }],
    "peaky-blinders": [{
      seasonNumber: 1,
      seasonTitle: "Series 1",
      episodes: [{
        episodeNumber: 1,
        title: "Episode 1",
        duration: "57m",
        thumbnail: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop&q=80",
        description: "In 1919 Birmingham, Thomas Shelby leads the Peaky Blinders gang and intercepts a consignment of stolen military guns."
      }]
    }],
    "all-of-us-are-dead": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Episode 1",
        duration: "66m",
        thumbnail: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80",
        description: "Inside the science lab at Hyosan High, a student suffers a mysterious bite, unleashing a fast-spreading contagion across the school."
      }]
    }],
    "bridgerton": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Diamond of the First Water",
        duration: "58m",
        thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        description: "Daphne makes her debut on London's marriage mart while Lady Whistledown's scandalous newsletter stirs Mayfair."
      }]
    }],
    "pokemon-concierge": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "I'm Haru, the New Concierge!",
        duration: "15m",
        thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80",
        description: "Haru arrives at Pokémon Resort seeking peace and begins her training to care for delightful Pokémon guests."
      }, {
        episodeNumber: 2,
        title: "What's on Your Mind, Psyduck?",
        duration: "17m",
        thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80",
        description: "Haru tries to comfort a distressed Psyduck suffering from recurring psychic headaches."
      }]
    }]
  };

  // --- src/services/movieService.js ---
  // ==========================================
  // NETFLIX MOVIE & SHOW DATA SERVICE
  // Comprehensive TMDB-quality catalog with rich metadata
  // ==========================================

  const ALL_MOVIES = [
  // --- TV SERIES ---
  {
    id: "stranger-things",
    title: "Stranger Things",
    type: "series",
    poster: "assets/movie3.jpg",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
    rating: "8.7",
    year: "2016",
    match: "99% Match",
    maturity: "TV-14",
    duration: "4 Seasons",
    quality: "4K Ultra HD",
    genres: ["Sci-Fi", "Mystery", "Drama", "Horror"],
    isKidFriendly: false,
    rank: 1,
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour", "Winona Ryder"],
    creator: "The Duffer Brothers",
    trailerUrl: "https://www.youtube-nocookie.com/embed/b9EkMc79ZSU",
    tags: ["80s Nostalgia", "Upside Down", "Supernatural", "Sci-Fi Thriller"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Popular on Netflix", "Top Rated", "Sci-Fi Movies", "Netflix Originals", "Top 10 Shows"],
    seasons: SERIES_EPISODES["stranger-things"] || []
  }, {
    id: "squid-game",
    title: "Squid Game",
    type: "series",
    poster: "assets/movie4.jpg",
    backdrop: "https://images.unsplash.com/photo-1511875762315-c773eb98eec0?w=1600&auto=format&fit=crop&q=80",
    rating: "8.0",
    year: "2021",
    match: "98% Match",
    maturity: "TV-MA",
    duration: "2 Seasons",
    quality: "4K Ultra HD",
    genres: ["Thriller", "Drama", "Mystery", "Action"],
    isKidFriendly: false,
    rank: 2,
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon", "Jung Ho-yeon"],
    creator: "Hwang Dong-hyuk",
    trailerUrl: "https://www.youtube-nocookie.com/embed/oqxAJKy0ii4",
    tags: ["Dystopian", "Psychological", "Intense", "Suspenseful"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Popular on Netflix", "Netflix Originals", "Action Movies", "Top 10 Shows", "Korean Shows", "Thriller Movies"],
    seasons: SERIES_EPISODES["squid-game"] || []
  }, {
    id: "wednesday",
    title: "Wednesday",
    type: "series",
    poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "8.1",
    year: "2022",
    match: "98% Match",
    maturity: "TV-14",
    duration: "1 Season",
    quality: "4K Ultra HD",
    genres: ["Comedy", "Fantasy", "Mystery", "Horror"],
    isKidFriendly: false,
    rank: 3,
    description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    cast: ["Jenna Ortega", "Gwendoline Christie", "Riki Lindhome", "Christina Ricci"],
    creator: "Alfred Gough, Miles Millar, Tim Burton",
    trailerUrl: "https://www.youtube-nocookie.com/embed/Di310BC8064",
    tags: ["Dark Comedy", "Gothic", "Mystery", "School Life"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Netflix Originals", "Comedy Movies", "Popular on Netflix", "Top 10 Shows"],
    seasons: SERIES_EPISODES["wednesday"] || []
  }, {
    id: "queen-of-tears",
    title: "Queen of Tears",
    type: "series",
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&auto=format&fit=crop&q=80",
    rating: "8.4",
    year: "2024",
    match: "99% Match",
    maturity: "TV-14",
    duration: "1 Season",
    quality: "4K Ultra HD",
    genres: ["Romance", "Drama", "Comedy"],
    isKidFriendly: false,
    rank: 4,
    description: "The queen of department stores and her small-town husband weather a marital crisis until love miraculously begins to bloom again.",
    cast: ["Kim Soo-hyun", "Kim Ji-won", "Park Sung-hoon", "Kwak Dong-yeon"],
    creator: "Park Ji-eun, Jang Young-woo",
    trailerUrl: "https://www.youtube-nocookie.com/embed/3u38uK9rT_8",
    tags: ["K-Drama", "Emotional", "Romantic", "Billionaire Heir"],
    category: ["Top 10 in Streaming Today", "Popular on Netflix", "Korean Shows", "Romantic Favorites", "Trending Now", "Top 10 Shows"],
    seasons: SERIES_EPISODES["queen-of-tears"] || []
  }, {
    id: "the-witcher",
    title: "The Witcher",
    type: "series",
    poster: "assets/movie2.jpg",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "8.0",
    year: "2019",
    match: "95% Match",
    maturity: "TV-MA",
    duration: "3 Seasons",
    quality: "4K Ultra HD",
    genres: ["Fantasy", "Action", "Drama", "Adventure"],
    isKidFriendly: false,
    rank: 5,
    description: "Geralt of Rivia, a mutated monster hunter, struggles to find his place in a dangerous world filled with monsters and magic.",
    cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan", "Joey Batey"],
    creator: "Lauren Schmidt Hissrich",
    trailerUrl: "https://www.youtube-nocookie.com/embed/ndl1W4ltcmg",
    tags: ["Epic Fantasy", "Sword & Sorcery", "Gritty", "Dark"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Action Movies", "Netflix Originals", "Sci-Fi Movies", "Top 10 Shows"],
    seasons: SERIES_EPISODES["the-witcher"] || []
  }, {
    id: "the-vampire-diaries",
    title: "The Vampire Diaries",
    type: "series",
    poster: "assets/movie1.jpg",
    backdrop: "assets/hero.jpg",
    rating: "8.0",
    year: "2009",
    match: "97% Match",
    maturity: "TV-14",
    duration: "8 Seasons",
    quality: "HD",
    genres: ["Drama", "Fantasy", "Romance", "Horror"],
    isKidFriendly: false,
    rank: 6,
    description: "The story follows Elena Gilbert and the mysterious Salvatore brothers as supernatural events unfold in Mystic Falls.",
    cast: ["Nina Dobrev", "Paul Wesley", "Ian Somerhalder", "Kat Graham"],
    creator: "Julie Plec, Kevin Williamson",
    trailerUrl: "https://www.youtube-nocookie.com/embed/BmVmhjjkN4E",
    tags: ["Supernatural", "Vampires", "Binge-Worthy", "Teen Romance"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Popular on Netflix", "Top Rated", "Horror Movies", "Romantic Favorites"],
    seasons: SERIES_EPISODES["the-vampire-diaries"] || []
  }, {
    id: "money-heist",
    title: "Money Heist (La Casa de Papel)",
    type: "series",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&auto=format&fit=crop&q=80",
    rating: "8.2",
    year: "2017",
    match: "99% Match",
    maturity: "TV-MA",
    duration: "5 Parts",
    quality: "4K Ultra HD",
    genres: ["Crime", "Thriller", "Drama", "Action"],
    isKidFriendly: false,
    rank: 7,
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    cast: ["Álvaro Morte", "Úrsula Corberó", "Pedro Alonso", "Itziar Ituño"],
    creator: "Álex Pina",
    trailerUrl: "https://www.youtube-nocookie.com/embed/_InqQJRqGW4",
    tags: ["Mastermind Heist", "Red Jumpsuits", "Suspense", "Spanish"],
    category: ["Top 10 in Streaming Today", "Popular on Netflix", "Action Movies", "Thriller Movies", "Netflix Originals"],
    seasons: SERIES_EPISODES["money-heist"] || []
  }, {
    id: "crash-landing-on-you",
    title: "Crash Landing on You",
    type: "series",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "8.7",
    year: "2019",
    match: "98% Match",
    maturity: "TV-14",
    duration: "1 Season",
    quality: "HD",
    genres: ["Romance", "Comedy", "Drama"],
    isKidFriendly: false,
    rank: 8,
    description: "A paragliding mishap drops a South Korean heiress into North Korea and into the life of an army officer, who decides he will help her hide.",
    cast: ["Hyun Bin", "Son Ye-jin", "Seo Ji-hye", "Kim Jung-hyun"],
    creator: "Park Ji-eun",
    trailerUrl: "https://www.youtube-nocookie.com/embed/eXMjTXL2Vks",
    tags: ["K-Drama", "Epic Romance", "Cross Border", "Charming"],
    category: ["Top 10 in Streaming Today", "Korean Shows", "Romantic Favorites", "Popular on Netflix", "Top Rated"],
    seasons: SERIES_EPISODES["crash-landing-on-you"] || []
  }, {
    id: "peaky-blinders",
    title: "Peaky Blinders",
    type: "series",
    poster: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "8.8",
    year: "2013",
    match: "98% Match",
    maturity: "TV-MA",
    duration: "6 Seasons",
    quality: "4K Ultra HD",
    genres: ["Crime", "Drama", "History"],
    isKidFriendly: false,
    rank: 9,
    description: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
    cast: ["Cillian Murphy", "Paul Anderson", "Helen McCrory", "Tom Hardy"],
    creator: "Steven Knight",
    trailerUrl: "https://www.youtube-nocookie.com/embed/oVzVdvGIC7U",
    tags: ["Period Piece", "Mastermind", "Gritty Crime", "Iconic"],
    category: ["Top 10 in Streaming Today", "Top Rated", "Popular on Netflix", "Drama Movies"],
    seasons: SERIES_EPISODES["peaky-blinders"] || []
  }, {
    id: "all-of-us-are-dead",
    title: "All of Us Are Dead",
    type: "series",
    poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "7.5",
    year: "2022",
    match: "96% Match",
    maturity: "TV-MA",
    duration: "1 Season",
    quality: "4K Ultra HD",
    genres: ["Horror", "Action", "Drama", "Sci-Fi"],
    isKidFriendly: false,
    rank: 10,
    description: "A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected.",
    cast: ["Park Ji-hu", "Yoon Chan-young", "Cho Yi-hyun", "Lomon"],
    creator: "Chun Sung-il, Lee JQ",
    trailerUrl: "https://www.youtube-nocookie.com/embed/IN5TD4VRcZU",
    tags: ["Zombies", "High School Survival", "Gory", "Korean Thriller"],
    category: ["Top 10 in Streaming Today", "Korean Shows", "Horror Movies", "Action Movies", "Netflix Originals"],
    seasons: SERIES_EPISODES["all-of-us-are-dead"] || []
  }, {
    id: "bridgerton",
    title: "Bridgerton",
    type: "series",
    poster: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1600&auto=format&fit=crop&q=80",
    rating: "7.4",
    year: "2020",
    match: "95% Match",
    maturity: "TV-MA",
    duration: "3 Seasons",
    quality: "4K Ultra HD",
    genres: ["Romance", "Drama", "Period"],
    isKidFriendly: false,
    description: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society. Inspired by Julia Quinn's bestselling novels.",
    cast: ["Nicola Coughlan", "Luke Newton", "Jonathan Bailey", "Simone Ashley"],
    creator: "Chris Van Dusen",
    trailerUrl: "https://www.youtube-nocookie.com/embed/gpv7ayf_tyE",
    tags: ["Romantic", "Lavish", "Society Gossip", "Charming"],
    category: ["Popular on Netflix", "Netflix Originals", "Romantic Favorites", "Drama Movies"],
    seasons: SERIES_EPISODES["bridgerton"] || []
  },
  // --- MOVIES & INDIAN BLOCKBUSTERS ---
  {
    id: "rrr",
    title: "RRR",
    type: "movie",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "7.8",
    year: "2022",
    match: "99% Match",
    maturity: "TV-MA",
    duration: "3h 7m",
    quality: "4K Ultra HD",
    genres: ["Action", "Drama", "History"],
    isKidFriendly: false,
    description: "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
    cast: ["N.T. Rama Rao Jr.", "Ram Charan", "Ajay Devgn", "Alia Bhatt"],
    creator: "S.S. Rajamouli",
    trailerUrl: "https://www.youtube-nocookie.com/embed/GY4BgdUSpbE",
    tags: ["Epic Action", "Indian Cinema", "Bromance", "Oscar Winner"],
    category: ["Top 10 Movies", "Indian Movies", "Action Movies", "Top Rated", "Trending Now"]
  }, {
    id: "jawan",
    title: "Jawan",
    type: "movie",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
    rating: "7.0",
    year: "2023",
    match: "97% Match",
    maturity: "TV-MA",
    duration: "2h 49m",
    quality: "4K Ultra HD",
    genres: ["Action", "Thriller"],
    isKidFriendly: false,
    description: "A high-stakes action thriller about a man who is set out to correct the wrongs in society with a team of skilled women, while confronting a monstrous arms dealer.",
    cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi", "Deepika Padukone"],
    creator: "Atlee",
    trailerUrl: "https://www.youtube-nocookie.com/embed/COv52Qyctws",
    tags: ["Bollywood", "Shah Rukh Khan", "High Voltage", "Mass Action"],
    category: ["Top 10 Movies", "Indian Movies", "Action Movies", "Trending Now"]
  }, {
    id: "interstellar",
    title: "Interstellar",
    type: "movie",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600&auto=format&fit=crop&q=80",
    rating: "8.7",
    year: "2014",
    match: "99% Match",
    maturity: "PG-13",
    duration: "2h 49m",
    quality: "4K Ultra HD",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    isKidFriendly: false,
    description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft along with a team of researchers to find a new planet for humans.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    creator: "Christopher Nolan",
    trailerUrl: "https://www.youtube-nocookie.com/embed/zSWdZVtXT7E",
    tags: ["Mind-Bending", "Space Exploration", "Emotional", "Cinematic Masterpiece"],
    category: ["Top 10 Movies", "Sci-Fi Movies", "Top Rated", "Trending Now"]
  }, {
    id: "glass-onion",
    title: "Glass Onion: A Knives Out Mystery",
    type: "movie",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1600&auto=format&fit=crop&q=80",
    rating: "7.2",
    year: "2022",
    match: "94% Match",
    maturity: "PG-13",
    duration: "2h 19m",
    quality: "4K Ultra HD",
    genres: ["Comedy", "Mystery", "Drama", "Crime"],
    isKidFriendly: false,
    description: "Famed Southern detective Benoit Blanc travels to Greece for his latest case, peeling back the layers of a mystery involving an eccentric tech billionaire.",
    cast: ["Daniel Craig", "Edward Norton", "Janelle Monáe", "Kathryn Hahn"],
    creator: "Rian Johnson",
    trailerUrl: "https://www.youtube-nocookie.com/embed/gj5ibYSz8C0",
    tags: ["Whodunit", "Witty", "Ensemble Cast", "Clever"],
    category: ["Comedy Movies", "Popular on Netflix", "Netflix Originals", "Top 10 Movies"]
  }, {
    id: "extraction-2",
    title: "Extraction 2",
    type: "movie",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
    rating: "7.0",
    year: "2023",
    match: "93% Match",
    maturity: "R",
    duration: "2h 3m",
    quality: "4K Ultra HD",
    genres: ["Action", "Thriller"],
    isKidFriendly: false,
    description: "Back from the brink of death, highly skilled commando Tyler Rake takes on another dangerous mission: saving the imprisoned family of a ruthless gangster.",
    cast: ["Chris Hemsworth", "Golshifteh Farahani", "Tornike Gogrichiani", "Idris Elba"],
    creator: "Sam Hargrave, Joe Russo",
    trailerUrl: "https://www.youtube-nocookie.com/embed/Y274jZs5s7s",
    tags: ["Adrenaline Rush", "Martial Arts", "Gritty Action", "Explosive"],
    category: ["Action Movies", "Trending Now", "Netflix Originals", "Top 10 Movies"]
  }, {
    id: "cyberpunk-edgerunners",
    title: "Cyberpunk: Edgerunners",
    type: "series",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&auto=format&fit=crop&q=80",
    rating: "8.3",
    year: "2022",
    match: "99% Match",
    maturity: "TV-MA",
    duration: "1 Season",
    quality: "4K Ultra HD",
    genres: ["Sci-Fi", "Action", "Anime"],
    isKidFriendly: false,
    description: "In a dystopian city riddled with corruption and cybernetic implants, a talented street kid strives to become an outlaw mercenary.",
    cast: ["KENN", "Aoi Yuuki", "Hiroki Touchi", "Zach Aguilar"],
    creator: "Rafal Jaki, Studio Trigger",
    trailerUrl: "https://www.youtube-nocookie.com/embed/JtqIas3bYhg",
    tags: ["High Octane", "Cyberpunk", "Anime", "Visually Striking"],
    category: ["Action Movies", "Sci-Fi Movies", "Top Rated", "Netflix Originals"]
  },
  // --- KIDS & FAMILY FRIENDLY TITLES (100% G/PG KID-SAFE) ---
  {
    id: "super-mario-bros",
    title: "The Super Mario Bros. Movie",
    type: "movie",
    poster: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&auto=format&fit=crop&q=80",
    rating: "7.1",
    year: "2023",
    match: "98% Match",
    maturity: "PG",
    duration: "1h 32m",
    quality: "4K Ultra HD",
    genres: ["Animation", "Adventure", "Comedy", "Family"],
    isKidFriendly: true,
    rank: 1,
    description: "A Brooklyn plumber named Mario travels through the Mushroom Kingdom with a princess named Peach and an anthropomorphic mushroom named Toad to find Mario's brother, Luigi.",
    cast: ["Chris Pratt", "Anya Taylor-Joy", "Charlie Day", "Jack Black"],
    creator: "Aaron Horvath, Michael Jelenic",
    trailerUrl: "https://www.youtube-nocookie.com/embed/TnGl01FkMMo",
    tags: ["Video Game", "Colorful", "Fun", "Mushroom Kingdom"],
    category: ["Popular Kids Shows", "Animated Adventures", "Family Movie Night", "Cartoons & Fun", "Action Heroes for Kids"]
  }, {
    id: "kung-fu-panda-4",
    title: "Kung Fu Panda 4",
    type: "movie",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "7.0",
    year: "2024",
    match: "96% Match",
    maturity: "PG",
    duration: "1h 34m",
    quality: "4K Ultra HD",
    genres: ["Animation", "Action", "Comedy", "Family"],
    isKidFriendly: true,
    rank: 2,
    description: "Po must train a new warrior when he's chosen to become the spiritual leader of the Valley of Peace. However, a powerful shape-shifting sorceress sets her eyes on his Staff of Wisdom.",
    cast: ["Jack Black", "Awkwafina", "Viola Davis", "Dustin Hoffman"],
    creator: "Mike Mitchell",
    trailerUrl: "https://www.youtube-nocookie.com/embed/_inKs4eeHiI",
    tags: ["Martial Arts", "Dragon Warrior", "Hilarious", "Animal Heroes"],
    category: ["Popular Kids Shows", "Animated Adventures", "Action Heroes for Kids", "Cartoons & Fun"]
  }, {
    id: "spider-man-across-spiderverse",
    title: "Spider-Man: Across the Spider-Verse",
    type: "movie",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1600&auto=format&fit=crop&q=80",
    rating: "8.7",
    year: "2023",
    match: "99% Match",
    maturity: "PG",
    duration: "2h 20m",
    quality: "4K Ultra HD",
    genres: ["Animation", "Action", "Adventure", "Family"],
    isKidFriendly: true,
    rank: 3,
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac", "Daniel Kaluuya"],
    creator: "Joaquim Dos Santos, Kemp Powers",
    trailerUrl: "https://www.youtube-nocookie.com/embed/cqGjhVJWtEg",
    tags: ["Multiverse", "Spider-Man", "Stunning Animation", "Superheroes"],
    category: ["Popular Kids Shows", "Animated Adventures", "Action Heroes for Kids", "Family Movie Night", "Top Rated"]
  }, {
    id: "frozen-2",
    title: "Frozen 2",
    type: "movie",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&auto=format&fit=crop&q=80",
    rating: "7.0",
    year: "2019",
    match: "95% Match",
    maturity: "PG",
    duration: "1h 43m",
    quality: "4K Ultra HD",
    genres: ["Animation", "Adventure", "Comedy", "Family"],
    isKidFriendly: true,
    rank: 4,
    description: "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land to find the origin of Elsa's magical powers.",
    cast: ["Kristen Bell", "Idina Menzel", "Josh Gad", "Jonathan Groff"],
    creator: "Chris Buck, Jennifer Lee",
    trailerUrl: "https://www.youtube-nocookie.com/embed/Zi4LMpSD3nk",
    tags: ["Magic Ice", "Songs", "Sisters", "Enchanted"],
    category: ["Animated Adventures", "Family Movie Night", "Popular Kids Shows"]
  }, {
    id: "pokemon-concierge",
    title: "Pokémon Concierge",
    type: "series",
    poster: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
    rating: "7.6",
    year: "2023",
    match: "97% Match",
    maturity: "TV-Y",
    duration: "1 Season",
    quality: "4K Ultra HD",
    genres: ["Animation", "Comedy", "Family"],
    isKidFriendly: true,
    rank: 5,
    description: "Welcome to Pokémon Resort, a peaceful getaway for Pokémon to relax and have fun. Which adorable guest will newly arrived concierge Haru attend to next?",
    cast: ["Non", "Fairouz Ai", "Eita Okuno", "Yoshiko Takemura"],
    creator: "Iku Ogawa",
    trailerUrl: "https://www.youtube-nocookie.com/embed/69L2jR9YtY8",
    tags: ["Stop Motion", "Cute Pokémon", "Feel Good", "Psyduck"],
    category: ["Cartoons & Fun", "Popular Kids Shows", "Animated Adventures"],
    seasons: SERIES_EPISODES["pokemon-concierge"] || []
  }];

  // Profile configuration with 100% reliable SVG avatars
  const PROFILES_CONFIG = [{
    id: "profile-alex",
    name: "Alex",
    avatar: AVATAR_OPTIONS[0].svg,
    color: "#E50914",
    isKids: false,
    preferredGenres: ["Sci-Fi", "Action", "Horror", "Crime", "Mystery"],
    bio: "Main Profile - Enjoys Sci-Fi, Dark Thrillers, Action & Originals",
    initialContinueWatching: [{
      movieId: "stranger-things",
      progressPercent: 65,
      durationMinutes: 52,
      watchedMinutes: 34
    }, {
      movieId: "the-witcher",
      progressPercent: 30,
      durationMinutes: 60,
      watchedMinutes: 18
    }],
    initialMyList: ["the-vampire-diaries", "squid-game", "cyberpunk-edgerunners", "interstellar", "rrr"]
  }, {
    id: "profile-sarah",
    name: "Sarah",
    avatar: AVATAR_OPTIONS[1].svg,
    color: "#8338EC",
    isKids: false,
    preferredGenres: ["Romance", "Comedy", "Drama", "Mystery"],
    bio: "Second Profile - Enjoys Drama, Romantic Comedies, Whodunits & K-Dramas",
    initialContinueWatching: [{
      movieId: "queen-of-tears",
      progressPercent: 50,
      durationMinutes: 75,
      watchedMinutes: 38
    }, {
      movieId: "bridgerton",
      progressPercent: 42,
      durationMinutes: 58,
      watchedMinutes: 24
    }],
    initialMyList: ["queen-of-tears", "crash-landing-on-you", "wednesday", "bridgerton"]
  }, {
    id: "profile-kids",
    name: "Kids",
    avatar: AVATAR_OPTIONS[2].svg,
    color: "#3A86FF",
    isKids: true,
    preferredGenres: ["Animation", "Family", "Adventure", "Comedy"],
    bio: "Kids Profile - Strictly G/PG animated adventures, cartoons and family movies",
    initialContinueWatching: [{
      movieId: "kung-fu-panda-4",
      progressPercent: 55,
      durationMinutes: 94,
      watchedMinutes: 52
    }, {
      movieId: "frozen-2",
      progressPercent: 75,
      durationMinutes: 103,
      watchedMinutes: 77
    }],
    initialMyList: ["super-mario-bros", "pokemon-concierge", "spider-man-across-spiderverse"]
  }];

  // Helper to get movies filtered for active profile
  function getMoviesForProfile(profile) {
    if (!profile) return ALL_MOVIES;
    if (profile.isKids) {
      return ALL_MOVIES.filter(m => m.isKidFriendly);
    }
    return ALL_MOVIES;
  }

  // Generate dynamically ranked "More Like This" recommendations
  function getSimilarMovies(movie, profile) {
    if (!movie) return [];
    const availableMovies = getMoviesForProfile(profile);
    const candidates = availableMovies.filter(m => m.id !== movie.id);
    const scored = candidates.map(candidate => {
      let score = 0;
      // Genre match
      if (movie.genres && candidate.genres) {
        const commonGenres = candidate.genres.filter(g => movie.genres.includes(g));
        score += commonGenres.length * 4;
      }
      // Tag match
      if (movie.tags && candidate.tags) {
        const commonTags = candidate.tags.filter(t => movie.tags.includes(t));
        score += commonTags.length * 3;
      }
      // Same type (series vs movie)
      if (movie.type === candidate.type) {
        score += 2;
      }
      // Same category
      if (movie.category && candidate.category) {
        const commonCategories = candidate.category.filter(c => movie.category.includes(c));
        score += commonCategories.length * 2;
      }
      // Rating boost
      score += (parseFloat(candidate.rating) || 7.0) * 0.5;
      return {
        movie: candidate,
        score
      };
    });
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 6).map(s => s.movie);
  }

  // Get Top 10 items for row
  function getTop10ForProfile(profile) {
    const movies = getMoviesForProfile(profile);
    return movies.filter(m => m.category && m.category.includes("Top 10 in Streaming Today")).slice(0, 10);
  }

  // Generate rows dynamically based on the active profile
  function getCategoriesForProfile(profile) {
    const isKids = profile && profile.isKids;
    if (isKids) {
      return [{
        id: "popular-kids",
        title: "Popular Kids Shows",
        filter: m => m.isKidFriendly && m.category.includes("Popular Kids Shows")
      }, {
        id: "animated-adventures",
        title: "Animated Adventures",
        filter: m => m.isKidFriendly && m.genres.includes("Animation")
      }, {
        id: "family-movie-night",
        title: "Family Movie Night",
        filter: m => m.isKidFriendly && m.genres.includes("Family")
      }, {
        id: "action-heroes-kids",
        title: "Action Heroes for Kids",
        filter: m => m.isKidFriendly && m.genres.includes("Action")
      }, {
        id: "cartoons-fun",
        title: "Cartoons & Fun",
        filter: m => m.isKidFriendly && m.genres.includes("Comedy")
      }];
    }
    const preferredGenres = profile && profile.preferredGenres || ["Action", "Sci-Fi"];
    return [{
      id: "recommended-for-you",
      title: "Recommended for " + (profile ? profile.name : "You"),
      filter: m => !m.isKidFriendly && m.genres.some(g => preferredGenres.includes(g))
    }, {
      id: "trending-now",
      title: "Trending Now",
      filter: m => m.category.includes("Trending Now")
    }, {
      id: "popular-netflix",
      title: "Popular on Netflix",
      filter: m => m.category.includes("Popular on Netflix")
    }, {
      id: "netflix-originals",
      title: "Netflix Originals",
      filter: m => m.category.includes("Netflix Originals")
    }, {
      id: "korean-shows",
      title: "Korean Dramas & Series",
      filter: m => m.category.includes("Korean Shows")
    }, {
      id: "indian-movies",
      title: "Indian Blockbusters",
      filter: m => m.category.includes("Indian Movies")
    }, {
      id: "action-movies",
      title: "Action & Adventure",
      filter: m => m.genres.includes("Action") && !m.isKidFriendly
    }, {
      id: "comedy-movies",
      title: "Comedy Hits",
      filter: m => m.genres.includes("Comedy")
    }, {
      id: "romantic-favorites",
      title: "Romantic Favorites",
      filter: m => m.genres.includes("Romance") && !m.isKidFriendly
    }, {
      id: "scifi-movies",
      title: "Sci-Fi & Fantasy",
      filter: m => (m.genres.includes("Sci-Fi") || m.genres.includes("Fantasy")) && !m.isKidFriendly
    }, {
      id: "horror-movies",
      title: "Horror & Suspense",
      filter: m => m.genres.includes("Horror") || m.genres.includes("Thriller")
    }, {
      id: "top-rated",
      title: "Top Rated",
      filter: m => m.category.includes("Top Rated")
    }];
  }

  // Search across titles, genres, actors, tags
  function searchMovies(query, profile) {
    if (!query || !query.trim()) return [];
    const q = query.toLowerCase().trim();
    const availableMovies = getMoviesForProfile(profile);
    return availableMovies.filter(m => {
      const inTitle = m.title.toLowerCase().includes(q);
      const inGenres = m.genres.some(g => g.toLowerCase().includes(q));
      const inCast = m.cast ? m.cast.some(c => c.toLowerCase().includes(q)) : false;
      const inTags = m.tags ? m.tags.some(t => t.toLowerCase().includes(q)) : false;
      const inDesc = m.description.toLowerCase().includes(q);
      return inTitle || inGenres || inCast || inTags || inDesc;
    });
  }

  // --- src/services/audioService.js ---
  // ==========================================
  // TUDUM CINEMATIC AUDIO SYNTHESIZER
  // Uses Web Audio API for zero-latency, 100% reliable Netflix sound
  // ==========================================

  class TudumAudioService {
    constructor() {
      this.ctx = null;
    }
    getAudioContext() {
      if (!this.ctx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
        }
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume().catch(() => {});
      }
      return this.ctx;
    }
    playTudum() {
      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime + 0.05;

        // Master gain for warmth and headroom
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.85, now);
        masterGain.connect(ctx.destination);

        // Lowpass filter for cinematic warmth
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, now);
        filter.frequency.exponentialRampToValueAtTime(120, now + 2.2);
        filter.connect(masterGain);

        // --- 1. First "TU" Punch (Deep Sub Thud) ---
        const oscTu = ctx.createOscillator();
        const gainTu = ctx.createGain();
        oscTu.type = "sine";
        oscTu.frequency.setValueAtTime(80, now);
        oscTu.frequency.exponentialRampToValueAtTime(38, now + 0.18);
        gainTu.gain.setValueAtTime(0.9, now);
        gainTu.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        oscTu.connect(gainTu);
        gainTu.connect(filter);
        oscTu.start(now);
        oscTu.stop(now + 0.25);

        // --- 2. Heavy Cinematic "DUMMM..." Impact (Second Hit at +0.18s) ---
        const dumTime = now + 0.16;

        // Deep Sub Bass
        const oscDumSub = ctx.createOscillator();
        const gainDumSub = ctx.createGain();
        oscDumSub.type = "triangle";
        oscDumSub.frequency.setValueAtTime(65, dumTime);
        oscDumSub.frequency.exponentialRampToValueAtTime(32, dumTime + 1.8);
        gainDumSub.gain.setValueAtTime(0.95, dumTime);
        gainDumSub.gain.exponentialRampToValueAtTime(0.001, dumTime + 2.0);
        oscDumSub.connect(gainDumSub);
        gainDumSub.connect(filter);
        oscDumSub.start(dumTime);
        oscDumSub.stop(dumTime + 2.1);

        // Resonant Synth Body (D Minor chord tones: D2, A2, D3, F3)
        const frequencies = [73.42, 110.00, 146.83, 174.61];
        frequencies.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = idx % 2 === 0 ? "sawtooth" : "triangle";
          osc.frequency.setValueAtTime(freq, dumTime);
          osc.frequency.exponentialRampToValueAtTime(freq * 0.98, dumTime + 2.0);
          const initialVol = 0.28 / (idx + 1);
          gain.gain.setValueAtTime(initialVol, dumTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, dumTime + 2.2);
          osc.connect(gain);
          gain.connect(filter);
          osc.start(dumTime);
          osc.stop(dumTime + 2.3);
        });

        // Metallic Sheen / Ribbon Texture
        const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.4, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < noiseBuffer.length; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.05;
        }
        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = "bandpass";
        noiseFilter.frequency.setValueAtTime(1200, dumTime);
        noiseFilter.Q.setValueAtTime(3, dumTime);
        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.2, dumTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, dumTime + 0.35);
        whiteNoise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(masterGain);
        whiteNoise.start(dumTime);
        whiteNoise.stop(dumTime + 0.4);
      } catch (e) {
        console.warn("Audio autoplay blocked or unsupported:", e);
      }
    }
  }
  const tudumAudio = new TudumAudioService();

  // --- src/services/storageService.js ---
  // ==========================================
  // MULTI-PROFILE NAMESPACED STORAGE SERVICE
  // Provides genuine data isolation & plan persistence
  // ==========================================

  const PREFIX = "netflix_clone_v2";
  const SUBSCRIPTION_PLANS = [{
    id: "mobile",
    name: "Mobile",
    price: "₹149",
    pricePeriod: "/month",
    resolution: "480p (SD)",
    videoQuality: "Fair",
    devices: ["Phone", "Tablet"],
    screens: 1,
    downloads: "1 device",
    badge: ""
  }, {
    id: "basic",
    name: "Basic",
    price: "₹199",
    pricePeriod: "/month",
    resolution: "720p (HD)",
    videoQuality: "Good",
    devices: ["Phone", "Tablet", "Computer", "TV"],
    screens: 1,
    downloads: "1 device",
    badge: ""
  }, {
    id: "standard",
    name: "Standard",
    price: "₹499",
    pricePeriod: "/month",
    resolution: "1080p (Full HD)",
    videoQuality: "Great",
    devices: ["Phone", "Tablet", "Computer", "TV"],
    screens: 2,
    downloads: "2 devices",
    badge: "Popular"
  }, {
    id: "premium",
    name: "Premium",
    price: "₹649",
    pricePeriod: "/month",
    resolution: "4K (Ultra HD) + HDR",
    videoQuality: "Best",
    devices: ["Phone", "Tablet", "Computer", "TV"],
    screens: 4,
    downloads: "6 devices",
    badge: "Ultra HD + Spatial Audio"
  }];
  const StorageService = {
    // --- Profiles Management ---
    getProfiles() {
      try {
        const stored = localStorage.getItem(`${PREFIX}_profiles`);
        if (stored) {
          return JSON.parse(stored);
        }
      } catch (e) {
        console.error("Failed to read profiles from localStorage:", e);
      }
      this.saveProfiles(PROFILES_CONFIG);
      return PROFILES_CONFIG;
    },
    saveProfiles(profiles) {
      try {
        localStorage.setItem(`${PREFIX}_profiles`, JSON.stringify(profiles));
      } catch (e) {
        console.error("Failed to save profiles:", e);
      }
    },
    updateProfile(profileId, updates) {
      const profiles = this.getProfiles();
      const index = profiles.findIndex(p => p.id === profileId);
      if (index >= 0) {
        profiles[index] = {
          ...profiles[index],
          ...updates
        };
        this.saveProfiles(profiles);
      }
      return profiles;
    },
    deleteProfile(profileId) {
      const profiles = this.getProfiles();
      const filtered = profiles.filter(p => p.id !== profileId);
      this.saveProfiles(filtered);
      return filtered;
    },
    getActiveProfileId() {
      try {
        return localStorage.getItem(`${PREFIX}_active_profile`) || "profile-alex";
      } catch (e) {
        return "profile-alex";
      }
    },
    setActiveProfileId(profileId) {
      try {
        localStorage.setItem(`${PREFIX}_active_profile`, profileId);
      } catch (e) {
        console.error("Failed to set active profile:", e);
      }
    },
    // --- Subscription Plan Persistence ---
    getSelectedPlan() {
      try {
        return localStorage.getItem(`${PREFIX}_selected_plan`) || null;
      } catch (e) {
        return null;
      }
    },
    setSelectedPlan(planId) {
      try {
        localStorage.setItem(`${PREFIX}_selected_plan`, planId);
      } catch (e) {
        console.error("Failed to save plan:", e);
      }
    },
    clearSelectedPlan() {
      try {
        localStorage.removeItem(`${PREFIX}_selected_plan`);
      } catch (e) {}
    },
    // --- Profile-Isolated My List ---
    getMyList(profileId) {
      if (!profileId) return [];
      try {
        const key = `${PREFIX}_${profileId}_mylist`;
        const stored = localStorage.getItem(key);
        if (stored !== null) {
          return JSON.parse(stored);
        }
        const profile = this.getProfiles().find(p => p.id === profileId);
        const initial = profile && profile.initialMyList || [];
        this.saveMyList(profileId, initial);
        return initial;
      } catch (e) {
        return [];
      }
    },
    saveMyList(profileId, list) {
      if (!profileId) return;
      try {
        localStorage.setItem(`${PREFIX}_${profileId}_mylist`, JSON.stringify(list));
      } catch (e) {}
    },
    toggleMyList(profileId, movieId) {
      const list = this.getMyList(profileId);
      const index = list.indexOf(movieId);
      let updated;
      let isAdded = false;
      if (index >= 0) {
        updated = list.filter(id => id !== movieId);
        isAdded = false;
      } else {
        updated = [movieId, ...list];
        isAdded = true;
      }
      this.saveMyList(profileId, updated);
      return {
        updatedList: updated,
        isAdded
      };
    },
    isInMyList(profileId, movieId) {
      const list = this.getMyList(profileId);
      return list.includes(movieId);
    },
    // --- Profile-Isolated Continue Watching ---
    getContinueWatching(profileId) {
      if (!profileId) return [];
      try {
        const key = `${PREFIX}_${profileId}_continue_watching`;
        const stored = localStorage.getItem(key);
        if (stored !== null) {
          return JSON.parse(stored);
        }
        const profile = this.getProfiles().find(p => p.id === profileId);
        const initial = profile && profile.initialContinueWatching || [];
        this.saveContinueWatching(profileId, initial);
        return initial;
      } catch (e) {
        return [];
      }
    },
    saveContinueWatching(profileId, items) {
      if (!profileId) return;
      try {
        localStorage.setItem(`${PREFIX}_${profileId}_continue_watching`, JSON.stringify(items));
      } catch (e) {}
    },
    updateWatchProgress(profileId, movieId, progressPercent, durationMinutes = 60, watchedMinutes = null, episodeTitle = null) {
      if (!profileId || !movieId) return [];
      const items = this.getContinueWatching(profileId);
      const existingIndex = items.findIndex(item => item.movieId === movieId);
      const calculatedWatched = watchedMinutes !== null ? watchedMinutes : Math.round(progressPercent / 100 * durationMinutes);
      const newItem = {
        movieId,
        progressPercent: Math.min(100, Math.max(1, Math.round(progressPercent))),
        durationMinutes,
        watchedMinutes: calculatedWatched,
        episodeTitle: episodeTitle || null,
        lastWatched: Date.now()
      };
      let updated;
      if (existingIndex >= 0) {
        updated = [...items];
        updated[existingIndex] = newItem;
      } else {
        updated = [newItem, ...items];
      }
      this.saveContinueWatching(profileId, updated);
      return updated;
    },
    removeFromContinueWatching(profileId, movieId) {
      if (!profileId || !movieId) return [];
      const items = this.getContinueWatching(profileId);
      const updated = items.filter(item => item.movieId !== movieId);
      this.saveContinueWatching(profileId, updated);
      return updated;
    },
    // --- Auth Storage ---
    getAuthUser() {
      try {
        const user = localStorage.getItem(`${PREFIX}_auth_user`);
        return user ? JSON.parse(user) : null;
      } catch (e) {
        return null;
      }
    },
    setAuthUser(user) {
      try {
        localStorage.setItem(`${PREFIX}_auth_user`, JSON.stringify(user));
      } catch (e) {}
    },
    clearAuthUser() {
      try {
        localStorage.removeItem(`${PREFIX}_auth_user`);
      } catch (e) {}
    }
  };

  // --- src/components/Common/BrandLogo.jsx ---

  // Official-style scalable Netflix Wordmark SVG
  function NetflixWordmark({
    height = 32,
    className = ""
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      className: `netflix-wordmark-svg ${className}`,
      height: height,
      viewBox: "0 0 111 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M105.06 14.16L110.87 29.56H104.99L101.44 20.35L97.89 29.56H92.01L97.82 14.16L92.24 0H98.12L101.44 9.07L104.76 0H110.64L105.06 14.16ZM84.77 0V29.56H79.62V0H84.77ZM70.4 29.56H65.25V5.15H56.55V0H79.1V5.15H70.4V29.56ZM47.88 5.15H42.73V12.18H47.16V17.33H42.73V29.56H37.58V0H47.88V5.15ZM29.28 29.56H18.98V0H29.28V5.15H24.13V12.18H28.56V17.33H24.13V24.41H29.28V29.56ZM10.3 14.78L13.73 29.56H8.58L5.15 14.78V29.56H0V0H5.15L8.58 14.78L5.15 0H10.3V14.78Z",
      fill: "#E50914"
    }));
  }

  // Official-style scalable Netflix "N" Ribbon Logo
  function NetflixNLogo({
    width = 45,
    height = 75,
    className = ""
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      className: `netflix-n-ribbon-svg ${className}`,
      width: width,
      height: height,
      viewBox: "0 0 38 60",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 0H12V60H0V0Z",
      fill: "#B1060F"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M26 0H38V60H26V0Z",
      fill: "#B1060F"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M0 0H12L38 60H26L0 0Z",
      fill: "#E50914",
      filter: "drop-shadow(-3px 0px 4px rgba(0,0,0,0.7))"
    }));
  }

  // --- src/context/AuthContext.jsx ---

  const AuthContext = createContext(null);
  function AuthProvider({
    children
  }) {
    const [user, setUser] = useState(() => StorageService.getAuthUser());
    const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(StorageService.getAuthUser()));
    const [selectedPlan, setSelectedPlanState] = useState(() => StorageService.getSelectedPlan());
    const login = (email, password) => {
      const newUser = {
        email,
        name: email.split("@")[0] || "User",
        loggedInAt: Date.now()
      };
      StorageService.setAuthUser(newUser);
      setUser(newUser);
      setIsAuthenticated(true);
      return true;
    };
    const selectPlan = planId => {
      StorageService.setSelectedPlan(planId);
      setSelectedPlanState(planId);
    };
    const logout = () => {
      StorageService.clearAuthUser();
      StorageService.clearSelectedPlan();
      setUser(null);
      setIsAuthenticated(false);
      setSelectedPlanState(null);
    };
    return /*#__PURE__*/React.createElement(AuthContext.Provider, {
      value: {
        user,
        isAuthenticated,
        selectedPlan,
        selectPlan,
        login,
        logout
      }
    }, children);
  }
  function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  }

  // --- src/context/ProfileContext.jsx ---

  const ProfileContext = createContext(null);
  function ProfileProvider({
    children
  }) {
    const [profiles, setProfiles] = useState(() => StorageService.getProfiles());
    const [currentProfileId, setCurrentProfileId] = useState(() => StorageService.getActiveProfileId());
    const [isProfileGateOpen, setIsProfileGateOpen] = useState(false);
    const [isProfileSelected, setIsProfileSelected] = useState(false);

    // Profile-specific reactive state
    const [myList, setMyList] = useState([]);
    const [continueWatching, setContinueWatching] = useState([]);

    // Find active profile object
    const currentProfile = profiles.find(p => p.id === currentProfileId) || profiles[0] || PROFILES_CONFIG[0];

    // Refresh profile-specific data whenever currentProfileId changes
    useEffect(() => {
      if (currentProfile) {
        const storedMyList = StorageService.getMyList(currentProfile.id);
        const storedCW = StorageService.getContinueWatching(currentProfile.id);
        setMyList(storedMyList);
        setContinueWatching(storedCW);
      }
    }, [currentProfileId, currentProfile]);
    const switchProfile = useCallback(profileId => {
      StorageService.setActiveProfileId(profileId);
      setCurrentProfileId(profileId);
      setIsProfileGateOpen(false);
      setIsProfileSelected(true);
      const targetMyList = StorageService.getMyList(profileId);
      const targetCW = StorageService.getContinueWatching(profileId);
      setMyList(targetMyList);
      setContinueWatching(targetCW);
    }, []);
    const updateProfile = useCallback((profileId, updates) => {
      const updated = StorageService.updateProfile(profileId, updates);
      setProfiles(updated);
    }, []);
    const deleteProfile = useCallback(profileId => {
      const updated = StorageService.deleteProfile(profileId);
      setProfiles(updated);
      if (currentProfileId === profileId) {
        switchProfile(updated[0]?.id || "profile-alex");
      }
    }, [currentProfileId, switchProfile]);
    const toggleMyList = useCallback(movieId => {
      if (!currentProfile) return {
        isAdded: false,
        updatedList: []
      };
      const result = StorageService.toggleMyList(currentProfile.id, movieId);
      setMyList(result.updatedList);
      return result;
    }, [currentProfile]);
    const isInMyList = useCallback(movieId => {
      return myList.includes(movieId);
    }, [myList]);
    const updateProgress = useCallback((movieId, progressPercent, durationMinutes, watchedMinutes, episodeTitle) => {
      if (!currentProfile) return;
      const updatedCW = StorageService.updateWatchProgress(currentProfile.id, movieId, progressPercent, durationMinutes, watchedMinutes, episodeTitle);
      setContinueWatching(updatedCW);
    }, [currentProfile]);
    const removeFromContinueWatching = useCallback(movieId => {
      if (!currentProfile) return;
      const updatedCW = StorageService.removeFromContinueWatching(currentProfile.id, movieId);
      setContinueWatching(updatedCW);
    }, [currentProfile]);
    const addProfile = useCallback((name, isKids = false, avatarSvg = null) => {
      const chosenAvatar = avatarSvg || (isKids ? AVATAR_OPTIONS[2].svg : AVATAR_OPTIONS[Math.floor(Math.random() * AVATAR_OPTIONS.length)].svg);
      const newProfile = {
        id: `profile-${Date.now()}`,
        name: name.trim(),
        avatar: chosenAvatar,
        color: isKids ? "#3A86FF" : "#E50914",
        isKids: Boolean(isKids),
        preferredGenres: isKids ? ["Animation", "Family"] : ["Action", "Drama", "Comedy"],
        bio: `${name}'s Profile`,
        initialContinueWatching: [],
        initialMyList: []
      };
      const updated = [...profiles, newProfile];
      StorageService.saveProfiles(updated);
      setProfiles(updated);
      switchProfile(newProfile.id);
    }, [profiles, switchProfile]);
    return /*#__PURE__*/React.createElement(ProfileContext.Provider, {
      value: {
        profiles,
        currentProfile,
        currentProfileId,
        isKids: currentProfile ? currentProfile.isKids : false,
        myList,
        continueWatching,
        switchProfile,
        updateProfile,
        deleteProfile,
        toggleMyList,
        isInMyList,
        updateProgress,
        removeFromContinueWatching,
        addProfile,
        isProfileGateOpen,
        setIsProfileGateOpen,
        isProfileSelected,
        setIsProfileSelected
      }
    }, children);
  }
  function useProfile() {
    const context = useContext(ProfileContext);
    if (!context) {
      throw new Error("useProfile must be used within a ProfileProvider");
    }
    return context;
  }

  // --- src/context/MovieContext.jsx ---

  const MovieContext = createContext(null);
  function MovieProvider({
    children
  }) {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [playingMovie, setPlayingMovie] = useState(null);
    const [playingEpisode, setPlayingEpisode] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("home");
    const [toast, setToast] = useState({
      visible: false,
      message: "",
      type: "info"
    });
    const showToast = useCallback((message, type = "info") => {
      setToast({
        visible: true,
        message,
        type
      });
      setTimeout(() => {
        setToast(prev => ({
          ...prev,
          visible: false
        }));
      }, 3000);
    }, []);
    const openModal = useCallback(movieOrId => {
      if (typeof movieOrId === "string") {
        const found = ALL_MOVIES.find(m => m.id === movieOrId || m.title.toLowerCase() === movieOrId.toLowerCase());
        setSelectedMovie(found || null);
      } else {
        setSelectedMovie(movieOrId);
      }
    }, []);
    const closeModal = useCallback(() => {
      setSelectedMovie(null);
    }, []);
    const openPlayer = useCallback((movieOrId, episode = null) => {
      if (typeof movieOrId === "string") {
        const found = ALL_MOVIES.find(m => m.id === movieOrId || m.title.toLowerCase() === movieOrId.toLowerCase());
        setPlayingMovie(found || null);
      } else {
        setPlayingMovie(movieOrId);
      }
      setPlayingEpisode(episode);
    }, []);
    const closePlayer = useCallback(() => {
      setPlayingMovie(null);
      setPlayingEpisode(null);
    }, []);
    return /*#__PURE__*/React.createElement(MovieContext.Provider, {
      value: {
        selectedMovie,
        openModal,
        closeModal,
        playingMovie,
        playingEpisode,
        openPlayer,
        closePlayer,
        searchQuery,
        setSearchQuery,
        activeTab,
        setActiveTab,
        toast,
        showToast
      }
    }, children);
  }
  function useMovie() {
    const context = useContext(MovieContext);
    if (!context) {
      throw new Error("useMovie must be used within a MovieProvider");
    }
    return context;
  }

  // --- src/components/Intro/TudumIntro.jsx ---

  function TudumIntro({
    onComplete
  }) {
    const [fading, setFading] = useState(false);
    useEffect(() => {
      // Attempt to play Tudum sound
      const timerAudio = setTimeout(() => {
        tudumAudio.playTudum();
      }, 100);

      // Trigger fade transition
      const timerFade = setTimeout(() => {
        setFading(true);
      }, 2100);

      // Complete intro
      const timerComplete = setTimeout(() => {
        sessionStorage.setItem("netflix_has_seen_intro", "true");
        if (onComplete) onComplete();
      }, 2600);
      return () => {
        clearTimeout(timerAudio);
        clearTimeout(timerFade);
        clearTimeout(timerComplete);
      };
    }, [onComplete]);
    const handleSkip = () => {
      sessionStorage.setItem("netflix_has_seen_intro", "true");
      if (onComplete) onComplete();
    };
    return /*#__PURE__*/React.createElement("div", {
      className: `tudum-container ${fading ? "tudum-fade-out" : ""}`,
      onClick: handleSkip
    }, /*#__PURE__*/React.createElement("div", {
      className: "tudum-animation-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tudum-n-container"
    }, /*#__PURE__*/React.createElement(NetflixNLogo, {
      width: 70,
      height: 110
    }), /*#__PURE__*/React.createElement("div", {
      className: "n-glow-pulse"
    })), /*#__PURE__*/React.createElement("div", {
      className: "tudum-wordmark-wrapper"
    }, /*#__PURE__*/React.createElement(NetflixWordmark, {
      height: 36
    }))), /*#__PURE__*/React.createElement("button", {
      className: "tudum-skip-btn",
      onClick: handleSkip
    }, "Skip Intro \u2715"));
  }

  // --- src/components/Navbar/SearchBar.jsx ---

  function SearchBar() {
    const {
      searchQuery,
      setSearchQuery
    } = useMovie();
    const [isExpanded, setIsExpanded] = useState(false);
    const inputRef = useRef(null);
    const handleToggle = () => {
      if (!isExpanded) {
        setIsExpanded(true);
        setTimeout(() => inputRef.current?.focus(), 150);
      } else if (!searchQuery) {
        setIsExpanded(false);
      }
    };
    const handleClear = () => {
      setSearchQuery("");
      inputRef.current?.focus();
    };

    // Close search on Escape key
    useEffect(() => {
      const handleKeyDown = e => {
        if (e.key === "Escape") {
          setSearchQuery("");
          setIsExpanded(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [setSearchQuery]);
    return /*#__PURE__*/React.createElement("div", {
      className: `search-box-wrapper ${isExpanded || searchQuery ? "expanded" : ""}`
    }, /*#__PURE__*/React.createElement("button", {
      className: "search-icon-btn",
      onClick: handleToggle,
      "aria-label": "Search",
      title: "Search titles, genres, people"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "20",
      height: "20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16",
      y2: "16"
    }))), /*#__PURE__*/React.createElement("input", {
      ref: inputRef,
      type: "text",
      className: "search-input-field",
      placeholder: "Titles, people, genres...",
      value: searchQuery,
      onChange: e => setSearchQuery(e.target.value),
      onBlur: () => {
        if (!searchQuery) setIsExpanded(false);
      }
    }), searchQuery && /*#__PURE__*/React.createElement("button", {
      className: "search-clear-btn",
      onClick: handleClear,
      "aria-label": "Clear search"
    }, "\u2715"));
  }

  // --- src/components/Navbar/ProfileDropdown.jsx ---

  function ProfileDropdown() {
    const {
      profiles,
      currentProfile,
      switchProfile,
      setIsProfileGateOpen
    } = useProfile();
    const {
      logout
    } = useAuth();
    const {
      showToast
    } = useMovie();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = e => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleSwitch = (profileId, name) => {
      switchProfile(profileId);
      setIsOpen(false);
      showToast(`Switched to profile: ${name}`, "success");
    };
    const handleManage = () => {
      setIsOpen(false);
      setIsProfileGateOpen(true);
    };
    const handleSignOut = () => {
      setIsOpen(false);
      logout();
      showToast("Signed out successfully", "info");
    };
    const otherProfiles = profiles.filter(p => p.id !== currentProfile?.id);
    return /*#__PURE__*/React.createElement("div", {
      className: "profile-dropdown-wrapper",
      ref: dropdownRef
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "profile-btn",
      onClick: () => setIsOpen(!isOpen),
      "aria-label": "Profile menu",
      "aria-expanded": isOpen
    }, /*#__PURE__*/React.createElement("img", {
      src: currentProfile?.avatar,
      alt: currentProfile?.name || "Profile",
      className: "profile-avatar-img"
    }), /*#__PURE__*/React.createElement("span", {
      className: "profile-name-text"
    }, currentProfile?.name || "User"), /*#__PURE__*/React.createElement("span", {
      className: `profile-caret ${isOpen ? "open" : ""}`
    }, "\u25BC")), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "profile-menu-dropdown animate-fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "profile-menu-header"
    }, /*#__PURE__*/React.createElement("span", {
      className: "profile-menu-title"
    }, "Switch Profile")), /*#__PURE__*/React.createElement("div", {
      className: "profile-list-section"
    }, otherProfiles.map(p => /*#__PURE__*/React.createElement("button", {
      key: p.id,
      type: "button",
      className: "profile-switch-item",
      onClick: () => handleSwitch(p.id, p.name)
    }, /*#__PURE__*/React.createElement("img", {
      src: p.avatar,
      alt: p.name,
      className: "profile-switch-avatar"
    }), /*#__PURE__*/React.createElement("span", {
      className: "profile-switch-name"
    }, p.name), p.isKids && /*#__PURE__*/React.createElement("span", {
      className: "profile-kids-badge"
    }, "KIDS")))), /*#__PURE__*/React.createElement("div", {
      className: "profile-menu-divider"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "profile-menu-action",
      onClick: handleManage
    }, /*#__PURE__*/React.createElement("svg", {
      className: "action-svg-icon",
      viewBox: "0 0 24 24",
      width: "18",
      height: "18",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 20h9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
    })), /*#__PURE__*/React.createElement("span", null, "Manage Profiles")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "profile-menu-action",
      onClick: () => handleSwitch("profile-kids", "Kids")
    }, /*#__PURE__*/React.createElement("svg", {
      className: "action-svg-icon",
      viewBox: "0 0 24 24",
      width: "18",
      height: "18",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 14s1.5 2 4 2 4-2 4-2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9"
    })), /*#__PURE__*/React.createElement("span", null, "Switch to Kids Mode")), /*#__PURE__*/React.createElement("div", {
      className: "profile-menu-divider"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "profile-menu-action sign-out-action",
      onClick: handleSignOut
    }, /*#__PURE__*/React.createElement("svg", {
      className: "action-svg-icon",
      viewBox: "0 0 24 24",
      width: "18",
      height: "18",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "16 17 21 12 16 7"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "12",
      x2: "9",
      y2: "12"
    })), /*#__PURE__*/React.createElement("span", null, "Sign out of Netflix"))));
  }

  // --- src/components/Navbar/Navbar.jsx ---

  function Navbar() {
    const {
      activeTab,
      setActiveTab,
      setSearchQuery,
      showToast
    } = useMovie();
    const {
      isKids,
      switchProfile
    } = useProfile();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const notifRef = useRef(null);
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 40);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
      const handleClickOutside = e => {
        if (notifRef.current && !notifRef.current.contains(e.target)) {
          setNotificationsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleNavClick = tab => {
      setActiveTab(tab);
      setSearchQuery("");
      setMobileMenuOpen(false);
      if (tab === "kids") {
        switchProfile("profile-kids");
      } else if (isKids && tab !== "kids") {
        switchProfile("profile-alex");
      }
    };
    const handleExitKids = () => {
      switchProfile("profile-alex");
      setActiveTab("home");
    };
    return /*#__PURE__*/React.createElement("header", {
      className: `netflix-navbar-header ${isScrolled ? "scrolled" : ""} ${isKids ? "kids-mode" : ""}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "navbar-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "navbar-left"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "mobile-hamburger-btn",
      onClick: () => setMobileMenuOpen(!mobileMenuOpen),
      "aria-label": "Toggle menu"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bar"
    }), /*#__PURE__*/React.createElement("span", {
      className: "bar"
    }), /*#__PURE__*/React.createElement("span", {
      className: "bar"
    })), /*#__PURE__*/React.createElement("div", {
      className: "brand-logo",
      onClick: () => handleNavClick("home"),
      title: "Netflix Home"
    }, /*#__PURE__*/React.createElement(NetflixWordmark, {
      height: 26
    }), isKids && /*#__PURE__*/React.createElement("span", {
      className: "kids-logo-tag"
    }, "KIDS")), /*#__PURE__*/React.createElement("nav", {
      className: "desktop-nav-links"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `nav-link-btn ${activeTab === "home" ? "active" : ""}`,
      onClick: () => handleNavClick("home")
    }, "Home"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `nav-link-btn ${activeTab === "tv" ? "active" : ""}`,
      onClick: () => handleNavClick("tv")
    }, "TV Shows"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `nav-link-btn ${activeTab === "movies" ? "active" : ""}`,
      onClick: () => handleNavClick("movies")
    }, "Movies"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `nav-link-btn ${activeTab === "new_popular" ? "active" : ""}`,
      onClick: () => handleNavClick("new_popular")
    }, "New & Popular"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `nav-link-btn ${activeTab === "mylist" ? "active" : ""}`,
      onClick: () => handleNavClick("mylist")
    }, "My List"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `nav-link-btn kids-nav-btn ${activeTab === "kids" || isKids ? "active" : ""}`,
      onClick: () => handleNavClick("kids")
    }, "Kids"))), /*#__PURE__*/React.createElement("div", {
      className: "navbar-right"
    }, /*#__PURE__*/React.createElement(SearchBar, null), /*#__PURE__*/React.createElement("div", {
      className: "notifications-wrapper",
      ref: notifRef
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "navbar-icon-btn notif-bell-btn",
      onClick: () => setNotificationsOpen(!notificationsOpen),
      title: "Notifications"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "20",
      height: "20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.73 21a2 2 0 0 1-3.46 0"
    })), /*#__PURE__*/React.createElement("span", {
      className: "notif-badge-dot"
    }, "3")), notificationsOpen && /*#__PURE__*/React.createElement("div", {
      className: "notifications-dropdown-menu animate-fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "notif-header"
    }, /*#__PURE__*/React.createElement("span", null, "Recent Notifications")), /*#__PURE__*/React.createElement("div", {
      className: "notif-item",
      onClick: () => {
        setNotificationsOpen(false);
        showToast("New Season of Squid Game is now streaming!", "info");
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/movie4.jpg",
      alt: "Squid Game",
      className: "notif-thumb"
    }), /*#__PURE__*/React.createElement("div", {
      className: "notif-text"
    }, /*#__PURE__*/React.createElement("strong", null, "Squid Game Season 2"), /*#__PURE__*/React.createElement("p", null, "New episodes now available"), /*#__PURE__*/React.createElement("span", {
      className: "notif-time"
    }, "2 days ago"))), /*#__PURE__*/React.createElement("div", {
      className: "notif-item",
      onClick: () => {
        setNotificationsOpen(false);
        showToast("Stranger Things season finale ready", "info");
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/movie3.jpg",
      alt: "Stranger Things",
      className: "notif-thumb"
    }), /*#__PURE__*/React.createElement("div", {
      className: "notif-text"
    }, /*#__PURE__*/React.createElement("strong", null, "Stranger Things"), /*#__PURE__*/React.createElement("p", null, "Top 10 in Streaming Today"), /*#__PURE__*/React.createElement("span", {
      className: "notif-time"
    }, "1 week ago"))))), isKids && /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "exit-kids-btn",
      onClick: handleExitKids
    }, "Exit Kids"), /*#__PURE__*/React.createElement(ProfileDropdown, null))), mobileMenuOpen && /*#__PURE__*/React.createElement("div", {
      className: "mobile-nav-drawer animate-slide-down"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `mobile-nav-item ${activeTab === "home" ? "active" : ""}`,
      onClick: () => handleNavClick("home")
    }, "Home"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `mobile-nav-item ${activeTab === "tv" ? "active" : ""}`,
      onClick: () => handleNavClick("tv")
    }, "TV Shows"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `mobile-nav-item ${activeTab === "movies" ? "active" : ""}`,
      onClick: () => handleNavClick("movies")
    }, "Movies"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `mobile-nav-item ${activeTab === "new_popular" ? "active" : ""}`,
      onClick: () => handleNavClick("new_popular")
    }, "New & Popular"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `mobile-nav-item ${activeTab === "mylist" ? "active" : ""}`,
      onClick: () => handleNavClick("mylist")
    }, "My List"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `mobile-nav-item ${activeTab === "kids" || isKids ? "active" : ""}`,
      onClick: () => handleNavClick("kids")
    }, "Kids Zone")));
  }

  // --- src/components/Hero/HeroBanner.jsx ---

  function HeroBanner() {
    const {
      openModal,
      openPlayer
    } = useMovie();
    const {
      isKids,
      currentProfile
    } = useProfile();
    const [featuredMovie, setFeaturedMovie] = useState(null);
    useEffect(() => {
      let candidates = [];
      if (isKids) {
        candidates = ALL_MOVIES.filter(m => m.id === "super-mario-bros" || m.id === "kung-fu-panda-4" || m.id === "spider-man-across-spiderverse");
      } else if (currentProfile?.id === "profile-sarah") {
        candidates = ALL_MOVIES.filter(m => m.id === "queen-of-tears" || m.id === "bridgerton" || m.id === "crash-landing-on-you");
      } else {
        // Alex / Default
        candidates = ALL_MOVIES.filter(m => m.id === "stranger-things" || m.id === "squid-game" || m.id === "the-witcher" || m.id === "money-heist");
      }
      const selected = candidates[0] || ALL_MOVIES[0];
      setFeaturedMovie(selected);
    }, [isKids, currentProfile]);
    if (!featuredMovie) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "hero-banner-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-backdrop-image",
      style: {
        backgroundImage: `linear-gradient(to top, #141414 0%, rgba(20,20,20,0.6) 40%, rgba(20,20,20,0.2) 70%, rgba(20,20,20,0.7) 100%), linear-gradient(to right, #141414 0%, rgba(20,20,20,0.8) 35%, transparent 70%), url("${featuredMovie.backdrop || featuredMovie.poster}")`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-gradient-overlay"
    })), /*#__PURE__*/React.createElement("div", {
      className: "hero-content-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-badge-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "hero-original-badge"
    }, /*#__PURE__*/React.createElement("span", {
      className: "n-badge-red"
    }, "N"), " ", featuredMovie.type === "series" ? "SERIES" : "FILM"), /*#__PURE__*/React.createElement("span", {
      className: "hero-top10-badge"
    }, "\uD83C\uDFC6 TOP 10 IN STREAMING TODAY")), /*#__PURE__*/React.createElement("h1", {
      className: "hero-movie-title"
    }, featuredMovie.title), /*#__PURE__*/React.createElement("div", {
      className: "hero-meta-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "hero-match-score"
    }, featuredMovie.match), /*#__PURE__*/React.createElement("span", {
      className: "hero-maturity-badge"
    }, featuredMovie.maturity), /*#__PURE__*/React.createElement("span", {
      className: "hero-duration"
    }, featuredMovie.duration), /*#__PURE__*/React.createElement("span", {
      className: "hero-quality-badge"
    }, featuredMovie.quality), /*#__PURE__*/React.createElement("span", {
      className: "hero-rating-score"
    }, "\u2605 ", featuredMovie.rating)), /*#__PURE__*/React.createElement("p", {
      className: "hero-description-text"
    }, featuredMovie.description), /*#__PURE__*/React.createElement("div", {
      className: "hero-genres-row"
    }, featuredMovie.genres?.map((g, idx) => /*#__PURE__*/React.createElement("span", {
      key: g,
      className: "hero-genre-tag"
    }, idx > 0 && /*#__PURE__*/React.createElement("span", {
      className: "genre-dot"
    }, "\u2022"), g))), /*#__PURE__*/React.createElement("div", {
      className: "hero-actions-row"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "hero-play-btn",
      onClick: () => openPlayer(featuredMovie),
      title: "Play Now"
    }, /*#__PURE__*/React.createElement("span", {
      className: "btn-icon"
    }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
      className: "btn-text"
    }, "Play")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "hero-info-btn",
      onClick: () => openModal(featuredMovie),
      title: "More Information"
    }, /*#__PURE__*/React.createElement("span", {
      className: "btn-icon"
    }, "\u2139"), /*#__PURE__*/React.createElement("span", {
      className: "btn-text"
    }, "More Info")))));
  }

  // --- src/components/Rows/MovieCard.jsx ---

  function MovieCard({
    movie,
    isLarge = false
  }) {
    const {
      openModal,
      openPlayer,
      showToast
    } = useMovie();
    const {
      toggleMyList,
      isInMyList
    } = useProfile();
    const [isHovered, setIsHovered] = useState(false);
    const [liked, setLiked] = useState(false);
    const inList = isInMyList(movie.id);
    const handleListToggle = e => {
      e.stopPropagation();
      const {
        isAdded
      } = toggleMyList(movie.id);
      showToast(isAdded ? `Added "${movie.title}" to My List` : `Removed "${movie.title}" from My List`, isAdded ? "success" : "info");
    };
    const handleLike = e => {
      e.stopPropagation();
      setLiked(!liked);
      showToast(liked ? "Rating removed" : `Liked "${movie.title}"`, "info");
    };
    const handlePlay = e => {
      e.stopPropagation();
      openPlayer(movie);
    };
    const handleOpenInfo = e => {
      e.stopPropagation();
      openModal(movie);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: `netflix-movie-card ${isLarge ? "large-card" : ""}`,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onClick: handleOpenInfo,
      title: movie.title
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-image-container"
    }, /*#__PURE__*/React.createElement("img", {
      src: movie.poster,
      alt: movie.title,
      className: "card-poster-img",
      loading: "lazy",
      onError: e => {
        e.target.src = "assets/movie1.jpg";
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "card-top-badges"
    }, movie.quality && /*#__PURE__*/React.createElement("span", {
      className: "quality-pill"
    }, movie.quality))), /*#__PURE__*/React.createElement("div", {
      className: `card-hover-overlay ${isHovered ? "active" : ""}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "hover-backdrop"
    }, /*#__PURE__*/React.createElement("img", {
      src: movie.backdrop || movie.poster,
      alt: movie.title,
      className: "hover-backdrop-img"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hover-gradient"
    })), /*#__PURE__*/React.createElement("div", {
      className: "hover-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hover-actions-bar"
    }, /*#__PURE__*/React.createElement("button", {
      className: "hover-action-btn play-circle-btn",
      onClick: handlePlay,
      title: "Play"
    }, "\u25B6"), /*#__PURE__*/React.createElement("button", {
      className: `hover-action-btn ${inList ? "in-list" : ""}`,
      onClick: handleListToggle,
      title: inList ? "Remove from My List" : "Add to My List"
    }, inList ? "✓" : "+"), /*#__PURE__*/React.createElement("button", {
      className: `hover-action-btn ${liked ? "liked" : ""}`,
      onClick: handleLike,
      title: "I like this"
    }, "\uD83D\uDC4D"), /*#__PURE__*/React.createElement("button", {
      className: "hover-action-btn info-btn",
      onClick: handleOpenInfo,
      title: "Episode details & more"
    }, "\u2304")), /*#__PURE__*/React.createElement("h4", {
      className: "hover-title"
    }, movie.title), /*#__PURE__*/React.createElement("div", {
      className: "hover-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "hover-match"
    }, movie.match), /*#__PURE__*/React.createElement("span", {
      className: "hover-maturity"
    }, movie.maturity), /*#__PURE__*/React.createElement("span", {
      className: "hover-duration"
    }, movie.duration), /*#__PURE__*/React.createElement("span", {
      className: "hover-rating"
    }, "\u2605 ", movie.rating)), /*#__PURE__*/React.createElement("div", {
      className: "hover-genres"
    }, movie.genres?.slice(0, 3).map((g, i) => /*#__PURE__*/React.createElement("span", {
      key: g,
      className: "hover-genre-pill"
    }, i > 0 && " • ", g))))));
  }

  // --- src/components/Rows/MovieRow.jsx ---

  function MovieRow({
    title,
    movies = [],
    isLarge = false
  }) {
    const rowRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const checkArrows = () => {
      if (!rowRef.current) return;
      const {
        scrollLeft,
        scrollWidth,
        clientWidth
      } = rowRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
    };
    useEffect(() => {
      checkArrows();
      const current = rowRef.current;
      if (current) {
        current.addEventListener("scroll", checkArrows);
        window.addEventListener("resize", checkArrows);
      }
      return () => {
        if (current) current.removeEventListener("scroll", checkArrows);
        window.removeEventListener("resize", checkArrows);
      };
    }, [movies]);
    const handleScroll = direction => {
      if (!rowRef.current) return;
      const {
        clientWidth
      } = rowRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      rowRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    };
    if (!movies || movies.length === 0) return null;
    return /*#__PURE__*/React.createElement("section", {
      className: "netflix-movie-row-section"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "row-section-title"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "row-slider-wrapper"
    }, showLeftArrow && /*#__PURE__*/React.createElement("button", {
      className: "row-nav-arrow left-arrow",
      onClick: () => handleScroll("left"),
      "aria-label": "Scroll left"
    }, "\u2039"), /*#__PURE__*/React.createElement("div", {
      className: "row-cards-container",
      ref: rowRef
    }, movies.map(movie => /*#__PURE__*/React.createElement(MovieCard, {
      key: movie.id,
      movie: movie,
      isLarge: isLarge
    }))), showRightArrow && /*#__PURE__*/React.createElement("button", {
      className: "row-nav-arrow right-arrow",
      onClick: () => handleScroll("right"),
      "aria-label": "Scroll right"
    }, "\u203A")));
  }

  // --- src/components/Rows/Top10Row.jsx ---

  function Top10Row({
    title = "Top 10 in Streaming Today",
    movies = []
  }) {
    const {
      openModal,
      openPlayer,
      showToast
    } = useMovie();
    const {
      toggleMyList,
      isInMyList
    } = useProfile();
    const [scrollPosition, setScrollPosition] = useState(0);
    const rowRef = useRef(null);
    if (!movies || movies.length === 0) return null;
    const handleScroll = direction => {
      if (rowRef.current) {
        const {
          scrollLeft,
          clientWidth
        } = rowRef.current;
        const scrollAmount = clientWidth * 0.75;
        const newPos = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
        rowRef.current.scrollTo({
          left: newPos,
          behavior: "smooth"
        });
        setScrollPosition(newPos);
      }
    };
    const handleListToggle = (e, movie) => {
      e.stopPropagation();
      const {
        isAdded
      } = toggleMyList(movie.id);
      showToast(isAdded ? `Added "${movie.title}" to My List` : `Removed "${movie.title}" from My List`, isAdded ? "success" : "info");
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "netflix-movie-row-section top10-row-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row-header-wrapper"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "row-section-title"
    }, title)), /*#__PURE__*/React.createElement("div", {
      className: "row-slider-wrapper"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "slider-arrow-btn left-arrow",
      onClick: () => handleScroll("left"),
      "aria-label": "Scroll left"
    }, "\u2039"), /*#__PURE__*/React.createElement("div", {
      className: "row-cards-container top10-cards-container",
      ref: rowRef
    }, movies.slice(0, 10).map((movie, index) => {
      const rank = movie.rank || index + 1;
      const inList = isInMyList(movie.id);
      return /*#__PURE__*/React.createElement("div", {
        key: movie.id,
        className: "top10-card-item",
        onClick: () => openModal(movie),
        title: `#${rank} in Streaming - ${movie.title}`
      }, /*#__PURE__*/React.createElement("div", {
        className: "top10-rank-number"
      }, /*#__PURE__*/React.createElement("span", {
        className: "rank-text"
      }, rank)), /*#__PURE__*/React.createElement("div", {
        className: "top10-poster-wrap"
      }, /*#__PURE__*/React.createElement("img", {
        src: movie.poster,
        alt: movie.title,
        className: "top10-poster-img",
        loading: "lazy",
        onError: e => {
          e.target.src = "assets/movie1.jpg";
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "top10-hover-overlay"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "top10-play-btn",
        onClick: e => {
          e.stopPropagation();
          openPlayer(movie);
        },
        title: "Play"
      }, "\u25B6"), /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: `top10-list-btn ${inList ? "in-list" : ""}`,
        onClick: e => handleListToggle(e, movie),
        title: inList ? "Remove from My List" : "Add to My List"
      }, inList ? "✓" : "+"), /*#__PURE__*/React.createElement("span", {
        className: "top10-card-title"
      }, movie.title), /*#__PURE__*/React.createElement("span", {
        className: "top10-card-match"
      }, movie.match))));
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "slider-arrow-btn right-arrow",
      onClick: () => handleScroll("right"),
      "aria-label": "Scroll right"
    }, "\u203A")));
  }

  // --- src/components/Rows/ContinueWatchingRow.jsx ---

  function ContinueWatchingRow() {
    const {
      continueWatching,
      removeFromContinueWatching,
      currentProfile
    } = useProfile();
    const {
      openPlayer,
      openModal,
      showToast
    } = useMovie();
    const rowRef = useRef(null);
    if (!continueWatching || continueWatching.length === 0) {
      return null;
    }

    // Hydrate continue watching with full movie metadata
    const items = continueWatching.map(item => {
      const movie = ALL_MOVIES.find(m => m.id === item.movieId);
      if (!movie) return null;
      return {
        ...item,
        movie
      };
    }).filter(Boolean);
    if (items.length === 0) return null;
    const handleRemove = (e, movieId, title) => {
      e.stopPropagation();
      removeFromContinueWatching(movieId);
      showToast(`Removed "${title}" from Continue Watching`, "info");
    };
    const handlePlay = (movie, watchedMinutes, episodeTitle) => {
      openPlayer(movie, episodeTitle ? {
        title: episodeTitle
      } : null);
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "netflix-movie-row-section continue-watching-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "continue-watching-header"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "row-section-title"
    }, "Continue Watching for ", currentProfile?.name || "You"), /*#__PURE__*/React.createElement("span", {
      className: "profile-indicator-tag"
    }, currentProfile?.name)), /*#__PURE__*/React.createElement("div", {
      className: "row-slider-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row-cards-container cw-cards-container",
      ref: rowRef
    }, items.map(({
      movie,
      progressPercent,
      durationMinutes,
      watchedMinutes,
      episodeTitle
    }) => {
      const remainingMins = Math.max(1, (durationMinutes || 60) - (watchedMinutes || 0));
      return /*#__PURE__*/React.createElement("div", {
        key: movie.id,
        className: "cw-card",
        onClick: () => openModal(movie)
      }, /*#__PURE__*/React.createElement("div", {
        className: "cw-image-wrapper"
      }, /*#__PURE__*/React.createElement("img", {
        src: movie.backdrop || movie.poster,
        alt: movie.title,
        className: "cw-poster-img"
      }), /*#__PURE__*/React.createElement("div", {
        className: "cw-play-overlay",
        onClick: e => {
          e.stopPropagation();
          handlePlay(movie, watchedMinutes, episodeTitle);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "cw-play-btn-circle"
      }, "\u25B6")), /*#__PURE__*/React.createElement("button", {
        className: "cw-remove-btn",
        onClick: e => handleRemove(e, movie.id, movie.title),
        title: "Remove from Continue Watching"
      }, "\u2715")), /*#__PURE__*/React.createElement("div", {
        className: "cw-progress-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "cw-progress-bar-fill",
        style: {
          width: `${Math.min(100, Math.max(5, progressPercent))}%`
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "cw-info-row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "cw-title-wrap"
      }, /*#__PURE__*/React.createElement("span", {
        className: "cw-movie-title"
      }, movie.title), episodeTitle && /*#__PURE__*/React.createElement("span", {
        className: "cw-episode-subtitle"
      }, episodeTitle)), /*#__PURE__*/React.createElement("span", {
        className: "cw-time-remaining"
      }, remainingMins, "m left (", progressPercent, "%)")));
    }))));
  }

  // --- src/components/Modals/MovieDetailModal.jsx ---

  function MovieDetailModal() {
    const {
      selectedMovie,
      openModal,
      closeModal,
      openPlayer,
      showToast
    } = useMovie();
    const {
      toggleMyList,
      isInMyList,
      currentProfile
    } = useProfile();
    const [selectedSeasonNum, setSelectedSeasonNum] = useState(1);
    const modalContainerRef = useRef(null);
    useEffect(() => {
      const handleKeyDown = e => {
        if (e.key === "Escape") closeModal();
      };
      if (selectedMovie) {
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
        setSelectedSeasonNum(1);
        if (modalContainerRef.current) {
          modalContainerRef.current.scrollTop = 0;
        }
      }
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [selectedMovie, closeModal]);
    if (!selectedMovie) return null;
    const inList = isInMyList(selectedMovie.id);
    const handleListToggle = (movieId, title) => {
      const {
        isAdded
      } = toggleMyList(movieId);
      showToast(isAdded ? `Added "${title}" to My List` : `Removed "${title}" from My List`, isAdded ? "success" : "info");
    };
    const handlePlay = (movie = selectedMovie) => {
      openPlayer(movie);
    };
    const handlePlayEpisode = ep => {
      openPlayer(selectedMovie, ep);
    };
    const handleSelectSimilar = movie => {
      openModal(movie);
      setSelectedSeasonNum(1);
      const backdrop = document.querySelector(".modal-backdrop-overlay");
      if (backdrop) backdrop.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      if (modalContainerRef.current) modalContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    // Dynamically ranked similar movies
    const similarMovies = getSimilarMovies(selectedMovie, currentProfile);
    const seasonsList = selectedMovie.seasons || [];
    const currentSeason = seasonsList.find(s => s.seasonNumber === selectedSeasonNum) || seasonsList[0];
    return /*#__PURE__*/React.createElement("div", {
      className: "modal-backdrop-overlay animate-fade-in",
      onClick: closeModal
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-dialog-container animate-scale-up",
      ref: modalContainerRef,
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "modal-close-btn",
      onClick: closeModal,
      "aria-label": "Close modal",
      title: "Close (Esc)"
    }, "\u2715"), /*#__PURE__*/React.createElement("div", {
      className: "modal-hero-banner",
      style: {
        backgroundImage: `linear-gradient(to top, #181818 0%, rgba(24,24,24,0.6) 50%, rgba(0,0,0,0.3) 100%), url("${selectedMovie.backdrop || selectedMovie.poster}")`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-hero-content"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "modal-title"
    }, selectedMovie.title), /*#__PURE__*/React.createElement("div", {
      className: "modal-action-buttons"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "modal-play-btn",
      onClick: () => handlePlay(selectedMovie)
    }, /*#__PURE__*/React.createElement("span", {
      className: "btn-icon"
    }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
      className: "btn-text"
    }, "Play")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `modal-mylist-btn ${inList ? "active" : ""}`,
      onClick: () => handleListToggle(selectedMovie.id, selectedMovie.title)
    }, /*#__PURE__*/React.createElement("span", {
      className: "btn-icon"
    }, inList ? "✓" : "+"), /*#__PURE__*/React.createElement("span", {
      className: "btn-text"
    }, inList ? "In My List" : "Add to My List"))))), /*#__PURE__*/React.createElement("div", {
      className: "modal-body-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-grid-layout"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-left-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-meta-pills"
    }, /*#__PURE__*/React.createElement("span", {
      className: "meta-match"
    }, selectedMovie.match), /*#__PURE__*/React.createElement("span", {
      className: "meta-year"
    }, selectedMovie.year), /*#__PURE__*/React.createElement("span", {
      className: "meta-maturity"
    }, selectedMovie.maturity), /*#__PURE__*/React.createElement("span", {
      className: "meta-duration"
    }, selectedMovie.duration), /*#__PURE__*/React.createElement("span", {
      className: "meta-quality"
    }, selectedMovie.quality || "HD"), /*#__PURE__*/React.createElement("span", {
      className: "meta-rating"
    }, "\u2605 ", selectedMovie.rating)), /*#__PURE__*/React.createElement("p", {
      className: "modal-synopsis"
    }, selectedMovie.description)), /*#__PURE__*/React.createElement("div", {
      className: "modal-right-col"
    }, selectedMovie.cast && /*#__PURE__*/React.createElement("div", {
      className: "modal-info-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "info-label"
    }, "Cast: "), /*#__PURE__*/React.createElement("span", {
      className: "info-value"
    }, selectedMovie.cast.join(", "))), selectedMovie.creator && /*#__PURE__*/React.createElement("div", {
      className: "modal-info-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "info-label"
    }, "Creator / Director: "), /*#__PURE__*/React.createElement("span", {
      className: "info-value"
    }, selectedMovie.creator)), selectedMovie.genres && /*#__PURE__*/React.createElement("div", {
      className: "modal-info-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "info-label"
    }, "Genres: "), /*#__PURE__*/React.createElement("span", {
      className: "info-value"
    }, selectedMovie.genres.join(", "))), selectedMovie.tags && /*#__PURE__*/React.createElement("div", {
      className: "modal-info-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "info-label"
    }, "Tags: "), /*#__PURE__*/React.createElement("span", {
      className: "info-value"
    }, selectedMovie.tags.join(", "))))), seasonsList.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "modal-episodes-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "episodes-header-row"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "episodes-heading"
    }, "Episodes"), seasonsList.length > 1 && /*#__PURE__*/React.createElement("div", {
      className: "season-select-wrapper"
    }, /*#__PURE__*/React.createElement("select", {
      value: selectedSeasonNum,
      onChange: e => setSelectedSeasonNum(Number(e.target.value)),
      className: "season-dropdown-select"
    }, seasonsList.map(s => /*#__PURE__*/React.createElement("option", {
      key: s.seasonNumber,
      value: s.seasonNumber
    }, s.seasonTitle, " (", s.episodes.length, " Episodes)"))))), /*#__PURE__*/React.createElement("div", {
      className: "episodes-list"
    }, currentSeason?.episodes.map(ep => /*#__PURE__*/React.createElement("div", {
      key: ep.episodeNumber,
      className: "episode-item-card",
      onClick: () => handlePlayEpisode(ep)
    }, /*#__PURE__*/React.createElement("span", {
      className: "episode-num-badge"
    }, ep.episodeNumber), /*#__PURE__*/React.createElement("div", {
      className: "episode-thumb-wrap"
    }, /*#__PURE__*/React.createElement("img", {
      src: ep.thumbnail || selectedMovie.backdrop,
      alt: ep.title,
      className: "episode-thumb-img"
    }), /*#__PURE__*/React.createElement("div", {
      className: "episode-play-icon"
    }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
      className: "episode-details"
    }, /*#__PURE__*/React.createElement("div", {
      className: "episode-title-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "episode-title"
    }, ep.title), /*#__PURE__*/React.createElement("span", {
      className: "episode-duration"
    }, ep.duration)), /*#__PURE__*/React.createElement("p", {
      className: "episode-synopsis"
    }, ep.description)))))), similarMovies.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "modal-similar-section"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "similar-section-title"
    }, "More Like This"), /*#__PURE__*/React.createElement("div", {
      className: "similar-cards-grid"
    }, similarMovies.map(sim => {
      const isSimInList = isInMyList(sim.id);
      return /*#__PURE__*/React.createElement("div", {
        key: sim.id,
        className: "similar-movie-card",
        onClick: () => handleSelectSimilar(sim),
        title: `View details for ${sim.title}`
      }, /*#__PURE__*/React.createElement("div", {
        className: "similar-card-media"
      }, /*#__PURE__*/React.createElement("img", {
        src: sim.backdrop || sim.poster,
        alt: sim.title,
        className: "similar-poster-img",
        loading: "lazy"
      }), /*#__PURE__*/React.createElement("div", {
        className: "similar-play-badge"
      }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
        className: "similar-card-info"
      }, /*#__PURE__*/React.createElement("div", {
        className: "similar-meta-top"
      }, /*#__PURE__*/React.createElement("span", {
        className: "sim-match"
      }, sim.match), /*#__PURE__*/React.createElement("span", {
        className: "sim-maturity"
      }, sim.maturity), /*#__PURE__*/React.createElement("span", {
        className: "sim-duration"
      }, sim.duration), /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: `similar-add-btn ${isSimInList ? "in-list" : ""}`,
        onClick: e => {
          e.stopPropagation();
          handleListToggle(sim.id, sim.title);
        },
        title: isSimInList ? "Remove from My List" : "Add to My List"
      }, isSimInList ? "✓" : "+")), /*#__PURE__*/React.createElement("h4", {
        className: "sim-title"
      }, sim.title), /*#__PURE__*/React.createElement("p", {
        className: "sim-desc"
      }, sim.description)));
    }))))));
  }

  // --- src/components/Modals/VideoPlayerModal.jsx ---

  function VideoPlayerModal() {
    const {
      playingMovie,
      playingEpisode,
      closePlayer,
      showToast
    } = useMovie();
    const {
      updateProgress,
      continueWatching,
      currentProfile
    } = useProfile();
    const existingItem = continueWatching.find(cw => cw.movieId === playingMovie?.id);
    const initialPercent = existingItem ? existingItem.progressPercent : 25;
    const [isPlaying, setIsPlaying] = useState(true);
    const [progressPercent, setProgressPercent] = useState(initialPercent);
    const [currentTimeSec, setCurrentTimeSec] = useState(Math.round(initialPercent / 100 * 3600));
    const totalDurationSec = 3600;
    const [volume, setVolume] = useState(0.8);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [hasIframeError, setHasIframeError] = useState(false);
    const controlsTimeoutRef = useRef(null);

    // Close on Escape key
    useEffect(() => {
      const handleKeyDown = e => {
        if (e.key === "Escape") {
          handleClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [playingMovie, progressPercent, currentTimeSec]);

    // Simulated progress timer
    useEffect(() => {
      let interval = null;
      if (isPlaying && playingMovie) {
        interval = setInterval(() => {
          setCurrentTimeSec(prev => {
            const next = prev + 1;
            if (next >= totalDurationSec) {
              setIsPlaying(false);
              return totalDurationSec;
            }
            const percent = Math.round(next / totalDurationSec * 100);
            setProgressPercent(percent);
            return next;
          });
        }, 1000);
      }
      return () => {
        if (interval) clearInterval(interval);
      };
    }, [isPlaying, playingMovie, totalDurationSec]);

    // Save watch progress to current profile
    useEffect(() => {
      if (playingMovie) {
        updateProgress(playingMovie.id, progressPercent, Math.round(totalDurationSec / 60), Math.round(currentTimeSec / 60), playingEpisode ? playingEpisode.title : null);
      }
    }, [progressPercent, currentTimeSec, playingMovie, playingEpisode, updateProgress]);
    const handleMouseMove = () => {
      setShowControls(true);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
      controlsTimeoutRef.current = setTimeout(() => {
        if (isPlaying) setShowControls(false);
      }, 3500);
    };
    if (!playingMovie) return null;
    const handleClose = () => {
      updateProgress(playingMovie.id, progressPercent, Math.round(totalDurationSec / 60), Math.round(currentTimeSec / 60), playingEpisode ? playingEpisode.title : null);
      showToast(`Saved progress for ${playingMovie.title}`, "info");
      closePlayer();
    };
    const handleSeek = e => {
      const newPercent = parseFloat(e.target.value);
      setProgressPercent(newPercent);
      setCurrentTimeSec(Math.round(newPercent / 100 * totalDurationSec));
    };
    const handleSkip = seconds => {
      setCurrentTimeSec(prev => {
        const next = Math.min(totalDurationSec, Math.max(0, prev + seconds));
        setProgressPercent(Math.round(next / totalDurationSec * 100));
        return next;
      });
    };
    const toggleFullscreen = () => {
      const elem = document.querySelector(".video-player-container");
      if (!document.fullscreenElement) {
        elem?.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    };
    const formatTime = secs => {
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${m}:${s < 10 ? "0" : ""}${s}`;
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "video-player-fullscreen-backdrop animate-fade-in",
      onMouseMove: handleMouseMove
    }, /*#__PURE__*/React.createElement("div", {
      className: "video-player-container"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-top-right-close-btn",
      onClick: handleClose,
      "aria-label": "Close Video",
      title: "Close Video (Esc)"
    }, "\u2715"), /*#__PURE__*/React.createElement("div", {
      className: `video-player-top-bar ${showControls ? "visible" : "hidden"}`
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-back-btn",
      onClick: handleClose
    }, "\u2190 Back"), /*#__PURE__*/React.createElement("div", {
      className: "video-title-header"
    }, /*#__PURE__*/React.createElement("h3", null, playingMovie.title, playingEpisode && /*#__PURE__*/React.createElement("span", {
      className: "video-ep-subtitle"
    }, " \u2014 ", playingEpisode.title)), /*#__PURE__*/React.createElement("span", {
      className: "video-user-pill"
    }, "Watching as ", currentProfile?.name))), /*#__PURE__*/React.createElement("div", {
      className: "video-canvas-viewport"
    }, playingMovie.trailerUrl && !hasIframeError ? /*#__PURE__*/React.createElement("iframe", {
      src: `${playingMovie.trailerUrl}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&rel=0`,
      title: playingMovie.title,
      className: "video-iframe",
      allow: "autoplay; encrypted-media; fullscreen",
      onError: () => setHasIframeError(true)
    }) : /*#__PURE__*/React.createElement("div", {
      className: "video-fallback-backdrop",
      style: {
        backgroundImage: `linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 100%), url("${playingMovie.backdrop || playingMovie.poster}")`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "video-buffering-overlay"
    }, /*#__PURE__*/React.createElement("div", {
      className: "video-spinner"
    }), /*#__PURE__*/React.createElement("h3", null, playingMovie.title), /*#__PURE__*/React.createElement("p", null, "Streaming 4K Ultra HD \u2022 Spatial Audio"), /*#__PURE__*/React.createElement("span", {
      className: "fallback-note"
    }, "Interactive video simulation active")))), /*#__PURE__*/React.createElement("div", {
      className: `video-controls-overlay ${showControls ? "visible" : "hidden"}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "video-timeline-bar"
    }, /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "0",
      max: "100",
      step: "0.1",
      value: progressPercent,
      onChange: handleSeek,
      className: "video-timeline-slider"
    }), /*#__PURE__*/React.createElement("div", {
      className: "video-timeline-fill",
      style: {
        width: `${progressPercent}%`
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "video-controls-bottom-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "video-controls-left"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-ctrl-btn play-pause-btn",
      onClick: () => setIsPlaying(!isPlaying),
      title: isPlaying ? "Pause" : "Play"
    }, isPlaying ? "❚❚" : "▶"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-ctrl-btn",
      onClick: () => handleSkip(-10),
      title: "Rewind 10 seconds"
    }, "\u21BA 10"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-ctrl-btn",
      onClick: () => handleSkip(10),
      title: "Fast forward 10 seconds"
    }, "10 \u21BB"), /*#__PURE__*/React.createElement("div", {
      className: "video-volume-group"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-ctrl-btn volume-btn",
      onClick: () => setIsMuted(!isMuted),
      title: isMuted ? "Unmute" : "Mute"
    }, isMuted ? "🔇" : "🔊"), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "0",
      max: "1",
      step: "0.05",
      value: isMuted ? 0 : volume,
      onChange: e => {
        setVolume(parseFloat(e.target.value));
        setIsMuted(false);
      },
      className: "video-volume-slider"
    })), /*#__PURE__*/React.createElement("div", {
      className: "video-time-display"
    }, /*#__PURE__*/React.createElement("span", null, formatTime(currentTimeSec)), /*#__PURE__*/React.createElement("span", {
      className: "time-sep"
    }, "/"), /*#__PURE__*/React.createElement("span", null, formatTime(totalDurationSec)))), /*#__PURE__*/React.createElement("div", {
      className: "video-controls-right"
    }, /*#__PURE__*/React.createElement("span", {
      className: "video-quality-pill"
    }, "4K UHD"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-ctrl-btn fullscreen-btn",
      onClick: toggleFullscreen,
      title: "Toggle Fullscreen"
    }, "\u26F6"))))));
  }

  // --- src/components/Profiles/ManageProfilesModal.jsx ---

  function ManageProfilesModal({
    profileToEdit = null,
    onClose
  }) {
    const {
      addProfile,
      updateProfile,
      deleteProfile,
      profiles
    } = useProfile();
    const {
      showToast
    } = useMovie();
    const isEditing = Boolean(profileToEdit);
    const [name, setName] = useState(profileToEdit ? profileToEdit.name : "");
    const [isKids, setIsKids] = useState(profileToEdit ? profileToEdit.isKids : false);
    const [selectedAvatar, setSelectedAvatar] = useState(profileToEdit ? profileToEdit.avatar : AVATAR_OPTIONS[0].svg);
    const handleSubmit = e => {
      e.preventDefault();
      if (!name.trim()) return;
      if (isEditing) {
        updateProfile(profileToEdit.id, {
          name: name.trim(),
          isKids: Boolean(isKids),
          avatar: selectedAvatar,
          color: isKids ? "#3A86FF" : "#E50914"
        });
        showToast(`Updated profile "${name.trim()}"`, "success");
      } else {
        addProfile(name.trim(), isKids, selectedAvatar);
        showToast(`Created profile "${name.trim()}"`, "success");
      }
      onClose();
    };
    const handleDelete = () => {
      if (profileToEdit) {
        if (profiles.length <= 1) {
          showToast("You must keep at least one profile", "error");
          return;
        }
        deleteProfile(profileToEdit.id);
        showToast(`Deleted profile "${profileToEdit.name}"`, "info");
        onClose();
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "modal-backdrop-overlay animate-fade-in",
      onClick: onClose
    }, /*#__PURE__*/React.createElement("div", {
      className: "add-profile-dialog animate-scale-up",
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("h2", null, isEditing ? "Edit Profile" : "Add Profile"), /*#__PURE__*/React.createElement("p", {
      className: "add-profile-subtitle"
    }, isEditing ? "Change name, avatar, and maturity settings for this profile." : "Add a profile for another person watching Netflix."), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement("div", {
      className: "add-profile-form-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "add-profile-avatar-preview"
    }, /*#__PURE__*/React.createElement("img", {
      src: selectedAvatar,
      alt: "Selected Avatar Preview",
      className: "add-avatar-img"
    })), /*#__PURE__*/React.createElement("div", {
      className: "add-profile-inputs"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Profile Name",
      value: name,
      onChange: e => setName(e.target.value),
      className: "add-name-input",
      autoFocus: true,
      required: true
    }), /*#__PURE__*/React.createElement("label", {
      className: "kids-checkbox-label"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: isKids,
      onChange: e => {
        const checked = e.target.checked;
        setIsKids(checked);
        if (checked) {
          setSelectedAvatar(AVATAR_OPTIONS[2].svg);
        }
      }
    }), /*#__PURE__*/React.createElement("span", null, "Kid? (Show kid-safe titles only)")))), /*#__PURE__*/React.createElement("div", {
      className: "avatar-selection-section"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "avatar-gallery-title"
    }, "Choose an Avatar Logo:"), /*#__PURE__*/React.createElement("div", {
      className: "avatar-options-grid"
    }, AVATAR_OPTIONS.map(opt => {
      const isCurrent = selectedAvatar === opt.svg;
      return /*#__PURE__*/React.createElement("div", {
        key: opt.id,
        className: `avatar-option-card ${isCurrent ? "selected" : ""}`,
        onClick: () => setSelectedAvatar(opt.svg),
        title: opt.name
      }, /*#__PURE__*/React.createElement("img", {
        src: opt.svg,
        alt: opt.name,
        className: "avatar-thumbnail-img"
      }), isCurrent && /*#__PURE__*/React.createElement("div", {
        className: "avatar-check-badge"
      }, "\u2713"));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "add-profile-buttons"
    }, /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "add-save-btn",
      disabled: !name.trim()
    }, "Save"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "add-cancel-btn",
      onClick: onClose
    }, "Cancel"), isEditing && /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "add-delete-btn",
      onClick: handleDelete
    }, "Delete Profile")))));
  }

  // --- src/components/Profiles/ProfileGate.jsx ---

  function ProfileGate() {
    const {
      profiles,
      switchProfile,
      setIsProfileGateOpen,
      setIsProfileSelected
    } = useProfile();
    const {
      showToast
    } = useMovie();
    const [isManaging, setIsManaging] = useState(false);
    const [modalTarget, setModalTarget] = useState(null); // null, 'add', or profile object

    const handleCardClick = profile => {
      if (isManaging) {
        setModalTarget(profile);
      } else {
        switchProfile(profile.id);
        setIsProfileGateOpen(false);
        setIsProfileSelected(true);
        showToast(`Welcome back, ${profile.name}!`, "success");
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "profile-gate-overlay animate-fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "profile-gate-header"
    }, /*#__PURE__*/React.createElement(NetflixWordmark, {
      height: 36
    })), /*#__PURE__*/React.createElement("div", {
      className: "profile-gate-container"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "profile-gate-heading"
    }, isManaging ? "Manage Profiles" : "Who's watching?"), /*#__PURE__*/React.createElement("div", {
      className: "profile-cards-grid"
    }, profiles.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: "profile-gate-card",
      onClick: () => handleCardClick(p)
    }, /*#__PURE__*/React.createElement("div", {
      className: "profile-avatar-frame",
      style: {
        borderColor: p.color || "#E50914"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p.avatar,
      alt: p.name,
      className: "profile-gate-avatar-img"
    }), isManaging && /*#__PURE__*/React.createElement("div", {
      className: "profile-edit-badge",
      title: "Click to edit name & avatar"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "28",
      height: "28",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 20h9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
    }))), p.isKids && /*#__PURE__*/React.createElement("span", {
      className: "profile-gate-kids-tag"
    }, "KIDS")), /*#__PURE__*/React.createElement("span", {
      className: "profile-gate-name"
    }, p.name))), /*#__PURE__*/React.createElement("div", {
      className: "profile-gate-card add-profile-card",
      onClick: () => setModalTarget("add")
    }, /*#__PURE__*/React.createElement("div", {
      className: "profile-avatar-frame add-avatar-frame"
    }, /*#__PURE__*/React.createElement("span", {
      className: "add-plus-icon"
    }, "+")), /*#__PURE__*/React.createElement("span", {
      className: "profile-gate-name"
    }, "Add Profile"))), /*#__PURE__*/React.createElement("div", {
      className: "profile-gate-actions"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `profile-manage-btn ${isManaging ? "done-btn" : ""}`,
      onClick: () => setIsManaging(!isManaging)
    }, isManaging ? "Done" : "Manage Profiles"))), modalTarget && /*#__PURE__*/React.createElement(ManageProfilesModal, {
      profileToEdit: typeof modalTarget === "object" ? modalTarget : null,
      onClose: () => setModalTarget(null)
    }));
  }

  // --- src/components/Auth/LoginPage.jsx ---

  function LoginPage() {
    const {
      login
    } = useAuth();
    const {
      switchProfile
    } = useProfile();
    const {
      showToast
    } = useMovie();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(true);
    const [error, setError] = useState("");
    const handleSubmit = e => {
      e.preventDefault();
      if (!email.includes("@")) {
        setError("Please enter a valid email address.");
        return;
      }
      if (password.length < 4) {
        setError("Your password must contain between 4 and 60 characters.");
        return;
      }
      login(email, password);
      showToast(`Signed in as ${email}`, "success");
    };
    const handleQuickLogin = (profileId, demoEmail, name) => {
      login(demoEmail, "password123");
      switchProfile(profileId);
      showToast(`Welcome back, ${name}!`, "success");
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "login-screen-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "login-bg-overlay"
    }), /*#__PURE__*/React.createElement("header", {
      className: "login-header-bar"
    }, /*#__PURE__*/React.createElement(NetflixWordmark, {
      height: 40
    })), /*#__PURE__*/React.createElement("main", {
      className: "login-card-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "login-form-card animate-scale-up"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "login-heading"
    }, "Sign In"), error && /*#__PURE__*/React.createElement("div", {
      className: "login-error-alert"
    }, error), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit,
      className: "login-main-form"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("input", {
      type: "email",
      placeholder: "Email address",
      value: email,
      onChange: e => {
        setEmail(e.target.value);
        setError("");
      },
      className: "login-input-field",
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("input", {
      type: "password",
      placeholder: "Password",
      value: password,
      onChange: e => {
        setPassword(e.target.value);
        setError("");
      },
      className: "login-input-field",
      required: true
    })), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "login-submit-btn"
    }, "Sign In"), /*#__PURE__*/React.createElement("div", {
      className: "login-helpers-row"
    }, /*#__PURE__*/React.createElement("label", {
      className: "remember-checkbox-label"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: rememberMe,
      onChange: e => setRememberMe(e.target.checked)
    }), /*#__PURE__*/React.createElement("span", null, "Remember me")), /*#__PURE__*/React.createElement("a", {
      href: "#help",
      className: "help-link",
      onClick: e => {
        e.preventDefault();
        showToast("Password reset assistance sent to email", "info");
      }
    }, "Need help?"))), /*#__PURE__*/React.createElement("div", {
      className: "demo-quick-login-box"
    }, /*#__PURE__*/React.createElement("p", {
      className: "demo-login-label"
    }, "Instant Test Logins:"), /*#__PURE__*/React.createElement("div", {
      className: "demo-btn-group"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "demo-profile-chip alex-chip",
      onClick: () => handleQuickLogin("profile-alex", "alex@netflix.com", "Alex")
    }, "Sign In as Alex (Main)"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "demo-profile-chip sarah-chip",
      onClick: () => handleQuickLogin("profile-sarah", "sarah@netflix.com", "Sarah")
    }, "Sign In as Sarah (Second Profile)"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "demo-profile-chip kids-chip",
      onClick: () => handleQuickLogin("profile-kids", "kids@netflix.com", "Kids")
    }, "Sign In as Kids (Kids Profile)"))), /*#__PURE__*/React.createElement("div", {
      className: "login-signup-prompt"
    }, /*#__PURE__*/React.createElement("span", null, "New to Netflix? "), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "signup-link-btn",
      onClick: () => handleQuickLogin("profile-alex", "member@netflix.com", "Member")
    }, "Sign up now.")), /*#__PURE__*/React.createElement("p", {
      className: "login-recaptcha-text"
    }, "This page is protected by Google reCAPTCHA to ensure you're not a bot."))));
  }

  // --- src/components/Auth/PlanSelectionPage.jsx ---

  function PlanSelectionPage() {
    const {
      selectPlan,
      logout,
      user
    } = useAuth();
    const {
      setIsProfileGateOpen,
      setIsProfileSelected
    } = useProfile();
    const {
      showToast
    } = useMovie();
    const [activePlanId, setActivePlanId] = useState("premium");
    const handleContinue = () => {
      selectPlan(activePlanId);
      const chosenPlan = SUBSCRIPTION_PLANS.find(p => p.id === activePlanId);
      showToast(`Subscribed to ${chosenPlan?.name} Plan`, "success");
      setIsProfileGateOpen(true);
      setIsProfileSelected(false);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "plan-selection-screen animate-fade-in"
    }, /*#__PURE__*/React.createElement("header", {
      className: "plan-selection-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "plan-header-inner"
    }, /*#__PURE__*/React.createElement(NetflixWordmark, {
      height: 32
    }), /*#__PURE__*/React.createElement("button", {
      className: "plan-signout-btn",
      onClick: logout
    }, "Sign Out"))), /*#__PURE__*/React.createElement("main", {
      className: "plan-selection-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "plan-selection-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "plan-step-indicator"
    }, "STEP ", /*#__PURE__*/React.createElement("strong", null, "2"), " OF ", /*#__PURE__*/React.createElement("strong", null, "3")), /*#__PURE__*/React.createElement("h1", {
      className: "plan-title"
    }, "Choose the plan that's right for you"), /*#__PURE__*/React.createElement("div", {
      className: "plan-benefits-list"
    }, /*#__PURE__*/React.createElement("div", {
      className: "benefit-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "benefit-check"
    }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Watch all you want. Ad-free.")), /*#__PURE__*/React.createElement("div", {
      className: "benefit-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "benefit-check"
    }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Recommendations just for you.")), /*#__PURE__*/React.createElement("div", {
      className: "benefit-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "benefit-check"
    }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Change or cancel your plan anytime."))), /*#__PURE__*/React.createElement("div", {
      className: "plans-grid"
    }, SUBSCRIPTION_PLANS.map(plan => {
      const isSelected = activePlanId === plan.id;
      return /*#__PURE__*/React.createElement("div", {
        key: plan.id,
        className: `plan-card ${isSelected ? "selected" : ""}`,
        onClick: () => setActivePlanId(plan.id)
      }, /*#__PURE__*/React.createElement("div", {
        className: "plan-card-header"
      }, /*#__PURE__*/React.createElement("div", {
        className: "plan-name-badge"
      }, plan.name), /*#__PURE__*/React.createElement("div", {
        className: "plan-price-row"
      }, /*#__PURE__*/React.createElement("span", {
        className: "plan-price"
      }, plan.price), /*#__PURE__*/React.createElement("span", {
        className: "plan-period"
      }, plan.pricePeriod)), plan.badge && /*#__PURE__*/React.createElement("span", {
        className: "plan-highlight-pill"
      }, plan.badge)), /*#__PURE__*/React.createElement("div", {
        className: "plan-card-specs"
      }, /*#__PURE__*/React.createElement("div", {
        className: "spec-row"
      }, /*#__PURE__*/React.createElement("span", {
        className: "spec-label"
      }, "Resolution:"), /*#__PURE__*/React.createElement("span", {
        className: "spec-val"
      }, plan.resolution)), /*#__PURE__*/React.createElement("div", {
        className: "spec-row"
      }, /*#__PURE__*/React.createElement("span", {
        className: "spec-label"
      }, "Video Quality:"), /*#__PURE__*/React.createElement("span", {
        className: "spec-val"
      }, plan.videoQuality)), /*#__PURE__*/React.createElement("div", {
        className: "spec-row"
      }, /*#__PURE__*/React.createElement("span", {
        className: "spec-label"
      }, "Screens at once:"), /*#__PURE__*/React.createElement("span", {
        className: "spec-val"
      }, plan.screens)), /*#__PURE__*/React.createElement("div", {
        className: "spec-row"
      }, /*#__PURE__*/React.createElement("span", {
        className: "spec-label"
      }, "Supported Devices:"), /*#__PURE__*/React.createElement("span", {
        className: "spec-val"
      }, plan.devices.join(", "))), /*#__PURE__*/React.createElement("div", {
        className: "spec-row"
      }, /*#__PURE__*/React.createElement("span", {
        className: "spec-label"
      }, "Downloads:"), /*#__PURE__*/React.createElement("span", {
        className: "spec-val"
      }, plan.downloads))), /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: `select-plan-btn ${isSelected ? "active" : ""}`,
        onClick: e => {
          e.stopPropagation();
          setActivePlanId(plan.id);
        }
      }, isSelected ? "✓ Selected" : "Select Plan"));
    })), /*#__PURE__*/React.createElement("div", {
      className: "plan-actions-footer"
    }, /*#__PURE__*/React.createElement("button", {
      className: "plan-continue-btn",
      onClick: handleContinue
    }, "Continue to Profiles \u2192"), /*#__PURE__*/React.createElement("p", {
      className: "plan-disclaimer"
    }, "HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities.")))));
  }

  // --- src/components/Common/Toast.jsx ---

  function Toast() {
    const {
      toast
    } = useMovie();
    if (!toast.visible) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: `netflix-toast-notification ${toast.type} animate-slide-up`
    }, /*#__PURE__*/React.createElement("span", {
      className: "toast-icon"
    }, toast.type === "success" ? "✓" : toast.type === "error" ? "⚠" : "ℹ"), /*#__PURE__*/React.createElement("span", {
      className: "toast-message"
    }, toast.message));
  }

  // --- src/components/Common/Footer.jsx ---

  function Footer() {
    const [language, setLanguage] = useState("English");
    return /*#__PURE__*/React.createElement("footer", {
      className: "netflix-main-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "footer-content-container"
    }, /*#__PURE__*/React.createElement("p", {
      className: "footer-contact-text"
    }, "Questions? Call ", /*#__PURE__*/React.createElement("a", {
      href: "tel:000-800-919-1694",
      className: "footer-phone"
    }, "000-800-919-1694")), /*#__PURE__*/React.createElement("div", {
      className: "footer-links-grid"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "footer-column"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#faq",
      onClick: e => e.preventDefault()
    }, "FAQ")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#investor-relations",
      onClick: e => e.preventDefault()
    }, "Investor Relations")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#privacy",
      onClick: e => e.preventDefault()
    }, "Privacy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#speed-test",
      onClick: e => e.preventDefault()
    }, "Speed Test"))), /*#__PURE__*/React.createElement("ul", {
      className: "footer-column"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#help-centre",
      onClick: e => e.preventDefault()
    }, "Help Centre")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#jobs",
      onClick: e => e.preventDefault()
    }, "Jobs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#cookie-preferences",
      onClick: e => e.preventDefault()
    }, "Cookie Preferences")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#legal-notices",
      onClick: e => e.preventDefault()
    }, "Legal Notices"))), /*#__PURE__*/React.createElement("ul", {
      className: "footer-column"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#account",
      onClick: e => e.preventDefault()
    }, "Account")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#ways-to-watch",
      onClick: e => e.preventDefault()
    }, "Ways to Watch")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#corporate-information",
      onClick: e => e.preventDefault()
    }, "Corporate Information")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#only-on-netflix",
      onClick: e => e.preventDefault()
    }, "Only on Netflix"))), /*#__PURE__*/React.createElement("ul", {
      className: "footer-column"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#media-centre",
      onClick: e => e.preventDefault()
    }, "Media Centre")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#terms-of-use",
      onClick: e => e.preventDefault()
    }, "Terms of Use")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#contact-us",
      onClick: e => e.preventDefault()
    }, "Contact Us")))), /*#__PURE__*/React.createElement("div", {
      className: "footer-language-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "footer-lang-select-box"
    }, /*#__PURE__*/React.createElement("svg", {
      className: "footer-globe-icon",
      viewBox: "0 0 24 24",
      width: "14",
      height: "14",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    })), /*#__PURE__*/React.createElement("select", {
      value: language,
      onChange: e => setLanguage(e.target.value),
      className: "footer-lang-select",
      "aria-label": "Select Language"
    }, /*#__PURE__*/React.createElement("option", {
      value: "English"
    }, "English"), /*#__PURE__*/React.createElement("option", {
      value: "Hindi"
    }, "\u0939\u093F\u0928\u094D\u0926\u0940")), /*#__PURE__*/React.createElement("span", {
      className: "footer-caret"
    }, "\u25BC"))), /*#__PURE__*/React.createElement("p", {
      className: "footer-copyright"
    }, "Netflix Clone")));
  }

  // --- src/App.jsx ---

  function MainApp() {
    const {
      isAuthenticated,
      selectedPlan
    } = useAuth();
    const {
      currentProfile,
      isKids,
      myList,
      isProfileGateOpen,
      isProfileSelected
    } = useProfile();
    const {
      activeTab,
      setActiveTab,
      searchQuery,
      setSearchQuery
    } = useMovie();
    const [showIntro, setShowIntro] = useState(() => {
      return !sessionStorage.getItem("netflix_has_seen_intro");
    });
    const availableMovies = getMoviesForProfile(currentProfile);
    const categories = getCategoriesForProfile(currentProfile);
    const top10List = getTop10ForProfile(currentProfile);
    const searchResults = searchQuery ? searchMovies(searchQuery, currentProfile) : [];
    const myListMovies = myList.map(id => ALL_MOVIES.find(m => m.id === id)).filter(Boolean).filter(m => isKids ? m.isKidFriendly : true);

    // 1. TUDUM OPENING ANIMATION
    if (showIntro) {
      return /*#__PURE__*/React.createElement(TudumIntro, {
        onComplete: () => setShowIntro(false)
      });
    }

    // 2. LOGIN MUST COME FIRST FOR NEW USER
    if (!isAuthenticated) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LoginPage, null), /*#__PURE__*/React.createElement(Toast, null));
    }

    // 3. SUBSCRIPTION PLAN SELECTION AFTER LOGIN
    if (!selectedPlan) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PlanSelectionPage, null), /*#__PURE__*/React.createElement(Toast, null));
    }

    // 4. PROFILE SELECTION ("Who's watching?")
    if (isProfileGateOpen || !isProfileSelected) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProfileGate, null), /*#__PURE__*/React.createElement(Toast, null));
    }

    // 5. MAIN STREAMING PLATFORM (Home, TV, Movies, New & Popular, My List, Kids)
    return /*#__PURE__*/React.createElement("div", {
      className: `netflix-app-root ${isKids ? "kids-theme" : ""}`
    }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
      className: "netflix-main-content"
    }, searchQuery ? /*#__PURE__*/React.createElement("section", {
      className: "search-results-section animate-fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "search-results-header"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "search-results-title"
    }, "Explore titles related to: ", /*#__PURE__*/React.createElement("span", {
      className: "query-highlight"
    }, "\"", searchQuery, "\"")), /*#__PURE__*/React.createElement("span", {
      className: "results-count-badge"
    }, searchResults.length, " ", searchResults.length === 1 ? "title" : "titles", " found")), searchResults.length > 0 ? /*#__PURE__*/React.createElement("div", {
      className: "search-grid-container"
    }, searchResults.map(movie => /*#__PURE__*/React.createElement(MovieCard, {
      key: movie.id,
      movie: movie
    }))) : /*#__PURE__*/React.createElement("div", {
      className: "search-no-results-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: "no-results-icon"
    }, "\uD83D\uDD0D"), /*#__PURE__*/React.createElement("h3", null, "Your search for \"", searchQuery, "\" did not have any matches."), /*#__PURE__*/React.createElement("p", null, "Suggestions:"), /*#__PURE__*/React.createElement("ul", {
      className: "search-suggestions-list"
    }, /*#__PURE__*/React.createElement("li", null, "Try different keywords or check spelling"), /*#__PURE__*/React.createElement("li", null, "Looking for a movie or TV show? Try searching by actor or creator"), /*#__PURE__*/React.createElement("li", null, "Try searching for genres like \"Action\", \"Sci-Fi\", \"Comedy\", or \"Romance\"")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "clear-search-btn",
      onClick: () => setSearchQuery("")
    }, "Back to Browse"))) : activeTab === "mylist" ?
    /*#__PURE__*/
    /* My List View */
    React.createElement("section", {
      className: "mylist-page-section animate-fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mylist-header-bar"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "mylist-page-title"
    }, "My List"), /*#__PURE__*/React.createElement("span", {
      className: "mylist-profile-badge"
    }, currentProfile?.name, "'s Saved Titles (", myListMovies.length, ")")), myListMovies.length > 0 ? /*#__PURE__*/React.createElement("div", {
      className: "mylist-grid-container"
    }, myListMovies.map(movie => /*#__PURE__*/React.createElement(MovieCard, {
      key: movie.id,
      movie: movie
    }))) : /*#__PURE__*/React.createElement("div", {
      className: "mylist-empty-state"
    }, /*#__PURE__*/React.createElement("div", {
      className: "empty-bookmark-icon"
    }, "\uD83D\uDCD1"), /*#__PURE__*/React.createElement("h2", null, "You haven't added any titles to your list yet."), /*#__PURE__*/React.createElement("p", null, "Explore movies and TV shows and click the ", /*#__PURE__*/React.createElement("strong", null, "+"), " button to add them to ", currentProfile?.name, "'s list."), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "browse-now-btn",
      onClick: () => setActiveTab("home")
    }, "Browse Now"))) : activeTab === "movies" ?
    /*#__PURE__*/
    /* Movies View */
    React.createElement("div", {
      className: "movies-tab-view animate-fade-in"
    }, /*#__PURE__*/React.createElement(HeroBanner, null), /*#__PURE__*/React.createElement(ContinueWatchingRow, null), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Action & Blockbusters",
      movies: availableMovies.filter(m => m.genres.includes("Action") && m.type === "movie")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Indian Blockbusters",
      movies: availableMovies.filter(m => m.category.includes("Indian Movies") && m.type === "movie")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Comedy Hits",
      movies: availableMovies.filter(m => m.genres.includes("Comedy") && m.type === "movie")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Sci-Fi & Adventures",
      movies: availableMovies.filter(m => m.genres.includes("Sci-Fi") && m.type === "movie")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Top Rated Movies",
      movies: availableMovies.filter(m => m.category.includes("Top Rated") && m.type === "movie")
    })) : activeTab === "tv" ?
    /*#__PURE__*/
    /* TV Shows View */
    React.createElement("div", {
      className: "tv-tab-view animate-fade-in"
    }, /*#__PURE__*/React.createElement(HeroBanner, null), /*#__PURE__*/React.createElement(ContinueWatchingRow, null), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Trending TV Series",
      movies: availableMovies.filter(m => m.type === "series")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Korean Dramas & Hits",
      movies: availableMovies.filter(m => m.category.includes("Korean Shows") && m.type === "series")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Sci-Fi & Fantasy Series",
      movies: availableMovies.filter(m => (m.genres.includes("Sci-Fi") || m.genres.includes("Fantasy")) && m.type === "series")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Netflix Originals",
      movies: availableMovies.filter(m => m.category.includes("Netflix Originals") && m.type === "series")
    })) : activeTab === "new_popular" ?
    /*#__PURE__*/
    /* New & Popular View */
    React.createElement("div", {
      className: "new-popular-tab-view animate-fade-in"
    }, /*#__PURE__*/React.createElement(HeroBanner, null), /*#__PURE__*/React.createElement(Top10Row, {
      title: "Top 10 in Streaming Today",
      movies: top10List
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Trending This Week",
      movies: availableMovies.filter(m => m.category.includes("Trending Now"))
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Popular on Netflix",
      movies: availableMovies.filter(m => m.category.includes("Popular on Netflix"))
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "New Releases",
      movies: availableMovies.filter(m => parseInt(m.year) >= 2022)
    })) :
    /*#__PURE__*/
    /* Home View (Hero, Continue Watching, Top 10, Dynamic Rows) */
    React.createElement("div", {
      className: "home-tab-view animate-fade-in"
    }, /*#__PURE__*/React.createElement(HeroBanner, null), /*#__PURE__*/React.createElement(ContinueWatchingRow, null), !isKids && top10List.length > 0 && /*#__PURE__*/React.createElement(Top10Row, {
      title: "Top 10 in Streaming Today",
      movies: top10List
    }), categories.map(cat => {
      const rowMovies = availableMovies.filter(cat.filter);
      if (rowMovies.length === 0) return null;
      return /*#__PURE__*/React.createElement(MovieRow, {
        key: cat.id,
        title: cat.title,
        movies: rowMovies,
        isLarge: cat.id === "netflix-originals" || cat.id === "popular-kids"
      });
    }))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MovieDetailModal, null), /*#__PURE__*/React.createElement(VideoPlayerModal, null), /*#__PURE__*/React.createElement(Toast, null));
  }
  function App() {
    return /*#__PURE__*/React.createElement(AuthProvider, null, /*#__PURE__*/React.createElement(ProfileProvider, null, /*#__PURE__*/React.createElement(MovieProvider, null, /*#__PURE__*/React.createElement(MainApp, null))));
  }

  // --- src/index.js ---

  function mountApp() {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", mountApp);
        return;
      }
      let fallbackRoot = document.getElementById("root");
      if (!fallbackRoot) {
        fallbackRoot = document.createElement("div");
        fallbackRoot.id = "root";
        document.body.appendChild(fallbackRoot);
      }
      mountToElement(fallbackRoot);
      return;
    }
    mountToElement(rootElement);
  }
  function mountToElement(el) {
    try {
      const ReactLib = window.React || React;
      const ReactDOMLib = window.ReactDOM || ReactDOM;
      if (ReactDOMLib && ReactDOMLib.createRoot) {
        const root = ReactDOMLib.createRoot(el);
        root.render(ReactLib.createElement(ReactLib.StrictMode, null, ReactLib.createElement(App, null)));
      } else if (ReactDOMLib && ReactDOMLib.render) {
        ReactDOMLib.render(ReactLib.createElement(App, null), el);
      } else {
        console.error("ReactDOM is not available to mount the Netflix App.");
      }
    } catch (err) {
      console.error("Error mounting Netflix App:", err);
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountApp);
  } else {
    mountApp();
  }
})();
