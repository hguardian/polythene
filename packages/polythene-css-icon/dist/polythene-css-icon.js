!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],r):r((e=e||self).polythene={},e["polythene-core-css"],e["polythene-theme"])}(this,function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var i={general_styles:function(e){return[r.sel(e,{color:"currentColor"})]}},a=function(e){var t;return n(t={},"color_"+e,function(t,n){return[r.sel(t,{color:n["color_"+e]})]}),n(t,"color_"+e+"_avatar_background",function(t,n){return[r.sel(t,{".pe-icon--avatar":{backgroundColor:n["color_"+e+"_avatar_background"]}})]}),t},l=o({},i,a("light")),c=o({},i,a("dark")),s=r.createColor({varFns:{lightTintFns:l,darkTintFns:c}}),u=o({},{general_styles:function(e){return[r.sel(e,{display:"inline-block",verticalAlign:"middle",backgroundRepeat:"no-repeat",position:"relative",fontSize:0,lineHeight:0,".pe-icon--avatar":{borderRadius:"50%"},".pe-icon--avatar img":{border:"none",borderRadius:"50%",width:"inherit",height:"inherit"}," img":{height:"inherit"}," .pe-svg, .pe-svg > div":{width:"inherit",height:"inherit"}})]}},["small","regular","medium","large"].reduce(function(e,t){return e["size_".concat(t)]=function(e){return function(t,o){return r.sel(t,n({},".pe-icon--".concat(e),{width:o["size_".concat(e)]+"px",height:o["size_".concat(e)]+"px"}))}}(t),e},{})),d=r.createLayout({varFns:u}),_={general_styles:!0,size_small:t.vars.unit_icon_size_small,size_regular:t.vars.unit_icon_size,size_medium:t.vars.unit_icon_size_medium,size_large:t.vars.unit_icon_size_large,color_light_avatar_background:r.rgba(t.vars.color_light_foreground,t.vars.blend_light_background_disabled),color_dark_avatar_background:r.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_background_disabled),color_light:"currentcolor",color_dark:"currentcolor"},g=[d,s],h=".".concat("pe-icon"),p=r.styler.createAddStyle(h,g,_),f=r.styler.createGetStyle(h,g,_);r.styler.addStyle({selectors:[h],fns:g,vars:_}),e.addStyle=p,e.getStyle=f,e.color=s,e.layout=d,e.vars=_,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-icon.js.map
