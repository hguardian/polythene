!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("mithril"),require("polythene-icon"),require("polythene-button"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-icon","polythene-button","polythene-css","polythene-theme"],o):o(e.polythene=e.polythene||{},e.m,e["polythene-icon"],e["polythene-button"],e["polythene-css"],e["polythene-theme"])}(this,function(e,o,t,n,r,a){"use strict";function c(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}o="default"in o?o.default:o,t="default"in t?t.default:t,n="default"in n?n.default:n;var l=a.vars.rgba,u=(a.vars.grid_unit_icon_button-a.vars.unit_icon_size)/2,d=(a.vars.grid_unit_icon_button-a.vars.unit_icon_size)/3,_={padding:u,padding_compact:d,color_background:"transparent",color_light:a.vars.rgba(a.vars.color_light_foreground,a.vars.blend_light_text_secondary),color_light_disabled:l(a.vars.color_light_foreground,a.vars.blend_light_text_disabled),color_light_wash_opacity:a.vars.blend_light_background_hover_medium,color_light_focus_opacity:a.vars.blend_light_background_hover_medium,color_dark:a.vars.rgba(a.vars.color_dark_foreground,a.vars.blend_dark_text_secondary),color_dark_disabled:l(a.vars.color_dark_foreground,a.vars.blend_dark_text_disabled),color_dark_wash_opacity:a.vars.blend_dark_background_hover_medium,color_dark_focus_opacity:a.vars.blend_dark_background_hover_medium},s=function(e,o){return[c({},e,{display:"inline-block","vertical-align":"middle",cursor:"pointer",position:"relative","font-size":"1rem","border-radius":"50%",border:"none"," .pe-icon-button__content":{"line-height":1,padding:o.padding+"px"},".pe-icon-button--compact":{" .pe-icon-button__content":{padding:o.padding_compact+"px"}}})]},p=function(e,o,t,n){return[i({},e+o,{color:t["color_"+n],backgroundColor:t["color_"+n+"_background"]||t.color_background," .pe-button__wash":{opacity:t["color_"+n+"_wash_opacity"]},".pe-button--focus, &.pe-button--selected":{" .pe-button__focus":{opacity:t["color_"+n+"_focus_opacity"],backgroundColor:"currentcolor"}},".pe-button--disabled":{color:t["color_"+n+"_disabled"]}})]},b=function(e,o,t,n){var r="light"===n?"currentcolor":t["color_"+n];return[i({},e+o+":hover",{" .pe-button__wash":{backgroundColor:r}})]},h=function(e,o){return[p("",e,o,"light"),p(".pe-dark-theme ",e,o,"dark"),b("html.pe-no-touch ",e,o,"light"),b("html.pe-no-touch .pe-dark-theme ",e,o,"dark")]},g=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},f=[s,h],v=".pe-button.pe-icon-button",y=function(e,o){return r.styler.generateStyles([e,v],g({},_,o),f)};r.styler.generateStyles([v],_,f);var m=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},k={component:"pe-button pe-icon-button",content:"pe-icon-button__content",compact:"pe-icon-button--compact"},w=function(e){var r=e.attrs,a=r.content?r.content:r.icon?o(t,r.icon):r.children||e.children;return o(n,m({},{content:o("div",{class:k.content},a),parentClass:[r.parentClass||k.component,r.compact?k.compact:null].join(" "),wash:!1,animateOnTap:!1},r))},O={theme:y,view:w};e.default=O,e.classes=k,e.vars=_,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-icon-button.js.map
