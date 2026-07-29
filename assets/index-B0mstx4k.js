(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))w(S);new MutationObserver(S=>{for(const E of S)if(E.type==="childList")for(const A of E.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&w(A)}).observe(document,{childList:!0,subtree:!0});function d(S){const E={};return S.integrity&&(E.integrity=S.integrity),S.referrerPolicy&&(E.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?E.credentials="include":S.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function w(S){if(S.ep)return;S.ep=!0;const E=d(S);fetch(S.href,E)}})();function Ep(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Di={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function kp(){if(Mm)return pe;Mm=1;var o=Symbol.for("react.element"),y=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),A=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),J=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),G=Symbol.iterator;function q(g){return g===null||typeof g!="object"?null:(g=G&&g[G]||g["@@iterator"],typeof g=="function"?g:null)}var he={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},be=Object.assign,ie={};function te(g,N,se){this.props=g,this.context=N,this.refs=ie,this.updater=se||he}te.prototype.isReactComponent={},te.prototype.setState=function(g,N){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,N,"setState")},te.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function oe(){}oe.prototype=te.prototype;function ge(g,N,se){this.props=g,this.context=N,this.refs=ie,this.updater=se||he}var ke=ge.prototype=new oe;ke.constructor=ge,be(ke,te.prototype),ke.isPureReactComponent=!0;var ne=Array.isArray,je=Object.prototype.hasOwnProperty,ze={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function K(g,N,se){var ue,Me={},Ce=null,Re=null;if(N!=null)for(ue in N.ref!==void 0&&(Re=N.ref),N.key!==void 0&&(Ce=""+N.key),N)je.call(N,ue)&&!M.hasOwnProperty(ue)&&(Me[ue]=N[ue]);var Se=arguments.length-2;if(Se===1)Me.children=se;else if(1<Se){for(var We=Array(Se),mn=0;mn<Se;mn++)We[mn]=arguments[mn+2];Me.children=We}if(g&&g.defaultProps)for(ue in Se=g.defaultProps,Se)Me[ue]===void 0&&(Me[ue]=Se[ue]);return{$$typeof:o,type:g,key:Ce,ref:Re,props:Me,_owner:ze.current}}function V(g,N){return{$$typeof:o,type:g.type,key:N,ref:g.ref,props:g.props,_owner:g._owner}}function Ne(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function le(g){var N={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(se){return N[se]})}var Ie=/\/+/g;function Pe(g,N){return typeof g=="object"&&g!==null&&g.key!=null?le(""+g.key):N.toString(36)}function re(g,N,se,ue,Me){var Ce=typeof g;(Ce==="undefined"||Ce==="boolean")&&(g=null);var Re=!1;if(g===null)Re=!0;else switch(Ce){case"string":case"number":Re=!0;break;case"object":switch(g.$$typeof){case o:case y:Re=!0}}if(Re)return Re=g,Me=Me(Re),g=ue===""?"."+Pe(Re,0):ue,ne(Me)?(se="",g!=null&&(se=g.replace(Ie,"$&/")+"/"),re(Me,N,se,"",function(mn){return mn})):Me!=null&&(Ne(Me)&&(Me=V(Me,se+(!Me.key||Re&&Re.key===Me.key?"":(""+Me.key).replace(Ie,"$&/")+"/")+g)),N.push(Me)),1;if(Re=0,ue=ue===""?".":ue+":",ne(g))for(var Se=0;Se<g.length;Se++){Ce=g[Se];var We=ue+Pe(Ce,Se);Re+=re(Ce,N,se,We,Me)}else if(We=q(g),typeof We=="function")for(g=We.call(g),Se=0;!(Ce=g.next()).done;)Ce=Ce.value,We=ue+Pe(Ce,Se++),Re+=re(Ce,N,se,We,Me);else if(Ce==="object")throw N=String(g),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return Re}function Ue(g,N,se){if(g==null)return g;var ue=[],Me=0;return re(g,ue,"","",function(Ce){return N.call(se,Ce,Me++)}),ue}function de(g){if(g._status===-1){var N=g._result;N=N(),N.then(function(se){(g._status===0||g._status===-1)&&(g._status=1,g._result=se)},function(se){(g._status===0||g._status===-1)&&(g._status=2,g._result=se)}),g._status===-1&&(g._status=0,g._result=N)}if(g._status===1)return g._result.default;throw g._result}var Y={current:null},R={transition:null},ee={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:R,ReactCurrentOwner:ze};function F(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:Ue,forEach:function(g,N,se){Ue(g,function(){N.apply(this,arguments)},se)},count:function(g){var N=0;return Ue(g,function(){N++}),N},toArray:function(g){return Ue(g,function(N){return N})||[]},only:function(g){if(!Ne(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},pe.Component=te,pe.Fragment=d,pe.Profiler=S,pe.PureComponent=ge,pe.StrictMode=w,pe.Suspense=Z,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,pe.act=F,pe.cloneElement=function(g,N,se){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var ue=be({},g.props),Me=g.key,Ce=g.ref,Re=g._owner;if(N!=null){if(N.ref!==void 0&&(Ce=N.ref,Re=ze.current),N.key!==void 0&&(Me=""+N.key),g.type&&g.type.defaultProps)var Se=g.type.defaultProps;for(We in N)je.call(N,We)&&!M.hasOwnProperty(We)&&(ue[We]=N[We]===void 0&&Se!==void 0?Se[We]:N[We])}var We=arguments.length-2;if(We===1)ue.children=se;else if(1<We){Se=Array(We);for(var mn=0;mn<We;mn++)Se[mn]=arguments[mn+2];ue.children=Se}return{$$typeof:o,type:g.type,key:Me,ref:Ce,props:ue,_owner:Re}},pe.createContext=function(g){return g={$$typeof:A,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:E,_context:g},g.Consumer=g},pe.createElement=K,pe.createFactory=function(g){var N=K.bind(null,g);return N.type=g,N},pe.createRef=function(){return{current:null}},pe.forwardRef=function(g){return{$$typeof:c,render:g}},pe.isValidElement=Ne,pe.lazy=function(g){return{$$typeof:x,_payload:{_status:-1,_result:g},_init:de}},pe.memo=function(g,N){return{$$typeof:J,type:g,compare:N===void 0?null:N}},pe.startTransition=function(g){var N=R.transition;R.transition={};try{g()}finally{R.transition=N}},pe.unstable_act=F,pe.useCallback=function(g,N){return Y.current.useCallback(g,N)},pe.useContext=function(g){return Y.current.useContext(g)},pe.useDebugValue=function(){},pe.useDeferredValue=function(g){return Y.current.useDeferredValue(g)},pe.useEffect=function(g,N){return Y.current.useEffect(g,N)},pe.useId=function(){return Y.current.useId()},pe.useImperativeHandle=function(g,N,se){return Y.current.useImperativeHandle(g,N,se)},pe.useInsertionEffect=function(g,N){return Y.current.useInsertionEffect(g,N)},pe.useLayoutEffect=function(g,N){return Y.current.useLayoutEffect(g,N)},pe.useMemo=function(g,N){return Y.current.useMemo(g,N)},pe.useReducer=function(g,N,se){return Y.current.useReducer(g,N,se)},pe.useRef=function(g){return Y.current.useRef(g)},pe.useState=function(g){return Y.current.useState(g)},pe.useSyncExternalStore=function(g,N,se){return Y.current.useSyncExternalStore(g,N,se)},pe.useTransition=function(){return Y.current.useTransition()},pe.version="18.3.1",pe}var vm;function zm(){return vm||(vm=1,Di.exports=kp()),Di.exports}var ce=zm();const t=Ep(ce);var Or={},Ti={exports:{}},Cn={},zi={exports:{}},Pi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function Bp(){return Cm||(Cm=1,(function(o){function y(R,ee){var F=R.length;R.push(ee);e:for(;0<F;){var g=F-1>>>1,N=R[g];if(0<S(N,ee))R[g]=ee,R[F]=N,F=g;else break e}}function d(R){return R.length===0?null:R[0]}function w(R){if(R.length===0)return null;var ee=R[0],F=R.pop();if(F!==ee){R[0]=F;e:for(var g=0,N=R.length,se=N>>>1;g<se;){var ue=2*(g+1)-1,Me=R[ue],Ce=ue+1,Re=R[Ce];if(0>S(Me,F))Ce<N&&0>S(Re,Me)?(R[g]=Re,R[Ce]=F,g=Ce):(R[g]=Me,R[ue]=F,g=ue);else if(Ce<N&&0>S(Re,F))R[g]=Re,R[Ce]=F,g=Ce;else break e}}return ee}function S(R,ee){var F=R.sortIndex-ee.sortIndex;return F!==0?F:R.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var E=performance;o.unstable_now=function(){return E.now()}}else{var A=Date,c=A.now();o.unstable_now=function(){return A.now()-c}}var Z=[],J=[],x=1,G=null,q=3,he=!1,be=!1,ie=!1,te=typeof setTimeout=="function"?setTimeout:null,oe=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ke(R){for(var ee=d(J);ee!==null;){if(ee.callback===null)w(J);else if(ee.startTime<=R)w(J),ee.sortIndex=ee.expirationTime,y(Z,ee);else break;ee=d(J)}}function ne(R){if(ie=!1,ke(R),!be)if(d(Z)!==null)be=!0,de(je);else{var ee=d(J);ee!==null&&Y(ne,ee.startTime-R)}}function je(R,ee){be=!1,ie&&(ie=!1,oe(K),K=-1),he=!0;var F=q;try{for(ke(ee),G=d(Z);G!==null&&(!(G.expirationTime>ee)||R&&!le());){var g=G.callback;if(typeof g=="function"){G.callback=null,q=G.priorityLevel;var N=g(G.expirationTime<=ee);ee=o.unstable_now(),typeof N=="function"?G.callback=N:G===d(Z)&&w(Z),ke(ee)}else w(Z);G=d(Z)}if(G!==null)var se=!0;else{var ue=d(J);ue!==null&&Y(ne,ue.startTime-ee),se=!1}return se}finally{G=null,q=F,he=!1}}var ze=!1,M=null,K=-1,V=5,Ne=-1;function le(){return!(o.unstable_now()-Ne<V)}function Ie(){if(M!==null){var R=o.unstable_now();Ne=R;var ee=!0;try{ee=M(!0,R)}finally{ee?Pe():(ze=!1,M=null)}}else ze=!1}var Pe;if(typeof ge=="function")Pe=function(){ge(Ie)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,Ue=re.port2;re.port1.onmessage=Ie,Pe=function(){Ue.postMessage(null)}}else Pe=function(){te(Ie,0)};function de(R){M=R,ze||(ze=!0,Pe())}function Y(R,ee){K=te(function(){R(o.unstable_now())},ee)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(R){R.callback=null},o.unstable_continueExecution=function(){be||he||(be=!0,de(je))},o.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<R?Math.floor(1e3/R):5},o.unstable_getCurrentPriorityLevel=function(){return q},o.unstable_getFirstCallbackNode=function(){return d(Z)},o.unstable_next=function(R){switch(q){case 1:case 2:case 3:var ee=3;break;default:ee=q}var F=q;q=ee;try{return R()}finally{q=F}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(R,ee){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=q;q=R;try{return ee()}finally{q=F}},o.unstable_scheduleCallback=function(R,ee,F){var g=o.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?g+F:g):F=g,R){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=F+N,R={id:x++,callback:ee,priorityLevel:R,startTime:F,expirationTime:N,sortIndex:-1},F>g?(R.sortIndex=F,y(J,R),d(Z)===null&&R===d(J)&&(ie?(oe(K),K=-1):ie=!0,Y(ne,F-g))):(R.sortIndex=N,y(Z,R),be||he||(be=!0,de(je))),R},o.unstable_shouldYield=le,o.unstable_wrapCallback=function(R){var ee=q;return function(){var F=q;q=ee;try{return R.apply(this,arguments)}finally{q=F}}}})(Pi)),Pi}var ym;function Sp(){return ym||(ym=1,zi.exports=Bp()),zi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function Ap(){if(Em)return Cn;Em=1;var o=zm(),y=Sp();function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var w=new Set,S={};function E(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for(S[e]=n,e=0;e<n.length;e++)w.add(n[e])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Z=Object.prototype.hasOwnProperty,J=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},G={};function q(e){return Z.call(G,e)?!0:Z.call(x,e)?!1:J.test(e)?G[e]=!0:(x[e]=!0,!1)}function he(e,n,a,l){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function be(e,n,a,l){if(n===null||typeof n>"u"||he(e,n,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ie(e,n,a,l,r,i,m){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=r,this.mustUseProperty=a,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=m}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ie(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ie(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ie(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ie(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop×}=ç{h‘éì¶»§q«^uœÊK›X\

ÜËWJOO˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™Ü›İİ\›İÈ‹Ù^NœßK˜Ü™X]Q[[Y[
œÜ[ˆ‹[ÊK˜Ü™X]Q[[Y[
Û‹İ˜[YN_JK˜Ü™X]Q[[Y[
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
œÛX[‹[Ë›İ™\˜[LL	‰’ÏÈ¹mìº)èúe L¹.¯ù«)ùa`ú!êº`"y."ùk­ˆˆ¹/ìy.d:`ê9¨!ùaá¹.#yak9o ŠJJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜\XØ][Û‹YÜšYŸKÚK™š[\ŠÏOœË˜ÛXˆOO[Ë˜ÛXŠK›X\
ÏOØÛÛœİO[Ë›\İ\XØ][Û•ÙYZÏOOX	ÛËœÙX\ÛÛŸKIÛËÙYZßX[Ë›YÙ[™ÚÚXÙUÚ[™İÏOOUÜ™]\›ˆ˜Ü™X]Q[[Y[
˜\XÛH‹ØÛ\ÜÓ˜[YN’™J˜\XØ][Û‹XØ\™‹šKš[˜ÛY\ÊË˜ÛXŠI‰ˆœİ\\ˆŠKÙ^NœË˜ÛXŸK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜ÛX‹XÜ™\İ‹İ[NÈ‹KXÛXˆ[–ÜË›XYİYWK˜XØÙ[_KË˜ÛX–ÌJK˜Ü™X]Q[[Y[
™KİÛ™NœË™]\›ÜOOOH¹«)ùa¨È˜Ú[\[ÛœÈœË™]\›ÜOOOH¹¥èÈ›]]Yˆ™]\›ÜHŸKË™]\›ÜJJK˜Ü™X]Q[[Y[
šÈ‹[Ë˜ÛXŠK˜Ü™X]Q[[Y[
œ‹[Ë›XYİYKˆ0­È9ä úf'ùk§¹b¦È‹Ëœ˜][™ÊK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™\]Z\™[Y[ŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹/ìy.d:`ê:) y¬`ˆŠK˜Ü™X]Q[[Y[
œİ›Û™È‹[¹§.¹káˆŠK˜Ü™X]Q[[Y[
œÛX[‹[º ïyb¦øà z(j9ã¬9d£:f-yk®zg 9¬`¹gaù.#yak9o ŠJK˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœš[X\H‹\ØX›YKÛÛXÚÎŠ
OO›[ŠÊ_KOÈ¹§+9dj9mì¹îãùå,ú+íÈˆ¹¦kº`&¹b¨9æçùå,ú+íÈŠKË›İ™\˜[LL	‰˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ›YÙ[™]˜[œÙ™\ˆ‹\ØX›YˆRß‹ÛÛXÚÎŠ
OO•XJÊ_KÏØÈ¹§+9ê¥ùcèú!êº`"y§.¹/&¹mì¹/oùå*ˆŒ¹.¯ù«)ùa`ù£!ùk¦¹."ùk­ˆˆ¹ëbyo¡y."ù«(z/k9/&¹ê¥ÈŠJ_JJJKÏOOH˜˜[Ûˆ‰‰›
ÊI‰˜Ü™X]Q[[Y[
œÙXİ[Ûˆ‹ØÛ\ÜÓ˜[YNˆœYÙK\[™[ŸK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜˜[Û‹Z\›ÈŸK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
™KİÛ™Nˆ˜Ú[\[ÛœÈŸKSÓˆ	ÓÔˆŠK˜Ü™X]Q[[Y[
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
OLË˜˜[Û][\ÙX\ÛÛOO[ËœÙX\ÛÛ‹ÛÛXÚÎ–X_KË˜˜[Û][\ÙX\ÛÛOO[ËœÙX\ÛÛÈ¹§+:-fùkhú+á:`"ymì¹îäù§gÈŠË˜˜[Û”›ÙÜ™\Üß
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
œÜ[ˆ‹[ÏÈº/k9/&¹ê¥ùcèùo 9¥/ˆˆº/k9/&¹ê¥ùcèùalúeëHŠK˜Ü™X]Q[[Y[
œİ›Û™È‹[JË˜[YJJJJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YN’™JÚ[™İËX˜[›™\ˆ‹É‰ˆ›Ü[ˆŠ_K˜Ü™X]Q[[Y[
œİ›Û™È‹[ÏÈ¹ã¬9g*9cëù.éyk£9¢$:/k9/&ˆˆ¹odùbcy.#z ïyk£9¢$:/k9/&ˆŠK˜Ü™X]Q[[Y[
œÜ[ˆ‹[ÏÈ¹îãùîª¹.®¹cëù.éz,"9b)9nm¹ëo¹ïl¹¥¬9d"9d#8à ˆˆ¹îéùîëy«å:-fùd£:+«yîàûï#9mì¹§"y¢©y.íù/&¹/çyåfyb,9."ù. 9.*¹ê¥ùcèøà ˆŠJKË›Ù™™\œË›[™İOOLİ˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™[\K[Ù™™\œÈŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¸¥áÈŠK˜Ü™X]Q[[Y[
šÈ‹[¹¦ ¹¥í¹¬¨y§"y«hùo#ù¢©y.íÈŠK˜Ü™X]Q[[Y[
œ‹[ÏÈºjæ9¬-9nlù«å:-fù¢cycëú ïz)é¹cäy¢©y.íûï#: #9.%9d#9. 9¥íºeí9§ 9i&¹¥-¹b,9. 9.ïxà ˆˆ¹ê¥ùcèùalúeëy§'úeí9.#y/&¹å'ù¢$9¥¬9¢©y.íøà ˆŠK˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœš[X\H‹ÛÛXÚÎŠ
OO”Ê›X]Ú\ÈŠ_K¹c®ùaá¹i!ù«å:-fÈŠJN˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Ù™™\œË[\İŸKË›Ù™™\œË›X\

ËJOO˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Ù™™\‹\ÚY]‹Ù^NœË˜ÛXŸK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Ù™™\‹]ÜŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜šYËXÜ™\İ]Ø^HŸKË˜ÛX–ÌJK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
™KİÛ™N’ÏÈ˜Ú[\[ÛœÈˆ›]]YŸKÏÈ¹«hùo#ù¢©y.íÈˆ¹ëbyo¡yê¥ùcèÈŠK˜Ü™X]Q[[Y[
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
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœš[X\H‹\ØX›YˆRËÛÛXÚÎŠ
OOÕÙJÊKÉ‰”ÊšÛYHŠ__KÏÈ¹£©ycåù¢©y.íùnmº/k9/&ˆˆ¹ëbyo¡z/k9/&¹ê¥ùcèÈŠK˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆ™XÛ[™H‹ÛÛXÚÎŠ
OOœ™JOŠ‹›Ù™™\œËœÜXÙJKJKŠJ_K¹¢ä¹îçHŠJJJJJKI‰˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YN’™J›[Ù[X˜XÚÙ›Ü‹KXÛ	‰ˆXÛ[šYÚ‹KšÚ[™OOH›]™H‰‰ˆ›]™KX˜XÚÙ›Ü‹KšÚ[™OOHœ›Û˜[È‰‰ˆœ›Û˜[ËX˜XÚÙ›ÜŠKÛÛXÚÎŠ
OOˆVÈ™XÚ\Ú[Ûˆ‹›]™H‹œ›Û˜[È‹œ™\ÜÈ—Kš[˜ÛY\ÊKšÚ[™
I‰J[
_K˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YN’™Jœ™\İ[[[Ù[‹KšÚ[™KšYÚYÚÉ‰ˆÚ]ZYÚYÚÈ‹KXÛ	‰ˆXÛ[X]ÚŠKÛÛXÚÎœÏOœËœİÜ›ÜYØ][ÛŠ
_KKšÚ[™OOH›]™Hİ˜Ü™X]Q[[Y[
ÜØØ\™Y\›ËÜÛ™[›™KÛÛ\]][Ûš™KXÛ›ÙKÛ‘š[š\Ú“Y_JN‘KšÚ[™OOHœ›Û˜[Èİ˜Ü™X]Q[[Y[
œÛÛÛÛ\]N“JN‘KšÚ[™OOHœ™\ÜÈİ˜Ü™X]Q[[Y[
ØØ\™Y\›ËÛ‘š[š\Ú”ŸJN‘KšÚ[™OOH›™]ÜÈİ˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›™]ÜËY]Z[ŸK˜Ü™X]Q[[Y[
™KİÛ™N‘K˜\XÛK˜Ø]YÛÜOOOHº"¬z/®HÈ™ÛÜÜÚ\ˆ›]]YŸKK˜\XÛK˜Ø]YÛÜJK˜Ü™X]Q[[Y[
šˆ‹[K˜\XÛKšXY[™JK˜Ü™X]Q[[Y[
œ‹[K˜\XÛKœİ[[X\JK˜Ü™X]Q[[Y[
œÛX[‹[K˜\XÛKœÙX\ÛÛ‹ˆ0­È9ë+‹K˜\XÛKÙYZËˆ:/kˆŠKK˜\XÛK››Ô™\ÜÛœÙOİ˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›™]ÜË\™\ÜÛœÙK\İ]\ÈŸKº/æy¦+ù. 9b&yd#¹îëy¢©z`dûï#9¥è:g 9a£y«(yfç¹n¥8à ˆŠNŠË›™]ÜÔ™\ÜÛœÙ\ßßJVÕYJK˜\XÛJWOİ˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›™]ÜË\™\ÜÛœÙK\İ]\ÈŸK¸§$È9/h9mì¹îãùkîz/æyb&y¢©z`dù/g9aî¹fç¹n¥;ï#9ak9o :(j9  y¥è9¬åy¤©9fç¸à ˆŠN˜Ü™X]Q[[Y[
‘œ˜YÛY[[˜Ü™X]Q[[Y[
šÈ‹[º`"y¢êy/h9æ¡9ak9o 9fç¹n¥ŠK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›™]ÜË\™\ÜÛœÙKYÜšYŸKœ›X\
ÏO˜Ü™X]Q[[Y[
˜]Ûˆ‹ÚÙ^NœËšYÛÛXÚÎŠ
OO–JK˜\XÛKÊ_K˜Ü™X]Q[[Y[
œİ›Û™È‹[Ë›˜[YJK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¸ '‹Ëœ][İK¸ 'HŠJJJJK˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœš[X\H‹ÛÛXÚÎŠ
OOJ[
_Kº/å9fç¹¥¬:eîù.+yoàÈŠJN˜Ü™X]Q[[Y[
‘œ˜YÛY[[˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›[Ù[ZXÛÛˆŸKKšÚ[™OOHÚ[ˆÈ¸¦!H‘KšÚ[™OOH›ÜÜÈÈ¸¡¤È‘KšÚ[™OOH˜Z[š[™ÈÈ³çÈ‘KšÚ[™OOH™XÚ\Ú[ÛˆÈ¸¦gÈˆHŠK˜Ü™X]Q[[Y[
šˆ‹[K]JK˜Ü™X]Q[[Y[
œ‹[K˜›ÙJKKšÚ[™OOH™XÚ\Ú[Ûˆ‰‰˜Ü™X]Q[[Y[
‘œ˜YÛY[[˜Ü™X]Q[[Y[
\ØØ\™Y\›ËÜÛ™[›™K[Ù[‘_JK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]™K\ØÛÜ™K\İš\ŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹[Ë˜ÛXŠK˜Ü™X]Q[[Y[
œİ›Û™È‹[

QK›]™TØÛÜ™JOO[[İ›ÚY•™ÙŠ_ˆ8 $È‹

OQK›]™TØÛÜ™JOO[[İ›ÚY–K™ØJ_
K˜Ü™X]Q[[Y[
œÜ[ˆ‹[™VÌJJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X]Ú\İYÙHŸK˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YN‘KœİYÙOLÈ˜Xİ]™HˆˆŸK

˜OQK›Z[]\ÊOO[[İ›ÚY–˜VÌJ_N‰ÈŠK˜Ü™X]Q[[Y[
šH‹[
K˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YN‘KœİYÙOLOÈ˜Xİ]™HˆˆŸK

]QK›Z[]\ÊOO[[İ›ÚY™]ÌWJ_LË‰ÈŠK˜Ü™X]Q[[Y[
šH‹[
K˜Ü™X]Q[[Y[
œÜ[ˆ‹ØÛ\ÜÓ˜[YN‘KœİYÙOLÈ˜Xİ]™HˆˆŸK

QK›Z[]\ÊOO[[İ›ÚY›Ì—J_Î‰ÈŠJK˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™XÚ\Ú[Û‹YÜšY^Y\‹XÛÛ[X[™ÈŸKK˜ÚÚXÙ\Ë›X\
ÏO˜Ü™X]Q[[Y[
˜]Ûˆ‹ÚÙ^NœËšYÛÛXÚÎŠ
OOÙJÊ_K˜Ü™X]Q[[Y[
œİ›Û™È‹[Ë]JK˜Ü™X]Q[[Y[
œÜ[ˆ‹[Ë™\ØÊK˜Ü™X]Q[[Y[
˜ˆ‹[¹¢iú(c9£!ù.é8¡¤ˆŠJJJJKKšYÚYÚÉ‰˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X]ÚZYÚYÚÈŸK˜Ü™X]Q[[Y[
œİ›Û™È‹[¹ì¯¹ojy¥í¹b.ÈŠKKšYÚYÚË›X\

ËJOO˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNœËÛ™KÙ^N_K˜Ü™X]Q[[Y[
˜ˆ‹[Ë›Z[]JK˜Ü™X]Q[[Y[
œÜ[ˆ‹[Ë^
JJJKKœİ]É‰˜Ü™X]Q[[Y[
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X]Ú\İ]X›Ø\™ŸK˜Ü™X]Q[[Y[
œİ›Û™È‹[º-fùd#¹¢ 9§+ùîçú+¨HŠK˜Ü™X]Q[[Y[
™]ˆ‹[˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹£©ùä ùã¡È‹˜Ü™X]Q[[Y[
˜ˆ‹[Kœİ]ËœÜÜÙ\ÜÚ[Û‹‰HŠJK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹l!:eê‹˜Ü™X]Q[[Y[
˜ˆ‹[Kœİ]ËœÚİÊJK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹l!9«hÈ‹˜Ü™X]Q[[Y[
˜ˆ‹[Kœİ]Ë›Û•\™Ù]
JK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹/(9ä È‹˜Ü™X]Q[[Y[
˜ˆ‹[Kœİ]Ëœ\ÜÙ\ÊJK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹¢¨¹¥«H‹˜Ü™X]Q[[Y[
˜ˆ‹[Kœİ]ËXÚÛ\ÊJK˜Ü™X]Q[[Y[
œÜ[ˆ‹[¹¢dy¥dH‹˜Ü™X]Q[[Y[
˜ˆ‹[Kœİ]ËœØ]™\ÊJJK˜Ü™X]Q[[Y[
œ‹[¹§+9g.¹§ 9/lùä ùdf;ï&ˆ‹˜Ü™X]Q[[Y[
˜ˆ‹[Kœİ]Ë›[İJJJKKšÚ[™OOH™XÚ\Ú[Ûˆ‰‰˜Ü™X]Q[[Y[
˜]Ûˆ‹ØÛ\ÜÓ˜[YNˆœš[X\H‹ÛÛXÚÎŠ
OOJ[
_K¹îéùîëz c9.&¹å'ù­«ÈŠJJJJ_Y[˜İ[ÛˆLŠ
^ØÛÛœİÏJ

OOİ˜\ˆNİ^ØÛÛœİÏR”ÓÓ‹œ\œÙJØØ[İÜ˜YÙK™Ù]][JİXÚ[™KXØ\™Y\ˆŠJNÜ™]\›ˆÏÊËœ›ÛOÏÊËœ›ÛOXË™]\›ÜOOOH¹«)ùa¨È¹¦ïú(iHˆº/k¹£hˆŠKË›˜][Û˜[]OÏÊË›˜][Û˜[]OH¹.+yfïHŠKËœÙX\ÛÛœÔ^YYÏÊËœÙX\ÛÛœÔ^YYSX]›X^
[X™\Š

OXËœÙX\ÛÛŠOO[[İ›ÚYKœÛXÙJ
J_ŒŠKLŒŠJKË˜YÙOÏÊË˜YÙOLN
ØËœÙX\ÛÛœÔ^YY
KË[[ÏÏÊË[[Ï^Ë‹‹•œŸJKËœ™]\™[Y[ÙX\ÛÛÏÊËœ™]\™[Y[ÙX\ÛÛHˆŠKË›İ™\˜[Ø\ÏÊË›İ™\˜[Ø\LL
KËœ›Û˜[ĞÚ[[™ÙU\ÙYÏÊËœ›Û˜[ĞÚ[[™ÙU\ÙYHLJKËœ›Û˜[ĞÚ[[™ÙPÛÛ\]YÏÊËœ›Û˜[ĞÚ[[™ÙPÛÛ\]YHLJKË˜Ø\ÚÏÊË˜Ø\ÚL
KË˜Ø\™Y\‘X\›š[™ÜÏÏÊË˜Ø\™Y\‘X\›š[™ÜÏL
KË˜ÛÛ˜XİÙYZÜÏÏÊË˜ÛÛ˜XİÙYZÜÏMÍŠKË˜ÛÛ˜XİÛÛÛİÛÏÊË˜ÛÛ˜XİÛÛÛİÛL
KËœ™[™]Ø[™Y\ÙYÏÊËœ™[™]Ø[™Y\ÙYHLJKË˜ÛÛ˜XİÛ]\Ù\ÏÏÊË˜ÛÛ˜XİÛ]\Ù\Ï^Ë‹‹’_JKË™˜[”İ\ÜÏÊË™˜[”İ\ÜMŒ
KË›YYXRX]ÏÊË›YYXRX]LJKËœ™\]][ÛÏÊËœ™\]][ÛLŒ
KË›™]ÜÔ™\ÜÛœÙ\ÏÏÊË›™]ÜÔ™\ÜÛœÙ\Ï^ßJKËœ™\ÜĞÛÛ™™\™[˜ÙRÙ^OÏÊËœ™\ÜĞÛÛ™™\™[˜ÙRÙ^OHˆŠKËœ™XÛİ™\P›Û\ÏÏÊËœ™XÛİ™\P›Û\ÏL
KËœ\˜Ú\Ù\ÏÏÊËœ\˜Ú\Ù\ÏV×JKËœ\˜Ú\ÙPŞXÛ\ÏÏÊËœ\˜Ú\ÙPŞXÛ\Ï^ßJKËœİ[X[SX]›X^
Ëœİ[X[L‹Ë›İ™\˜[Ø\
KË˜˜[Û”›ÙÜ™\ÜÏÏÊË˜˜[Û”›ÙÜ™\ÜÏL
KË˜˜[Û•Ú[œÏÏÊË˜˜[Û•Ú[œÏL
KË˜˜[Û][\ÙX\ÛÛÏÊË˜˜[Û][\ÙX\ÛÛHˆŠKË›\İœšX™UÙYZÏÏÊË›\İœšX™UÙYZÏHˆŠKË›YÙ[™ÚÚXÙUÚ[™İÏÏÊË›YÙ[™ÚÚXÙUÚ[™İÏHˆŠKË›\İ\XØ][Û•ÙYZÏÏÊË›\İ\XØ][Û•ÙYZÏHˆŠKË›\İYÚYÚÏÏÊË›\İYÚYÚÏV×JKË™›Ü›X][ÛÏÊË™›Ü›X][ÛP[
Ë˜ÛX‹Ë˜ÛX”˜][™ÊJKËœÜ]XY™\œÚ[ÛˆOOL‰‰ŠËœÜ]XYWÚJË˜ÛX‹Ë˜ÛX”˜][™ÊKËœÜ]XY™\œÚ[ÛLŠKË›X]Úİ˜]YŞOÏÊË›X]Úİ˜]YŞO[[
KËš[š\™YÙYZÜÏÏÊËš[š\™YÙYZÜÏL
KËš[š\S˜[YOÏÊËš[š\S˜[YOHˆŠKËœİ\Ü[œÚ[Û•ÙYZÜÏÏÊËœİ\Ü[œÚ[Û•ÙYZÜÏL
KËY[İĞØ\™ÏÏÊËY[İĞØ\™ÏL
KËœ™YØ\™ÏÏÊËœ™YØ\™ÏL
KËš[š\R\İÜOÏÊËš[š\R\İÜOV×JKËÙYZÏŒÎ	‰ŠËÙYZÏJËÙYZËLJILÎ
ÌJKË˜[YOP]
Ë›İ™\˜[Ë˜]™ËËœİ[X[
KËœİ[™[™ÜÏÏÊËœİ[™[™ÜÏT
Ë›XYİYJJKË™š^\™U™\œÚ[ÛˆOOLI‰ŠË›XYİYQš^\™\ÏU˜JË›XYİYKË˜ÛXŠKË™š^\™U™\œÚ[ÛLJKËXÛ›Ü›X]™\œÚ[ÛˆOOLÉ‰ŠËXÛØÚY[O]İ
Ë˜ÛX‹Ë™]\›ÜHOOH¹¥è‹Ë›XYİYJKËXÛ›Ü›X]™\œÚ[ÛLÊKË˜İ\[]™OÏÊË˜İ\[]™OHL
KË™]\›ÜP[]™OÏÊË™]\›ÜP[]™OHL
KË˜İ\Ú[œÏÏÊË˜İ\Ú[œÏL
KË›ÜY\ÏÏÊË›ÜY\ÏV×JKËœÙX\ÛÛ]Ø\™ÏÏÊËœÙX\ÛÛ]Ø\™ÏV×JKË›˜][Û˜[Ø\ÏÏÊË›˜][Û˜[Ø\ÏL
KË›˜][Û˜[ÛØ[ÏÏÊË›˜][Û˜[ÛØ[ÏL
KË›˜][Û˜[\ÜÚ\İÏÏÊË›˜][Û˜[\ÜÚ\İÏL
KË›˜][Û˜[›ÜY\ÏÏÊË›˜][Û˜[›ÜY\ÏV×JKËš[\›˜][Û˜[^YYÙ^OÏÊËš[\›˜][Û˜[^YYÙ^OHˆŠKË›˜][Û˜[Ø[\Ù^OÏÊË›˜][Û˜[Ø[\Ù^OHˆŠKË›˜][Û˜[]˜[X][Û’Ù^OÏÊË›˜][Û˜[]˜[X][Û’Ù^OHˆŠKËÛÜ›]™[ÏÏÊËÛÜ›]™[ÏV×JKË›\İ\XØ][Û•Ú[™İÏÏÊË›\İ\XØ][Û•Ú[™İÏHˆŠKË›™]ÜÏÏÊË›™]ÜÏVŞØØ]YÛÜNˆ¹/ìy.d:`ê‹XY[™N˜	ØË˜ÛXŸz/æùaiIØËœÙX\ÛÛŸz-fùkhØİ[[X\N˜	ØË›˜[Y_y«hùg*9..¹ä úf'ùo y¢&;ï#9odùbcz ïyb¦È	ØË›İ™\˜[{ï#:.ªù.íÈ	İJË˜[YJ_xà ˜ÙYZÎ˜ËÙYZËÙX\ÛÛ˜ËœÙX\ÛÛŸWJKÊN›[XØ]ÚÜ™]\›ˆ[_JJ
KŞKOXÙK\ÙTİ]JÏÈ™Ø[YHˆœİ\ŠKİË×OXÙK\ÙTİ]JÊNØÙK\ÙQY™™Xİ


OOİÉ‰›ØØ[İÜ˜YÙKœÙ]][JİXÚ[™KXØ\™Y\ˆ‹”ÓÓ‹œİš[™ÚYJÊJ_Kİ×JNØÛÛœİOJ
OOØÛÛ™š\›J¹èk¹k¦¹îäù§gùodùbcyå'ù­«ùnmºaãy¥¬9o 9iâùd%ûï'ÈŠI‰ŠØØ[İÜ˜YÙKœ™[[İ™R][JİXÚ[™KXØ\™Y\ˆŠKÊ[
K
œİ\ŠJ_NÜ™]\›ˆOOOHœİ\İ˜Ü™X]Q[[Y[
\ÛÛ™YÚ[Š
OO™
œÙ]\Š_JNOOOHœÙ]\İ˜Ü™X]Q[[Y[
\ÛÛ˜XÚÎŠ
OO™
œİ\ŠKÛ”İ\OOÔÊ
JJK
™Ø[YHŠ__JN˜Ü™X]Q[[Y[
œØØ\™Y\ËÙ]Ø\™Y\”ËÛ”™\Ù]‘_J_S˜Ü™X]T›Ûİ
Øİ[Y[™Ù][[Y[RY
œ›ÛİŠJKœ™[™\Š˜Ü™X]Q[[Y[
L‹[
JNÂ