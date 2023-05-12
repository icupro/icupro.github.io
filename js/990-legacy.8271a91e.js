"use strict";(self["webpackChunkthuc_tim_mch"]=self["webpackChunkthuc_tim_mch"]||[]).push([[990],{8990:(t,e,n)=>{n.r(e),n.d(e,{createSwipeBackGesture:()=>s});var r=n(6587),c=n(545),i=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s=(t,e,n,s,a)=>{const o=t.ownerDocument.defaultView,h=(0,c.i)(t),u=t=>{const e=50,{startX:n}=t;return h?n>=o.innerWidth-e:n<=e},l=t=>h?-t.deltaX:t.deltaX,d=t=>h?-t.velocityX:t.velocityX,m=t=>u(t)&&e(),k=t=>{const e=l(t),n=e/o.innerWidth;s(n)},w=t=>{const e=l(t),n=o.innerWidth,c=e/n,i=d(t),s=n/2,h=i>=0&&(i>.2||e>s),u=h?1-c:c,m=u*n;let k=0;if(m>5){const t=m/Math.abs(i);k=Math.min(t,540)}a(h,c<=0?.01:(0,r.h)(0,c,.9999),k)};return(0,i.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:m,onStart:n,onMove:k,onEnd:w})}}}]);
//# sourceMappingURL=990-legacy.8271a91e.js.map