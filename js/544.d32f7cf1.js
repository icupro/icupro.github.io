"use strict";(self["webpackChunkthuc_tim_mch"]=self["webpackChunkthuc_tim_mch"]||[]).push([[544],{2642:(e,t,s)=>{s.r(t),s.d(t,{startFocusVisible:()=>r});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o="ion-focused",n="ion-focusable",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let t=[],s=!0;const r=e?e.shadowRoot:document,i=e||document.body,d=e=>{t.forEach((e=>e.classList.remove(o))),e.forEach((e=>e.classList.add(o))),t=e},a=()=>{s=!1,d([])},u=e=>{s=c.includes(e.key),s||d([])},m=e=>{if(s&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains(n)));d(t)}},v=()=>{r.activeElement===i&&d([])};r.addEventListener("keydown",u),r.addEventListener("focusin",m),r.addEventListener("focusout",v),r.addEventListener("touchstart",a),r.addEventListener("mousedown",a);const h=()=>{r.removeEventListener("keydown",u),r.removeEventListener("focusin",m),r.removeEventListener("focusout",v),r.removeEventListener("touchstart",a),r.removeEventListener("mousedown",a)};return{destroy:h,setFocus:d}}}}]);
//# sourceMappingURL=544.d32f7cf1.js.map