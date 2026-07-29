(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))w(S);new MutationObserver(S=>{for(const C of S)if(C.type==="childList")for(const B of C.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&w(B)}).observe(document,{childList:!0,subtree:!0});function d(S){const C={};return S.integrity&&(C.integrity=S.integrity),S.referrerPolicy&&(C.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?C.credentials="include":S.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function w(S){if(S.ep)return;S.ep=!0;const C=d(S);fetch(S.href,C)}})();function Ep(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Di={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function kp(){if(gm)return fe;gm=1;var o=Symbol.for("react.element"),M=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),O=Symbol.iterator;function G(g){return g===null||typeof g!="object"?null:(g=O&&g[O]||g["@@iterator"],typeof g=="function"?g:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Me=Object.assign,ce={};function ee(g,N,ie){this.props=g,this.context=N,this.refs=ce,this.updater=ie||q}ee.prototype.isReactComponent={},ee.prototype.setState=function(g,N){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,N,"setState")},ee.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function oe(){}oe.prototype=ee.prototype;function Ee(g,N,ie){this.props=g,this.context=N,this.refs=ce,this.updater=ie||q}var Re=Ee.prototype=new oe;Re.constructor=Ee,Me(Re,ee.prototype),Re.isPureReactComponent=!0;var Y=Array.isArray,je=Object.prototype.hasOwnProperty,Ge={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function ue(g,N,ie){var me,be={},ge=null,Be=null;if(N!=null)for(me in N.ref!==void 0&&(Be=N.ref),N.key!==void 0&&(ge=""+N.key),N)je.call(N,me)&&!$.hasOwnProperty(me)&&(be[me]=N[me]);var Ce=arguments.length-2;if(Ce===1)be.children=ie;else if(1<Ce){for(var We=Array(Ce),mn=0;mn<Ce;mn++)We[mn]=arguments[mn+2];be.children=We}if(g&&g.defaultProps)for(me in Ce=g.defaultProps,Ce)be[me]===void 0&&(be[me]=Ce[me]);return{$$typeof:o,type:g,key:ge,ref:Be,props:be,_owner:Ge.current}}function R(g,N){return{$$typeof:o,type:g.type,key:N,ref:g.ref,props:g.props,_owner:g._owner}}function te(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function Q(g){var N={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(ie){return N[ie]})}var ye=/\/+/g;function re(g,N){return typeof g=="object"&&g!==null&&g.key!=null?Q(""+g.key):N.toString(36)}function se(g,N,ie,me,be){var ge=typeof g;(ge==="undefined"||ge==="boolean")&&(g=null);var Be=!1;if(g===null)Be=!0;else switch(ge){case"string":case"number":Be=!0;break;case"object":switch(g.$$typeof){case o:case M:Be=!0}}if(Be)return Be=g,be=be(Be),g=me===""?"."+re(Be,0):me,Y(be)?(ie="",g!=null&&(ie=g.replace(ye,"$&/")+"/"),se(be,N,ie,"",function(mn){return mn})):be!=null&&(te(be)&&(be=R(be,ie+(!be.key||Be&&Be.key===be.key?"":(""+be.key).replace(ye,"$&/")+"/")+g)),N.push(be)),1;if(Be=0,me=me===""?".":me+":",Y(g))for(var Ce=0;Ce<g.length;Ce++){ge=g[Ce];var We=me+re(ge,Ce);Be+=se(ge,N,ie,We,be)}else if(We=G(g),typeof We=="function")for(g=We.call(g),Ce=0;!(ge=g.next()).done;)ge=ge.value,We=me+re(ge,Ce++),Be+=se(ge,N,ie,We,be);else if(ge==="object")throw N=String(g),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return Be}function Le(g,N,ie){if(g==null)return g;var me=[],be=0;return se(g,me,"","",function(ge){return N.call(ie,ge,be++)}),me}function ze(g){if(g._status===-1){var N=g._result;N=N(),N.then(function(ie){(g._status===0||g._status===-1)&&(g._status=1,g._result=ie)},function(ie){(g._status===0||g._status===-1)&&(g._status=2,g._result=ie)}),g._status===-1&&(g._status=0,g._result=N)}if(g._status===1)return g._result.default;throw g._result}var ke={current:null},z={transition:null},K={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:z,ReactCurrentOwner:Ge};function A(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:Le,forEach:function(g,N,ie){Le(g,function(){N.apply(this,arguments)},ie)},count:function(g){var N=0;return Le(g,function(){N++}),N},toArray:function(g){return Le(g,function(N){return N})||[]},only:function(g){if(!te(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},fe.Component=ee,fe.Fragment=d,fe.Profiler=S,fe.PureComponent=Ee,fe.StrictMode=w,fe.Suspense=ne,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,fe.act=A,fe.cloneElement=function(g,N,ie){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var me=Me({},g.props),be=g.key,ge=g.ref,Be=g._owner;if(N!=null){if(N.ref!==void 0&&(ge=N.ref,Be=Ge.current),N.key!==void 0&&(be=""+N.key),g.type&&g.type.defaultProps)var Ce=g.type.defaultProps;for(We in N)je.call(N,We)&&!$.hasOwnProperty(We)&&(me[We]=N[We]===void 0&&Ce!==void 0?Ce[We]:N[We])}var We=arguments.length-2;if(We===1)me.children=ie;else if(1<We){Ce=Array(We);for(var mn=0;mn<We;mn++)Ce[mn]=arguments[mn+2];me.children=Ce}return{$$typeof:o,type:g.type,key:be,ref:ge,props:me,_owner:Be}},fe.createContext=function(g){return g={$$typeof:B,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:C,_context:g},g.Consumer=g},fe.createElement=ue,fe.createFactory=function(g){var N=ue.bind(null,g);return N.type=g,N},fe.createRef=function(){return{current:null}},fe.forwardRef=function(g){return{$$typeof:c,render:g}},fe.isValidElement=te,fe.lazy=function(g){return{$$typeof:ae,_payload:{_status:-1,_result:g},_init:ze}},fe.memo=function(g,N){return{$$typeof:j,type:g,compare:N===void 0?null:N}},fe.startTransition=function(g){var N=z.transition;z.transition={};try{g()}finally{z.transition=N}},fe.unstable_act=A,fe.useCallback=function(g,N){return ke.current.useCallback(g,N)},fe.useContext=function(g){return ke.current.useContext(g)},fe.useDebugValue=function(){},fe.useDeferredValue=function(g){return ke.current.useDeferredValue(g)},fe.useEffect=function(g,N){return ke.current.useEffect(g,N)},fe.useId=function(){return ke.current.useId()},fe.useImperativeHandle=function(g,N,ie){return ke.current.useImperativeHandle(g,N,ie)},fe.useInsertionEffect=function(g,N){return ke.current.useInsertionEffect(g,N)},fe.useLayoutEffect=function(g,N){return ke.current.useLayoutEffect(g,N)},fe.useMemo=function(g,N){return ke.current.useMemo(g,N)},fe.useReducer=function(g,N,ie){return ke.current.useReducer(g,N,ie)},fe.useRef=function(g){return ke.current.useRef(g)},fe.useState=function(g){return ke.current.useState(g)},fe.useSyncExternalStore=function(g,N,ie){return ke.current.useSyncExternalStore(g,N,ie)},fe.useTransition=function(){return ke.current.useTransition()},fe.version="18.3.1",fe}var Mm;function zm(){return Mm||(Mm=1,Di.exports=kp()),Di.exports}var de=zm();const t=Ep(de);var Or={},Ti={exports:{}},yn={},zi={exports:{}},Pi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function Bp(){return vm||(vm=1,(function(o){function M(z,K){var A=z.length;z.push(K);e:for(;0<A;){var g=A-1>>>1,N=z[g];if(0<S(N,K))z[g]=K,z[A]=N,A=g;else break e}}function d(z){return z.length===0?null:z[0]}function w(z){if(z.length===0)return null;var K=z[0],A=z.pop();if(A!==K){z[0]=A;e:for(var g=0,N=z.length,ie=N>>>1;g<ie;){var me=2*(g+1)-1,be=z[me],ge=me+1,Be=z[ge];if(0>S(be,A))ge<N&&0>S(Be,be)?(z[g]=Be,z[ge]=A,g=ge):(z[g]=be,z[me]=A,g=me);else if(ge<N&&0>S(Be,A))z[g]=Be,z[ge]=A,g=ge;else break e}}return K}function S(z,K){var A=z.sortIndex-K.sortIndex;return A!==0?A:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var C=performance;o.unstable_now=function(){return C.now()}}else{var B=Date,c=B.now();o.unstable_now=function(){return B.now()-c}}var ne=[],j=[],ae=1,O=null,G=3,q=!1,Me=!1,ce=!1,ee=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,Ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Re(z){for(var K=d(j);K!==null;){if(K.callback===null)w(j);else if(K.startTime<=z)w(j),K.sortIndex=K.expirationTime,M(ne,K);else break;K=d(j)}}function Y(z){if(ce=!1,Re(z),!Me)if(d(ne)!==null)Me=!0,ze(je);else{var K=d(j);K!==null&&ke(Y,K.startTime-z)}}function je(z,K){Me=!1,ce&&(ce=!1,oe(ue),ue=-1),q=!0;var A=G;try{for(Re(K),O=d(ne);O!==null&&(!(O.expirationTime>K)||z&&!Q());){var g=O.callback;if(typeof g=="function"){O.callback=null,G=O.priorityLevel;var N=g(O.expirationTime<=K);K=o.unstable_now(),typeof N=="function"?O.callback=N:O===d(ne)&&w(ne),Re(K)}else w(ne);O=d(ne)}if(O!==null)var ie=!0;else{var me=d(j);me!==null&&ke(Y,me.startTime-K),ie=!1}return ie}finally{O=null,G=A,q=!1}}var Ge=!1,$=null,ue=-1,R=5,te=-1;function Q(){return!(o.unstable_now()-te<R)}function ye(){if($!==null){var z=o.unstable_now();te=z;var K=!0;try{K=$(!0,z)}finally{K?re():(Ge=!1,$=null)}}else Ge=!1}var re;if(typeof Ee=="function")re=function(){Ee(ye)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Le=se.port2;se.port1.onmessage=ye,re=function(){Le.postMessage(null)}}else re=function(){ee(ye,0)};function ze(z){$=z,Ge||(Ge=!0,re())}function ke(z,K){ue=ee(function(){z(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){Me||q||(Me=!0,ze(je))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return G},o.unstable_getFirstCallbackNode=function(){return d(ne)},o.unstable_next=function(z){switch(G){case 1:case 2:case 3:var K=3;break;default:K=G}var A=G;G=K;try{return z()}finally{G=A}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var A=G;G=z;try{return K()}finally{G=A}},o.unstable_scheduleCallback=function(z,K,A){var g=o.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?g+A:g):A=g,z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=A+N,z={id:ae++,callback:K,priorityLevel:z,startTime:A,expirationTime:N,sortIndex:-1},A>g?(z.sortIndex=A,M(j,z),d(ne)===null&&z===d(j)&&(ce?(oe(ue),ue=-1):ce=!0,ke(Y,A-g))):(z.sortIndex=N,M(ne,z),Me||q||(Me=!0,ze(je))),z},o.unstable_shouldYield=Q,o.unstable_wrapCallback=function(z){var K=G;return function(){var A=G;G=K;try{return z.apply(this,arguments)}finally{G=A}}}})(Pi)),Pi}var ym;function Sp(){return ym||(ym=1,zi.exports=Bp()),zi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function Ap(){if(Cm)return yn;Cm=1;var o=zm(),M=Sp();function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var w=new Set,S={};function C(e,n){B(e,n),B(e+"Capture",n)}function B(e,n){for(S[e]=n,e=0;e<n.length;e++)w.add(n[e])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ne=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ae={},O={};function G(e){return ne.call(O,e)?!0:ne.call(ae,e)?!1:j.test(e)?O[e]=!0:(ae[e]=!0,!1)}function q(e,n,a,l){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Me(e,n,a,l){if(n===null||typeof n>"u"||q(e,n,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,a,l,r,i,m){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=r,this.mustUseProperty=a,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=m}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ce(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ce(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ce(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noVa×}{ëkh‘éì¶»§q«^uN_JK˜Ü™X]Q[[Y[
˜ˆ‹[JK˜Ü™X]Q[[Y[
œÛX[‹[ONÈ¹ì¯º"ìHOMÌÈ¹aîº"lˆOMŒÈ¹ê,ùk¦ˆˆ¹o¡y£ä9caÈŠJJJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YN’™Jœ™]\™[Y[\[™[‹Ëœİ]\ÏOOHœ™]\™Y‰‰ˆœ™]\™YŠ_K˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
œÜ[ˆ‹[Ëœİ]\ÏOOHœ™]\™YÈĞT‘QTˆÓÓTUHˆ”‘UT‘SQS•ŠK˜Ü™X]Q[[Y[
šÈ‹[Ëœİ]\ÏOOHœ™]\™YÈº c9.&¹å'ù­«ùmì¹îãú$/yneHˆºf£ù¥í¹a¬ùk¦¹/ey¥í¹db¹b*ùä ùg.ˆŠK˜Ü™X]Q[[Y[
œ‹[Ëœİ]\ÏOOHœ™]\™YØ	ÛË›˜[Y_yg*	ÛËœ™]\™[Y[ÙX\ÛÛŸËœÙX\ÛÛŸyîäù§gùä ùdf9å'ù­«ûï#9¢`9§"yîª¹oey.#º#hú*¢ymì¹îãùl ykf8à ˜ˆ¹.îù/eynm:o¡:`ïycëù.éy..ùbª9k¨ùn ú` 9on{ï&ÌÍ¹l y.éyd#¹.gùcëú ïyg*:-fùkhùîäù§gù¥íº!ê¹á-º` 9on{ï#9l yl!¹oáyá-¹£ ºgm8à ˆŠJKËœİ]\ÈOOHœ™]\™Y‰‰˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ™XÛ[™H‹ÛÛXÚÎ‘K¹cë9o 9cäyn ù/&¹nm¹k¨ùn ú` 9onHŠJJKÏOOH˜\H‰‰˜Ü™X]Q[[Y[
œÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆœYÙK\[™[ŸK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜\XØ][Û‹Z\›ÈŸK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÙXİ[Û‹ZÚXÚÙ\ˆŸK”VQT‹RS’UPUQSÕ‘HŠK˜Ü™X]Q[[Y[
šÈ‹[º+ªyîãùîª¹.®¹..ùbª: e9ìîù.îù/ey/ìy.d:`êŠK˜Ü™X]Q[[Y[
œ‹[¹.îù/ey¥íºeí:`ïycëù.éy£ä9aî¹å,ú+íûï#9«ãùdj9. 9«(xà ¹d!9/ìy.d:`ê9æ¡:`"y.®ºeê9©æùk£9aj:f¤:%ãûï#9å,ú+íùd#¹¢cz ïyçéz`dùîäù§§8à ˆŠJK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹îãùîª¹.®¹â­¹  HŠK˜Ü™X]Q[[Y[
œİ›Û™È‹[Ë›\İ\XØ][Û•ÙYZÏOOX	ÛËœÙX\ÛÛŸKIÛËÙYZßXÈ¹§+9dj9mì¹å,ú+íÈˆºf£ù¥í¹cëùå,ú+íÈŠK˜Ü™X]Q[[Y[
œÛX[‹[Ë›İ™\˜[LL	‰YOÈ¹mìº)èúe L¹.¯ù«)ùa`ú!êº`"y."ùk­ˆˆ¹/ìy.d:`ê9¨!ùaá¹.#yak9o ŠJJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜\XØ][Û‹YÜšYŸKÚK™š[\ŠÏOœË˜ÛXˆOO[Ë˜ÛXŠK›X\
ÏOØÛÛœİO[Ë›\İ\XØ][Û•ÙYZÏOOX	ÛËœÙX\ÛÛŸKIÛËÙYZßX[Ë›YÙ[™ÚÚXÙUÚ[™İÏOOTÜ™]\›ˆ˜Ü™X]Q[[Y[
˜\XÛH‹ØÛ\ÜÓ˜[YN’™J˜\XØ][Û‹XØ\™‹šKš[˜ÛY\ÊË˜ÛXŠI‰ˆœİ\\ˆŠKÙ^NœË˜ÛXŸK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜ÛX‹XÜ™\İ‹İ[NÈ‹KXÛXˆ[–ÜË›XYİYWK˜XØÙ[_KË˜ÛX–ÌJK˜Ü™X]Q[[Y[
KİÛ™NœË™]\›ÜOOOH¹«)ùa¨È˜Ú[\[ÛœÈœË™]\›ÜOOOH¹¥èÈ›]]Yˆ™]\›ÜHŸKË™]\›ÜJJK˜Ü™X]Q[[Y[
šÈ‹[Ë˜ÛXŠK˜Ü™X]Q[[Y[
œ‹[Ë›XYİYKˆ0­È9ä úf'ùk§¹b¦È‹Ëœ˜][™ÊK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™\]Z\™[Y[ŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹/ìy.d:`ê:) y¬`ˆŠK˜Ü™X]Q[[Y[
œİ›Û™È‹[¹§.¹káˆŠK˜Ü™X]Q[[Y[
œÛX[‹[º ïyb¦øà z(j9ã¬9d£:f-yk®zg 9¬`¹gaù.#yak9o ŠJK˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœš[X\H‹\ØX›YKÛÛXÚÎŠ
OO›[ŠÊ_KOÈ¹§+9dj9mì¹îãùå,ú+íÈˆ¹¦kº`&¹b¨9æçùå,ú+íÈŠKË›İ™\˜[LL	‰˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ›YÙ[™]˜[œÙ™\ˆ‹\ØX›Yˆ]Y_‹ÛÛXÚÎŠ
OO–XJÊ_KYOØÈ¹§+9ê¥ùcèú!êº`"y§.¹/&¹mì¹/oùå*ˆŒ¹.¯ù«)ùa`ù£!ùk¦¹."ùk­ˆˆ¹ëbyo¡y."ù«(z/k9/&¹ê¥ÈŠJ_JJJKÏOOH˜˜[Ûˆ‰‰›
ÊI‰˜Ü™X]Q[[Y[
œÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆœYÙK\[™[ŸK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜[Û‹Z\›ÈŸK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
KİÛ™Nˆ˜Ú[\[ÛœÈŸKSÓˆ	ÓÔˆŠK˜Ü™X]Q[[Y[
šˆ‹[¹.%¹åc9§ 9/lùä ùdf9.¢yi.¹¢&ŠK˜Ü™X]Q[[Y[
œ‹[º/æy.*¹¨#ùæë¹cê¹/&¹kîz ïyb¦ú/¯¹b,L8à ynm¹.%9«hùg*9«)ùa¨9ä úf'ù¥b9b¦ùæ¡9ä ùdf9o 9¥/¸à ¹«å:-fú(j9ã¬9d£9g.¹i%º/ä9/g:`ïy/&¹olydãy¥+ù£ z/æùn©¸à ˆŠJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÛÛ[‹X˜[ŸK¸¥ãÈ‹˜Ü™X]Q[[Y[
œÜ[ˆ‹[ºaäyä ùieˆŠJJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜[Û‹YÜšYŸK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜[Û‹\›ÙÜ™\ÜÈŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹§+:-fùkhù¥+ù£ z/æùn©ˆŠK˜Ü™X]Q[[Y[
œİ›Û™È‹[X]œ›İ[™
Ë˜˜[Û”›ÙÜ™\Üß
K˜Ü™X]Q[[Y[
œÛX[‹[‰HŠJK˜Ü™X]Q[[Y[
Û‹İ˜[YN›Ë˜˜[Û”›ÙÜ™\ÜßÛÛÜˆˆÙŒ˜ÎMÈŸJK˜Ü™X]Q[[Y[
œ‹[¹«å:-fú+á9b!¸à z/æùä øà ybªy¥.ùd£9«)ùa¨:(j9ã¬9/&¹h§¹b¨:/æùn©¸à ˆ‹Ë˜ÛXOOH¹æ¡ùk­ºjk9o­úaãÈ¹æ¡ùk­ºjk9o­úaã9hì9§&ù/oú/æùn©º`'ùn©¹£ä:jæL	xà ˆ–È¹mí9hg¹ïeú`¨È‹¹¢ç9.ày¡eyl/:näH—Kš[˜ÛY\ÊË˜ÛXŠOÈ¹/ìy.d:`ê9hì9§&ù/oú/æùn©º`'ùn©¹£ä:jæÌ	xà ˆˆ¹odùbcy/ìy.d:`ê9¬¨y§"zh§yi%¹hì9§&ùb¨9¢$8à ˆŠJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜[Û‹XXİ[ÛˆŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹g.¹i%º/ä9/gŠK˜Ü™X]Q[[Y[
šÈ‹[¹.l:`&º+á:`"yk¦9dfŠK˜Ü™X]Q[[Y[
œ‹[º"¬z-.H8 «LÈ:/æú(c9éæ9ká¹ak9alûï#9«ãùdj9. 9«(xà ¹/&¹h§¹b¨9¥+ù£ z/æùn©»ï#9.gùcëú ïyb-º`(9â!¹à®9 )ù.¢z+«¹¥¬:eîøà ˆŠK˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœš[X\H‹\ØX›YŠË˜Ø\Ú
OLË›\İœšX™UÙYZÏOOX	ÛËœÙX\ÛÛŸKIÛËÙYZßXÛÛXÚÎ”›KË›\İœšX™UÙYZÏOOX	ÛËœÙX\ÛÛŸKIÛËÙYZßXÈ¹§+9dj9mì¹îãú/ä9/gŠË˜Ø\Ú
OLÈº-a:aäy.#z-¬Èˆ¹¥+ù.æ8 «LÈŠJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜[Û‹XXİ[Ûˆš[˜[ŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹§ 9îâ9¢¥yéjŠK˜Ü™X]Q[[Y[
šÈ‹[¹cà¹b¨:aäyä ùieº+á:`"HŠK˜Ü™X]Q[[Y[
œ‹[º/æùn©º/¯¹b,L9d#º#­ùo¥ù. 9«(z+á:`"y§.¹/&»ï#9§ 9îâ:#­ùie¹© ¹ã¡ù..¹."yb!¹.bù. 8à ¹«ãù.*º-fùkhùcêº ïycà¹b¨9. 9«(xà ˆŠK˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœš[X\H‹\ØX›YŠË˜˜[Û”›ÙÜ™\Üß
OLË˜˜[Û][\ÙX\ÛÛOO[ËœÙX\ÛÛ‹ÛÛXÚÎœX_KË˜˜[Û][\ÙX\ÛÛOO[ËœÙX\ÛÛÈ¹§+:-fùkhú+á:`"ymì¹îäù§gÈŠË˜˜[Û”›ÙÜ™\Üß
OLÈº/æùn©¹l&¹§*º/¯¹b,Lˆ¹cà¹b¨9§ 9îâ:+á:`"HŠJJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜[Û‹Z\İÜHŸK˜Ü™X]Q[[Y[
œİ›Û™È‹[º c9.&¹å'ù­«úaäyä ùieˆŠK˜Ü™X]Q[[Y[
œÜ[ˆ‹[Ë˜˜[Û•Ú[œßˆ9n©ÈŠJJKÏOOH›Ù™™\œÈ‰‰˜Ü™X]Q[[Y[
œÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆœYÙK\[™[ŸK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X\šÙ]ZXYŸK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÙXİ[Û‹ZÚXÚÙ\ˆŸK•S”Ñ‘TˆPT’ÑUŠK˜Ü™X]Q[[Y[
šÈ‹[¹/h9æ¡9îãùîª¹.®¹b§¹ak9k©ŠK˜Ü™X]Q[[Y[
œ‹[¹¢©y.íùcê¹/&¹g*9i#ùê¥ûï"9ë+x $Í:/k»ï"yd£9a«9ê¥ûï"9ë+Nx $ÌŒˆ:/k»ï"yaî¹ã¬;ï#:g :) z ïyb¦ÈÍJÈ9.%9ceyg.º+á9b!º/¯¹b,Œ¸à ˆŠJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X\šÙ]]˜[YHŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹[YOÈº/k9/&¹ê¥ùcèùo 9¥/ˆˆº/k9/&¹ê¥ùcèùalúeëHŠK˜Ü™X]Q[[Y[
œİ›Û™È‹[JË˜[YJJJJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YN’™JÚ[™İËX˜[›™\ˆ‹YI‰ˆ›Ü[ˆŠ_K˜Ü™X]Q[[Y[
œİ›Û™È‹[YOÈ¹ã¬9g*9cëù.éyk£9¢$:/k9/&ˆˆ¹odùbcy.#z ïyk£9¢$:/k9/&ˆŠK˜Ü™X]Q[[Y[
œÜ[ˆ‹[YOÈ¹îãùîª¹.®¹cëù.éz,"9b)9nm¹ëo¹ïl¹¥¬9d"9d#8à ˆˆ¹îéùîëy«å:-fùd£:+«yîàûï#9mì¹§"y¢©y.íù/&¹/çyåfyb,9."ù. 9.*¹ê¥ùcèøà ˆŠJKË›Ù™™\œË›[™İOOLİ˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™[\K[Ù™™\œÈŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¸¥áÈŠK˜Ü™X]Q[[Y[
šÈ‹[¹¦ ¹¥í¹¬¨y§"y«hùo#ù¢©y.íÈŠK˜Ü™X]Q[[Y[
œ‹[YOÈºjæ9¬-9nlù«å:-fù¢cycëú ïz)é¹cäy¢©y.íûï#: #9.%9d#9. 9¥íºeí9§ 9i&¹¥-¹b,9. 9.ïxà ˆˆ¹ê¥ùcèùalúeëy§'úeí9.#y/&¹å'ù¢$9¥¬9¢©y.íøà ˆŠK˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœš[X\H‹ÛÛXÚÎŠ
OO”Ê›X]Ú\ÈŠ_K¹c®ùaá¹i!ù«å:-fÈŠJN˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Ù™™\œË[\İŸKË›Ù™™\œË›X\

ËJOO˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Ù™™\‹\ÚY]‹Ù^NœË˜ÛXŸK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Ù™™\‹]ÜŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜šYËXÜ™\İ]Ø^HŸKË˜ÛX–ÌJK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
KİÛ™NYOÈ˜Ú[\[ÛœÈˆ›]]YŸKYOÈ¹«hùo#ù¢©y.íÈˆ¹ëbyo¡yê¥ùcèÈŠK˜Ü™X]Q[[Y[
šˆ‹[Ë˜ÛXŠK˜Ü™X]Q[[Y[
œ‹[¹n#9§&ù/h9¢$9..¹ä úf'ù§*¹§iz+¨yb$¹æ¡9¨.9oàù¢$9dfŠJJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Ù™™\‹]\›\ÈŸK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
œÜ[ˆ‹[º/k9/&º-.HŠK˜Ü™X]Q[[Y[
œİ›Û™È‹[¸ «‹Ë™™YK›HŠJK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹dj:%ªˆŠK˜Ü™X]Q[[Y[
œİ›Û™È‹[¸ «‹ËœØ[\KšÈŠJK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹ä úf'ùk§¹b¦ÈŠK˜Ü™X]Q[[Y[
œİ›Û™È‹[Ëœ˜][™ÊJJK˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœš[X\H‹\ØX›Yˆ]YKÛÛXÚÎŠ
OOÕÙJÊKYI‰”ÊšÛYHŠ__KYOÈ¹£©ycåù¢©y.íùnmº/k9/&ˆˆ¹ëbyo¡z/k9/&¹ê¥ùcèÈŠK˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ™XÛ[™H‹ÛÛXÚÎŠ
OOœÙJOŠ‹›Ù™™\œËœÜXÙJKJKŠJ_K¹¢ä¹îçHŠJJJJJKÉ‰˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YN’™J›[Ù[X˜XÚÙ›Ü‹ËXÛ	‰ˆXÛ[šYÚ‹ËšÚ[™OOH›]™H‰‰ˆ›]™KX˜XÚÙ›Ü‹ËšÚ[™OOHœ›Û˜[È‰‰ˆœ›Û˜[ËX˜XÚÙ›ÜŠKÛÛXÚÎŠ
OOˆVÈ™XÚ\Ú[Ûˆ‹›]™H‹œ›Û˜[È‹œ™\ÜÈ—Kš[˜ÛY\ÊËšÚ[™
I‰Š[
_K˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YN’™Jœ™\İ[[[Ù[‹ËšÚ[™ËšYÚYÚÉ‰ˆÚ]ZYÚYÚÈ‹ËXÛ	‰ˆXÛ[X]ÚŠKÛÛXÚÎœÏOœËœİÜ›ÜYØ][ÛŠ
_KËšÚ[™OOH›]™Hİ˜Ü™X]Q[[Y[
\ÚÙ^N˜	ÛËœÙX\ÛÛŸKIÛËÙYZßKIÖOO[[İ›ÚY–VÌ_XÛ˜XÚÎŠ
OOŠ[
_K˜Ü™X]Q[[Y[
ÜØØ\™Y\›ËÜÛ™[–KÛÛ\]][Ûš™KXÛ›ÙKØ[Y[ÎYOOOH¹¦ïú(iH‹Û‘š[š\Ú˜™_JJNËšÚ[™OOHœ›Û˜[Èİ˜Ü™X]Q[[Y[
œÛÛÛÛ\]N“JNËšÚ[™OOHœ™\ÜÈİ˜Ü™X]Q[[Y[
ØØ\™Y\›ËÛ‘š[š\ÚŸJNËšÚ[™OOH›™]ÜÈİ˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›™]ÜËY]Z[ŸK˜Ü™X]Q[[Y[
KİÛ™NË˜\XÛK˜Ø]YÛÜOOOHº"¬z/®HÈ™ÛÜÜÚ\ˆ›]]YŸKË˜\XÛK˜Ø]YÛÜJK˜Ü™X]Q[[Y[
šˆ‹[Ë˜\XÛKšXY[™JK˜Ü™X]Q[[Y[
œ‹[Ë˜\XÛKœİ[[X\JK˜Ü™X]Q[[Y[
œÛX[‹[Ë˜\XÛKœÙX\ÛÛ‹ˆ0­È9ë+‹Ë˜\XÛKÙYZËˆ:/kˆŠKË˜\XÛK››Ô™\ÜÛœÙOİ˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›™]ÜË\™\ÜÛœÙK\İ]\ÈŸKº/æy¦+ù. 9b&yd#¹îëy¢©z`dûï#9¥è:g 9a£y«(yfç¹n¥8à ˆŠNŠË›™]ÜÔ™\ÜÛœÙ\ßßJVÓJË˜\XÛJWOİ˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›™]ÜË\™\ÜÛœÙK\İ]\ÈŸK¸§$È9/h9mì¹îãùkîz/æyb&y¢©z`dù/g9aî¹fç¹n¥;ï#9ak9o :(j9  y¥è9¬åy¤©9fç¸à ˆŠN˜Ü™X]Q[[Y[
‘œ˜YÛY[[˜Ü™X]Q[[Y[
šÈ‹[º`"y¢êy/h9æ¡9ak9o 9fç¹n¥ŠK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›™]ÜË\™\ÜÛœÙKYÜšYŸK	›X\
ÏO˜Ü™X]Q[[Y[
˜]Ûˆ‹ÚÙ^NœËšYÛÛXÚÎŠ
OOšÙJË˜\XÛKÊ_K˜Ü™X]Q[[Y[
œİ›Û™È‹[Ë›˜[YJK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¸ '‹Ëœ][İK¸ 'HŠJJJJK˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœš[X\H‹ÛÛXÚÎŠ
OOŠ[
_Kº/å9fç¹¥¬:eîù.+yoàÈŠJN˜Ü™X]Q[[Y[
‘œ˜YÛY[[˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›[Ù[ZXÛÛˆŸKËšÚ[™OOHÚ[ˆÈ¸¦!HËšÚ[™OOH›ÜÜÈÈ¸¡¤ÈËšÚ[™OOH˜Z[š[™ÈÈ³çÈËšÚ[™OOH™XÚ\Ú[ÛˆÈ¸¦gÈˆHŠK˜Ü™X]Q[[Y[
šˆ‹[Ë]JK˜Ü™X]Q[[Y[
œ‹[Ë˜›ÙJKËšÚ[™OOH™XÚ\Ú[Ûˆ‰‰˜Ü™X]Q[[Y[
‘œ˜YÛY[[˜Ü™X]Q[[Y[
œØØ\™Y\›ËÜÛ™[–K[Ù[ßJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]™K\ØÛÜ™K\İš\ŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹[Ë˜ÛXŠK˜Ü™X]Q[[Y[
œİ›Û™È‹[

PË›]™TØÛÜ™JOO[[İ›ÚY•™ÙŠ_ˆ8 $È‹

˜OPË›]™TØÛÜ™JOO[[İ›ÚY–˜K™ØJ_
K˜Ü™X]Q[[Y[
œÜ[ˆ‹[VÌJJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X]Ú\İYÙHŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YNËœİYÙOLÈ˜Xİ]™HˆˆŸK

]PË›Z[]\ÊOO[[İ›ÚY™]ÌJ_N‰ÈŠK˜Ü™X]Q[[Y[
šH‹[
K˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YNËœİYÙOLOÈ˜Xİ]™HˆˆŸK

PË›Z[]\ÊOO[[İ›ÚY›ÌWJ_LË‰ÈŠK˜Ü™X]Q[[Y[
šH‹[
K˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YNËœİYÙOLÈ˜Xİ]™HˆˆŸK

]PË›Z[]\ÊOO[[İ›ÚY˜]Ì—J_Î‰ÈŠJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™XÚ\Ú[Û‹YÜšY^Y\‹XÛÛ[X[™ÈŸKË˜ÚÚXÙ\Ë›X\
ÏO˜Ü™X]Q[[Y[
˜]Ûˆ‹ÚÙ^NœËšYÛÛXÚÎŠ
OO™ÙJÊ_K˜Ü™X]Q[[Y[
œİ›Û™È‹[Ë]JK˜Ü™X]Q[[Y[
œÜ[ˆ‹[Ë™\ØÊK˜Ü™X]Q[[Y[
˜ˆ‹[¹¢iú(c9£!ù.é8¡¤ˆŠJJJJKËšYÚYÚÉ‰˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X]ÚZYÚYÚÈŸK˜Ü™X]Q[[Y[
œİ›Û™È‹[¹ì¯¹ojy¥í¹b.ÈŠKËšYÚYÚË›X\

ËJOO˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNœËÛ™KÙ^N_K˜Ü™X]Q[[Y[
˜ˆ‹[Ë›Z[]JK˜Ü™X]Q[[Y[
œÜ[ˆ‹[Ë^
JJJKËœİ]É‰˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X]Ú\İ]X›Ø\™ŸK˜Ü™X]Q[[Y[
œİ›Û™È‹[º-fùd#¹¢ 9§+ùîçú+¨HŠK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹£©ùä ùã¡È‹˜Ü™X]Q[[Y[
˜ˆ‹[Ëœİ]ËœÜÜÙ\ÜÚ[Û‹‰HŠJK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹l!:eê‹˜Ü™X]Q[[Y[
˜ˆ‹[Ëœİ]ËœÚİÊJK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹l!9«hÈ‹˜Ü™X]Q[[Y[
˜ˆ‹[Ëœİ]Ë›Û•\™Ù]
JK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹/(9ä È‹˜Ü™X]Q[[Y[
˜ˆ‹[Ëœİ]Ëœ\ÜÙ\ÊJK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹¢¨¹¥«H‹˜Ü™X]Q[[Y[
˜ˆ‹[Ëœİ]ËXÚÛ\ÊJK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹¢dy¥dH‹˜Ü™X]Q[[Y[
˜ˆ‹[Ëœİ]ËœØ]™\ÊJJK˜Ü™X]Q[[Y[
œ‹[¹§+9g.¹§ 9/lùä ùdf;ï&ˆ‹˜Ü™X]Q[[Y[
˜ˆ‹[Ëœİ]Ë›[İJJJKËšÚ[™OOH™XÚ\Ú[Ûˆ‰‰˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœš[X\H‹ÛÛXÚÎŠ
OOŠ[
_K¹îéùîëz c9.&¹å'ù­«ÈŠJJJJ_Y[˜İ[ÛˆLŠ
^ØÛÛœİÏJ

OOİ˜\ˆİ^ØÛÛœİÏR”ÓÓ‹œ\œÙJØØ[İÜ˜YÙK™Ù]][JİXÚ[™KXØ\™Y\ˆŠJNÜ™]\›ˆÏÊËœ›ÛOÏÊËœ›ÛOXË™]\›ÜOOOH¹«)ùa¨È¹¦ïú(iHˆº/k¹£hˆŠKË›˜][Û˜[]OÏÊË›˜][Û˜[]OH¹.+yfïHŠKËœÙX\ÛÛœÔ^YYÏÊËœÙX\ÛÛœÔ^YYSX]›X^
[X™\Š

XËœÙX\ÛÛŠOO[[İ›ÚY‹œÛXÙJ
J_ŒŠKLŒŠJKË˜YÙOÏÊË˜YÙOLN
ØËœÙX\ÛÛœÔ^YY
KË[[ÏÏÊË[[Ï^Ë‹‹•œŸJKËœ™]\™[Y[ÙX\ÛÛÏÊËœ™]\™[Y[ÙX\ÛÛHˆŠKË›İ™\˜[Ø\ÏÊË›İ™\˜[Ø\LL
KËœ›Û˜[ĞÚ[[™ÙU\ÙYÏÊËœ›Û˜[ĞÚ[[™ÙU\ÙYHLJKËœ›Û˜[ĞÚ[[™ÙPÛÛ\]YÏÊËœ›Û˜[ĞÚ[[™ÙPÛÛ\]YHLJKË˜Ø\ÚÏÊË˜Ø\ÚL
KË˜Ø\™Y\‘X\›š[™ÜÏÏÊË˜Ø\™Y\‘X\›š[™ÜÏL
KË˜ÛÛ˜XİÙYZÜÏÏÊË˜ÛÛ˜XİÙYZÜÏMÍŠKË˜ÛÛ˜XİÛÛÛİÛÏÊË˜ÛÛ˜XİÛÛÛİÛL
KËœ™[™]Ø[™Y\ÙYÏÊËœ™[™]Ø[™Y\ÙYHLJKË˜ÛÛ˜XİÛ]\Ù\ÏÏÊË˜ÛÛ˜XİÛ]\Ù\Ï^Ë‹‹šš_JKË™˜[”İ\ÜÏÊË™˜[”İ\ÜMŒ
KË›YYXRX]ÏÊË›YYXRX]LJKËœ™\]][ÛÏÊËœ™\]][ÛLŒ
KË›™]ÜÔ™\ÜÛœÙ\ÏÏÊË›™]ÜÔ™\ÜÛœÙ\Ï^ßJKËœ™\ÜĞÛÛ™™\™[˜ÙRÙ^OÏÊËœ™\ÜĞÛÛ™™\™[˜ÙRÙ^OHˆŠKËœ™XÛİ™\P›Û\ÏÏÊËœ™XÛİ™\P›Û\ÏL
KËœ\˜Ú\Ù\ÏÏÊËœ\˜Ú\Ù\ÏV×JKËœ\˜Ú\ÙPŞXÛ\ÏÏÊËœ\˜Ú\ÙPŞXÛ\Ï^ßJKËœİ[X[SX]›X^
Ëœİ[X[L‹Ë›İ™\˜[Ø\
KË˜˜[Û”›ÙÜ™\ÜÏÏÊË˜˜[Û”›ÙÜ™\ÜÏL
KË˜˜[Û•Ú[œÏÏÊË˜˜[Û•Ú[œÏL
KË˜˜[Û][\ÙX\ÛÛÏÊË˜˜[Û][\ÙX\ÛÛHˆŠKË›\İœšX™UÙYZÏÏÊË›\İœšX™UÙYZÏHˆŠKË›YÙ[™ÚÚXÙUÚ[™İÏÏÊË›YÙ[™ÚÚXÙUÚ[™İÏHˆŠKË›\İ\XØ][Û•ÙYZÏÏÊË›\İ\XØ][Û•ÙYZÏHˆŠKË›\İYÚYÚÏÏÊË›\İYÚYÚÏV×JKVØË™›Ü›X][Û—_
Ë™›Ü›X][ÛP[
Ë˜ÛX‹Ë˜ÛX”˜][™ÊJKËœÜ]XY™\œÚ[ÛˆOOL‰‰ŠËœÜ]XYRZJË˜ÛX‹Ë˜ÛX”˜][™ÊKËœÜ]XY™\œÚ[ÛLŠKË›X]Úİ˜]YŞOÏÊË›X]Úİ˜]YŞO[[
KËš[š\™YÙYZÜÏÏÊËš[š\™YÙYZÜÏL
KËš[š\S˜[YOÏÊËš[š\S˜[YOHˆŠKËœİ\Ü[œÚ[Û•ÙYZÜÏÏÊËœİ\Ü[œÚ[Û•ÙYZÜÏL
KËY[İĞØ\™ÏÏÊËY[İĞØ\™ÏL
KËœ™YØ\™ÏÏÊËœ™YØ\™ÏL
KËš[š\R\İÜOÏÊËš[š\R\İÜOV×JKËÙYZÏŒÎ	‰ŠËÙYZÏJËÙYZËLJILÎ
ÌJKË˜[YOT
Ë›İ™\˜[Ë˜]™ËËœİ[X[
KËœİ[™[™ÜÏÏÊËœİ[™[™ÜÏ]İ
Ë›XYİYJJKË™š^\™U™\œÚ[ÛˆOOLI‰ŠË›XYİYQš^\™\ÏUXJË›XYİYKË˜ÛXŠKË™š^\™U™\œÚ[ÛLJKËXÛ›Ü›X]™\œÚ[ÛˆOOLÉ‰ŠËXÛØÚY[OS
Ë˜ÛX‹Ë™]\›ÜHOOH¹¥è‹Ë›XYİYJKËXÛ›Ü›X]™\œÚ[ÛLÊKË˜İ\[]™OÏÊË˜İ\[]™OHL
KË™]\›ÜP[]™OÏÊË™]\›ÜP[]™OHL
KË˜İ\Ú[œÏÏÊË˜İ\Ú[œÏL
KË›ÜY\ÏÏÊË›ÜY\ÏV×JKËœÙX\ÛÛ]Ø\™ÏÏÊËœÙX\ÛÛ]Ø\™ÏV×JKË›˜][Û˜[Ø\ÏÏÊË›˜][Û˜[Ø\ÏL
KË›˜][Û˜[ÛØ[ÏÏÊË›˜][Û˜[ÛØ[ÏL
KË›˜][Û˜[\ÜÚ\İÏÏÊË›˜][Û˜[\ÜÚ\İÏL
KË›˜][Û˜[›ÜY\ÏÏÊË›˜][Û˜[›ÜY\ÏV×JKËš[\›˜][Û˜[^YYÙ^OÏÊËš[\›˜][Û˜[^YYÙ^OHˆŠKË›˜][Û˜[Ø[\Ù^OÏÊË›˜][Û˜[Ø[\Ù^OHˆŠKË›˜][Û˜[]˜[X][Û’Ù^OÏÊË›˜][Û˜[]˜[X][Û’Ù^OHˆŠKËÛÜ›]™[ÏÏÊËÛÜ›]™[ÏV×JKË›\İ\XØ][Û•Ú[™İÏÏÊË›\İ\XØ][Û•Ú[™İÏHˆŠKË›™]ÜÏÏÊË›™]ÜÏVŞØØ]YÛÜNˆ¹/ìy.d:`ê‹XY[™N˜	ØË˜ÛXŸz/æùaiIØËœÙX\ÛÛŸz-fùkhØİ[[X\N˜	ØË›˜[Y_y«hùg*9..¹ä úf'ùo y¢&;ï#9odùbcz ïyb¦È	ØË›İ™\˜[{ï#:.ªù.íÈ	İJË˜[YJ_xà ˜ÙYZÎ˜ËÙYZËÙX\ÛÛ˜ËœÙX\ÛÛŸWJKÊN›[XØ]ÚÜ™]\›ˆ[_JJ
KÓKOYK\ÙTİ]JÏÈ™Ø[YHˆœİ\ŠKİË×OYK\ÙTİ]JÊNÙK\ÙQY™™Xİ


OOİÉ‰›ØØ[İÜ˜YÙKœÙ]][JİXÚ[™KXØ\™Y\ˆ‹”ÓÓ‹œİš[™ÚYJÊJ_Kİ×JNØÛÛœİÏJ
OOØÛÛ™š\›J¹èk¹k¦¹îäù§gùodùbcyå'ù­«ùnmºaãy¥¬9o 9iâùd%ûï'ÈŠI‰ŠØØ[İÜ˜YÙKœ™[[İ™R][JİXÚ[™KXØ\™Y\ˆŠKÊ[
K
œİ\ŠJ_NÜ™]\›ˆOOOHœİ\İ˜Ü™X]Q[[Y[
\ÛÛ™YÚ[Š
OO™
œÙ]\Š_JN“OOOHœÙ]\İ˜Ü™X]Q[[Y[
\ÛÛ˜XÚÎŠ
OO™
œİ\ŠKÛ”İ\OÔÊ
ŠJK
™Ø[YHŠ__JN˜Ü™X]Q[[Y[
œØØ\™Y\ËÙ]Ø\™Y\”ËÛ”™\Ù]ßJ_S˜Ü™X]T›Ûİ
Øİ[Y[™Ù][[Y[RY
œ›ÛİŠJKœ™[™\Š˜Ü™X]Q[[Y[
L‹[
JNÂ