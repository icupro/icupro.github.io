"use strict";(self["webpackChunkthuc_tim_mch"]=self["webpackChunkthuc_tim_mch"]||[]).push([[338],{6338:(e,t,o)=>{o.r(t),o.d(t,{iosTransitionAnimation:()=>p,shadow:()=>s});var n=o(5980),r=o(5026);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=540,l=e=>document.querySelector(`${e}.ion-cloned-element`),s=e=>e.shadowRoot||e,i=e=>{const t="ION-TABS"===e.tagName?e:e.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=t){const e=t.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=e?e.querySelector(o):null}return e.querySelector(o)},c=(e,t)=>{const o="ION-TABS"===e.tagName?e:e.querySelector("ion-tabs");let n=[];if(null!=o){const e=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=e&&(n=e.querySelectorAll("ion-buttons"))}else n=e.querySelectorAll("ion-buttons");for(const r of n){const e=r.closest("ion-header"),o=e&&!e.classList.contains("header-collapse-condense-inactive"),n=r.querySelector("ion-back-button"),a=r.classList.contains("buttons-collapse"),l="start"===r.slot||""===r.slot;if(null!==n&&l&&(a&&o&&t||!a))return n}return null},d=(e,t,o,n,r)=>{const a=c(n,o),l=i(r),s=i(n),d=c(r,o),p=null!==a&&null!==l&&!o,y=null!==s&&null!==d&&o;if(p){const n=l.getBoundingClientRect(),r=a.getBoundingClientRect();m(e,t,o,l,n,r),f(e,t,o,a,n,r)}else if(y){const n=s.getBoundingClientRect(),r=d.getBoundingClientRect();m(e,t,o,s,n,r),f(e,t,o,d,n,r)}return{forward:p,backward:y}},f=(e,t,o,r,a,i)=>{const c=t?`calc(100% - ${i.right+4}px)`:i.left-4+"px",d=t?"7px":"-7px",f=t?"-4px":"4px",m=t?"-4px":"4px",p=t?"right":"left",y=t?"left":"right",u=[{offset:0,opacity:0,transform:`translate3d(${d}, ${a.top-40}px, 0) scale(2.1)`},{offset:1,opacity:1,transform:`translate3d(${f}, ${i.top-46}px, 0) scale(1)`}],b=[{offset:0,opacity:1,transform:`translate3d(${f}, ${i.top-46}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${d}, ${a.top-40}px, 0) scale(2.1)`}],S=o?b:u,$=[{offset:0,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${m}, ${i.top-46}px, 0) scale(1)`}],g=[{offset:0,opacity:1,transform:`translate3d(${m}, ${i.top-46}px, 0) scale(1)`},{offset:.2,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`}],h=o?g:$,T=(0,n.c)(),x=(0,n.c)(),q=l("ion-back-button"),X=s(q).querySelector(".button-text"),A=s(q).querySelector("ion-icon");q.text=r.text,q.mode=r.mode,q.icon=r.icon,q.color=r.color,q.disabled=r.disabled,q.style.setProperty("display","block"),q.style.setProperty("position","fixed"),x.addElement(A),T.addElement(X),T.beforeStyles({"transform-origin":`${p} center`}).beforeAddWrite((()=>{r.style.setProperty("display","none"),q.style.setProperty(p,c)})).afterAddWrite((()=>{r.style.setProperty("display",""),q.style.setProperty("display","none"),q.style.removeProperty(p)})).keyframes(S),x.beforeStyles({"transform-origin":`${y} center`}).keyframes(h),e.addAnimation([T,x])},m=(e,t,o,r,a,s)=>{const i=t?`calc(100% - ${a.right}px)`:`${a.left}px`,c=t?"-18px":"18px",d=t?"right":"left",f=[{offset:0,opacity:0,transform:`translate3d(${c}, ${s.top-4}px, 0) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0, ${a.top-2}px, 0) scale(1)`}],m=[{offset:0,opacity:.99,transform:`translate3d(0, ${a.top-2}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${c}, ${s.top-4}px, 0) scale(0.5)`}],p=o?f:m,y=l("ion-title"),u=(0,n.c)();y.innerText=r.innerText,y.size=r.size,y.color=r.color,u.addElement(y),u.beforeStyles({"transform-origin":`${d} center`,height:"46px",display:"",position:"relative",[d]:i}).beforeAddWrite((()=>{r.style.setProperty("display","none")})).afterAddWrite((()=>{r.style.setProperty("display",""),y.style.setProperty("display","none")})).keyframes(p),e.addAnimation(u)},p=(e,t)=>{var o;try{const l="cubic-bezier(0.32,0.72,0,1)",i="opacity",c="transform",f="0%",m=.8,p="rtl"===e.ownerDocument.dir,y=p?"-99.5%":"99.5%",u=p?"33%":"-33%",b=t.enteringEl,S=t.leavingEl,$="back"===t.direction,g=b.querySelector(":scope > ion-content"),h=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),T=b.querySelectorAll(":scope > ion-header > ion-toolbar"),x=(0,n.c)(),q=(0,n.c)();if(x.addElement(b).duration((null!==(o=t.duration)&&void 0!==o?o:0)||a).easing(t.easing||l).fill("both").beforeRemoveClass("ion-page-invisible"),S&&null!==e&&void 0!==e){const t=(0,n.c)();t.addElement(e),x.addAnimation(t)}if(g||0!==T.length||0!==h.length?(q.addElement(g),q.addElement(h)):q.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),x.addAnimation(q),$?q.beforeClearStyles([i]).fromTo("transform",`translateX(${u})`,`translateX(${f})`).fromTo(i,m,1):q.beforeClearStyles([i]).fromTo("transform",`translateX(${y})`,`translateX(${f})`),g){const e=s(g).querySelector(".transition-effect");if(e){const t=e.querySelector(".transition-cover"),o=e.querySelector(".transition-shadow"),r=(0,n.c)(),a=(0,n.c)(),l=(0,n.c)();r.addElement(e).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),a.addElement(t).beforeClearStyles([i]).fromTo(i,0,.1),l.addElement(o).beforeClearStyles([i]).fromTo(i,.03,.7),r.addAnimation([a,l]),q.addAnimation([r])}}const X=b.querySelector("ion-header.header-collapse-condense"),{forward:A,backward:E}=d(x,p,$,b,S);if(T.forEach((e=>{const t=(0,n.c)();t.addElement(e),x.addAnimation(t);const o=(0,n.c)();o.addElement(e.querySelector("ion-title"));const r=(0,n.c)(),a=Array.from(e.querySelectorAll("ion-buttons,[menuToggle]")),l=e.closest("ion-header"),c=null===l||void 0===l?void 0:l.classList.contains("header-collapse-condense-inactive");let d;d=$?a.filter((e=>{const t=e.classList.contains("buttons-collapse");return t&&!c||!t})):a.filter((e=>!e.classList.contains("buttons-collapse"))),r.addElement(d);const m=(0,n.c)();m.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const b=(0,n.c)();b.addElement(s(e).querySelector(".toolbar-background"));const S=(0,n.c)(),g=e.querySelector("ion-back-button");if(g&&S.addElement(g),t.addAnimation([o,r,m,b,S]),r.fromTo(i,.01,1),m.fromTo(i,.01,1),$)c||o.fromTo("transform",`translateX(${u})`,`translateX(${f})`).fromTo(i,.01,1),m.fromTo("transform",`translateX(${u})`,`translateX(${f})`),S.fromTo(i,.01,1);else{X||o.fromTo("transform",`translateX(${y})`,`translateX(${f})`).fromTo(i,.01,1),m.fromTo("transform",`translateX(${y})`,`translateX(${f})`),b.beforeClearStyles([i,"transform"]);const e=null===l||void 0===l?void 0:l.translucent;if(e?b.fromTo("transform",p?"translateX(-100%)":"translateX(100%)","translateX(0px)"):b.fromTo(i,.01,"var(--opacity)"),A||S.fromTo(i,.01,1),g&&!A){const e=(0,n.c)();e.addElement(s(g).querySelector(".button-text")).fromTo("transform",p?"translateX(-100px)":"translateX(100px)","translateX(0px)"),t.addAnimation(e)}}})),S){const e=(0,n.c)(),t=S.querySelector(":scope > ion-content"),o=S.querySelectorAll(":scope > ion-header > ion-toolbar"),a=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(t||0!==o.length||0!==a.length?(e.addElement(t),e.addElement(a)):e.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),x.addAnimation(e),$){e.beforeClearStyles([i]).fromTo("transform",`translateX(${f})`,p?"translateX(-100%)":"translateX(100%)");const t=(0,r.g)(S);x.afterAddWrite((()=>{"normal"===x.getDirection()&&t.style.setProperty("display","none")}))}else e.fromTo("transform",`translateX(${f})`,`translateX(${u})`).fromTo(i,1,m);if(t){const o=s(t).querySelector(".transition-effect");if(o){const t=o.querySelector(".transition-cover"),r=o.querySelector(".transition-shadow"),a=(0,n.c)(),l=(0,n.c)(),s=(0,n.c)();a.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),l.addElement(t).beforeClearStyles([i]).fromTo(i,.1,0),s.addElement(r).beforeClearStyles([i]).fromTo(i,.7,.03),a.addAnimation([l,s]),e.addAnimation([a])}}o.forEach((e=>{const t=(0,n.c)();t.addElement(e);const o=(0,n.c)();o.addElement(e.querySelector("ion-title"));const r=(0,n.c)(),a=e.querySelectorAll("ion-buttons,[menuToggle]"),l=e.closest("ion-header"),d=null===l||void 0===l?void 0:l.classList.contains("header-collapse-condense-inactive"),m=Array.from(a).filter((e=>{const t=e.classList.contains("buttons-collapse");return t&&!d||!t}));r.addElement(m);const y=(0,n.c)(),b=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&y.addElement(b);const S=(0,n.c)();S.addElement(s(e).querySelector(".toolbar-background"));const g=(0,n.c)(),h=e.querySelector("ion-back-button");if(h&&g.addElement(h),t.addAnimation([o,r,y,g,S]),x.addAnimation(t),g.fromTo(i,.99,0),r.fromTo(i,.99,0),y.fromTo(i,.99,0),$){d||o.fromTo("transform",`translateX(${f})`,p?"translateX(-100%)":"translateX(100%)").fromTo(i,.99,0),y.fromTo("transform",`translateX(${f})`,p?"translateX(-100%)":"translateX(100%)"),S.beforeClearStyles([i,"transform"]);const e=null===l||void 0===l?void 0:l.translucent;if(e?S.fromTo("transform","translateX(0px)",p?"translateX(-100%)":"translateX(100%)"):S.fromTo(i,"var(--opacity)",0),h&&!E){const e=(0,n.c)();e.addElement(s(h).querySelector(".button-text")).fromTo("transform",`translateX(${f})`,`translateX(${(p?-124:124)+"px"})`),t.addAnimation(e)}}else d||o.fromTo("transform",`translateX(${f})`,`translateX(${u})`).fromTo(i,.99,0).afterClearStyles([c,i]),y.fromTo("transform",`translateX(${f})`,`translateX(${u})`).afterClearStyles([c,i]),g.afterClearStyles([i]),o.afterClearStyles([i]),r.afterClearStyles([i])}))}return x}catch(l){throw l}}}}]);
//# sourceMappingURL=338-legacy.10e4d66b.js.map