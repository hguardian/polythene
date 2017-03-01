!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-core"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-core","polythene-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-core"],e["polythene-css"],e["polythene-theme"])}(this,function(e,t,n,i,r){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t="default"in t?t.default:t;var l={color:"inherit"},c=function(e){return[a({},e,[i.mixin.fit(),{color:"inherit",borderRadius:"inherit",pointerEvents:"none",".pe-ripple--constrained":{borderRadius:"inherit"," .pe-ripple__mask":{overflow:"hidden",borderRadius:"inherit"}}," .pe-ripple__mask":[i.mixin.fit(),{transform:"translate3d(0,0,0)"}]," .pe-ripple__waves":{outline:"1px solid transparent",position:"absolute",borderRadius:"50%",pointerEvents:"none",display:"none"}," .pe-ripple__waves--animating":{display:"block"}}])]},p=function(e,t,n,i){return[o({},e+t,{color:n["color_"+i]||n.color||"inherit"})]},u=function(e,t){return[p("",e,t,"light"),p(".pe-dark-theme ",e,t,"dark")]},d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},m=[c,u],f=".pe-ripple",v=function(e,t){return i.styler.generateStyles([e,f],d({},l,t),m)};i.styler.generateStyles([f],l,m);var h=n.animationEndEvent(),y=.2,g=0,b=.1,w=2,_=.35,E=function(e,t,a,o,l,c){var p=t.getBoundingClientRect(),u=n.isTouch&&e.touches?e.touches[0].pageX:e.clientX,d=n.isTouch&&e.touches?e.touches[0].pageY:e.clientY,m=t.offsetWidth,f=t.offsetHeight,v=Math.sqrt(m*m+f*f),E=o.center?p.left+p.width/2:u,O=o.center?p.top+p.height/2:d,k=E-p.left-v/2,j=O-p.top-v/2,x=void 0!==o.startOpacity?o.startOpacity:y,S=void 0!==o.opacityDecayVelocity?o.opacityDecayVelocity:_,T=o.endOpacity||g,q=o.startScale||b,L=o.endScale||w,P=o.duration?o.duration:1/S*.2,R=window.getComputedStyle(t).color,A="ripple_animation_"+(new Date).getTime(),C=a.style;C.width=C.height=v+"px",C.top=j+"px",C.left=k+"px",C["animation-duration"]=C["-webkit-animation-duration"]=C["-moz-animation-duration"]=C["-o-animation-duration"]=P+"s",C.backgroundColor=R,C.opacity=x,C.animationName=A,C.animationTimingFunction=o.animationTimingFunction||r.vars.animation_curve_default;var D=[s({},"@keyframes "+A,{" 0%":{transform:"scale("+q+")",opacity:x}," 100%":{transform:"scale("+L+")",opacity:T}})];i.styler.add(A,D);var F=function e(t){o.persistent?(C.opacity=T,C.transform="scale("+L+")"):(c(),a.classList.remove(l.wavesAnimating)),a.removeEventListener(h,e,!1),i.styler.remove(A),o.end&&o.end(t)};a.addEventListener(h,F,!1),o.start&&o.start(e),a.classList.add(l.wavesAnimating)},O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},k={component:"pe-ripple",waves:"pe-ripple__waves",mask:"pe-ripple__mask",constrained:"pe-ripple--constrained",wavesAnimating:"pe-ripple__waves--animating"},j=void 0,x=function(e){var t=e.state,i=e.attrs;if(e.dom){var r=e.dom,a=e.dom.querySelector("."+k.waves),o=function(e){t.animating||(E(e,r,a,i,k,function(){return t.animating=!1}),t.animating=!0)},s=i.getTarget?i.getTarget():e.dom.parentElement;s.addEventListener(n.touchEndEvent,o,!1),j=function(){s.removeEventListener(n.touchEndEvent,o,!1)}}},S=function(e){var i=e.attrs;if(i.disabled)return null;var r=i.element||"div",a=O({},n.filterSupportedAttributes(i),{class:[k.component,i.constrained!==!1?k.constrained:null,i.class].join(" ")}),o=t("div",{class:k.mask},t("div",{class:k.waves}));return t(r,a,[i.before,o,i.after])},T={theme:v,oninit:function(e){return e.state.animating=!1},oncreate:x,onremove:j,view:S};e.default=T,e.classes=k,e.vars=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-ripple.js.map
