(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ni(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Di(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=_e(r)?Sd(r):Di(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(_e(t))return t;if(ue(t))return t}}const Id=/;(?![^(]*\))/g,Ed=/:([^]+)/,Td=/\/\*.*?\*\//gs;function Sd(t){const e={};return t.replace(Td,"").split(Id).forEach(n=>{if(n){const r=n.split(Ed);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xi(t){let e="";if(_e(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=xi(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ad="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cd=Ni(Ad);function Rc(t){return!!t||t===""}const No=t=>_e(t)?t:t==null?"":B(t)||ue(t)&&(t.toString===Nc||!H(t.toString))?JSON.stringify(t,Oc,2):String(t),Oc=(t,e)=>e&&e.__v_isRef?Oc(t,e.value):Sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:kc(e)?{[`Set(${e.size})`]:[...e.values()]}:ue(e)&&!B(e)&&!Dc(e)?String(e):e,le={},Tn=[],et=()=>{},Rd=()=>!1,Od=/^on[^a-z]/,fs=t=>Od.test(t),Mi=t=>t.startsWith("onUpdate:"),Ae=Object.assign,Li=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kd=Object.prototype.hasOwnProperty,ee=(t,e)=>kd.call(t,e),B=Array.isArray,Sn=t=>hs(t)==="[object Map]",kc=t=>hs(t)==="[object Set]",H=t=>typeof t=="function",_e=t=>typeof t=="string",Fi=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",Pc=t=>ue(t)&&H(t.then)&&H(t.catch),Nc=Object.prototype.toString,hs=t=>Nc.call(t),Pd=t=>hs(t).slice(8,-1),Dc=t=>hs(t)==="[object Object]",$i=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$r=Ni(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ps=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nd=/-(\w)/g,gt=ps(t=>t.replace(Nd,(e,n)=>n?n.toUpperCase():"")),Dd=/\B([A-Z])/g,Un=ps(t=>t.replace(Dd,"-$1").toLowerCase()),gs=ps(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ms=ps(t=>t?`on${gs(t)}`:""),ir=(t,e)=>!Object.is(t,e),Ls=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Gr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Do;const xd=()=>Do||(Do=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Fe;class Mc{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Fe,!e&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Fe;try{return Fe=this,e()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function Lc(t){return new Mc(t)}function Md(t,e=Fe){e&&e.active&&e.effects.push(t)}function Ld(){return Fe}function Fd(t){Fe&&Fe.cleanups.push(t)}const Ui=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Fc=t=>(t.w&Wt)>0,$c=t=>(t.n&Wt)>0,$d=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wt},Ud=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Fc(s)&&!$c(s)?s.delete(t):e[n++]=s,s.w&=~Wt,s.n&=~Wt}e.length=n}},ni=new WeakMap;let Wn=0,Wt=1;const ri=30;let Qe;const sn=Symbol(""),si=Symbol("");class Vi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Md(this,r)}run(){if(!this.active)return this.fn();let e=Qe,n=jt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Qe,Qe=this,jt=!0,Wt=1<<++Wn,Wn<=ri?$d(this):xo(this),this.fn()}finally{Wn<=ri&&Ud(this),Wt=1<<--Wn,Qe=this.parent,jt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qe===this?this.deferStop=!0:this.active&&(xo(this),this.onStop&&this.onStop(),this.active=!1)}}function xo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let jt=!0;const Uc=[];function Vn(){Uc.push(jt),jt=!1}function jn(){const t=Uc.pop();jt=t===void 0?!0:t}function je(t,e,n){if(jt&&Qe){let r=ni.get(t);r||ni.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ui()),Vc(s)}}function Vc(t,e){let n=!1;Wn<=ri?$c(t)||(t.n|=Wt,n=!Fc(t)):n=!t.has(Qe),n&&(t.add(Qe),Qe.deps.push(t))}function Et(t,e,n,r,s,i){const o=ni.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=xc(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?$i(n)&&a.push(o.get("length")):(a.push(o.get(sn)),Sn(t)&&a.push(o.get(si)));break;case"delete":B(t)||(a.push(o.get(sn)),Sn(t)&&a.push(o.get(si)));break;case"set":Sn(t)&&a.push(o.get(sn));break}if(a.length===1)a[0]&&ii(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ii(Ui(c))}}function ii(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&Mo(r);for(const r of n)r.computed||Mo(r)}function Mo(t,e){(t!==Qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Vd=Ni("__proto__,__v_isRef,__isVue"),jc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fi)),jd=ji(),Bd=ji(!1,!0),Hd=ji(!0),Lo=qd();function qd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=te(this);for(let i=0,o=this.length;i<o;i++)je(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Vn();const r=te(this)[e].apply(this,n);return jn(),r}}),t}function ji(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?af:Kc:e?zc:qc).get(r))return r;const o=B(r);if(!t&&o&&ee(Lo,s))return Reflect.get(Lo,s,i);const a=Reflect.get(r,s,i);return(Fi(s)?jc.has(s):Vd(s))||(t||je(r,"get",s),e)?a:he(a)?o&&$i(s)?a:a.value:ue(a)?t?Wc(a):Bn(a):a}}const zd=Bc(),Kd=Bc(!0);function Bc(t=!1){return function(n,r,s,i){let o=n[r];if(kn(o)&&he(o)&&!he(s))return!1;if(!t&&(!Jr(s)&&!kn(s)&&(o=te(o),s=te(s)),!B(n)&&he(o)&&!he(s)))return o.value=s,!0;const a=B(n)&&$i(r)?Number(r)<n.length:ee(n,r),c=Reflect.set(n,r,s,i);return n===te(i)&&(a?ir(s,o)&&Et(n,"set",r,s):Et(n,"add",r,s)),c}}function Wd(t,e){const n=ee(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Et(t,"delete",e,void 0),r}function Gd(t,e){const n=Reflect.has(t,e);return(!Fi(e)||!jc.has(e))&&je(t,"has",e),n}function Jd(t){return je(t,"iterate",B(t)?"length":sn),Reflect.ownKeys(t)}const Hc={get:jd,set:zd,deleteProperty:Wd,has:Gd,ownKeys:Jd},Yd={get:Hd,set(t,e){return!0},deleteProperty(t,e){return!0}},Qd=Ae({},Hc,{get:Bd,set:Kd}),Bi=t=>t,ms=t=>Reflect.getPrototypeOf(t);function kr(t,e,n=!1,r=!1){t=t.__v_raw;const s=te(t),i=te(e);n||(e!==i&&je(s,"get",e),je(s,"get",i));const{has:o}=ms(s),a=r?Bi:n?zi:or;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Pr(t,e=!1){const n=this.__v_raw,r=te(n),s=te(t);return e||(t!==s&&je(r,"has",t),je(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Nr(t,e=!1){return t=t.__v_raw,!e&&je(te(t),"iterate",sn),Reflect.get(t,"size",t)}function Fo(t){t=te(t);const e=te(this);return ms(e).has.call(e,t)||(e.add(t),Et(e,"add",t,t)),this}function $o(t,e){e=te(e);const n=te(this),{has:r,get:s}=ms(n);let i=r.call(n,t);i||(t=te(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ir(e,o)&&Et(n,"set",t,e):Et(n,"add",t,e),this}function Uo(t){const e=te(this),{has:n,get:r}=ms(e);let s=n.call(e,t);s||(t=te(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Et(e,"delete",t,void 0),i}function Vo(){const t=te(this),e=t.size!==0,n=t.clear();return e&&Et(t,"clear",void 0,void 0),n}function Dr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=te(o),c=e?Bi:t?zi:or;return!t&&je(a,"iterate",sn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function xr(t,e,n){return function(...r){const s=this.__v_raw,i=te(s),o=Sn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Bi:e?zi:or;return!e&&je(i,"iterate",c?si:sn),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function kt(t){return function(...e){return t==="delete"?!1:this}}function Xd(){const t={get(i){return kr(this,i)},get size(){return Nr(this)},has:Pr,add:Fo,set:$o,delete:Uo,clear:Vo,forEach:Dr(!1,!1)},e={get(i){return kr(this,i,!1,!0)},get size(){return Nr(this)},has:Pr,add:Fo,set:$o,delete:Uo,clear:Vo,forEach:Dr(!1,!0)},n={get(i){return kr(this,i,!0)},get size(){return Nr(this,!0)},has(i){return Pr.call(this,i,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Dr(!0,!1)},r={get(i){return kr(this,i,!0,!0)},get size(){return Nr(this,!0)},has(i){return Pr.call(this,i,!0)},add:kt("add"),set:kt("set"),delete:kt("delete"),clear:kt("clear"),forEach:Dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=xr(i,!1,!1),n[i]=xr(i,!0,!1),e[i]=xr(i,!1,!0),r[i]=xr(i,!0,!0)}),[t,n,e,r]}const[Zd,ef,tf,nf]=Xd();function Hi(t,e){const n=e?t?nf:tf:t?ef:Zd;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ee(n,s)&&s in r?n:r,s,i)}const rf={get:Hi(!1,!1)},sf={get:Hi(!1,!0)},of={get:Hi(!0,!1)},qc=new WeakMap,zc=new WeakMap,Kc=new WeakMap,af=new WeakMap;function cf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lf(t){return t.__v_skip||!Object.isExtensible(t)?0:cf(Pd(t))}function Bn(t){return kn(t)?t:qi(t,!1,Hc,rf,qc)}function uf(t){return qi(t,!1,Qd,sf,zc)}function Wc(t){return qi(t,!0,Yd,of,Kc)}function qi(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=lf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Bt(t){return kn(t)?Bt(t.__v_raw):!!(t&&t.__v_isReactive)}function kn(t){return!!(t&&t.__v_isReadonly)}function Jr(t){return!!(t&&t.__v_isShallow)}function Gc(t){return Bt(t)||kn(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function Pn(t){return Gr(t,"__v_skip",!0),t}const or=t=>ue(t)?Bn(t):t,zi=t=>ue(t)?Wc(t):t;function Jc(t){jt&&Qe&&(t=te(t),Vc(t.dep||(t.dep=Ui())))}function Yc(t,e){t=te(t),t.dep&&ii(t.dep)}function he(t){return!!(t&&t.__v_isRef===!0)}function ar(t){return Qc(t,!1)}function df(t){return Qc(t,!0)}function Qc(t,e){return he(t)?t:new ff(t,e)}class ff{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:or(e)}get value(){return Jc(this),this._value}set value(e){const n=this.__v_isShallow||Jr(e)||kn(e);e=n?e:te(e),ir(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:or(e),Yc(this))}}function Ht(t){return he(t)?t.value:t}const hf={get:(t,e,n)=>Ht(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return he(s)&&!he(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Xc(t){return Bt(t)?t:new Proxy(t,hf)}function pf(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=mf(t,n);return e}class gf{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function mf(t,e,n){const r=t[e];return he(r)?r:new gf(t,e,n)}var Zc;class _f{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Zc]=!1,this._dirty=!0,this.effect=new Vi(e,()=>{this._dirty||(this._dirty=!0,Yc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=te(this);return Jc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Zc="__v_isReadonly";function yf(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=et):(r=t.get,s=t.set),new _f(r,s,i||!s,n)}function qt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){_s(i,e,n)}return s}function qe(t,e,n,r){if(H(t)){const i=qt(t,e,n,r);return i&&Pc(i)&&i.catch(o=>{_s(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(qe(t[i],e,n,r));return s}function _s(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){qt(c,null,10,[t,o,a]);return}}vf(t,n,s,r)}function vf(t,e,n,r=!0){console.error(t)}let cr=!1,oi=!1;const Se=[];let lt=0;const An=[];let yt=null,en=0;const el=Promise.resolve();let Ki=null;function Wi(t){const e=Ki||el;return t?e.then(this?t.bind(this):t):e}function bf(t){let e=lt+1,n=Se.length;for(;e<n;){const r=e+n>>>1;lr(Se[r])<t?e=r+1:n=r}return e}function Gi(t){(!Se.length||!Se.includes(t,cr&&t.allowRecurse?lt+1:lt))&&(t.id==null?Se.push(t):Se.splice(bf(t.id),0,t),tl())}function tl(){!cr&&!oi&&(oi=!0,Ki=el.then(rl))}function wf(t){const e=Se.indexOf(t);e>lt&&Se.splice(e,1)}function If(t){B(t)?An.push(...t):(!yt||!yt.includes(t,t.allowRecurse?en+1:en))&&An.push(t),tl()}function jo(t,e=cr?lt+1:0){for(;e<Se.length;e++){const n=Se[e];n&&n.pre&&(Se.splice(e,1),e--,n())}}function nl(t){if(An.length){const e=[...new Set(An)];if(An.length=0,yt){yt.push(...e);return}for(yt=e,yt.sort((n,r)=>lr(n)-lr(r)),en=0;en<yt.length;en++)yt[en]();yt=null,en=0}}const lr=t=>t.id==null?1/0:t.id,Ef=(t,e)=>{const n=lr(t)-lr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function rl(t){oi=!1,cr=!0,Se.sort(Ef);const e=et;try{for(lt=0;lt<Se.length;lt++){const n=Se[lt];n&&n.active!==!1&&qt(n,null,14)}}finally{lt=0,Se.length=0,nl(),cr=!1,Ki=null,(Se.length||An.length)&&rl()}}function Tf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||le;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||le;p&&(s=n.map(m=>_e(m)?m.trim():m)),f&&(s=n.map(xc))}let a,c=r[a=Ms(e)]||r[a=Ms(gt(e))];!c&&i&&(c=r[a=Ms(Un(e))]),c&&qe(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qe(l,t,6,s)}}function sl(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=sl(l,e,!0);u&&(a=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ue(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):Ae(o,i),ue(t)&&r.set(t,o),o)}function ys(t,e){return!t||!fs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,Un(e))||ee(t,e))}let He=null,il=null;function Yr(t){const e=He;return He=t,il=t&&t.type.__scopeId||null,e}function Sf(t,e=He,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Xo(-1);const i=Yr(e);let o;try{o=t(...s)}finally{Yr(i),r._d&&Xo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Fs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:m,ctx:E,inheritAttrs:A}=t;let F,k;const $=Yr(t);try{if(n.shapeFlag&4){const q=s||r;F=ct(u.call(q,q,f,i,m,p,E)),k=c}else{const q=e;F=ct(q.length>1?q(i,{attrs:c,slots:a,emit:l}):q(i,null)),k=e.props?c:Af(c)}}catch(q){Yn.length=0,_s(q,t,1),F=we(It)}let N=F;if(k&&A!==!1){const q=Object.keys(k),{shapeFlag:W}=N;q.length&&W&7&&(o&&q.some(Mi)&&(k=Cf(k,o)),N=Gt(N,k))}return n.dirs&&(N=Gt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),F=N,Yr($),F}const Af=t=>{let e;for(const n in t)(n==="class"||n==="style"||fs(n))&&((e||(e={}))[n]=t[n]);return e},Cf=(t,e)=>{const n={};for(const r in t)(!Mi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Rf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Bo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!ys(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Bo(r,o,l):!0:!!o;return!1}function Bo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ys(n,i))return!0}return!1}function Of({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const kf=t=>t.__isSuspense;function Pf(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):If(t)}function Ur(t,e){if(Ie){let n=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===n&&(n=Ie.provides=Object.create(r)),n[t]=e}}function ft(t,e,n=!1){const r=Ie||He;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r.proxy):e}}const Mr={};function Gn(t,e,n){return ol(t,e,n)}function ol(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=le){const a=Ie;let c,l=!1,u=!1;if(he(t)?(c=()=>t.value,l=Jr(t)):Bt(t)?(c=()=>t,r=!0):B(t)?(u=!0,l=t.some(N=>Bt(N)||Jr(N)),c=()=>t.map(N=>{if(he(N))return N.value;if(Bt(N))return In(N);if(H(N))return qt(N,a,2)})):H(t)?e?c=()=>qt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),qe(t,a,3,[p])}:c=et,e&&r){const N=c;c=()=>In(N())}let f,p=N=>{f=k.onStop=()=>{qt(N,a,4)}},m;if(dr)if(p=et,e?n&&qe(e,a,3,[c(),u?[]:void 0,p]):c(),s==="sync"){const N=Ch();m=N.__watcherHandles||(N.__watcherHandles=[])}else return et;let E=u?new Array(t.length).fill(Mr):Mr;const A=()=>{if(k.active)if(e){const N=k.run();(r||l||(u?N.some((q,W)=>ir(q,E[W])):ir(N,E)))&&(f&&f(),qe(e,a,3,[N,E===Mr?void 0:u&&E[0]===Mr?[]:E,p]),E=N)}else k.run()};A.allowRecurse=!!e;let F;s==="sync"?F=A:s==="post"?F=()=>Pe(A,a&&a.suspense):(A.pre=!0,a&&(A.id=a.uid),F=()=>Gi(A));const k=new Vi(c,F);e?n?A():E=k.run():s==="post"?Pe(k.run.bind(k),a&&a.suspense):k.run();const $=()=>{k.stop(),a&&a.scope&&Li(a.scope.effects,k)};return m&&m.push($),$}function Nf(t,e,n){const r=this.proxy,s=_e(t)?t.includes(".")?al(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Ie;Nn(this);const a=ol(s,i.bind(r),n);return o?Nn(o):on(),a}function al(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function In(t,e){if(!ue(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),he(t))In(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)In(t[n],e);else if(kc(t)||Sn(t))t.forEach(n=>{In(n,e)});else if(Dc(t))for(const n in t)In(t[n],e);return t}function Df(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qr(()=>{t.isMounted=!0}),fl(()=>{t.isUnmounting=!0}),t}const Be=[Function,Array],xf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Be,onEnter:Be,onAfterEnter:Be,onEnterCancelled:Be,onBeforeLeave:Be,onLeave:Be,onAfterLeave:Be,onLeaveCancelled:Be,onBeforeAppear:Be,onAppear:Be,onAfterAppear:Be,onAppearCancelled:Be},setup(t,{slots:e}){const n=Sl(),r=Df();let s;return()=>{const i=e.default&&ll(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const A of i)if(A.type!==It){o=A;break}}const a=te(t),{mode:c}=a;if(r.isLeaving)return $s(o);const l=Ho(o);if(!l)return $s(o);const u=ai(l,a,r,n);ci(l,u);const f=n.subTree,p=f&&Ho(f);let m=!1;const{getTransitionKey:E}=l.type;if(E){const A=E();s===void 0?s=A:A!==s&&(s=A,m=!0)}if(p&&p.type!==It&&(!tn(l,p)||m)){const A=ai(p,a,r,n);if(ci(p,A),c==="out-in")return r.isLeaving=!0,A.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},$s(o);c==="in-out"&&l.type!==It&&(A.delayLeave=(F,k,$)=>{const N=cl(r,p);N[String(p.key)]=p,F._leaveCb=()=>{k(),F._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=$})}return o}}},Mf=xf;function cl(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ai(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:E,onBeforeAppear:A,onAppear:F,onAfterAppear:k,onAppearCancelled:$}=e,N=String(t.key),q=cl(n,t),W=(P,Y)=>{P&&qe(P,r,9,Y)},oe=(P,Y)=>{const X=Y[1];W(P,Y),B(P)?P.every(fe=>fe.length<=1)&&X():P.length<=1&&X()},z={mode:i,persisted:o,beforeEnter(P){let Y=a;if(!n.isMounted)if(s)Y=A||a;else return;P._leaveCb&&P._leaveCb(!0);const X=q[N];X&&tn(t,X)&&X.el._leaveCb&&X.el._leaveCb(),W(Y,[P])},enter(P){let Y=c,X=l,fe=u;if(!n.isMounted)if(s)Y=F||c,X=k||l,fe=$||u;else return;let ye=!1;const Me=P._enterCb=Re=>{ye||(ye=!0,Re?W(fe,[P]):W(X,[P]),z.delayedLeave&&z.delayedLeave(),P._enterCb=void 0)};Y?oe(Y,[P,Me]):Me()},leave(P,Y){const X=String(t.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return Y();W(f,[P]);let fe=!1;const ye=P._leaveCb=Me=>{fe||(fe=!0,Y(),Me?W(E,[P]):W(m,[P]),P._leaveCb=void 0,q[X]===t&&delete q[X])};q[X]=t,p?oe(p,[P,ye]):ye()},clone(P){return ai(P,e,n,r)}};return z}function $s(t){if(vs(t))return t=Gt(t),t.children=null,t}function Ho(t){return vs(t)?t.children?t.children[0]:void 0:t}function ci(t,e){t.shapeFlag&6&&t.component?ci(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ll(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===De?(o.patchFlag&128&&s++,r=r.concat(ll(o.children,e,a))):(e||o.type!==It)&&r.push(a!=null?Gt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ul(t){return H(t)?{setup:t,name:t.name}:t}const Vr=t=>!!t.type.__asyncLoader,vs=t=>t.type.__isKeepAlive;function Lf(t,e){dl(t,"a",e)}function Ff(t,e){dl(t,"da",e)}function dl(t,e,n=Ie){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(bs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)vs(s.parent.vnode)&&$f(r,e,n,s),s=s.parent}}function $f(t,e,n,r){const s=bs(e,t,r,!0);hl(()=>{Li(r[e],s)},n)}function bs(t,e,n=Ie,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Vn(),Nn(n);const a=qe(e,n,t,o);return on(),jn(),a});return r?s.unshift(i):s.push(i),i}}const Rt=t=>(e,n=Ie)=>(!dr||t==="sp")&&bs(t,(...r)=>e(...r),n),Uf=Rt("bm"),Qr=Rt("m"),Vf=Rt("bu"),jf=Rt("u"),fl=Rt("bum"),hl=Rt("um"),Bf=Rt("sp"),Hf=Rt("rtg"),qf=Rt("rtc");function zf(t,e=Ie){bs("ec",t,e)}function Yt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Vn(),qe(c,n,8,[t.el,a,t,e]),jn())}}const pl="components";function Kf(t,e){return Gf(pl,t,!0,e)||t}const Wf=Symbol();function Gf(t,e,n=!0,r=!1){const s=He||Ie;if(s){const i=s.type;if(t===pl){const a=Th(i,!1);if(a&&(a===e||a===gt(e)||a===gs(gt(e))))return i}const o=qo(s[t]||i[t],e)||qo(s.appContext[t],e);return!o&&r?i:o}}function qo(t,e){return t&&(t[e]||t[gt(e)]||t[gs(gt(e))])}function zo(t,e,n,r){let s;const i=n&&n[r];if(B(t)||_e(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ue(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const li=t=>t?Al(t)?Xi(t)||t.proxy:li(t.parent):null,Jn=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>li(t.parent),$root:t=>li(t.root),$emit:t=>t.emit,$options:t=>Ji(t),$forceUpdate:t=>t.f||(t.f=()=>Gi(t.update)),$nextTick:t=>t.n||(t.n=Wi.bind(t.proxy)),$watch:t=>Nf.bind(t)}),Us=(t,e)=>t!==le&&!t.__isScriptSetup&&ee(t,e),Jf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Us(r,e))return o[e]=1,r[e];if(s!==le&&ee(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ee(l,e))return o[e]=3,i[e];if(n!==le&&ee(n,e))return o[e]=4,n[e];ui&&(o[e]=0)}}const u=Jn[e];let f,p;if(u)return e==="$attrs"&&je(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==le&&ee(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,ee(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Us(s,e)?(s[e]=n,!0):r!==le&&ee(r,e)?(r[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==le&&ee(t,o)||Us(e,o)||(a=i[0])&&ee(a,o)||ee(r,o)||ee(Jn,o)||ee(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ui=!0;function Yf(t){const e=Ji(t),n=t.proxy,r=t.ctx;ui=!1,e.beforeCreate&&Ko(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:E,activated:A,deactivated:F,beforeDestroy:k,beforeUnmount:$,destroyed:N,unmounted:q,render:W,renderTracked:oe,renderTriggered:z,errorCaptured:P,serverPrefetch:Y,expose:X,inheritAttrs:fe,components:ye,directives:Me,filters:Re}=e;if(l&&Qf(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ae in o){const se=o[ae];H(se)&&(r[ae]=se.bind(n))}if(s){const ae=s.call(n,n);ue(ae)&&(t.data=Bn(ae))}if(ui=!0,i)for(const ae in i){const se=i[ae],Ge=H(se)?se.bind(n,n):H(se.get)?se.get.bind(n,n):et,Jt=!H(se)&&H(se.set)?se.set.bind(n):et,Je=$e({get:Ge,set:Jt});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Je.value,set:ke=>Je.value=ke})}if(a)for(const ae in a)gl(a[ae],r,n,ae);if(c){const ae=H(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(se=>{Ur(se,ae[se])})}u&&Ko(u,t,"c");function pe(ae,se){B(se)?se.forEach(Ge=>ae(Ge.bind(n))):se&&ae(se.bind(n))}if(pe(Uf,f),pe(Qr,p),pe(Vf,m),pe(jf,E),pe(Lf,A),pe(Ff,F),pe(zf,P),pe(qf,oe),pe(Hf,z),pe(fl,$),pe(hl,q),pe(Bf,Y),B(X))if(X.length){const ae=t.exposed||(t.exposed={});X.forEach(se=>{Object.defineProperty(ae,se,{get:()=>n[se],set:Ge=>n[se]=Ge})})}else t.exposed||(t.exposed={});W&&t.render===et&&(t.render=W),fe!=null&&(t.inheritAttrs=fe),ye&&(t.components=ye),Me&&(t.directives=Me)}function Qf(t,e,n=et,r=!1){B(t)&&(t=di(t));for(const s in t){const i=t[s];let o;ue(i)?"default"in i?o=ft(i.from||s,i.default,!0):o=ft(i.from||s):o=ft(i),he(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Ko(t,e,n){qe(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function gl(t,e,n,r){const s=r.includes(".")?al(n,r):()=>n[r];if(_e(t)){const i=e[t];H(i)&&Gn(s,i)}else if(H(t))Gn(s,t.bind(n));else if(ue(t))if(B(t))t.forEach(i=>gl(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&Gn(s,i,t)}}function Ji(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Xr(c,l,o,!0)),Xr(c,e,o)),ue(e)&&i.set(e,c),c}function Xr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Xr(t,i,n,!0),s&&s.forEach(o=>Xr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Xf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xf={data:Wo,props:Xt,emits:Xt,methods:Xt,computed:Xt,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:Xt,directives:Xt,watch:eh,provide:Wo,inject:Zf};function Wo(t,e){return e?t?function(){return Ae(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Zf(t,e){return Xt(di(t),di(e))}function di(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function Xt(t,e){return t?Ae(Ae(Object.create(null),t),e):e}function eh(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const r in e)n[r]=Oe(t[r],e[r]);return n}function th(t,e,n,r=!1){const s={},i={};Gr(i,Is,1),t.propsDefaults=Object.create(null),ml(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:uf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nh(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=te(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(ys(t.emitsOptions,p))continue;const m=e[p];if(c)if(ee(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const E=gt(p);s[E]=fi(c,a,E,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{ml(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!ee(e,f)&&((u=Un(f))===f||!ee(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=fi(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ee(e,f))&&(delete i[f],l=!0)}l&&Et(t,"set","$attrs")}function ml(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if($r(c))continue;const l=e[c];let u;s&&ee(s,u=gt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ys(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=te(n),l=a||le;for(let u=0;u<i.length;u++){const f=i[u];n[f]=fi(s,c,f,l[f],t,!ee(l,f))}}return o}function fi(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Nn(s),r=l[n]=c.call(null,e),on())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Un(n))&&(r=!0))}return r}function _l(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const u=f=>{c=!0;const[p,m]=_l(f,e,!0);Ae(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ue(t)&&r.set(t,Tn),Tn;if(B(i))for(let u=0;u<i.length;u++){const f=gt(i[u]);Go(f)&&(o[f]=le)}else if(i)for(const u in i){const f=gt(u);if(Go(f)){const p=i[u],m=o[f]=B(p)||H(p)?{type:p}:Object.assign({},p);if(m){const E=Qo(Boolean,m.type),A=Qo(String,m.type);m[0]=E>-1,m[1]=A<0||E<A,(E>-1||ee(m,"default"))&&a.push(f)}}}const l=[o,a];return ue(t)&&r.set(t,l),l}function Go(t){return t[0]!=="$"}function Jo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Yo(t,e){return Jo(t)===Jo(e)}function Qo(t,e){return B(e)?e.findIndex(n=>Yo(n,t)):H(e)&&Yo(e,t)?0:-1}const yl=t=>t[0]==="_"||t==="$stable",Yi=t=>B(t)?t.map(ct):[ct(t)],rh=(t,e,n)=>{if(e._n)return e;const r=Sf((...s)=>Yi(e(...s)),n);return r._c=!1,r},vl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yl(s))continue;const i=t[s];if(H(i))e[s]=rh(s,i,r);else if(i!=null){const o=Yi(i);e[s]=()=>o}}},bl=(t,e)=>{const n=Yi(e);t.slots.default=()=>n},sh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),Gr(e,"_",n)):vl(e,t.slots={})}else t.slots={},e&&bl(t,e);Gr(t.slots,Is,1)},ih=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=le;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ae(s,e),!n&&a===1&&delete s._):(i=!e.$stable,vl(e,s)),o=e}else e&&(bl(t,e),o={default:1});if(i)for(const a in s)!yl(a)&&!(a in o)&&delete s[a]};function wl(){return{app:null,config:{isNativeTag:Rd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oh=0;function ah(t,e){return function(r,s=null){H(r)||(r=Object.assign({},r)),s!=null&&!ue(s)&&(s=null);const i=wl(),o=new Set;let a=!1;const c=i.app={_uid:oh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Rh,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=we(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,Xi(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function hi(t,e,n,r,s=!1){if(B(t)){t.forEach((p,m)=>hi(p,e&&(B(e)?e[m]:e),n,r,s));return}if(Vr(r)&&!s)return;const i=r.shapeFlag&4?Xi(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(_e(l)?(u[l]=null,ee(f,l)&&(f[l]=null)):he(l)&&(l.value=null)),H(c))qt(c,a,12,[o,u]);else{const p=_e(c),m=he(c);if(p||m){const E=()=>{if(t.f){const A=p?ee(f,c)?f[c]:u[c]:c.value;s?B(A)&&Li(A,i):B(A)?A.includes(i)||A.push(i):p?(u[c]=[i],ee(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,ee(f,c)&&(f[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Pe(E,n)):E()}}}const Pe=Pf;function ch(t){return lh(t)}function lh(t,e){const n=xd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=et,insertStaticContent:E}=t,A=(d,h,g,_=null,v=null,I=null,R=!1,w=null,T=!!h.dynamicChildren)=>{if(d===h)return;d&&!tn(d,h)&&(_=C(d),ke(d,v,I,!0),d=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:b,ref:M,shapeFlag:D}=h;switch(b){case ws:F(d,h,g,_);break;case It:k(d,h,g,_);break;case jr:d==null&&$(h,g,_,R);break;case De:ye(d,h,g,_,v,I,R,w,T);break;default:D&1?W(d,h,g,_,v,I,R,w,T):D&6?Me(d,h,g,_,v,I,R,w,T):(D&64||D&128)&&b.process(d,h,g,_,v,I,R,w,T,Z)}M!=null&&v&&hi(M,d&&d.ref,I,h||d,!h)},F=(d,h,g,_)=>{if(d==null)r(h.el=a(h.children),g,_);else{const v=h.el=d.el;h.children!==d.children&&l(v,h.children)}},k=(d,h,g,_)=>{d==null?r(h.el=c(h.children||""),g,_):h.el=d.el},$=(d,h,g,_)=>{[d.el,d.anchor]=E(d.children,h,g,_,d.el,d.anchor)},N=({el:d,anchor:h},g,_)=>{let v;for(;d&&d!==h;)v=p(d),r(d,g,_),d=v;r(h,g,_)},q=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},W=(d,h,g,_,v,I,R,w,T)=>{R=R||h.type==="svg",d==null?oe(h,g,_,v,I,R,w,T):Y(d,h,v,I,R,w,T)},oe=(d,h,g,_,v,I,R,w)=>{let T,b;const{type:M,props:D,shapeFlag:L,transition:j,dirs:J}=d;if(T=d.el=o(d.type,I,D&&D.is,D),L&8?u(T,d.children):L&16&&P(d.children,T,null,_,v,I&&M!=="foreignObject",R,w),J&&Yt(d,null,_,"created"),D){for(const ie in D)ie!=="value"&&!$r(ie)&&i(T,ie,null,D[ie],I,d.children,_,v,O);"value"in D&&i(T,"value",null,D.value),(b=D.onVnodeBeforeMount)&&at(b,_,d)}z(T,d,d.scopeId,R,_),J&&Yt(d,null,_,"beforeMount");const ce=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;ce&&j.beforeEnter(T),r(T,h,g),((b=D&&D.onVnodeMounted)||ce||J)&&Pe(()=>{b&&at(b,_,d),ce&&j.enter(T),J&&Yt(d,null,_,"mounted")},v)},z=(d,h,g,_,v)=>{if(g&&m(d,g),_)for(let I=0;I<_.length;I++)m(d,_[I]);if(v){let I=v.subTree;if(h===I){const R=v.vnode;z(d,R,R.scopeId,R.slotScopeIds,v.parent)}}},P=(d,h,g,_,v,I,R,w,T=0)=>{for(let b=T;b<d.length;b++){const M=d[b]=w?Dt(d[b]):ct(d[b]);A(null,M,h,g,_,v,I,R,w)}},Y=(d,h,g,_,v,I,R)=>{const w=h.el=d.el;let{patchFlag:T,dynamicChildren:b,dirs:M}=h;T|=d.patchFlag&16;const D=d.props||le,L=h.props||le;let j;g&&Qt(g,!1),(j=L.onVnodeBeforeUpdate)&&at(j,g,h,d),M&&Yt(h,d,g,"beforeUpdate"),g&&Qt(g,!0);const J=v&&h.type!=="foreignObject";if(b?X(d.dynamicChildren,b,w,g,_,J,I):R||se(d,h,w,null,g,_,J,I,!1),T>0){if(T&16)fe(w,h,D,L,g,_,v);else if(T&2&&D.class!==L.class&&i(w,"class",null,L.class,v),T&4&&i(w,"style",D.style,L.style,v),T&8){const ce=h.dynamicProps;for(let ie=0;ie<ce.length;ie++){const ge=ce[ie],Ye=D[ge],_n=L[ge];(_n!==Ye||ge==="value")&&i(w,ge,Ye,_n,v,d.children,g,_,O)}}T&1&&d.children!==h.children&&u(w,h.children)}else!R&&b==null&&fe(w,h,D,L,g,_,v);((j=L.onVnodeUpdated)||M)&&Pe(()=>{j&&at(j,g,h,d),M&&Yt(h,d,g,"updated")},_)},X=(d,h,g,_,v,I,R)=>{for(let w=0;w<h.length;w++){const T=d[w],b=h[w],M=T.el&&(T.type===De||!tn(T,b)||T.shapeFlag&70)?f(T.el):g;A(T,b,M,null,_,v,I,R,!0)}},fe=(d,h,g,_,v,I,R)=>{if(g!==_){if(g!==le)for(const w in g)!$r(w)&&!(w in _)&&i(d,w,g[w],null,R,h.children,v,I,O);for(const w in _){if($r(w))continue;const T=_[w],b=g[w];T!==b&&w!=="value"&&i(d,w,b,T,R,h.children,v,I,O)}"value"in _&&i(d,"value",g.value,_.value)}},ye=(d,h,g,_,v,I,R,w,T)=>{const b=h.el=d?d.el:a(""),M=h.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:L,slotScopeIds:j}=h;j&&(w=w?w.concat(j):j),d==null?(r(b,g,_),r(M,g,_),P(h.children,g,M,v,I,R,w,T)):D>0&&D&64&&L&&d.dynamicChildren?(X(d.dynamicChildren,L,g,v,I,R,w),(h.key!=null||v&&h===v.subTree)&&Il(d,h,!0)):se(d,h,g,M,v,I,R,w,T)},Me=(d,h,g,_,v,I,R,w,T)=>{h.slotScopeIds=w,d==null?h.shapeFlag&512?v.ctx.activate(h,g,_,R,T):Re(h,g,_,v,I,R,T):ve(d,h,T)},Re=(d,h,g,_,v,I,R)=>{const w=d.component=vh(d,_,v);if(vs(d)&&(w.ctx.renderer=Z),bh(w),w.asyncDep){if(v&&v.registerDep(w,pe),!d.el){const T=w.subTree=we(It);k(null,T,h,g)}return}pe(w,d,h,g,v,I,R)},ve=(d,h,g)=>{const _=h.component=d.component;if(Rf(d,h,g))if(_.asyncDep&&!_.asyncResolved){ae(_,h,g);return}else _.next=h,wf(_.update),_.update();else h.el=d.el,_.vnode=h},pe=(d,h,g,_,v,I,R)=>{const w=()=>{if(d.isMounted){let{next:M,bu:D,u:L,parent:j,vnode:J}=d,ce=M,ie;Qt(d,!1),M?(M.el=J.el,ae(d,M,R)):M=J,D&&Ls(D),(ie=M.props&&M.props.onVnodeBeforeUpdate)&&at(ie,j,M,J),Qt(d,!0);const ge=Fs(d),Ye=d.subTree;d.subTree=ge,A(Ye,ge,f(Ye.el),C(Ye),d,v,I),M.el=ge.el,ce===null&&Of(d,ge.el),L&&Pe(L,v),(ie=M.props&&M.props.onVnodeUpdated)&&Pe(()=>at(ie,j,M,J),v)}else{let M;const{el:D,props:L}=h,{bm:j,m:J,parent:ce}=d,ie=Vr(h);if(Qt(d,!1),j&&Ls(j),!ie&&(M=L&&L.onVnodeBeforeMount)&&at(M,ce,h),Qt(d,!0),D&&G){const ge=()=>{d.subTree=Fs(d),G(D,d.subTree,d,v,null)};ie?h.type.__asyncLoader().then(()=>!d.isUnmounted&&ge()):ge()}else{const ge=d.subTree=Fs(d);A(null,ge,g,_,d,v,I),h.el=ge.el}if(J&&Pe(J,v),!ie&&(M=L&&L.onVnodeMounted)){const ge=h;Pe(()=>at(M,ce,ge),v)}(h.shapeFlag&256||ce&&Vr(ce.vnode)&&ce.vnode.shapeFlag&256)&&d.a&&Pe(d.a,v),d.isMounted=!0,h=g=_=null}},T=d.effect=new Vi(w,()=>Gi(b),d.scope),b=d.update=()=>T.run();b.id=d.uid,Qt(d,!0),b()},ae=(d,h,g)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,nh(d,h.props,_,g),ih(d,h.children,g),Vn(),jo(),jn()},se=(d,h,g,_,v,I,R,w,T=!1)=>{const b=d&&d.children,M=d?d.shapeFlag:0,D=h.children,{patchFlag:L,shapeFlag:j}=h;if(L>0){if(L&128){Jt(b,D,g,_,v,I,R,w,T);return}else if(L&256){Ge(b,D,g,_,v,I,R,w,T);return}}j&8?(M&16&&O(b,v,I),D!==b&&u(g,D)):M&16?j&16?Jt(b,D,g,_,v,I,R,w,T):O(b,v,I,!0):(M&8&&u(g,""),j&16&&P(D,g,_,v,I,R,w,T))},Ge=(d,h,g,_,v,I,R,w,T)=>{d=d||Tn,h=h||Tn;const b=d.length,M=h.length,D=Math.min(b,M);let L;for(L=0;L<D;L++){const j=h[L]=T?Dt(h[L]):ct(h[L]);A(d[L],j,g,null,v,I,R,w,T)}b>M?O(d,v,I,!0,!1,D):P(h,g,_,v,I,R,w,T,D)},Jt=(d,h,g,_,v,I,R,w,T)=>{let b=0;const M=h.length;let D=d.length-1,L=M-1;for(;b<=D&&b<=L;){const j=d[b],J=h[b]=T?Dt(h[b]):ct(h[b]);if(tn(j,J))A(j,J,g,null,v,I,R,w,T);else break;b++}for(;b<=D&&b<=L;){const j=d[D],J=h[L]=T?Dt(h[L]):ct(h[L]);if(tn(j,J))A(j,J,g,null,v,I,R,w,T);else break;D--,L--}if(b>D){if(b<=L){const j=L+1,J=j<M?h[j].el:_;for(;b<=L;)A(null,h[b]=T?Dt(h[b]):ct(h[b]),g,J,v,I,R,w,T),b++}}else if(b>L)for(;b<=D;)ke(d[b],v,I,!0),b++;else{const j=b,J=b,ce=new Map;for(b=J;b<=L;b++){const Le=h[b]=T?Dt(h[b]):ct(h[b]);Le.key!=null&&ce.set(Le.key,b)}let ie,ge=0;const Ye=L-J+1;let _n=!1,Oo=0;const zn=new Array(Ye);for(b=0;b<Ye;b++)zn[b]=0;for(b=j;b<=D;b++){const Le=d[b];if(ge>=Ye){ke(Le,v,I,!0);continue}let ot;if(Le.key!=null)ot=ce.get(Le.key);else for(ie=J;ie<=L;ie++)if(zn[ie-J]===0&&tn(Le,h[ie])){ot=ie;break}ot===void 0?ke(Le,v,I,!0):(zn[ot-J]=b+1,ot>=Oo?Oo=ot:_n=!0,A(Le,h[ot],g,null,v,I,R,w,T),ge++)}const ko=_n?uh(zn):Tn;for(ie=ko.length-1,b=Ye-1;b>=0;b--){const Le=J+b,ot=h[Le],Po=Le+1<M?h[Le+1].el:_;zn[b]===0?A(null,ot,g,Po,v,I,R,w,T):_n&&(ie<0||b!==ko[ie]?Je(ot,g,Po,2):ie--)}}},Je=(d,h,g,_,v=null)=>{const{el:I,type:R,transition:w,children:T,shapeFlag:b}=d;if(b&6){Je(d.component.subTree,h,g,_);return}if(b&128){d.suspense.move(h,g,_);return}if(b&64){R.move(d,h,g,Z);return}if(R===De){r(I,h,g);for(let D=0;D<T.length;D++)Je(T[D],h,g,_);r(d.anchor,h,g);return}if(R===jr){N(d,h,g);return}if(_!==2&&b&1&&w)if(_===0)w.beforeEnter(I),r(I,h,g),Pe(()=>w.enter(I),v);else{const{leave:D,delayLeave:L,afterLeave:j}=w,J=()=>r(I,h,g),ce=()=>{D(I,()=>{J(),j&&j()})};L?L(I,J,ce):ce()}else r(I,h,g)},ke=(d,h,g,_=!1,v=!1)=>{const{type:I,props:R,ref:w,children:T,dynamicChildren:b,shapeFlag:M,patchFlag:D,dirs:L}=d;if(w!=null&&hi(w,null,g,d,!0),M&256){h.ctx.deactivate(d);return}const j=M&1&&L,J=!Vr(d);let ce;if(J&&(ce=R&&R.onVnodeBeforeUnmount)&&at(ce,h,d),M&6)y(d.component,g,_);else{if(M&128){d.suspense.unmount(g,_);return}j&&Yt(d,null,h,"beforeUnmount"),M&64?d.type.remove(d,h,g,v,Z,_):b&&(I!==De||D>0&&D&64)?O(b,h,g,!1,!0):(I===De&&D&384||!v&&M&16)&&O(T,h,g),_&&mn(d)}(J&&(ce=R&&R.onVnodeUnmounted)||j)&&Pe(()=>{ce&&at(ce,h,d),j&&Yt(d,null,h,"unmounted")},g)},mn=d=>{const{type:h,el:g,anchor:_,transition:v}=d;if(h===De){Or(g,_);return}if(h===jr){q(d);return}const I=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:w}=v,T=()=>R(g,I);w?w(d.el,I,T):T()}else I()},Or=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},y=(d,h,g)=>{const{bum:_,scope:v,update:I,subTree:R,um:w}=d;_&&Ls(_),v.stop(),I&&(I.active=!1,ke(R,d,h,g)),w&&Pe(w,h),Pe(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},O=(d,h,g,_=!1,v=!1,I=0)=>{for(let R=I;R<d.length;R++)ke(d[R],h,g,_,v)},C=d=>d.shapeFlag&6?C(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),x=(d,h,g)=>{d==null?h._vnode&&ke(h._vnode,null,null,!0):A(h._vnode||null,d,h,null,null,null,g),jo(),nl(),h._vnode=d},Z={p:A,um:ke,m:Je,r:mn,mt:Re,mc:P,pc:se,pbc:X,n:C,o:t};let de,G;return e&&([de,G]=e(Z)),{render:x,hydrate:de,createApp:ah(x,de)}}function Qt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Il(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Dt(s[i]),a.el=o.el),n||Il(o,a)),a.type===ws&&(a.el=o.el)}}function uh(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const dh=t=>t.__isTeleport,De=Symbol(void 0),ws=Symbol(void 0),It=Symbol(void 0),jr=Symbol(void 0),Yn=[];let Ze=null;function ut(t=!1){Yn.push(Ze=t?null:[])}function fh(){Yn.pop(),Ze=Yn[Yn.length-1]||null}let ur=1;function Xo(t){ur+=t}function hh(t){return t.dynamicChildren=ur>0?Ze||Tn:null,fh(),ur>0&&Ze&&Ze.push(t),t}function dt(t,e,n,r,s,i){return hh(S(t,e,n,r,s,i,!0))}function pi(t){return t?t.__v_isVNode===!0:!1}function tn(t,e){return t.type===e.type&&t.key===e.key}const Is="__vInternal",El=({key:t})=>t??null,Br=({ref:t,ref_key:e,ref_for:n})=>t!=null?_e(t)||he(t)||H(t)?{i:He,r:t,k:e,f:!!n}:t:null;function S(t,e=null,n=null,r=0,s=null,i=t===De?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&El(e),ref:e&&Br(e),scopeId:il,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:He};return a?(Qi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),ur>0&&!o&&Ze&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ze.push(c),c}const we=ph;function ph(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Wf)&&(t=It),pi(t)){const a=Gt(t,e,!0);return n&&Qi(a,n),ur>0&&!i&&Ze&&(a.shapeFlag&6?Ze[Ze.indexOf(t)]=a:Ze.push(a)),a.patchFlag|=-2,a}if(Sh(t)&&(t=t.__vccOpts),e){e=gh(e);let{class:a,style:c}=e;a&&!_e(a)&&(e.class=xi(a)),ue(c)&&(Gc(c)&&!B(c)&&(c=Ae({},c)),e.style=Di(c))}const o=_e(t)?1:kf(t)?128:dh(t)?64:ue(t)?4:H(t)?2:0;return S(t,e,n,r,s,o,i,!0)}function gh(t){return t?Gc(t)||Is in t?Ae({},t):t:null}function Gt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?mh(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&El(a),ref:e&&e.ref?n&&s?B(s)?s.concat(Br(e)):[s,Br(e)]:Br(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gt(t.ssContent),ssFallback:t.ssFallback&&Gt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Tl(t=" ",e=0){return we(ws,null,t,e)}function Es(t,e){const n=we(jr,null,t);return n.staticCount=e,n}function ct(t){return t==null||typeof t=="boolean"?we(It):B(t)?we(De,null,t.slice()):typeof t=="object"?Dt(t):we(ws,null,String(t))}function Dt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gt(t)}function Qi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Qi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Is in e)?e._ctx=He:s===3&&He&&(He.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:He},n=32):(e=String(e),r&64?(n=16,e=[Tl(e)]):n=8);t.children=e,t.shapeFlag|=n}function mh(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xi([e.class,r.class]));else if(s==="style")e.style=Di([e.style,r.style]);else if(fs(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function at(t,e,n,r=null){qe(t,e,7,[n,r])}const _h=wl();let yh=0;function vh(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||_h,i={uid:yh++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_l(r,s),emitsOptions:sl(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Tf.bind(null,i),t.ce&&t.ce(i),i}let Ie=null;const Sl=()=>Ie||He,Nn=t=>{Ie=t,t.scope.on()},on=()=>{Ie&&Ie.scope.off(),Ie=null};function Al(t){return t.vnode.shapeFlag&4}let dr=!1;function bh(t,e=!1){dr=e;const{props:n,children:r}=t.vnode,s=Al(t);th(t,n,s,e),sh(t,r);const i=s?wh(t,e):void 0;return dr=!1,i}function wh(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Pn(new Proxy(t.ctx,Jf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Eh(t):null;Nn(t),Vn();const i=qt(r,t,0,[t.props,s]);if(jn(),on(),Pc(i)){if(i.then(on,on),e)return i.then(o=>{Zo(t,o,e)}).catch(o=>{_s(o,t,0)});t.asyncDep=i}else Zo(t,i,e)}else Cl(t,e)}function Zo(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=Xc(e)),Cl(t,n)}let ea;function Cl(t,e,n){const r=t.type;if(!t.render){if(!e&&ea&&!r.render){const s=r.template||Ji(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ae(Ae({isCustomElement:i,delimiters:a},o),c);r.render=ea(s,l)}}t.render=r.render||et}Nn(t),Vn(),Yf(t),jn(),on()}function Ih(t){return new Proxy(t.attrs,{get(e,n){return je(t,"get","$attrs"),e[n]}})}function Eh(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Ih(t))},slots:t.slots,emit:t.emit,expose:e}}function Xi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xc(Pn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Jn)return Jn[n](t)},has(e,n){return n in e||n in Jn}}))}function Th(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Sh(t){return H(t)&&"__vccOpts"in t}const $e=(t,e)=>yf(t,e,dr);function Rl(t,e,n){const r=arguments.length;return r===2?ue(e)&&!B(e)?pi(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&pi(n)&&(n=[n]),we(t,e,n))}const Ah=Symbol(""),Ch=()=>ft(Ah),Rh="3.2.45",Oh="http://www.w3.org/2000/svg",nn=typeof document<"u"?document:null,ta=nn&&nn.createElement("template"),kh={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?nn.createElementNS(Oh,t):nn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>nn.createTextNode(t),createComment:t=>nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ta.innerHTML=r?`<svg>${t}</svg>`:t;const a=ta.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ph(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Nh(t,e,n){const r=t.style,s=_e(n);if(n&&!s){for(const i in n)gi(r,i,n[i]);if(e&&!_e(e))for(const i in e)n[i]==null&&gi(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const na=/\s*!important$/;function gi(t,e,n){if(B(n))n.forEach(r=>gi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Dh(t,e);na.test(n)?t.setProperty(Un(r),n.replace(na,""),"important"):t[r]=n}}const ra=["Webkit","Moz","ms"],Vs={};function Dh(t,e){const n=Vs[e];if(n)return n;let r=gt(e);if(r!=="filter"&&r in t)return Vs[e]=r;r=gs(r);for(let s=0;s<ra.length;s++){const i=ra[s]+r;if(i in t)return Vs[e]=i}return e}const sa="http://www.w3.org/1999/xlink";function xh(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(sa,e.slice(6,e.length)):t.setAttributeNS(sa,e,n);else{const i=Cd(e);n==null||i&&!Rc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Mh(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Rc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Lh(t,e,n,r){t.addEventListener(e,n,r)}function Fh(t,e,n,r){t.removeEventListener(e,n,r)}function $h(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Uh(e);if(r){const l=i[e]=Bh(r,s);Lh(t,a,l,c)}else o&&(Fh(t,a,o,c),i[e]=void 0)}}const ia=/(?:Once|Passive|Capture)$/;function Uh(t){let e;if(ia.test(t)){e={};let r;for(;r=t.match(ia);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Un(t.slice(2)),e]}let js=0;const Vh=Promise.resolve(),jh=()=>js||(Vh.then(()=>js=0),js=Date.now());function Bh(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qe(Hh(r,n.value),e,5,[r])};return n.value=t,n.attached=jh(),n}function Hh(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const oa=/^on[a-z]/,qh=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Ph(t,r,s):e==="style"?Nh(t,n,r):fs(e)?Mi(e)||$h(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zh(t,e,r,s))?Mh(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),xh(t,e,r,s))};function zh(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&oa.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||oa.test(e)&&_e(n)?!1:e in t}const Kh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Mf.props;const Wh=Ae({patchProp:qh},kh);let aa;function Gh(){return aa||(aa=ch(Wh))}const Jh=(...t)=>{const e=Gh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Yh(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Yh(t){return _e(t)?document.querySelector(t):t}const Qh="/assets/personajeODM-860404cc.png";const Ir=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Xh={},Zh={class:"headerbueno"},ep=Es('<div class="h-e-a-d-w-e-b-container" data-v-b75b57e7><div class="h-e-a-d-w-e-b-h-e-a-d-w-e-b" data-v-b75b57e7><nav class="navbar" data-v-b75b57e7><nav data-v-b75b57e7><span class="h-e-a-d-w-e-b-text" data-v-b75b57e7><span data-v-b75b57e7><span data-v-b75b57e7>Tipos de envíos</span></span></span><span class="h-e-a-d-w-e-b-text05" data-v-b75b57e7><span data-v-b75b57e7>Calcula tu paquete</span></span><span class="h-e-a-d-w-e-b-text07" data-v-b75b57e7><span data-v-b75b57e7><span data-v-b75b57e7>Cobertura de envíos</span></span></span><span class="h-e-a-d-w-e-b-text12" data-v-b75b57e7><span data-v-b75b57e7>Tarifas preferenciales</span></span></nav></nav><span class="h-e-a-d-w-e-b-text14" data-v-b75b57e7><span data-v-b75b57e7>AHORRA HASTA 60% EN LOGÍSTICA PARA TU EMPRESA</span></span><span class="h-e-a-d-w-e-b-text16" data-v-b75b57e7><span class="h-e-a-d-w-e-b-text17" data-v-b75b57e7><span data-v-b75b57e7>• Tarifas preferenciales para empresas.</span><br data-v-b75b57e7><span data-v-b75b57e7> • Envía y recibe paquetes el mismo día. </span></span><span class="h-e-a-d-w-e-b-text21" data-v-b75b57e7><span data-v-b75b57e7>(Sin costo extra).</span><br data-v-b75b57e7><span data-v-b75b57e7></span></span><span class="h-e-a-d-w-e-b-text25" data-v-b75b57e7> • Cobertura en zonas extendidas. </span><span class="h-e-a-d-w-e-b-text26" data-v-b75b57e7><span data-v-b75b57e7>(Sin costo extra).</span><br data-v-b75b57e7><span data-v-b75b57e7></span></span><span class="h-e-a-d-w-e-b-text30" data-v-b75b57e7> • Servicio ocurre, en más de 50 ciudades. </span><span data-v-b75b57e7>(Bajío, Norte y Centro del país).</span></span><img src="'+Qh+'" alt="personajeODM13256" class="h-e-a-d-w-e-b-personaje-o-d-m1" data-v-b75b57e7><div class="h-e-a-d-w-e-b-frame8" data-v-b75b57e7><div class="h-e-a-d-w-e-b-boton1" data-v-b75b57e7><span class="h-e-a-d-w-e-b-text32" data-v-b75b57e7><a href="formulario" data-v-b75b57e7><button class="button-18" data-v-b75b57e7>Tarifas preferenciales</button></a></span></div></div></div></div>',1),tp=[ep];function np(t,e){return ut(),dt("div",Zh,tp)}const rp=Ir(Xh,[["render",np],["__scopeId","data-v-b75b57e7"]]);const sp="/assets/SobreODM-8ea1740b.png",ca="/assets/CajaODM-b82f9c47.png",ip="/assets/maleta-d0d076ac.png";const op={},ap={class:"h-e-a-d-w-e-b-tiposdeenvios"},cp=Es('<h1 id="head" data-v-c47aae61>TIPOS DE ENVÍOS </h1><div class="grupos" data-v-c47aae61><div class="h-e-a-d-w-e-b-group7" data-v-c47aae61><span class="h-e-a-d-w-e-b-text07" data-v-c47aae61><span data-v-c47aae61>Sobres</span></span><span class="h-e-a-d-w-e-b-text09" data-v-c47aae61><span data-v-c47aae61>Hasta un máximo de 25 hojas</span></span><img src="'+sp+'" alt="SobreODM23256" class="h-e-a-d-w-e-b-sobre-o-d-m2" data-v-c47aae61></div><div class="h-e-a-d-w-e-b-group8" data-v-c47aae61><span class="h-e-a-d-w-e-b-text11" data-v-c47aae61><span data-v-c47aae61>Paquetes</span></span><span class="h-e-a-d-w-e-b-text13" data-v-c47aae61><span data-v-c47aae61>De 0 - 1 Kg</span></span><img src="'+ca+'" alt="CajaODM33256" class="h-e-a-d-w-e-b-caja-o-d-m3" data-v-c47aae61></div><div class="h-e-a-d-w-e-b-group9" data-v-c47aae61><span class="h-e-a-d-w-e-b-text15" data-v-c47aae61><span data-v-c47aae61>Cajas</span></span><span class="h-e-a-d-w-e-b-text17" data-v-c47aae61><span data-v-c47aae61><span data-v-c47aae61>De 1 - 10 Kg</span><br data-v-c47aae61><span data-v-c47aae61>De 11 - 20 Kg</span><br data-v-c47aae61><span data-v-c47aae61>De 21 - 30 Kg</span></span></span><img src="'+ca+'" alt="CajaODM43256" class="h-e-a-d-w-e-b-caja-o-d-m4" data-v-c47aae61></div><div class="h-e-a-d-w-e-b-group10" data-v-c47aae61><img src="'+ip+'" alt="maleta13256" class="h-e-a-d-w-e-b-maleta1" data-v-c47aae61><span class="h-e-a-d-w-e-b-text24" data-v-c47aae61><span data-v-c47aae61>Maletas</span></span><span class="h-e-a-d-w-e-b-text26" data-v-c47aae61><span data-v-c47aae61><span data-v-c47aae61>De 1 - 10 Kg</span><br data-v-c47aae61><span data-v-c47aae61>De 11 - 20 Kg</span><br data-v-c47aae61><span data-v-c47aae61>De 21 - 30 Kg</span></span></span></div></div><div class="h-e-a-d-w-e-b-rectangle" data-v-c47aae61><span class="h-e-a-d-w-e-b-text02" data-v-c47aae61><span data-v-c47aae61><span data-v-c47aae61> VOLUMEN MÁXIMO EN TU ENVÍO: <br data-v-c47aae61> 65 X 50 X 55 = 30cm^3 </span></span></span></div>',3),lp=[cp];function up(t,e){return ut(),dt("div",ap,lp)}const dp=Ir(op,[["render",up],["__scopeId","data-v-c47aae61"]]),fp="/assets/caja-0d47acde.png";const hp={},pp={class:"root"},gp=S("h1",{id:"head"},"CALCULA EL PESO DE TU PAQUETE",-1),mp=S("div",{class:"imagen"},[S("img",{src:fp,alt:""})],-1),_p=S("div",{class:"rectangle"},[S("div",{class:"largo"},[S("p",null,"Largo "),S("input",{id:"length",placeholder:"Escribe el largo en centímetros",type:"text"}),S("p",null,"(cm)")]),S("div",{class:"ancho"},[S("p",null,"Ancho"),S("input",{id:"width",placeholder:"Escribe el ancho en centímetros",type:"text"}),Tl(),S("p",null,"(cm)")]),S("div",{class:"alto"},[S("p",null,"Alto"),S("input",{id:"thickness",placeholder:"Escribe la altura en centímetros",type:"text"}),S("p",null,"(cm)")]),S("div",{class:"total"},[S("button",{class:"btn",onclick:"calculateCubic(this)"},"Calcular peso total"),S("p",{class:"text"},"Peso total"),S("div",{id:"result"}," Kg")])],-1),yp=[gp,mp,_p];function vp(t,e,n,r,s,i){return ut(),dt("div",pp,yp)}const bp=Ir(hp,[["render",vp]]),wp="/assets/instagramlogowhite-5e4d4d8c.png",Ip="/assets/fblogowhite-c2a81805.png",Ep="/assets/youtubelogowhite-761932b5.png",Tp="/assets/twitterlogowhite-8ac4e274.png",Sp="/assets/logoblanco-9affbb48.webp";const Ap={name:"Footer",props:{}},Cp=Es('<div class="footer-footer" data-v-a121a406><div class="footer-textos1" data-v-a121a406><a href="https://odm.com.mx/quienes-somos2" data-v-a121a406><span class="footer-text" data-v-a121a406><span data-v-a121a406>Quiénes somos</span></span></a><a href="https://odm.com.mx/preguntas-frecuentes" data-v-a121a406><span class="footer-text02" data-v-a121a406><span data-v-a121a406>Preguntas frecuentes</span></span></a><a href="http://venta.odm.com.mx/netScripts/request.aspx?APPNAME=Navegante&amp;PRGNAME=AccesoEx&amp;ARGUMENTS=-AAG&amp;_gl=1*15uba7d*_ga*NjAyODM2MzE2LjE2NzI0MjgyOTU.*_ga_6MKKJY80T1*MTY3NTQ0MjQzNi43Ny4wLjE2NzU0NDI0MzYuNjAuMC4w" data-v-a121a406><span class="footer-text06" data-v-a121a406><span data-v-a121a406>Agencias</span></span></a><a href="https://odm.com.mx/contactanos" data-v-a121a406><span class="footer-text04" data-v-a121a406><span data-v-a121a406>Contáctanos</span></span></a></div><span class="footer-text08" data-v-a121a406><span data-v-a121a406>© Omnibus de México. | Todos los derechos reservados.</span></span><div class="footer-logos" data-v-a121a406><img src="'+wp+'" alt="instagramlogo3371" class="footer-instagramlogo" data-v-a121a406><img src="'+Ip+'" alt="facebooklogo3371" class="footer-facebooklogo" data-v-a121a406><div class="footer-youtubelogo" data-v-a121a406><img src="'+Ep+'" alt="Vector3371" class="footer-vector" data-v-a121a406></div><img src="'+Tp+'" alt="twitterlogo3371" class="footer-twitterlogo" data-v-a121a406></div><a href="https://odm.com.mx/" data-v-a121a406><span class="footer-text10" data-v-a121a406><span data-v-a121a406>Mapa del sitio</span></span></a><a href="https://odm.com.mx/aviso-privacidad" data-v-a121a406><span class="footer-text12" data-v-a121a406><span data-v-a121a406>Aviso de privacidad</span></span><span class="footer-text14" data-v-a121a406><span data-v-a121a406>Políticas del viaje</span></span></a><img src="'+Sp+'" alt="logoblanco3371" class="footer-logoblanco" data-v-a121a406></div>',1),Rp=[Cp];function Op(t,e,n,r,s,i){return ut(),dt("div",null,Rp)}const kp=Ir(Ap,[["render",Op],["__scopeId","data-v-a121a406"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Pp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ol(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const E=l<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Np=function(t){const e=Ol(t);return kl.encodeByteArray(e,!0)},Zr=function(t){return Np(t).replace(/\./g,"")},Pl=function(t){try{return kl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Nl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mp(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Dl(){try{return typeof indexedDB=="object"}catch{return!1}}function xl(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Lp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function Fp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=()=>Fp().__FIREBASE_DEFAULTS__,Up=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pl(t[1]);return e&&JSON.parse(e)},Zi=()=>{try{return $p()||Up()||Vp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ml=t=>{var e,n;return(n=(e=Zi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jp=t=>{const e=Ml(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bp=()=>{var t;return(t=Zi())===null||t===void 0?void 0:t.config},Ll=t=>{var e;return(e=Zi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Zr(JSON.stringify(n)),Zr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="FirebaseError";class st extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zp,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pn.prototype.create)}}class pn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Kp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new st(s,a,r)}}function Kp(t,e){return t.replace(Wp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Wp=/\{\$([^}]+)}/g;function Gp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(la(i)&&la(o)){if(!fr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function la(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jp(t,e){const n=new Yp(t,e);return n.subscribe.bind(n)}class Yp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Bs),s.error===void 0&&(s.error=Bs),s.complete===void 0&&(s.complete=Bs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=1e3,Zp=2,eg=4*60*60*1e3,tg=.5;function ua(t,e=Xp,n=Zp){const r=e*Math.pow(n,t),s=Math.round(tg*r*(Math.random()-.5)*2);return Math.min(eg,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class tt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Hp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sg(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rg(t){return t===Zt?void 0:t}function sg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ng(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const og={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},ag=re.INFO,cg={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},lg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ts{constructor(e){this.name=e,this._logLevel=ag,this._logHandler=lg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?og[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const ug=(t,e)=>e.some(n=>t instanceof n);let da,fa;function dg(){return da||(da=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fg(){return fa||(fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fl=new WeakMap,mi=new WeakMap,$l=new WeakMap,Hs=new WeakMap,eo=new WeakMap;function hg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(zt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fl.set(n,t)}).catch(()=>{}),eo.set(e,t),e}function pg(t){if(mi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mi.set(t,e)}let _i={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$l.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gg(t){_i=t(_i)}function mg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qs(this),e,...n);return $l.set(r,e.sort?e.sort():[e]),zt(r)}:fg().includes(t)?function(...e){return t.apply(qs(this),e),zt(Fl.get(this))}:function(...e){return zt(t.apply(qs(this),e))}}function _g(t){return typeof t=="function"?mg(t):(t instanceof IDBTransaction&&pg(t),ug(t,dg())?new Proxy(t,_i):t)}function zt(t){if(t instanceof IDBRequest)return hg(t);if(Hs.has(t))return Hs.get(t);const e=_g(t);return e!==t&&(Hs.set(t,e),eo.set(e,t)),e}const qs=t=>eo.get(t);function Ul(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=zt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(zt(o.result),c.oldVersion,c.newVersion,zt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const yg=["get","getKey","getAll","getAllKeys","count"],vg=["put","add","delete","clear"],zs=new Map;function ha(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zs.get(e))return zs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=vg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return zs.set(e,i),i}gg(t=>({...t,get:(e,n,r)=>ha(e,n)||t.get(e,n,r),has:(e,n)=>!!ha(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yi="@firebase/app",pa="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Ts("@firebase/app"),Ig="@firebase/app-compat",Eg="@firebase/analytics-compat",Tg="@firebase/analytics",Sg="@firebase/app-check-compat",Ag="@firebase/app-check",Cg="@firebase/auth",Rg="@firebase/auth-compat",Og="@firebase/database",kg="@firebase/database-compat",Pg="@firebase/functions",Ng="@firebase/functions-compat",Dg="@firebase/installations",xg="@firebase/installations-compat",Mg="@firebase/messaging",Lg="@firebase/messaging-compat",Fg="@firebase/performance",$g="@firebase/performance-compat",Ug="@firebase/remote-config",Vg="@firebase/remote-config-compat",jg="@firebase/storage",Bg="@firebase/storage-compat",Hg="@firebase/firestore",qg="@firebase/firestore-compat",zg="firebase",Kg="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="[DEFAULT]",Wg={[yi]:"fire-core",[Ig]:"fire-core-compat",[Tg]:"fire-analytics",[Eg]:"fire-analytics-compat",[Ag]:"fire-app-check",[Sg]:"fire-app-check-compat",[Cg]:"fire-auth",[Rg]:"fire-auth-compat",[Og]:"fire-rtdb",[kg]:"fire-rtdb-compat",[Pg]:"fire-fn",[Ng]:"fire-fn-compat",[Dg]:"fire-iid",[xg]:"fire-iid-compat",[Mg]:"fire-fcm",[Lg]:"fire-fcm-compat",[Fg]:"fire-perf",[$g]:"fire-perf-compat",[Ug]:"fire-rc",[Vg]:"fire-rc-compat",[jg]:"fire-gcs",[Bg]:"fire-gcs-compat",[Hg]:"fire-fst",[qg]:"fire-fst-compat","fire-js":"fire-js",[zg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Map,bi=new Map;function Gg(t,e){try{t.container.addComponent(e)}catch(n){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mt(t){const e=t.name;if(bi.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;bi.set(e,t);for(const n of es.values())Gg(n,t);return!0}function gn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kt=new pn("app","Firebase",Jg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=Kg;function Vl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(n||(n=Bp()),!n)throw Kt.create("no-options");const i=es.get(s);if(i){if(fr(n,i.options)&&fr(r,i.config))return i;throw Kt.create("duplicate-app",{appName:s})}const o=new ig(s);for(const c of bi.values())o.addComponent(c);const a=new Yg(n,r,o);return es.set(s,a),a}function to(t=vi){const e=es.get(t);if(!e&&t===vi)return Vl();if(!e)throw Kt.create("no-app",{appName:t});return e}function ze(t,e,n){var r;let s=(r=Wg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(a.join(" "));return}mt(new tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="firebase-heartbeat-database",Xg=1,hr="firebase-heartbeat-store";let Ks=null;function jl(){return Ks||(Ks=Ul(Qg,Xg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hr)}}}).catch(t=>{throw Kt.create("idb-open",{originalErrorMessage:t.message})})),Ks}async function Zg(t){try{return(await jl()).transaction(hr).objectStore(hr).get(Bl(t))}catch(e){if(e instanceof st)cn.warn(e.message);else{const n=Kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(n.message)}}}async function ga(t,e){try{const r=(await jl()).transaction(hr,"readwrite");return await r.objectStore(hr).put(e,Bl(t)),r.done}catch(n){if(n instanceof st)cn.warn(n.message);else{const r=Kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cn.warn(r.message)}}}function Bl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=1024,tm=30*24*60*60*1e3;class nm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ma();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=tm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ma(),{heartbeatsToSend:n,unsentEntries:r}=rm(this._heartbeatsCache.heartbeats),s=Zr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ma(){return new Date().toISOString().substring(0,10)}function rm(t,e=em){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_a(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_a(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dl()?xl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Zg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ga(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ga(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _a(t){return Zr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t){mt(new tt("platform-logger",e=>new bg(e),"PRIVATE")),mt(new tt("heartbeat",e=>new nm(e),"PRIVATE")),ze(yi,pa,t),ze(yi,pa,"esm2017"),ze("fire-js","")}im("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new Ts("@firebase/firestore");function ts(t,...e){if(Dn.logLevel<=re.DEBUG){const n=e.map(ro);Dn.debug(`Firestore (${Hn}): ${t}`,...n)}}function no(t,...e){if(Dn.logLevel<=re.ERROR){const n=e.map(ro);Dn.error(`Firestore (${Hn}): ${t}`,...n)}}function Hl(t,...e){if(Dn.logLevel<=re.WARN){const n=e.map(ro);Dn.warn(`Firestore (${Hn}): ${t}`,...n)}}function ro(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t="Unexpected state"){const e=`FIRESTORE (${Hn}) INTERNAL ASSERTION FAILED: `+t;throw no(e),new Error(e)}function Tt(t,e){t||nt()}function so(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="ok",om="cancelled",Qn="unknown",K="invalid-argument",am="deadline-exceeded",cm="not-found",lm="permission-denied",wi="unauthenticated",um="resource-exhausted",xn="failed-precondition",dm="aborted",fm="out-of-range",ql="unimplemented",hm="internal",pm="unavailable";class U extends st{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ne.UNAUTHENTICATED))}shutdown(){}}class mm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _m{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Tt(typeof e.accessToken=="string"),new zl(e.accessToken,new Ne(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class ym{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(Tt(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class vm{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s}getToken(){return Promise.resolve(new ym(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wm{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Tt(typeof e.token=="string"),new bm(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class pr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pr&&e.projectId===this.projectId&&e.database===this.database}}class gr{constructor(e,n,r){n===void 0?n=0:n>e.length&&nt(),r===void 0?r=e.length-n:r>e.length-n&&nt(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return gr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends gr{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(K,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const Em=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends gr{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return Em.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(K,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(K,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(K,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(K,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.path=e}static fromPath(e){return new xe(Te.fromString(e))}static fromName(e){return new xe(Te.fromString(e).popFirst(5))}static empty(){return new xe(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new xe(new Te(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e,n){if(!n)throw new U(K,`Function ${t}() cannot be called with an empty ${e}.`)}function va(t){if(xe.isDocumentKey(t))throw new U(K,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ss(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":nt()}function Kl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(K,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ss(t);throw new U(K,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){return t==null}function ns(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ba,Q;function wa(t){if(t===void 0)return no("RPC_ERROR","HTTP error has no status"),Qn;switch(t){case 200:return ya;case 400:return xn;case 401:return wi;case 403:return lm;case 404:return cm;case 409:return dm;case 416:return fm;case 429:return um;case 499:return om;case 500:return Qn;case 501:return ql;case 503:return pm;case 504:return am;default:return t>=200&&t<300?ya:t>=400&&t<500?xn:t>=500&&t<600?hm:Qn}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Q=ba||(ba={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";class Cm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(e,n,r,s,i){const o=this.T(e,n);ts("RestConnection","Sending: ",o,r);const a={};return this.A(a,s,i),this.R(e,o,a,r).then(c=>(ts("RestConnection","Received: ",c),c),c=>{throw Hl("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}P(e,n,r,s,i,o){return this.I(e,n,r,s,i)}A(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Hn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}T(e,n){const r=Am[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.V=n}$(e,n){throw new Error("Not supported by FetchConnection")}async R(e,n,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.V(n,{method:"POST",headers:r,body:o})}catch(c){const l=c;throw new U(wa(l.status),"Request failed with error: "+l.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const l=(i=c==null?void 0:c.error)===null||i===void 0?void 0:i.message;throw new U(wa(a.status),`Request failed with error: ${l??a.statusText}`)}return a.json()}}function be(t,e){return t<e?-1:t>e?1:0}function Rm(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function As(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new St(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const Om=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ln(t){if(Tt(!!t),typeof t=="string"){let e=0;const n=Om.exec(t);if(Tt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(K,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(K,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(K,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(K,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gl(t){const e=t.mapValue.fields.__previous_value__;return Wl(e)?Gl(e):e}function _r(t){const e=ln(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr={fields:{__type__:{stringValue:"__max__"}}};function un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wl(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:nt()}function rs(t,e){if(t===e)return!0;const n=un(t);if(n!==un(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _r(t).isEqual(_r(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=ln(r.timestampValue),o=ln(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return mr(r.bytesValue).isEqual(mr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return me(r.geoPointValue.latitude)===me(s.geoPointValue.latitude)&&me(r.geoPointValue.longitude)===me(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return me(r.integerValue)===me(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=me(r.doubleValue),o=me(s.doubleValue);return i===o?ns(i)===ns(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Rm(t.arrayValue.values||[],e.arrayValue.values||[],rs);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ia(i)!==Ia(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!rs(i[a],o[a])))return!1;return!0}(t,e);default:return nt()}}function yr(t,e){return(t.values||[]).find(n=>rs(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=un(t),r=un(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=me(s.integerValue||s.doubleValue),a=me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ea(t.timestampValue,e.timestampValue);case 4:return Ea(_r(t),_r(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(s,i){const o=mr(s),a=mr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=be(o[c],a[c]);if(l!==0)return l}return be(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=be(me(s.latitude),me(i.latitude));return o!==0?o:be(me(s.longitude),me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ss(o[c],a[c]);if(l)return l}return be(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Lr&&i===Lr)return 0;if(s===Lr)return 1;if(i===Lr)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=be(a[u],l[u]);if(f!==0)return f;const p=ss(o[a[u]],c[l[u]]);if(p!==0)return p}return be(a.length,l.length)}(t.mapValue,e.mapValue);default:throw nt()}}function Ea(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=ln(t),r=ln(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function Ta(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jl(t){return!!t&&"arrayValue"in t}function Sa(t){return!!t&&"nullValue"in t}function Aa(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ws(t){return!!t&&"mapValue"in t}function Xn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return As(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xn(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xn(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Ca{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{}class it extends Yl{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new km(e,n,r):n==="array-contains"?new Dm(e,r):n==="in"?new xm(e,r):n==="not-in"?new Mm(e,r):n==="array-contains-any"?new Lm(e,r):new it(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Pm(e,r):new Nm(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&un(this.value)===un(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return nt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Sr extends Yl{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Sr(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(n=>n.isInequality());return e!==null?e.field:null}F(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class km extends it{constructor(e,n,r){super(e,n,r),this.key=xe.fromName(r.referenceValue)}matches(e){const n=xe.comparator(e.key,this.key);return this.matchesComparison(n)}}class Pm extends it{constructor(e,n){super(e,"in",n),this.keys=Ql("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Nm extends it{constructor(e,n){super(e,"not-in",n),this.keys=Ql("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ql(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>xe.fromName(r.referenceValue))}class Dm extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jl(n)&&yr(n.arrayValue,this.value)}}class xm extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yr(this.value.arrayValue,n)}}class Mm extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(yr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!yr(this.value.arrayValue,n)}}class Lm extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Ue(0,0))}static max(){return new Ee(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ws(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xn(n)}setAll(e){let n=Xe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Xn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ws(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rs(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ws(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){As(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new vt(Xn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xt(e,0,Ee.min(),Ee.min(),Ee.min(),vt.empty(),0)}static newFoundDocument(e,n,r,s){return new xt(e,1,n,Ee.min(),r,s,0)}static newNoDocument(e,n){return new xt(e,2,n,Ee.min(),Ee.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new xt(e,3,n,Ee.min(),Ee.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.S=null}}function Ra(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Fm(t,e,n,r,s,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt}}function Zl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function io(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function $m(t){return t.collectionGroup!==null}function Oa(t){const e=so(t);if(e.q===null){e.q=[];const n=io(e),r=Zl(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new Hr(n)),e.q.push(new Hr(Xe.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new Hr(Xe.keyField(),i))}}}return e.q}function Um(t){const e=so(t);if(!e.O)if(e.limitType==="F")e.O=Ra(e.path,e.collectionGroup,Oa(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Oa(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Hr(i.field,o))}const r=e.endAt?new Ca(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ca(e.startAt.position,e.startAt.inclusive):null;e.O=Ra(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}function Ii(t,e){e.getFirstInequalityField(),io(t);const n=t.filters.concat([e]);return new Xl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!ns(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.k){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ns(r)?"-0":r}}(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Bm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Hm=(()=>({and:"AND",or:"OR"}))();class qm{constructor(e,n){this.databaseId=e,this.k=n}}function ka(t,e){return t.k?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zm(t,e){return t.k?e.toBase64():e.toUint8Array()}function Pa(t){return Tt(!!t),Ee.fromTimestamp(function(e){const n=ln(e);return new Ue(n.seconds,n.nanos)}(t))}function eu(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Km(t,e){const n=function(s){const i=Te.fromString(s);return Tt(nu(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new U(K,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(K,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new xe((Tt((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Na(t,e){return eu(t.databaseId,e)}function Wm(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Na(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Na(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return tu(Sr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:bn(u.field),direction:Gm(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.k||Sm(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Gm(t){return jm[t]}function Jm(t){return Bm[t]}function Ym(t){return Hm[t]}function bn(t){return{fieldPath:t.canonicalString()}}function tu(t){return t instanceof it?function(e){if(e.op==="=="){if(Aa(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NAN"}};if(Sa(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Aa(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NOT_NAN"}};if(Sa(e.value))return{unaryFilter:{field:bn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(e.field),op:Jm(e.op),value:e.value}}}(t):t instanceof Sr?function(e){const n=e.getFilters().map(r=>tu(r));return n.length===1?n[0]:{compositeFilter:{op:Ym(e.op),filters:n}}}(t):nt()}function nu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){return new qm(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.C=s,this.Z=!1}tt(){if(this.Z)throw new U(xn,"The client has already been terminated.")}I(e,n,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.I(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===wi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(Qn,s.toString())})}P(e,n,r,s){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.P(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===wi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(Qn,i.toString())})}terminate(){this.Z=!0}}async function Xm(t,e){const n=so(t),r=Wm(n.C,Um(e));return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const c=Km(i,o.name),l=Pa(o.updateTime),u=o.createTime?Pa(o.createTime):Ee.min(),f=new vt({mapValue:{fields:o.fields}}),p=xt.newFoundDocument(c,l,u,f);return a&&p.setHasCommittedMutations(),a?p.setHasCommittedMutations():p}(n.C,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Map;function Zm(t){if(t._terminated)throw new U(xn,"The client has already been terminated.");if(!Zn.has(t)){ts("ComponentProvider","Initializing Datastore");const i=function(c){return new Cm(c,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new Im(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=oo(t._databaseId),a=function(c,l,u,f){return new Qm(c,l,u,f)}(t._authCredentials,t._appCheckCredentials,i,o);Zn.set(t,a)}var e,n,r,s;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return Zn.get(t)}class Da{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(K,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(K,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new U(K,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Da({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(xn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(xn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Da(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gm;switch(n.type){case"gapi":const r=n.client;return new vm(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(K,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Zn.get(e);n&&(ts("ComponentProvider","Removing Datastore"),Zn.delete(e),n.terminate())}(this),Promise.resolve()}}function e_(t,e){const n=typeof t=="object"?t:to(),r=typeof t=="string"?t:e||"(default)",s=gn(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=jp("firestore");i&&t_(s,...i)}return s}function t_(t,e,n,r={}){var s;const i=(t=Kl(t,ao))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Hl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ne.MOCK_USER;else{o=qp(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new U(K,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ne(c)}t._authCredentials=new mm(new zl(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class qn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qn(this.firestore,e,this._query)}}class Cn extends qn{constructor(e,n,r){super(e,n,new Xl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new xe(e))}withConverter(e){return new Cn(this.firestore,e,this._path)}}function xa(t,e,...n){if(t=We(t),Tm("collection","path",e),t instanceof ao){const r=Te.fromString(e,...n);return va(r),new Cn(t,null,r)}{if(!(t instanceof Ot||t instanceof Cn))throw new U(K,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return va(r),new Cn(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mn(St.fromBase64String(e))}catch(n){throw new U(K,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mn(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(K,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(K,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(K,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=/^__.*__$/;function iu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nt()}}class lo{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.C=r,this.ignoreUndefinedProperties=s,i===void 0&&this.et(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get nt(){return this.settings.nt}rt(e){return new lo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}st(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.ot(e),s}ut(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.et(),s}ct(e){return this.rt({path:void 0,it:!0})}at(e){return Ei(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}et(){if(this.path)for(let e=0;e<this.path.length;e++)this.ot(this.path.get(e))}ot(e){if(e.length===0)throw this.at("Document fields must not be empty");if(iu(this.nt)&&n_.test(e))throw this.at('Document fields cannot begin and end with "__"')}}class r_{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.C=r||oo(e)}ft(e,n,r,s=!1){return new lo({nt:e,methodName:n,lt:r,path:Xe.emptyPath(),it:!1,ht:s},this.databaseId,this.C,this.ignoreUndefinedProperties)}}function s_(t){const e=t._freezeSettings(),n=oo(t._databaseId);return new r_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function i_(t,e,n,r=!1){return uo(n,t.ft(r?4:3,e))}function uo(t,e){if(ou(t=We(t)))return a_("Unsupported field value:",e,t),o_(t,e);if(t instanceof su)return function(n,r){if(!iu(r.nt))throw r.at(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.at(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.nt!==4)throw e.at("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=uo(o,r.ct(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=We(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Vm(r.C,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Ue.fromDate(n);return{timestampValue:ka(r.C,s)}}if(n instanceof Ue){const s=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ka(r.C,s)}}if(n instanceof co)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Mn)return{bytesValue:zm(r.C,n._byteString)};if(n instanceof Ot){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.at(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:eu(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.at(`Unsupported field value: ${Ss(n)}`)}(t,e)}function o_(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(t,(r,s)=>{const i=uo(s,e.st(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ou(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof co||t instanceof Mn||t instanceof Ot||t instanceof su)}function a_(t,e,n){if(!ou(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ss(n);throw r==="an object"?e.at(t+" a custom object"):e.at(t+" "+r)}}const c_=new RegExp("[~\\*/\\[\\]]");function l_(t,e,n){if(e.search(c_)>=0)throw Ei(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ru(...e.split("."))._internalPath}catch{throw Ei(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ei(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(K,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new au(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(f_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class au extends u_{data(){return super.data()}}class d_{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function f_(t,e){return typeof e=="string"?l_(t,e):e instanceof ru?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{}class h_ extends fo{}function Ma(t,e,...n){let r=[];e instanceof fo&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof po).length,o=s.filter(a=>a instanceof ho).length;if(i>1||i>0&&o>0)throw new U(K,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ho extends h_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ho(e,n,r)}_apply(e){const n=this._parse(e);return cu(e._query,n),new qn(e.firestore,e.converter,Ii(e._query,n))}_parse(e){const n=s_(e.firestore);return function(s,i,o,a,c,l,u){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new U(K,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Fa(u,l);const p=[];for(const m of u)p.push(La(a,s,m));f={arrayValue:{values:p}}}else f=La(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Fa(u,l),f=i_(o,i,u,l==="in"||l==="not-in");return it.create(c,l,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class po extends fo{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new po(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Sr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)cu(i,a),i=Ii(i,a)}(e._query,n),new qn(e.firestore,e.converter,Ii(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function La(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new U(K,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$m(e)&&n.indexOf("/")!==-1)throw new U(K,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!xe.isDocumentKey(r))throw new U(K,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ta(t,new xe(r))}if(n instanceof Ot)return Ta(t,n._key);throw new U(K,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ss(n)}.`)}function Fa(t,e){if(!Array.isArray(t)||t.length===0)throw new U(K,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new U(K,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function cu(t,e){if(e.isInequality()){const r=io(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new U(K,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Zl(t);i!==null&&p_(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(K,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(K,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function p_(t,e,n){if(!n.isEqual(e))throw new U(K,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class g_ extends class{convertValue(e,n="none"){switch(un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw nt()}}convertObject(e,n){const r={};return As(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new co(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_r(e));default:return null}}convertTimestamp(e){const n=ln(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);Tt(nu(r));const s=new pr(r.get(1),r.get(3)),i=new xe(r.popFirst(5));return s.isEqual(n)||no(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function $a(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new U(ql,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Kl(t,qn))._query);const e=Zm(t.firestore),n=new g_(t.firestore);return Xm(e,t._query).then(r=>{const s=r.map(i=>new au(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new d_(t,s)})}(function(t){Hn=t})(`${Tr}_lite`),mt(new tt("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new ao(new _m(t.getProvider("auth-internal")),new wm(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new U(K,'"projectId" not provided in firebase.initializeApp.');return new pr(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),ze("firestore-lite","3.8.0",""),ze("firestore-lite","3.8.0","esm2017");var m_=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let lu;const Cs=t=>lu=t,uu=Symbol();function Ti(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var er;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(er||(er={}));function __(){const t=Lc(!0),e=t.run(()=>ar({}));let n=[],r=[];const s=Pn({install(i){Cs(s),s._a=i,i.provide(uu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!m_?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const du=()=>{};function Ua(t,e,n,r=du){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ld()&&Fd(s),s}function yn(t,...e){t.slice().forEach(n=>{n(...e)})}function Si(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ti(s)&&Ti(r)&&t.hasOwnProperty(n)&&!he(r)&&!Bt(r)?t[n]=Si(s,r):t[n]=r}return t}const y_=Symbol();function v_(t){return!Ti(t)||!t.hasOwnProperty(y_)}const{assign:Mt}=Object;function b_(t){return!!(he(t)&&t.effect)}function w_(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=pf(n.state.value[t]);return Mt(u,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=Pn($e(()=>{Cs(n);const m=n._s.get(t);return o[p].call(m,m)})),f),{}))}return c=fu(t,l,e,n,r,!0),c.$reset=function(){const f=s?s():{};this.$patch(p=>{Mt(p,f)})},c}function fu(t,e,n={},r,s,i){let o;const a=Mt({actions:{}},n),c={deep:!0};let l,u,f=Pn([]),p=Pn([]),m;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),ar({});let A;function F(z){let P;l=u=!1,typeof z=="function"?(z(r.state.value[t]),P={type:er.patchFunction,storeId:t,events:m}):(Si(r.state.value[t],z),P={type:er.patchObject,payload:z,storeId:t,events:m});const Y=A=Symbol();Wi().then(()=>{A===Y&&(l=!0)}),u=!0,yn(f,P,r.state.value[t])}const k=du;function $(){o.stop(),f=[],p=[],r._s.delete(t)}function N(z,P){return function(){Cs(r);const Y=Array.from(arguments),X=[],fe=[];function ye(ve){X.push(ve)}function Me(ve){fe.push(ve)}yn(p,{args:Y,name:z,store:W,after:ye,onError:Me});let Re;try{Re=P.apply(this&&this.$id===t?this:W,Y)}catch(ve){throw yn(fe,ve),ve}return Re instanceof Promise?Re.then(ve=>(yn(X,ve),ve)).catch(ve=>(yn(fe,ve),Promise.reject(ve))):(yn(X,Re),Re)}}const q={_p:r,$id:t,$onAction:Ua.bind(null,p),$patch:F,$reset:k,$subscribe(z,P={}){const Y=Ua(f,z,P.detached,()=>X()),X=o.run(()=>Gn(()=>r.state.value[t],fe=>{(P.flush==="sync"?u:l)&&z({storeId:t,type:er.direct,events:m},fe)},Mt({},c,P)));return Y},$dispose:$},W=Bn(q);r._s.set(t,W);const oe=r._e.run(()=>(o=Lc(),o.run(()=>e())));for(const z in oe){const P=oe[z];if(he(P)&&!b_(P)||Bt(P))i||(E&&v_(P)&&(he(P)?P.value=E[z]:Si(P,E[z])),r.state.value[t][z]=P);else if(typeof P=="function"){const Y=N(z,P);oe[z]=Y,a.actions[z]=P}}return Mt(W,oe),Mt(te(W),oe),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:z=>{F(P=>{Mt(P,z)})}}),r._p.forEach(z=>{Mt(W,o.run(()=>z({store:W,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(W.$state,E),l=!0,u=!0,W}function I_(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Sl();return a=a||l&&ft(uu,null),a&&Cs(a),a=lu,a._s.has(r)||(i?fu(r,e,s,a):w_(r,s,a)),a._s.get(r)}return o.$id=r,o}var E_="firebase",T_="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(E_,T_,"app");const hu="@firebase/installations",go="0.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=1e4,gu=`w:${go}`,mu="FIS_v2",S_="https://firebaseinstallations.googleapis.com/v1",A_=60*60*1e3,C_="installations",R_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},dn=new pn(C_,R_,O_);function _u(t){return t instanceof st&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu({projectId:t}){return`${S_}/projects/${t}/installations`}function vu(t){return{token:t.token,requestStatus:2,expiresIn:P_(t.expiresIn),creationTime:Date.now()}}async function bu(t,e){const r=(await e.json()).error;return dn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function wu({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function k_(t,{refreshToken:e}){const n=wu(t);return n.append("Authorization",N_(e)),n}async function Iu(t){const e=await t();return e.status>=500&&e.status<600?t():e}function P_(t){return Number(t.replace("s","000"))}function N_(t){return`${mu} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=yu(t),s=wu(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:mu,appId:t.appId,sdkVersion:gu},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Iu(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:vu(l.authToken)}}else throw await bu("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=/^[cdef][\w-]{21}$/,Ai="";function L_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=F_(t);return M_.test(n)?n:Ai}catch{return Ai}}function F_(t){return x_(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new Map;function Su(t,e){const n=Rs(t);Au(n,e),$_(n,e)}function Au(t,e){const n=Tu.get(t);if(n)for(const r of n)r(e)}function $_(t,e){const n=U_();n&&n.postMessage({key:t,fid:e}),V_()}let rn=null;function U_(){return!rn&&"BroadcastChannel"in self&&(rn=new BroadcastChannel("[Firebase] FID Change"),rn.onmessage=t=>{Au(t.data.key,t.data.fid)}),rn}function V_(){Tu.size===0&&rn&&(rn.close(),rn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="firebase-installations-database",B_=1,fn="firebase-installations-store";let Gs=null;function mo(){return Gs||(Gs=Ul(j_,B_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fn)}}})),Gs}async function is(t,e){const n=Rs(t),s=(await mo()).transaction(fn,"readwrite"),i=s.objectStore(fn),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Su(t,e.fid),e}async function Cu(t){const e=Rs(t),r=(await mo()).transaction(fn,"readwrite");await r.objectStore(fn).delete(e),await r.done}async function Os(t,e){const n=Rs(t),s=(await mo()).transaction(fn,"readwrite"),i=s.objectStore(fn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Su(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(t){let e;const n=await Os(t.appConfig,r=>{const s=H_(r),i=q_(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Ai?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function H_(t){const e=t||{fid:L_(),registrationStatus:0};return Ru(e)}function q_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(dn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=z_(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:K_(t)}:{installationEntry:e}}async function z_(t,e){try{const n=await D_(t,e);return is(t.appConfig,n)}catch(n){throw _u(n)&&n.customData.serverCode===409?await Cu(t.appConfig):await is(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function K_(t){let e=await Va(t.appConfig);for(;e.registrationStatus===1;)await Eu(100),e=await Va(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _o(t);return r||n}return e}function Va(t){return Os(t,e=>{if(!e)throw dn.create("installation-not-found");return Ru(e)})}function Ru(t){return W_(t)?{fid:t.fid,registrationStatus:0}:t}function W_(t){return t.registrationStatus===1&&t.registrationTime+pu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_({appConfig:t,heartbeatServiceProvider:e},n){const r=J_(t,n),s=k_(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:gu,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Iu(()=>fetch(r,a));if(c.ok){const l=await c.json();return vu(l)}else throw await bu("Generate Auth Token",c)}function J_(t,{fid:e}){return`${yu(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t,e=!1){let n;const r=await Os(t.appConfig,i=>{if(!Ou(i))throw dn.create("not-registered");const o=i.authToken;if(!e&&X_(o))return i;if(o.requestStatus===1)return n=Y_(t,e),i;{if(!navigator.onLine)throw dn.create("app-offline");const a=ey(i);return n=Q_(t,a),a}});return n?await n:r.authToken}async function Y_(t,e){let n=await ja(t.appConfig);for(;n.authToken.requestStatus===1;)await Eu(100),n=await ja(t.appConfig);const r=n.authToken;return r.requestStatus===0?yo(t,e):r}function ja(t){return Os(t,e=>{if(!Ou(e))throw dn.create("not-registered");const n=e.authToken;return ty(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Q_(t,e){try{const n=await G_(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await is(t.appConfig,r),n}catch(n){if(_u(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Cu(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await is(t.appConfig,r)}throw n}}function Ou(t){return t!==void 0&&t.registrationStatus===2}function X_(t){return t.requestStatus===2&&!Z_(t)}function Z_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+A_}function ey(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ty(t){return t.requestStatus===1&&t.requestTime+pu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(t){const e=t,{installationEntry:n,registrationPromise:r}=await _o(e);return r?r.catch(console.error):yo(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(t,e=!1){const n=t;return await sy(n),(await yo(n,e)).token}async function sy(t){const{registrationPromise:e}=await _o(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t){if(!t||!t.options)throw Js("App Configuration");if(!t.name)throw Js("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Js(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Js(t){return dn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="installations",oy="installations-internal",ay=t=>{const e=t.getProvider("app").getImmediate(),n=iy(e),r=gn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},cy=t=>{const e=t.getProvider("app").getImmediate(),n=gn(e,ku).getImmediate();return{getId:()=>ny(n),getToken:s=>ry(n,s)}};function ly(){mt(new tt(ku,ay,"PUBLIC")),mt(new tt(oy,cy,"PRIVATE"))}ly();ze(hu,go);ze(hu,go,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="analytics",uy="firebase_id",dy="origin",fy=60*1e3,hy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new Ts("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function py(t,e){const n=document.createElement("script");n.src=`${Pu}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function gy(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function my(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Nu(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Ve.error(a)}t("config",s,i)}async function _y(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Nu(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ve.error(i)}}function yy(t,e,n,r){async function s(i,o,a){try{i==="event"?await _y(t,e,n,o,a):i==="config"?await my(t,e,n,r,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Ve.error(c)}}return s}function vy(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=yy(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function by(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Pu)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ke=new pn("analytics","Analytics",wy);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=30,Ey=1e3;class Ty{constructor(e={},n=Ey){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Du=new Ty;function Sy(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ay(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Sy(r)},i=hy.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ke.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Cy(t,e=Du,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ke.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ke.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ky;return setTimeout(async()=>{a.abort()},n!==void 0?n:fy),xu({appId:r,apiKey:s,measurementId:i},o,a,e)}async function xu(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Du){var i;const{appId:o,measurementId:a}=t;try{await Ry(r,e)}catch(c){if(a)return Ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Ay(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Oy(l)){if(s.deleteThrottleMetadata(o),a)return Ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?ua(n,s.intervalMillis,Iy):ua(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,f),Ve.debug(`Calling attemptFetch again in ${u} millis`),xu(t,f,r,s)}}function Ry(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ke.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Oy(t){if(!(t instanceof st)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ky{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Py(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny(){if(Dl())try{await xl()}catch(t){return Ve.warn(Ke.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ve.warn(Ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Dy(t,e,n,r,s,i,o){var a;const c=Cy(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ve.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ve.error(m)),e.push(c);const l=Ny().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([c,l]);by(i)||py(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[dy]="firebase",p.update=!0,f!=null&&(p[uy]=f),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.app=e}_delete(){return delete tr[this.app.options.appId],Promise.resolve()}}let tr={},Ba=[];const Ha={};let Ys="dataLayer",My="gtag",qa,Mu,za=!1;function Ly(){const t=[];if(Nl()&&t.push("This is a browser extension environment."),Lp()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ke.create("invalid-analytics-context",{errorInfo:e});Ve.warn(n.message)}}function Fy(t,e,n){Ly();const r=t.options.appId;if(!r)throw Ke.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ke.create("no-api-key");if(tr[r]!=null)throw Ke.create("already-exists",{id:r});if(!za){gy(Ys);const{wrappedGtag:i,gtagCore:o}=vy(tr,Ba,Ha,Ys,My);Mu=i,qa=o,za=!0}return tr[r]=Dy(t,Ba,Ha,e,qa,Ys,n),new xy(t)}function $y(t=to()){t=We(t);const e=gn(t,os);return e.isInitialized()?e.getImmediate():Uy(t)}function Uy(t,e={}){const n=gn(t,os);if(n.isInitialized()){const s=n.getImmediate();if(fr(e,n.getOptions()))return s;throw Ke.create("already-initialized")}return n.initialize({options:e})}function Vy(t,e,n,r){t=We(t),Py(Mu,tr[t.app.options.appId],e,n,r).catch(s=>Ve.error(s))}const Ka="@firebase/analytics",Wa="0.9.0";function jy(){mt(new tt(os,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Fy(r,s,n)},"PUBLIC")),mt(new tt("analytics-internal",t,"PRIVATE")),ze(Ka,Wa),ze(Ka,Wa,"esm2017");function t(e){try{const n=e.getProvider(os).getImmediate();return{logEvent:(r,s,i)=>Vy(n,r,s,i)}}catch(n){throw Ke.create("interop-component-reg-failed",{reason:n})}}}jy();function vo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Lu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const By=Lu,Fu=new pn("auth","Firebase",Lu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Ts("@firebase/auth");function qr(t,...e){Ga.logLevel<=re.ERROR&&Ga.error(`Auth (${Tr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,...e){throw bo(t,...e)}function ht(t,...e){return bo(t,...e)}function Hy(t,e,n){const r=Object.assign(Object.assign({},By()),{[e]:n});return new pn("auth","Firebase",r).create(e,{appName:t.name})}function bo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fu.create(t,...e)}function V(t,e,...n){if(!t)throw bo(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qr(e),new Error(e)}function Ct(t,e){t||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map;function wt(t){Ct(t instanceof Function,"Expected a class definition");let e=Ja.get(t);return e?(Ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ja.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t,e){const n=gn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(fr(i,e??{}))return s;At(s,"already-initialized")}return n.initialize({options:e})}function zy(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ky(){return Ya()==="http:"||Ya()==="https:"}function Ya(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ky()||Nl()||"connection"in navigator)?navigator.onLine:!0}function Gy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ct(n>e,"Short delay should be less than long delay!"),this.isMobile=Dp()||xp()}get(){return Wy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t,e){Ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=new Ar(3e4,6e4);function Qy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ks(t,e,n,r,s={}){return Uu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Er(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),$u.fetch()(Vu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Uu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jy),e);try{const s=new Zy(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Fr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Hy(t,u,l);At(t,u)}}catch(s){if(s instanceof st)throw s;At(t,"network-request-failed")}}async function Xy(t,e,n,r,s={}){const i=await ks(t,e,n,r,s);return"mfaPendingCredential"in i&&At(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Vu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?wo(t.config,s):`${t.config.apiScheme}://${s}`}class Zy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),Yy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ht(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(t,e){return ks(t,"POST","/v1/accounts:delete",e)}async function tv(t,e){return ks(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nv(t,e=!1){const n=We(t),r=await n.getIdToken(e),s=Io(r);V(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:nr(Qs(s.auth_time)),issuedAtTime:nr(Qs(s.iat)),expirationTime:nr(Qs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qs(t){return Number(t)*1e3}function Io(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pl(n);return s?JSON.parse(s):(qr("Failed to decode base64 JWT payload"),null)}catch(s){return qr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rv(t){const e=Io(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof st&&sv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=nr(this.lastLoginAt),this.creationTime=nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t){var e;const n=t.auth,r=await t.getIdToken(),s=await vr(t,tv(n,{idToken:r}));V(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?cv(i.providerUserInfo):[],a=av(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ju(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function ov(t){const e=We(t);await as(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function av(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cv(t){return t.map(e=>{var{providerId:n}=e,r=vo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(t,e){const n=await Uu(t,{},async()=>{const r=Er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Vu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$u.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await lv(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new br;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(V(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(V(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=vo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ju(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vr(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nv(this,e)}reload(){return ov(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await as(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vr(this,ev(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,$=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:q,isAnonymous:W,providerData:oe,stsTokenManager:z}=n;V(N&&z,e,"internal-error");const P=br.fromJSON(this.name,z);V(typeof N=="string",e,"internal-error"),Pt(f,e.name),Pt(p,e.name),V(typeof q=="boolean",e,"internal-error"),V(typeof W=="boolean",e,"internal-error"),Pt(m,e.name),Pt(E,e.name),Pt(A,e.name),Pt(F,e.name),Pt(k,e.name),Pt($,e.name);const Y=new an({uid:N,auth:e,email:p,emailVerified:q,displayName:f,isAnonymous:W,photoURL:E,phoneNumber:m,tenantId:A,stsTokenManager:P,createdAt:k,lastLoginAt:$});return oe&&Array.isArray(oe)&&(Y.providerData=oe.map(X=>Object.assign({},X))),F&&(Y._redirectEventId=F),Y}static async _fromIdTokenResponse(e,n,r=!1){const s=new br;s.updateFromServerResponse(n);const i=new an({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await as(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bu.type="NONE";const Qa=Bu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t,e,n){return`firebase:${t}:${e}:${n}`}class Rn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=zr(this.userKey,s.apiKey,i),this.fullPersistenceKey=zr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rn(wt(Qa),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||wt(Qa);const o=zr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=an._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Rn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Rn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wu(e))return"Blackberry";if(Gu(e))return"Webos";if(Eo(e))return"Safari";if((e.includes("chrome/")||qu(e))&&!e.includes("edge/"))return"Chrome";if(Ku(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hu(t=Ce()){return/firefox\//i.test(t)}function Eo(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qu(t=Ce()){return/crios\//i.test(t)}function zu(t=Ce()){return/iemobile/i.test(t)}function Ku(t=Ce()){return/android/i.test(t)}function Wu(t=Ce()){return/blackberry/i.test(t)}function Gu(t=Ce()){return/webos/i.test(t)}function Ps(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uv(t=Ce()){var e;return Ps(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dv(){return Mp()&&document.documentMode===10}function Ju(t=Ce()){return Ps(t)||Ku(t)||Gu(t)||Wu(t)||/windows phone/i.test(t)||zu(t)}function fv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t,e=[]){let n;switch(t){case"Browser":n=Xa(Ce());break;case"Worker":n=`${Xa(Ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Za(this),this.idTokenSubscription=new Za(this),this.beforeStateQueue=new hv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Rn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await as(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?We(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(wt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wt(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Rn.create(this,[wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function To(t){return We(t)}class Za{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jp(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function gv(t,e,n){const r=To(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Qu(e),{host:o,port:a}=mv(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||_v()}function Qu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mv(t){const e=Qu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ec(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ec(o)}}}function ec(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _v(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(t,e){return Xy(t,"POST","/v1/accounts:signInWithIdp",Qy(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="http://localhost";class hn extends Xu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=vo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new hn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return On(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,On(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,On(e,n)}buildRequest(){const e={requestUri:yv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Er(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Zu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Cr{constructor(){super("facebook.com")}static credential(e){return hn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Cr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $t.credential(n,r)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Cr{constructor(){super("github.com")}static credential(e){return hn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Cr{constructor(){super("twitter.com")}static credential(e,n){return hn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await an._fromIdTokenResponse(e,r,s),o=tc(r);return new Ln({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=tc(r);return new Ln({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function tc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends st{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new cs(e,n,r,s)}}function ed(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(t,i,e,r):i})}async function vv(t,e,n=!1){const r=await vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ln._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await vr(t,ed(r,s,e,t),n);V(i.idToken,r,"internal-error");const o=Io(i.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(t.uid===a,r,"user-mismatch"),Ln._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&At(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(t,e,n=!1){const r="signIn",s=await ed(t,r,e),i=await Ln._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Iv(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function Ev(t,e,n){return We(t).beforeAuthStateChanged(e,n)}const ls="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ls,"1"),this.storage.removeItem(ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(){const t=Ce();return Eo(t)||Ps(t)}const Sv=1e3,Av=10;class nd extends td{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tv()&&fv(),this.fallbackToPolling=Ju(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);dv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Av):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Sv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nd.type="LOCAL";const Cv=nd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends td{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rd.type="SESSION";const sd=rd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ns(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Rv(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ns.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=So("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function kv(t){pt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function Pv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Dv(){return id()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="firebaseLocalStorageDb",xv=1,us="firebaseLocalStorage",ad="fbase_key";class Rr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ds(t,e){return t.transaction([us],e?"readwrite":"readonly").objectStore(us)}function Mv(){const t=indexedDB.deleteDatabase(od);return new Rr(t).toPromise()}function Ri(){const t=indexedDB.open(od,xv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(us,{keyPath:ad})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(us)?e(r):(r.close(),await Mv(),e(await Ri()))})})}async function nc(t,e,n){const r=Ds(t,!0).put({[ad]:e,value:n});return new Rr(r).toPromise()}async function Lv(t,e){const n=Ds(t,!1).get(e),r=await new Rr(n).toPromise();return r===void 0?null:r.value}function rc(t,e){const n=Ds(t,!0).delete(e);return new Rr(n).toPromise()}const Fv=800,$v=3;class cd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ri(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$v)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return id()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ns._getInstance(Dv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Pv(),!this.activeServiceWorker)return;this.sender=new Ov(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ri();return await nc(e,ls,"1"),await rc(e,ls),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Lv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ds(s,!1).getAll();return new Rr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cd.type="LOCAL";const Uv=cd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ht("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Vv().appendChild(r)})}function Bv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ar(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t,e){return e?wt(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Xu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return On(e,this._buildIdpRequest())}_linkToIdToken(e,n){return On(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return On(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qv(t){return wv(t.auth,new Ao(t),t.bypassAuthState)}function zv(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),bv(n,new Ao(t),t.bypassAuthState)}async function Kv(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),vv(n,new Ao(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qv;case"linkViaPopup":case"linkViaRedirect":return Kv;case"reauthViaPopup":case"reauthViaRedirect":return zv;default:At(this.auth,"internal-error")}}resolve(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=new Ar(2e3,1e4);class En extends ld{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const e=So();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Wv.get())};e()}}En.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="pendingRedirect",Kr=new Map;class Jv extends ld{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Kr.get(this.auth._key());if(!e){try{const r=await Yv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Kr.set(this.auth._key(),e)}return this.bypassAuthState||Kr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yv(t,e){const n=Zv(e),r=Xv(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Qv(t,e){Kr.set(t._key(),e)}function Xv(t){return wt(t._redirectPersistence)}function Zv(t){return zr(Gv,t.config.apiKey,t.name)}async function eb(t,e,n=!1){const r=To(t),s=Hv(r,e),o=await new Jv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=10*60*1e3;class nb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ud(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ht(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tb&&this.cachedEventUids.clear(),this.cachedEventUids.has(sc(e))}saveEventToCache(e){this.cachedEventUids.add(sc(e)),this.lastProcessedEventTime=Date.now()}}function sc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ud({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ud(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(t,e={}){return ks(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ob=/^https?/;async function ab(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sb(t);for(const n of e)try{if(cb(n))return}catch{}At(t,"unauthorized-domain")}function cb(t){const e=Ci(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ob.test(n))return!1;if(ib.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new Ar(3e4,6e4);function ic(){const t=pt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ub(t){return new Promise((e,n)=>{var r,s,i;function o(){ic(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ic(),n(ht(t,"network-request-failed"))},timeout:lb.get()})}if(!((s=(r=pt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pt().gapi)===null||i===void 0)&&i.load)o();else{const a=Bv("iframefcb");return pt()[a]=()=>{gapi.load?o():n(ht(t,"network-request-failed"))},jv(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function db(t){return Wr=Wr||ub(t),Wr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=new Ar(5e3,15e3),hb="__/auth/iframe",pb="emulator/auth/iframe",gb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _b(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wo(e,pb):`https://${t.config.authDomain}/${hb}`,r={apiKey:e.apiKey,appName:t.name,v:Tr},s=mb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Er(r).slice(1)}`}async function yb(t){const e=await db(t),n=pt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:_b(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ht(t,"network-request-failed"),a=pt().setTimeout(()=>{i(o)},fb.get());function c(){pt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bb=500,wb=600,Ib="_blank",Eb="http://localhost";class oc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tb(t,e,n,r=bb,s=wb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vb),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ce().toLowerCase();n&&(a=qu(l)?Ib:n),Hu(l)&&(e=e||Eb,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,E])=>`${p}${m}=${E},`,"");if(uv(l)&&a!=="_self")return Sb(e||"",a),new oc(null);const f=window.open(e||"",a,u);V(f,t,"popup-blocked");try{f.focus()}catch{}return new oc(f)}function Sb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="__/auth/handler",Cb="emulator/auth/handler";function ac(t,e,n,r,s,i){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Tr,eventId:s};if(e instanceof Zu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Cr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Rb(t)}?${Er(a).slice(1)}`}function Rb({config:t}){return t.emulator?wo(t,Cb):`https://${t.authDomain}/${Ab}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="webStorageSupport";class Ob{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sd,this._completeRedirectFn=eb,this._overrideRedirectResult=Qv}async _openPopup(e,n,r,s){var i;Ct((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ac(e,n,r,Ci(),s);return Tb(e,o,So())}async _openRedirect(e,n,r,s){return await this._originValidation(e),kv(ac(e,n,r,Ci(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ct(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yb(e),r=new nb(e);return n.register("authEvent",s=>(V(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xs,{type:Xs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xs];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ab(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ju()||Eo()||Ps()}}const kb=Ob;var cc="@firebase/auth",lc="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Db(t){mt(new tt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{V(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yu(t)},u=new pv(a,c,l);return zy(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mt(new tt("auth-internal",e=>{const n=To(e.getProvider("auth").getImmediate());return(r=>new Pb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(cc,lc,Nb(t)),ze(cc,lc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=5*60,Mb=Ll("authIdTokenMaxAge")||xb;let uc=null;const Lb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mb)return;const s=n==null?void 0:n.token;uc!==s&&(uc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Fb(t=to()){const e=gn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qy(t,{popupRedirectResolver:kb,persistence:[Uv,Cv,sd]}),r=Ll("authTokenSyncURL");if(r){const i=Lb(r);Ev(n,i,()=>i(n.currentUser)),Iv(n,o=>i(o))}const s=Ml("auth");return s&&gv(n,`http://${s}`),n}Db("Browser");const $b={apiKey:"AIzaSyCTd9riOM7Lbji1mBvHDQuydmNMrWFSj3g",authDomain:"precios-envios-odm.firebaseapp.com",databaseURL:"https://precios-envios-odm-default-rtdb.firebaseio.com",projectId:"precios-envios-odm",storageBucket:"precios-envios-odm.appspot.com",messagingSenderId:"802208494147",appId:"1:802208494147:web:fee055c13df4aef4045af6",measurementId:"G-LTMJMJLXRQ"},Ub=Vl($b);Fb();const dc=e_();$y(Ub);const Vb=I_("database",{state:()=>({documents:[]}),actions:{async getOrigenes(){try{const t=Ma(xa(dc,"origenes","Aguascalientes","Destinos"));(await $a(t)).forEach(n=>{this.documents.push({id:n.id,data:n.data()}),console.log(n.id,"=>",n.data())}),console.log("SEPARACIÓN")}catch(t){console.log(t)}},async getDestinos(){try{const t=Ma(xa(dc,"origenes","Pachuca","Destinos"));(await $a(t)).forEach(n=>{this.documents.push({id:n.id,data:n.data()})}),console.log("SEPARACIÓN")}catch(t){console.log(t)}}}}),jb="/assets/dibujoform-03cb5359.png";const Bb={},Hb=S("div",{class:"tarifas"},[S("h1",null,"Tarifas preferenciales"),S("h2",null,"Para impulsar tu negocio")],-1),qb=S("div",{class:"formbold-main-wrapper"},[S("div",{class:"formbold-form-wrapper"},[S("form",{action:"https://formbold.com/s/FORM_ID",method:"POST"},[S("div",{class:"formbold-mb-5"},[S("label",{for:"name",class:"formbold-form-label"}," Nombre completo"),S("input",{type:"text",name:"name",id:"name",placeholder:"Escribe tu nombre",class:"formbold-form-input",required:""})]),S("div",{class:"formbold-mb-5"},[S("label",{for:"name",class:"formbold-form-label"}," Teléfono"),S("input",{name:"tel",id:"tel",placeholder:"Escribe tu número de teléfono",class:"formbold-form-input",required:""})]),S("div",{class:"formbold-mb-5"},[S("label",{for:"name",class:"formbold-form-label"}," Ciudad"),S("input",{type:"text",name:"city",id:"city",placeholder:"Escribe tu ciudad",class:"formbold-form-input",required:""})]),S("div",{class:"formbold-mb-5"},[S("label",{for:"name",class:"formbold-form-label"}," Nombre de tu empresa"),S("input",{type:"text",name:"name",id:"name",placeholder:"Escribe el nombre de tu empresa",class:"formbold-form-input",required:""})]),S("div",{class:"formbold-mb-5"},[S("label",{for:"email",class:"formbold-form-label"}," Correo electrónico "),S("input",{type:"email",name:"email",id:"email",placeholder:"Escribe tu correo",class:"formbold-form-input"})]),S("div",{class:"text-left checkbox-wrapper"},[S("div",{class:"text-left checkbox-wrapper"},[S("input",{type:"checkbox",id:"terms",class:"checkbox"}),S("label",{class:"checkbox-label",for:"terms"},"De 20 a 50 envíos mensuales")]),S("div",{class:"text-left checkbox-wrapper"},[S("input",{type:"checkbox",id:"terms",class:"checkbox"}),S("label",{class:"checkbox-label",for:"terms"},"Más de 50 envíos mensuales")])]),S("div",null,[S("button",{class:"formbold-btn"},"Solicitar tarifa preferente")])]),S("div",{class:"imagen1"},[S("img",{src:jb,alt:""})]),S("div",{class:"textos"},[S("h3",null,"Av. Central 56, Nueva Industrial Vallejo, Gustavo A. Madero, 07700, Ciudad de México."),S("h3",null,"+52-55-51-41-43-00"),S("h3",null,"desarrollowebodm@gmail.com")])])],-1);function zb(t,e,n,r,s,i){return ut(),dt(De,null,[Hb,qb],64)}const Kb=Ir(Bb,[["render",zb]]);const Wb={class:"cobertura"},Gb={class:"titulo"},Jb=S("h1",null,"COBERTURA DE ENVÍOS",-1),Yb={class:"main-section"},Qb={class:"caja"},Xb=S("option",{value:"selected"},"¿Dónde dejar tus paquetes?",-1),Zb=S("div",{class:"card"},[S("h2",null,"Dirección"),S("h3",null,"De: ")],-1),ew={class:"caja"},tw=S("option",{value:"selected"},"¿Dónde recoger tus paquetes?",-1),nw=S("div",{class:"card"},[S("h2",null,"Dirección"),S("h3",null,"De: ")],-1),rw=Es('<div class="card"><h2>Sobres</h2><h3>Hasta 25 hojas</h3><p>$</p></div><div class="card"><h2>Paquetes</h2><h3>De 0 a 1 Kg</h3><p>$</p></div><div class="card"><h2>Cajas</h2><h3>De 1 a 10 Kg</h3><p>$</p></div><div class="card"><h2>Cajas</h2><h3>De 11 a 20 Kg</h3><p>$</p></div><div class="card"><h2>Maletas</h2><h3>De 21 a 30 Kg</h3><p>$</p></div><div class="h-e-a-d-w-e-b-rectangle"><span class="h-e-a-d-w-e-b-text02"><span><span> ***VALOR DE REFERENCIA SUJETO A CAMBIOS*** </span></span></span></div>',6),sw={__name:"App",setup(t){const e=Vb(),n=ar([]);Qr(async()=>{await e.getOrigenes(),n.value=e.$state.documents});const r=ar([]);return Qr(async()=>{await e.getDestinos(),r.value=e.$state.documents}),(s,i)=>{const o=Kf("router-view");return ut(),dt(De,null,[we(o),we(rp),we(dp),S("div",Wb,[S("div",Gb,[Jb,S("div",null,[S("section",Yb,[S("form",null,[S("div",Qb,[S("select",null,[Xb,(ut(!0),dt(De,null,zo(Ht(n),a=>(ut(),dt("option",{key:a._id},No(a._id),1))),128))])]),Zb,S("div",ew,[S("select",null,[tw,(ut(!0),dt(De,null,zo(Ht(n),a=>(ut(),dt("option",{key:a._id},No(a.data._id),1))),128))])]),nw]),rw])])])]),we(bp),we(Kb),we(kp)],64)}}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const wn=typeof window<"u";function iw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function Zs(t,e){const n={};for(const r in e){const s=e[r];n[r]=rt(s)?s.map(t):t(s)}return n}const rr=()=>{},rt=Array.isArray,ow=/\/$/,aw=t=>t.replace(ow,"");function ei(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=dw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function cw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function lw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fn(e.matched[r],n.matched[s])&&dd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uw(t[n],e[n]))return!1;return!0}function uw(t,e){return rt(t)?hc(t,e):rt(e)?hc(e,t):t===e}function hc(t,e){return rt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function dw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var wr;(function(t){t.pop="pop",t.push="push"})(wr||(wr={}));var sr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(sr||(sr={}));function fw(t){if(!t)if(wn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aw(t)}const hw=/^[^#]+#/;function pw(t,e){return t.replace(hw,"#")+e}function gw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const xs=()=>({left:window.pageXOffset,top:window.pageYOffset});function mw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=gw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function pc(t,e){return(history.state?history.state.position-e:-1)+t}const Oi=new Map;function _w(t,e){Oi.set(t,e)}function yw(t){const e=Oi.get(t);return Oi.delete(t),e}let vw=()=>location.protocol+"//"+location.host;function fd(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),fc(c,"")}return fc(n,t)+r+s}function bw(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=fd(t,location),E=n.value,A=e.value;let F=0;if(p){if(n.value=m,e.value=p,o&&o===E){o=null;return}F=A?p.position-A.position:0}else r(m);s.forEach(k=>{k(n.value,E,{delta:F,type:wr.pop,direction:F?F>0?sr.forward:sr.back:sr.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(ne({},p.state,{scroll:xs()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function gc(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?xs():null}}function ww(t){const{history:e,location:n}=window,r={value:fd(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:vw()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=ne({},e.state,gc(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ne({},s.value,e.state,{forward:c,scroll:xs()});i(u.current,u,!0);const f=ne({},gc(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Iw(t){t=fw(t);const e=ww(t),n=bw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:t,go:r,createHref:pw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ew(t){return typeof t=="string"||t&&typeof t=="object"}function hd(t){return typeof t=="string"||typeof t=="symbol"}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pd=Symbol("");var mc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mc||(mc={}));function $n(t,e){return ne(new Error,{type:t,[pd]:!0},e)}function _t(t,e){return t instanceof Error&&pd in t&&(e==null||!!(t.type&e))}const _c="[^/]+?",Tw={sensitive:!1,strict:!1,start:!0,end:!0},Sw=/[.+*?^${}()[\]/\\]/g;function Aw(t,e){const n=ne({},Tw,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(Sw,"\\$&"),m+=40;else if(p.type===1){const{value:E,repeatable:A,optional:F,regexp:k}=p;i.push({name:E,repeatable:A,optional:F});const $=k||_c;if($!==_c){m+=10;try{new RegExp(`(${$})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${E}" (${$}): `+q.message)}}let N=A?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;f||(N=F&&l.length<2?`(?:/${N})`:"/"+N),F&&(N+="?"),s+=N,m+=20,F&&(m+=-8),A&&(m+=-20),$===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",E=i[p-1];f[E.name]=m&&E.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:E,repeatable:A,optional:F}=m,k=E in l?l[E]:"";if(rt(k)&&!A)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const $=rt(k)?k.join("/"):k;if(!$)if(F)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);u+=$}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Cw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Rw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Cw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(yc(r))return 1;if(yc(s))return-1}return s.length-r.length}function yc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ow={type:0,value:""},kw=/[a-zA-Z0-9_]/;function Pw(t){if(!t)return[[]];if(t==="/")return[[Ow]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:kw.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Nw(t,e,n){const r=Aw(Pw(t.path),n),s=ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Dw(t,e){const n=[],r=new Map;e=wc({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,p){const m=!p,E=xw(u);E.aliasOf=p&&p.record;const A=wc(e,u),F=[E];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const q of N)F.push(ne({},E,{components:p?p.record.components:E.components,path:q,aliasOf:p?p.record:E}))}let k,$;for(const N of F){const{path:q}=N;if(f&&q[0]!=="/"){const W=f.record.path,oe=W[W.length-1]==="/"?"":"/";N.path=f.record.path+(q&&oe+q)}if(k=Nw(N,f,A),p?p.alias.push(k):($=$||k,$!==k&&$.alias.push(k),m&&u.name&&!bc(k)&&o(u.name)),E.children){const W=E.children;for(let oe=0;oe<W.length;oe++)i(W[oe],k,p&&p.children[oe])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return $?()=>{o($)}:rr}function o(u){if(hd(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&Rw(u,n[f])>=0&&(u.record.path!==n[f].record.path||!gd(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!bc(u)&&r.set(u.record.name,u)}function l(u,f){let p,m={},E,A;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw $n(1,{location:u});A=p.record.name,m=ne(vc(f.params,p.keys.filter($=>!$.optional).map($=>$.name)),u.params&&vc(u.params,p.keys.map($=>$.name))),E=p.stringify(m)}else if("path"in u)E=u.path,p=n.find($=>$.re.test(E)),p&&(m=p.parse(E),A=p.record.name);else{if(p=f.name?r.get(f.name):n.find($=>$.re.test(f.path)),!p)throw $n(1,{location:u,currentLocation:f});A=p.record.name,m=ne({},f.params,u.params),E=p.stringify(m)}const F=[];let k=p;for(;k;)F.unshift(k.record),k=k.parent;return{name:A,path:E,params:m,matched:F,meta:Lw(F)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function vc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function xw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Mw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Mw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function bc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Lw(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function wc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function gd(t,e){return e.children.some(n=>n===t||gd(t,n))}const md=/#/g,Fw=/&/g,$w=/\//g,Uw=/=/g,Vw=/\?/g,_d=/\+/g,jw=/%5B/g,Bw=/%5D/g,yd=/%5E/g,Hw=/%60/g,vd=/%7B/g,qw=/%7C/g,bd=/%7D/g,zw=/%20/g;function Co(t){return encodeURI(""+t).replace(qw,"|").replace(jw,"[").replace(Bw,"]")}function Kw(t){return Co(t).replace(vd,"{").replace(bd,"}").replace(yd,"^")}function ki(t){return Co(t).replace(_d,"%2B").replace(zw,"+").replace(md,"%23").replace(Fw,"%26").replace(Hw,"`").replace(vd,"{").replace(bd,"}").replace(yd,"^")}function Ww(t){return ki(t).replace(Uw,"%3D")}function Gw(t){return Co(t).replace(md,"%23").replace(Vw,"%3F")}function Jw(t){return t==null?"":Gw(t).replace($w,"%2F")}function ds(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Yw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(_d," "),o=i.indexOf("="),a=ds(o<0?i:i.slice(0,o)),c=o<0?null:ds(i.slice(o+1));if(a in e){let l=e[a];rt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ic(t){let e="";for(let n in t){const r=t[n];if(n=Ww(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(rt(r)?r.map(i=>i&&ki(i)):[r&&ki(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Qw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=rt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Xw=Symbol(""),Ec=Symbol(""),Ro=Symbol(""),wd=Symbol(""),Pi=Symbol("");function Kn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Lt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a($n(4,{from:n,to:e})):f instanceof Error?a(f):Ew(f)?a($n(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function ti(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Zw(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Lt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=iw(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&Lt(p,n,r,i,o)()}))}}return s}function Zw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Tc(t){const e=ft(Ro),n=ft(wd),r=$e(()=>e.resolve(Ht(t.to))),s=$e(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Fn.bind(null,u));if(p>-1)return p;const m=Sc(c[l-2]);return l>1&&Sc(u)===m&&f[f.length-1].path!==m?f.findIndex(Fn.bind(null,c[l-2])):p}),i=$e(()=>s.value>-1&&rI(n.params,r.value.params)),o=$e(()=>s.value>-1&&s.value===n.matched.length-1&&dd(n.params,r.value.params));function a(c={}){return nI(c)?e[Ht(t.replace)?"replace":"push"](Ht(t.to)).catch(rr):Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const eI=ul({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tc,setup(t,{slots:e}){const n=Bn(Tc(t)),{options:r}=ft(Ro),s=$e(()=>({[Ac(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ac(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Rl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),tI=eI;function nI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!rt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Sc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ac=(t,e,n)=>t??e??n,sI=ul({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ft(Pi),s=$e(()=>t.route||r.value),i=ft(Ec,0),o=$e(()=>{let l=Ht(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=$e(()=>s.value.matched[o.value]);Ur(Ec,$e(()=>o.value+1)),Ur(Xw,a),Ur(Pi,s);const c=ar();return Gn(()=>[c.value,a.value,t.name],([l,u,f],[p,m,E])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Fn(u,m)||!p)&&(u.enterCallbacks[f]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return Cc(n.default,{Component:p,route:l});const m=f.props[u],E=m?m===!0?l.params:typeof m=="function"?m(l):m:null,F=Rl(p,ne({},E,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Cc(n.default,{Component:F,route:l})||F}}});function Cc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const iI=sI;function oI(t){const e=Dw(t.routes,t),n=t.parseQuery||Yw,r=t.stringifyQuery||Ic,s=t.history,i=Kn(),o=Kn(),a=Kn(),c=df(Nt);let l=Nt;wn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zs.bind(null,y=>""+y),f=Zs.bind(null,Jw),p=Zs.bind(null,ds);function m(y,O){let C,x;return hd(y)?(C=e.getRecordMatcher(y),x=O):x=y,e.addRoute(x,C)}function E(y){const O=e.getRecordMatcher(y);O&&e.removeRoute(O)}function A(){return e.getRoutes().map(y=>y.record)}function F(y){return!!e.getRecordMatcher(y)}function k(y,O){if(O=ne({},O||c.value),typeof y=="string"){const d=ei(n,y,O.path),h=e.resolve({path:d.path},O),g=s.createHref(d.fullPath);return ne(d,h,{params:p(h.params),hash:ds(d.hash),redirectedFrom:void 0,href:g})}let C;if("path"in y)C=ne({},y,{path:ei(n,y.path,O.path).path});else{const d=ne({},y.params);for(const h in d)d[h]==null&&delete d[h];C=ne({},y,{params:f(y.params)}),O.params=f(O.params)}const x=e.resolve(C,O),Z=y.hash||"";x.params=u(p(x.params));const de=cw(r,ne({},y,{hash:Kw(Z),path:x.path})),G=s.createHref(de);return ne({fullPath:de,hash:Z,query:r===Ic?Qw(y.query):y.query||{}},x,{redirectedFrom:void 0,href:G})}function $(y){return typeof y=="string"?ei(n,y,c.value.path):ne({},y)}function N(y,O){if(l!==y)return $n(8,{from:O,to:y})}function q(y){return z(y)}function W(y){return q(ne($(y),{replace:!0}))}function oe(y){const O=y.matched[y.matched.length-1];if(O&&O.redirect){const{redirect:C}=O;let x=typeof C=="function"?C(y):C;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=$(x):{path:x},x.params={}),ne({query:y.query,hash:y.hash,params:"path"in x?{}:y.params},x)}}function z(y,O){const C=l=k(y),x=c.value,Z=y.state,de=y.force,G=y.replace===!0,d=oe(C);if(d)return z(ne($(d),{state:typeof d=="object"?ne({},Z,d.state):Z,force:de,replace:G}),O||C);const h=C;h.redirectedFrom=O;let g;return!de&&lw(r,x,C)&&(g=$n(16,{to:h,from:x}),Jt(x,x,!0,!1)),(g?Promise.resolve(g):Y(h,x)).catch(_=>_t(_)?_t(_,2)?_:Ge(_):ae(_,h,x)).then(_=>{if(_){if(_t(_,2))return z(ne({replace:G},$(_.to),{state:typeof _.to=="object"?ne({},Z,_.to.state):Z,force:de}),O||h)}else _=fe(h,x,!0,G,Z);return X(h,x,_),_})}function P(y,O){const C=N(y,O);return C?Promise.reject(C):Promise.resolve()}function Y(y,O){let C;const[x,Z,de]=aI(y,O);C=ti(x.reverse(),"beforeRouteLeave",y,O);for(const d of x)d.leaveGuards.forEach(h=>{C.push(Lt(h,y,O))});const G=P.bind(null,y,O);return C.push(G),vn(C).then(()=>{C=[];for(const d of i.list())C.push(Lt(d,y,O));return C.push(G),vn(C)}).then(()=>{C=ti(Z,"beforeRouteUpdate",y,O);for(const d of Z)d.updateGuards.forEach(h=>{C.push(Lt(h,y,O))});return C.push(G),vn(C)}).then(()=>{C=[];for(const d of y.matched)if(d.beforeEnter&&!O.matched.includes(d))if(rt(d.beforeEnter))for(const h of d.beforeEnter)C.push(Lt(h,y,O));else C.push(Lt(d.beforeEnter,y,O));return C.push(G),vn(C)}).then(()=>(y.matched.forEach(d=>d.enterCallbacks={}),C=ti(de,"beforeRouteEnter",y,O),C.push(G),vn(C))).then(()=>{C=[];for(const d of o.list())C.push(Lt(d,y,O));return C.push(G),vn(C)}).catch(d=>_t(d,8)?d:Promise.reject(d))}function X(y,O,C){for(const x of a.list())x(y,O,C)}function fe(y,O,C,x,Z){const de=N(y,O);if(de)return de;const G=O===Nt,d=wn?history.state:{};C&&(x||G?s.replace(y.fullPath,ne({scroll:G&&d&&d.scroll},Z)):s.push(y.fullPath,Z)),c.value=y,Jt(y,O,C,G),Ge()}let ye;function Me(){ye||(ye=s.listen((y,O,C)=>{if(!Or.listening)return;const x=k(y),Z=oe(x);if(Z){z(ne(Z,{replace:!0}),x).catch(rr);return}l=x;const de=c.value;wn&&_w(pc(de.fullPath,C.delta),xs()),Y(x,de).catch(G=>_t(G,12)?G:_t(G,2)?(z(G.to,x).then(d=>{_t(d,20)&&!C.delta&&C.type===wr.pop&&s.go(-1,!1)}).catch(rr),Promise.reject()):(C.delta&&s.go(-C.delta,!1),ae(G,x,de))).then(G=>{G=G||fe(x,de,!1),G&&(C.delta&&!_t(G,8)?s.go(-C.delta,!1):C.type===wr.pop&&_t(G,20)&&s.go(-1,!1)),X(x,de,G)}).catch(rr)}))}let Re=Kn(),ve=Kn(),pe;function ae(y,O,C){Ge(y);const x=ve.list();return x.length?x.forEach(Z=>Z(y,O,C)):console.error(y),Promise.reject(y)}function se(){return pe&&c.value!==Nt?Promise.resolve():new Promise((y,O)=>{Re.add([y,O])})}function Ge(y){return pe||(pe=!y,Me(),Re.list().forEach(([O,C])=>y?C(y):O()),Re.reset()),y}function Jt(y,O,C,x){const{scrollBehavior:Z}=t;if(!wn||!Z)return Promise.resolve();const de=!C&&yw(pc(y.fullPath,0))||(x||!C)&&history.state&&history.state.scroll||null;return Wi().then(()=>Z(y,O,de)).then(G=>G&&mw(G)).catch(G=>ae(G,y,O))}const Je=y=>s.go(y);let ke;const mn=new Set,Or={currentRoute:c,listening:!0,addRoute:m,removeRoute:E,hasRoute:F,getRoutes:A,resolve:k,options:t,push:q,replace:W,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ve.add,isReady:se,install(y){const O=this;y.component("RouterLink",tI),y.component("RouterView",iI),y.config.globalProperties.$router=O,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ht(c)}),wn&&!ke&&c.value===Nt&&(ke=!0,q(s.location).catch(Z=>{}));const C={};for(const Z in Nt)C[Z]=$e(()=>c.value[Z]);y.provide(Ro,O),y.provide(wd,Bn(C)),y.provide(Pi,c);const x=y.unmount;mn.add(y),y.unmount=function(){mn.delete(y),mn.size<1&&(l=Nt,ye&&ye(),ye=null,c.value=Nt,ke=!1,pe=!1),x()}}};return Or}function vn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function aI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Fn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Fn(l,c))||s.push(c))}return[n,r,s]}const cI=[{path:"/formulario",name:"Formulario"}],lI=oI({routes:cI,history:Iw()});Jh(sw).use(lI).use(__()).mount("#app");
