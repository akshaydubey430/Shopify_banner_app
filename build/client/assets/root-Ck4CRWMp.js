import{j as e}from"./jsx-runtime-0DLF9kdB.js";import{n as x,o as y,p as S,q as h,r as i,_ as f,M as j,L as w,O as g,S as M,t as k}from"./components-DsjzNKjZ.js";/**
 * @remix-run/react v2.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function R({getKey:r,...l}){let{isSpaMode:u}=x(),o=y(),c=S();h({getKey:r,storageKey:a});let d=i.useMemo(()=>{if(!r)return null;let t=r(o,c);return t!==o.key?t:null},[]);if(u)return null;let p=((t,m)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let n=JSON.parse(sessionStorage.getItem(t)||"{}")[m||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return i.createElement("script",f({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(a)}, ${JSON.stringify(d)})`}}))}function _(){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx(j,{}),e.jsx(w,{})]}),e.jsxs("body",{children:[e.jsx(g,{}),e.jsx(R,{}),e.jsx(M,{}),e.jsx(k,{})]})]})}export{_ as default};
