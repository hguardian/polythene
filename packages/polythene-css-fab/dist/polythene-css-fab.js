!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],r):r((e=e||self).polythene={},e["polythene-core-css"],e["polythene-theme"])}(this,function(e,r,o){"use strict";function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function t(){return(t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var i={general_styles:function(e){return[]}},a=function(e){var o;return n(o={},"color_"+e,function(o,n){return[r.sel(o,{" .pe-button__content":{color:n["color_"+e]}})]}),n(o,"color_"+e+"_background",function(o,n){return[r.sel(o,{" .pe-button__content":{backgroundColor:n["color_"+e+"_background"]}})]}),n(o,"color_"+e+"_wash_background",function(o,n){return[r.sel(o,{" .pe-button__wash-color":{backgroundColor:n["color_"+e+"_wash_background"]}})]}),n(o,"color_"+e+"_wash_opacity",function(o,n){return[r.sel(o,{" .pe-button__wash-color":{opacity:n["color_"+e+"_wash_opacity"]}})]}),o},l=t({},i,a("light")),c=t({},i,a("dark")),s=r.createColor({varFns:{lightTintFns:l,darkTintFns:c}}),u={general_styles:function(e){return[r.sel(e,{userSelect:"none","-moz-user-select":"none",display:"inline-block",position:"relative",outline:"none",cursor:"pointer",padding:0,border:"none"," .pe-button__content":{position:"relative",borderRadius:"50%"}," .pe-fab__content":{display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}," .pe-ripple":{borderRadius:"inherit"}," .pe-button__wash":[r.mixin.fit(),{borderRadius:"inherit",transition:"background-color "+o.vars.animation_duration+" ease-in-out",pointerEvents:"none",backgroundColor:"transparent"}]})]},size_regular:function(e,o){return[r.sel(e,{" .pe-button__content":{width:o.size_regular+"px",height:o.size_regular+"px"}})]},size_mini:function(e,n){return[r.sel(e,{".pe-fab--mini":{" .pe-button__content":{width:n.size_mini+"px",height:n.size_mini+"px",padding:(n.size_mini-o.vars.unit_icon_size)/2+"px"}}})]}},_=r.createLayout({varFns:u}),p={general_styles:!0,size_mini:5*o.vars.grid_unit_component,size_regular:7*o.vars.grid_unit_component,color_light:r.rgba(o.vars.color_primary_foreground),color_light_background:r.rgba(o.vars.color_primary),color_light_wash_background:"currentColor",color_light_wash_opacity:.1,color_dark:r.rgba(o.vars.color_primary_foreground),color_dark_background:r.rgba(o.vars.color_primary),color_dark_wash_background:"currentColor",color_dark_wash_opacity:.1},d=[_,s],g=".".concat("pe-fab"),h=r.styler.createAddStyle(g,d,p),y=r.styler.createGetStyle(g,d,p);e.addGeneralStyleToHead=function(){return r.styler.addStyle({selectors:[g],fns:d,vars:p})},e.addStyle=h,e.color=s,e.getStyle=y,e.layout=_,e.vars=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-fab.js.map
