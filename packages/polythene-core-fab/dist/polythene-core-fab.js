!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],r):r(e.polythene={},e["polythene-core-css"],e["polythene-theme"])}(this,function(e,r,n){"use strict";function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var i={component:"pe-fab",content:"pe-fab__content",mini:"pe-fab--mini"},a={size_regular:7*n.vars.grid_unit_component,size_mini:5*n.vars.grid_unit_component,padding_regular:2*n.vars.grid_unit_component,color_light:r.rgba(n.vars.color_primary_foreground),color_light_focus_background:r.rgba(n.vars.color_light_foreground,n.vars.blend_light_background_hover),color_light_focus_opacity:n.vars.blend_light_background_hover_medium,color_light_background:r.rgba(n.vars.color_primary),color_dark:r.rgba(n.vars.color_primary_foreground),color_dark_focus_background:r.rgba(n.vars.color_dark_foreground,n.vars.blend_dark_background_hover),color_dark_background:r.rgba(n.vars.color_primary)},c=function(e,t){return[o({},e,{userSelect:"none",display:"inline-block",position:"relative",outline:"none",cursor:"pointer",padding:0,border:"none"," .pe-button__content":{position:"relative",width:t.size_regular+"px",height:t.size_regular+"px",borderRadius:"50%",padding:t.padding_regular+"px"}," .pe-button__wash, .pe-button__focus":[r.mixin.fit(),{borderRadius:"inherit"}],".pe-fab--mini":{" .pe-button__content":{width:t.size_mini+"px",height:t.size_mini+"px",padding:(t.size_mini-n.vars.unit_icon_size)/2+"px"}}," .pe-ripple":{borderRadius:"inherit"}," .pe-button__wash":{transition:"background-color "+n.vars.animation_duration+" ease-in-out",borderRadius:"inherit",pointerEvents:"none",backgroundColor:"transparent"}})]},u=function(e,r,n,o){return[t({},e.map(function(e){return e+r}).join(","),{" .pe-button__content":{backgroundColor:n["color_"+o+"_background"],color:n["color_"+o]},"&.pe-button--focus":{" .pe-button__focus":{opacity:1,backgroundColor:n["color_"+o+"_focus_background"]}}})]},l=function(e,r){return[u([".pe-dark-tone",".pe-dark-tone "],e,r,"dark"),u(["",".pe-light-tone",".pe-light-tone "],e,r,"light")]},s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=[c,l],_="."+i.component,d=function(e,n){return r.styler.generateStyles([e,_],s({},a,n),p)};r.styler.generateStyles([_],a,p);var g=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},b=d,f=function(e,r){var n=r.keys,o=r.renderer,t=r.Icon,a=e.attrs,c=a.content?a.content:a.icon?o(t,a.icon):a.children||e.children;return g({},{content:o("div",{className:i.content},c),parentClassName:[i.component,a.mini?i.mini:null,a.className||a[n.class]].join(" "),ripple:{center:!0,opacityDecayVelocity:.24},shadow:{increase:5},ink:!0,wash:!0,animateOnTap:void 0===a.animateOnTap||a.animateOnTap},a)},h=function(){return null},m=Object.freeze({theme:b,createProps:f,createContent:h});e.coreFAB=m,e.classes=i,e.vars=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-fab.js.map
