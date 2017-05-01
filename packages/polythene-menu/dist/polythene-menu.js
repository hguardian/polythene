!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-mithril"),require("polythene-core"),require("polythene-css"),require("polythene-list-tile"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-mithril","polythene-core","polythene-css","polythene-list-tile","polythene-theme"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-mithril"],e["polythene-core"],e["polythene-css"],e["polythene-list-tile"],e["polythene-theme"])}(this,function(e,t,n,i,r,o,l){"use strict";function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t="default"in t?t.default:t;var s={component:"pe-menu",content:"pe-menu__content",placeholder:"pe-menu__placeholder",target:"pe-menu__target",permanent:"pe-menu--permanent",visible:"pe-menu--visible",width_auto:"pe-menu--width-auto",width_n:"pe-menu--width-",listTile:o.classes.component,selectedListTile:o.classes.selected},c=l.vars.rgba,p={sizes:[1,1.5,2,3,4,5,6,7],min_size:1.5,max_size_small_screen:5,size_factor:l.vars.grid_unit_menu,border_radius:l.vars.unit_block_border_radius,color_light_background:c(l.vars.color_light_background),color_dark_background:c(l.vars.color_dark_background)},d=function(e,t){return t<e.min_size?e.min_size:t},f=function(e){return"pe-menu--width-"+e.toString().replace(".","-")},h=function(e,t){var n=d(e,t);return u({},"&."+f(n),{width:e.size_factor*n+"px","max-width":"100%"})},m=function(e,t){var n;return[(n={},u(n,e,[t.sizes.map(function(e){return h(t,e)}),u({transitionTimingFunction:"ease-out",transitionProperty:"opacity",zIndex:l.vars.z_menu,opacity:0,position:"absolute",width:"100%",minWidth:l.vars.grid_unit_menu*t.min_size+"px","&.pe-menu--width-auto":{width:"auto"},"&.pe-menu--visible":{opacity:1},"&.pe-menu--permanent":{position:"relative",opacity:1,zIndex:0}},"@media (max-width: "+l.vars.unit_screen_size_large+"px)",{"max-width":t.max_size_small_screen*l.vars.grid_unit_menu+"px"})]),u(n," .pe-menu__content",{" .pe-list-tile__title":[r.mixin.ellipsis("none")]}),n)]},g=function(e,t,n,i){return[a({},e.map(function(e){return e+t}).join(","),{" .pe-menu__content":{"background-color":n["color_"+i+"_background"]}})]},v=function(e,t){return[g([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),g(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},b=[m,v],y="."+s.component,w=function(e,t){return r.styler.generateStyles([e,y],_({},p,t),b)};r.styler.generateStyles([y],p,b);var z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},k=function(e,t){if(t.target){var n=document.querySelector("#"+t.target);if(n){var i=void 0!==t.offset?t.offset:16,r=e.el;if(r){var o=e.el.querySelector("."+s.content),l=t.origin||"top-left",u=t.reposition!==!1,a=0;if(u){var c=o.querySelectorAll("."+s.listTile)[0],p=o.querySelector("."+s.selectedListTile);if(c&&p){var d=c.getBoundingClientRect();a=p.getBoundingClientRect().top-d.top}var f=p||c,h=f.getBoundingClientRect(),m=n.getBoundingClientRect();a+=(h.height-m.height)/2}var g=n.getBoundingClientRect();if(r.parentNode){var v=r.parentNode.getBoundingClientRect(),_=function(){return r.style.left=g.left-v.left+i+"px"},b=function(){return r.style.right=g.right-v.right+i+"px"},y=function(){return r.style.top=g.top-v.top-a-8+"px"},w=function(){return r.style.bottom=g.bottom-v.bottom-a+"px"};({"top-left":function(){return y()&&_()},"top-right":function(){return y()&&b()},"bottom-left":function(){return w()&&_()},"bottom-right":function(){return w()&&b()}})[l].call()}}}}},x=function(e,t){return e.isTransitioning=!0,i.show(z({},t,{el:e.el,showClass:s.visible})).then(function(){e.isTransitioning=!1,e.visible=!0,t.didShow&&t.didShow(t.id)})},S=function(e,n){return e.isTransitioning=!0,i.hide(z({},n,{el:e.el,showClass:s.visible})).then(function(){e.isTransitioning=!1,e.visible=!1,n.didHide&&n.didHide(n.id),t.redraw()})},T=function(e){return e<1.5?1.5:e},j=function(e){return s.width_n+e.toString().replace(".","-")},q=function(e){var r=e.attrs,o=e.state,l=document.body,u=function(){l.addEventListener("click",c)},a=function(){l.removeEventListener("click",c)},c=function(e){e.target!==o.el&&(a(),e.defaultPrevented?S(o,r):S(o,z({},r,{hideDelay:0})))},p=function(){k(o,r),t.redraw()},d=function(e){27===e.which&&S(o,z({},r,{hideDelay:0}))},f=r.element||"div",h=z({},i.filterSupportedAttributes(r),{class:[s.component,r.permanent?s.permanent:null,r.target?s.target:null,r.size?j(T(r.size)):null,"dark"===r.tone?"pe-dark-tone":null,"light"===r.tone?"pe-light-tone":null,r.class].join(" "),oncreate:function(e){var t=e.dom;o.el=t,r.permanent||(i.subscribe("resize",p),i.subscribe("keydown",d),setTimeout(function(){u(),x(o,r)},0)),k(o,r)},onremove:function(){i.unsubscribe("resize",p),i.unsubscribe("keydown",d),r.permanent||a()}}),m=t("div",{class:s.content,onclick:function(e){return e.preventDefault()},style:r.style},[o.z>0&&t(n.shadow,{z:o.z,animated:!0}),r.content?r.content:e.children]);return t(f,h,[r.before,m,r.after])},O={theme:w,oninit:function(e){var t=e.attrs;e.state=z(e.state,{z:void 0!==t.z?t.z:1,el:null,isTransitioning:!1,visible:t.permanent||!1})},view:function(e){return e.attrs.show&&(e.state.visible=!0),e.state.visible?q(e):t("span",{class:s.placeholder})}};e.default=O,e.classes=s,e.vars=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-menu.js.map
