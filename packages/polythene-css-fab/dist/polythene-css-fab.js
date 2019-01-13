!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],r):r((e=e||self).polythene={},e["polythene-core-css"],e["polythene-theme"])}(this,function(e,r,o){"use strict";function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function t(){return(t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var i={general_styles:function(e){return[r.sel(e,{".pe-button--focus":{" .pe-button__focus":{opacity:1}}})]}},a=function(e){var o;return n(o={},"color_"+e,function(o,n){return[r.sel(o,{" .pe-button__content":{color:n["color_"+e]}})]}),n(o,"color_"+e+"_background",function(o,n){return[r.sel(o,{" .pe-button__content":{backgroundColor:n["color_"+e+"_background"]}})]}),n(o,"color_"+e+"_focus_background",function(o,n){return[r.sel(o,{".pe-button--focus":{" .pe-button__focus":{backgroundColor:n["color_"+e+"_focus_background"]}}})]}),o},c=t({},i,a("light")),u=t({},i,a("dark")),l=r.createColor({varFns:{lightTintFns:c,darkTintFns:u}}),s={general_styles:function(e){return[r.sel(e,{userSelect:"none","-moz-user-select":"none",display:"inline-block",position:"relative",outline:"none",cursor:"pointer",padding:0,border:"none"," .pe-button__content":{position:"relative",borderRadius:"50%"}," .pe-fab__content":{display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}," .pe-button__wash, .pe-button__focus":[r.mixin.fit(),{borderRadius:"inherit"}]," .pe-ripple":{borderRadius:"inherit"}," .pe-button__wash":{transition:"background-color "+o.vars.animation_duration+" ease-in-out",borderRadius:"inherit",pointerEvents:"none",backgroundColor:"transparent"}})]},size_regular:function(e,o){return[r.sel(e,{" .pe-button__content":{width:o.size_regular+"px",height:o.size_regular+"px"}})]},size_mini:function(e,n){return[r.sel(e,{".pe-fab--mini":{" .pe-button__content":{width:n.size_mini+"px",height:n.size_mini+"px",padding:(n.size_mini-o.vars.unit_icon_size)/2+"px"}}})]}},_=r.createLayout({varFns:s}),d={general_styles:!0,size_mini:5*o.vars.grid_unit_component,size_regular:7*o.vars.grid_unit_component,color_light:r.rgba(o.vars.color_primary_foreground),color_light_focus_background:r.rgba(o.vars.color_light_foreground,o.vars.blend_light_background_hover),color_light_focus_opacity:o.vars.blend_light_background_hover_medium,color_light_background:r.rgba(o.vars.color_primary),color_dark:r.rgba(o.vars.color_primary_foreground),color_dark_focus_background:r.rgba(o.vars.color_dark_foreground,o.vars.blend_dark_background_hover),color_dark_focus_opacity:o.vars.blend_dark_background_hover_medium,color_dark_background:r.rgba(o.vars.color_primary)},p=[_,l],b=".".concat("pe-fab"),g=r.styler.createAddStyle(b,p,d),f=r.styler.createGetStyle(b,p,d);r.styler.addStyle({selectors:[b],fns:p,vars:d}),e.addStyle=g,e.getStyle=f,e.color=l,e.layout=_,e.vars=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-fab.js.map
