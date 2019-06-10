!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],e):e((o=o||self).polythene={},o["polythene-core-css"],o["polythene-theme"])}(this,function(o,e,r){"use strict";function n(o,e,r){return e in o?Object.defineProperty(o,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[e]=r,o}function t(){return(t=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(o[n]=r[n])}return o}).apply(this,arguments)}var l={general_styles:function(o){return[e.sel(o,{" .pe-control__box":{" .pe-control__button":{color:"inherit"}," .pe-control__button--on":{color:"inherit"}}})]}},_=function(o){var r;return n(r={},"color_"+o+"_on",function(r,n){return[e.sel(r,{color:n["color_"+o+"_on"]})]}),n(r,"color_"+o+"_off",function(r,n){return[e.sel(r,{" .pe-control__button--off":{color:n["color_"+o+"_off"]}})]}),n(r,"color_"+o+"_disabled",function(r,n){return[e.sel(r,{".pe-control--disabled":{" .pe-control__label":{color:n["color_"+o+"_disabled"]}," .pe-control__box":{" .pe-control__button--on, .pe-control__button--off":{color:n["color_"+o+"_disabled"]}}}})]}),n(r,"color_"+o+"_label",function(r,n){return[e.sel(r,{" .pe-control__label":{color:n["color_"+o+"_label"]}})]}),n(r,"color_"+o+"_on_icon",function(r,n){return[e.sel(r,{" .pe-control__box":{" .pe-control__button--on":{color:n["color_"+o+"_on_icon"]}}})]}),n(r,"color_"+o+"_off_icon",function(r,n){return[e.sel(r,{" .pe-control__box":{" .pe-control__button--off":{color:n["color_"+o+"_off_icon"]}}})]}),n(r,"color_"+o+"_on_label",function(r,n){return[e.sel(r,{".pe-control--on":{" .pe-control__label":{color:n["color_"+o+"_on_label"]}}})]}),n(r,"color_"+o+"_off_label",function(r,n){return[e.sel(r,{".pe-control--off":{" .pe-control__label":{color:n["color_"+o+"_off_label"]}}})]}),r},i=t({},l,_("light")),a=t({},l,_("dark")),c=e.createColor({varFns:{lightTintFns:i,darkTintFns:a}}),s=function(o){return{}},u=function(o){return{}},d=function(o,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.vars.unit_icon_size,l=t+o.label_height,_=(l-t)/2;return{" .pe-control__form-label":{height:n+"px"}," .pe-control__box":{width:t+"px",height:t+"px"}," .pe-button__content":{width:l+"px",height:l+"px",flexShrink:0," .pe-icon":[e.mixin.fit(_)]}}},b=function(o,r,t){var l;return e.sel(o,{" .pe-button.pe-control__button":(l={top:-(r.button_size-r.icon_size)/2+"px"},n(l,t?"right":"left",-(r.button_size-r.icon_size)/2+"px"),n(l,t?"left":"right","auto"),l)})},f=function(o,r,t){return e.sel(o,{" .pe-control__label":n({},t?"paddingRight":"paddingLeft",r.label_padding_before+"px")})},p=function(o,r,t){return e.sel(o,{" .pe-control__label":n({},t?"paddingLeft":"paddingRight",r.label_padding_after+"px")})},g={general_styles:function(o,r){return[e.sel(o,[s(r),{display:"inline-block",boxSizing:"border-box",margin:0,padding:0," input[type=checkbox], input[type=radio]":{display:"none"}," .pe-control__form-label":[e.flex.layoutHorizontal,e.flex.layoutCenter,{position:"relative",cursor:"pointer",margin:0,color:"inherit",":focus":{outline:0}}],".pe-control--inactive":{" .pe-control__form-label":{cursor:"default"}}," .pe-control__box":{position:"relative",display:"inline-block",boxSizing:"border-box",color:"inherit",flexShrink:0,":focus":{outline:0}}," .pe-button.pe-control__button":{position:"absolute"},".pe-control--off":{" .pe-control__button--on":{opacity:0,zIndex:-1}," .pe-control__button--off":{opacity:1,zIndex:0}},".pe-control--on":{" .pe-control__button--on":{opacity:1,zIndex:0}," .pe-control__button--off":{opacity:0,zIndex:-1}}," .pe-control__label":{alignSelf:"center"},".pe-control--disabled":{" .pe-control__form-label":{cursor:"auto"}," .pe-control__button":{pointerEvents:"none"}}," .pe-button__content":{" .pe-icon":{position:"absolute"}}},n({},"*[dir=rtl] ".concat(o,", .pe-rtl ").concat(o),[u(r)])])]},label_font_size:function(o,r){return[e.sel(o,{" .pe-control__form-label":{fontSize:r.label_font_size+"px"}})]},label_height:function(o,n){return[e.sel(o,{" .pe-control__box":{width:n.label_height+"px",height:n.label_height+"px"},".pe-control--small":d(n,r.vars.unit_icon_size_small,r.vars.unit_icon_size_small),".pe-control--regular":d(n,n.label_height,r.vars.unit_icon_size),".pe-control--medium":d(n,r.vars.unit_icon_size_medium,r.vars.unit_icon_size_medium),".pe-control--large":d(n,r.vars.unit_icon_size_large,r.vars.unit_icon_size_large)})]},animation_duration:function(o,r){return[e.sel(o,{" .pe-button.pe-control__button":[e.mixin.defaultTransition("opacity",r.animation_duration)]," .pe-control__label":[e.mixin.defaultTransition("all",r.animation_duration)]})]},button_size:function(o,r){return[e.sel(o,{}),b(o,r,!1),b(e.selectorRTL(o),r,!0)]},icon_size:function(o,r){return[e.sel(o,{}),b(o,r,!1),b(e.selectorRTL(o),r,!0)]},label_padding_after:function(o,r){return[e.sel(o,{}),p(o,r,!1),p(e.selectorRTL(o),r,!0)]},label_padding_before:function(o,r){return[e.sel(o,{}),f(o,r,!1),f(e.selectorRTL(o),r,!0)]}},h=e.createLayout({varFns:g}),v={general_styles:!0,animation_duration:r.vars.animation_duration,button_size:6*r.vars.grid_unit_component,icon_size:3*r.vars.grid_unit_component,label_font_size:2*r.vars.grid_unit_component,label_height:3*r.vars.grid_unit_component,label_padding_after:0,label_padding_before:4*r.vars.grid_unit,color_light_on:e.rgba(r.vars.color_primary),color_light_off:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_secondary),color_light_label:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_secondary),color_light_disabled:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_disabled),color_light_on_icon:"inherit",color_light_off_icon:"inherit",color_light_on_label:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_secondary),color_light_off_label:e.rgba(r.vars.color_light_foreground,r.vars.blend_light_text_secondary),color_dark_on:e.rgba(r.vars.color_primary),color_dark_off:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_secondary),color_dark_label:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_secondary),color_dark_disabled:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_disabled),color_dark_on_icon:"inherit",color_dark_off_icon:"inherit",color_dark_on_label:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_secondary),color_dark_off_label:e.rgba(r.vars.color_dark_foreground,r.vars.blend_dark_text_secondary)},y=[h,c],x=".".concat("pe-control"),m=e.styler.createAddStyle(x,y,v),z=e.styler.createGetStyle(x,y,v);o.addGeneralStyleToHead=function(){return e.styler.addStyle({selectors:[x],fns:y,vars:v})},o.addStyle=m,o.color=c,o.getStyle=z,o.layout=h,o.vars=v,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-selection-control.js.map
