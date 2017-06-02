!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,n,i){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={component:"pe-ripple",mask:"pe-ripple__mask",waves:"pe-ripple__waves",constrained:"pe-ripple--constrained",wavesAnimating:"pe-ripple__waves--animating"},l={color:"inherit"},c=function(e){return[r({},e,[n.mixin.fit(),{color:"inherit",borderRadius:"inherit",pointerEvents:"none",".pe-ripple--constrained":{borderRadius:"inherit"," .pe-ripple__mask":{overflow:"hidden",borderRadius:"inherit"}}," .pe-ripple__mask":[n.mixin.fit(),{transform:"translate3d(0,0,0)"}]," .pe-ripple__waves":{outline:"1px solid transparent",position:"absolute",borderRadius:"50%",pointerEvents:"none",display:"none"}," .pe-ripple__waves--animating":{display:"block"}}])]},p=function(e,t,n,i){return[o({},e.map(function(e){return e+t}).join(","),{color:n["color_"+i]||n.color||"inherit"})]},u=function(e,t){return[p([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),p(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},m=[c,u],f="."+s.component,v=function(e,t){return n.styler.generateStyles([e,f],d({},l,t),m)};n.styler.generateStyles([f],l,m);var h=t.animationEndEvent,y=function(e){var r=e.e,o=e.id,s=e.el,l=e.attrs,c=e.classes;return new Promise(function(e){var p=document.createElement("div");p.setAttribute("class",c.mask),s.appendChild(p);var u=document.createElement("div");u.setAttribute("class",c.waves),p.appendChild(u);var d=s.getBoundingClientRect(),m=t.isTouch&&r.touches?r.touches[0].pageX:r.clientX,f=t.isTouch&&r.touches?r.touches[0].pageY:r.clientY,v=s.offsetWidth,y=s.offsetHeight,g=Math.sqrt(v*v+y*y),b=l.center?d.left+d.width/2:m,w=l.center?d.top+d.height/2:f,_=b-d.left-g/2,E=w-d.top-g/2,k=void 0!==l.startOpacity?l.startOpacity:.2,O=void 0!==l.opacityDecayVelocity?l.opacityDecayVelocity:.35,j=l.endOpacity||0,x=l.startScale||.1,L=l.endScale||2,P=l.duration?l.duration:1/O*.2,C=window.getComputedStyle(s).color,S=u.style;S.width=S.height=g+"px",S.top=E+"px",S.left=_+"px",S["animation-duration"]=S["-webkit-animation-duration"]=S["-moz-animation-duration"]=S["-o-animation-duration"]=P+"s",S.backgroundColor=C,S.opacity=k,S.animationName=o,S.animationTimingFunction=l.animationTimingFunction||i.vars.animation_curve_default;var A=[a({},"@keyframes "+o,{" 0%":{transform:"scale("+x+")",opacity:k}," 100%":{transform:"scale("+L+")",opacity:j}})];n.styler.add(o,A);var R=function t(i){n.styler.remove(o),u.removeEventListener(h,t,!1),u.classList.remove(c.wavesAnimating),l.persistent?(S.opacity=j,S.transform="scale("+L+")"):(p.removeChild(u),s.removeChild(p)),e(i)};u.addEventListener(h,R,!1),u.classList.add(c.wavesAnimating)})},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},b=v,w=function(){return{animations:{},animating:!1,removeEventListeners:void 0}},_=function(e,n){var i=n.keys,r=e.attrs;return g({},t.filterSupportedAttributes(r),{className:[s.component,!1!==r.constrained?s.constrained:null,"dark"===r.tone?"pe-dark-tone":null,"light"===r.tone?"pe-light-tone":null,r.className||r[i.class]].join(" ")})},E=function(e){return e.animating=Object.keys(e.animations).length>0},k=function(e){if(e.dom){var n=e.state,i=e.attrs,r=function(t){if(!i.disabled&&(i.multi||!n.animating)){i.start&&i.start(t);var r="ripple_animation_"+(new Date).getTime();n.animations[r]=y({e:t,id:r,el:e.dom,attrs:i,classes:s}).then(function(e){i.end&&i.end(e),delete n.animations[r],E(n)}),E(n)}},o=i.target?i.target:e.dom&&e.dom.parentElement;o.addEventListener(t.touchEndEvent,r,!1),n.removeEventListeners=function(){return o.removeEventListener(t.touchEndEvent,r,!1)}}},O=function(e){return e.state.removeEventListeners()},j=Object.freeze({element:"div",theme:b,getInitialState:w,createProps:_,onMount:k,onUnmount:O});e.coreRipple=j,e.classes=s,e.vars=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-ripple.js.map
