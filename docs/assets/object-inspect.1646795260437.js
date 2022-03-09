import{g as he}from"./axios.1646795260437.js";var me=new Proxy({},{get(){throw new Error('Module "" has been externalized for browser compatibility and cannot be accessed in client code.')}}),de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:me}),Oe=he(de),U=typeof Map=="function"&&Map.prototype,N=Object.getOwnPropertyDescriptor&&U?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,W=U&&N&&typeof N.get=="function"?N.get:null,we=U&&Map.prototype.forEach,K=typeof Set=="function"&&Set.prototype,D=Object.getOwnPropertyDescriptor&&K?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,I=K&&D&&typeof D.get=="function"?D.get:null,$e=K&&Set.prototype.forEach,Ee=typeof WeakMap=="function"&&WeakMap.prototype,w=Ee?WeakMap.prototype.has:null,Me=typeof WeakSet=="function"&&WeakSet.prototype,$=Me?WeakSet.prototype.has:null,_e=typeof WeakRef=="function"&&WeakRef.prototype,re=_e?WeakRef.prototype.deref:null,We=Boolean.prototype.valueOf,Ie=Object.prototype.toString,Le=Function.prototype.toString,Ae=String.prototype.match,Q=String.prototype.slice,s=String.prototype.replace,Re=String.prototype.toUpperCase,ne=String.prototype.toLowerCase,ue=RegExp.prototype.test,ae=Array.prototype.concat,u=Array.prototype.join,ke=Array.prototype.slice,ie=Math.floor,F=typeof BigInt=="function"?BigInt.prototype.valueOf:null,B=Object.getOwnPropertySymbols,H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,m=typeof Symbol=="function"&&typeof Symbol.iterator=="object",o=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===m?"object":"symbol")?Symbol.toStringTag:null,ce=Object.prototype.propertyIsEnumerable,oe=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function le(e,t){if(e===1/0||e===-1/0||e!==e||e&&e>-1e3&&e<1e3||ue.call(/e/,t))return t;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof e=="number"){var a=e<0?-ie(-e):ie(e);if(a!==e){var i=String(a),r=Q.call(t,i.length+1);return s.call(i,n,"$&_")+"."+s.call(s.call(r,/([0-9]{3})/g,"$&_"),/_$/,"")}}return s.call(t,n,"$&_")}var C=Oe.custom,z=C&&ye(C)?C:null,be=function e(t,n,a,i){var r=n||{};if(y(r,"quoteStyle")&&r.quoteStyle!=="single"&&r.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(y(r,"maxStringLength")&&(typeof r.maxStringLength=="number"?r.maxStringLength<0&&r.maxStringLength!==1/0:r.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var c=y(r,"customInspect")?r.customInspect:!0;if(typeof c!="boolean"&&c!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(y(r,"indent")&&r.indent!==null&&r.indent!=="	"&&!(parseInt(r.indent,10)===r.indent&&r.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(y(r,"numericSeparator")&&typeof r.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var v=r.numericSeparator;if(typeof t=="undefined")return"undefined";if(t===null)return"null";if(typeof t=="boolean")return t?"true":"false";if(typeof t=="string")return ge(t,r);if(typeof t=="number"){if(t===0)return 1/0/t>0?"0":"-0";var l=String(t);return v?le(t,l):l}if(typeof t=="bigint"){var p=String(t)+"n";return v?le(t,p):p}var G=typeof r.depth=="undefined"?5:r.depth;if(typeof a=="undefined"&&(a=0),a>=G&&G>0&&typeof t=="object")return V(t)?"[Array]":"[Object]";var S=Ze(r,a);if(typeof i=="undefined")i=[];else if(se(i,t)>=0)return"[Circular]";function f(h,M,Se){if(M&&(i=ke.call(i),i.push(M)),Se){var te={depth:r.depth};return y(r,"quoteStyle")&&(te.quoteStyle=r.quoteStyle),e(h,te,a+1,i)}return e(h,r,a+1,i)}if(typeof t=="function"){var X=He(t),Y=_(t,f);return"[Function"+(X?": "+X:" (anonymous)")+"]"+(Y.length>0?" { "+u.call(Y,", ")+" }":"")}if(ye(t)){var Z=m?s.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):H.call(t);return typeof t=="object"&&!m?O(Z):Z}if(Ge(t)){for(var d="<"+ne.call(String(t.nodeName)),L=t.attributes||[],E=0;E<L.length;E++)d+=" "+L[E].name+"="+pe(qe(L[E].value),"double",r);return d+=">",t.childNodes&&t.childNodes.length&&(d+="..."),d+="</"+ne.call(String(t.nodeName))+">",d}if(V(t)){if(t.length===0)return"[]";var A=_(t,f);return S&&!Ye(A)?"["+J(A,S)+"]":"[ "+u.call(A,", ")+" ]"}if(De(t)){var R=_(t,f);return"cause"in t&&!ce.call(t,"cause")?"{ ["+String(t)+"] "+u.call(ae.call("[cause]: "+f(t.cause),R),", ")+" }":R.length===0?"["+String(t)+"]":"{ ["+String(t)+"] "+u.call(R,", ")+" }"}if(typeof t=="object"&&c){if(z&&typeof t[z]=="function")return t[z]();if(c!=="symbol"&&typeof t.inspect=="function")return t.inspect()}if(Ve(t)){var x=[];return we.call(t,function(h,M){x.push(f(M,t,!0)+" => "+f(h,t))}),fe("Map",W.call(t),x,S)}if(Ke(t)){var b=[];return $e.call(t,function(h){b.push(f(h,t))}),fe("Set",I.call(t),b,S)}if(Je(t))return P("WeakMap");if(Qe(t))return P("WeakSet");if(Ue(t))return P("WeakRef");if(Ce(t))return O(f(Number(t)));if(Pe(t))return O(f(F.call(t)));if(ze(t))return O(We.call(t));if(Be(t))return O(f(String(t)));if(!Te(t)&&!Ne(t)){var k=_(t,f),j=oe?oe(t)===Object.prototype:t instanceof Object||t.constructor===Object,q=t instanceof Object?"":"null prototype",ee=!j&&o&&Object(t)===t&&o in t?Q.call(g(t),8,-1):q?"Object":"",ve=j||typeof t.constructor!="function"?"":t.constructor.name?t.constructor.name+" ":"",T=ve+(ee||q?"["+u.call(ae.call([],ee||[],q||[]),": ")+"] ":"");return k.length===0?T+"{}":S?T+"{"+J(k,S)+"}":T+"{ "+u.call(k,", ")+" }"}return String(t)};function pe(e,t,n){var a=(n.quoteStyle||t)==="double"?'"':"'";return a+e+a}function qe(e){return s.call(String(e),/"/g,"&quot;")}function V(e){return g(e)==="[object Array]"&&(!o||!(typeof e=="object"&&o in e))}function Te(e){return g(e)==="[object Date]"&&(!o||!(typeof e=="object"&&o in e))}function Ne(e){return g(e)==="[object RegExp]"&&(!o||!(typeof e=="object"&&o in e))}function De(e){return g(e)==="[object Error]"&&(!o||!(typeof e=="object"&&o in e))}function Be(e){return g(e)==="[object String]"&&(!o||!(typeof e=="object"&&o in e))}function Ce(e){return g(e)==="[object Number]"&&(!o||!(typeof e=="object"&&o in e))}function ze(e){return g(e)==="[object Boolean]"&&(!o||!(typeof e=="object"&&o in e))}function ye(e){if(m)return e&&typeof e=="object"&&e instanceof Symbol;if(typeof e=="symbol")return!0;if(!e||typeof e!="object"||!H)return!1;try{return H.call(e),!0}catch{}return!1}function Pe(e){if(!e||typeof e!="object"||!F)return!1;try{return F.call(e),!0}catch{}return!1}var Fe=Object.prototype.hasOwnProperty||function(e){return e in this};function y(e,t){return Fe.call(e,t)}function g(e){return Ie.call(e)}function He(e){if(e.name)return e.name;var t=Ae.call(Le.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}function se(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,a=e.length;n<a;n++)if(e[n]===t)return n;return-1}function Ve(e){if(!W||!e||typeof e!="object")return!1;try{W.call(e);try{I.call(e)}catch{return!0}return e instanceof Map}catch{}return!1}function Je(e){if(!w||!e||typeof e!="object")return!1;try{w.call(e,w);try{$.call(e,$)}catch{return!0}return e instanceof WeakMap}catch{}return!1}function Ue(e){if(!re||!e||typeof e!="object")return!1;try{return re.call(e),!0}catch{}return!1}function Ke(e){if(!I||!e||typeof e!="object")return!1;try{I.call(e);try{W.call(e)}catch{return!0}return e instanceof Set}catch{}return!1}function Qe(e){if(!$||!e||typeof e!="object")return!1;try{$.call(e,$);try{w.call(e,w)}catch{return!0}return e instanceof WeakSet}catch{}return!1}function Ge(e){return!e||typeof e!="object"?!1:typeof HTMLElement!="undefined"&&e instanceof HTMLElement?!0:typeof e.nodeName=="string"&&typeof e.getAttribute=="function"}function ge(e,t){if(e.length>t.maxStringLength){var n=e.length-t.maxStringLength,a="... "+n+" more character"+(n>1?"s":"");return ge(Q.call(e,0,t.maxStringLength),t)+a}var i=s.call(s.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,Xe);return pe(i,"single",t)}function Xe(e){var t=e.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return n?"\\"+n:"\\x"+(t<16?"0":"")+Re.call(t.toString(16))}function O(e){return"Object("+e+")"}function P(e){return e+" { ? }"}function fe(e,t,n,a){var i=a?J(n,a):u.call(n,", ");return e+" ("+t+") {"+i+"}"}function Ye(e){for(var t=0;t<e.length;t++)if(se(e[t],`
`)>=0)return!1;return!0}function Ze(e,t){var n;if(e.indent==="	")n="	";else if(typeof e.indent=="number"&&e.indent>0)n=u.call(Array(e.indent+1)," ");else return null;return{base:n,prev:u.call(Array(t+1),n)}}function J(e,t){if(e.length===0)return"";var n=`
`+t.prev+t.base;return n+u.call(e,","+n)+`
`+t.prev}function _(e,t){var n=V(e),a=[];if(n){a.length=e.length;for(var i=0;i<e.length;i++)a[i]=y(e,i)?t(e[i],e):""}var r=typeof B=="function"?B(e):[],c;if(m){c={};for(var v=0;v<r.length;v++)c["$"+r[v]]=r[v]}for(var l in e)!y(e,l)||n&&String(Number(l))===l&&l<e.length||m&&c["$"+l]instanceof Symbol||(ue.call(/[^\w$]/,l)?a.push(t(l,e)+": "+t(e[l],e)):a.push(l+": "+t(e[l],e)));if(typeof B=="function")for(var p=0;p<r.length;p++)ce.call(e,r[p])&&a.push("["+t(r[p])+"]: "+t(e[r[p]],e));return a}export{be as o};