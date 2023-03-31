(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ki(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Wi(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=we(r)?Fd(r):Wi(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(we(t))return t;if(ce(t))return t}}const Md=/;(?![^(]*\))/g,Ld=/:([^]+)/,$d=/\/\*.*?\*\//gs;function Fd(t){const e={};return t.replace($d,"").split(Md).forEach(n=>{if(n){const r=n.split(Ld);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ws(t){let e="";if(we(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const r=ws(t[n]);r&&(e+=r+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ud="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jd=Ki(Ud);function Bl(t){return!!t||t===""}function Vd(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=xs(t[r],e[r]);return n}function xs(t,e){if(t===e)return!0;let n=Ho(t),r=Ho(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=dr(t),r=dr(e),n||r)return t===e;if(n=U(t),r=U(e),n||r)return n&&r?Vd(t,e):!1;if(n=ce(t),r=ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!xs(t[o],e[o]))return!1}}return String(t)===String(e)}function Bd(t,e){return t.findIndex(n=>xs(n,e))}const ft=t=>we(t)?t:t==null?"":U(t)||ce(t)&&(t.toString===zl||!H(t.toString))?JSON.stringify(t,Hl,2):String(t),Hl=(t,e)=>e&&e.__v_isRef?Hl(t,e.value):Cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Es(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!U(e)&&!Kl(e)?String(e):e,de={},kn=[],rt=()=>{},Hd=()=>!1,qd=/^on[^a-z]/,Is=t=>qd.test(t),Gi=t=>t.startsWith("onUpdate:"),Ce=Object.assign,Ji=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zd=Object.prototype.hasOwnProperty,ee=(t,e)=>zd.call(t,e),U=Array.isArray,Cn=t=>Cr(t)==="[object Map]",Es=t=>Cr(t)==="[object Set]",Ho=t=>Cr(t)==="[object Date]",H=t=>typeof t=="function",we=t=>typeof t=="string",dr=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",ql=t=>ce(t)&&H(t.then)&&H(t.catch),zl=Object.prototype.toString,Cr=t=>zl.call(t),Kd=t=>Cr(t).slice(8,-1),Kl=t=>Cr(t)==="[object Object]",Yi=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zr=Ki(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ts=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wd=/-(\w)/g,yt=Ts(t=>t.replace(Wd,(e,n)=>n?n.toUpperCase():"")),Gd=/\B([A-Z])/g,Hn=Ts(t=>t.replace(Gd,"-$1").toLowerCase()),Ss=Ts(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gs=Ts(t=>t?`on${Ss(t)}`:""),fr=(t,e)=>!Object.is(t,e),Kr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ns=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qo;const Jd=()=>qo||(qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ve;class Wl{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ve,!e&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ve;try{return Ve=this,e()}finally{Ve=n}}}on(){Ve=this}off(){Ve=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function Gl(t){return new Wl(t)}function Yd(t,e=Ve){e&&e.active&&e.effects.push(t)}function Qd(){return Ve}function Xd(t){Ve&&Ve.cleanups.push(t)}const Qi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Jl=t=>(t.w&Jt)>0,Yl=t=>(t.n&Jt)>0,Zd=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jt},ef=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Jl(s)&&!Yl(s)?s.delete(t):e[n++]=s,s.w&=~Jt,s.n&=~Jt}e.length=n}},mi=new WeakMap;let Xn=0,Jt=1;const gi=30;let et;const cn=Symbol(""),_i=Symbol("");class Xi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Yd(this,r)}run(){if(!this.active)return this.fn();let e=et,n=qt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=et,et=this,qt=!0,Jt=1<<++Xn,Xn<=gi?Zd(this):zo(this),this.fn()}finally{Xn<=gi&&ef(this),Jt=1<<--Xn,et=this.parent,qt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){et===this?this.deferStop=!0:this.active&&(zo(this),this.onStop&&this.onStop(),this.active=!1)}}function zo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let qt=!0;const Ql=[];function qn(){Ql.push(qt),qt=!1}function zn(){const t=Ql.pop();qt=t===void 0?!0:t}function ze(t,e,n){if(qt&&et){let r=mi.get(t);r||mi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Qi()),Xl(s)}}function Xl(t,e){let n=!1;Xn<=gi?Yl(t)||(t.n|=Jt,n=!Jl(t)):n=!t.has(et),n&&(t.add(et),et.deps.push(t))}function St(t,e,n,r,s,i){const o=mi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t)){const l=hr(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?Yi(n)&&a.push(o.get("length")):(a.push(o.get(cn)),Cn(t)&&a.push(o.get(_i)));break;case"delete":U(t)||(a.push(o.get(cn)),Cn(t)&&a.push(o.get(_i)));break;case"set":Cn(t)&&a.push(o.get(cn));break}if(a.length===1)a[0]&&yi(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);yi(Qi(l))}}function yi(t,e){const n=U(t)?t:[...t];for(const r of n)r.computed&&Ko(r);for(const r of n)r.computed||Ko(r)}function Ko(t,e){(t!==et||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const tf=Ki("__proto__,__v_isRef,__isVue"),Zl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dr)),nf=Zi(),rf=Zi(!1,!0),sf=Zi(!0),Wo=of();function of(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=te(this);for(let i=0,o=this.length;i<o;i++)ze(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(te)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qn();const r=te(this)[e].apply(this,n);return zn(),r}}),t}function Zi(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?xf:sc:e?rc:nc).get(r))return r;const o=U(r);if(!t&&o&&ee(Wo,s))return Reflect.get(Wo,s,i);const a=Reflect.get(r,s,i);return(dr(s)?Zl.has(s):tf(s))||(t||ze(r,"get",s),e)?a:me(a)?o&&Yi(s)?a:a.value:ce(a)?t?ic(a):Kn(a):a}}const af=ec(),lf=ec(!0);function ec(t=!1){return function(n,r,s,i){let o=n[r];if(Dn(o)&&me(o)&&!me(s))return!1;if(!t&&(!rs(s)&&!Dn(s)&&(o=te(o),s=te(s)),!U(n)&&me(o)&&!me(s)))return o.value=s,!0;const a=U(n)&&Yi(r)?Number(r)<n.length:ee(n,r),l=Reflect.set(n,r,s,i);return n===te(i)&&(a?fr(s,o)&&St(n,"set",r,s):St(n,"add",r,s)),l}}function cf(t,e){const n=ee(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&St(t,"delete",e,void 0),r}function uf(t,e){const n=Reflect.has(t,e);return(!dr(e)||!Zl.has(e))&&ze(t,"has",e),n}function df(t){return ze(t,"iterate",U(t)?"length":cn),Reflect.ownKeys(t)}const tc={get:nf,set:af,deleteProperty:cf,has:uf,ownKeys:df},ff={get:sf,set(t,e){return!0},deleteProperty(t,e){return!0}},hf=Ce({},tc,{get:rf,set:lf}),eo=t=>t,As=t=>Reflect.getPrototypeOf(t);function $r(t,e,n=!1,r=!1){t=t.__v_raw;const s=te(t),i=te(e);n||(e!==i&&ze(s,"get",e),ze(s,"get",i));const{has:o}=As(s),a=r?eo:n?ro:pr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Fr(t,e=!1){const n=this.__v_raw,r=te(n),s=te(t);return e||(t!==s&&ze(r,"has",t),ze(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ur(t,e=!1){return t=t.__v_raw,!e&&ze(te(t),"iterate",cn),Reflect.get(t,"size",t)}function Go(t){t=te(t);const e=te(this);return As(e).has.call(e,t)||(e.add(t),St(e,"add",t,t)),this}function Jo(t,e){e=te(e);const n=te(this),{has:r,get:s}=As(n);let i=r.call(n,t);i||(t=te(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?fr(e,o)&&St(n,"set",t,e):St(n,"add",t,e),this}function Yo(t){const e=te(this),{has:n,get:r}=As(e);let s=n.call(e,t);s||(t=te(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&St(e,"delete",t,void 0),i}function Qo(){const t=te(this),e=t.size!==0,n=t.clear();return e&&St(t,"clear",void 0,void 0),n}function jr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=te(o),l=e?eo:t?ro:pr;return!t&&ze(a,"iterate",cn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Vr(t,e,n){return function(...r){const s=this.__v_raw,i=te(s),o=Cn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?eo:e?ro:pr;return!e&&ze(i,"iterate",l?_i:cn),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Nt(t){return function(...e){return t==="delete"?!1:this}}function pf(){const t={get(i){return $r(this,i)},get size(){return Ur(this)},has:Fr,add:Go,set:Jo,delete:Yo,clear:Qo,forEach:jr(!1,!1)},e={get(i){return $r(this,i,!1,!0)},get size(){return Ur(this)},has:Fr,add:Go,set:Jo,delete:Yo,clear:Qo,forEach:jr(!1,!0)},n={get(i){return $r(this,i,!0)},get size(){return Ur(this,!0)},has(i){return Fr.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:jr(!0,!1)},r={get(i){return $r(this,i,!0,!0)},get size(){return Ur(this,!0)},has(i){return Fr.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:jr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Vr(i,!1,!1),n[i]=Vr(i,!0,!1),e[i]=Vr(i,!1,!0),r[i]=Vr(i,!0,!0)}),[t,n,e,r]}const[mf,gf,_f,yf]=pf();function to(t,e){const n=e?t?yf:_f:t?gf:mf;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ee(n,s)&&s in r?n:r,s,i)}const bf={get:to(!1,!1)},vf={get:to(!1,!0)},wf={get:to(!0,!1)},nc=new WeakMap,rc=new WeakMap,sc=new WeakMap,xf=new WeakMap;function If(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ef(t){return t.__v_skip||!Object.isExtensible(t)?0:If(Kd(t))}function Kn(t){return Dn(t)?t:no(t,!1,tc,bf,nc)}function Tf(t){return no(t,!1,hf,vf,rc)}function ic(t){return no(t,!0,ff,wf,sc)}function no(t,e,n,r,s){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ef(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function zt(t){return Dn(t)?zt(t.__v_raw):!!(t&&t.__v_isReactive)}function Dn(t){return!!(t&&t.__v_isReadonly)}function rs(t){return!!(t&&t.__v_isShallow)}function oc(t){return zt(t)||Dn(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function Mn(t){return ns(t,"__v_skip",!0),t}const pr=t=>ce(t)?Kn(t):t,ro=t=>ce(t)?ic(t):t;function ac(t){qt&&et&&(t=te(t),Xl(t.dep||(t.dep=Qi())))}function lc(t,e){t=te(t),t.dep&&yi(t.dep)}function me(t){return!!(t&&t.__v_isRef===!0)}function fn(t){return cc(t,!1)}function Sf(t){return cc(t,!0)}function cc(t,e){return me(t)?t:new Af(t,e)}class Af{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:pr(e)}get value(){return ac(this),this._value}set value(e){const n=this.__v_isShallow||rs(e)||Dn(e);e=n?e:te(e),fr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pr(e),lc(this))}}function ue(t){return me(t)?t.value:t}const kf={get:(t,e,n)=>ue(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function uc(t){return zt(t)?t:new Proxy(t,kf)}function Cf(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=Of(t,n);return e}class Rf{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Of(t,e,n){const r=t[e];return me(r)?r:new Rf(t,e,n)}var dc;class Pf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[dc]=!1,this._dirty=!0,this.effect=new Xi(e,()=>{this._dirty||(this._dirty=!0,lc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=te(this);return ac(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}dc="__v_isReadonly";function Nf(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=rt):(r=t.get,s=t.set),new Pf(r,s,i||!s,n)}function Kt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ks(i,e,n)}return s}function We(t,e,n,r){if(H(t)){const i=Kt(t,e,n,r);return i&&ql(i)&&i.catch(o=>{ks(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(We(t[i],e,n,r));return s}function ks(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Kt(l,null,10,[t,o,a]);return}}Df(t,n,s,r)}function Df(t,e,n,r=!0){console.error(t)}let mr=!1,bi=!1;const ke=[];let pt=0;const Rn=[];let wt=null,nn=0;const fc=Promise.resolve();let so=null;function io(t){const e=so||fc;return t?e.then(this?t.bind(this):t):e}function Mf(t){let e=pt+1,n=ke.length;for(;e<n;){const r=e+n>>>1;gr(ke[r])<t?e=r+1:n=r}return e}function oo(t){(!ke.length||!ke.includes(t,mr&&t.allowRecurse?pt+1:pt))&&(t.id==null?ke.push(t):ke.splice(Mf(t.id),0,t),hc())}function hc(){!mr&&!bi&&(bi=!0,so=fc.then(mc))}function Lf(t){const e=ke.indexOf(t);e>pt&&ke.splice(e,1)}function $f(t){U(t)?Rn.push(...t):(!wt||!wt.includes(t,t.allowRecurse?nn+1:nn))&&Rn.push(t),hc()}function Xo(t,e=mr?pt+1:0){for(;e<ke.length;e++){const n=ke[e];n&&n.pre&&(ke.splice(e,1),e--,n())}}function pc(t){if(Rn.length){const e=[...new Set(Rn)];if(Rn.length=0,wt){wt.push(...e);return}for(wt=e,wt.sort((n,r)=>gr(n)-gr(r)),nn=0;nn<wt.length;nn++)wt[nn]();wt=null,nn=0}}const gr=t=>t.id==null?1/0:t.id,Ff=(t,e)=>{const n=gr(t)-gr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function mc(t){bi=!1,mr=!0,ke.sort(Ff);const e=rt;try{for(pt=0;pt<ke.length;pt++){const n=ke[pt];n&&n.active!==!1&&Kt(n,null,14)}}finally{pt=0,ke.length=0,pc(),mr=!1,so=null,(ke.length||Rn.length)&&mc()}}function Uf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||de;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||de;p&&(s=n.map(g=>we(g)?g.trim():g)),f&&(s=n.map(hr))}let a,l=r[a=Gs(e)]||r[a=Gs(yt(e))];!l&&i&&(l=r[a=Gs(Hn(e))]),l&&We(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,We(c,t,6,s)}}function gc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const l=c=>{const u=gc(c,e,!0);u&&(a=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ce(t)&&r.set(t,null),null):(U(i)?i.forEach(l=>o[l]=null):Ce(o,i),ce(t)&&r.set(t,o),o)}function Cs(t,e){return!t||!Is(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,Hn(e))||ee(t,e))}let Be=null,_c=null;function ss(t){const e=Be;return Be=t,_c=t&&t.type.__scopeId||null,e}function jf(t,e=Be,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ca(-1);const i=ss(e);let o;try{o=t(...s)}finally{ss(i),r._d&&ca(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Js(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:g,ctx:E,inheritAttrs:S}=t;let $,R;const F=ss(t);try{if(n.shapeFlag&4){const q=s||r;$=ht(u.call(q,q,f,i,g,p,E)),R=l}else{const q=e;$=ht(q.length>1?q(i,{attrs:l,slots:a,emit:c}):q(i,null)),R=e.props?l:Vf(l)}}catch(q){nr.length=0,ks(q,t,1),$=_e(st)}let P=$;if(R&&S!==!1){const q=Object.keys(R),{shapeFlag:W}=P;q.length&&W&7&&(o&&q.some(Gi)&&(R=Bf(R,o)),P=Yt(P,R))}return n.dirs&&(P=Yt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),$=P,ss(F),$}const Vf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Is(n))&&((e||(e={}))[n]=t[n]);return e},Bf=(t,e)=>{const n={};for(const r in t)(!Gi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Zo(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!Cs(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Zo(r,o,c):!0:!!o;return!1}function Zo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Cs(n,i))return!0}return!1}function qf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const zf=t=>t.__isSuspense;function Kf(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):$f(t)}function Wr(t,e){if(Te){let n=Te.provides;const r=Te.parent&&Te.parent.provides;r===n&&(n=Te.provides=Object.create(r)),n[t]=e}}function mt(t,e,n=!1){const r=Te||Be;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r.proxy):e}}const Br={};function Zn(t,e,n){return yc(t,e,n)}function yc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=de){const a=Te;let l,c=!1,u=!1;if(me(t)?(l=()=>t.value,c=rs(t)):zt(t)?(l=()=>t,r=!0):U(t)?(u=!0,c=t.some(P=>zt(P)||rs(P)),l=()=>t.map(P=>{if(me(P))return P.value;if(zt(P))return an(P);if(H(P))return Kt(P,a,2)})):H(t)?e?l=()=>Kt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),We(t,a,3,[p])}:l=rt,e&&r){const P=l;l=()=>an(P())}let f,p=P=>{f=R.onStop=()=>{Kt(P,a,4)}},g;if(yr)if(p=rt,e?n&&We(e,a,3,[l(),u?[]:void 0,p]):l(),s==="sync"){const P=Bh();g=P.__watcherHandles||(P.__watcherHandles=[])}else return rt;let E=u?new Array(t.length).fill(Br):Br;const S=()=>{if(R.active)if(e){const P=R.run();(r||c||(u?P.some((q,W)=>fr(q,E[W])):fr(P,E)))&&(f&&f(),We(e,a,3,[P,E===Br?void 0:u&&E[0]===Br?[]:E,p]),E=P)}else R.run()};S.allowRecurse=!!e;let $;s==="sync"?$=S:s==="post"?$=()=>Me(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),$=()=>oo(S));const R=new Xi(l,$);e?n?S():E=R.run():s==="post"?Me(R.run.bind(R),a&&a.suspense):R.run();const F=()=>{R.stop(),a&&a.scope&&Ji(a.scope.effects,R)};return g&&g.push(F),F}function Wf(t,e,n){const r=this.proxy,s=we(t)?t.includes(".")?bc(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Te;Ln(this);const a=yc(s,i.bind(r),n);return o?Ln(o):un(),a}function bc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function an(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),me(t))an(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)an(t[n],e);else if(Es(t)||Cn(t))t.forEach(n=>{an(n,e)});else if(Kl(t))for(const n in t)an(t[n],e);return t}function Gf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ao(()=>{t.isMounted=!0}),Ec(()=>{t.isUnmounting=!0}),t}const Ke=[Function,Array],Jf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},setup(t,{slots:e}){const n=$c(),r=Gf();let s;return()=>{const i=e.default&&wc(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==st){o=S;break}}const a=te(t),{mode:l}=a;if(r.isLeaving)return Ys(o);const c=ea(o);if(!c)return Ys(o);const u=vi(c,a,r,n);wi(c,u);const f=n.subTree,p=f&&ea(f);let g=!1;const{getTransitionKey:E}=c.type;if(E){const S=E();s===void 0?s=S:S!==s&&(s=S,g=!0)}if(p&&p.type!==st&&(!rn(c,p)||g)){const S=vi(p,a,r,n);if(wi(p,S),l==="out-in")return r.isLeaving=!0,S.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Ys(o);l==="in-out"&&c.type!==st&&(S.delayLeave=($,R,F)=>{const P=vc(r,p);P[String(p.key)]=p,$._leaveCb=()=>{R(),$._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=F})}return o}}},Yf=Jf;function vc(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function vi(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:E,onBeforeAppear:S,onAppear:$,onAfterAppear:R,onAppearCancelled:F}=e,P=String(t.key),q=vc(n,t),W=(O,Y)=>{O&&We(O,r,9,Y)},oe=(O,Y)=>{const X=Y[1];W(O,Y),U(O)?O.every(ge=>ge.length<=1)&&X():O.length<=1&&X()},z={mode:i,persisted:o,beforeEnter(O){let Y=a;if(!n.isMounted)if(s)Y=S||a;else return;O._leaveCb&&O._leaveCb(!0);const X=q[P];X&&rn(t,X)&&X.el._leaveCb&&X.el._leaveCb(),W(Y,[O])},enter(O){let Y=l,X=c,ge=u;if(!n.isMounted)if(s)Y=$||l,X=R||c,ge=F||u;else return;let xe=!1;const Ue=O._enterCb=Oe=>{xe||(xe=!0,Oe?W(ge,[O]):W(X,[O]),z.delayedLeave&&z.delayedLeave(),O._enterCb=void 0)};Y?oe(Y,[O,Ue]):Ue()},leave(O,Y){const X=String(t.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return Y();W(f,[O]);let ge=!1;const xe=O._leaveCb=Ue=>{ge||(ge=!0,Y(),Ue?W(E,[O]):W(g,[O]),O._leaveCb=void 0,q[X]===t&&delete q[X])};q[X]=t,p?oe(p,[O,xe]):xe()},clone(O){return vi(O,e,n,r)}};return z}function Ys(t){if(Rs(t))return t=Yt(t),t.children=null,t}function ea(t){return Rs(t)?t.children?t.children[0]:void 0:t}function wi(t,e){t.shapeFlag&6&&t.component?wi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ne?(o.patchFlag&128&&s++,r=r.concat(wc(o.children,e,a))):(e||o.type!==st)&&r.push(a!=null?Yt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function xc(t){return H(t)?{setup:t,name:t.name}:t}const Gr=t=>!!t.type.__asyncLoader,Rs=t=>t.type.__isKeepAlive;function Qf(t,e){Ic(t,"a",e)}function Xf(t,e){Ic(t,"da",e)}function Ic(t,e,n=Te){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Os(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Rs(s.parent.vnode)&&Zf(r,e,n,s),s=s.parent}}function Zf(t,e,n,r){const s=Os(e,t,r,!0);Tc(()=>{Ji(r[e],s)},n)}function Os(t,e,n=Te,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qn(),Ln(n);const a=We(e,n,t,o);return un(),zn(),a});return r?s.unshift(i):s.push(i),i}}const Ot=t=>(e,n=Te)=>(!yr||t==="sp")&&Os(t,(...r)=>e(...r),n),eh=Ot("bm"),ao=Ot("m"),th=Ot("bu"),nh=Ot("u"),Ec=Ot("bum"),Tc=Ot("um"),rh=Ot("sp"),sh=Ot("rtg"),ih=Ot("rtc");function oh(t,e=Te){Os("ec",t,e)}function er(t,e){const n=Be;if(n===null)return t;const r=Ds(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=de]=e[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&an(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Xt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(qn(),We(l,n,8,[t.el,a,t,e]),zn())}}const Sc="components";function ah(t,e){return ch(Sc,t,!0,e)||t}const lh=Symbol();function ch(t,e,n=!0,r=!1){const s=Be||Te;if(s){const i=s.type;if(t===Sc){const a=Uh(i,!1);if(a&&(a===e||a===yt(e)||a===Ss(yt(e))))return i}const o=ta(s[t]||i[t],e)||ta(s.appContext[t],e);return!o&&r?i:o}}function ta(t,e){return t&&(t[e]||t[yt(e)]||t[Ss(yt(e))])}function na(t,e,n,r){let s;const i=n&&n[r];if(U(t)||we(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ce(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const xi=t=>t?Fc(t)?Ds(t)||t.proxy:xi(t.parent):null,tr=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xi(t.parent),$root:t=>xi(t.root),$emit:t=>t.emit,$options:t=>lo(t),$forceUpdate:t=>t.f||(t.f=()=>oo(t.update)),$nextTick:t=>t.n||(t.n=io.bind(t.proxy)),$watch:t=>Wf.bind(t)}),Qs=(t,e)=>t!==de&&!t.__isScriptSetup&&ee(t,e),uh={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Qs(r,e))return o[e]=1,r[e];if(s!==de&&ee(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ee(c,e))return o[e]=3,i[e];if(n!==de&&ee(n,e))return o[e]=4,n[e];Ii&&(o[e]=0)}}const u=tr[e];let f,p;if(u)return e==="$attrs"&&ze(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==de&&ee(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,ee(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Qs(s,e)?(s[e]=n,!0):r!==de&&ee(r,e)?(r[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==de&&ee(t,o)||Qs(e,o)||(a=i[0])&&ee(a,o)||ee(r,o)||ee(tr,o)||ee(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ii=!0;function dh(t){const e=lo(t),n=t.proxy,r=t.ctx;Ii=!1,e.beforeCreate&&ra(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:E,activated:S,deactivated:$,beforeDestroy:R,beforeUnmount:F,destroyed:P,unmounted:q,render:W,renderTracked:oe,renderTriggered:z,errorCaptured:O,serverPrefetch:Y,expose:X,inheritAttrs:ge,components:xe,directives:Ue,filters:Oe}=e;if(c&&fh(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ae in o){const se=o[ae];H(se)&&(r[ae]=se.bind(n))}if(s){const ae=s.call(n,n);ce(ae)&&(t.data=Kn(ae))}if(Ii=!0,i)for(const ae in i){const se=i[ae],Qe=H(se)?se.bind(n,n):H(se.get)?se.get.bind(n,n):rt,Qt=!H(se)&&H(se.set)?se.set.bind(n):rt,Xe=$e({get:Qe,set:Qt});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:De=>Xe.value=De})}if(a)for(const ae in a)Ac(a[ae],r,n,ae);if(l){const ae=H(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(se=>{Wr(se,ae[se])})}u&&ra(u,t,"c");function ye(ae,se){U(se)?se.forEach(Qe=>ae(Qe.bind(n))):se&&ae(se.bind(n))}if(ye(eh,f),ye(ao,p),ye(th,g),ye(nh,E),ye(Qf,S),ye(Xf,$),ye(oh,O),ye(ih,oe),ye(sh,z),ye(Ec,F),ye(Tc,q),ye(rh,Y),U(X))if(X.length){const ae=t.exposed||(t.exposed={});X.forEach(se=>{Object.defineProperty(ae,se,{get:()=>n[se],set:Qe=>n[se]=Qe})})}else t.exposed||(t.exposed={});W&&t.render===rt&&(t.render=W),ge!=null&&(t.inheritAttrs=ge),xe&&(t.components=xe),Ue&&(t.directives=Ue)}function fh(t,e,n=rt,r=!1){U(t)&&(t=Ei(t));for(const s in t){const i=t[s];let o;ce(i)?"default"in i?o=mt(i.from||s,i.default,!0):o=mt(i.from||s):o=mt(i),me(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function ra(t,e,n){We(U(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ac(t,e,n,r){const s=r.includes(".")?bc(n,r):()=>n[r];if(we(t)){const i=e[t];H(i)&&Zn(s,i)}else if(H(t))Zn(s,t.bind(n));else if(ce(t))if(U(t))t.forEach(i=>Ac(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&Zn(s,i,t)}}function lo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>is(l,c,o,!0)),is(l,e,o)),ce(e)&&i.set(e,l),l}function is(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&is(t,i,n,!0),s&&s.forEach(o=>is(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=hh[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const hh={data:sa,props:en,emits:en,methods:en,computed:en,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:en,directives:en,watch:mh,provide:sa,inject:ph};function sa(t,e){return e?t?function(){return Ce(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function ph(t,e){return en(Ei(t),Ei(e))}function Ei(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function en(t,e){return t?Ce(Ce(Object.create(null),t),e):e}function mh(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const r in e)n[r]=Pe(t[r],e[r]);return n}function gh(t,e,n,r=!1){const s={},i={};ns(i,Ns,1),t.propsDefaults=Object.create(null),kc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Tf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function _h(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=te(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Cs(t.emitsOptions,p))continue;const g=e[p];if(l)if(ee(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const E=yt(p);s[E]=Ti(l,a,E,g,t,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{kc(t,e,s,i)&&(c=!0);let u;for(const f in a)(!e||!ee(e,f)&&((u=Hn(f))===f||!ee(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ti(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ee(e,f))&&(delete i[f],c=!0)}c&&St(t,"set","$attrs")}function kc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(zr(l))continue;const c=e[l];let u;s&&ee(s,u=yt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Cs(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=te(n),c=a||de;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Ti(s,l,f,c[f],t,!ee(c,f))}}return o}function Ti(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Ln(s),r=c[n]=l.call(null,e),un())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Hn(n))&&(r=!0))}return r}function Cc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!H(t)){const u=f=>{l=!0;const[p,g]=Cc(f,e,!0);Ce(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ce(t)&&r.set(t,kn),kn;if(U(i))for(let u=0;u<i.length;u++){const f=yt(i[u]);ia(f)&&(o[f]=de)}else if(i)for(const u in i){const f=yt(u);if(ia(f)){const p=i[u],g=o[f]=U(p)||H(p)?{type:p}:Object.assign({},p);if(g){const E=la(Boolean,g.type),S=la(String,g.type);g[0]=E>-1,g[1]=S<0||E<S,(E>-1||ee(g,"default"))&&a.push(f)}}}const c=[o,a];return ce(t)&&r.set(t,c),c}function ia(t){return t[0]!=="$"}function oa(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function aa(t,e){return oa(t)===oa(e)}function la(t,e){return U(e)?e.findIndex(n=>aa(n,t)):H(e)&&aa(e,t)?0:-1}const Rc=t=>t[0]==="_"||t==="$stable",co=t=>U(t)?t.map(ht):[ht(t)],yh=(t,e,n)=>{if(e._n)return e;const r=jf((...s)=>co(e(...s)),n);return r._c=!1,r},Oc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Rc(s))continue;const i=t[s];if(H(i))e[s]=yh(s,i,r);else if(i!=null){const o=co(i);e[s]=()=>o}}},Pc=(t,e)=>{const n=co(e);t.slots.default=()=>n},bh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),ns(e,"_",n)):Oc(e,t.slots={})}else t.slots={},e&&Pc(t,e);ns(t.slots,Ns,1)},vh=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=de;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ce(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Oc(e,s)),o=e}else e&&(Pc(t,e),o={default:1});if(i)for(const a in s)!Rc(a)&&!(a in o)&&delete s[a]};function Nc(){return{app:null,config:{isNativeTag:Hd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wh=0;function xh(t,e){return function(r,s=null){H(r)||(r=Object.assign({},r)),s!=null&&!ce(s)&&(s=null);const i=Nc(),o=new Set;let a=!1;const l=i.app={_uid:wh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hh,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&H(c.install)?(o.add(c),c.install(l,...u)):H(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,f){if(!a){const p=_e(r,s);return p.appContext=i,u&&e?e(p,c):t(p,c,f),a=!0,l._container=c,c.__vue_app__=l,Ds(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function Si(t,e,n,r,s=!1){if(U(t)){t.forEach((p,g)=>Si(p,e&&(U(e)?e[g]:e),n,r,s));return}if(Gr(r)&&!s)return;const i=r.shapeFlag&4?Ds(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===de?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(we(c)?(u[c]=null,ee(f,c)&&(f[c]=null)):me(c)&&(c.value=null)),H(l))Kt(l,a,12,[o,u]);else{const p=we(l),g=me(l);if(p||g){const E=()=>{if(t.f){const S=p?ee(f,l)?f[l]:u[l]:l.value;s?U(S)&&Ji(S,i):U(S)?S.includes(i)||S.push(i):p?(u[l]=[i],ee(f,l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else p?(u[l]=o,ee(f,l)&&(f[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Me(E,n)):E()}}}const Me=Kf;function Ih(t){return Eh(t)}function Eh(t,e){const n=Jd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=rt,insertStaticContent:E}=t,S=(d,h,m,_=null,v=null,I=null,k=!1,x=null,T=!!h.dynamicChildren)=>{if(d===h)return;d&&!rn(d,h)&&(_=A(d),De(d,v,I,!0),d=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:w,ref:M,shapeFlag:N}=h;switch(w){case Ps:$(d,h,m,_);break;case st:R(d,h,m,_);break;case Jr:d==null&&F(h,m,_,k);break;case Ne:xe(d,h,m,_,v,I,k,x,T);break;default:N&1?W(d,h,m,_,v,I,k,x,T):N&6?Ue(d,h,m,_,v,I,k,x,T):(N&64||N&128)&&w.process(d,h,m,_,v,I,k,x,T,Z)}M!=null&&v&&Si(M,d&&d.ref,I,h||d,!h)},$=(d,h,m,_)=>{if(d==null)r(h.el=a(h.children),m,_);else{const v=h.el=d.el;h.children!==d.children&&c(v,h.children)}},R=(d,h,m,_)=>{d==null?r(h.el=l(h.children||""),m,_):h.el=d.el},F=(d,h,m,_)=>{[d.el,d.anchor]=E(d.children,h,m,_,d.el,d.anchor)},P=({el:d,anchor:h},m,_)=>{let v;for(;d&&d!==h;)v=p(d),r(d,m,_),d=v;r(h,m,_)},q=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},W=(d,h,m,_,v,I,k,x,T)=>{k=k||h.type==="svg",d==null?oe(h,m,_,v,I,k,x,T):Y(d,h,v,I,k,x,T)},oe=(d,h,m,_,v,I,k,x)=>{let T,w;const{type:M,props:N,shapeFlag:L,transition:B,dirs:J}=d;if(T=d.el=o(d.type,I,N&&N.is,N),L&8?u(T,d.children):L&16&&O(d.children,T,null,_,v,I&&M!=="foreignObject",k,x),J&&Xt(d,null,_,"created"),N){for(const ie in N)ie!=="value"&&!zr(ie)&&i(T,ie,null,N[ie],I,d.children,_,v,C);"value"in N&&i(T,"value",null,N.value),(w=N.onVnodeBeforeMount)&&dt(w,_,d)}z(T,d,d.scopeId,k,_),J&&Xt(d,null,_,"beforeMount");const le=(!v||v&&!v.pendingBranch)&&B&&!B.persisted;le&&B.beforeEnter(T),r(T,h,m),((w=N&&N.onVnodeMounted)||le||J)&&Me(()=>{w&&dt(w,_,d),le&&B.enter(T),J&&Xt(d,null,_,"mounted")},v)},z=(d,h,m,_,v)=>{if(m&&g(d,m),_)for(let I=0;I<_.length;I++)g(d,_[I]);if(v){let I=v.subTree;if(h===I){const k=v.vnode;z(d,k,k.scopeId,k.slotScopeIds,v.parent)}}},O=(d,h,m,_,v,I,k,x,T=0)=>{for(let w=T;w<d.length;w++){const M=d[w]=x?Lt(d[w]):ht(d[w]);S(null,M,h,m,_,v,I,k,x)}},Y=(d,h,m,_,v,I,k)=>{const x=h.el=d.el;let{patchFlag:T,dynamicChildren:w,dirs:M}=h;T|=d.patchFlag&16;const N=d.props||de,L=h.props||de;let B;m&&Zt(m,!1),(B=L.onVnodeBeforeUpdate)&&dt(B,m,h,d),M&&Xt(h,d,m,"beforeUpdate"),m&&Zt(m,!0);const J=v&&h.type!=="foreignObject";if(w?X(d.dynamicChildren,w,x,m,_,J,I):k||se(d,h,x,null,m,_,J,I,!1),T>0){if(T&16)ge(x,h,N,L,m,_,v);else if(T&2&&N.class!==L.class&&i(x,"class",null,L.class,v),T&4&&i(x,"style",N.style,L.style,v),T&8){const le=h.dynamicProps;for(let ie=0;ie<le.length;ie++){const be=le[ie],Ze=N[be],xn=L[be];(xn!==Ze||be==="value")&&i(x,be,Ze,xn,v,d.children,m,_,C)}}T&1&&d.children!==h.children&&u(x,h.children)}else!k&&w==null&&ge(x,h,N,L,m,_,v);((B=L.onVnodeUpdated)||M)&&Me(()=>{B&&dt(B,m,h,d),M&&Xt(h,d,m,"updated")},_)},X=(d,h,m,_,v,I,k)=>{for(let x=0;x<h.length;x++){const T=d[x],w=h[x],M=T.el&&(T.type===Ne||!rn(T,w)||T.shapeFlag&70)?f(T.el):m;S(T,w,M,null,_,v,I,k,!0)}},ge=(d,h,m,_,v,I,k)=>{if(m!==_){if(m!==de)for(const x in m)!zr(x)&&!(x in _)&&i(d,x,m[x],null,k,h.children,v,I,C);for(const x in _){if(zr(x))continue;const T=_[x],w=m[x];T!==w&&x!=="value"&&i(d,x,w,T,k,h.children,v,I,C)}"value"in _&&i(d,"value",m.value,_.value)}},xe=(d,h,m,_,v,I,k,x,T)=>{const w=h.el=d?d.el:a(""),M=h.anchor=d?d.anchor:a("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:B}=h;B&&(x=x?x.concat(B):B),d==null?(r(w,m,_),r(M,m,_),O(h.children,m,M,v,I,k,x,T)):N>0&&N&64&&L&&d.dynamicChildren?(X(d.dynamicChildren,L,m,v,I,k,x),(h.key!=null||v&&h===v.subTree)&&Dc(d,h,!0)):se(d,h,m,M,v,I,k,x,T)},Ue=(d,h,m,_,v,I,k,x,T)=>{h.slotScopeIds=x,d==null?h.shapeFlag&512?v.ctx.activate(h,m,_,k,T):Oe(h,m,_,v,I,k,T):Ie(d,h,T)},Oe=(d,h,m,_,v,I,k)=>{const x=d.component=Dh(d,_,v);if(Rs(d)&&(x.ctx.renderer=Z),Mh(x),x.asyncDep){if(v&&v.registerDep(x,ye),!d.el){const T=x.subTree=_e(st);R(null,T,h,m)}return}ye(x,d,h,m,v,I,k)},Ie=(d,h,m)=>{const _=h.component=d.component;if(Hf(d,h,m))if(_.asyncDep&&!_.asyncResolved){ae(_,h,m);return}else _.next=h,Lf(_.update),_.update();else h.el=d.el,_.vnode=h},ye=(d,h,m,_,v,I,k)=>{const x=()=>{if(d.isMounted){let{next:M,bu:N,u:L,parent:B,vnode:J}=d,le=M,ie;Zt(d,!1),M?(M.el=J.el,ae(d,M,k)):M=J,N&&Kr(N),(ie=M.props&&M.props.onVnodeBeforeUpdate)&&dt(ie,B,M,J),Zt(d,!0);const be=Js(d),Ze=d.subTree;d.subTree=be,S(Ze,be,f(Ze.el),A(Ze),d,v,I),M.el=be.el,le===null&&qf(d,be.el),L&&Me(L,v),(ie=M.props&&M.props.onVnodeUpdated)&&Me(()=>dt(ie,B,M,J),v)}else{let M;const{el:N,props:L}=h,{bm:B,m:J,parent:le}=d,ie=Gr(h);if(Zt(d,!1),B&&Kr(B),!ie&&(M=L&&L.onVnodeBeforeMount)&&dt(M,le,h),Zt(d,!0),N&&G){const be=()=>{d.subTree=Js(d),G(N,d.subTree,d,v,null)};ie?h.type.__asyncLoader().then(()=>!d.isUnmounted&&be()):be()}else{const be=d.subTree=Js(d);S(null,be,m,_,d,v,I),h.el=be.el}if(J&&Me(J,v),!ie&&(M=L&&L.onVnodeMounted)){const be=h;Me(()=>dt(M,le,be),v)}(h.shapeFlag&256||le&&Gr(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&Me(d.a,v),d.isMounted=!0,h=m=_=null}},T=d.effect=new Xi(x,()=>oo(w),d.scope),w=d.update=()=>T.run();w.id=d.uid,Zt(d,!0),w()},ae=(d,h,m)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,_h(d,h.props,_,m),vh(d,h.children,m),qn(),Xo(),zn()},se=(d,h,m,_,v,I,k,x,T=!1)=>{const w=d&&d.children,M=d?d.shapeFlag:0,N=h.children,{patchFlag:L,shapeFlag:B}=h;if(L>0){if(L&128){Qt(w,N,m,_,v,I,k,x,T);return}else if(L&256){Qe(w,N,m,_,v,I,k,x,T);return}}B&8?(M&16&&C(w,v,I),N!==w&&u(m,N)):M&16?B&16?Qt(w,N,m,_,v,I,k,x,T):C(w,v,I,!0):(M&8&&u(m,""),B&16&&O(N,m,_,v,I,k,x,T))},Qe=(d,h,m,_,v,I,k,x,T)=>{d=d||kn,h=h||kn;const w=d.length,M=h.length,N=Math.min(w,M);let L;for(L=0;L<N;L++){const B=h[L]=T?Lt(h[L]):ht(h[L]);S(d[L],B,m,null,v,I,k,x,T)}w>M?C(d,v,I,!0,!1,N):O(h,m,_,v,I,k,x,T,N)},Qt=(d,h,m,_,v,I,k,x,T)=>{let w=0;const M=h.length;let N=d.length-1,L=M-1;for(;w<=N&&w<=L;){const B=d[w],J=h[w]=T?Lt(h[w]):ht(h[w]);if(rn(B,J))S(B,J,m,null,v,I,k,x,T);else break;w++}for(;w<=N&&w<=L;){const B=d[N],J=h[L]=T?Lt(h[L]):ht(h[L]);if(rn(B,J))S(B,J,m,null,v,I,k,x,T);else break;N--,L--}if(w>N){if(w<=L){const B=L+1,J=B<M?h[B].el:_;for(;w<=L;)S(null,h[w]=T?Lt(h[w]):ht(h[w]),m,J,v,I,k,x,T),w++}}else if(w>L)for(;w<=N;)De(d[w],v,I,!0),w++;else{const B=w,J=w,le=new Map;for(w=J;w<=L;w++){const je=h[w]=T?Lt(h[w]):ht(h[w]);je.key!=null&&le.set(je.key,w)}let ie,be=0;const Ze=L-J+1;let xn=!1,jo=0;const Yn=new Array(Ze);for(w=0;w<Ze;w++)Yn[w]=0;for(w=B;w<=N;w++){const je=d[w];if(be>=Ze){De(je,v,I,!0);continue}let ut;if(je.key!=null)ut=le.get(je.key);else for(ie=J;ie<=L;ie++)if(Yn[ie-J]===0&&rn(je,h[ie])){ut=ie;break}ut===void 0?De(je,v,I,!0):(Yn[ut-J]=w+1,ut>=jo?jo=ut:xn=!0,S(je,h[ut],m,null,v,I,k,x,T),be++)}const Vo=xn?Th(Yn):kn;for(ie=Vo.length-1,w=Ze-1;w>=0;w--){const je=J+w,ut=h[je],Bo=je+1<M?h[je+1].el:_;Yn[w]===0?S(null,ut,m,Bo,v,I,k,x,T):xn&&(ie<0||w!==Vo[ie]?Xe(ut,m,Bo,2):ie--)}}},Xe=(d,h,m,_,v=null)=>{const{el:I,type:k,transition:x,children:T,shapeFlag:w}=d;if(w&6){Xe(d.component.subTree,h,m,_);return}if(w&128){d.suspense.move(h,m,_);return}if(w&64){k.move(d,h,m,Z);return}if(k===Ne){r(I,h,m);for(let N=0;N<T.length;N++)Xe(T[N],h,m,_);r(d.anchor,h,m);return}if(k===Jr){P(d,h,m);return}if(_!==2&&w&1&&x)if(_===0)x.beforeEnter(I),r(I,h,m),Me(()=>x.enter(I),v);else{const{leave:N,delayLeave:L,afterLeave:B}=x,J=()=>r(I,h,m),le=()=>{N(I,()=>{J(),B&&B()})};L?L(I,J,le):le()}else r(I,h,m)},De=(d,h,m,_=!1,v=!1)=>{const{type:I,props:k,ref:x,children:T,dynamicChildren:w,shapeFlag:M,patchFlag:N,dirs:L}=d;if(x!=null&&Si(x,null,m,d,!0),M&256){h.ctx.deactivate(d);return}const B=M&1&&L,J=!Gr(d);let le;if(J&&(le=k&&k.onVnodeBeforeUnmount)&&dt(le,h,d),M&6)b(d.component,m,_);else{if(M&128){d.suspense.unmount(m,_);return}B&&Xt(d,null,h,"beforeUnmount"),M&64?d.type.remove(d,h,m,v,Z,_):w&&(I!==Ne||N>0&&N&64)?C(w,h,m,!1,!0):(I===Ne&&N&384||!v&&M&16)&&C(T,h,m),_&&wn(d)}(J&&(le=k&&k.onVnodeUnmounted)||B)&&Me(()=>{le&&dt(le,h,d),B&&Xt(d,null,h,"unmounted")},m)},wn=d=>{const{type:h,el:m,anchor:_,transition:v}=d;if(h===Ne){Lr(m,_);return}if(h===Jr){q(d);return}const I=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:k,delayLeave:x}=v,T=()=>k(m,I);x?x(d.el,I,T):T()}else I()},Lr=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},b=(d,h,m)=>{const{bum:_,scope:v,update:I,subTree:k,um:x}=d;_&&Kr(_),v.stop(),I&&(I.active=!1,De(k,d,h,m)),x&&Me(x,h),Me(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},C=(d,h,m,_=!1,v=!1,I=0)=>{for(let k=I;k<d.length;k++)De(d[k],h,m,_,v)},A=d=>d.shapeFlag&6?A(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),D=(d,h,m)=>{d==null?h._vnode&&De(h._vnode,null,null,!0):S(h._vnode||null,d,h,null,null,null,m),Xo(),pc(),h._vnode=d},Z={p:S,um:De,m:Xe,r:wn,mt:Oe,mc:O,pc:se,pbc:X,n:A,o:t};let he,G;return e&&([he,G]=e(Z)),{render:D,hydrate:he,createApp:xh(D,he)}}function Zt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Dc(t,e,n=!1){const r=t.children,s=e.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Lt(s[i]),a.el=o.el),n||Dc(o,a)),a.type===Ps&&(a.el=o.el)}}function Th(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Sh=t=>t.__isTeleport,Ne=Symbol(void 0),Ps=Symbol(void 0),st=Symbol(void 0),Jr=Symbol(void 0),nr=[];let nt=null;function fe(t=!1){nr.push(nt=t?null:[])}function Ah(){nr.pop(),nt=nr[nr.length-1]||null}let _r=1;function ca(t){_r+=t}function Mc(t){return t.dynamicChildren=_r>0?nt||kn:null,Ah(),_r>0&&nt&&nt.push(t),t}function pe(t,e,n,r,s,i){return Mc(y(t,e,n,r,s,i,!0))}function kh(t,e,n,r,s){return Mc(_e(t,e,n,r,s,!0))}function Ai(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const Ns="__vInternal",Lc=({key:t})=>t??null,Yr=({ref:t,ref_key:e,ref_for:n})=>t!=null?we(t)||me(t)||H(t)?{i:Be,r:t,k:e,f:!!n}:t:null;function y(t,e=null,n=null,r=0,s=null,i=t===Ne?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lc(e),ref:e&&Yr(e),scopeId:_c,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Be};return a?(uo(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=we(n)?8:16),_r>0&&!o&&nt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&nt.push(l),l}const _e=Ch;function Ch(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===lh)&&(t=st),Ai(t)){const a=Yt(t,e,!0);return n&&uo(a,n),_r>0&&!i&&nt&&(a.shapeFlag&6?nt[nt.indexOf(t)]=a:nt.push(a)),a.patchFlag|=-2,a}if(jh(t)&&(t=t.__vccOpts),e){e=Rh(e);let{class:a,style:l}=e;a&&!we(a)&&(e.class=ws(a)),ce(l)&&(oc(l)&&!U(l)&&(l=Ce({},l)),e.style=Wi(l))}const o=we(t)?1:zf(t)?128:Sh(t)?64:ce(t)?4:H(t)?2:0;return y(t,e,n,r,s,o,i,!0)}function Rh(t){return t?oc(t)||Ns in t?Ce({},t):t:null}function Yt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Oh(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Lc(a),ref:e&&e.ref?n&&s?U(s)?s.concat(Yr(e)):[s,Yr(e)]:Yr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yt(t.ssContent),ssFallback:t.ssFallback&&Yt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function ki(t=" ",e=0){return _e(Ps,null,t,e)}function Wn(t,e){const n=_e(Jr,null,t);return n.staticCount=e,n}function xt(t="",e=!1){return e?(fe(),kh(st,null,t)):_e(st,null,t)}function ht(t){return t==null||typeof t=="boolean"?_e(st):U(t)?_e(Ne,null,t.slice()):typeof t=="object"?Lt(t):_e(Ps,null,String(t))}function Lt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yt(t)}function uo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),uo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ns in e)?e._ctx=Be:s===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),r&64?(n=16,e=[ki(e)]):n=8);t.children=e,t.shapeFlag|=n}function Oh(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ws([e.class,r.class]));else if(s==="style")e.style=Wi([e.style,r.style]);else if(Is(s)){const i=e[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function dt(t,e,n,r=null){We(t,e,7,[n,r])}const Ph=Nc();let Nh=0;function Dh(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ph,i={uid:Nh++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cc(r,s),emitsOptions:gc(r,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Uf.bind(null,i),t.ce&&t.ce(i),i}let Te=null;const $c=()=>Te||Be,Ln=t=>{Te=t,t.scope.on()},un=()=>{Te&&Te.scope.off(),Te=null};function Fc(t){return t.vnode.shapeFlag&4}let yr=!1;function Mh(t,e=!1){yr=e;const{props:n,children:r}=t.vnode,s=Fc(t);gh(t,n,s,e),bh(t,r);const i=s?Lh(t,e):void 0;return yr=!1,i}function Lh(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Mn(new Proxy(t.ctx,uh));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Fh(t):null;Ln(t),qn();const i=Kt(r,t,0,[t.props,s]);if(zn(),un(),ql(i)){if(i.then(un,un),e)return i.then(o=>{ua(t,o,e)}).catch(o=>{ks(o,t,0)});t.asyncDep=i}else ua(t,i,e)}else Uc(t,e)}function ua(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=uc(e)),Uc(t,n)}let da;function Uc(t,e,n){const r=t.type;if(!t.render){if(!e&&da&&!r.render){const s=r.template||lo(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Ce(Ce({isCustomElement:i,delimiters:a},o),l);r.render=da(s,c)}}t.render=r.render||rt}Ln(t),qn(),dh(t),zn(),un()}function $h(t){return new Proxy(t.attrs,{get(e,n){return ze(t,"get","$attrs"),e[n]}})}function Fh(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=$h(t))},slots:t.slots,emit:t.emit,expose:e}}function Ds(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(uc(Mn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in tr)return tr[n](t)},has(e,n){return n in e||n in tr}}))}function Uh(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function jh(t){return H(t)&&"__vccOpts"in t}const $e=(t,e)=>Nf(t,e,yr);function jc(t,e,n){const r=arguments.length;return r===2?ce(e)&&!U(e)?Ai(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ai(n)&&(n=[n]),_e(t,e,n))}const Vh=Symbol(""),Bh=()=>mt(Vh),Hh="3.2.45",qh="http://www.w3.org/2000/svg",sn=typeof document<"u"?document:null,fa=sn&&sn.createElement("template"),zh={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?sn.createElementNS(qh,t):sn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sn.createTextNode(t),createComment:t=>sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{fa.innerHTML=r?`<svg>${t}</svg>`:t;const a=fa.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Kh(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Wh(t,e,n){const r=t.style,s=we(n);if(n&&!s){for(const i in n)Ci(r,i,n[i]);if(e&&!we(e))for(const i in e)n[i]==null&&Ci(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ha=/\s*!important$/;function Ci(t,e,n){if(U(n))n.forEach(r=>Ci(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Gh(t,e);ha.test(n)?t.setProperty(Hn(r),n.replace(ha,""),"important"):t[r]=n}}const pa=["Webkit","Moz","ms"],Xs={};function Gh(t,e){const n=Xs[e];if(n)return n;let r=yt(e);if(r!=="filter"&&r in t)return Xs[e]=r;r=Ss(r);for(let s=0;s<pa.length;s++){const i=pa[s]+r;if(i in t)return Xs[e]=i}return e}const ma="http://www.w3.org/1999/xlink";function Jh(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ma,e.slice(6,e.length)):t.setAttributeNS(ma,e,n);else{const i=jd(e);n==null||i&&!Bl(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Yh(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Bl(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function on(t,e,n,r){t.addEventListener(e,n,r)}function Qh(t,e,n,r){t.removeEventListener(e,n,r)}function Xh(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Zh(e);if(r){const c=i[e]=np(r,s);on(t,a,c,l)}else o&&(Qh(t,a,o,l),i[e]=void 0)}}const ga=/(?:Once|Passive|Capture)$/;function Zh(t){let e;if(ga.test(t)){e={};let r;for(;r=t.match(ga);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hn(t.slice(2)),e]}let Zs=0;const ep=Promise.resolve(),tp=()=>Zs||(ep.then(()=>Zs=0),Zs=Date.now());function np(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;We(rp(r,n.value),e,5,[r])};return n.value=t,n.attached=tp(),n}function rp(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _a=/^on[a-z]/,sp=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?Kh(t,r,s):e==="style"?Wh(t,n,r):Is(e)?Gi(e)||Xh(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ip(t,e,r,s))?Yh(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Jh(t,e,r,s))};function ip(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&_a.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||_a.test(e)&&we(n)?!1:e in t}const op={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Yf.props;const os=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>Kr(e,n):e};function ap(t){t.target.composing=!0}function ya(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ei={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=os(s);const i=r||s.props&&s.props.type==="number";on(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=hr(a)),t._assign(a)}),n&&on(t,"change",()=>{t.value=t.value.trim()}),e||(on(t,"compositionstart",ap),on(t,"compositionend",ya),on(t,"change",ya))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=os(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&hr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},ba={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Es(e);on(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?hr(as(o)):as(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=os(r)},mounted(t,{value:e}){va(t,e)},beforeUpdate(t,e,n){t._assign=os(n)},updated(t,{value:e}){va(t,e)}};function va(t,e){const n=t.multiple;if(!(n&&!U(e)&&!Es(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=as(i);if(n)U(e)?i.selected=Bd(e,o)>-1:i.selected=e.has(o);else if(xs(as(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function as(t){return"_value"in t?t._value:t.value}const lp=Ce({patchProp:sp},zh);let wa;function cp(){return wa||(wa=Ih(lp))}const up=(...t)=>{const e=cp().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=dp(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function dp(t){return we(t)?document.querySelector(t):t}const fp="/assets/personajeODM-860404cc.png";const Ms=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},hp={setup(){let t=fn(!1);return{showMenu:t,toggleNav:()=>t.value=!t.value}}},pp={class:"w-screen -mb-10 sm:w-auto"},mp={class:"w-screen"},gp={class:"xl:bg-white pt-10"},_p={class:"container px-6 py-8 mr-20 mx-auto md:flex md:justify-between md:items-center"},yp={class:"flex items-center justify-between"},bp=y("button",{type:"button",class:"text-[#003368] hover:text-gray-900 focus:outline-none focus:text-gray-800"},[y("svg",{viewBox:"0 0 24 24",class:"w-20 h-18 fill-current"},[y("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})])],-1),vp=[bp],wp=Wn('<li class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]"><a href="#">Tipos<br>de envíos</a></li><li class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]"><a href="/#">Cobertura<br> de envíos </a></li><li class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]"><a href=""> Calcula<br> tu paquete</a></li><li class="text-[#003368] hover:text-blue-600 font-extrabold text-2xl text-center sm:text-white md:text-[#003368] xl:text-[#003368]"><a href="">Tarifas<br> preferenciales </a></li>',4),xp=[wp],Ip=Wn('<div class="w-screen mt-[-100px] bg-inherit py-40 px-48 text-start text-neutral-800"><h1 class="mb-6 text-[#003368] text-9xl font-bold blue:bg-neutral-700 lg:pl-[-30px] md:pl-[20px] xl:ml-[10px] sm:ml-[-100px] tracking-widest lg:text-6xl md:text-5xl sm:text-5xl"> AHORRA HASTA 60% EN <br>LOGÍSTICA PARA TU <br> EMPRESA </h1><ul class="xl:flex flex-col xl:space-y-4 list-disc xl:object-left py-5 xl:w-auto xl:pt-20 xl:pb-20 xl:text-3xl xl:ml-[-20px] sm:text-2xl sm:pb-20 sm:space-y-2 sm:w-[500px] sm:ml-[-100px]"><li>Tarifas preferenciales para empresas</li><li> Envía y recibe paquetes el mismo día <p class="text-gray-500 inline">(sin costo extra)</p></li><li> Cobertura en zonas extendidad <p class="text-gray-500 inline">(sin costo extra)</p></li><li> Servicio ocurre, en más de 50 ciudades <p class="text-gray-500 inline">(Bajío, Norte y Centro del país)</p></li></ul><img class="w-80 h-auto grid justify-items-end float-right mt-[-550px] xl:opacity-100 sm:opacity-0" src="'+fp+'"><div class="container px-32 xl:ml-[20px] sm:ml-[-298px]"><button class="bg-[#003368] w-[600px] h-28 hover:bg-blue-600 text-white text-4xl font-extrabold py-2 px-4 rounded-full"> Tarifas preferenciales </button></div></div>',1);function Ep(t,e,n,r,s,i){return fe(),pe("div",pp,[y("header",mp,[y("div",gp,[y("nav",_p,[y("div",yp,[y("div",{onClick:e[0]||(e[0]=(...o)=>r.toggleNav&&r.toggleNav(...o)),class:"flex md:hidden"},vp)]),y("ul",{class:ws([r.showMenu?"flex":"hidden","flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 xl:bg-white lg:bg-white md:bg-white sm:bg-[#003368]"])},xp,2)])]),Ip])])}const Tp=Ms(hp,[["render",Ep]]),Sp="/assets/SobreODM-8ea1740b.png",xa="/assets/CajaODM-b82f9c47.png",Ap="/assets/maleta-4df1ca78.png",kp={},Cp={class:"xl:bg-gray-300 xl:w-screen h-auto sm:bg-gray-300 sm:w-screen"},Rp=Wn('<h1 class="text-4xl font-extrabold capitalize px-14 py-14 pl-32"> TIPOS DE ENVÍOS </h1><div class="xl:flex xl:justify-around xl:flex-row sm:flex sm:justify-center sm:flex-col xl:space-y-0 xl:space-x-0 sm:space-x-20 sm:space-y-5"><div class="flex xl:flex-col xl:w-72 xl:h-[450px] sm:h-40 sm:w-9/12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] xl:ml-0 sm:ml-20"><div class="p-4 md:p-5 sm:p-0"><h3 class="xl:text-3xl xl:ml-0 sm:ml-5 font-extrabold text-center text-gray-800 dark:text-white xl:pt-7 sm:text-2xl sm:text-center sm:pt-5"> Sobres </h3><p class="xl:mt-1 xl:ml-0 text-2xl xl:pt-20 xl:pb-5 xl:text-gray-800 xl:text-center xl:dark:text-gray-400 sm:pt-auto sm:ml-12 sm:text-left sm:dark:text-gray-400"> Hasta un máximo de 25 hojas. </p></div><img class="xl:w-48 xl:h-32 xl:mt-10 xl:ml-1 xl:pr-0 sm:pr-3 sm:ml-[10px] sm:w-48 sm:h-32 rounded-b-xl place-self-center inline-block xl:align-bottom sm:align-right" src="'+Sp+'" alt="Image Description"></div><div class="flex xl:flex-col xl:w-72 xl:h-[450px] sm:h-40 sm:w-9/12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"><div class="p-4 md:p-5"><h3 class="xl:text-3xl font-extrabold xl:text-center text-gray-800 dark:text-white xl:pt-7 sm:text-2xl sm:text-center sm:pt-3"> Paquetes </h3><p class="xl:mt-1 xl:ml-0 text-2xl xl:pt-20 xl:pb-5 sm:pt-2 sm:ml-5 sm:text-center text-gray-800 xl:text-center dark:text-gray-400"> De 0 - 1 Kg. </p></div><img class="xl:w-36 xl:h-32 xl:mt-14 sm:w-32 xl:ml-2 sm:ml-40 sm:h-32 rounded-b-xl place-self-center inline-block align-bottom" src="'+xa+'" alt="Image Description"></div><div class="flex xl:flex-col xl:w-72 xl:h-[450px] sm:h-48 sm:w-9/12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"><div class="p-4 md:p-5"><h3 class="xl:text-3xl font-extrabold text-center text-gray-800 dark:text-white xl:pt-7 sm:text-2xl sm:text-center sm:pt-3"> Cajas </h3><p class="mt-1 text-2xl xl:pt-16 text-gray-800 text-center dark:text-gray-400 sm:pt-2 sm:ml-5 sm:text-center"> De 01 - 10 Kg. <br> De 11 - 20 Kg. <br> De 21 - 30 Kg. <br></p></div><img class="xl:w-44 xl:h-36 xl:mt-6 xl:ml-2 sm:w-42 sm:ml-32 sm:h-32 rounded-b-xl place-self-center inline-block align-bottom" src="'+xa+'" alt="Image Description"></div><div class="flex xl:flex-col xl:w-72 xl:h-[450px] sm:h-48 sm:w-9/12 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"><div class="p-4 md:p-5"><h3 class="xl:text-3xl font-extrabold text-center text-gray-800 dark:text-white xl:pt-7 sm:text-2xl sm:text-center sm:pt-3"> Maletas </h3><p class="mt-1 text-2xl xl:pt-16 text-gray-800 text-center dark:text-gray-400 sm:pt-2 sm:ml-5 sm:text-center"> De 01 - 10 Kg. <br> De 11 - 20 Kg. <br> De 21 - 30 Kg. <br></p></div><img class="xl:w-28 xl:h-40 xl:mt-2 xl:ml-2 sm:w-28 sm:ml-36 sm:h-36 rounded-b-xl place-self-center inline-block align-bottom" src="'+Ap+'" alt="Image Description"></div></div><div class="h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl"><p>VOLUMEN MÁXIMO EN TU ENVÍO:</p><p>65 X 50 X 55 = 30cm^3</p></div>',3),Op=[Rp];function Pp(t,e){return fe(),pe("div",Cp,Op)}const Np=Ms(kp,[["render",Pp]]),Dp="/assets/caja-0d47acde.png",Mp=y("h1",{class:"text-4xl font-extrabold capitalize px-14 py-14 pl-32"}," CALCULA EL PESO DE TU PAQUETE ",-1),Lp={class:"container md:container md:mx-auto my-5 w-screen"},$p={className:"flex flex-col  w-full"},Fp=y("div",{class:"flex flex-wrap justify-center pt-10 pb-10"},[y("img",{src:Dp,class:"h-auto max-w-sm",alt:""})],-1),Up={class:"bg-[#D9D9D9] w-full"},jp=y("h2",{class:"text-3xl ml-10 font-extrabold px-14 py-1 pt-10 pb-7 text-center"}," Calculadora de peso volumétrico ",-1),Vp={class:"container grid-container grid grid-cols-6 my-4 items-center pt-5"},Bp=y("label",{class:"col-span-1 mx-10 text-gray-700 text-xl font-bold",for:"inline-alto"},"Alto:",-1),Hp=y("span",{class:"col-span-1 mx-10 text-gray-700 text-xl font-bold"},"cm",-1),qp={class:"grid-container grid grid-cols-6 my-4 items-center"},zp=y("label",{class:"col-span-1 mx-10 text-gray-700 text-xl font-bold",for:"inline-ancho"},"Ancho:",-1),Kp=y("span",{class:"col-span-1 mx-10 text-gray-700 text-xl font-bold"},"cm",-1),Wp={class:"grid-container grid grid-cols-6 my-4 items-center"},Gp=y("label",{class:"col-span-1 mx-10 text-gray-700 text-xl font-bold",for:"inline-largo"},"Largo:",-1),Jp=y("span",{class:"col-span-1 mx-10 text-gray-700 text-xl font-bold"},"cm",-1),Yp={class:"my-4"},Qp={class:"flex items-cener justify-center"},Xp={class:"col-span-1 mx-10 text-black text-xl font-bold"},Zp=y("div",{class:"h-auto w-full pt-5 pb-5 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl"},[y("p",null,"UTILIZA LA FÓRMULA:"),y("p",null,"(Alto(cm) * Ancho(cm) * Largo(cm))/6000")],-1),em={__name:"Calculadora",setup(t){const e=fn({largo:0,ancho:0,alto:0}),n=$e({get:()=>{let r=0;return r=e.value.largo*e.value.ancho*e.value.alto/6e3,r.toFixed(2)},set:r=>{e.value.largo=r,e.value.ancho=r,e.value.alto=r}});return(r,s)=>(fe(),pe(Ne,null,[Mp,y("div",Lp,[y("div",$p,[Fp,y("div",Up,[jp,y("div",Vp,[Bp,er(y("input",{class:"col-span-4 border-2 border-gray-200 rounded w-full py-4 px-5 text-gray-700 focus:border-gray-800","onUpdate:modelValue":s[0]||(s[0]=i=>e.value.alto=i),type:"text",name:"inline-alto",placeholder:"Alto"},null,512),[[ei,e.value.alto]]),Hp]),y("div",qp,[zp,er(y("input",{class:"col-span-4 border-2 border-gray-200 rounded w-full py-4 px-5 text-gray-700 focus:border-gray-800","onUpdate:modelValue":s[1]||(s[1]=i=>e.value.ancho=i),type:"text",name:"inline-ancho",placeholder:"Ancho"},null,512),[[ei,e.value.ancho]]),Kp]),y("div",Wp,[Gp,er(y("input",{class:"col-span-4 border-2 border-gray-200 rounded w-full py-4 px-5 text-gray-700 focus:border-gray-800","onUpdate:modelValue":s[2]||(s[2]=i=>e.value.largo=i),type:"text",name:"inline-largo",placeholder:"Largo"},null,512),[[ei,e.value.largo]]),Jp]),y("div",Yp,[y("div",Qp,[y("span",Xp,"Peso: "+ft(ue(n))+" Kg",1)])])])])]),Zp],64))}},tm="/assets/logoblanco-9affbb48.webp",nm={name:"Footer"},rm={class:"py-6 dark:bg-[#003368] dark:text-gray-50"},sm={class:"container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50"},im=Wn('<div class="grid grid-cols-12"><div class="pb-6 col-span-full md:pb-0 md:col-span-6"><a rel="noopener noreferrer" href="https://www.odm.com.mx/" class="flex justify-center space-x-3 md:justify-start"><img class="w-auto h-auto mt-20" src="'+tm+'" alt="Ómnibus de México"></a></div><div class="col-span-6 mt-20 text-center md:text-center md:col-span-3"><ul><li><a rel="noopener noreferrer" href="https://odm.com.mx/quienes-somos2" class="hover:dark:text-violet-400">Quiénes somos</a></li><li><a rel="noopener noreferrer" href="https://odm.com.mx/preguntas-frecuentes" class="hover:dark:text-violet-400">Preguntas frecuentes</a></li><li><a rel="noopener noreferrer" href="http://venta.odm.com.mx/netScripts/request.aspx?APPNAME=Navegante&amp;PRGNAME=AccesoEx&amp;ARGUMENTS=-AAG&amp;_gl=1*1b8yul8*_ga*NjAyODM2MzE2LjE2NzI0MjgyOTU.*_ga_6MKKJY80T1*MTY3ODk5Nzc1My4xMDEuMS4xNjc4OTk3NzcyLjQxLjAuMA.." class="hover:dark:text-violet-400">Agencias</a></li><li><a rel="noopener noreferrer" href="https://odm.com.mx/contactanos" class="hover:dark:text-violet-400">Contáctanos</a></li></ul></div></div>',1),om={class:"grid justify-center pt-6 lg:justify-between"},am=y("div",{class:"flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6"},[y("span",null,"©2023 Todos los derechos reservados"),y("a",{rel:"noopener noreferrer",href:"https://odm.com.mx/aviso-privacidad"}," Políticas de privacidad | Términos y condiciones ")],-1),lm={class:"flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13"},cm={rel:"noopener noreferrer",href:"#",title:"Facebook",class:"flex items-center justify-center w-10 h-10 rounded-full dark:bg-dark dark:text-gray-900"},um={style:{color:"rgb(255, 255, 255)"},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-facebook",viewBox:"0 0 16 16"},dm=y("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",fill:"#ffffff"},null,-1),fm=[dm],hm={rel:"noopener noreferrer",href:"#",title:"Twitter",class:"flex items-center justify-center w-10 h-10 rounded-full dark:bg-dark dark:text-gray-900"},pm={style:{color:"rgb(255, 255, 255)"},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-twitter",viewBox:"0 0 16 16"},mm=y("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",fill:"#ffffff"},null,-1),gm=[mm],_m={rel:"noopener noreferrer",href:"#",title:"Instagram",class:"flex items-center justify-center w-10 h-10 rounded-full dark:bg-dark dark:text-gray-900"},ym={style:{color:"rgb(255, 255, 255)"},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-instagram",viewBox:"0 0 16 16"},bm=y("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",fill:"#ffffff"},null,-1),vm=[bm],wm={rel:"noopener noreferrer",href:"#",title:"Youtube",class:"flex items-center justify-center w-10 h-10 rounded-full dark:bg-dark dark:text-gray-900"},xm={style:{color:"rgb(255, 255, 255)"},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-youtube",viewBox:"0 0 16 16"},Im=y("path",{d:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z",fill:"#ffffff"},null,-1),Em=[Im];function Tm(t,e,n,r,s,i){return fe(),pe("footer",rm,[y("div",sm,[im,y("div",om,[am,y("div",lm,[y("a",cm,[(fe(),pe("svg",um,fm))]),y("a",hm,[(fe(),pe("svg",pm,gm))]),y("a",_m,[(fe(),pe("svg",ym,vm))]),y("a",wm,[(fe(),pe("svg",xm,Em))])])])])])}const Sm=Ms(nm,[["render",Tm]]);/**
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
 */const Vc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Am=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Am(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw Error();const p=i<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},km=function(t){const e=Vc(t);return Bc.encodeByteArray(e,!0)},ls=function(t){return km(t).replace(/\./g,"")},Hc=function(t){try{return Bc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function qc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Rm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Om(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zc(){try{return typeof indexedDB=="object"}catch{return!1}}function Kc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Pm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function Nm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dm=()=>Nm().__FIREBASE_DEFAULTS__,Mm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hc(t[1]);return e&&JSON.parse(e)},fo=()=>{try{return Dm()||Mm()||Lm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wc=t=>{var e,n;return(n=(e=fo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$m=t=>{const e=Wc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Fm=()=>{var t;return(t=fo())===null||t===void 0?void 0:t.config},Gc=t=>{var e;return(e=fo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Um{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function jm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ls(JSON.stringify(n)),ls(JSON.stringify(o)),a].join(".")}/**
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
 */const Vm="FirebaseError";class lt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Vm,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Bm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new lt(s,a,r)}}function Bm(t,e){return t.replace(Hm,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Hm=/\{\$([^}]+)}/g;function qm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ia(i)&&Ia(o)){if(!br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ia(t){return t!==null&&typeof t=="object"}/**
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
 */function Rr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zm(t,e){const n=new Km(t,e);return n.subscribe.bind(n)}class Km{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wm(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ti),s.error===void 0&&(s.error=ti),s.complete===void 0&&(s.complete=ti);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ti(){}/**
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
 */const Gm=1e3,Jm=2,Ym=4*60*60*1e3,Qm=.5;function Ea(t,e=Gm,n=Jm){const r=e*Math.pow(n,t),s=Math.round(Qm*r*(Math.random()-.5)*2);return Math.min(Ym,r+s)}/**
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
 */class Xm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Um;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eg(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zm(t){return t===tn?void 0:t}function eg(t){return t.instantiationMode==="EAGER"}/**
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
 */class tg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const ng={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},rg=re.INFO,sg={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},ig=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=sg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ls{constructor(e){this.name=e,this._logLevel=rg,this._logHandler=ig,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ng[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const og=(t,e)=>e.some(n=>t instanceof n);let Ta,Sa;function ag(){return Ta||(Ta=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lg(){return Sa||(Sa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jc=new WeakMap,Ri=new WeakMap,Yc=new WeakMap,ni=new WeakMap,ho=new WeakMap;function cg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jc.set(n,t)}).catch(()=>{}),ho.set(e,t),e}function ug(t){if(Ri.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ri.set(t,e)}let Oi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ri.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dg(t){Oi=t(Oi)}function fg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ri(this),e,...n);return Yc.set(r,e.sort?e.sort():[e]),Wt(r)}:lg().includes(t)?function(...e){return t.apply(ri(this),e),Wt(Jc.get(this))}:function(...e){return Wt(t.apply(ri(this),e))}}function hg(t){return typeof t=="function"?fg(t):(t instanceof IDBTransaction&&ug(t),og(t,ag())?new Proxy(t,Oi):t)}function Wt(t){if(t instanceof IDBRequest)return cg(t);if(ni.has(t))return ni.get(t);const e=hg(t);return e!==t&&(ni.set(t,e),ho.set(e,t)),e}const ri=t=>ho.get(t);function Qc(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Wt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wt(o.result),l.oldVersion,l.newVersion,Wt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const pg=["get","getKey","getAll","getAllKeys","count"],mg=["put","add","delete","clear"],si=new Map;function Aa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(si.get(e))return si.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=mg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pg.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return si.set(e,i),i}dg(t=>({...t,get:(e,n,r)=>Aa(e,n)||t.get(e,n,r),has:(e,n)=>!!Aa(e,n)||t.has(e,n)}));/**
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
 */class gg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_g(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _g(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pi="@firebase/app",ka="0.9.0";/**
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
 */const hn=new Ls("@firebase/app"),yg="@firebase/app-compat",bg="@firebase/analytics-compat",vg="@firebase/analytics",wg="@firebase/app-check-compat",xg="@firebase/app-check",Ig="@firebase/auth",Eg="@firebase/auth-compat",Tg="@firebase/database",Sg="@firebase/database-compat",Ag="@firebase/functions",kg="@firebase/functions-compat",Cg="@firebase/installations",Rg="@firebase/installations-compat",Og="@firebase/messaging",Pg="@firebase/messaging-compat",Ng="@firebase/performance",Dg="@firebase/performance-compat",Mg="@firebase/remote-config",Lg="@firebase/remote-config-compat",$g="@firebase/storage",Fg="@firebase/storage-compat",Ug="@firebase/firestore",jg="@firebase/firestore-compat",Vg="firebase",Bg="9.15.0";/**
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
 */const Ni="[DEFAULT]",Hg={[Pi]:"fire-core",[yg]:"fire-core-compat",[vg]:"fire-analytics",[bg]:"fire-analytics-compat",[xg]:"fire-app-check",[wg]:"fire-app-check-compat",[Ig]:"fire-auth",[Eg]:"fire-auth-compat",[Tg]:"fire-rtdb",[Sg]:"fire-rtdb-compat",[Ag]:"fire-fn",[kg]:"fire-fn-compat",[Cg]:"fire-iid",[Rg]:"fire-iid-compat",[Og]:"fire-fcm",[Pg]:"fire-fcm-compat",[Ng]:"fire-perf",[Dg]:"fire-perf-compat",[Mg]:"fire-rc",[Lg]:"fire-rc-compat",[$g]:"fire-gcs",[Fg]:"fire-gcs-compat",[Ug]:"fire-fst",[jg]:"fire-fst-compat","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
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
 */const cs=new Map,Di=new Map;function qg(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bt(t){const e=t.name;if(Di.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;Di.set(e,t);for(const n of cs.values())qg(n,t);return!0}function vn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const zg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new bn("app","Firebase",zg);/**
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
 */class Kg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new it("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const Or=Bg;function Xc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ni,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Gt.create("bad-app-name",{appName:String(s)});if(n||(n=Fm()),!n)throw Gt.create("no-options");const i=cs.get(s);if(i){if(br(n,i.options)&&br(r,i.config))return i;throw Gt.create("duplicate-app",{appName:s})}const o=new tg(s);for(const l of Di.values())o.addComponent(l);const a=new Kg(n,r,o);return cs.set(s,a),a}function po(t=Ni){const e=cs.get(t);if(!e&&t===Ni)return Xc();if(!e)throw Gt.create("no-app",{appName:t});return e}function Ge(t,e,n){var r;let s=(r=Hg[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}bt(new it(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Wg="firebase-heartbeat-database",Gg=1,vr="firebase-heartbeat-store";let ii=null;function Zc(){return ii||(ii=Qc(Wg,Gg,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vr)}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),ii}async function Jg(t){try{return(await Zc()).transaction(vr).objectStore(vr).get(eu(t))}catch(e){if(e instanceof lt)hn.warn(e.message);else{const n=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(n.message)}}}async function Ca(t,e){try{const r=(await Zc()).transaction(vr,"readwrite");return await r.objectStore(vr).put(e,eu(t)),r.done}catch(n){if(n instanceof lt)hn.warn(n.message);else{const r=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(r.message)}}}function eu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yg=1024,Qg=30*24*60*60*1e3;class Xg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new e0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ra();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Qg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ra(),{heartbeatsToSend:n,unsentEntries:r}=Zg(this._heartbeatsCache.heartbeats),s=ls(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ra(){return new Date().toISOString().substring(0,10)}function Zg(t,e=Yg){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Oa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Oa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class e0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zc()?Kc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Jg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Oa(t){return ls(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function t0(t){bt(new it("platform-logger",e=>new gg(e),"PRIVATE")),bt(new it("heartbeat",e=>new Xg(e),"PRIVATE")),Ge(Pi,ka,t),Ge(Pi,ka,"esm2017"),Ge("fire-js","")}t0("");/**
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
 */const $n=new Ls("@firebase/firestore");function us(t,...e){if($n.logLevel<=re.DEBUG){const n=e.map(go);$n.debug(`Firestore (${Gn}): ${t}`,...n)}}function mo(t,...e){if($n.logLevel<=re.ERROR){const n=e.map(go);$n.error(`Firestore (${Gn}): ${t}`,...n)}}function tu(t,...e){if($n.logLevel<=re.WARN){const n=e.map(go);$n.warn(`Firestore (${Gn}): ${t}`,...n)}}function go(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function ot(t="Unexpected state"){const e=`FIRESTORE (${Gn}) INTERNAL ASSERTION FAILED: `+t;throw mo(e),new Error(e)}function At(t,e){t||ot()}function _o(t,e){return t}/**
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
 */const Pa="ok",n0="cancelled",rr="unknown",K="invalid-argument",r0="deadline-exceeded",s0="not-found",i0="permission-denied",Mi="unauthenticated",o0="resource-exhausted",Fn="failed-precondition",a0="aborted",l0="out-of-range",nu="unimplemented",c0="internal",u0="unavailable";class j extends lt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ru{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class d0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class f0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class h0{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(At(typeof e.accessToken=="string"),new ru(e.accessToken,new Le(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class p0{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(At(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class m0{constructor(e,n,r,s){this.t=e,this.i=n,this.o=r,this.u=s}getToken(){return Promise.resolve(new p0(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class g0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _0{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(At(typeof e.token=="string"),new g0(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class y0{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class wr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wr&&e.projectId===this.projectId&&e.database===this.database}}class xr{constructor(e,n,r){n===void 0?n=0:n>e.length&&ot(),r===void 0?r=e.length-n:r>e.length-n&&ot(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends xr{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(K,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const b0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends xr{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return b0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(K,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new j(K,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(K,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new j(K,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class Fe{constructor(e){this.path=e}static fromPath(e){return new Fe(Ae.fromString(e))}static fromName(e){return new Fe(Ae.fromString(e).popFirst(5))}static empty(){return new Fe(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Fe(new Ae(e.slice()))}}/**
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
 */function v0(t,e,n){if(!n)throw new j(K,`Function ${t}() cannot be called with an empty ${e}.`)}function Na(t){if(Fe.isDocumentKey(t))throw new j(K,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $s(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ot()}function su(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(K,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$s(t);throw new j(K,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function w0(t){return t==null}function ds(t){return t===0&&1/t==-1/0}/**
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
 */const x0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Da,Q;function Ma(t){if(t===void 0)return mo("RPC_ERROR","HTTP error has no status"),rr;switch(t){case 200:return Pa;case 400:return Fn;case 401:return Mi;case 403:return i0;case 404:return s0;case 409:return a0;case 416:return l0;case 429:return o0;case 499:return n0;case 500:return rr;case 501:return nu;case 503:return u0;case 504:return r0;default:return t>=200&&t<300?Pa:t>=400&&t<500?Fn:t>=500&&t<600?c0:rr}}/**
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
 */(Q=Da||(Da={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";class I0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.p=n+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(e,n,r,s,i){const o=this.T(e,n);us("RestConnection","Sending: ",o,r);const a={};return this.A(a,s,i),this.R(e,o,a,r).then(l=>(us("RestConnection","Received: ",l),l),l=>{throw tu("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}P(e,n,r,s,i,o){return this.I(e,n,r,s,i)}A(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}T(e,n){const r=x0[e];return`${this.p}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.V=n}$(e,n){throw new Error("Not supported by FetchConnection")}async R(e,n,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.V(n,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new j(Ma(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(i=l==null?void 0:l.error)===null||i===void 0?void 0:i.message;throw new j(Ma(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}function Ee(t,e){return t<e?-1:t>e?1:0}function E0(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */function La(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new kt(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const T0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pn(t){if(At(!!t),typeof t=="string"){let e=0;const n=T0.exec(t);if(At(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(K,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(K,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(K,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(K,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function iu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ou(t){const e=t.mapValue.fields.__previous_value__;return iu(e)?ou(e):e}function Er(t){const e=pn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */const Hr={fields:{__type__:{stringValue:"__max__"}}};function mn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?iu(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:ot()}function fs(t,e){if(t===e)return!0;const n=mn(t);if(n!==mn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Er(t).isEqual(Er(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=pn(r.timestampValue),o=pn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Ir(r.bytesValue).isEqual(Ir(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return ve(r.geoPointValue.latitude)===ve(s.geoPointValue.latitude)&&ve(r.geoPointValue.longitude)===ve(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ve(r.integerValue)===ve(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=ve(r.doubleValue),o=ve(s.doubleValue);return i===o?ds(i)===ds(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return E0(t.arrayValue.values||[],e.arrayValue.values||[],fs);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(La(i)!==La(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!fs(i[a],o[a])))return!1;return!0}(t,e);default:return ot()}}function Tr(t,e){return(t.values||[]).find(n=>fs(n,e))!==void 0}function hs(t,e){if(t===e)return 0;const n=mn(t),r=mn(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=ve(s.integerValue||s.doubleValue),a=ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $a(t.timestampValue,e.timestampValue);case 4:return $a(Er(t),Er(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Ir(s),a=Ir(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Ee(o[l],a[l]);if(c!==0)return c}return Ee(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=Ee(ve(s.latitude),ve(i.latitude));return o!==0?o:Ee(ve(s.longitude),ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=hs(o[l],a[l]);if(c)return c}return Ee(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Hr&&i===Hr)return 0;if(s===Hr)return 1;if(i===Hr)return-1;const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const f=Ee(a[u],c[u]);if(f!==0)return f;const p=hs(o[a[u]],l[c[u]]);if(p!==0)return p}return Ee(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ot()}}function $a(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=pn(t),r=pn(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function Fa(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function au(t){return!!t&&"arrayValue"in t}function Ua(t){return!!t&&"nullValue"in t}function ja(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oi(t){return!!t&&"mapValue"in t}function sr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=sr(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=sr(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Va{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class lu{}class ct extends lu{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new S0(e,n,r):n==="array-contains"?new C0(e,r):n==="in"?new R0(e,r):n==="not-in"?new O0(e,r):n==="array-contains-any"?new P0(e,r):new ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new A0(e,r):new k0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hs(n,this.value)):n!==null&&mn(this.value)===mn(n)&&this.matchesComparison(hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ot()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pr extends lu{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Pr(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(n=>n.isInequality());return e!==null?e.field:null}F(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class S0 extends ct{constructor(e,n,r){super(e,n,r),this.key=Fe.fromName(r.referenceValue)}matches(e){const n=Fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class A0 extends ct{constructor(e,n){super(e,"in",n),this.keys=cu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class k0 extends ct{constructor(e,n){super(e,"not-in",n),this.keys=cu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Fe.fromName(r.referenceValue))}class C0 extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return au(n)&&Tr(n.arrayValue,this.value)}}class R0 extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tr(this.value.arrayValue,n)}}class O0 extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Tr(this.value.arrayValue,n)}}class P0 extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!au(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Tr(this.value.arrayValue,r))}}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=sr(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=sr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());oi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fs(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];oi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Fs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(sr(this.value))}}/**
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
 */class $t{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $t(e,0,Se.min(),Se.min(),Se.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new $t(e,1,n,Se.min(),r,s,0)}static newNoDocument(e,n){return new $t(e,2,n,Se.min(),Se.min(),It.empty(),0)}static newUnknownDocument(e,n){return new $t(e,3,n,Se.min(),Se.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class N0{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.S=null}}function Ba(t,e=null,n=[],r=[],s=null,i=null,o=null){return new N0(t,e,n,r,s,i,o)}/**
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
 */class uu{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.O=null,this.startAt,this.endAt}}function du(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function yo(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function D0(t){return t.collectionGroup!==null}function Ha(t){const e=_o(t);if(e.q===null){e.q=[];const n=yo(e),r=du(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new Qr(n)),e.q.push(new Qr(tt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.q.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new Qr(tt.keyField(),i))}}}return e.q}function M0(t){const e=_o(t);if(!e.O)if(e.limitType==="F")e.O=Ba(e.path,e.collectionGroup,Ha(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ha(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Qr(i.field,o))}const r=e.endAt?new Va(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Va(e.startAt.position,e.startAt.inclusive):null;e.O=Ba(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.O}function Li(t,e){e.getFirstInequalityField(),yo(t);const n=t.filters.concat([e]);return new uu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
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
 */function L0(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!ds(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.k){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ds(r)?"-0":r}}(t,e)}/**
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
 */const $0=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),F0=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),U0=(()=>({and:"AND",or:"OR"}))();class j0{constructor(e,n){this.databaseId=e,this.k=n}}function qa(t,e){return t.k?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function V0(t,e){return t.k?e.toBase64():e.toUint8Array()}function za(t){return At(!!t),Se.fromTimestamp(function(e){const n=pn(e);return new He(n.seconds,n.nanos)}(t))}function fu(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function B0(t,e){const n=function(s){const i=Ae.fromString(s);return At(pu(i)),i}(e);if(n.get(1)!==t.databaseId.projectId)throw new j(K,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(K,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Fe((At((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function Ka(t,e){return fu(t.databaseId,e)}function H0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ka(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ka(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return hu(Pr.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Tn(u.field),direction:q0(u.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,c){return l.k||w0(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function q0(t){return $0[t]}function z0(t){return F0[t]}function K0(t){return U0[t]}function Tn(t){return{fieldPath:t.canonicalString()}}function hu(t){return t instanceof ct?function(e){if(e.op==="=="){if(ja(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NAN"}};if(Ua(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ja(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NOT_NAN"}};if(Ua(e.value))return{unaryFilter:{field:Tn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(e.field),op:z0(e.op),value:e.value}}}(t):t instanceof Pr?function(e){const n=e.getFilters().map(r=>hu(r));return n.length===1?n[0]:{compositeFilter:{op:K0(e.op),filters:n}}}(t):ot()}function pu(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function bo(t){return new j0(t,!0)}/**
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
 */class W0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.C=s,this.Z=!1}tt(){if(this.Z)throw new j(Fn,"The client has already been terminated.")}I(e,n,r){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.I(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Mi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(rr,s.toString())})}P(e,n,r,s){return this.tt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.P(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Mi&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(rr,i.toString())})}terminate(){this.Z=!0}}async function G0(t,e){const n=_o(t),r=H0(n.C,M0(e));return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(i,o,a){const l=B0(i,o.name),c=za(o.updateTime),u=o.createTime?za(o.createTime):Se.min(),f=new It({mapValue:{fields:o.fields}}),p=$t.newFoundDocument(l,c,u,f);return a&&p.setHasCommittedMutations(),a?p.setHasCommittedMutations():p}(n.C,s.document,void 0))}/**
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
 */const ir=new Map;function J0(t){if(t._terminated)throw new j(Fn,"The client has already been terminated.");if(!ir.has(t)){us("ComponentProvider","Initializing Datastore");const i=function(l){return new I0(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new y0(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),o=bo(t._databaseId),a=function(l,c,u,f){return new W0(l,c,u,f)}(t._authCredentials,t._appCheckCredentials,i,o);ir.set(t,a)}var e,n,r,s;/**
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
*/return ir.get(t)}class Wa{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(K,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(K,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,o){if(s===!0&&o===!0)throw new j(K,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class vo{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(Fn,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(Fn,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wa(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new d0;switch(n.type){case"gapi":const r=n.client;return new m0(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new j(K,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ir.get(e);n&&(us("ComponentProvider","Removing Datastore"),ir.delete(e),n.terminate())}(this),Promise.resolve()}}function Y0(t,e){const n=typeof t=="object"?t:po(),r=typeof t=="string"?t:e||"(default)",s=vn(n,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=$m("firestore");i&&Q0(s,...i)}return s}function Q0(t,e,n,r={}){var s;const i=(t=su(t,vo))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&tu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Le.MOCK_USER;else{o=jm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new j(K,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Le(l)}t._authCredentials=new f0(new ru(o,a))}}/**
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
 */class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Jn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jn(this.firestore,e,this._query)}}class On extends Jn{constructor(e,n,r){super(e,n,new uu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new Fe(e))}withConverter(e){return new On(this.firestore,e,this._path)}}function Ga(t,e,...n){if(t=Ye(t),v0("collection","path",e),t instanceof vo){const r=Ae.fromString(e,...n);return Na(r),new On(t,null,r)}{if(!(t instanceof Pt||t instanceof On))throw new j(K,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Na(r),new On(t.firestore,null,r)}}/**
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
 */class Un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Un(kt.fromBase64String(e))}catch(n){throw new j(K,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Un(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class mu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(K,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gu{constructor(e){this._methodName=e}}/**
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
 */class wo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(K,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(K,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
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
 */const X0=/^__.*__$/;function _u(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ot()}}class xo{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.C=r,this.ignoreUndefinedProperties=s,i===void 0&&this.et(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get nt(){return this.settings.nt}rt(e){return new xo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.C,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}st(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.ot(e),s}ut(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.rt({path:r,it:!1});return s.et(),s}ct(e){return this.rt({path:void 0,it:!0})}at(e){return $i(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}et(){if(this.path)for(let e=0;e<this.path.length;e++)this.ot(this.path.get(e))}ot(e){if(e.length===0)throw this.at("Document fields must not be empty");if(_u(this.nt)&&X0.test(e))throw this.at('Document fields cannot begin and end with "__"')}}class Z0{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.C=r||bo(e)}ft(e,n,r,s=!1){return new xo({nt:e,methodName:n,lt:r,path:tt.emptyPath(),it:!1,ht:s},this.databaseId,this.C,this.ignoreUndefinedProperties)}}function e_(t){const e=t._freezeSettings(),n=bo(t._databaseId);return new Z0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function t_(t,e,n,r=!1){return Io(n,t.ft(r?4:3,e))}function Io(t,e){if(yu(t=Ye(t)))return r_("Unsupported field value:",e,t),n_(t,e);if(t instanceof gu)return function(n,r){if(!_u(r.nt))throw r.at(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.at(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.nt!==4)throw e.at("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Io(o,r.ct(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return L0(r.C,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=He.fromDate(n);return{timestampValue:qa(r.C,s)}}if(n instanceof He){const s=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:qa(r.C,s)}}if(n instanceof wo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Un)return{bytesValue:V0(r.C,n._byteString)};if(n instanceof Pt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.at(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:fu(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.at(`Unsupported field value: ${$s(n)}`)}(t,e)}function n_(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fs(t,(r,s)=>{const i=Io(s,e.st(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function yu(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof wo||t instanceof Un||t instanceof Pt||t instanceof gu)}function r_(t,e,n){if(!yu(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=$s(n);throw r==="an object"?e.at(t+" a custom object"):e.at(t+" "+r)}}const s_=new RegExp("[~\\*/\\[\\]]");function i_(t,e,n){if(e.search(s_)>=0)throw $i(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mu(...e.split("."))._internalPath}catch{throw $i(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $i(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new j(K,a+t+l)}/**
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
 */class o_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bu extends o_{data(){return super.data()}}class a_{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function vu(t,e){return typeof e=="string"?i_(t,e):e instanceof mu?e._internalPath:e._delegate._internalPath}/**
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
 */class Eo{}class l_ extends Eo{}function Ja(t,e,...n){let r=[];e instanceof Eo&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof To).length,o=s.filter(a=>a instanceof Us).length;if(i>1||i>0&&o>0)throw new j(K,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Us extends l_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Us(e,n,r)}_apply(e){const n=this._parse(e);return wu(e._query,n),new Jn(e.firestore,e.converter,Li(e._query,n))}_parse(e){const n=e_(e.firestore);return function(s,i,o,a,l,c,u){let f;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new j(K,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Qa(u,c);const p=[];for(const g of u)p.push(Ya(a,s,g));f={arrayValue:{values:p}}}else f=Ya(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Qa(u,c),f=t_(o,i,u,c==="in"||c==="not-in");return ct.create(l,c,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function c_(t,e,n){const r=e,s=vu("where",t);return Us._create(s,r,n)}class To extends Eo{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new To(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)wu(i,a),i=Li(i,a)}(e._query,n),new Jn(e.firestore,e.converter,Li(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ya(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new j(K,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!D0(e)&&n.indexOf("/")!==-1)throw new j(K,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ae.fromString(n));if(!Fe.isDocumentKey(r))throw new j(K,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fa(t,new Fe(r))}if(n instanceof Pt)return Fa(t,n._key);throw new j(K,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$s(n)}.`)}function Qa(t,e){if(!Array.isArray(t)||t.length===0)throw new j(K,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new j(K,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function wu(t,e){if(e.isInequality()){const r=yo(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new j(K,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=du(t);i!==null&&u_(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(K,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(K,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function u_(t,e,n){if(!n.isEqual(e))throw new j(K,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class d_ extends class{convertValue(e,n="none"){switch(mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ot()}}convertObject(e,n){const r={};return Fs(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new wo(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ou(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Er(e));default:return null}}convertTimestamp(e){const n=pn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);At(pu(r));const s=new wr(r.get(1),r.get(3)),i=new Fe(r.popFirst(5));return s.isEqual(n)||mo(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function Xa(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new j(nu,"limitToLast() queries require specifying at least one orderBy() clause")})((t=su(t,Jn))._query);const e=J0(t.firestore),n=new d_(t.firestore);return G0(e,t._query).then(r=>{const s=r.map(i=>new bu(t.firestore,n,i.key,i,t.converter));return t._query.limitType==="L"&&s.reverse(),new a_(t,s)})}(function(t){Gn=t})(`${Or}_lite`),bt(new it("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new vo(new h0(t.getProvider("auth-internal")),new _0(t.getProvider("app-check-internal")),function(i,o){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new j(K,'"projectId" not provided in firebase.initializeApp.');return new wr(i.options.projectId,o)}(r,e),r);return n&&s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),Ge("firestore-lite","3.8.0",""),Ge("firestore-lite","3.8.0","esm2017");var f_=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let xu;const js=t=>xu=t,Iu=Symbol();function Fi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var or;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(or||(or={}));function h_(){const t=Gl(!0),e=t.run(()=>fn({}));let n=[],r=[];const s=Mn({install(i){js(s),s._a=i,i.provide(Iu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!f_?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Eu=()=>{};function Za(t,e,n,r=Eu){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Qd()&&Xd(s),s}function In(t,...e){t.slice().forEach(n=>{n(...e)})}function Ui(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Fi(s)&&Fi(r)&&t.hasOwnProperty(n)&&!me(r)&&!zt(r)?t[n]=Ui(s,r):t[n]=r}return t}const p_=Symbol();function m_(t){return!Fi(t)||!t.hasOwnProperty(p_)}const{assign:Ft}=Object;function g_(t){return!!(me(t)&&t.effect)}function __(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=Cf(n.state.value[t]);return Ft(u,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=Mn($e(()=>{js(n);const g=n._s.get(t);return o[p].call(g,g)})),f),{}))}return l=Tu(t,c,e,n,r,!0),l.$reset=function(){const f=s?s():{};this.$patch(p=>{Ft(p,f)})},l}function Tu(t,e,n={},r,s,i){let o;const a=Ft({actions:{}},n),l={deep:!0};let c,u,f=Mn([]),p=Mn([]),g;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),fn({});let S;function $(z){let O;c=u=!1,typeof z=="function"?(z(r.state.value[t]),O={type:or.patchFunction,storeId:t,events:g}):(Ui(r.state.value[t],z),O={type:or.patchObject,payload:z,storeId:t,events:g});const Y=S=Symbol();io().then(()=>{S===Y&&(c=!0)}),u=!0,In(f,O,r.state.value[t])}const R=Eu;function F(){o.stop(),f=[],p=[],r._s.delete(t)}function P(z,O){return function(){js(r);const Y=Array.from(arguments),X=[],ge=[];function xe(Ie){X.push(Ie)}function Ue(Ie){ge.push(Ie)}In(p,{args:Y,name:z,store:W,after:xe,onError:Ue});let Oe;try{Oe=O.apply(this&&this.$id===t?this:W,Y)}catch(Ie){throw In(ge,Ie),Ie}return Oe instanceof Promise?Oe.then(Ie=>(In(X,Ie),Ie)).catch(Ie=>(In(ge,Ie),Promise.reject(Ie))):(In(X,Oe),Oe)}}const q={_p:r,$id:t,$onAction:Za.bind(null,p),$patch:$,$reset:R,$subscribe(z,O={}){const Y=Za(f,z,O.detached,()=>X()),X=o.run(()=>Zn(()=>r.state.value[t],ge=>{(O.flush==="sync"?u:c)&&z({storeId:t,type:or.direct,events:g},ge)},Ft({},l,O)));return Y},$dispose:F},W=Kn(q);r._s.set(t,W);const oe=r._e.run(()=>(o=Gl(),o.run(()=>e())));for(const z in oe){const O=oe[z];if(me(O)&&!g_(O)||zt(O))i||(E&&m_(O)&&(me(O)?O.value=E[z]:Ui(O,E[z])),r.state.value[t][z]=O);else if(typeof O=="function"){const Y=P(z,O);oe[z]=Y,a.actions[z]=O}}return Ft(W,oe),Ft(te(W),oe),Object.defineProperty(W,"$state",{get:()=>r.state.value[t],set:z=>{$(O=>{Ft(O,z)})}}),r._p.forEach(z=>{Ft(W,o.run(()=>z({store:W,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(W.$state,E),c=!0,u=!0,W}function y_(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=$c();return a=a||c&&mt(Iu,null),a&&js(a),a=xu,a._s.has(r)||(i?Tu(r,e,s,a):__(r,s,a)),a._s.get(r)}return o.$id=r,o}var b_="firebase",v_="9.15.0";/**
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
 */Ge(b_,v_,"app");const Su="@firebase/installations",So="0.6.0";/**
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
 */const Au=1e4,ku=`w:${So}`,Cu="FIS_v2",w_="https://firebaseinstallations.googleapis.com/v1",x_=60*60*1e3,I_="installations",E_="Installations";/**
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
 */const T_={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},gn=new bn(I_,E_,T_);function Ru(t){return t instanceof lt&&t.code.includes("request-failed")}/**
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
 */function Ou({projectId:t}){return`${w_}/projects/${t}/installations`}function Pu(t){return{token:t.token,requestStatus:2,expiresIn:A_(t.expiresIn),creationTime:Date.now()}}async function Nu(t,e){const r=(await e.json()).error;return gn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Du({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function S_(t,{refreshToken:e}){const n=Du(t);return n.append("Authorization",k_(e)),n}async function Mu(t){const e=await t();return e.status>=500&&e.status<600?t():e}function A_(t){return Number(t.replace("s","000"))}function k_(t){return`${Cu} ${t}`}/**
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
 */async function C_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ou(t),s=Du(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Cu,appId:t.appId,sdkVersion:ku},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Mu(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Pu(c.authToken)}}else throw await Nu("Create Installation",l)}/**
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
 */function R_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const O_=/^[cdef][\w-]{21}$/,ji="";function P_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=N_(t);return O_.test(n)?n:ji}catch{return ji}}function N_(t){return R_(t).substr(0,22)}/**
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
 */function Vs(t){return`${t.appName}!${t.appId}`}/**
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
 */const $u=new Map;function Fu(t,e){const n=Vs(t);Uu(n,e),D_(n,e)}function Uu(t,e){const n=$u.get(t);if(n)for(const r of n)r(e)}function D_(t,e){const n=M_();n&&n.postMessage({key:t,fid:e}),L_()}let ln=null;function M_(){return!ln&&"BroadcastChannel"in self&&(ln=new BroadcastChannel("[Firebase] FID Change"),ln.onmessage=t=>{Uu(t.data.key,t.data.fid)}),ln}function L_(){$u.size===0&&ln&&(ln.close(),ln=null)}/**
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
 */const $_="firebase-installations-database",F_=1,_n="firebase-installations-store";let ai=null;function Ao(){return ai||(ai=Qc($_,F_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_n)}}})),ai}async function ps(t,e){const n=Vs(t),s=(await Ao()).transaction(_n,"readwrite"),i=s.objectStore(_n),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Fu(t,e.fid),e}async function ju(t){const e=Vs(t),r=(await Ao()).transaction(_n,"readwrite");await r.objectStore(_n).delete(e),await r.done}async function Bs(t,e){const n=Vs(t),s=(await Ao()).transaction(_n,"readwrite"),i=s.objectStore(_n),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Fu(t,a.fid),a}/**
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
 */async function ko(t){let e;const n=await Bs(t.appConfig,r=>{const s=U_(r),i=j_(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===ji?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function U_(t){const e=t||{fid:P_(),registrationStatus:0};return Vu(e)}function j_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(gn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=V_(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:B_(t)}:{installationEntry:e}}async function V_(t,e){try{const n=await C_(t,e);return ps(t.appConfig,n)}catch(n){throw Ru(n)&&n.customData.serverCode===409?await ju(t.appConfig):await ps(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function B_(t){let e=await el(t.appConfig);for(;e.registrationStatus===1;)await Lu(100),e=await el(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ko(t);return r||n}return e}function el(t){return Bs(t,e=>{if(!e)throw gn.create("installation-not-found");return Vu(e)})}function Vu(t){return H_(t)?{fid:t.fid,registrationStatus:0}:t}function H_(t){return t.registrationStatus===1&&t.registrationTime+Au<Date.now()}/**
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
 */async function q_({appConfig:t,heartbeatServiceProvider:e},n){const r=z_(t,n),s=S_(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:ku,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Mu(()=>fetch(r,a));if(l.ok){const c=await l.json();return Pu(c)}else throw await Nu("Generate Auth Token",l)}function z_(t,{fid:e}){return`${Ou(t)}/${e}/authTokens:generate`}/**
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
 */async function Co(t,e=!1){let n;const r=await Bs(t.appConfig,i=>{if(!Bu(i))throw gn.create("not-registered");const o=i.authToken;if(!e&&G_(o))return i;if(o.requestStatus===1)return n=K_(t,e),i;{if(!navigator.onLine)throw gn.create("app-offline");const a=Y_(i);return n=W_(t,a),a}});return n?await n:r.authToken}async function K_(t,e){let n=await tl(t.appConfig);for(;n.authToken.requestStatus===1;)await Lu(100),n=await tl(t.appConfig);const r=n.authToken;return r.requestStatus===0?Co(t,e):r}function tl(t){return Bs(t,e=>{if(!Bu(e))throw gn.create("not-registered");const n=e.authToken;return Q_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function W_(t,e){try{const n=await q_(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ps(t.appConfig,r),n}catch(n){if(Ru(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ju(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ps(t.appConfig,r)}throw n}}function Bu(t){return t!==void 0&&t.registrationStatus===2}function G_(t){return t.requestStatus===2&&!J_(t)}function J_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+x_}function Y_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Q_(t){return t.requestStatus===1&&t.requestTime+Au<Date.now()}/**
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
 */async function X_(t){const e=t,{installationEntry:n,registrationPromise:r}=await ko(e);return r?r.catch(console.error):Co(e).catch(console.error),n.fid}/**
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
 */async function Z_(t,e=!1){const n=t;return await ey(n),(await Co(n,e)).token}async function ey(t){const{registrationPromise:e}=await ko(t);e&&await e}/**
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
 */function ty(t){if(!t||!t.options)throw li("App Configuration");if(!t.name)throw li("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw li(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function li(t){return gn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Hu="installations",ny="installations-internal",ry=t=>{const e=t.getProvider("app").getImmediate(),n=ty(e),r=vn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},sy=t=>{const e=t.getProvider("app").getImmediate(),n=vn(e,Hu).getImmediate();return{getId:()=>X_(n),getToken:s=>Z_(n,s)}};function iy(){bt(new it(Hu,ry,"PUBLIC")),bt(new it(ny,sy,"PRIVATE"))}iy();Ge(Su,So);Ge(Su,So,"esm2017");/**
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
 */const ms="analytics",oy="firebase_id",ay="origin",ly=60*1e3,cy="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",qu="https://www.googletagmanager.com/gtag/js";/**
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
 */function zu(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function uy(t,e){const n=document.createElement("script");n.src=`${qu}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function dy(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function fy(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await zu(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){qe.error(a)}t("config",s,i)}async function hy(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await zu(n);for(const l of o){const c=a.find(f=>f.measurementId===l),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){qe.error(i)}}function py(t,e,n,r){async function s(i,o,a){try{i==="event"?await hy(t,e,n,o,a):i==="config"?await fy(t,e,n,r,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(l){qe.error(l)}}return s}function my(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=py(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function gy(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(qu)&&n.src.includes(t))return n;return null}/**
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
 */const _y={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Je=new bn("analytics","Analytics",_y);/**
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
 */const yy=30,by=1e3;class vy{constructor(e={},n=by){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ku=new vy;function wy(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function xy(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:wy(r)},i=cy.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Je.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Iy(t,e=Ku,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Je.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Je.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Sy;return setTimeout(async()=>{a.abort()},n!==void 0?n:ly),Wu({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Wu(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Ku){var i;const{appId:o,measurementId:a}=t;try{await Ey(r,e)}catch(l){if(a)return qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await xy(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Ty(c)){if(s.deleteThrottleMetadata(o),a)return qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ea(n,s.intervalMillis,yy):Ea(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,f),qe.debug(`Calling attemptFetch again in ${u} millis`),Wu(t,f,r,s)}}function Ey(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Je.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ty(t){if(!(t instanceof lt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Sy{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ay(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function ky(){if(zc())try{await Kc()}catch(t){return qe.warn(Je.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return qe.warn(Je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Cy(t,e,n,r,s,i,o){var a;const l=Iy(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&qe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>qe.error(g)),e.push(l);const c=ky().then(g=>{if(g)return r.getId()}),[u,f]=await Promise.all([l,c]);gy(i)||uy(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[ay]="firebase",p.update=!0,f!=null&&(p[oy]=f),s("config",u.measurementId,p),u.measurementId}/**
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
 */class Ry{constructor(e){this.app=e}_delete(){return delete ar[this.app.options.appId],Promise.resolve()}}let ar={},nl=[];const rl={};let ci="dataLayer",Oy="gtag",sl,Gu,il=!1;function Py(){const t=[];if(qc()&&t.push("This is a browser extension environment."),Pm()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Je.create("invalid-analytics-context",{errorInfo:e});qe.warn(n.message)}}function Ny(t,e,n){Py();const r=t.options.appId;if(!r)throw Je.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Je.create("no-api-key");if(ar[r]!=null)throw Je.create("already-exists",{id:r});if(!il){dy(ci);const{wrappedGtag:i,gtagCore:o}=my(ar,nl,rl,ci,Oy);Gu=i,sl=o,il=!0}return ar[r]=Cy(t,nl,rl,e,sl,ci,n),new Ry(t)}function Dy(t=po()){t=Ye(t);const e=vn(t,ms);return e.isInitialized()?e.getImmediate():My(t)}function My(t,e={}){const n=vn(t,ms);if(n.isInitialized()){const s=n.getImmediate();if(br(e,n.getOptions()))return s;throw Je.create("already-initialized")}return n.initialize({options:e})}function Ly(t,e,n,r){t=Ye(t),Ay(Gu,ar[t.app.options.appId],e,n,r).catch(s=>qe.error(s))}const ol="@firebase/analytics",al="0.9.0";function $y(){bt(new it(ms,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Ny(r,s,n)},"PUBLIC")),bt(new it("analytics-internal",t,"PRIVATE")),Ge(ol,al),Ge(ol,al,"esm2017");function t(e){try{const n=e.getProvider(ms).getImmediate();return{logEvent:(r,s,i)=>Ly(n,r,s,i)}}catch(n){throw Je.create("interop-component-reg-failed",{reason:n})}}}$y();function Ro(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ju(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fy=Ju,Yu=new bn("auth","Firebase",Ju());/**
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
 */const ll=new Ls("@firebase/auth");function Xr(t,...e){ll.logLevel<=re.ERROR&&ll.error(`Auth (${Or}): ${t}`,...e)}/**
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
 */function Ct(t,...e){throw Oo(t,...e)}function gt(t,...e){return Oo(t,...e)}function Uy(t,e,n){const r=Object.assign(Object.assign({},Fy()),{[e]:n});return new bn("auth","Firebase",r).create(e,{appName:t.name})}function Oo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yu.create(t,...e)}function V(t,e,...n){if(!t)throw Oo(e,...n)}function Et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xr(e),new Error(e)}function Rt(t,e){t||Et(e)}/**
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
 */const cl=new Map;function Tt(t){Rt(t instanceof Function,"Expected a class definition");let e=cl.get(t);return e?(Rt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cl.set(t,e),e)}/**
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
 */function jy(t,e){const n=vn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(br(i,e??{}))return s;Ct(s,"already-initialized")}return n.initialize({options:e})}function Vy(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Vi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function By(){return ul()==="http:"||ul()==="https:"}function ul(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Hy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(By()||qc()||"connection"in navigator)?navigator.onLine:!0}function qy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rt(n>e,"Short delay should be less than long delay!"),this.isMobile=Cm()||Rm()}get(){return Hy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class Qu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Ky=new Nr(3e4,6e4);function Wy(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hs(t,e,n,r,s={}){return Xu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Rr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Qu.fetch()(Zu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Xu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zy),e);try{const s=new Jy(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw qr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw qr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Uy(t,u,c);Ct(t,u)}}catch(s){if(s instanceof lt)throw s;Ct(t,"network-request-failed")}}async function Gy(t,e,n,r,s={}){const i=await Hs(t,e,n,r,s);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Zu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Po(t.config,s):`${t.config.apiScheme}://${s}`}class Jy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),Ky.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=gt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Yy(t,e){return Hs(t,"POST","/v1/accounts:delete",e)}async function Qy(t,e){return Hs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function lr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xy(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=No(r);V(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:lr(ui(s.auth_time)),issuedAtTime:lr(ui(s.iat)),expirationTime:lr(ui(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ui(t){return Number(t)*1e3}function No(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hc(n);return s?JSON.parse(s):(Xr("Failed to decode base64 JWT payload"),null)}catch(s){return Xr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zy(t){const e=No(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Sr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof lt&&eb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function eb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class tb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ed{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lr(this.lastLoginAt),this.creationTime=lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gs(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Sr(t,Qy(n,{idToken:r}));V(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sb(i.providerUserInfo):[],a=rb(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ed(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function nb(t){const e=Ye(t);await gs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sb(t){return t.map(e=>{var{providerId:n}=e,r=Ro(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ib(t,e){const n=await Xu(t,{},async()=>{const r=Rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Zu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ib(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ar;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(V(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(V(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function Dt(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ro(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ed(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Sr(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Xy(this,e)}reload(){return nb(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Sr(this,Yy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,$=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:q,isAnonymous:W,providerData:oe,stsTokenManager:z}=n;V(P&&z,e,"internal-error");const O=Ar.fromJSON(this.name,z);V(typeof P=="string",e,"internal-error"),Dt(f,e.name),Dt(p,e.name),V(typeof q=="boolean",e,"internal-error"),V(typeof W=="boolean",e,"internal-error"),Dt(g,e.name),Dt(E,e.name),Dt(S,e.name),Dt($,e.name),Dt(R,e.name),Dt(F,e.name);const Y=new dn({uid:P,auth:e,email:p,emailVerified:q,displayName:f,isAnonymous:W,photoURL:E,phoneNumber:g,tenantId:S,stsTokenManager:O,createdAt:R,lastLoginAt:F});return oe&&Array.isArray(oe)&&(Y.providerData=oe.map(X=>Object.assign({},X))),$&&(Y._redirectEventId=$),Y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ar;s.updateFromServerResponse(n);const i=new dn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gs(i),i}}/**
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
 */class td{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}td.type="NONE";const dl=td;/**
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
 */function Zr(t,e,n){return`firebase:${t}:${e}:${n}`}class Pn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Zr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Zr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pn(Tt(dl),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Tt(dl);const o=Zr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=dn._fromJSON(e,u);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Pn(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Pn(i,e,r))}}/**
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
 */function fl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(od(e))return"Blackberry";if(ad(e))return"Webos";if(Do(e))return"Safari";if((e.includes("chrome/")||rd(e))&&!e.includes("edge/"))return"Chrome";if(id(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nd(t=Re()){return/firefox\//i.test(t)}function Do(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rd(t=Re()){return/crios\//i.test(t)}function sd(t=Re()){return/iemobile/i.test(t)}function id(t=Re()){return/android/i.test(t)}function od(t=Re()){return/blackberry/i.test(t)}function ad(t=Re()){return/webos/i.test(t)}function qs(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ob(t=Re()){var e;return qs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ab(){return Om()&&document.documentMode===10}function ld(t=Re()){return qs(t)||id(t)||ad(t)||od(t)||/windows phone/i.test(t)||sd(t)}function lb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function cd(t,e=[]){let n;switch(t){case"Browser":n=fl(Re());break;case"Worker":n=`${fl(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${r}`}/**
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
 */class cb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class ub{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hl(this),this.idTokenSubscription=new hl(this),this.beforeStateQueue=new cb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tt(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Mo(t){return Ye(t)}class hl{constructor(e){this.auth=e,this.observer=null,this.addObserver=zm(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function db(t,e,n){const r=Mo(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ud(e),{host:o,port:a}=fb(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||hb()}function ud(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fb(t){const e=ud(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pl(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:pl(o)}}}function pl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class dd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,n){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}/**
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
 */async function Nn(t,e){return Gy(t,"POST","/v1/accounts:signInWithIdp",Wy(t,e))}/**
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
 */const pb="http://localhost";class yn extends dd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ro(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nn(e,n)}buildRequest(){const e={requestUri:pb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rr(n)}return e}}/**
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
 */class jt extends Dr{constructor(){super("facebook.com")}static credential(e){return yn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
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
 */class Vt extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
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
 */class Bt extends Dr{constructor(){super("github.com")}static credential(e){return yn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
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
 */class Ht extends Dr{constructor(){super("twitter.com")}static credential(e,n){return yn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await dn._fromIdTokenResponse(e,r,s),o=ml(r);return new jn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ml(r);return new jn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ml(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _s extends lt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_s.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _s(e,n,r,s)}}function hd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_s._fromErrorAndOperation(t,i,e,r):i})}async function mb(t,e,n=!1){const r=await Sr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",r)}/**
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
 */async function gb(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Sr(t,hd(r,s,e,t),n);V(i.idToken,r,"internal-error");const o=No(i.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(t.uid===a,r,"user-mismatch"),jn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),i}}/**
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
 */async function _b(t,e,n=!1){const r="signIn",s=await hd(t,r,e),i=await jn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function yb(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function bb(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}const ys="__sak";/**
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
 */class pd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ys,"1"),this.storage.removeItem(ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function vb(){const t=Re();return Do(t)||qs(t)}const wb=1e3,xb=10;class md extends pd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vb()&&lb(),this.fallbackToPolling=ld(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ab()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}md.type="LOCAL";const Ib=md;/**
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
 */class gd extends pd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gd.type="SESSION";const _d=gd;/**
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
 */function Eb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Eb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zs.receivers=[];/**
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
 */class Tb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Lo("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _t(){return window}function Sb(t){_t().location.href=t}/**
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
 */function yd(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function Ab(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Cb(){return yd()?self:null}/**
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
 */const bd="firebaseLocalStorageDb",Rb=1,bs="firebaseLocalStorage",vd="fbase_key";class Mr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ks(t,e){return t.transaction([bs],e?"readwrite":"readonly").objectStore(bs)}function Ob(){const t=indexedDB.deleteDatabase(bd);return new Mr(t).toPromise()}function Bi(){const t=indexedDB.open(bd,Rb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bs,{keyPath:vd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bs)?e(r):(r.close(),await Ob(),e(await Bi()))})})}async function gl(t,e,n){const r=Ks(t,!0).put({[vd]:e,value:n});return new Mr(r).toPromise()}async function Pb(t,e){const n=Ks(t,!1).get(e),r=await new Mr(n).toPromise();return r===void 0?null:r.value}function _l(t,e){const n=Ks(t,!0).delete(e);return new Mr(n).toPromise()}const Nb=800,Db=3;class wd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Db)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zs._getInstance(Cb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ab(),!this.activeServiceWorker)return;this.sender=new Tb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bi();return await gl(e,ys,"1"),await _l(e,ys),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Pb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_l(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ks(s,!1).getAll();return new Mr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wd.type="LOCAL";const Mb=wd;/**
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
 */function Lb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $b(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=gt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Lb().appendChild(r)})}function Fb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Nr(3e4,6e4);/**
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
 */function Ub(t,e){return e?Tt(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $o extends dd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jb(t){return _b(t.auth,new $o(t),t.bypassAuthState)}function Vb(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),gb(n,new $o(t),t.bypassAuthState)}async function Bb(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),mb(n,new $o(t),t.bypassAuthState)}/**
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
 */class xd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jb;case"linkViaPopup":case"linkViaRedirect":return Bb;case"reauthViaPopup":case"reauthViaRedirect":return Vb;default:Ct(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hb=new Nr(2e3,1e4);class An extends xd{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,An.currentPopupAction&&An.currentPopupAction.cancel(),An.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=Lo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,An.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Hb.get())};e()}}An.currentPopupAction=null;/**
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
 */const qb="pendingRedirect",es=new Map;class zb extends xd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=es.get(this.auth._key());if(!e){try{const r=await Kb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}es.set(this.auth._key(),e)}return this.bypassAuthState||es.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kb(t,e){const n=Jb(e),r=Gb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Wb(t,e){es.set(t._key(),e)}function Gb(t){return Tt(t._redirectPersistence)}function Jb(t){return Zr(qb,t.config.apiKey,t.name)}async function Yb(t,e,n=!1){const r=Mo(t),s=Ub(r,e),o=await new zb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Qb=10*60*1e3;class Xb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Id(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qb&&this.cachedEventUids.clear(),this.cachedEventUids.has(yl(e))}saveEventToCache(e){this.cachedEventUids.add(yl(e)),this.lastProcessedEventTime=Date.now()}}function yl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Id({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Id(t);default:return!1}}/**
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
 */async function ev(t,e={}){return Hs(t,"GET","/v1/projects",e)}/**
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
 */const tv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nv=/^https?/;async function rv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ev(t);for(const n of e)try{if(sv(n))return}catch{}Ct(t,"unauthorized-domain")}function sv(t){const e=Vi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nv.test(n))return!1;if(tv.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const iv=new Nr(3e4,6e4);function bl(){const t=_t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ov(t){return new Promise((e,n)=>{var r,s,i;function o(){bl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bl(),n(gt(t,"network-request-failed"))},timeout:iv.get()})}if(!((s=(r=_t().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_t().gapi)===null||i===void 0)&&i.load)o();else{const a=Fb("iframefcb");return _t()[a]=()=>{gapi.load?o():n(gt(t,"network-request-failed"))},$b(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ts=null,e})}let ts=null;function av(t){return ts=ts||ov(t),ts}/**
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
 */const lv=new Nr(5e3,15e3),cv="__/auth/iframe",uv="emulator/auth/iframe",dv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hv(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Po(e,uv):`https://${t.config.authDomain}/${cv}`,r={apiKey:e.apiKey,appName:t.name,v:Or},s=fv.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Rr(r).slice(1)}`}async function pv(t){const e=await av(t),n=_t().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:hv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),a=_t().setTimeout(()=>{i(o)},lv.get());function l(){_t().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const mv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gv=500,_v=600,yv="_blank",bv="http://localhost";class vl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vv(t,e,n,r=gv,s=_v){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},mv),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Re().toLowerCase();n&&(a=rd(c)?yv:n),nd(c)&&(e=e||bv,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[g,E])=>`${p}${g}=${E},`,"");if(ob(c)&&a!=="_self")return wv(e||"",a),new vl(null);const f=window.open(e||"",a,u);V(f,t,"popup-blocked");try{f.focus()}catch{}return new vl(f)}function wv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xv="__/auth/handler",Iv="emulator/auth/handler";function wl(t,e,n,r,s,i){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Or,eventId:s};if(e instanceof fd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof Dr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Ev(t)}?${Rr(a).slice(1)}`}function Ev({config:t}){return t.emulator?Po(t,Iv):`https://${t.authDomain}/${xv}`}/**
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
 */const di="webStorageSupport";class Tv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_d,this._completeRedirectFn=Yb,this._overrideRedirectResult=Wb}async _openPopup(e,n,r,s){var i;Rt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=wl(e,n,r,Vi(),s);return vv(e,o,Lo())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Sb(wl(e,n,r,Vi(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Rt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pv(e),r=new Xb(e);return n.register("authEvent",s=>(V(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(di,{type:di},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[di];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ld()||Do()||qs()}}const Sv=Tv;var xl="@firebase/auth",Il="0.21.0";/**
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
 */class Av{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Cv(t){bt(new it("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,l)=>{V(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cd(t)},u=new ub(a,l,c);return Vy(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bt(new it("auth-internal",e=>{const n=Mo(e.getProvider("auth").getImmediate());return(r=>new Av(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(xl,Il,kv(t)),Ge(xl,Il,"esm2017")}/**
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
 */const Rv=5*60,Ov=Gc("authIdTokenMaxAge")||Rv;let El=null;const Pv=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ov)return;const s=n==null?void 0:n.token;El!==s&&(El=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Nv(t=po()){const e=vn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jy(t,{popupRedirectResolver:Sv,persistence:[Mb,Ib,_d]}),r=Gc("authTokenSyncURL");if(r){const i=Pv(r);bb(n,i,()=>i(n.currentUser)),yb(n,o=>i(o))}const s=Wc("auth");return s&&db(n,`http://${s}`),n}Cv("Browser");const Dv={apiKey:"AIzaSyCTd9riOM7Lbji1mBvHDQuydmNMrWFSj3g",authDomain:"precios-envios-odm.firebaseapp.com",databaseURL:"https://precios-envios-odm-default-rtdb.firebaseio.com",projectId:"precios-envios-odm",storageBucket:"precios-envios-odm.appspot.com",messagingSenderId:"802208494147",appId:"1:802208494147:web:fee055c13df4aef4045af6",measurementId:"G-LTMJMJLXRQ"},Mv=Xc(Dv);Nv();const Tl=Y0();Dy(Mv);const Lv=y_("database",{state:()=>({documents:[],destinos:[]}),actions:{async getDocuments(t){this.documents=[];const e=Ja(Ga(Tl,t));(await Xa(e)).forEach(r=>{this.documents.push(r.data())})},async getDocumentByKey(t,e,n){const r=Ja(Ga(Tl,t),c_(e,"==",n)),s=await Xa(r);console.log(s),s.forEach(i=>{this.destinos=i.data().destinos})}}}),$v={name:"regular-modal",data(){return{showModal:!1}},methods:{toggleModal:function(){this.showModal=!this.showModal}}},Fv=y("h1",{class:"text-4xl font-extrabold capitalize px-20 py-12 mt-10"}," TARIFAS PREFERENCIALES ",-1),Uv=y("h2",{class:"text-3xl ml-10 font-extrabold capitalize px-14 py-1"}," Para impulsar tu negocio ",-1),jv={class:"relative flex items-top justify-center mt-0 bg-white dark:bg-white sm:items-center xl:mt-0 sm:pt-0"},Vv={class:"max-w-6xl mx-auto sm:px-6 lg:px-8 pb-10"},Bv={class:"mt-8 overflow-hidden"},Hv={class:"grid grid-cols-1 md:grid-cols-2"},qv=Wn('<div class="p-6 mr-2 bg-white dark:bg-white sm:rounded-lg"><h1 class="text-4xl sm:text-5xl text-black dark:text-black font-extrabold tracking-tight"> ¡Escríbenos! </h1><p class="text-normal pt-2 text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2"> Y nos pondremos en contacto a la brevedad. </p><div class="flex items-center mt-8 text-gray-600 dark:text-gray-400"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg><div class="ml-4 text-md tracking-wide font-semibold w-80"> Av Central 56, Nueva Industrial Vallejo, Gustavo A. Madero, 07700 Ciudad de México, CDMX </div></div><div class="flex items-center mt-4 text-gray-600 dark:text-gray-400"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg><div class="ml-4 text-md tracking-wide font-semibold w-40"> 55-51-41-43-00 </div></div><div class="flex items-center mt-2 text-gray-600 dark:text-gray-400"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><div class="ml-4 text-md tracking-wide font-semibold w-40"> desarrollowebodm@gmail.com </div></div></div>',1),zv={class:"p-6 flex flex-col justify-center"},Kv=Wn('<div class="flex flex-col"><label for="name" class="hidden">Nombre completo</label><input type="name" name="name" id="name" placeholder="Nombre completo" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none"></div><div class="flex flex-col mt-2"><label for="tel" class="hidden">Teléfono</label><input type="tel" name="tel" id="tel" placeholder="Teléfono" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none"></div><div class="flex flex-col mt-2"><label for="tel" class="hidden">Ciudad</label><input type="tel" name="tel" id="tel" placeholder="Ciudad" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></div><div class="flex flex-col mt-2"><label for="tel" class="hidden">Nombre de tu empresa</label><input type="tel" name="tel" id="tel" placeholder="Nombre de tu empresa" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></div><div class="flex flex-col mt-2"><label for="email" class="hidden">Correo electrónico</label><input type="email" name="email" id="email" placeholder="Correo electrónico" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></div>',5),Wv={class:"xl:pl-10 xl:pt-5 sm:pt-10 sm:flex sm:justify-center"},Gv={key:0,class:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},Jv={class:"relative w-auto my-6 mx-auto max-w-3xl"},Yv={class:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},Qv=y("div",{class:"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"},[y("h3",{class:"text-3xl font-semibold"},"¡EXCELENTE!")],-1),Xv=y("div",{class:"relative p-6 flex-auto"},[y("p",{class:"my-4 text-slate-500 text-lg leading-relaxed"},[ki(" Hemos recibido tu información. "),y("br"),ki(" En breve nos comunicaremos contigo. ")])],-1),Zv={class:"flex items-center justify-end p-6 bg-[#003368]border-t border-solid border-slate-200 rounded-b"},ew={key:1,class:"opacity-25 fixed inset-0 z-40 bg-black"};function tw(t,e,n,r,s,i){return fe(),pe(Ne,null,[Fv,Uv,y("div",jv,[y("div",Vv,[y("div",Bv,[y("div",Hv,[qv,y("form",zv,[Kv,y("div",Wv,[y("button",{class:"bg-[#003368] py-7 px-12 text-white active:bg-[#D9D9D9] font-bold uppercase text-2xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none xl:mr-10 sm:mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:e[0]||(e[0]=o=>i.toggleModal())}," SOLICITAR TARIFA PREFERENTE "),s.showModal?(fe(),pe("div",Gv,[y("div",Jv,[y("div",Yv,[Qv,Xv,y("div",Zv,[y("button",{class:"text-white bg-[#003368] border border-solid border-white hover:bg-blue-900 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:e[1]||(e[1]=o=>i.toggleModal())}," OK ")])])])])):xt("",!0),s.showModal?(fe(),pe("div",ew)):xt("",!0)])])])])])])],64)}const nw=Ms($v,[["render",tw]]),rw=y("h1",{class:"text-4xl font-extrabold capitalize px-14 py-14 pl-32"}," COBERTURA DE ENVÍOS ",-1),sw={class:"mx-auto py-10"},iw={class:"xl:flex xl:flex-none xl:items-center xl:pb-20 sm:flex-auto"},ow={class:"container xl:ml-40 xl:mt-10"},aw={class:"container flex-none sm:w-[500px] sm:ml-20"},lw=y("option",{selected:"¿Dónde dejar tus paquetes?"}," ¿Dónde dejar tus paquetes? ",-1),cw=["value"],uw={class:"xl:mt-10 sm:mt-7 sm:pl-12 sm:mb-5"},dw=y("h2",{class:"xl:text-3xl sm:text-2xl font-bold"},"Dirección",-1),fw=y("h3",{class:"text-gray-500 xl:text-2xl sm:text-xl"},"De:",-1),hw={key:0,class:"xl:text-2xl sm:text-xl"},pw={class:"container xl:ml-40 xl:mt-5"},mw=y("option",{value:""},"¿Dónde recoger tus paquetes?",-1),gw=["value"],_w={class:"xl:mt-10 sm:mt-7 sm:pl-12"},yw=y("h2",{class:"xl:text-3xl sm:text-2xl font-bold"},"Dirección",-1),bw=y("h3",{class:"text-gray-500 xl:text-2xl sm:text-xl"},"A:",-1),vw={key:0,class:"xl:text-2xl sm:text-xl"},ww={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-4 px-20 xl:pt-0 sm:pt-10"},xw={class:"flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg xl:w-auto xl:h-[611px] sm:h-[150px] sm:w-auto"},Iw=y("h2",{class:"xl:mt-[-10px] font-extrabold xl:text-6xl sm:mt-[-0px] sm:text-2xl"},"Sobres",-1),Ew=y("h6",{class:"xl:mt-40 xl:text-4xl font-bold xl:pt-[0px] xl:pb-10 sm:mt-[20px]"},"Hasta 25 hojas",-1),Tw={key:0,class:"xl:mb-0 xl:text-xl font-medium leading-tight sm:text-sm text-neutral-800 dark:text-neutral-50"},Sw={class:"xl:text-7xl xl:mt-20 sm:text-2xl sm:mt-5"},Aw={class:"flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg xl:w-auto xl:h-[611px] sm:h-[150px] sm:w-auto"},kw=y("h2",{class:"xl:mt-[-10px] font-extrabold xl:text-6xl sm:mt-[-0px] sm:text-2xl"},"Paquetes",-1),Cw=y("h6",{class:"xl:mt-40 xl:text-4xl font-bold xl:pt-[0px] xl:pb-10 sm:mt-[20px]"},"De 0 - 1 Kg",-1),Rw={key:0},Ow={class:"mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"},Pw={class:"xl:text-7xl xl:mt-20 sm:text-2xl sm:mt-5"},Nw={class:"flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg xl:w-auto xl:h-[611px] sm:h-[150px] sm:w-auto"},Dw=y("h2",{class:"xl:mt-[-10px] font-extrabold xl:text-6xl sm:mt-[-0px] sm:text-2xl"},"Cajas",-1),Mw=y("h6",{class:"xl:mt-40 xl:text-4xl font-bold xl:pt-[0px] xl:pb-10 sm:mt-[20px]"},"De 1 - 10 Kg",-1),Lw={key:0},$w={class:"mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"},Fw={class:"xl:text-7xl xl:mt-20 sm:text-2xl sm:mt-5"},Uw={class:"flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg xl:w-auto xl:h-[611px] sm:h-[150px] sm:w-auto"},jw=y("h2",{class:"xl:mt-[-10px] font-extrabold xl:text-6xl sm:mt-[-0px] sm:text-2xl"},"Cajas",-1),Vw=y("h6",{class:"xl:mt-40 xl:text-4xl font-bold xl:pt-[0px] xl:pb-10 sm:mt-[20px]"},"De 11 - 20 Kg",-1),Bw={key:0},Hw={class:"mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"},qw={class:"xl:text-7xl xl:mt-20 sm:text-2xl sm:mt-5"},zw={class:"flex flex-col items-center justify-center bg-gray-400 p-4 shadow rounded-lg xl:w-[1760px] xl:h-[372px] sm:h-[150px] sm:w-auto"},Kw=y("h2",{class:"xl:m-8 font-extrabold xl:text-6xl sm:mt-[-0px] sm:text-2xl"},"Maletas",-1),Ww=y("h6",{class:"xl:mt-5 xl:text-4xl font-bold xl:pt-[0px] xl:pb-10 sm:mt-[20px]"},"De 21 - 30 kg",-1),Gw={key:0},Jw={class:"mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"},Yw={class:"xl:text-7xl xl:mt-2 sm:text-2xl sm:mt-5"},Qw=y("div",{class:"h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl"},[y("p",null,"***VALOR DE REFERENCIA SUJETO A CAMBIOS***")],-1),Xw={__name:"App",setup(t){const e=Lv();ao(async()=>{await e.getDocuments("envios")});const n=fn(null),r=fn(null),s=async()=>{r.value=null,await e.getDocumentByKey("envios","id",n.value.id)};return(i,o)=>{const a=ah("router-view");return fe(),pe(Ne,null,[_e(a),_e(Tp),_e(Np),rw,y("div",sw,[y("div",iw,[y("div",ow,[y("div",aw,[er(y("select",{"onUpdate:modelValue":o[0]||(o[0]=l=>me(n)?n.value=l:null),onChange:o[1]||(o[1]=l=>s()),class:"bg-white mt-0 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block xl:w-[600px] xl:h-20 sm:w-[500px] p-2.5 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:h-24"},[lw,(fe(!0),pe(Ne,null,na(ue(e).$state.documents,l=>(fe(),pe("option",{key:l.id,value:l},ft(l.origen),9,cw))),128))],544),[[ba,ue(n)]])]),y("div",uw,[dw,fw,ue(n)!=null?(fe(),pe("p",hw,ft(ue(n).ubicacion),1)):xt("",!0)])]),y("div",pw,[er(y("select",{"onUpdate:modelValue":o[2]||(o[2]=l=>me(r)?r.value=l:null),class:"bg-white mt-0 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block xl:w-[600px] xl:h-20 sm:w-[500px] p-2.5 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500 xl:ml-0 sm:ml-20 sm:h-24"},[mw,(fe(!0),pe(Ne,null,na(ue(e).$state.destinos,l=>(fe(),pe("option",{key:l.id,value:l},ft(l.nombre),9,gw))),128))],512),[[ba,ue(r)]]),y("div",_w,[yw,bw,ue(r)!=null?(fe(),pe("p",vw,ft(ue(r).direccion),1)):xt("",!0)])])]),y("div",ww,[y("div",xw,[Iw,Ew,ue(r)!=null?(fe(),pe("div",Tw,[y("p",Sw,"$"+ft(ue(r).precios.SOB),1)])):xt("",!0)]),y("div",Aw,[kw,Cw,ue(r)!=null?(fe(),pe("div",Rw,[y("div",Ow,[y("p",Pw,"$"+ft(ue(r).precios.PAQ),1)])])):xt("",!0)]),y("div",Nw,[Dw,Mw,ue(r)!=null?(fe(),pe("div",Lw,[y("div",$w,[y("p",Fw,"$"+ft(ue(r).precios.C1),1)])])):xt("",!0)]),y("div",Uw,[jw,Vw,ue(r)!=null?(fe(),pe("div",Bw,[y("div",Hw,[y("p",qw,"$"+ft(ue(r).precios.C2),1)])])):xt("",!0)]),y("div",zw,[Kw,Ww,ue(r)!=null?(fe(),pe("div",Gw,[y("div",Jw,[y("p",Yw,"$"+ft(ue(r).precios.C3),1)])])):xt("",!0)])]),Qw]),_e(em),_e(nw),_e(Sm),_e(a)],64)}}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Sn=typeof window<"u";function Zw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function fi(t,e){const n={};for(const r in e){const s=e[r];n[r]=at(s)?s.map(t):t(s)}return n}const cr=()=>{},at=Array.isArray,ex=/\/$/,tx=t=>t.replace(ex,"");function hi(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=ix(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function nx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rx(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Vn(e.matched[r],n.matched[s])&&Ed(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ed(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sx(t[n],e[n]))return!1;return!0}function sx(t,e){return at(t)?Al(t,e):at(e)?Al(e,t):t===e}function Al(t,e){return at(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ix(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var kr;(function(t){t.pop="pop",t.push="push"})(kr||(kr={}));var ur;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ur||(ur={}));function ox(t){if(!t)if(Sn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tx(t)}const ax=/^[^#]+#/;function lx(t,e){return t.replace(ax,"#")+e}function cx(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ws=()=>({left:window.pageXOffset,top:window.pageYOffset});function ux(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cx(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function kl(t,e){return(history.state?history.state.position-e:-1)+t}const Hi=new Map;function dx(t,e){Hi.set(t,e)}function fx(t){const e=Hi.get(t);return Hi.delete(t),e}let hx=()=>location.protocol+"//"+location.host;function Td(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Sl(l,"")}return Sl(n,t)+r+s}function px(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=Td(t,location),E=n.value,S=e.value;let $=0;if(p){if(n.value=g,e.value=p,o&&o===E){o=null;return}$=S?p.position-S.position:0}else r(g);s.forEach(R=>{R(n.value,E,{delta:$,type:kr.pop,direction:$?$>0?ur.forward:ur.back:ur.unknown})})};function l(){o=n.value}function c(p){s.push(p);const g=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ne({},p.state,{scroll:Ws()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Cl(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ws():null}}function mx(t){const{history:e,location:n}=window,r={value:Td(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:hx()+t+l;try{e[u?"replaceState":"pushState"](c,"",p),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(l,c){const u=ne({},e.state,Cl(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=ne({},s.value,e.state,{forward:l,scroll:Ws()});i(u.current,u,!0);const f=ne({},Cl(r.value,l,null),{position:u.position+1},c);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function gx(t){t=ox(t);const e=mx(t),n=px(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:t,go:r,createHref:lx.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function _x(t){return typeof t=="string"||t&&typeof t=="object"}function Sd(t){return typeof t=="string"||typeof t=="symbol"}const Mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ad=Symbol("");var Rl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rl||(Rl={}));function Bn(t,e){return ne(new Error,{type:t,[Ad]:!0},e)}function vt(t,e){return t instanceof Error&&Ad in t&&(e==null||!!(t.type&e))}const Ol="[^/]+?",yx={sensitive:!1,strict:!1,start:!0,end:!0},bx=/[.+*?^${}()[\]/\\]/g;function vx(t,e){const n=ne({},yx,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const p=c[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(bx,"\\$&"),g+=40;else if(p.type===1){const{value:E,repeatable:S,optional:$,regexp:R}=p;i.push({name:E,repeatable:S,optional:$});const F=R||Ol;if(F!==Ol){g+=10;try{new RegExp(`(${F})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${E}" (${F}): `+q.message)}}let P=S?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;f||(P=$&&c.length<2?`(?:/${P})`:"/"+P),$&&(P+="?"),s+=P,g+=20,$&&(g+=-8),S&&(g+=-20),F===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",E=i[p-1];f[E.name]=g&&E.repeatable?g.split("/"):g}return f}function l(c){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:E,repeatable:S,optional:$}=g,R=E in c?c[E]:"";if(at(R)&&!S)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const F=at(R)?R.join("/"):R;if(!F)if($)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);u+=F}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function wx(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function xx(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=wx(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pl(r))return 1;if(Pl(s))return-1}return s.length-r.length}function Pl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ix={type:0,value:""},Ex=/[a-zA-Z0-9_]/;function Tx(t){if(!t)return[[]];if(t==="/")return[[Ix]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function f(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:Ex.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function Sx(t,e,n){const r=vx(Tx(t.path),n),s=ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ax(t,e){const n=[],r=new Map;e=Ml({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,p){const g=!p,E=kx(u);E.aliasOf=p&&p.record;const S=Ml(e,u),$=[E];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const q of P)$.push(ne({},E,{components:p?p.record.components:E.components,path:q,aliasOf:p?p.record:E}))}let R,F;for(const P of $){const{path:q}=P;if(f&&q[0]!=="/"){const W=f.record.path,oe=W[W.length-1]==="/"?"":"/";P.path=f.record.path+(q&&oe+q)}if(R=Sx(P,f,S),p?p.alias.push(R):(F=F||R,F!==R&&F.alias.push(R),g&&u.name&&!Dl(R)&&o(u.name)),E.children){const W=E.children;for(let oe=0;oe<W.length;oe++)i(W[oe],R,p&&p.children[oe])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return F?()=>{o(F)}:cr}function o(u){if(Sd(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&xx(u,n[f])>=0&&(u.record.path!==n[f].record.path||!kd(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Dl(u)&&r.set(u.record.name,u)}function c(u,f){let p,g={},E,S;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw Bn(1,{location:u});S=p.record.name,g=ne(Nl(f.params,p.keys.filter(F=>!F.optional).map(F=>F.name)),u.params&&Nl(u.params,p.keys.map(F=>F.name))),E=p.stringify(g)}else if("path"in u)E=u.path,p=n.find(F=>F.re.test(E)),p&&(g=p.parse(E),S=p.record.name);else{if(p=f.name?r.get(f.name):n.find(F=>F.re.test(f.path)),!p)throw Bn(1,{location:u,currentLocation:f});S=p.record.name,g=ne({},f.params,u.params),E=p.stringify(g)}const $=[];let R=p;for(;R;)$.unshift(R.record),R=R.parent;return{name:S,path:E,params:g,matched:$,meta:Rx($)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Nl(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function kx(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Cx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Cx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Dl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rx(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function Ml(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function kd(t,e){return e.children.some(n=>n===t||kd(t,n))}const Cd=/#/g,Ox=/&/g,Px=/\//g,Nx=/=/g,Dx=/\?/g,Rd=/\+/g,Mx=/%5B/g,Lx=/%5D/g,Od=/%5E/g,$x=/%60/g,Pd=/%7B/g,Fx=/%7C/g,Nd=/%7D/g,Ux=/%20/g;function Fo(t){return encodeURI(""+t).replace(Fx,"|").replace(Mx,"[").replace(Lx,"]")}function jx(t){return Fo(t).replace(Pd,"{").replace(Nd,"}").replace(Od,"^")}function qi(t){return Fo(t).replace(Rd,"%2B").replace(Ux,"+").replace(Cd,"%23").replace(Ox,"%26").replace($x,"`").replace(Pd,"{").replace(Nd,"}").replace(Od,"^")}function Vx(t){return qi(t).replace(Nx,"%3D")}function Bx(t){return Fo(t).replace(Cd,"%23").replace(Dx,"%3F")}function Hx(t){return t==null?"":Bx(t).replace(Px,"%2F")}function vs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function qx(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Rd," "),o=i.indexOf("="),a=vs(o<0?i:i.slice(0,o)),l=o<0?null:vs(i.slice(o+1));if(a in e){let c=e[a];at(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ll(t){let e="";for(let n in t){const r=t[n];if(n=Vx(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(at(r)?r.map(i=>i&&qi(i)):[r&&qi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function zx(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=at(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Kx=Symbol(""),$l=Symbol(""),Uo=Symbol(""),Dd=Symbol(""),zi=Symbol("");function Qn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ut(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Bn(4,{from:n,to:e})):f instanceof Error?a(f):_x(f)?a(Bn(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function pi(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Wx(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Ut(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Zw(c)?c.default:c;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&Ut(p,n,r,i,o)()}))}}return s}function Wx(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Fl(t){const e=mt(Uo),n=mt(Dd),r=$e(()=>e.resolve(ue(t.to))),s=$e(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Vn.bind(null,u));if(p>-1)return p;const g=Ul(l[c-2]);return c>1&&Ul(u)===g&&f[f.length-1].path!==g?f.findIndex(Vn.bind(null,l[c-2])):p}),i=$e(()=>s.value>-1&&Qx(n.params,r.value.params)),o=$e(()=>s.value>-1&&s.value===n.matched.length-1&&Ed(n.params,r.value.params));function a(l={}){return Yx(l)?e[ue(t.replace)?"replace":"push"](ue(t.to)).catch(cr):Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Gx=xc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fl,setup(t,{slots:e}){const n=Kn(Fl(t)),{options:r}=mt(Uo),s=$e(()=>({[jl(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jl(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:jc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Jx=Gx;function Yx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qx(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!at(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ul(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jl=(t,e,n)=>t??e??n,Xx=xc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=mt(zi),s=$e(()=>t.route||r.value),i=mt($l,0),o=$e(()=>{let c=ue(i);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=$e(()=>s.value.matched[o.value]);Wr($l,$e(()=>o.value+1)),Wr(Kx,a),Wr(zi,s);const l=fn();return Zn(()=>[l.value,a.value,t.name],([c,u,f],[p,g,E])=>{u&&(u.instances[f]=c,g&&g!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Vn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return Vl(n.default,{Component:p,route:c});const g=f.props[u],E=g?g===!0?c.params:typeof g=="function"?g(c):g:null,$=jc(p,ne({},E,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Vl(n.default,{Component:$,route:c})||$}}});function Vl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Zx=Xx;function e1(t){const e=Ax(t.routes,t),n=t.parseQuery||qx,r=t.stringifyQuery||Ll,s=t.history,i=Qn(),o=Qn(),a=Qn(),l=Sf(Mt);let c=Mt;Sn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=fi.bind(null,b=>""+b),f=fi.bind(null,Hx),p=fi.bind(null,vs);function g(b,C){let A,D;return Sd(b)?(A=e.getRecordMatcher(b),D=C):D=b,e.addRoute(D,A)}function E(b){const C=e.getRecordMatcher(b);C&&e.removeRoute(C)}function S(){return e.getRoutes().map(b=>b.record)}function $(b){return!!e.getRecordMatcher(b)}function R(b,C){if(C=ne({},C||l.value),typeof b=="string"){const d=hi(n,b,C.path),h=e.resolve({path:d.path},C),m=s.createHref(d.fullPath);return ne(d,h,{params:p(h.params),hash:vs(d.hash),redirectedFrom:void 0,href:m})}let A;if("path"in b)A=ne({},b,{path:hi(n,b.path,C.path).path});else{const d=ne({},b.params);for(const h in d)d[h]==null&&delete d[h];A=ne({},b,{params:f(b.params)}),C.params=f(C.params)}const D=e.resolve(A,C),Z=b.hash||"";D.params=u(p(D.params));const he=nx(r,ne({},b,{hash:jx(Z),path:D.path})),G=s.createHref(he);return ne({fullPath:he,hash:Z,query:r===Ll?zx(b.query):b.query||{}},D,{redirectedFrom:void 0,href:G})}function F(b){return typeof b=="string"?hi(n,b,l.value.path):ne({},b)}function P(b,C){if(c!==b)return Bn(8,{from:C,to:b})}function q(b){return z(b)}function W(b){return q(ne(F(b),{replace:!0}))}function oe(b){const C=b.matched[b.matched.length-1];if(C&&C.redirect){const{redirect:A}=C;let D=typeof A=="function"?A(b):A;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=F(D):{path:D},D.params={}),ne({query:b.query,hash:b.hash,params:"path"in D?{}:b.params},D)}}function z(b,C){const A=c=R(b),D=l.value,Z=b.state,he=b.force,G=b.replace===!0,d=oe(A);if(d)return z(ne(F(d),{state:typeof d=="object"?ne({},Z,d.state):Z,force:he,replace:G}),C||A);const h=A;h.redirectedFrom=C;let m;return!he&&rx(r,D,A)&&(m=Bn(16,{to:h,from:D}),Qt(D,D,!0,!1)),(m?Promise.resolve(m):Y(h,D)).catch(_=>vt(_)?vt(_,2)?_:Qe(_):ae(_,h,D)).then(_=>{if(_){if(vt(_,2))return z(ne({replace:G},F(_.to),{state:typeof _.to=="object"?ne({},Z,_.to.state):Z,force:he}),C||h)}else _=ge(h,D,!0,G,Z);return X(h,D,_),_})}function O(b,C){const A=P(b,C);return A?Promise.reject(A):Promise.resolve()}function Y(b,C){let A;const[D,Z,he]=t1(b,C);A=pi(D.reverse(),"beforeRouteLeave",b,C);for(const d of D)d.leaveGuards.forEach(h=>{A.push(Ut(h,b,C))});const G=O.bind(null,b,C);return A.push(G),En(A).then(()=>{A=[];for(const d of i.list())A.push(Ut(d,b,C));return A.push(G),En(A)}).then(()=>{A=pi(Z,"beforeRouteUpdate",b,C);for(const d of Z)d.updateGuards.forEach(h=>{A.push(Ut(h,b,C))});return A.push(G),En(A)}).then(()=>{A=[];for(const d of b.matched)if(d.beforeEnter&&!C.matched.includes(d))if(at(d.beforeEnter))for(const h of d.beforeEnter)A.push(Ut(h,b,C));else A.push(Ut(d.beforeEnter,b,C));return A.push(G),En(A)}).then(()=>(b.matched.forEach(d=>d.enterCallbacks={}),A=pi(he,"beforeRouteEnter",b,C),A.push(G),En(A))).then(()=>{A=[];for(const d of o.list())A.push(Ut(d,b,C));return A.push(G),En(A)}).catch(d=>vt(d,8)?d:Promise.reject(d))}function X(b,C,A){for(const D of a.list())D(b,C,A)}function ge(b,C,A,D,Z){const he=P(b,C);if(he)return he;const G=C===Mt,d=Sn?history.state:{};A&&(D||G?s.replace(b.fullPath,ne({scroll:G&&d&&d.scroll},Z)):s.push(b.fullPath,Z)),l.value=b,Qt(b,C,A,G),Qe()}let xe;function Ue(){xe||(xe=s.listen((b,C,A)=>{if(!Lr.listening)return;const D=R(b),Z=oe(D);if(Z){z(ne(Z,{replace:!0}),D).catch(cr);return}c=D;const he=l.value;Sn&&dx(kl(he.fullPath,A.delta),Ws()),Y(D,he).catch(G=>vt(G,12)?G:vt(G,2)?(z(G.to,D).then(d=>{vt(d,20)&&!A.delta&&A.type===kr.pop&&s.go(-1,!1)}).catch(cr),Promise.reject()):(A.delta&&s.go(-A.delta,!1),ae(G,D,he))).then(G=>{G=G||ge(D,he,!1),G&&(A.delta&&!vt(G,8)?s.go(-A.delta,!1):A.type===kr.pop&&vt(G,20)&&s.go(-1,!1)),X(D,he,G)}).catch(cr)}))}let Oe=Qn(),Ie=Qn(),ye;function ae(b,C,A){Qe(b);const D=Ie.list();return D.length?D.forEach(Z=>Z(b,C,A)):console.error(b),Promise.reject(b)}function se(){return ye&&l.value!==Mt?Promise.resolve():new Promise((b,C)=>{Oe.add([b,C])})}function Qe(b){return ye||(ye=!b,Ue(),Oe.list().forEach(([C,A])=>b?A(b):C()),Oe.reset()),b}function Qt(b,C,A,D){const{scrollBehavior:Z}=t;if(!Sn||!Z)return Promise.resolve();const he=!A&&fx(kl(b.fullPath,0))||(D||!A)&&history.state&&history.state.scroll||null;return io().then(()=>Z(b,C,he)).then(G=>G&&ux(G)).catch(G=>ae(G,b,C))}const Xe=b=>s.go(b);let De;const wn=new Set,Lr={currentRoute:l,listening:!0,addRoute:g,removeRoute:E,hasRoute:$,getRoutes:S,resolve:R,options:t,push:q,replace:W,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ie.add,isReady:se,install(b){const C=this;b.component("RouterLink",Jx),b.component("RouterView",Zx),b.config.globalProperties.$router=C,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(l)}),Sn&&!De&&l.value===Mt&&(De=!0,q(s.location).catch(Z=>{}));const A={};for(const Z in Mt)A[Z]=$e(()=>l.value[Z]);b.provide(Uo,C),b.provide(Dd,Kn(A)),b.provide(zi,l);const D=b.unmount;wn.add(b),b.unmount=function(){wn.delete(b),wn.size<1&&(c=Mt,xe&&xe(),xe=null,l.value=Mt,De=!1,ye=!1),D()}}};return Lr}function En(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function t1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Vn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Vn(c,l))||s.push(l))}return[n,r,s]}const n1=[{path:"/formulario",name:"Formulario"}],r1=e1({routes:n1,history:gx()});up(Xw).use(r1).use(h_()).mount("#app");
