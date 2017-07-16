!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-core-list-tile"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-core-list-tile","polythene-theme"],t):t(e.polythene=e.polythene||{},e["polythene-core"],e["polythene-core-css"],e["polythene-core-list-tile"],e["polythene-theme"])}(this,function(e,t,n,i,r){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={component:"pe-menu",content:"pe-menu__content",placeholder:"pe-menu__placeholder",target:"pe-menu__target",permanent:"pe-menu--permanent",visible:"pe-menu--visible",width_auto:"pe-menu--width-auto",width_n:"pe-menu--width-",listTile:i.classes.component,selectedListTile:i.classes.selected},l={sizes:[1,1.5,2,3,4,5,6,7],min_size:1.5,max_size_small_screen:5,size_factor:r.vars.grid_unit_menu,border_radius:r.vars.unit_block_border_radius,color_light_background:n.rgba(r.vars.color_light_background),color_dark_background:n.rgba(r.vars.color_dark_background)},c=function(e,t){return t<e.min_size?e.min_size:t},d=function(e){return"pe-menu--width-"+e.toString().replace(".","-")},p=function(e,t){var n=c(e,t);return o({},"&."+d(n),{width:e.size_factor*n+"px","max-width":"100%"})},m=function(e,t){var i;return[(i={},o(i,e,[t.sizes.map(function(e){return p(t,e)}),o({transitionTimingFunction:"ease-out",transitionProperty:"opacity",zIndex:r.vars.z_menu,opacity:0,position:"absolute",width:"100%",minWidth:r.vars.grid_unit_menu*t.min_size+"px","&.pe-menu--width-auto":{width:"auto"},"&.pe-menu--visible":{opacity:1},"&.pe-menu--permanent":{position:"relative",opacity:1,zIndex:0}," .pe-menu__content":{width:"100%",borderRadius:t.border_radius+"px"}},"@media (max-width: "+r.vars.unit_screen_size_large+"px)",{"max-width":t.max_size_small_screen*r.vars.grid_unit_menu+"px"})]),o(i," .pe-menu__content",{" .pe-list-tile__title":[n.mixin.ellipsis("none")]}),i)]},f=function(e,t,n,i){return[a({},e.map(function(e){return e+t}).join(","),{" .pe-menu__content":{"background-color":n["color_"+i+"_background"]}})]},h=function(e,t){return[f([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),f(["",".pe-light-tone",".pe-light-tone "],e,t,"light")]},g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},v=[m,h],b="."+u.component,_=function(e,t){return n.styler.generateStyles([e,b],g({},l,t),v)};n.styler.generateStyles([b],l,v);var y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},w=function(e){return e.attrs.element||"div"},z=_,k=function(e,n){if(!t.isServer){var i=document.querySelector(n.target);if(i){var r=void 0!==n.offset?n.offset:16,o=e.dom();if(o){var a=e.dom().querySelector("."+u.content),s=n.origin||"top-left",l=0;if(!1!==n.reposition){var c=a.querySelectorAll("."+u.listTile)[0],d=a.querySelector("."+u.selectedListTile);if(c&&d){var p=c.getBoundingClientRect(),m=d.getBoundingClientRect();l=m.top-p.top}var f=(d||c).getBoundingClientRect(),h=i.getBoundingClientRect(),g=f.height-h.height;l+=g/2}var v=i.getBoundingClientRect();if(o.parentNode){var b=o.parentNode.getBoundingClientRect(),_=function(){return o.style.left=v.left-b.left+r+"px"},y=function(){return o.style.right=v.right-b.right+r+"px"},w=function(){return o.style.top=v.top-b.top-l-8+"px"},z=function(){return o.style.bottom=v.bottom-b.bottom-l+"px"};({"top-left":function(){return w()&&_()},"top-right":function(){return w()&&y()},"bottom-left":function(){return z()&&_()},"bottom-right":function(){return z()&&y()}})[s].call()}}}}},x=function(e,n){return n.onChange&&n.onChange({visible:!1,transitioning:!0}),k(e,n),t.show(y({},n,{el:e.dom(),showClass:u.visible})).then(function(){n.onChange&&n.onChange({visible:!0,transitioning:!1}),n.didShow&&n.didShow(n.id),e.visible(!1)})},C=function(e,n){return n.onChange&&n.onChange({visible:!0,transitioning:!0}),t.hide(y({},n,{el:e.dom(),showClass:u.visible})).then(function(){n.onChange&&n.onChange({visible:!1,transitioning:!1}),n.didHide&&n.didHide(n.id),e.visible(!1)})},T=function(e){return e<1.5?1.5:e},S=function(e){return u.width_n+e.toString().replace(".","-")},D=function(e,n){var i=e.state,r=e.attrs;"mount"===n?(t.subscribe("resize",i.update),t.subscribe("keydown",i.handleEscape),setTimeout(function(){i.activateDismissTap(),x(i,r)},0)):(t.unsubscribe("resize",i.update),t.unsubscribe("keydown",i.handleEscape),i.deActivateDismissTap())},j=function(e){if(e.dom){var t=e.state,n=e.attrs;t.dom(e.dom),n.permanent||(t.handleDismissTap=function(e){e.target!==t.dom()&&(e.defaultPrevented?C(t,n):C(t,y({},n,{hideDelay:0})))},t.update=function(){k(t,n)},t.activateDismissTap=function(){document.body.addEventListener("click",t.handleDismissTap)},t.deActivateDismissTap=function(){document.body.removeEventListener("click",t.handleDismissTap)},t.handleEscape=function(e){27===e.which&&C(t,y({},n,{hideDelay:0}))},D(e,"mount"))}},O=function(e){e.attrs.permanent||D(e,"unmount")},P=function(e,t){var n=t(),i=t(!1);return{dom:n,visible:i,activateDismissTap:void 0,deActivateDismissTap:void 0,handleDismissTap:void 0,handleEscape:void 0,update:void 0,redrawOnUpdate:t.merge([i])}},q=function(e,n){var i=n.keys,r=e.attrs;return y({},t.filterSupportedAttributes(r),{className:[u.component,r.permanent?u.permanent:null,r.target?u.target:null,r.size?S(T(r.size)):null,"dark"===r.tone?"pe-dark-tone":null,"light"===r.tone?"pe-light-tone":null,r.className||r[i.class]].join(" ")})},E=function(e,t){var n,i=t.renderer,r=t.keys,o=t.Shadow,a=e.attrs,l=void 0!==a.z?a.z:1;return i("div",(n={className:u.content},s(n,r.onclick,function(e){return e.preventDefault()}),s(n,"style",a.style),n),[l>0&&i(o,{z:l,animated:!0}),a.content?a.content:e.children])},R=Object.freeze({getElement:w,theme:z,onMount:j,onUnMount:O,getInitialState:P,createProps:q,createContent:E});e.coreMenu=R,e.classes=u,e.vars=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-menu.js.map
