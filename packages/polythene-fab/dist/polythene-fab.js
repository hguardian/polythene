!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("mithril"),require("polythene-raised-button"),require("polythene-icon"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-raised-button","polythene-icon","polythene-css","polythene-theme"],n):n(e.polythene=e.polythene||{},e.m,e["polythene-raised-button"],e["polythene-icon"],e["polythene-css"],e["polythene-theme"])}(this,function(e,n,t,r,o,i){"use strict";n="default"in n?n.default:n;var a=i.vars.rgba,s={size_regular:7*i.vars.grid_unit_component,size_mini:5*i.vars.grid_unit_component,padding_regular:2*i.vars.grid_unit_component,color_light:a(i.vars.color_primary_foreground),color_dark:a(i.vars.color_primary_foreground),color_light_background:a(i.vars.color_primary),color_dark_background:a(i.vars.color_primary)},c=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l=function(e,n){return[c({},e,[o.mixin.vendorize({"user-select":"none"},i.vars.prefixes_user_select),{display:"inline-block",position:"relative",outline:"none",cursor:"pointer",padding:0,border:"none"," .pe-button__content":{position:"relative",width:n.size_regular+"px",height:n.size_regular+"px",borderRadius:"50%",padding:n.padding_regular+"px"},"&.pe-button--fab-mini":{" .pe-button__content":{width:n.size_mini+"px",height:n.size_mini+"px",padding:(n.size_mini-i.vars.unit_icon_size)/2+"px"}}," .pe-ripple":{borderRadius:"inherit"}," .pe-button__wash":[o.mixin.vendorize({transition:"background-color "+i.vars.animation_duration+" ease-in-out"},i.vars.prefixes_transition),{borderRadius:"inherit",pointerEvents:"none",backgroundColor:"transparent"}]}])]},u=function(e,n,t,r){return[c({},e+n,{" .pe-button__content":{backgroundColor:t["color_"+r+"_background"],color:t["color_"+r]}})]},d=function(e,n){return[u("",e,n,"light"),u(".pe-dark-theme ",e,n,"dark")]},_=[l,d],h=".pe-button--fab",b=function(e,n){return o.styler.generateStyles([e,h],p({},s,n),_)};o.styler.generateStyles([h],s,_);var m={component:"pe-button--fab",content:"pe-button--fab__content",mini:"pe-button--fab-mini"},f=function(e){var o=e.attrs,i=o.content?o.content:o.icon?n(r.icon,o.icon):o.children||e.children;return n(t.raisedButton,p({},{content:n("div",{class:m.content},i),parentClass:[m.component,o.mini?m.mini:null].join(" "),ripple:{center:!0,opacityDecayVelocity:.24},shadow:{increase:5},ink:!0,wash:!0,animateOnTap:void 0===o.animateOnTap||o.animateOnTap},o))},y={theme:b,view:f};e.fab=y,e.classes=m,e.vars=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-fab.js.map
