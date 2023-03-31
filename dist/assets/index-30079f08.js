(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ki(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Wi(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=we(r)?$d(r):Wi(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(we(t))return t;if(le(t))return t}}const Md=/;(?![^(]*\))/g,Ld=/:([^]+)/,Fd=/\/\*.*?\*\//gs;function $d(t){const e={};return t.replace(Fd,"").split(Md).forEach(n=>{if(n){const r=n.split(Ld);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ws(t){let e="";if(we(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const r=ws(t[n]);r&&(e+=r+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ud="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vd=Ki(Ud);function Bc(t){return!!t||t===""}function jd(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Is(t[r],e[r]);return n}function Is(t,e){if(t===e)return!0;let n=Ho(t),r=Ho(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=dr(t),r=dr(e),n||r)return t===e;if(n=U(t),r=U(e),n||r)return n&&r?jd(t,e):!1;if(n=le(t),r=le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Is(t[o],e[o]))return!1}}return String(t)===String(e)}function Bd(t,e){return t.findIndex(n=>Is(n,e))}const ft=t=>we(t)?t:t==null?"":U(t)||le(t)&&(t.toString===zc||!H(t.toString))?JSON.stringify(t,Hc,2):String(t),Hc=(t,e)=>e&&e.__v_isRef?Hc(t,e.value):kn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:xs(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!U(e)&&!Kc(e)?String(e):e,de={},Cn=[],rt=()=>{},Hd=()=>!1,qd=/^on[^a-z]/,Es=t=>qd.test(t),Gi=t=>t.startsWith("onUpdate:"),ke=Object.assign,Ji=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zd=Object.prototype.hasOwnProperty,ee=(t,e)=>zd.call(t,e),U=Array.isArray,kn=t=>kr(t)==="[object Map]",xs=t=>kr(t)==="[object Set]",Ho=t=>kr(t)==="[object Date]",H=t=>typeof t=="function",we=t=>typeof t=="string",dr=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",qc=t=>le(t)&&H(t.then)&&H(t.catch),zc=Object.prototype.toString,kr=t=>zc.call(t),Kd=t=>kr(t).slice(8,-1),Kc=t=>kr(t)==="[object Object]",Yi=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zr=Ki(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ts=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wd=/-(\w)/g,_t=Ts(t=>t.replace(Wd,(e,n)=>n?n.toUpperCase():"")),Gd=/\B([A-Z])/g,Hn=Ts(t=>t.replace(Gd,"-$1").toLowerCase()),Ss=Ts(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gs=Ts(t=>t?`on${Ss(t)}`:""),fr=(t,e)=>!Object.is(t,e),Kr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ns=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qo;const Jd=()=>qo||(qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let je;class Wc{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}run(e){if(this.active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function Gc(t){return new Wc(t)}function Yd(t,e=je){e&&e.active&&e.effects.push(t)}function Qd(){return je}function Xd(t){je&&je.cleanups.push(t)}const Qi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Jc=t=>(t.w&Jt)>0,Yc=t=>(t.n&Jt)>0,Zd=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jt},ef=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Jc(s)&&!Yc(s)?s.delete(t):e[n++]=s,s.w&=~Jt,s.n&=~Jt}e.length=n}},gi=new WeakMap;let Xn=0,Jt=1;const mi=30;let et;const ln=Symbol(""),yi=Symbol("");class Xi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Yd(this,r)}run(){if(!this.active)return this.fn();let e=et,n=qt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=et,et=this,qt=!0,Jt=1<<++Xn,Xn<=mi?Zd(this):zo(this),this.fn()}finally{Xn<=mi&&ef(this),Jt=1<<--Xn,et=this.parent,qt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){et===this?this.deferStop=!0:this.active&&(zo(this),this.onStop&&this.onStop(),this.active=!1)}}function zo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let qt=!0;const Qc=[];function qn(){Qc.push(qt),qt=!1}function zn(){const t=Qc.pop();qt=t===void 0?!0:t}function ze(t,e,n){if(qt&&et){let r=gi.get(t);r||gi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Qi()),Xc(s)}}function Xc(t,e){let n=!1;Xn<=mi?Yc(t)||(t.n|=Jt,n=!Jc(t)):n=!t.has(et),n&&(t.add(et),et.deps.push(t))}function St(t,e,n,r,s,i){const o=gi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t)){const c=hr(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?Yi(n)&&a.push(o.get("length")):(a.push(o.get(ln)),kn(t)&&a.push(o.get(yi)));break;case"delete":U(t)||(a.push(o.get(ln)),kn(t)&&a.push(o.get(yi)));break;case"set":kn(t)&&a.push(o.get(ln));break}if(a.length===1)a[0]&&_i(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);_i(Qi(c))}}function _i(t,e){const n=U(t)?t:[...t];for(const r of n)r.computed&&Ko(r);for(const r of n)r.computed||Ko(r)}function Ko(t,e){(t!==et||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const tf=Ki("__proto__,__v_isRef,__isVue"),Zc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dr)),nf=Zi(),rf=Zi(!1,!0),sf=Zi(!0),Wo=of();function of(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=te(this);for(let i=0,o=this.length;i<o;i++)ze(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qn();const r=te(this)[e].apply(this,n);return zn(),r}}),t}function Zi(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?If:sl:e?rl:nl).get(r))return r;const o=U(r);if(!t&&o&&ee(Wo,s))return Reflect.get(Wo,s,i);const a=Reflect.get(r,s,i);return(dr(s)?Zc.has(s):tf(s))||(t||ze(r,"get",s),e)?a:he(a)?o&&Yi(s)?a:a.value:le(a)?t?il(a):Kn(a):a}}const af=el(),cf=el(!0);function el(t=!1){return function(n,r,s,i){let o=n[r];if(Dn(o)&&he(o)&&!he(s))return!1;if(!t&&(!rs(s)&&!Dn(s)&&(o=te(o),s=te(s)),!U(n)&&he(o)&&!he(s)))return o.value=s,!0;const a=U(n)&&Yi(r)?Number(r)<n.length:ee(n,r),c=Reflect.set(n,r,s,i);return n===te(i)&&(a?fr(s,o)&&St(n,"set",r,s):St(n,"add",r,s)),c}}function lf(t,e){const n=ee(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&St(t,"delete",e,void 0),r}function uf(t,e){const n=Reflect.has(t,e);return(!dr(e)||!Zc.has(e))&&ze(t,"has",e),n}function df(t){return ze(t,"iterate",U(t)?"length":ln),Reflect.ownKeys(t)}const tl={get:nf,set:af,deleteProperty:lf,has:uf,ownKeys:df},ff={get:sf,set(t,e){return!0},deleteProperty(t,e){return!0}},hf=ke({},tl,{get:rf,set:cf}),eo=t=>t,As=t=>Reflect.getPrototypeOf(t);function Fr(t,e,n=!1,r=!1){t=t.__v_raw;const s=te(t),i=te(e);n||(e!==i&&ze(s,"get",e),ze(s,"get",i));const{has:o}=As(s),a=r?eo:n?ro:pr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function $r(t,e=!1){const n=this.__v_raw,r=te(n),s=te(t);return e||(t!==s&&ze(r,"has",t),ze(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ur(t,e=!1){return t=t.__v_raw,!e&&ze(te(t),"iterate",ln),Reflect.get(t,"size",t)}function Go(t){t=te(t);const e=te(this);return As(e).has.call(e,t)||(e.add(t),St(e,"add",t,t)),this}function Jo(t,e){e=te(e);const n=te(this),{has:r,get:s}=As(n);let i=r.call(n,t);i||(t=te(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?fr(e,o)&&St(n,"set",t,e):St(n,"add",t,e),this}function Yo(t){const e=te(this),{has:n,get:r}=As(e);let s=n.call(e,t);s||(t=te(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&St(e,"delete",t,void 0),i}function Qo(){const t=te(this),e=t.size!==0,n=t.clear();return e&&St(t,"clear",void 0,void 0),n}function Vr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=te(o),c=e?eo:t?ro:pr;return!t&&ze(a,"iterate",ln),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function jr(t,e,n){return function(...r){const s=this.__v_raw,i=te(s),o=kn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?eo:e?ro:pr;return!e&&ze(i,"iterate",c?yi:ln),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Nt(t){return function(...e){return t==="delete"?!1:this}}function pf(){const t={get(i){return Fr(this,i)},get size(){return Ur(this)},has:$r,add:Go,set:Jo,delete:Yo,clear:Qo,forEach:Vr(!1,!1)},e={get(i){return Fr(this,i,!1,!0)},get size(){return Ur(this)},has:$r,add:Go,set:Jo,delete:Yo,clear:Qo,forEach:Vr(!1,!0)},n={get(i){return Fr(this,i,!0)},get size(){return Ur(this,!0)},has(i){return $r.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:Vr(!0,!1)},r={get(i){return Fr(this,i,!0,!0)},get size(){return Ur(this,!0)},has(i){return $r.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:Vr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=jr(i,!1,!1),n[i]=jr(i,!0,!1),e[i]=jr(i,!1,!0),r[i]=jr(i,!0,!0)}),[t,n,e,r]}const[gf,mf,yf,_f]=pf();function to(t,e){const n=e?t?_f:yf:t?mf:gf;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ee(n,s)&&s in r?n:r,s,i)}const bf={get:to(!1,!1)},vf={get:to(!1,!0)},wf={get:to(!0,!1)},nl=new WeakMap,rl=new WeakMap,sl=new WeakMap,If=new WeakMap;function Ef(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xf(t){return t.__v_skip||!Object.isExtensible(t)?0:Ef(Kd(t))}function Kn(t){return Dn(t)?t:no(t,!1,tl,bf,nl)}function Tf(t){return no(t,!1,hf,vf,rl)}function il(t){return no(t,!0,ff,wf,sl)}function no(t,e,n,r,s){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=xf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function zt(t){return Dn(t)?zt(t.__v_raw):!!(t&&t.__v_isReactive)}function Dn(t){return!!(t&&t.__v_isReadonly)}function rs(t){return!!(t&&t.__v_isShallow)}function ol(t){return zt(t)||Dn(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function Mn(t){return ns(t,"__v_skip",!0),t}const pr=t=>le(t)?Kn(t):t,ro=t=>le(t)?il(t):t;function al(t){qt&&et&&(t=te(t),Xc(t.dep||(t.dep=Qi())))}function cl(t,e){t=te(t),t.dep&&_i(t.dep)}function he(t){return!!(t&&t.__v_isRef===!0)}function fn(t){return ll(t,!1)}function Sf(t){return ll(t,!0)}function ll(t,e){return he(t)?t:new Af(t,e)}class Af{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:pr(e)}get value(){return al(this),this._value}set value(e){const n=this.__v_isShallow||rs(e)||Dn(e);e=n?e:te(e),fr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pr(e),cl(this))}}function ue(t){return he(t)?t.value:t}const Cf={get:(t,e,n)=>ue(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return he(s)&&!he(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ul(t){return zt(t)?t:new Proxy(t,Cf)}function kf(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=Of(t,n);return e}class Rf{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Of(t,e,n){const r=t[e];return he(r)?r:new Rf(t,e,n)}var dl;class Pf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[dl]=!1,this._dirty=!0,this.effect=new Xi(e,()=>{this._dirty||(this._dirty=!0,cl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=te(this);return al(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}dl="__v_isReadonly";function Nf(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=rt):(r=t.get,s=t.set),new Pf(r,s,i||!s,n)}function Kt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Cs(i,e,n)}return s}function We(t,e,n,r){if(H(t)){const i=Kt(t,e,n,r);return i&&qc(i)&&i.catch(o=>{Cs(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(We(t[i],e,n,r));return s}function Cs(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Kt(c,null,10,[t,o,a]);return}}Df(t,n,s,r)}function Df(t,e,n,r=!0){console.error(t)}let gr=!1,bi=!1;const Ce=[];let pt=0;const Rn=[];let wt=null,nn=0;const fl=Promise.resolve();let so=null;function io(t){const e=so||fl;return t?e.then(this?t.bind(this):t):e}function Mf(t){let e=pt+1,n=Ce.length;for(;e<n;){const r=e+n>>>1;mr(Ce[r])<t?e=r+1:n=r}return e}function oo(t){(!Ce.length||!Ce.includes(t,gr&&t.allowRecurse?pt+1:pt))&&(t.id==null?Ce.push(t):Ce.splice(Mf(t.id),0,t),hl())}function hl(){!gr&&!bi&&(bi=!0,so=fl.then(gl))}function Lf(t){const e=Ce.indexOf(t);e>pt&&Ce.splice(e,1)}function Ff(t){U(t)?Rn.push(...t):(!wt||!wt.includes(t,t.allowRecurse?nn+1:nn))&&Rn.push(t),hl()}function Xo(t,e=gr?pt+1:0){for(;e<Ce.length;e++){const n=Ce[e];n&&n.pre&&(Ce.splice(e,1),e--,n())}}function pl(t){if(Rn.length){const e=[...new Set(Rn)];if(Rn.length=0,wt){wt.push(...e);return}for(wt=e,wt.sort((n,r)=>mr(n)-mr(r)),nn=0;nn<wt.length;nn++)wt[nn]();wt=null,nn=0}}const mr=t=>t.id==null?1/0:t.id,$f=(t,e)=>{const n=mr(t)-mr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function gl(t){bi=!1,gr=!0,Ce.sort($f);const e=rt;try{for(pt=0;pt<Ce.length;pt++){const n=Ce[pt];n&&n.active!==!1&&Kt(n,null,14)}}finally{pt=0,Ce.length=0,pl(),gr=!1,so=null,(Ce.length||Rn.length)&&gl()}}function Uf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||de;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||de;p&&(s=n.map(m=>we(m)?m.trim():m)),f&&(s=n.map(hr))}let a,c=r[a=Gs(e)]||r[a=Gs(_t(e))];!c&&i&&(c=r[a=Gs(Hn(e))]),c&&We(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,We(l,t,6,s)}}function ml(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const u=ml(l,e,!0);u&&(a=!0,ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(le(t)&&r.set(t,null),null):(U(i)?i.forEach(c=>o[c]=null):ke(o,i),le(t)&&r.set(t,o),o)}function ks(t,e){return!t||!Es(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,Hn(e))||ee(t,e))}let Be=null,yl=null;function ss(t){const e=Be;return Be=t,yl=t&&t.type.__scopeId||null,e}function Vf(t,e=Be,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&la(-1);const i=ss(e);let o;try{o=t(...s)}finally{ss(i),r._d&&la(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Js(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:m,ctx:x,inheritAttrs:S}=t;let F,R;const $=ss(t);try{if(n.shapeFlag&4){const q=s||r;F=ht(u.call(q,q,f,i,m,p,x)),R=c}else{const q=e;F=ht(q.length>1?q(i,{attrs:c,slots:a,emit:l}):q(i,null)),R=e.props?c:jf(c)}}catch(q){nr.length=0,Cs(q,t,1),F=_e(st)}let P=F;if(R&&S!==!1){const q=Object.keys(R),{shapeFlag:W}=P;q.length&&W&7&&(o&&q.some(Gi)&&(R=Bf(R,o)),P=Yt(P,R))}return n.dirs&&(P=Yt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),F=P,ss($),F}const jf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Es(n))&&((e||(e={}))[n]=t[n]);return e},Bf=(t,e)=>{const n={};for(const r in t)(!Gi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Zo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!ks(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Zo(r,o,l):!0:!!o;return!1}function Zo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ks(n,i))return!0}return!1}function qf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const zf=t=>t.__isSuspense;function Kf(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Ff(t)}function Wr(t,e){if(Te){let n=Te.provides;const r=Te.parent&&Te.parent.provides;r===n&&(n=Te.provides=Object.create(r)),n[t]=e}}function gt(t,e,n=!1){const r=Te||Be;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r.proxy):e}}const Br={};function Zn(t,e,n){return _l(t,e,n)}function _l(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=de){const a=Te;let c,l=!1,u=!1;if(he(t)?(c=()=>t.value,l=rs(t)):zt(t)?(c=()=>t,r=!0):U(t)?(u=!0,l=t.some(P=>zt(P)||rs(P)),c=()=>t.map(P=>{if(he(P))return P.value;if(zt(P))return an(P);if(H(P))return Kt(P,a,2)})):H(t)?e?c=()=>Kt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),We(t,a,3,[p])}:c=rt,e&&r){const P=c;c=()=>an(P())}let f,p=P=>{f=R.onStop=()=>{Kt(P,a,4)}},m;if(_r)if(p=rt,e?n&&We(e,a,3,[c(),u?[]:void 0,p]):c(),s==="sync"){const P=Bh();m=P.__watcherHandles||(P.__watcherHandles=[])}else return rt;let x=u?new Array(t.length).fill(Br):Br;const S=()=>{if(R.active)if(e){const P=R.run();(r||l||(u?P.some((q,W)=>fr(q,x[W])):fr(P,x)))&&(f&&f(),We(e,a,3,[P,x===Br?void 0:u&&x[0]===Br?[]:x,p]),x=P)}else R.run()};S.allowRecurse=!!e;let F;s==="sync"?F=S:s==="post"?F=()=>Me(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),F=()=>oo(S));const R=new Xi(c,F);e?n?S():x=R.run():s==="post"?Me(R.run.bind(R),a&&a.suspense):R.run();const $=()=>{R.stop(),a&&a.scope&&Ji(a.scope.effects,R)};return m&&m.push($),$}function Wf(t,e,n){const r=this.proxy,s=we(t)?t.includes(".")?bl(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Te;Ln(this);const a=_l(s,i.bind(r),n);return o?Ln(o):un(),a}function bl(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function an(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),he(t))an(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)an(t[n],e);else if(xs(t)||kn(t))t.forEach(n=>{an(n,e)});else if(Kc(t))for(const n in t)an(t[n],e);return t}function Gf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ao(()=>{t.isMounted=!0}),xl(()=>{t.isUnmounting=!0}),t}const Ke=[Function,Array],Jf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},setup(t,{slots:e}){const n=Fl(),r=Gf();let s;return()=>{const i=e.default&&wl(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==st){o=S;break}}const a=te(t),{mode:c}=a;if(r.isLeaving)return Ys(o);const l=ea(o);if(!l)return Ys(o);const u=vi(l,a,r,n);wi(l,u);const f=n.subTree,p=f&&ea(f);let m=!1;const{getTransitionKey:x}=l.type;if(x){const S=x();s===void 0?s=S:S!==s&&(s=S,m=!0)}if(p&&p.type!==st&&(!rn(l,p)||m)){const S=vi(p,a,r,n);if(wi(p,S),c==="out-in")return r.isLeaving=!0,S.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Ys(o);c==="in-out"&&l.type!==st&&(S.delayLeave=(F,R,$)=>{const P=vl(r,p);P[String(p.key)]=p,F._leaveCb=()=>{R(),F._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=$})}return o}}},Yf=Jf;function vl(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function vi(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:x,onBeforeAppear:S,onAppear:F,onAfterAppear:R,onAppearCancelled:$}=e,P=String(t.key),q=vl(n,t),W=(O,Y)=>{O&&We(O,r,9,Y)},oe=(O,Y)=>{const X=Y[1];W(O,Y),U(O)?O.every(pe=>pe.length<=1)&&X():O.length<=1&&X()},z={mode:i,persisted:o,beforeEnter(O){let Y=a;if(!n.isMounted)if(s)Y=S||a;else return;O._leaveCb&&O._leaveCb(!0);const X=q[P];X&&rn(t,X)&&X.el._leaveCb&&X.el._leaveCb(),W(Y,[O])},enter(O){let Y=c,X=l,pe=u;if(!n.isMounted)if(s)Y=F||c,X=R||l,pe=$||u;else return;let Ie=!1;const Ue=O._enterCb=Oe=>{Ie||(Ie=!0,Oe?W(pe,[O]):W(X,[O]),z.delayedLeave&&z.delayedLeave(),O._enterCb=void 0)};Y?oe(Y,[O,Ue]):Ue()},leave(O,Y){const X=String(t.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return Y();W(f,[O]);let pe=!1;const Ie=O._leaveCb=Ue=>{pe||(pe=!0,Y(),Ue?W(x,[O]):W(m,[O]),O._leaveCb=void 0,q[X]===t&&delete q[X])};q[X]=t,p?oe(p,[O,Ie]):Ie()},clone(O){return vi(O,e,n,r)}};return z}function Ys(t){if(Rs(t))return t=Yt(t),t.children=null,t}function ea(t){return Rs(t)?t.children?t.children[0]:void 0:t}function wi(t,e){t.shapeFlag&6&&t.component?wi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wl(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ne?(o.patchFlag&128&&s++,r=r.concat(wl(o.children,e,a))):(e||o.type!==st)&&r.push(a!=null?Yt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Il(t){return H(t)?{setup:t,name:t.name}:t}const Gr=t=>!!t.type.__asyncLoader,Rs=t=>t.type.__isKeepAlive;function Qf(t,e){El(t,"a",e)}function Xf(t,e){El(t,"da",e)}function El(t,e,n=Te){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Os(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Rs(s.parent.vnode)&&Zf(r,e,n,s),s=s.parent}}function Zf(t,e,n,r){const s=Os(e,t,r,!0);Tl(()=>{Ji(r[e],s)},n)}function Os(t,e,n=Te,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qn(),Ln(n);const a=We(e,n,t,o);return un(),zn(),a});return r?s.unshift(i):s.push(i),i}}const Ot=t=>(e,n=Te)=>(!_r||t==="sp")&&Os(t,(...r)=>e(...r),n),eh=Ot("bm"),ao=Ot("m"),th=Ot("bu"),nh=Ot("u"),xl=Ot("bum"),Tl=Ot("um"),rh=Ot("sp"),sh=Ot("rtg"),ih=Ot("rtc");function oh(t,e=Te){Os("ec",t,e)}function er(t,e){const n=Be;if(n===null)return t;const r=Ds(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=de]=e[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&an(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Xt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(qn(),We(c,n,8,[t.el,a,t,e]),zn())}}const Sl="components";function ah(t,e){return lh(Sl,t,!0,e)||t}const ch=Symbol();function lh(t,e,n=!0,r=!1){const s=Be||Te;if(s){const i=s.type;if(t===Sl){const a=Uh(i,!1);if(a&&(a===e||a===_t(e)||a===Ss(_t(e))))return i}const o=ta(s[t]||i[t],e)||ta(s.appContext[t],e);return!o&&r?i:o}}function ta(t,e){return t&&(t[e]||t[_t(e)]||t[Ss(_t(e))])}function na(t,e,n,r){let s;const i=n&&n[r];if(U(t)||we(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(le(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Ii=t=>t?$l(t)?Ds(t)||t.proxy:Ii(t.parent):null,tr=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ii(t.parent),$root:t=>Ii(t.root),$emit:t=>t.emit,$options:t=>co(t),$forceUpdate:t=>t.f||(t.f=()=>oo(t.update)),$nextTick:t=>t.n||(t.n=io.bind(t.proxy)),$watch:t=>Wf.bind(t)}),Qs=(t,e)=>t!==de&&!t.__isScriptSetup&&ee(t,e),uh={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Qs(r,e))return o[e]=1,r[e];if(s!==de&&ee(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ee(l,e))return o[e]=3,i[e];if(n!==de&&ee(n,e))return o[e]=4,n[e];Ei&&(o[e]=0)}}const u=tr[e];let f,p;if(u)return e==="$attrs"&&ze(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==de&&ee(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,ee(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Qs(s,e)?(s[e]=n,!0):r!==de&&ee(r,e)?(r[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==de&&ee(t,o)||Qs(e,o)||(a=i[0])&&ee(a,o)||ee(r,o)||ee(tr,o)||ee(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ei=!0;function dh(t){const e=co(t),n=t.proxy,r=t.ctx;Ei=!1,e.beforeCreate&&ra(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:x,activated:S,deactivated:F,beforeDestroy:R,beforeUnmount:$,destroyed:P,unmounted:q,render:W,renderTracked:oe,renderTriggered:z,errorCaptured:O,serverPrefetch:Y,expose:X,inheritAttrs:pe,components:Ie,directives:Ue,filters:Oe}=e;if(l&&fh(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ae in o){const se=o[ae];H(se)&&(r[ae]=se.bind(n))}if(s){const ae=s.call(n,n);le(ae)&&(t.data=Kn(ae))}if(Ei=!0,i)for(const ae in i){const se=i[ae],Qe=H(se)?se.bind(n,n):H(se.get)?se.get.bind(n,n):rt,Qt=!H(se)&&H(se.set)?se.set.bind(n):rt,Xe=Fe({get:Qe,set:Qt});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:De=>Xe.value=De})}if(a)for(const ae in a)Al(a[ae],r,n,ae);if(c){const ae=H(c)?c.call(n):c;Reflect.ownKeys(ae).forEach(se=>{Wr(se,ae[se])})}u&&ra(u,t,"c");function ge(ae,se){U(se)?se.forEach(Qe=>ae(Qe.bind(n))):se&&ae(se.bind(n))}if(ge(eh,f),ge(ao,p),ge(th,m),ge(nh,x),ge(Qf,S),ge(Xf,F),ge(oh,O),ge(ih,oe),ge(sh,z),ge(xl,$),ge(Tl,q),ge(rh,Y),U(X))if(X.length){const ae=t.exposed||(t.exposed={});X.forEach(se=>{Object.defineProperty(ae,se,{get:()=>n[se],set:Qe=>n[se]=Qe})})}else t.exposed||(t.exposed={});W&&t.render===rt&&(t.render=W),pe!=null&&(t.inheritAttrs=pe),Ie&&(t.components=Ie),Ue&&(t.directives=Ue)}function fh(t,e,n=rt,r=!1){U(t)&&(t=xi(t));for(const s in t){const i=t[s];let o;le(i)?"default"in i?o=gt(i.from||s,i.default,!0):o=gt(i.from||s):o=gt(i),he(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ra(t,e,n){We(U(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Al(t,e,n,r){const s=r.includes(".")?bl(n,r):()=>n[r];if(we(t)){const i=e[t];H(i)&&Zn(s,i)}else if(H(t))Zn(s,t.bind(n));else if(le(t))if(U(t))t.forEach(i=>Al(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&Zn(s,i,t)}}function co(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>is(c,l,o,!0)),is(c,e,o)),le(e)&&i.set(e,c),c}function is(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&is(t,i,n,!0),s&&s.forEach(o=>is(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=hh[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const hh={data:sa,props:en,emits:en,methods:en,computed:en,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:en,directives:en,watch:gh,provide:sa,inject:ph};function sa(t,e){return e?t?function(){return ke(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function ph(t,e){return en(xi(t),xi(e))}function xi(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function en(t,e){return t?ke(ke(Object.create(null),t),e):e}function gh(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const r in e)n[r]=Pe(t[r],e[r]);return n}function mh(t,e,n,r=!1){const s={},i={};ns(i,Ns,1),t.propsDefaults=Object.create(null),Cl(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Tf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function yh(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=te(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(ks(t.emitsOptions,p))continue;const m=e[p];if(c)if(ee(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const x=_t(p);s[x]=Ti(c,a,x,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{Cl(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!ee(e,f)&&((u=Hn(f))===f||!ee(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ti(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ee(e,f))&&(delete i[f],l=!0)}l&&St(t,"set","$attrs")}function Cl(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(zr(c))continue;const l=e[c];let u;s&&ee(s,u=_t(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ks(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=te(n),l=a||de;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Ti(s,c,f,l[f],t,!ee(l,f))}}return o}function Ti(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&H(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Ln(s),r=l[n]=c.call(null,e),un())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Hn(n))&&(r=!0))}return r}function kl(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const u=f=>{c=!0;const[p,m]=kl(f,e,!0);ke(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return le(t)&&r.set(t,Cn),Cn;if(U(i))for(let u=0;u<i.length;u++){const f=_t(i[u]);ia(f)&&(o[f]=de)}else if(i)for(const u in i){const f=_t(u);if(ia(f)){const p=i[u],m=o[f]=U(p)||H(p)?{type:p}:Object.assign({},p);if(m){const x=ca(Boolean,m.type),S=ca(String,m.type);m[0]=x>-1,m[1]=S<0||x<S,(x>-1||ee(m,"default"))&&a.push(f)}}}const l=[o,a];return le(t)&&r.set(t,l),l}function ia(t){return t[0]!=="$"}function oa(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function aa(t,e){return oa(t)===oa(e)}function ca(t,e){return U(e)?e.findIndex(n=>aa(n,t)):H(e)&&aa(e,t)?0:-1}const Rl=t=>t[0]==="_"||t==="$stable",lo=t=>U(t)?t.map(ht):[ht(t)],_h=(t,e,n)=>{if(e._n)return e;const r=Vf((...s)=>lo(e(...s)),n);return r._c=!1,r},Ol=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Rl(s))continue;const i=t[s];if(H(i))e[s]=_h(s,i,r);else if(i!=null){const o=lo(i);e[s]=()=>o}}},Pl=(t,e)=>{const n=lo(e);t.slots.default=()=>n},bh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),ns(e,"_",n)):Ol(e,t.slots={})}else t.slots={},e&&Pl(t,e);ns(t.slots,Ns,1)},vh=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=de;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ke(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Ol(e,s)),o=e}else e&&(Pl(t,e),o={default:1});if(i)for(const a in s)!Rl(a)&&!(a in o)&&delete s[a]};function Nl(){return{app:null,config:{isNativeTag:Hd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wh=0;function Ih(t,e){return function(r,s=null){H(r)||(r=Object.assign({},r)),s!=null&&!le(s)&&(s=null);const i=Nl(),o=new Set;let a=!1;const c=i.app={_uid:wh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hh,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(c,...u)):H(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=_e(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,Ds(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Si(t,e,n,r,s=!1){if(U(t)){t.forEach((p,m)=>Si(p,e&&(U(e)?e[m]:e),n,r,s));return}if(Gr(r)&&!s)return;const i=r.shapeFlag&4?Ds(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===de?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(we(l)?(u[l]=null,ee(f,l)&&(f[l]=null)):he(l)&&(l.value=null)),H(c))Kt(c,a,12,[o,u]);else{const p=we(c),m=he(c);if(p||m){const x=()=>{if(t.f){const S=p?ee(f,c)?f[c]:u[c]:c.value;s?U(S)&&Ji(S,i):U(S)?S.includes(i)||S.push(i):p?(u[c]=[i],ee(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,ee(f,c)&&(f[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(x.id=-1,Me(x,n)):x()}}}const Me=Kf;function Eh(t){return xh(t)}function xh(t,e){const n=Jd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=rt,insertStaticContent:x}=t,S=(d,h,g,y=null,b=null,E=null,C=!1,I=null,T=!!h.dynamicChildren)=>{if(d===h)return;d&&!rn(d,h)&&(y=A(d),De(d,b,E,!0),d=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:v,ref:M,shapeFlag:N}=h;switch(v){case Ps:F(d,h,g,y);break;case st:R(d,h,g,y);break;case Jr:d==null&&$(h,g,y,C);break;case Ne:Ie(d,h,g,y,b,E,C,I,T);break;default:N&1?W(d,h,g,y,b,E,C,I,T):N&6?Ue(d,h,g,y,b,E,C,I,T):(N&64||N&128)&&v.process(d,h,g,y,b,E,C,I,T,Z)}M!=null&&b&&Si(M,d&&d.ref,E,h||d,!h)},F=(d,h,g,y)=>{if(d==null)r(h.el=a(h.children),g,y);else{const b=h.el=d.el;h.children!==d.children&&l(b,h.children)}},R=(d,h,g,y)=>{d==null?r(h.el=c(h.children||""),g,y):h.el=d.el},$=(d,h,g,y)=>{[d.el,d.anchor]=x(d.children,h,g,y,d.el,d.anchor)},P=({el:d,anchor:h},g,y)=>{let b;for(;d&&d!==h;)b=p(d),r(d,g,y),d=b;r(h,g,y)},q=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},W=(d,h,g,y,b,E,C,I,T)=>{C=C||h.type==="svg",d==null?oe(h,g,y,b,E,C,I,T):Y(d,h,b,E,C,I,T)},oe=(d,h,g,y,b,E,C,I)=>{let T,v;const{type:M,props:N,shapeFlag:L,transition:B,dirs:J}=d;if(T=d.el=o(d.type,E,N&&N.is,N),L&8?u(T,d.children):L&16&&O(d.children,T,null,y,b,E&&M!=="foreignObject",C,I),J&&Xt(d,null,y,"created"),N){for(const ie in N)ie!=="value"&&!zr(ie)&&i(T,ie,null,N[ie],E,d.children,y,b,k);"value"in N&&i(T,"value",null,N.value),(v=N.onVnodeBeforeMount)&&dt(v,y,d)}z(T,d,d.scopeId,C,y),J&&Xt(d,null,y,"beforeMount");const ce=(!b||b&&!b.pendingBranch)&&B&&!B.persisted;ce&&B.beforeEnter(T),r(T,h,g),((v=N&&N.onVnodeMounted)||ce||J)&&Me(()=>{v&&dt(v,y,d),ce&&B.enter(T),J&&Xt(d,null,y,"mounted")},b)},z=(d,h,g,y,b)=>{if(g&&m(d,g),y)for(let E=0;E<y.length;E++)m(d,y[E]);if(b){let E=b.subTree;if(h===E){const C=b.vnode;z(d,C,C.scopeId,C.slotScopeIds,b.parent)}}},O=(d,h,g,y,b,E,C,I,T=0)=>{for(let v=T;v<d.length;v++){const M=d[v]=I?Lt(d[v]):ht(d[v]);S(null,M,h,g,y,b,E,C,I)}},Y=(d,h,g,y,b,E,C)=>{const I=h.el=d.el;let{patchFlag:T,dynamicChildren:v,dirs:M}=h;T|=d.patchFlag&16;const N=d.props||de,L=h.props||de;let B;g&&Zt(g,!1),(B=L.onVnodeBeforeUpdate)&&dt(B,g,h,d),M&&Xt(h,d,g,"beforeUpdate"),g&&Zt(g,!0);const J=b&&h.type!=="foreignObject";if(v?X(d.dynamicChildren,v,I,g,y,J,E):C||se(d,h,I,null,g,y,J,E,!1),T>0){if(T&16)pe(I,h,N,L,g,y,b);else if(T&2&&N.class!==L.class&&i(I,"class",null,L.class,b),T&4&&i(I,"style",N.style,L.style,b),T&8){const ce=h.dynamicProps;for(let ie=0;ie<ce.length;ie++){const me=ce[ie],Ze=N[me],In=L[me];(In!==Ze||me==="value")&&i(I,me,Ze,In,b,d.children,g,y,k)}}T&1&&d.children!==h.children&&u(I,h.children)}else!C&&v==null&&pe(I,h,N,L,g,y,b);((B=L.onVnodeUpdated)||M)&&Me(()=>{B&&dt(B,g,h,d),M&&Xt(h,d,g,"updated")},y)},X=(d,h,g,y,b,E,C)=>{for(let I=0;I<h.length;I++){const T=d[I],v=h[I],M=T.el&&(T.type===Ne||!rn(T,v)||T.shapeFlag&70)?f(T.el):g;S(T,v,M,null,y,b,E,C,!0)}},pe=(d,h,g,y,b,E,C)=>{if(g!==y){if(g!==de)for(const I in g)!zr(I)&&!(I in y)&&i(d,I,g[I],null,C,h.children,b,E,k);for(const I in y){if(zr(I))continue;const T=y[I],v=g[I];T!==v&&I!=="value"&&i(d,I,v,T,C,h.children,b,E,k)}"value"in y&&i(d,"value",g.value,y.value)}},Ie=(d,h,g,y,b,E,C,I,T)=>{const v=h.el=d?d.el:a(""),M=h.anchor=d?d.anchor:a("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:B}=h;B&&(I=I?I.concat(B):B),d==null?(r(v,g,y),r(M,g,y),O(h.children,g,M,b,E,C,I,T)):N>0&&N&64&&L&&d.dynamicChildren?(X(d.dynamicChildren,L,g,b,E,C,I),(h.key!=null||b&&h===b.subTree)&&Dl(d,h,!0)):se(d,h,g,M,b,E,C,I,T)},Ue=(d,h,g,y,b,E,C,I,T)=>{h.slotScopeIds=I,d==null?h.shapeFlag&512?b.ctx.activate(h,g,y,C,T):Oe(h,g,y,b,E,C,T):Ee(d,h,T)},Oe=(d,h,g,y,b,E,C)=>{const I=d.component=Dh(d,y,b);if(Rs(d)&&(I.ctx.renderer=Z),Mh(I),I.asyncDep){if(b&&b.registerDep(I,ge),!d.el){const T=I.subTree=_e(st);R(null,T,h,g)}return}ge(I,d,h,g,b,E,C)},Ee=(d,h,g)=>{const y=h.component=d.component;if(Hf(d,h,g))if(y.asyncDep&&!y.asyncResolved){ae(y,h,g);return}else y.next=h,Lf(y.update),y.update();else h.el=d.el,y.vnode=h},ge=(d,h,g,y,b,E,C)=>{const I=()=>{if(d.isMounted){let{next:M,bu:N,u:L,parent:B,vnode:J}=d,ce=M,ie;Zt(d,!1),M?(M.el=J.el,ae(d,M,C)):M=J,N&&Kr(N),(ie=M.props&&M.props.onVnodeBeforeUpdate)&&dt(ie,B,M,J),Zt(d,!0);const me=Js(d),Ze=d.subTree;d.subTree=me,S(Ze,me,f(Ze.el),A(Ze),d,b,E),M.el=me.el,ce===null&&qf(d,me.el),L&&Me(L,b),(ie=M.props&&M.props.onVnodeUpdated)&&Me(()=>dt(ie,B,M,J),b)}else{let M;const{el:N,props:L}=h,{bm:B,m:J,parent:ce}=d,ie=Gr(h);if(Zt(d,!1),B&&Kr(B),!ie&&(M=L&&L.onVnodeBeforeMount)&&dt(M,ce,h),Zt(d,!0),N&&G){const me=()=>{d.subTree=Js(d),G(N,d.subTree,d,b,null)};ie?h.type.__asyncLoader().then(()=>!d.isUnmounted&&me()):me()}else{const me=d.subTree=Js(d);S(null,me,g,y,d,b,E),h.el=me.el}if(J&&Me(J,b),!ie&&(M=L&&L.onVnodeMounted)){const me=h;Me(()=>dt(M,ce,me),b)}(h.shapeFlag&256||ce&&Gr(ce.vnode)&&ce.vnode.shapeFlag&256)&&d.a&&Me(d.a,b),d.isMounted=!0,h=g=y=null}},T=d.effect=new Xi(I,()=>oo(v),d.scope),v=d.update=()=>T.run();v.id=d.uid,Zt(d,!0),v()},ae=(d,h,g)=>{h.component=d;const y=d.vnode.props;d.vnode=h,d.next=null,yh(d,h.props,y,g),vh(d,h.children,g),qn(),Xo(),zn()},se=(d,h,g,y,b,E,C,I,T=!1)=>{const v=d&&d.children,M=d?d.shapeFlag:0,N=h.children,{patchFlag:L,shapeFlag:B}=h;if(L>0){if(L&128){Qt(v,N,g,y,b,E,C,I,T);return}else if(L&256){Qe(v,N,g,y,b,E,C,I,T);return}}B&8?(M&16&&k(v,b,E),N!==v&&u(g,N)):M&16?B&16?Qt(v,N,g,y,b,E,C,I,T):k(v,b,E,!0):(M&8&&u(g,""),B&16&&O(N,g,y,b,E,C,I,T))},Qe=(d,h,g,y,b,E,C,I,T)=>{d=d||Cn,h=h||Cn;const v=d.length,M=h.length,N=Math.min(v,M);let L;for(L=0;L<N;L++){const B=h[L]=T?Lt(h[L]):ht(h[L]);S(d[L],B,g,null,b,E,C,I,T)}v>M?k(d,b,E,!0,!1,N):O(h,g,y,b,E,C,I,T,N)},Qt=(d,h,g,y,b,E,C,I,T)=>{let v=0;const M=h.length;let N=d.length-1,L=M-1;for(;v<=N&&v<=L;){const B=d[v],J=h[v]=T?Lt(h[v]):ht(h[v]);if(rn(B,J))S(B,J,g,null,b,E,C,I,T);else break;v++}for(;v<=N&&v<=L;){const B=d[N],J=h[L]=T?Lt(h[L]):ht(h[L]);if(rn(B,J))S(B,J,g,null,b,E,C,I,T);else break;N--,L--}if(v>N){if(v<=L){const B=L+1,J=B<M?h[B].el:y;for(;v<=L;)S(null,h[v]=T?Lt(h[v]):ht(h[v]),g,J,b,E,C,I,T),v++}}else if(v>L)for(;v<=N;)De(d[v],b,E,!0),v++;else{const B=v,J=v,ce=new Map;for(v=J;v<=L;v++){const Ve=h[v]=T?Lt(h[v]):ht(h[v]);Ve.key!=null&&ce.set(Ve.key,v)}let ie,me=0;const Ze=L-J+1;let In=!1,Vo=0;const Yn=new Array(Ze);for(v=0;v<Ze;v++)Yn[v]=0;for(v=B;v<=N;v++){const Ve=d[v];if(me>=Ze){De(Ve,b,E,!0);continue}let ut;if(Ve.key!=null)ut=ce.get(Ve.key);else for(ie=J;ie<=L;ie++)if(Yn[ie-J]===0&&rn(Ve,h[ie])){ut=ie;break}ut===void 0?De(Ve,b,E,!0):(Yn[ut-J]=v+1,ut>=Vo?Vo=ut:In=!0,S(Ve,h[ut],g,null,b,E,C,I,T),me++)}const jo=In?Th(Yn):Cn;for(ie=jo.length-1,v=Ze-1;v>=0;v--){const Ve=J+v,ut=h[Ve],Bo=Ve+1<M?h[Ve+1].el:y;Yn[v]===0?S(null,ut,g,Bo,b,E,C,I,T):In&&(ie<0||v!==jo[ie]?Xe(ut,g,Bo,2):ie--)}}},Xe=(d,h,g,y,b=null)=>{const{el:E,type:C,transition:I,children:T,shapeFlag:v}=d;if(v&6){Xe(d.component.subTree,h,g,y);return}if(v&128){d.suspense.move(h,g,y);return}if(v&64){C.move(d,h,g,Z);return}if(C===Ne){r(E,h,g);for(let N=0;N<T.length;N++)Xe(T[N],h,g,y);r(d.anchor,h,g);return}if(C===Jr){P(d,h,g);return}if(y!==2&&v&1&&I)if(y===0)I.beforeEnter(E),r(E,h,g),Me(()=>I.enter(E),b);else{const{leave:N,delayLeave:L,afterLeave:B}=I,J=()=>r(E,h,g),ce=()=>{N(E,()=>{J(),B&&B()})};L?L(E,J,ce):ce()}else r(E,h,g)},De=(d,h,g,y=!1,b=!1)=>{const{type:E,props:C,ref:I,children:T,dynamicChildren:v,shapeFlag:M,patchFlag:N,dirs:L}=d;if(I!=null&&Si(I,null,g,d,!0),M&256){h.ctx.deactivate(d);return}const B=M&1&&L,J=!Gr(d);let ce;if(J&&(ce=C&&C.onVnodeBeforeUnmount)&&dt(ce,h,d),M&6)_(d.component,g,y);else{if(M&128){d.suspense.unmount(g,y);return}B&&Xt(d,null,h,"beforeUnmount"),M&64?d.type.remove(d,h,g,b,Z,y):v&&(E!==Ne||N>0&&N&64)?k(v,h,g,!1,!0):(E===Ne&&N&384||!b&&M&16)&&k(T,h,g),y&&wn(d)}(J&&(ce=C&&C.onVnodeUnmounted)||B)&&Me(()=>{ce&&dt(ce,h,d),B&&Xt(d,null,h,"unmounted")},g)},wn=d=>{const{type:h,el:g,anchor:y,transition:b}=d;if(h===Ne){Lr(g,y);return}if(h===Jr){q(d);return}const E=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:C,delayLeave:I}=b,T=()=>C(g,E);I?I(d.el,E,T):T()}else E()},Lr=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},_=(d,h,g)=>{const{bum:y,scope:b,update:E,subTree:C,um:I}=d;y&&Kr(y),b.stop(),E&&(E.active=!1,De(C,d,h,g)),I&&Me(I,h),Me(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},k=(d,h,g,y=!1,b=!1,E=0)=>{for(let C=E;C<d.length;C++)De(d[C],h,g,y,b)},A=d=>d.shapeFlag&6?A(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),D=(d,h,g)=>{d==null?h._vnode&&De(h._vnode,null,null,!0):S(h._vnode||null,d,h,null,null,null,g),Xo(),pl(),h._vnode=d},Z={p:S,um:De,m:Xe,r:wn,mt:Oe,mc:O,pc:se,pbc:X,n:A,o:t};let fe,G;return e&&([fe,G]=e(Z)),{render:D,hydrate:fe,createApp:Ih(D,fe)}}function Zt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Dl(t,e,n=!1){const r=t.children,s=e.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Lt(s[i]),a.el=o.el),n||Dl(o,a)),a.type===Ps&&(a.el=o.el)}}function Th(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Sh=t=>t.__isTeleport,Ne=Symbol(void 0),Ps=Symbol(void 0),st=Symbol(void 0),Jr=Symbol(void 0),nr=[];let nt=null;function ye(t=!1){nr.push(nt=t?null:[])}function Ah(){nr.pop(),nt=nr[nr.length-1]||null}let yr=1;function la(t){yr+=t}function Ml(t){return t.dynamicChildren=yr>0?nt||Cn:null,Ah(),yr>0&&nt&&nt.push(t),t}function be(t,e,n,r,s,i){return Ml(w(t,e,n,r,s,i,!0))}function Ch(t,e,n,r,s){return Ml(_e(t,e,n,r,s,!0))}function Ai(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const Ns="__vInternal",Ll=({key:t})=>t??null,Yr=({ref:t,ref_key:e,ref_for:n})=>t!=null?we(t)||he(t)||H(t)?{i:Be,r:t,k:e,f:!!n}:t:null;function w(t,e=null,n=null,r=0,s=null,i=t===Ne?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ll(e),ref:e&&Yr(e),scopeId:yl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Be};return a?(uo(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=we(n)?8:16),yr>0&&!o&&nt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&nt.push(c),c}const _e=kh;function kh(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ch)&&(t=st),Ai(t)){const a=Yt(t,e,!0);return n&&uo(a,n),yr>0&&!i&&nt&&(a.shapeFlag&6?nt[nt.indexOf(t)]=a:nt.push(a)),a.patchFlag|=-2,a}if(Vh(t)&&(t=t.__vccOpts),e){e=Rh(e);let{class:a,style:c}=e;a&&!we(a)&&(e.class=ws(a)),le(c)&&(ol(c)&&!U(c)&&(c=ke({},c)),e.style=Wi(c))}const o=we(t)?1:zf(t)?128:Sh(t)?64:le(t)?4:H(t)?2:0;return w(t,e,n,r,s,o,i,!0)}function Rh(t){return t?ol(t)||Ns in t?ke({},t):t:null}function Yt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Oh(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ll(a),ref:e&&e.ref?n&&s?U(s)?s.concat(Yr(e)):[s,Yr(e)]:Yr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yt(t.ssContent),ssFallback:t.ssFallback&&Yt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Ci(t=" ",e=0){return _e(Ps,null,t,e)}function Wn(t,e){const n=_e(Jr,null,t);return n.staticCount=e,n}function It(t="",e=!1){return e?(ye(),Ch(st,null,t)):_e(st,null,t)}function ht(t){return t==null||typeof t=="boolean"?_e(st):U(t)?_e(Ne,null,t.slice()):typeof t=="object"?Lt(t):_e(Ps,null,String(t))}function Lt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yt(t)}function uo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),uo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ns in e)?e._ctx=Be:s===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),r&64?(n=16,e=[Ci(e)]):n=8);t.children=e,t.shapeFlag|=n}function Oh(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ws([e.class,r.class]));else if(s==="style")e.style=Wi([e.style,r.style]);else if(Es(s)){const i=e[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function dt(t,e,n,r=null){We(t,e,7,[n,r])}const Ph=Nl();let Nh=0;function Dh(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ph,i={uid:Nh++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kl(r,s),emitsOptions:ml(r,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Uf.bind(null,i),t.ce&&t.ce(i),i}let Te=null;const Fl=()=>Te||Be,Ln=t=>{Te=t,t.scope.on()},un=()=>{Te&&Te.scope.off(),Te=null};function $l(t){return t.vnode.shapeFlag&4}let _r=!1;function Mh(t,e=!1){_r=e;const{props:n,children:r}=t.vnode,s=$l(t);mh(t,n,s,e),bh(t,r);const i=s?Lh(t,e):void 0;return _r=!1,i}function Lh(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Mn(new Proxy(t.ctx,uh));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?$h(t):null;Ln(t),qn();const i=Kt(r,t,0,[t.props,s]);if(zn(),un(),qc(i)){if(i.then(un,un),e)return i.then(o=>{ua(t,o,e)}).catch(o=>{Cs(o,t,0)});t.asyncDep=i}else ua(t,i,e)}else Ul(t,e)}function ua(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=ul(e)),Ul(t,n)}let da;function Ul(t,e,n){const r=t.type;if(!t.render){if(!e&&da&&!r.render){const s=r.template||co(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ke(ke({isCustomElement:i,delimiters:a},o),c);r.render=da(s,l)}}t.render=r.render||rt}Ln(t),qn(),dh(t),zn(),un()}function Fh(t){return new Proxy(t.attrs,{get(e,n){return ze(t,"get","$attrs"),e[n]}})}function $h(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Fh(t))},slots:t.slots,emit:t.emit,expose:e}}function Ds(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ul(Mn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in tr)return tr[n](t)},has(e,n){return n in e||n in tr}}))}function Uh(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Vh(t){return H(t)&&"__vccOpts"in t}const Fe=(t,e)=>Nf(t,e,_r);function Vl(t,e,n){const r=arguments.length;return r===2?le(e)&&!U(e)?Ai(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ai(n)&&(n=[n]),_e(t,e,n))}const jh=Symbol(""),Bh=()=>gt(jh),Hh="3.2.45",qh="http://www.w3.org/2000/svg",sn=typeof document<"u"?document:null,fa=sn&&sn.createElement("template"),zh={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?sn.createElementNS(qh,t):sn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sn.createTextNode(t),createComment:t=>sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{fa.innerHTML=r?`<svg>${t}</svg>`:t;const a=fa.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Kh(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Wh(t,e,n){const r=t.style,s=we(n);if(n&&!s){for(const i in n)ki(r,i,n[i]);if(e&&!we(e))for(const i in e)n[i]==null&&ki(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ha=/\s*!important$/;function ki(t,e,n){if(U(n))n.forEach(r=>ki(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Gh(t,e);ha.test(n)?t.setProperty(Hn(r),n.replace(ha,""),"important"):t[r]=n}}const pa=["Webkit","Moz","ms"],Xs={};function Gh(t,e){const n=Xs[e];if(n)return n;let r=_t(e);if(r!=="filter"&&r in t)return Xs[e]=r;r=Ss(r);for(let s=0;s<pa.length;s++){const i=pa[s]+r;if(i in t)return Xs[e]=i}return e}const ga="http://www.w3.org/1999/xlink";function Jh(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ga,e.slice(6,e.length)):t.setAttributeNS(ga,e,n);else{const i=Vd(e);n==null||i&&!Bc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Yh(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Bc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function on(t,e,n,r){t.addEventListener(e,n,r)}function Qh(t,e,n,r){t.removeEventListener(e,n,r)}function Xh(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Zh(e);if(r){const l=i[e]=np(r,s);on(t,a,l,c)}else o&&(Qh(t,a,o,c),i[e]=void 0)}}const ma=/(?:Once|Passive|Capture)$/;function Zh(t){let e;if(ma.test(t)){e={};let r;for(;r=t.match(ma);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hn(t.slice(2)),e]}let Zs=0;const ep=Promise.resolve(),tp=()=>Zs||(ep.then(()=>Zs=0),Zs=Date.now());function np(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;We(rp(r,n.value),e,5,[r])};return n.value=t,n.attached=tp(),n}function rp(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ya=/^on[a-z]/,sp=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Kh(t,r,s):e==="style"?Wh(t,n,r):Es(e)?Gi(e)||Xh(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ip(t,e,r,s))?Yh(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Jh(t,e,r,s))};function ip(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ya.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ya.test(e)&&we(n)?!1:e in t}const op={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Yf.props;const os=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>Kr(e,n):e};function ap(t){t.target.composing=!0}function _a(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ei={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=os(s);const i=r||s.props&&s.props.type==="number";on(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=hr(a)),t._assign(a)}),n&&on(t,"change",()=>{t.value=t.value.trim()}),e||(on(t,"compositionstart",ap),on(t,"compositionend",_a),on(t,"change",_a))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=os(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&hr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},ba={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=xs(e);on(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?hr(as(o)):as(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=os(r)},mounted(t,{value:e}){va(t,e)},beforeUpdate(t,e,n){t._assign=os(n)},updated(t,{value:e}){va(t,e)}};function va(t,e){const n=t.multiple;if(!(n&&!U(e)&&!xs(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=as(i);if(n)U(e)?i.selected=Bd(e,o)>-1:i.selected=e.has(o);else if(Is(as(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function as(t){return"_value"in t?t._value:t.value}const cp=ke({patchProp:sp},zh);let wa;function lp(){return wa||(wa=Eh(cp))}const up=(...t)=>{const e=lp().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=dp(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function dp(t){return we(t)?document.querySelector(t):t}const fp="/assets/personajeODM-860404cc.png";const Ms=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},hp={setup(){let t=fn(!1);return{showMenu:t,toggleNav:()=>{t.value=!t.value}}}},pp={class:"w-screen -mb-10 sm:w-auto"},gp={class:"w-screen"},mp={class:"bg-white pt-10"},yp={class:"container px-6 py-8 mr-4 md:mr-20 mx-auto md:flex md:justify-between md:items-center"},_p={class:"flex items-center justify-between"},bp=w("button",{type:"button",class:"text-[#003368] hover:text-gray-900 focus:outline-none focus:text-gray-800"},[w("svg",{viewBox:"0 0 24 24",class:"w-20 h-18 fill-current"},[w("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})])],-1),vp=[bp],wp=Wn('<li class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]"><a href="#">Tipos<br>de envíos</a></li><li class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]"><a href="#">Cobertura<br> de envíos</a></li><li class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]"><a href="#">Calcula<br> tu paquete</a></li><li class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]"><a href="#">Tarifas<br> preferenciales</a></li>',4),Ip=[wp],Ep=Wn('<div class="mt-[-100px] bg-inherit py-10 px-6 sm:py-20 sm:px-16 lg:py-40 lg:px-48 text-start text-neutral-800"><h1 class="mb-6 text-[#003368] text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold blue:bg-neutral-700 sm:pl-[20px] md:pl-[30px] lg:pl-[-30px] xl:ml-[10px] tracking-widest"> AHORRA HASTA 60% EN <br> LOGÍSTICA PARA TU <br> EMPRESA </h1><div class="mx-auto max-w-[600px]"><ul class="flex flex-col space-y-2 list-disc object-left py-5 pt-10 pb-10 text-lg sm:text-3xl text-gray-800"><li>Tarifas preferenciales para empresas</li><li> Envía y recibe paquetes el mismo día <p class="text-gray-500 inline">(sin costo extra)</p></li><li> Cobertura en zonas extendidad <p class="text-gray-500 inline">(sin costo extra)</p></li><li> Servicio ocurre, en más de 50 ciudades <p class="text-gray-500 inline">(Bajío, Norte y Centro del país)</p></li></ul></div><img class="mx-auto w-full sm:w-80 h-auto mt-[-40px] sm:mt-[-550px] lg:float-right lg:mt-[-550px] xl:opacity-100 sm:opacity-0" src="'+fp+'"><div class="mx-auto max-w-[600px] pt-10 sm:pt-20 lg:pt-28"><button class="bg-[#003368] w-full sm:w-auto h-14 sm:h-28 hover:bg-blue-600 text-white text-xl sm:text-4xl font-extrabold py-2 px-4 rounded-full"> Tarifas preferenciales </button></div></div>',1);function xp(t,e,n,r,s,i){return ye(),be("div",pp,[w("header",gp,[w("div",mp,[w("nav",yp,[w("div",_p,[w("div",{onClick:e[0]||(e[0]=(...o)=>r.toggleNav&&r.toggleNav(...o)),class:"flex md:hidden"},vp)]),w("ul",{class:ws([r.showMenu?"flex":"hidden","flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 bg-white lg:bg-white md:bg-white sm:bg-[#003368]"])},Ip,2)])]),Ep])])}const Tp=Ms(hp,[["render",xp]]),Sp="/assets/SobreODM-8ea1740b.png",Ia="/assets/CajaODM-b82f9c47.png",Ap="/assets/maleta-4df1ca78.png",Cp={},kp={class:"bg-gray-300 w-full md:w-auto h-auto"},Rp=Wn('<h1 class="text-4xl font-extrabold capitalize px-14 py-14 pl-32"> TIPOS DE ENVÍOS </h1><div class="flex flex-wrap justify-center space-y-8 sm:space-y-0 sm:space-x-8"><div class="flex flex-col w-full max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700"><div class="p-5"><h3 class="text-3xl font-extrabold text-center text-gray-800 dark:text-white pt-7">Sobres</h3><p class="mt-1 text-2xl pt-10 pb-5 text-gray-800 text-center dark:text-gray-400">Hasta un máximo de 25 hojas.</p></div><img class="w-48 h-32 mx-auto mt-5 mb-10" src="'+Sp+'" alt="Image Description"></div><div class="flex flex-col w-full max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700"><div class="p-5"><h3 class="text-3xl font-extrabold text-center text-gray-800 dark:text-white pt-7">Paquetes</h3><p class="mt-1 text-2xl pt-10 pb-5 text-gray-800 text-center dark:text-gray-400">De 0 - 1 Kg.</p></div><img class="w-36 h-32 mx-auto mt-5 mb-10" src="'+Ia+'" alt="Image Description"></div><div class="flex flex-col w-full max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700"><div class="p-5"><h3 class="text-3xl font-extrabold text-center text-gray-800 dark:text-white pt-7">Cajas</h3><p class="mt-1 text-2xl pt-10 pb-5 text-gray-800 text-center dark:text-gray-400"> De 01 - 10 Kg. <br> De 11 - 20 Kg. <br> De 21 - 30 Kg. <br></p></div><img class="w-44 h-36 mx-auto mt-5 mb-10" src="'+Ia+'" alt="Image Description"></div><div class="flex flex-col w-full max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700"><div class="p-5"><h3 class="text-3xl font-extrabold text-center text-gray-800 dark:text-white pt-7">Maletas</h3><p class="mt-1 text-2xl pt-10 pb-5 text-gray-800 text-center dark:text-gray-400"> De 01 - 10 Kg. <br> De 11 - 20 Kg. <br> De 21 - 30 Kg. <br></p></div><img class="w-28 h-40 mx-auto mt-5 mb-10" src="'+Ap+'" alt="Image Description"></div></div><div class="h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl pl-0 pr-0"><p>VOLUMEN MÁXIMO EN TU ENVÍO:</p><p>65 X 50 X 55 = 30cm^3</p></div>',3),Op=[Rp];function Pp(t,e){return ye(),be("div",kp,Op)}const Np=Ms(Cp,[["render",Pp]]),Dp="/assets/caja-0d47acde.png",Mp=w("h1",{class:"text-4xl font-extrabold capitalize xl:px-14 xl:py-14 xl:pl-32 py-10 pl-12"}," CALCULA EL PESO DE TU PAQUETE ",-1),Lp={class:"container mx-auto my-5 w-screen xl:pl-20 xl:pr-20"},Fp={class:"flex flex-col w-auto"},$p=w("div",{class:"flex flex-wrap xl:justify-center ml-4 md:ml-28 pt-10 pb-10"},[w("img",{src:Dp,class:"h-auto max-w-sm",alt:""})],-1),Up={class:"bg-[#D9D9D9] w-full"},Vp=w("h2",{class:"text-3xl ml-4 md:ml-10 font-extrabold px-14 py-1 pt-10 pb-7 text-center"}," Calculadora de peso volumétrico ",-1),jp={class:"container grid-container grid grid-cols-6 my-4 items-center pt-5"},Bp=w("label",{class:"col-span-1 mx-4 md:mx-10 text-gray-700 text-xl font-bold",for:"inline-alto"},"Alto:",-1),Hp=w("span",{class:"col-span-1 mx-4 md:mx-10 text-gray-700 text-xl font-bold"},"cm",-1),qp={class:"container grid-container grid grid-cols-6 my-4 items-center"},zp=w("label",{class:"col-span-1 mx-4 md:mx-10 text-gray-700 text-xl font-bold",for:"inline-ancho"},"Ancho:",-1),Kp=w("span",{class:"col-span-1 mx-4 md:mx-10 text-gray-700 text-xl font-bold"},"cm",-1),Wp={class:"container grid-container grid grid-cols-6 my-4 items-center"},Gp=w("label",{class:"col-span-1 mx-4 md:mx-10 text-gray-700 text-xl font-bold",for:"inline-largo"},"Largo:",-1),Jp=w("span",{class:"col-span-1 mx-4 md:mx-10 text-gray-700 text-xl font-bold"},"cm",-1),Yp={class:"my-4"},Qp={class:"flex items-cener justify-center"},Xp={class:"col-span-1 mx-4 md:mx-10 text-black text-xl font-bold"},Zp=w("div",{class:"xl:h-auto xl:w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl xl:pl-0 xl:pr-0"},[w("p",null,"UTILIZA LA FÓRMULA:"),w("p",null,"(Alto(cm) * Ancho(cm) * Largo(cm))/6000")],-1),eg={__name:"Calculadora",setup(t){const e=fn({largo:0,ancho:0,alto:0}),n=Fe({get:()=>{let r=0;return r=e.value.largo*e.value.ancho*e.value.alto/6e3,r.toFixed(2)},set:r=>{e.value.largo=r,e.value.ancho=r,e.value.alto=r}});return(r,s)=>(ye(),be(Ne,null,[Mp,w("div",Lp,[w("div",Fp,[$p,w("div",Up,[Vp,w("div",jp,[Bp,er(w("input",{class:"col-span-4 border-2 border-gray-200 rounded w-full py-4 px-5 text-gray-700 focus:border-gray-800","onUpdate:modelValue":s[0]||(s[0]=i=>e.value.alto=i),type:"text",name:"inline-alto",placeholder:"Alto"},null,512),[[ei,e.value.alto]]),Hp]),w("div",qp,[zp,er(w("input",{class:"col-span-4 border-2 border-gray-200 rounded w-full py-4 px-5 text-gray-700 focus:border-gray-800","onUpdate:modelValue":s[1]||(s[1]=i=>e.value.ancho=i),type:"text",name:"inline-ancho",placeholder:"Ancho"},null,512),[[ei,e.value.ancho]]),Kp]),w("div",Wp,[Gp,er(w("input",{class:"col-span-4 border-2 border-gray-200 rounded w-full py-4 px-5 text-gray-700 focus:border-gray-800","onUpdate:modelValue":s[2]||(s[2]=i=>e.value.largo=i),type:"text",name:"inline-largo",placeholder:"Largo"},null,512),[[ei,e.value.largo]]),Jp]),w("div",Yp,[w("div",Qp,[w("span",Xp,"Peso: "+ft(ue(n))+" Kg",1)])])])])]),Zp],64))}},tg="/assets/logoblanco-9affbb48.webp",ng={name:"Footer"},rg={class:"bg-[#003368]"},sg=Wn('<div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"><nav class="flex flex-wrap justify-center -mx-5 -my-2"><div class="px-5 py-2"><a href="https://odm.com.mx/quienes-somos2" class="text-base leading-6 text-white hover:text-gray-300"> ¿Quiénes somos? </a></div><div class="px-5 py-2"><a href="https://odm.com.mx/preguntas-frecuentes" class="text-base leading-6 text-white hover:text-gray-300"> Preguntas frecuentes </a></div><div class="px-5 py-2"><a href="http://venta.odm.com.mx/netScripts/request.aspx?APPNAME=Navegante&amp;PRGNAME=AccesoEx&amp;ARGUMENTS=-AAG&amp;_gl=1*z7x1y0*_ga*NjAyODM2MzE2LjE2NzI0MjgyOTU.*_ga_6MKKJY80T1*MTY3OTY3MDk4NC4xMDQuMS4xNjc5NjcyNjE0LjQ5LjAuMA.." class="text-base leading-6 text-white hover:text-gray-300"> Agencias </a></div><div class="px-5 py-2"><a href="https://odm.com.mx/contactanos" class="text-base leading-6 text-white hover:text-gray-300"> Contáctanos </a></div></nav><img src="'+tg+'" alt="Logo" class="w-auto h-auto mx-auto"><div class="flex justify-center mt-8 space-x-6"><a href="#" class="text-white hover:text-gray-500"><span class="sr-only">Facebook</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-white hover:text-gray-500"><span class="sr-only">Twitter</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a><a href="#" class="text-white hover:text-gray-500"><span class="sr-only">Instagram</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg></a><a href="#" class="text-white hover:text-gray-500"><span class="sr-only">YouTube</span><svg aria-hidden="true" fill="currentColor" class="bi bi-youtube w-6 h-6" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></a></div><p class="mt-8 text-base leading-6 text-center text-white hover:text-gray-500"><a href="https://odm.com.mx/aviso-privacidad">Aviso de privacidad | Políticas de viaje</a></p><p class="mt-8 text-base leading-6 text-center text-white hover:text-gray-500"> © 2023 Ómnibus de México. Todos los derechos reservados. </p></div>',1),ig=[sg];function og(t,e,n,r,s,i){return ye(),be("section",rg,ig)}const ag=Ms(ng,[["render",og]]);/**
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
 */const jl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const x=l<<6&192|f;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},lg=function(t){const e=jl(t);return Bl.encodeByteArray(e,!0)},cs=function(t){return lg(t).replace(/\./g,"")},Hl=function(t){try{return Bl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function ql(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fg(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zl(){try{return typeof indexedDB=="object"}catch{return!1}}function Kl(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function hg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function pg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gg=()=>pg().__FIREBASE_DEFAULTS__,mg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hl(t[1]);return e&&JSON.parse(e)},fo=()=>{try{return gg()||mg()||yg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wl=t=>{var e,n;return(n=(e=fo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_g=t=>{const e=Wl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bg=()=>{var t;return(t=fo())===null||t===void 0?void 0:t.config},Gl=t=>{var e;return(e=fo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class vg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[cs(JSON.stringify(n)),cs(JSON.stringify(o)),a].join(".")}/**
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
 */const Ig="FirebaseError";class ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ig,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Eg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ct(s,a,r)}}function Eg(t,e){return t.replace(xg,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xg=/\{\$([^}]+)}/g;function Tg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ea(i)&&Ea(o)){if(!br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ea(t){return t!==null&&typeof t=="object"}/**
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
 */function Rr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sg(t,e){const n=new Ag(t,e);return n.subscribe.bind(n)}class Ag{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Cg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ti),s.error===void 0&&(s.error=ti),s.complete===void 0&&(s.complete=ti);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ti(){}/**
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
 */const kg=1e3,Rg=2,Og=4*60*60*1e3,Pg=.5;function xa(t,e=kg,n=Rg){const r=e*Math.pow(n,t),s=Math.round(Pg*r*(Math.random()-.5)*2);return Math.min(Og,r+s)}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class it{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class Ng{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mg(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dg(t){return t===tn?void 0:t}function Mg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ng(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Fg={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},$g=re.INFO,Ug={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Vg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ug[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ls{constructor(e){this.name=e,this._logLevel=$g,this._logHandler=Vg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const jg=(t,e)=>e.some(n=>t instanceof n);let Ta,Sa;function Bg(){return Ta||(Ta=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hg(){return Sa||(Sa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jl=new WeakMap,Ri=new WeakMap,Yl=new WeakMap,ni=new WeakMap,ho=new WeakMap;function qg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jl.set(n,t)}).catch(()=>{}),ho.set(e,t),e}function zg(t){if(Ri.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ri.set(t,e)}let Oi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ri.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kg(t){Oi=t(Oi)}function Wg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ri(this),e,...n);return Yl.set(r,e.sort?e.sort():[e]),Wt(r)}:Hg().includes(t)?function(...e){return t.apply(ri(this),e),Wt(Jl.get(this))}:function(...e){return Wt(t.apply(ri(this),e))}}function Gg(t){return typeof t=="function"?Wg(t):(t instanceof IDBTransaction&&zg(t),jg(t,Bg())?new Proxy(t,Oi):t)}function Wt(t){if(t instanceof IDBRequest)return qg(t);if(ni.has(t))return ni.get(t);const e=Gg(t);return e!==t&&(ni.set(t,e),ho.set(e,t)),e}const ri=t=>ho.get(t);function Ql(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Wt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Wt(o.result),c.oldVersion,c.newVersion,Wt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Jg=["get","getKey","getAll","getAllKeys","count"],Yg=["put","add","delete","clear"],si=new Map;function Aa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(si.get(e))return si.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Yg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return si.set(e,i),i}Kg(t=>({...t,get:(e,n,r)=>Aa(e,n)||t.get(e,n,r),has:(e,n)=>!!Aa(e,n)||t.has(e,n)}));/**
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
 */class Qg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Xg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pi="@firebase/app",Ca="0.9.0";/**
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
 */const hn=new Ls("@firebase/app"),Zg="@firebase/app-compat",em="@firebase/analytics-compat",tm="@firebase/analytics",nm="@firebase/app-check-compat",rm="@firebase/app-check",sm="@firebase/auth",im="@firebase/auth-compat",om="@firebase/database",am="@firebase/database-compat",cm="@firebase/functions",lm="@firebase/functions-compat",um="@firebase/installations",dm="@firebase/installations-compat",fm="@firebase/messaging",hm="@firebase/messaging-compat",pm="@firebase/performance",gm="@firebase/performance-compat",mm="@firebase/remote-config",ym="@firebase/remote-config-compat",_m="@firebase/storage",bm="@firebase/storage-compat",vm="@firebase/firestore",wm="@firebase/firestore-compat",Im="firebase",Em="9.15.0";/**
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
 */const Ni="[DEFAULT]",xm={[Pi]:"fire-core",[Zg]:"fire-core-compat",[tm]:"fire-analytics",[em]:"fire-analytics-compat",[rm]:"fire-app-check",[nm]:"fire-app-check-compat",[sm]:"fire-auth",[im]:"fire-auth-compat",[om]:"fire-rtdb",[am]:"fire-rtdb-compat",[cm]:"fire-fn",[lm]:"fire-fn-compat",[um]:"fire-iid",[dm]:"fire-iid-compat",[fm]:"fire-fcm",[hm]:"fire-fcm-compat",[pm]:"fire-perf",[gm]:"fire-perf-compat",[mm]:"fire-rc",[ym]:"fire-rc-compat",[_m]:"fire-gcs",[bm]:"fire-gcs-compat",[vm]:"fire-fst",[wm]:"fire-fst-compat","fire-js":"fire-js",[Im]:"fire-js-all"};/**
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
 */const ls=new Map,Di=new Map;function Tm(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bt(t){const e=t.name;if(Di.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;Di.set(e,t);for(const n of ls.values())Tm(n,t);return!0}function vn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Sm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new bn("app","Firebase",Sm);/**
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
 */class Am{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new it("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const Or=Em;function Xl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ni,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Gt.create("bad-app-name",{appName:String(s)});if(n||(n=bg()),!n)throw Gt.create("no-options");const i=ls.get(s);if(i){if(br(n,i.options)&&br(r,i.config))return i;throw Gt.create("duplicate-app",{appName:s})}const o=new Lg(s);for(const c of Di.values())o.addComponent(c);const a=new Am(n,r,o);return ls.set(s,a),a}function po(t=Ni){const e=ls.get(t);if(!e&&t===Ni)return Xl();if(!e)throw Gt.create("no-app",{appName:t});return e}function Ge(t,e,n){var r;let s=(r=xm[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}bt(new it(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Cm="firebase-heartbeat-database",km=1,vr="firebase-heartbeat-store";let ii=null;function Zl(){return ii||(ii=Ql(Cm,km,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vr)}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),ii}async function Rm(t){try{return(await Zl()).transaction(vr).objectStore(vr).get(eu(t))}catch(e){if(e instanceof ct)hn.warn(e.message);else{const n=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(n.message)}}}async function ka(t,e){try{const r=(await Zl()).transaction(vr,"readwrite");return await r.objectStore(vr).put(e,eu(t)),r.done}catch(n){if(n instanceof ct)hn.warn(n.message);else{const r=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(r.message)}}}function eu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Om=1024,Pm=30*24*60*60*1e3;class Nm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ra();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Pm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ra(),{heartbeatsToSend:n,unsentEntries:r}=Dm(this._heartbeatsCache.heartbeats),s=cs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ra(){return new Date().toISOString().substring(0,10)}function Dm(t,e=Om){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Oa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Oa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zl()?Kl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Rm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ka(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ka(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Oa(t){return cs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Lm(t){bt(new it("platform-logger",e=>new Qg(e),"PRIVATE")),bt(new it("heartbeat",e=>new Nm(e),"PRIVATE")),Ge(Pi,Ca,t),Ge(Pi,Ca,"esm2017"),Ge("fire-js","")}Lm("");/**
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
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
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
 */let Gn="9.15.0";/**
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
 */const Fn=new Ls("@firebase/firestore");function us(t,...e){if(Fn.logLevel<=re.DEBUG){const n=e.map(mo);Fn.debug(`Firestore (${Gn}): ${t}`,...n)}}function go(t,...e){if(Fn.logLevel<=re.ERROR){const n=e.map(mo);Fn.error(`Firestore (${Gn}): ${t}`,...n)}}function tu(t,...e){if(Fn.logLevel<=re.WARN){const n=e.map(mo);Fn.warn(`Firestore (${Gn}): ${t}`,...n)}}function mo(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ot(t="Unexpected state"){const e=`FIRESTORE (${Gn}) INTERNAL ASSERTION FAILED: `+t;throw go(e),new Error(e)}function At(t,e){t||ot()}function yo(t,e){return t}/**
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
 */const Pa="ok",Fm="cancelled",rr="unknown",K="invalid-argument",$m="deadline-exceeded",Um="not-found",Vm="permission-denied",Mi="unauthenticated",jm="resource-exhausted",$n="failed-precondition",Bm="aborted",Hm="out-of-range",nu="unimplemented",qm="internal",zm="unavailable";class V extends ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ru{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Km{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class Wm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gm{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(At(typeof e.accessToken=="string"),new ru(e.accessToken,new Le(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Jm{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(At(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class Ym{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s}getToken(){return Promise.resolve(new Jm(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xm{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(At(typeof e.token=="string"),new Qm(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class Zm{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class wr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wr&&e.projectId===this.projectId&&e.database===this.database}}class Ir{constructor(e,n,r){n===void 0?n=0:n>e.length&&ot(),r===void 0?r=e.length-n:r>e.length-n&&ot(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ir.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ir?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends Ir{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(K,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const e0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Ir{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return e0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(K,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new V(K,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(K,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new V(K,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class $e{constructor(e){this.path=e}static fromPath(e){return new $e(Ae.fromString(e))}static fromName(e){return new $e(Ae.fromString(e).popFirst(5))}static empty(){return new $e(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $e(new Ae(e.slice()))}}/**
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
 */function t0(t,e,n){if(!n)throw new V(K,`Function ${t}() cannot be called with an empty ${e}.`)}function Na(t){if($e.isDocumentKey(t))throw new V(K,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fs(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ot()}function su(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(K,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fs(t);throw new V(K,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function n0(t){return t==null}function ds(t){return t===0&&1/t==-1/0}/**
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
 */const r0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Da,Q;function Ma(t){if(t===void 0)return go("RPC_ERROR","HTTP error has no status"),rr;switch(t){case 200:return Pa;case 400:return $n;case 401:return Mi;case 403:return Vm;case 404:return Um;case 409:return Bm;case 416:return Hm;case 429:return jm;case 499:return Fm;case 500:return rr;case 501:return nu;case 503:return zm;case 504:return $m;default:return t>=200&&t<300?Pa:t>=400&&t<500?$n:t>=500&&t<600?qm:rr}}/**
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
 */(Q=Da||(Da={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";class s0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(e,n,r,s,i){const o=this.T(e,n);us("RestConnection","Sending: ",o,r);const a={};return this.A(a,s,i),this.R(e,o,a,r).then(c=>(us("RestConnection","Received: ",c),c),c=>{throw tu("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}P(e,n,r,s,i,o){return this.I(e,n,r,s,i)}A(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}T(e,n){const r=r0[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.V=n}$(e,n){throw new Error("Not supported by FetchConnection")}async R(e,n,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.V(n,{method:"POST",headers:r,body:o})}catch(c){const l=c;throw new V(Ma(l.status),"Request failed with error: "+l.statusText)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const l=(i=c==null?void 0:c.error)===null||i===void 0?void 0:i.message;throw new V(Ma(a.status),`Request failed with error: ${l??a.statusText}`)}return a.json()}}function xe(t,e){return t<e?-1:t>e?1:0}function i0(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */function La(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ct(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const o0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pn(t){if(At(!!t),typeof t=="string"){let e=0;const n=o0.exec(t);if(At(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(K,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(K,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(K,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(K,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function iu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ou(t){const e=t.mapValue.fields.__previous_value__;return iu(e)?ou(e):e}function xr(t){const e=pn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */const Hr={fields:{__type__:{stringValue:"__max__"}}};function gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?iu(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:ot()}function fs(t,e){if(t===e)return!0;const n=gn(t);if(n!==gn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xr(t).isEqual(xr(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=pn(r.timestampValue),o=pn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Er(r.bytesValue).isEqual(Er(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return ve(r.geoPointValue.latitude)===ve(s.geoPointValue.latitude)&&ve(r.geoPointValue.longitude)===ve(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ve(r.integerValue)===ve(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=ve(r.doubleValue),o=ve(s.doubleValue);return i===o?ds(i)===ds(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return i0(t.arrayValue.values||[],e.arrayValue.values||[],fs);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(La(i)!==La(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!fs(i[a],o[a])))return!1;return!0}(t,e);default:return ot()}}function Tr(t,e){return(t.values||[]).find(n=>fs(n,e))!==void 0}function hs(t,e){if(t===e)return 0;const n=gn(t),r=gn(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=ve(s.integerValue||s.doubleValue),a=ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Fa(t.timestampValue,e.timestampValue);case 4:return Fa(xr(t),xr(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Er(s),a=Er(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=xe(o[c],a[c]);if(l!==0)return l}return xe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=xe(ve(s.latitude),ve(i.latitude));return o!==0?o:xe(ve(s.longitude),ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=hs(o[c],a[c]);if(l)return l}return xe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Hr&&i===Hr)return 0;if(s===Hr)return 1;if(i===Hr)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=xe(a[u],l[u]);if(f!==0)return f;const p=hs(o[a[u]],c[l[u]]);if(p!==0)return p}return xe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ot()}}function Fa(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=pn(t),r=pn(e),s=xe(n.seconds,r.seconds);return s!==0?s:xe(n.nanos,r.nanos)}function $a(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function au(t){return!!t&&"arrayValue"in t}function Ua(t){return!!t&&"nullValue"in t}function Va(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oi(t){return!!t&&"mapValue"in t}function sr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $s(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=sr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=sr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class ja{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class cu{}class lt extends cu{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new a0(e,n,r):n==="array-contains"?new u0(e,r):n==="in"?new d0(e,r):n==="not-in"?new f0(e,r):n==="array-contains-any"?new h0(e,r):new lt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new c0(e,r):new l0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hs(n,this.value)):n!==null&&gn(this.value)===gn(n)&&this.matchesComparison(hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ot()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pr extends cu{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Pr(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(n=>n.isInequality());return e!==null?e.field:null}F(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class a0 extends lt{constructor(e,n,r){super(e,n,r),this.key=$e.fromName(r.referenceValue)}matches(e){const n=$e.comparator(e.key,this.key);return this.matchesComparison(n)}}class c0 extends lt{constructor(e,n){super(e,"in",n),this.keys=lu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class l0 extends lt{constructor(e,n){super(e,"not-in",n),this.keys=lu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$e.fromName(r.referenceValue))}class u0 extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return au(n)&&Tr(n.arrayValue,this.value)}}class d0 extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tr(this.value.arrayValue,n)}}class f0 extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Tr(this.value.arrayValue,n)}}class h0 extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!au(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Tr(this.value.arrayValue,r))}}/**
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
 */class Qr{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class Se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Se(e)}static min(){return new Se(new He(0,0))}static max(){return new Se(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=sr(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=sr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());oi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fs(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];oi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){$s(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(sr(this.value))}}/**
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
 */class Ft{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ft(e,0,Se.min(),Se.min(),Se.min(),Et.empty(),0)}static newFoundDocument(e,n,r,s){return new Ft(e,1,n,Se.min(),r,s,0)}static newNoDocument(e,n){return new Ft(e,2,n,Se.min(),Se.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new Ft(e,3,n,Se.min(),Se.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class p0{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.S=null}}function Ba(t,e=null,n=[],r=[],s=null,i=null,o=null){return new p0(t,e,n,r,s,i,o)}/**
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
 */class uu{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.q=null,this.O=null,this.startAt,this.endAt}}function du(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function _o(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function g0(t){return t.collectionGroup!==null}function Ha(t){const e=yo(t);if(e.q===null){e.q=[];const n=_o(e),r=du(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new Qr(n)),e.q.push(new Qr(tt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new Qr(tt.keyField(),i))}}}return e.q}function m0(t){const e=yo(t);if(!e.O)if(e.limitType==="F")e.O=Ba(e.path,e.collectionGroup,Ha(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ha(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Qr(i.field,o))}const r=e.endAt?new ja(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ja(e.startAt.position,e.startAt.inclusive):null;e.O=Ba(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}function Li(t,e){e.getFirstInequalityField(),_o(t);const n=t.filters.concat([e]);return new uu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
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
 */function y0(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!ds(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.k){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ds(r)?"-0":r}}(t,e)}/**
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
 */const _0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),b0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),v0=(()=>({and:"AND",or:"OR"}))();class w0{constructor(e,n){this.databaseId=e,this.k=n}}function qa(t,e){return t.k?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function I0(t,e){return t.k?e.toBase64():e.toUint8Array()}function za(t){return At(!!t),Se.fromTimestamp(function(e){const n=pn(e);return new He(n.seconds,n.nanos)}(t))}function fu(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function E0(t,e){const n=function(s){const i=Ae.fromString(s);return At(pu(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new V(K,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(K,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $e((At((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Ka(t,e){return fu(t.databaseId,e)}function x0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ka(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ka(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return hu(Pr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Tn(u.field),direction:T0(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.k||n0(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function T0(t){return _0[t]}function S0(t){return b0[t]}function A0(t){return v0[t]}function Tn(t){return{fieldPath:t.canonicalString()}}function hu(t){return t instanceof lt?function(e){if(e.op==="=="){if(Va(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NAN"}};if(Ua(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Va(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NOT_NAN"}};if(Ua(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(e.field),op:S0(e.op),value:e.value}}}(t):t instanceof Pr?function(e){const n=e.getFilters().map(r=>hu(r));return n.length===1?n[0]:{compositeFilter:{op:A0(e.op),filters:n}}}(t):ot()}function pu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function bo(t){return new w0(t,!0)}/**
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
 */class C0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.C=s,this.Z=!1}tt(){if(this.Z)throw new V($n,"The client has already been terminated.")}I(e,n,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.I(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Mi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(rr,s.toString())})}P(e,n,r,s){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.P(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Mi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(rr,i.toString())})}terminate(){this.Z=!0}}async function k0(t,e){const n=yo(t),r=x0(n.C,m0(e));return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const c=E0(i,o.name),l=za(o.updateTime),u=o.createTime?za(o.createTime):Se.min(),f=new Et({mapValue:{fields:o.fields}}),p=Ft.newFoundDocument(c,l,u,f);return a&&p.setHasCommittedMutations(),a?p.setHasCommittedMutations():p}(n.C,s.document,void 0))}/**
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
 */const ir=new Map;function R0(t){if(t._terminated)throw new V($n,"The client has already been terminated.");if(!ir.has(t)){us("ComponentProvider","Initializing Datastore");const i=function(c){return new s0(c,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new Zm(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=bo(t._databaseId),a=function(c,l,u,f){return new C0(c,l,u,f)}(t._authCredentials,t._appCheckCredentials,i,o);ir.set(t,a)}var e,n,r,s;/**
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
*/return ir.get(t)}class Wa{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(K,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(K,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new V(K,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class vo{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V($n,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V($n,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wa(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Km;switch(n.type){case"gapi":const r=n.client;return new Ym(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(K,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ir.get(e);n&&(us("ComponentProvider","Removing Datastore"),ir.delete(e),n.terminate())}(this),Promise.resolve()}}function O0(t,e){const n=typeof t=="object"?t:po(),r=typeof t=="string"?t:e||"(default)",s=vn(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=_g("firestore");i&&P0(s,...i)}return s}function P0(t,e,n,r={}){var s;const i=(t=su(t,vo))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&tu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Le.MOCK_USER;else{o=wg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new V(K,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Le(c)}t._authCredentials=new Wm(new ru(o,a))}}/**
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
 */class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Jn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jn(this.firestore,e,this._query)}}class On extends Jn{constructor(e,n,r){super(e,n,new uu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new $e(e))}withConverter(e){return new On(this.firestore,e,this._path)}}function Ga(t,e,...n){if(t=Ye(t),t0("collection","path",e),t instanceof vo){const r=Ae.fromString(e,...n);return Na(r),new On(t,null,r)}{if(!(t instanceof Pt||t instanceof On))throw new V(K,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Na(r),new On(t.firestore,null,r)}}/**
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
 */class Un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Un(Ct.fromBase64String(e))}catch(n){throw new V(K,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Un(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(K,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mu{constructor(e){this._methodName=e}}/**
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
 */class wo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(K,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(K,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */const N0=/^__.*__$/;function yu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ot()}}class Io{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.C=r,this.ignoreUndefinedProperties=s,i===void 0&&this.et(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get nt(){return this.settings.nt}rt(e){return new Io(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}st(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.ot(e),s}ut(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.et(),s}ct(e){return this.rt({path:void 0,it:!0})}at(e){return Fi(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}et(){if(this.path)for(let e=0;e<this.path.length;e++)this.ot(this.path.get(e))}ot(e){if(e.length===0)throw this.at("Document fields must not be empty");if(yu(this.nt)&&N0.test(e))throw this.at('Document fields cannot begin and end with "__"')}}class D0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.C=r||bo(e)}ft(e,n,r,s=!1){return new Io({nt:e,methodName:n,lt:r,path:tt.emptyPath(),it:!1,ht:s},this.databaseId,this.C,this.ignoreUndefinedProperties)}}function M0(t){const e=t._freezeSettings(),n=bo(t._databaseId);return new D0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function L0(t,e,n,r=!1){return Eo(n,t.ft(r?4:3,e))}function Eo(t,e){if(_u(t=Ye(t)))return $0("Unsupported field value:",e,t),F0(t,e);if(t instanceof mu)return function(n,r){if(!yu(r.nt))throw r.at(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.at(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.nt!==4)throw e.at("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Eo(o,r.ct(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return y0(r.C,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=He.fromDate(n);return{timestampValue:qa(r.C,s)}}if(n instanceof He){const s=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:qa(r.C,s)}}if(n instanceof wo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Un)return{bytesValue:I0(r.C,n._byteString)};if(n instanceof Pt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.at(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:fu(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.at(`Unsupported field value: ${Fs(n)}`)}(t,e)}function F0(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(t,(r,s)=>{const i=Eo(s,e.st(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _u(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof wo||t instanceof Un||t instanceof Pt||t instanceof mu)}function $0(t,e,n){if(!_u(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Fs(n);throw r==="an object"?e.at(t+" a custom object"):e.at(t+" "+r)}}const U0=new RegExp("[~\\*/\\[\\]]");function V0(t,e,n){if(e.search(U0)>=0)throw Fi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gu(...e.split("."))._internalPath}catch{throw Fi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fi(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new V(K,a+t+c)}/**
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
 */class j0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bu extends j0{data(){return super.data()}}class B0{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function vu(t,e){return typeof e=="string"?V0(t,e):e instanceof gu?e._internalPath:e._delegate._internalPath}/**
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
 */class xo{}class H0 extends xo{}function Ja(t,e,...n){let r=[];e instanceof xo&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof To).length,o=s.filter(a=>a instanceof Us).length;if(i>1||i>0&&o>0)throw new V(K,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Us extends H0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Us(e,n,r)}_apply(e){const n=this._parse(e);return wu(e._query,n),new Jn(e.firestore,e.converter,Li(e._query,n))}_parse(e){const n=M0(e.firestore);return function(s,i,o,a,c,l,u){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new V(K,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Qa(u,l);const p=[];for(const m of u)p.push(Ya(a,s,m));f={arrayValue:{values:p}}}else f=Ya(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Qa(u,l),f=L0(o,i,u,l==="in"||l==="not-in");return lt.create(c,l,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function q0(t,e,n){const r=e,s=vu("where",t);return Us._create(s,r,n)}class To extends xo{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new To(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)wu(i,a),i=Li(i,a)}(e._query,n),new Jn(e.firestore,e.converter,Li(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ya(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new V(K,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!g0(e)&&n.indexOf("/")!==-1)throw new V(K,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ae.fromString(n));if(!$e.isDocumentKey(r))throw new V(K,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $a(t,new $e(r))}if(n instanceof Pt)return $a(t,n._key);throw new V(K,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fs(n)}.`)}function Qa(t,e){if(!Array.isArray(t)||t.length===0)throw new V(K,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new V(K,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function wu(t,e){if(e.isInequality()){const r=_o(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new V(K,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=du(t);i!==null&&z0(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(K,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(K,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function z0(t,e,n){if(!n.isEqual(e))throw new V(K,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class K0 extends class{convertValue(e,n="none"){switch(gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ot()}}convertObject(e,n){const r={};return $s(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new wo(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ou(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xr(e));default:return null}}convertTimestamp(e){const n=pn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);At(pu(r));const s=new wr(r.get(1),r.get(3)),i=new $e(r.popFirst(5));return s.isEqual(n)||go(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function Xa(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new V(nu,"limitToLast() queries require specifying at least one orderBy() clause")})((t=su(t,Jn))._query);const e=R0(t.firestore),n=new K0(t.firestore);return k0(e,t._query).then(r=>{const s=r.map(i=>new bu(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new B0(t,s)})}(function(t){Gn=t})(`${Or}_lite`),bt(new it("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new vo(new Gm(t.getProvider("auth-internal")),new Xm(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new V(K,'"projectId" not provided in firebase.initializeApp.');return new wr(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),Ge("firestore-lite","3.8.0",""),Ge("firestore-lite","3.8.0","esm2017");var W0=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Iu;const Vs=t=>Iu=t,Eu=Symbol();function $i(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var or;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(or||(or={}));function G0(){const t=Gc(!0),e=t.run(()=>fn({}));let n=[],r=[];const s=Mn({install(i){Vs(s),s._a=i,i.provide(Eu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!W0?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const xu=()=>{};function Za(t,e,n,r=xu){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Qd()&&Xd(s),s}function En(t,...e){t.slice().forEach(n=>{n(...e)})}function Ui(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];$i(s)&&$i(r)&&t.hasOwnProperty(n)&&!he(r)&&!zt(r)?t[n]=Ui(s,r):t[n]=r}return t}const J0=Symbol();function Y0(t){return!$i(t)||!t.hasOwnProperty(J0)}const{assign:$t}=Object;function Q0(t){return!!(he(t)&&t.effect)}function X0(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=kf(n.state.value[t]);return $t(u,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=Mn(Fe(()=>{Vs(n);const m=n._s.get(t);return o[p].call(m,m)})),f),{}))}return c=Tu(t,l,e,n,r,!0),c.$reset=function(){const f=s?s():{};this.$patch(p=>{$t(p,f)})},c}function Tu(t,e,n={},r,s,i){let o;const a=$t({actions:{}},n),c={deep:!0};let l,u,f=Mn([]),p=Mn([]),m;const x=r.state.value[t];!i&&!x&&(r.state.value[t]={}),fn({});let S;function F(z){let O;l=u=!1,typeof z=="function"?(z(r.state.value[t]),O={type:or.patchFunction,storeId:t,events:m}):(Ui(r.state.value[t],z),O={type:or.patchObject,payload:z,storeId:t,events:m});const Y=S=Symbol();io().then(()=>{S===Y&&(l=!0)}),u=!0,En(f,O,r.state.value[t])}const R=xu;function $(){o.stop(),f=[],p=[],r._s.delete(t)}function P(z,O){return function(){Vs(r);const Y=Array.from(arguments),X=[],pe=[];function Ie(Ee){X.push(Ee)}function Ue(Ee){pe.push(Ee)}En(p,{args:Y,name:z,store:W,after:Ie,onError:Ue});let Oe;try{Oe=O.apply(this&&this.$id===t?this:W,Y)}catch(Ee){throw En(pe,Ee),Ee}return Oe instanceof Promise?Oe.then(Ee=>(En(X,Ee),Ee)).catch(Ee=>(En(pe,Ee),Promise.reject(Ee))):(En(X,Oe),Oe)}}const q={_p:r,$id:t,$onAction:Za.bind(null,p),$patch:F,$reset:R,$subscribe(z,O={}){const Y=Za(f,z,O.detached,()=>X()),X=o.run(()=>Zn(()=>r.state.value[t],pe=>{(O.flush==="sync"?u:l)&&z({storeId:t,type:or.direct,events:m},pe)},$t({},c,O)));return Y},$dispose:$},W=Kn(q);r._s.set(t,W);const oe=r._e.run(()=>(o=Gc(),o.run(()=>e())));for(const z in oe){const O=oe[z];if(he(O)&&!Q0(O)||zt(O))i||(x&&Y0(O)&&(he(O)?O.value=x[z]:Ui(O,x[z])),r.state.value[t][z]=O);else if(typeof O=="function"){const Y=P(z,O);oe[z]=Y,a.actions[z]=O}}return $t(W,oe),$t(te(W),oe),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:z=>{F(O=>{$t(O,z)})}}),r._p.forEach(z=>{$t(W,o.run(()=>z({store:W,app:r._a,pinia:r,options:a})))}),x&&i&&n.hydrate&&n.hydrate(W.$state,x),l=!0,u=!0,W}function Z0(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Fl();return a=a||l&&gt(Eu,null),a&&Vs(a),a=Iu,a._s.has(r)||(i?Tu(r,e,s,a):X0(r,s,a)),a._s.get(r)}return o.$id=r,o}var ey="firebase",ty="9.15.0";/**
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
 */Ge(ey,ty,"app");const Su="@firebase/installations",So="0.6.0";/**
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
 */const Au=1e4,Cu=`w:${So}`,ku="FIS_v2",ny="https://firebaseinstallations.googleapis.com/v1",ry=60*60*1e3,sy="installations",iy="Installations";/**
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
 */const oy={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},mn=new bn(sy,iy,oy);function Ru(t){return t instanceof ct&&t.code.includes("request-failed")}/**
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
 */function Ou({projectId:t}){return`${ny}/projects/${t}/installations`}function Pu(t){return{token:t.token,requestStatus:2,expiresIn:cy(t.expiresIn),creationTime:Date.now()}}async function Nu(t,e){const r=(await e.json()).error;return mn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Du({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ay(t,{refreshToken:e}){const n=Du(t);return n.append("Authorization",ly(e)),n}async function Mu(t){const e=await t();return e.status>=500&&e.status<600?t():e}function cy(t){return Number(t.replace("s","000"))}function ly(t){return`${ku} ${t}`}/**
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
 */async function uy({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ou(t),s=Du(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:ku,appId:t.appId,sdkVersion:Cu},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Mu(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Pu(l.authToken)}}else throw await Nu("Create Installation",c)}/**
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
 */function Lu(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function dy(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fy=/^[cdef][\w-]{21}$/,Vi="";function hy(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=py(t);return fy.test(n)?n:Vi}catch{return Vi}}function py(t){return dy(t).substr(0,22)}/**
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
 */function js(t){return`${t.appName}!${t.appId}`}/**
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
 */const Fu=new Map;function $u(t,e){const n=js(t);Uu(n,e),gy(n,e)}function Uu(t,e){const n=Fu.get(t);if(n)for(const r of n)r(e)}function gy(t,e){const n=my();n&&n.postMessage({key:t,fid:e}),yy()}let cn=null;function my(){return!cn&&"BroadcastChannel"in self&&(cn=new BroadcastChannel("[Firebase] FID Change"),cn.onmessage=t=>{Uu(t.data.key,t.data.fid)}),cn}function yy(){Fu.size===0&&cn&&(cn.close(),cn=null)}/**
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
 */const _y="firebase-installations-database",by=1,yn="firebase-installations-store";let ai=null;function Ao(){return ai||(ai=Ql(_y,by,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yn)}}})),ai}async function ps(t,e){const n=js(t),s=(await Ao()).transaction(yn,"readwrite"),i=s.objectStore(yn),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&$u(t,e.fid),e}async function Vu(t){const e=js(t),r=(await Ao()).transaction(yn,"readwrite");await r.objectStore(yn).delete(e),await r.done}async function Bs(t,e){const n=js(t),s=(await Ao()).transaction(yn,"readwrite"),i=s.objectStore(yn),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&$u(t,a.fid),a}/**
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
 */async function Co(t){let e;const n=await Bs(t.appConfig,r=>{const s=vy(r),i=wy(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Vi?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function vy(t){const e=t||{fid:hy(),registrationStatus:0};return ju(e)}function wy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(mn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Iy(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ey(t)}:{installationEntry:e}}async function Iy(t,e){try{const n=await uy(t,e);return ps(t.appConfig,n)}catch(n){throw Ru(n)&&n.customData.serverCode===409?await Vu(t.appConfig):await ps(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ey(t){let e=await ec(t.appConfig);for(;e.registrationStatus===1;)await Lu(100),e=await ec(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Co(t);return r||n}return e}function ec(t){return Bs(t,e=>{if(!e)throw mn.create("installation-not-found");return ju(e)})}function ju(t){return xy(t)?{fid:t.fid,registrationStatus:0}:t}function xy(t){return t.registrationStatus===1&&t.registrationTime+Au<Date.now()}/**
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
 */async function Ty({appConfig:t,heartbeatServiceProvider:e},n){const r=Sy(t,n),s=ay(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Cu,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Mu(()=>fetch(r,a));if(c.ok){const l=await c.json();return Pu(l)}else throw await Nu("Generate Auth Token",c)}function Sy(t,{fid:e}){return`${Ou(t)}/${e}/authTokens:generate`}/**
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
 */async function ko(t,e=!1){let n;const r=await Bs(t.appConfig,i=>{if(!Bu(i))throw mn.create("not-registered");const o=i.authToken;if(!e&&ky(o))return i;if(o.requestStatus===1)return n=Ay(t,e),i;{if(!navigator.onLine)throw mn.create("app-offline");const a=Oy(i);return n=Cy(t,a),a}});return n?await n:r.authToken}async function Ay(t,e){let n=await tc(t.appConfig);for(;n.authToken.requestStatus===1;)await Lu(100),n=await tc(t.appConfig);const r=n.authToken;return r.requestStatus===0?ko(t,e):r}function tc(t){return Bs(t,e=>{if(!Bu(e))throw mn.create("not-registered");const n=e.authToken;return Py(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Cy(t,e){try{const n=await Ty(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ps(t.appConfig,r),n}catch(n){if(Ru(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Vu(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ps(t.appConfig,r)}throw n}}function Bu(t){return t!==void 0&&t.registrationStatus===2}function ky(t){return t.requestStatus===2&&!Ry(t)}function Ry(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ry}function Oy(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Py(t){return t.requestStatus===1&&t.requestTime+Au<Date.now()}/**
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
 */async function Ny(t){const e=t,{installationEntry:n,registrationPromise:r}=await Co(e);return r?r.catch(console.error):ko(e).catch(console.error),n.fid}/**
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
 */async function Dy(t,e=!1){const n=t;return await My(n),(await ko(n,e)).token}async function My(t){const{registrationPromise:e}=await Co(t);e&&await e}/**
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
 */function Ly(t){if(!t||!t.options)throw ci("App Configuration");if(!t.name)throw ci("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ci(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ci(t){return mn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Hu="installations",Fy="installations-internal",$y=t=>{const e=t.getProvider("app").getImmediate(),n=Ly(e),r=vn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Uy=t=>{const e=t.getProvider("app").getImmediate(),n=vn(e,Hu).getImmediate();return{getId:()=>Ny(n),getToken:s=>Dy(n,s)}};function Vy(){bt(new it(Hu,$y,"PUBLIC")),bt(new it(Fy,Uy,"PRIVATE"))}Vy();Ge(Su,So);Ge(Su,So,"esm2017");/**
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
 */const gs="analytics",jy="firebase_id",By="origin",Hy=60*1e3,qy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",qu="https://www.googletagmanager.com/gtag/js";/**
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
 */const qe=new Ls("@firebase/analytics");/**
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
 */function zu(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function zy(t,e){const n=document.createElement("script");n.src=`${qu}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Ky(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Wy(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await zu(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){qe.error(a)}t("config",s,i)}async function Gy(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await zu(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){qe.error(i)}}function Jy(t,e,n,r){async function s(i,o,a){try{i==="event"?await Gy(t,e,n,o,a):i==="config"?await Wy(t,e,n,r,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){qe.error(c)}}return s}function Yy(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Jy(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function Qy(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(qu)&&n.src.includes(t))return n;return null}/**
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
 */const Xy={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Je=new bn("analytics","Analytics",Xy);/**
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
 */const Zy=30,e_=1e3;class t_{constructor(e={},n=e_){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ku=new t_;function n_(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function r_(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:n_(r)},i=qy.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Je.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function s_(t,e=Ku,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Je.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Je.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new a_;return setTimeout(async()=>{a.abort()},n!==void 0?n:Hy),Wu({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Wu(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Ku){var i;const{appId:o,measurementId:a}=t;try{await i_(r,e)}catch(c){if(a)return qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await r_(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!o_(l)){if(s.deleteThrottleMetadata(o),a)return qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?xa(n,s.intervalMillis,Zy):xa(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,f),qe.debug(`Calling attemptFetch again in ${u} millis`),Wu(t,f,r,s)}}function i_(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Je.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function o_(t){if(!(t instanceof ct)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class a_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function c_(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function l_(){if(zl())try{await Kl()}catch(t){return qe.warn(Je.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return qe.warn(Je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function u_(t,e,n,r,s,i,o){var a;const c=s_(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&qe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>qe.error(m)),e.push(c);const l=l_().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([c,l]);Qy(i)||zy(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[By]="firebase",p.update=!0,f!=null&&(p[jy]=f),s("config",u.measurementId,p),u.measurementId}/**
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
 */class d_{constructor(e){this.app=e}_delete(){return delete ar[this.app.options.appId],Promise.resolve()}}let ar={},nc=[];const rc={};let li="dataLayer",f_="gtag",sc,Gu,ic=!1;function h_(){const t=[];if(ql()&&t.push("This is a browser extension environment."),hg()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Je.create("invalid-analytics-context",{errorInfo:e});qe.warn(n.message)}}function p_(t,e,n){h_();const r=t.options.appId;if(!r)throw Je.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Je.create("no-api-key");if(ar[r]!=null)throw Je.create("already-exists",{id:r});if(!ic){Ky(li);const{wrappedGtag:i,gtagCore:o}=Yy(ar,nc,rc,li,f_);Gu=i,sc=o,ic=!0}return ar[r]=u_(t,nc,rc,e,sc,li,n),new d_(t)}function g_(t=po()){t=Ye(t);const e=vn(t,gs);return e.isInitialized()?e.getImmediate():m_(t)}function m_(t,e={}){const n=vn(t,gs);if(n.isInitialized()){const s=n.getImmediate();if(br(e,n.getOptions()))return s;throw Je.create("already-initialized")}return n.initialize({options:e})}function y_(t,e,n,r){t=Ye(t),c_(Gu,ar[t.app.options.appId],e,n,r).catch(s=>qe.error(s))}const oc="@firebase/analytics",ac="0.9.0";function __(){bt(new it(gs,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return p_(r,s,n)},"PUBLIC")),bt(new it("analytics-internal",t,"PRIVATE")),Ge(oc,ac),Ge(oc,ac,"esm2017");function t(e){try{const n=e.getProvider(gs).getImmediate();return{logEvent:(r,s,i)=>y_(n,r,s,i)}}catch(n){throw Je.create("interop-component-reg-failed",{reason:n})}}}__();function Ro(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ju(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b_=Ju,Yu=new bn("auth","Firebase",Ju());/**
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
 */const cc=new Ls("@firebase/auth");function Xr(t,...e){cc.logLevel<=re.ERROR&&cc.error(`Auth (${Or}): ${t}`,...e)}/**
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
 */function kt(t,...e){throw Oo(t,...e)}function mt(t,...e){return Oo(t,...e)}function v_(t,e,n){const r=Object.assign(Object.assign({},b_()),{[e]:n});return new bn("auth","Firebase",r).create(e,{appName:t.name})}function Oo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yu.create(t,...e)}function j(t,e,...n){if(!t)throw Oo(e,...n)}function xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xr(e),new Error(e)}function Rt(t,e){t||xt(e)}/**
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
 */const lc=new Map;function Tt(t){Rt(t instanceof Function,"Expected a class definition");let e=lc.get(t);return e?(Rt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lc.set(t,e),e)}/**
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
 */function w_(t,e){const n=vn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(br(i,e??{}))return s;kt(s,"already-initialized")}return n.initialize({options:e})}function I_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ji(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function E_(){return uc()==="http:"||uc()==="https:"}function uc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function x_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E_()||ql()||"connection"in navigator)?navigator.onLine:!0}function T_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rt(n>e,"Short delay should be less than long delay!"),this.isMobile=ug()||dg()}get(){return x_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Po(t,e){Rt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Qu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const S_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const A_=new Nr(3e4,6e4);function C_(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hs(t,e,n,r,s={}){return Xu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Rr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Qu.fetch()(Zu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Xu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},S_),e);try{const s=new R_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw qr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw qr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw v_(t,u,l);kt(t,u)}}catch(s){if(s instanceof ct)throw s;kt(t,"network-request-failed")}}async function k_(t,e,n,r,s={}){const i=await Hs(t,e,n,r,s);return"mfaPendingCredential"in i&&kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Zu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Po(t.config,s):`${t.config.apiScheme}://${s}`}class R_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),A_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=mt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function O_(t,e){return Hs(t,"POST","/v1/accounts:delete",e)}async function P_(t,e){return Hs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function N_(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=No(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:cr(ui(s.auth_time)),issuedAtTime:cr(ui(s.iat)),expirationTime:cr(ui(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ui(t){return Number(t)*1e3}function No(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hl(n);return s?JSON.parse(s):(Xr("Failed to decode base64 JWT payload"),null)}catch(s){return Xr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function D_(t){const e=No(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Sr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ct&&M_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function M_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class L_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ed{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cr(this.lastLoginAt),this.creationTime=cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ms(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Sr(t,P_(n,{idToken:r}));j(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?U_(i.providerUserInfo):[],a=$_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ed(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function F_(t){const e=Ye(t);await ms(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function U_(t){return t.map(e=>{var{providerId:n}=e,r=Ro(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function V_(t,e){const n=await Xu(t,{},async()=>{const r=Rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Zu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):D_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await V_(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ar;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
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
 */function Dt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ro(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new L_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ed(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Sr(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return N_(this,e)}reload(){return F_(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ms(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Sr(this,O_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,$=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:q,isAnonymous:W,providerData:oe,stsTokenManager:z}=n;j(P&&z,e,"internal-error");const O=Ar.fromJSON(this.name,z);j(typeof P=="string",e,"internal-error"),Dt(f,e.name),Dt(p,e.name),j(typeof q=="boolean",e,"internal-error"),j(typeof W=="boolean",e,"internal-error"),Dt(m,e.name),Dt(x,e.name),Dt(S,e.name),Dt(F,e.name),Dt(R,e.name),Dt($,e.name);const Y=new dn({uid:P,auth:e,email:p,emailVerified:q,displayName:f,isAnonymous:W,photoURL:x,phoneNumber:m,tenantId:S,stsTokenManager:O,createdAt:R,lastLoginAt:$});return oe&&Array.isArray(oe)&&(Y.providerData=oe.map(X=>Object.assign({},X))),F&&(Y._redirectEventId=F),Y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ar;s.updateFromServerResponse(n);const i=new dn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ms(i),i}}/**
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
 */class td{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}td.type="NONE";const dc=td;/**
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
 */function Zr(t,e,n){return`firebase:${t}:${e}:${n}`}class Pn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Zr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Zr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pn(Tt(dc),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Tt(dc);const o=Zr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=dn._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Pn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Pn(i,e,r))}}/**
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
 */function fc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(od(e))return"Blackberry";if(ad(e))return"Webos";if(Do(e))return"Safari";if((e.includes("chrome/")||rd(e))&&!e.includes("edge/"))return"Chrome";if(id(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nd(t=Re()){return/firefox\//i.test(t)}function Do(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rd(t=Re()){return/crios\//i.test(t)}function sd(t=Re()){return/iemobile/i.test(t)}function id(t=Re()){return/android/i.test(t)}function od(t=Re()){return/blackberry/i.test(t)}function ad(t=Re()){return/webos/i.test(t)}function qs(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function j_(t=Re()){var e;return qs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function B_(){return fg()&&document.documentMode===10}function cd(t=Re()){return qs(t)||id(t)||ad(t)||od(t)||/windows phone/i.test(t)||sd(t)}function H_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ld(t,e=[]){let n;switch(t){case"Browser":n=fc(Re());break;case"Worker":n=`${fc(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${r}`}/**
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
 */class q_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class z_{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hc(this),this.idTokenSubscription=new hc(this),this.beforeStateQueue=new q_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ms(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ld(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Mo(t){return Ye(t)}class hc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sg(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function K_(t,e,n){const r=Mo(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ud(e),{host:o,port:a}=W_(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||G_()}function ud(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function W_(t){const e=ud(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:pc(o)}}}function pc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function G_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class dd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,n){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}/**
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
 */async function Nn(t,e){return k_(t,"POST","/v1/accounts:signInWithIdp",C_(t,e))}/**
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
 */const J_="http://localhost";class _n extends dd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ro(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _n(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nn(e,n)}buildRequest(){const e={requestUri:J_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rr(n)}return e}}/**
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
 */class fd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Dr extends fd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vt extends Dr{constructor(){super("facebook.com")}static credential(e){return _n._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
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
 */class jt extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _n._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
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
 */class Bt extends Dr{constructor(){super("github.com")}static credential(e){return _n._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
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
 */class Ht extends Dr{constructor(){super("twitter.com")}static credential(e,n){return _n._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */class Vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await dn._fromIdTokenResponse(e,r,s),o=gc(r);return new Vn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=gc(r);return new Vn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function gc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ys extends ct{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ys.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ys(e,n,r,s)}}function hd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ys._fromErrorAndOperation(t,i,e,r):i})}async function Y_(t,e,n=!1){const r=await Sr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vn._forOperation(t,"link",r)}/**
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
 */async function Q_(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Sr(t,hd(r,s,e,t),n);j(i.idToken,r,"internal-error");const o=No(i.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),Vn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),i}}/**
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
 */async function X_(t,e,n=!1){const r="signIn",s=await hd(t,r,e),i=await Vn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Z_(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function eb(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}const _s="__sak";/**
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
 */class pd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_s,"1"),this.storage.removeItem(_s),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function tb(){const t=Re();return Do(t)||qs(t)}const nb=1e3,rb=10;class gd extends pd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tb()&&H_(),this.fallbackToPolling=cd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);B_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,rb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gd.type="LOCAL";const sb=gd;/**
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
 */class md extends pd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}md.type="SESSION";const yd=md;/**
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
 */function ib(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await ib(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zs.receivers=[];/**
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
 */function Lo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ob{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Lo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yt(){return window}function ab(t){yt().location.href=t}/**
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
 */function _d(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function cb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ub(){return _d()?self:null}/**
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
 */const bd="firebaseLocalStorageDb",db=1,bs="firebaseLocalStorage",vd="fbase_key";class Mr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ks(t,e){return t.transaction([bs],e?"readwrite":"readonly").objectStore(bs)}function fb(){const t=indexedDB.deleteDatabase(bd);return new Mr(t).toPromise()}function Bi(){const t=indexedDB.open(bd,db);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bs,{keyPath:vd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bs)?e(r):(r.close(),await fb(),e(await Bi()))})})}async function mc(t,e,n){const r=Ks(t,!0).put({[vd]:e,value:n});return new Mr(r).toPromise()}async function hb(t,e){const n=Ks(t,!1).get(e),r=await new Mr(n).toPromise();return r===void 0?null:r.value}function yc(t,e){const n=Ks(t,!0).delete(e);return new Mr(n).toPromise()}const pb=800,gb=3;class wd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _d()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zs._getInstance(ub()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cb(),!this.activeServiceWorker)return;this.sender=new ob(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bi();return await mc(e,_s,"1"),await yc(e,_s),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ks(s,!1).getAll();return new Mr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wd.type="LOCAL";const mb=wd;/**
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
 */function yb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _b(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=mt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",yb().appendChild(r)})}function bb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Nr(3e4,6e4);/**
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
 */function vb(t,e){return e?Tt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fo extends dd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wb(t){return X_(t.auth,new Fo(t),t.bypassAuthState)}function Ib(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Q_(n,new Fo(t),t.bypassAuthState)}async function Eb(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),Y_(n,new Fo(t),t.bypassAuthState)}/**
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
 */class Id{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wb;case"linkViaPopup":case"linkViaRedirect":return Eb;case"reauthViaPopup":case"reauthViaRedirect":return Ib;default:kt(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xb=new Nr(2e3,1e4);class An extends Id{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=Lo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,xb.get())};e()}}An.currentPopupAction=null;/**
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
 */const Tb="pendingRedirect",es=new Map;class Sb extends Id{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=es.get(this.auth._key());if(!e){try{const r=await Ab(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}es.set(this.auth._key(),e)}return this.bypassAuthState||es.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ab(t,e){const n=Rb(e),r=kb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Cb(t,e){es.set(t._key(),e)}function kb(t){return Tt(t._redirectPersistence)}function Rb(t){return Zr(Tb,t.config.apiKey,t.name)}async function Ob(t,e,n=!1){const r=Mo(t),s=vb(r,e),o=await new Sb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Pb=10*60*1e3;class Nb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Db(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ed(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pb&&this.cachedEventUids.clear(),this.cachedEventUids.has(_c(e))}saveEventToCache(e){this.cachedEventUids.add(_c(e)),this.lastProcessedEventTime=Date.now()}}function _c(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ed({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Db(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ed(t);default:return!1}}/**
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
 */async function Mb(t,e={}){return Hs(t,"GET","/v1/projects",e)}/**
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
 */const Lb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fb=/^https?/;async function $b(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mb(t);for(const n of e)try{if(Ub(n))return}catch{}kt(t,"unauthorized-domain")}function Ub(t){const e=ji(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Fb.test(n))return!1;if(Lb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Vb=new Nr(3e4,6e4);function bc(){const t=yt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jb(t){return new Promise((e,n)=>{var r,s,i;function o(){bc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bc(),n(mt(t,"network-request-failed"))},timeout:Vb.get()})}if(!((s=(r=yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=yt().gapi)===null||i===void 0)&&i.load)o();else{const a=bb("iframefcb");return yt()[a]=()=>{gapi.load?o():n(mt(t,"network-request-failed"))},_b(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ts=null,e})}let ts=null;function Bb(t){return ts=ts||jb(t),ts}/**
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
 */const Hb=new Nr(5e3,15e3),qb="__/auth/iframe",zb="emulator/auth/iframe",Kb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gb(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Po(e,zb):`https://${t.config.authDomain}/${qb}`,r={apiKey:e.apiKey,appName:t.name,v:Or},s=Wb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Rr(r).slice(1)}`}async function Jb(t){const e=await Bb(t),n=yt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:Gb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=mt(t,"network-request-failed"),a=yt().setTimeout(()=>{i(o)},Hb.get());function c(){yt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Yb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qb=500,Xb=600,Zb="_blank",ev="http://localhost";class vc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tv(t,e,n,r=Qb,s=Xb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Yb),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Re().toLowerCase();n&&(a=rd(l)?Zb:n),nd(l)&&(e=e||ev,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,x])=>`${p}${m}=${x},`,"");if(j_(l)&&a!=="_self")return nv(e||"",a),new vc(null);const f=window.open(e||"",a,u);j(f,t,"popup-blocked");try{f.focus()}catch{}return new vc(f)}function nv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rv="__/auth/handler",sv="emulator/auth/handler";function wc(t,e,n,r,s,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Or,eventId:s};if(e instanceof fd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Dr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${iv(t)}?${Rr(a).slice(1)}`}function iv({config:t}){return t.emulator?Po(t,sv):`https://${t.authDomain}/${rv}`}/**
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
 */const di="webStorageSupport";class ov{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yd,this._completeRedirectFn=Ob,this._overrideRedirectResult=Cb}async _openPopup(e,n,r,s){var i;Rt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=wc(e,n,r,ji(),s);return tv(e,o,Lo())}async _openRedirect(e,n,r,s){return await this._originValidation(e),ab(wc(e,n,r,ji(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Rt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Jb(e),r=new Nb(e);return n.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(di,{type:di},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[di];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$b(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cd()||Do()||qs()}}const av=ov;var Ic="@firebase/auth",Ec="0.21.0";/**
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
 */class cv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uv(t){bt(new it("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{j(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ld(t)},u=new z_(a,c,l);return I_(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bt(new it("auth-internal",e=>{const n=Mo(e.getProvider("auth").getImmediate());return(r=>new cv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(Ic,Ec,lv(t)),Ge(Ic,Ec,"esm2017")}/**
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
 */const dv=5*60,fv=Gl("authIdTokenMaxAge")||dv;let xc=null;const hv=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fv)return;const s=n==null?void 0:n.token;xc!==s&&(xc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pv(t=po()){const e=vn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=w_(t,{popupRedirectResolver:av,persistence:[mb,sb,yd]}),r=Gl("authTokenSyncURL");if(r){const i=hv(r);eb(n,i,()=>i(n.currentUser)),Z_(n,o=>i(o))}const s=Wl("auth");return s&&K_(n,`http://${s}`),n}uv("Browser");const gv={apiKey:"AIzaSyCTd9riOM7Lbji1mBvHDQuydmNMrWFSj3g",authDomain:"precios-envios-odm.firebaseapp.com",databaseURL:"https://precios-envios-odm-default-rtdb.firebaseio.com",projectId:"precios-envios-odm",storageBucket:"precios-envios-odm.appspot.com",messagingSenderId:"802208494147",appId:"1:802208494147:web:fee055c13df4aef4045af6",measurementId:"G-LTMJMJLXRQ"},mv=Xl(gv);pv();const Tc=O0();g_(mv);const yv=Z0("database",{state:()=>({documents:[],destinos:[]}),actions:{async getDocuments(t){this.documents=[];const e=Ja(Ga(Tc,t));(await Xa(e)).forEach(r=>{this.documents.push(r.data())})},async getDocumentByKey(t,e,n){const r=Ja(Ga(Tc,t),q0(e,"==",n)),s=await Xa(r);console.log(s),s.forEach(i=>{this.destinos=i.data().destinos})}}}),_v={name:"regular-modal",data(){return{showModal:!1}},methods:{toggleModal:function(){this.showModal=!this.showModal},closeModal:function(){this.showModal=!1}}},bv=w("h1",{class:"text-4xl font-extrabold capitalize px-20 py-12 mt-10"}," TARIFAS PREFERENCIALES ",-1),vv=w("h2",{class:"text-3xl ml-10 font-extrabold capitalize px-14 py-1"}," Para impulsar tu negocio ",-1),wv={class:"relative flex items-top justify-center mt-0 bg-white dark:bg-white sm:items-center sm:pt-0"},Iv={class:"max-w-6xl mx-auto sm:px-6 lg:px-8 pb-10"},Ev={class:"mt-8 overflow-hidden"},xv={class:"grid grid-cols-1 md:grid-cols-2"},Tv=Wn('<div class="p-6 mr-2 bg-white dark:bg-white sm:rounded-lg"><h1 class="text-4xl sm:text-5xl text-black dark:text-black font-extrabold tracking-tight"> ¡Escríbenos! </h1><p class="text-normal pt-2 text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2"> Y nos pondremos en contacto a la brevedad. </p><div class="flex items-center mt-8 text-gray-600 dark:text-gray-400"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><div class="ml-4 text-md tracking-wide font-semibold w-80"> Av Central 56, Nueva Industrial Vallejo, Gustavo A. Madero, 07700 Ciudad de México, CDMX </div></div><div class="flex items-center mt-4 text-gray-600 dark:text-gray-400"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><div class="ml-4 text-md tracking-wide font-semibold w-40"> 55-51-41-43-00 </div></div><div class="flex items-center mt-2 text-gray-600 dark:text-gray-400"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><div class="ml-4 text-md tracking-wide font-semibold w-40"> desarrollowebodm@gmail.com </div></div></div>',1),Sv={class:"p-6 flex flex-col justify-center"},Av=Wn('<div class="flex flex-col"><label for="name" class="hidden">Nombre completo</label><input type="name" name="name" id="name" placeholder="Nombre completo" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none"></div><div class="flex flex-col mt-2"><label for="tel" class="hidden">Teléfono</label><input type="tel" name="tel" id="tel" placeholder="Teléfono" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none"></div><div class="flex flex-col mt-2"><label for="tel" class="hidden">Ciudad</label><input type="tel" name="tel" id="tel" placeholder="Ciudad" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></div><div class="flex flex-col mt-2"><label for="tel" class="hidden">Nombre de tu empresa</label><input type="tel" name="tel" id="tel" placeholder="Nombre de tu empresa" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></div><div class="flex flex-col mt-2"><label for="email" class="hidden">Correo electrónico</label><input type="email" name="email" id="email" placeholder="Correo electrónico" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></div>',5),Cv={class:"pl-10 pt-5 sm:pt-10 sm:flex sm:justify-center"},kv={key:0,class:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},Rv={class:"relative w-auto my-6 mx-auto max-w-3xl"},Ov={class:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},Pv=w("div",{class:"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"},[w("h3",{class:"text-3xl font-semibold"},"¡EXCELENTE!")],-1),Nv=w("div",{class:"relative p-6 flex-auto"},[w("p",{class:"my-4 text-slate-500 text-lg leading-relaxed"},[Ci(" Hemos recibido tu información. "),w("br"),Ci(" En breve nos comunicaremos contigo. ")])],-1),Dv={class:"flex items-center justify-end p-6 bg-[#003368]border-t border-solid border-slate-200 rounded-b"},Mv={key:1,class:"opacity-25 fixed inset-0 z-40 bg-black"};function Lv(t,e,n,r,s,i){return ye(),be(Ne,null,[bv,vv,w("div",wv,[w("div",Iv,[w("div",Ev,[w("div",xv,[Tv,w("form",Sv,[Av,w("div",Cv,[w("button",{class:"bg-[#003368] py-7 px-12 text-white active:bg-[#D9D9D9] font-bold uppercase text-2xl px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-10 sm:mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:e[0]||(e[0]=o=>i.toggleModal())}," SOLICITAR TARIFA PREFERENTE "),s.showModal?(ye(),be("div",kv,[w("div",Rv,[w("div",Ov,[Pv,Nv,w("div",Dv,[w("button",{class:"text-white bg-[#003368] border border-solid border-white hover:bg-blue-900 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:e[1]||(e[1]=o=>i.closeModal())}," OK ")])])])])):It("",!0),s.showModal?(ye(),be("div",Mv)):It("",!0)])])])])])])],64)}const Fv=Ms(_v,[["render",Lv]]),$v={class:"pl-5 pr-5"},Uv=w("h1",{class:"text-4xl font-extrabold capitalize px-14 py-14 pl-32"}," COBERTURA DE ENVÍOS ",-1),Vv={class:"mx-auto py-10 pl-20 pr-20"},jv={class:"flex flex-wrap justify-center items-center py-10"},Bv={class:"w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0"},Hv=w("option",{selected:""},"¿Dónde dejar tus paquetes?",-1),qv=["value"],zv={class:"mt-4"},Kv=w("h2",{class:"text-2xl font-bold"},"Dirección",-1),Wv=w("h3",{class:"text-gray-500 text-lg"},"De:",-1),Gv={key:0,class:"text-lg"},Jv={class:"w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0"},Yv=w("option",{value:""},"¿Dónde recoger tus paquetes?",-1),Qv=["value"],Xv={class:"mt-4"},Zv=w("h2",{class:"text-2xl font-bold"},"Dirección",-1),ew=w("h3",{class:"text-gray-500 text-lg"},"A:",-1),tw={key:0,class:"text-lg"},nw={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"},rw={key:0,class:"bg-gray-400 p-4 shadow rounded-lg"},sw=w("h2",{class:"font-extrabold text-2xl"},"Sobres",-1),iw=w("h2",{class:"font-extrabold text-lg"},"Hasta 25 hojas",-1),ow={class:"mt-4 text-lg"},aw={key:1,class:"bg-gray-400 p-4 shadow rounded-lg"},cw=w("h2",{class:"font-extrabold text-2xl"},"Paquetes",-1),lw=w("h2",{class:"font-extrabold text-lg"},"De 0 - 1 Kg.",-1),uw={class:"mt-4 text-lg"},dw={key:2,class:"bg-gray-400 p-4 shadow rounded-lg"},fw=w("h2",{class:"font-extrabold text-2xl"},"Cajas",-1),hw=w("h2",{class:"font-extrabold text-lg"},"De 1 - 10 Kg.",-1),pw={class:"mt-4 text-lg"},gw={key:3,class:"bg-gray-400 p-4 shadow rounded-lg"},mw=w("h2",{class:"font-extrabold text-2xl"},"Cajas",-1),yw=w("h2",{class:"font-extrabold text-lg"},"De 11 - 20 Kg.",-1),_w={class:"mt-4 text-lg"},bw={key:4,class:"bg-gray-400 p-4 shadow rounded-lg"},vw=w("h2",{class:"font-extrabold text-2xl"},"Maletas",-1),ww=w("h2",{class:"font-extrabold text-lg"},"De 21 - 30 Kg.",-1),Iw={class:"mt-4 text-lg"},Ew=w("div",{class:"h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl pl-0 pr-0 sm:w-full sm:max-w-screen-md"},[w("p",null,"***VALOR DE REFERENCIA SUJETO A CAMBIOS***")],-1),xw={__name:"App",setup(t){const e=yv();ao(async()=>{await e.getDocuments("envios")});const n=fn(null),r=fn(null),s=async()=>{r.value=null,await e.getDocumentByKey("envios","id",n.value.id)};return(i,o)=>{const a=ah("router-view");return ye(),be(Ne,null,[_e(Tp),w("div",$v,[_e(Np),Uv,w("div",Vv,[w("div",jv,[w("div",Bv,[er(w("select",{"onUpdate:modelValue":o[0]||(o[0]=c=>he(n)?n.value=c:null),onChange:o[1]||(o[1]=c=>s()),class:"block w-full py-3 px-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"},[Hv,(ye(!0),be(Ne,null,na(ue(e).$state.documents,c=>(ye(),be("option",{key:c.id,value:c},ft(c.origen),9,qv))),128))],544),[[ba,ue(n)]]),w("div",zv,[Kv,Wv,ue(n)!=null?(ye(),be("p",Gv,ft(ue(n).ubicacion),1)):It("",!0)])]),w("div",Jv,[er(w("select",{"onUpdate:modelValue":o[2]||(o[2]=c=>he(r)?r.value=c:null),class:"block w-full py-3 px-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"},[Yv,(ye(!0),be(Ne,null,na(ue(e).$state.destinos,c=>(ye(),be("option",{key:c.id,value:c},ft(c.nombre),9,Qv))),128))],512),[[ba,ue(r)]]),w("div",Xv,[Zv,ew,ue(r)!=null?(ye(),be("p",tw,ft(ue(r).direccion),1)):It("",!0)])])])]),w("div",nw,[ue(r)!=null?(ye(),be("div",rw,[sw,iw,w("p",ow,"$"+ft(ue(r).precios.SOB),1)])):It("",!0),ue(r)!=null?(ye(),be("div",aw,[cw,lw,w("p",uw,"$"+ft(ue(r).precios.PAQ),1)])):It("",!0),ue(r)!=null?(ye(),be("div",dw,[fw,hw,w("p",pw,"$"+ft(ue(r).precios.C1),1)])):It("",!0),ue(r)!=null?(ye(),be("div",gw,[mw,yw,w("p",_w,"$"+ft(ue(r).precios.C2),1)])):It("",!0),ue(r)!=null?(ye(),be("div",bw,[vw,ww,w("p",Iw,"$"+ft(ue(r).precios.C3),1)])):It("",!0)]),Ew,_e(eg),_e(Fv)]),_e(ag),_e(a)],64)}}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Sn=typeof window<"u";function Tw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function fi(t,e){const n={};for(const r in e){const s=e[r];n[r]=at(s)?s.map(t):t(s)}return n}const lr=()=>{},at=Array.isArray,Sw=/\/$/,Aw=t=>t.replace(Sw,"");function hi(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ow(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Cw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&jn(e.matched[r],n.matched[s])&&xd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function jn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Rw(t[n],e[n]))return!1;return!0}function Rw(t,e){return at(t)?Ac(t,e):at(e)?Ac(e,t):t===e}function Ac(t,e){return at(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ow(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Cr;(function(t){t.pop="pop",t.push="push"})(Cr||(Cr={}));var ur;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ur||(ur={}));function Pw(t){if(!t)if(Sn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Aw(t)}const Nw=/^[^#]+#/;function Dw(t,e){return t.replace(Nw,"#")+e}function Mw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ws=()=>({left:window.pageXOffset,top:window.pageYOffset});function Lw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Mw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Cc(t,e){return(history.state?history.state.position-e:-1)+t}const Hi=new Map;function Fw(t,e){Hi.set(t,e)}function $w(t){const e=Hi.get(t);return Hi.delete(t),e}let Uw=()=>location.protocol+"//"+location.host;function Td(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Sc(c,"")}return Sc(n,t)+r+s}function Vw(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Td(t,location),x=n.value,S=e.value;let F=0;if(p){if(n.value=m,e.value=p,o&&o===x){o=null;return}F=S?p.position-S.position:0}else r(m);s.forEach(R=>{R(n.value,x,{delta:F,type:Cr.pop,direction:F?F>0?ur.forward:ur.back:ur.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const x=s.indexOf(p);x>-1&&s.splice(x,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(ne({},p.state,{scroll:Ws()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function kc(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ws():null}}function jw(t){const{history:e,location:n}=window,r={value:Td(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Uw()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=ne({},e.state,kc(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ne({},s.value,e.state,{forward:c,scroll:Ws()});i(u.current,u,!0);const f=ne({},kc(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Bw(t){t=Pw(t);const e=jw(t),n=Vw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:t,go:r,createHref:Dw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Hw(t){return typeof t=="string"||t&&typeof t=="object"}function Sd(t){return typeof t=="string"||typeof t=="symbol"}const Mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ad=Symbol("");var Rc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rc||(Rc={}));function Bn(t,e){return ne(new Error,{type:t,[Ad]:!0},e)}function vt(t,e){return t instanceof Error&&Ad in t&&(e==null||!!(t.type&e))}const Oc="[^/]+?",qw={sensitive:!1,strict:!1,start:!0,end:!0},zw=/[.+*?^${}()[\]/\\]/g;function Kw(t,e){const n=ne({},qw,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(zw,"\\$&"),m+=40;else if(p.type===1){const{value:x,repeatable:S,optional:F,regexp:R}=p;i.push({name:x,repeatable:S,optional:F});const $=R||Oc;if($!==Oc){m+=10;try{new RegExp(`(${$})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${x}" (${$}): `+q.message)}}let P=S?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;f||(P=F&&l.length<2?`(?:/${P})`:"/"+P),F&&(P+="?"),s+=P,m+=20,F&&(m+=-8),S&&(m+=-20),$===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",x=i[p-1];f[x.name]=m&&x.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:x,repeatable:S,optional:F}=m,R=x in l?l[x]:"";if(at(R)&&!S)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const $=at(R)?R.join("/"):R;if(!$)if(F)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${x}"`);u+=$}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ww(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Gw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ww(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pc(r))return 1;if(Pc(s))return-1}return s.length-r.length}function Pc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Jw={type:0,value:""},Yw=/[a-zA-Z0-9_]/;function Qw(t){if(!t)return[[]];if(t==="/")return[[Jw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Yw.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Xw(t,e,n){const r=Kw(Qw(t.path),n),s=ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Zw(t,e){const n=[],r=new Map;e=Mc({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,p){const m=!p,x=eI(u);x.aliasOf=p&&p.record;const S=Mc(e,u),F=[x];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const q of P)F.push(ne({},x,{components:p?p.record.components:x.components,path:q,aliasOf:p?p.record:x}))}let R,$;for(const P of F){const{path:q}=P;if(f&&q[0]!=="/"){const W=f.record.path,oe=W[W.length-1]==="/"?"":"/";P.path=f.record.path+(q&&oe+q)}if(R=Xw(P,f,S),p?p.alias.push(R):($=$||R,$!==R&&$.alias.push(R),m&&u.name&&!Dc(R)&&o(u.name)),x.children){const W=x.children;for(let oe=0;oe<W.length;oe++)i(W[oe],R,p&&p.children[oe])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return $?()=>{o($)}:lr}function o(u){if(Sd(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&Gw(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Cd(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Dc(u)&&r.set(u.record.name,u)}function l(u,f){let p,m={},x,S;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Bn(1,{location:u});S=p.record.name,m=ne(Nc(f.params,p.keys.filter($=>!$.optional).map($=>$.name)),u.params&&Nc(u.params,p.keys.map($=>$.name))),x=p.stringify(m)}else if("path"in u)x=u.path,p=n.find($=>$.re.test(x)),p&&(m=p.parse(x),S=p.record.name);else{if(p=f.name?r.get(f.name):n.find($=>$.re.test(f.path)),!p)throw Bn(1,{location:u,currentLocation:f});S=p.record.name,m=ne({},f.params,u.params),x=p.stringify(m)}const F=[];let R=p;for(;R;)F.unshift(R.record),R=R.parent;return{name:S,path:x,params:m,matched:F,meta:nI(F)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Nc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function eI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:tI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function tI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Dc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function nI(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function Mc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Cd(t,e){return e.children.some(n=>n===t||Cd(t,n))}const kd=/#/g,rI=/&/g,sI=/\//g,iI=/=/g,oI=/\?/g,Rd=/\+/g,aI=/%5B/g,cI=/%5D/g,Od=/%5E/g,lI=/%60/g,Pd=/%7B/g,uI=/%7C/g,Nd=/%7D/g,dI=/%20/g;function $o(t){return encodeURI(""+t).replace(uI,"|").replace(aI,"[").replace(cI,"]")}function fI(t){return $o(t).replace(Pd,"{").replace(Nd,"}").replace(Od,"^")}function qi(t){return $o(t).replace(Rd,"%2B").replace(dI,"+").replace(kd,"%23").replace(rI,"%26").replace(lI,"`").replace(Pd,"{").replace(Nd,"}").replace(Od,"^")}function hI(t){return qi(t).replace(iI,"%3D")}function pI(t){return $o(t).replace(kd,"%23").replace(oI,"%3F")}function gI(t){return t==null?"":pI(t).replace(sI,"%2F")}function vs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function mI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Rd," "),o=i.indexOf("="),a=vs(o<0?i:i.slice(0,o)),c=o<0?null:vs(i.slice(o+1));if(a in e){let l=e[a];at(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Lc(t){let e="";for(let n in t){const r=t[n];if(n=hI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(at(r)?r.map(i=>i&&qi(i)):[r&&qi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function yI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=at(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const _I=Symbol(""),Fc=Symbol(""),Uo=Symbol(""),Dd=Symbol(""),zi=Symbol("");function Qn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ut(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Bn(4,{from:n,to:e})):f instanceof Error?a(f):Hw(f)?a(Bn(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function pi(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(bI(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Ut(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Tw(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&Ut(p,n,r,i,o)()}))}}return s}function bI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $c(t){const e=gt(Uo),n=gt(Dd),r=Fe(()=>e.resolve(ue(t.to))),s=Fe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(jn.bind(null,u));if(p>-1)return p;const m=Uc(c[l-2]);return l>1&&Uc(u)===m&&f[f.length-1].path!==m?f.findIndex(jn.bind(null,c[l-2])):p}),i=Fe(()=>s.value>-1&&EI(n.params,r.value.params)),o=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&xd(n.params,r.value.params));function a(c={}){return II(c)?e[ue(t.replace)?"replace":"push"](ue(t.to)).catch(lr):Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const vI=Il({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$c,setup(t,{slots:e}){const n=Kn($c(t)),{options:r}=gt(Uo),s=Fe(()=>({[Vc(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vc(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Vl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),wI=vI;function II(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function EI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!at(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Uc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vc=(t,e,n)=>t??e??n,xI=Il({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=gt(zi),s=Fe(()=>t.route||r.value),i=gt(Fc,0),o=Fe(()=>{let l=ue(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Fe(()=>s.value.matched[o.value]);Wr(Fc,Fe(()=>o.value+1)),Wr(_I,a),Wr(zi,s);const c=fn();return Zn(()=>[c.value,a.value,t.name],([l,u,f],[p,m,x])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!jn(u,m)||!p)&&(u.enterCallbacks[f]||[]).forEach(S=>S(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return jc(n.default,{Component:p,route:l});const m=f.props[u],x=m?m===!0?l.params:typeof m=="function"?m(l):m:null,F=Vl(p,ne({},x,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return jc(n.default,{Component:F,route:l})||F}}});function jc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const TI=xI;function SI(t){const e=Zw(t.routes,t),n=t.parseQuery||mI,r=t.stringifyQuery||Lc,s=t.history,i=Qn(),o=Qn(),a=Qn(),c=Sf(Mt);let l=Mt;Sn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=fi.bind(null,_=>""+_),f=fi.bind(null,gI),p=fi.bind(null,vs);function m(_,k){let A,D;return Sd(_)?(A=e.getRecordMatcher(_),D=k):D=_,e.addRoute(D,A)}function x(_){const k=e.getRecordMatcher(_);k&&e.removeRoute(k)}function S(){return e.getRoutes().map(_=>_.record)}function F(_){return!!e.getRecordMatcher(_)}function R(_,k){if(k=ne({},k||c.value),typeof _=="string"){const d=hi(n,_,k.path),h=e.resolve({path:d.path},k),g=s.createHref(d.fullPath);return ne(d,h,{params:p(h.params),hash:vs(d.hash),redirectedFrom:void 0,href:g})}let A;if("path"in _)A=ne({},_,{path:hi(n,_.path,k.path).path});else{const d=ne({},_.params);for(const h in d)d[h]==null&&delete d[h];A=ne({},_,{params:f(_.params)}),k.params=f(k.params)}const D=e.resolve(A,k),Z=_.hash||"";D.params=u(p(D.params));const fe=Cw(r,ne({},_,{hash:fI(Z),path:D.path})),G=s.createHref(fe);return ne({fullPath:fe,hash:Z,query:r===Lc?yI(_.query):_.query||{}},D,{redirectedFrom:void 0,href:G})}function $(_){return typeof _=="string"?hi(n,_,c.value.path):ne({},_)}function P(_,k){if(l!==_)return Bn(8,{from:k,to:_})}function q(_){return z(_)}function W(_){return q(ne($(_),{replace:!0}))}function oe(_){const k=_.matched[_.matched.length-1];if(k&&k.redirect){const{redirect:A}=k;let D=typeof A=="function"?A(_):A;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=$(D):{path:D},D.params={}),ne({query:_.query,hash:_.hash,params:"path"in D?{}:_.params},D)}}function z(_,k){const A=l=R(_),D=c.value,Z=_.state,fe=_.force,G=_.replace===!0,d=oe(A);if(d)return z(ne($(d),{state:typeof d=="object"?ne({},Z,d.state):Z,force:fe,replace:G}),k||A);const h=A;h.redirectedFrom=k;let g;return!fe&&kw(r,D,A)&&(g=Bn(16,{to:h,from:D}),Qt(D,D,!0,!1)),(g?Promise.resolve(g):Y(h,D)).catch(y=>vt(y)?vt(y,2)?y:Qe(y):ae(y,h,D)).then(y=>{if(y){if(vt(y,2))return z(ne({replace:G},$(y.to),{state:typeof y.to=="object"?ne({},Z,y.to.state):Z,force:fe}),k||h)}else y=pe(h,D,!0,G,Z);return X(h,D,y),y})}function O(_,k){const A=P(_,k);return A?Promise.reject(A):Promise.resolve()}function Y(_,k){let A;const[D,Z,fe]=AI(_,k);A=pi(D.reverse(),"beforeRouteLeave",_,k);for(const d of D)d.leaveGuards.forEach(h=>{A.push(Ut(h,_,k))});const G=O.bind(null,_,k);return A.push(G),xn(A).then(()=>{A=[];for(const d of i.list())A.push(Ut(d,_,k));return A.push(G),xn(A)}).then(()=>{A=pi(Z,"beforeRouteUpdate",_,k);for(const d of Z)d.updateGuards.forEach(h=>{A.push(Ut(h,_,k))});return A.push(G),xn(A)}).then(()=>{A=[];for(const d of _.matched)if(d.beforeEnter&&!k.matched.includes(d))if(at(d.beforeEnter))for(const h of d.beforeEnter)A.push(Ut(h,_,k));else A.push(Ut(d.beforeEnter,_,k));return A.push(G),xn(A)}).then(()=>(_.matched.forEach(d=>d.enterCallbacks={}),A=pi(fe,"beforeRouteEnter",_,k),A.push(G),xn(A))).then(()=>{A=[];for(const d of o.list())A.push(Ut(d,_,k));return A.push(G),xn(A)}).catch(d=>vt(d,8)?d:Promise.reject(d))}function X(_,k,A){for(const D of a.list())D(_,k,A)}function pe(_,k,A,D,Z){const fe=P(_,k);if(fe)return fe;const G=k===Mt,d=Sn?history.state:{};A&&(D||G?s.replace(_.fullPath,ne({scroll:G&&d&&d.scroll},Z)):s.push(_.fullPath,Z)),c.value=_,Qt(_,k,A,G),Qe()}let Ie;function Ue(){Ie||(Ie=s.listen((_,k,A)=>{if(!Lr.listening)return;const D=R(_),Z=oe(D);if(Z){z(ne(Z,{replace:!0}),D).catch(lr);return}l=D;const fe=c.value;Sn&&Fw(Cc(fe.fullPath,A.delta),Ws()),Y(D,fe).catch(G=>vt(G,12)?G:vt(G,2)?(z(G.to,D).then(d=>{vt(d,20)&&!A.delta&&A.type===Cr.pop&&s.go(-1,!1)}).catch(lr),Promise.reject()):(A.delta&&s.go(-A.delta,!1),ae(G,D,fe))).then(G=>{G=G||pe(D,fe,!1),G&&(A.delta&&!vt(G,8)?s.go(-A.delta,!1):A.type===Cr.pop&&vt(G,20)&&s.go(-1,!1)),X(D,fe,G)}).catch(lr)}))}let Oe=Qn(),Ee=Qn(),ge;function ae(_,k,A){Qe(_);const D=Ee.list();return D.length?D.forEach(Z=>Z(_,k,A)):console.error(_),Promise.reject(_)}function se(){return ge&&c.value!==Mt?Promise.resolve():new Promise((_,k)=>{Oe.add([_,k])})}function Qe(_){return ge||(ge=!_,Ue(),Oe.list().forEach(([k,A])=>_?A(_):k()),Oe.reset()),_}function Qt(_,k,A,D){const{scrollBehavior:Z}=t;if(!Sn||!Z)return Promise.resolve();const fe=!A&&$w(Cc(_.fullPath,0))||(D||!A)&&history.state&&history.state.scroll||null;return io().then(()=>Z(_,k,fe)).then(G=>G&&Lw(G)).catch(G=>ae(G,_,k))}const Xe=_=>s.go(_);let De;const wn=new Set,Lr={currentRoute:c,listening:!0,addRoute:m,removeRoute:x,hasRoute:F,getRoutes:S,resolve:R,options:t,push:q,replace:W,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ee.add,isReady:se,install(_){const k=this;_.component("RouterLink",wI),_.component("RouterView",TI),_.config.globalProperties.$router=k,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(c)}),Sn&&!De&&c.value===Mt&&(De=!0,q(s.location).catch(Z=>{}));const A={};for(const Z in Mt)A[Z]=Fe(()=>c.value[Z]);_.provide(Uo,k),_.provide(Dd,Kn(A)),_.provide(zi,c);const D=_.unmount;wn.add(_),_.unmount=function(){wn.delete(_),wn.size<1&&(l=Mt,Ie&&Ie(),Ie=null,c.value=Mt,De=!1,ge=!1),D()}}};return Lr}function xn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function AI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>jn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>jn(l,c))||s.push(c))}return[n,r,s]}const CI=[{path:"/formulario",name:"Formulario"}],kI=SI({routes:CI,history:Bw()});up(xw).use(kI).use(G0()).mount("#app");
