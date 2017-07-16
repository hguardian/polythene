!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-core-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e["polythene-core"],e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,l,i){"use strict";function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var o={component:"pe-list-tile",content:"pe-list-tile__content",highSubtitle:"pe-list-tile__high-subtitle",primary:"pe-list-tile__primary",secondary:"pe-list-tile__secondary",subtitle:"pe-list-tile__subtitle",title:"pe-list-tile__title",compact:"pe-list-tile--compact",contentFront:"pe-list-tile__content--front",disabled:"pe-list-tile--disabled",hasFront:"pe-list-tile--front",hasHighSubtitle:"pe-list-tile--high-subtitle",hasSubtitle:"pe-list-tile--subtitle",hoverable:"pe-list-tile--hoverable",selectable:"pe-list-tile--selectable",selected:"pe-list-tile--selected",sticky:"pe-list-tile--sticky"},s={single_height:48,single_line_height:21,single_with_icon_height:56,single_with_icon_line_height:29,padding:13,compact_padding:9,subtitle_line_count:1,has_subtitle_padding:15,high_subtitle_line_count:2,has_high_subtitle_padding:13,front_item_width:72,side_padding:2*i.vars.grid_unit_component,font_size_title:16,font_size_subtitle:14,line_height_subtitle:20,font_size_list_header:14,font_size_small:12,color_light_title:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_primary),color_light_subtitle:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_secondary),color_light_info:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_tertiary),color_light_text_disabled:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_disabled),color_light_list_header:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_tertiary),color_light_secondary:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_secondary),color_light_background_hover:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_background_hover),color_light_background_selected:l.rgba(i.vars.color_light_foreground,i.vars.blend_light_background_hover),color_dark_title:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_primary),color_dark_subtitle:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_secondary),color_dark_info:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_tertiary),color_dark_text_disabled:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_disabled),color_dark_list_header:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_tertiary),color_dark_secondary:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_secondary),color_dark_background_hover:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_background_hover),color_dark_background_selected:l.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_background_hover)},_=function(e){return{"padding-left":e+"px","padding-right":e+"px"}},a=function(e,t){return{"padding-top":e+"px","padding-bottom":(t||e)+"px"}},d=function(e,t){return[n({},e,[l.flex.layout,{position:"relative",overflow:"hidden",".pe-list-tile--sticky":[l.mixin.sticky(2)]," .pe-list-tile__primary, .pe-list-tile__secondary":[l.flex.layoutHorizontal,{textDecoration:"none",color:"inherit",border:"none"}]," .pe-list-tile__primary":[l.flex.flex(),{position:"relative"," .pe-list-tile__content:not(.pe-list-tile__content--front)":[l.flex.flex(),a(t.padding,t.padding+1)]}]," .pe-list-tile__secondary":{textAlign:"right",fontSize:t.font_size_title+"px",position:"relative"}," .pe-list-tile__content":[l.flex.layoutVertical,l.flex.selfCenter,_(t.side_padding),{".pe-list-tile__content--front":[a(t.padding-5),{width:t.front_item_width+"px"}]," small":{fontSize:t.font_size_small+"px"}}]," .pe-list-tile__content--front + .pe-list-tile__content":{paddingLeft:0}," .pe-list-tile__title":[l.mixin.ellipsis(1,t.single_line_height,"px"),{fontSize:t.font_size_title+"px",fontWeight:i.vars.font_weight_normal,lineHeight:t.single_line_height+"px"}]," .pe-list-tile__subtitle":[l.mixin.ellipsis(t.subtitle_line_count,t.line_height_subtitle,"px"),{fontSize:t.font_size_subtitle+"px",lineHeight:t.line_height_subtitle+"px",".pe-list-tile__high-subtitle":[l.mixin.ellipsis(t.high_subtitle_line_count,t.line_height_subtitle,"px"),{whiteSpace:"normal"}]}],".pe-list-tile--selected, &.pe-list-tile--disabled":{" a":{pointerEvents:"none"}},".pe-list-tile--subtitle":{" .pe-list-tile__content":[a(t.has_subtitle_padding,t.has_subtitle_padding+1),{" .pe-list-tile__title":{padding:0}}]},".pe-list-tile--high-subtitle":{" .pe-list-tile--high-subtitle .pe-list-tile__secondary":[l.flex.layoutHorizontal,l.flex.layoutStart]," .pe-list-tile__content":[l.flex.selfStart,a(t.has_high_subtitle_padding,t.has_high_subtitle_padding+1),{" .pe-list-tile__title":{padding:0}}]},".pe-list__header":{height:t.single_height+"px"," .pe-list-tile__content":{paddingTop:0,paddingBottom:0}," .pe-list-tile__title":[l.mixin.ellipsis(1,t.single_height,"px"),{fontSize:t.font_size_list_header+"px",fontWeight:i.vars.font_weight_medium,lineHeight:t.single_height+"px",padding:0}]}," .pe-list--compact &, &.pe-list-tile--compact":{":not(.pe-list__header)":{" .pe-list-tile__content":a(t.compact_padding,t.compact_padding+1)}},"@supports (-moz-appearance:none) and (display:contents)":{" .pe-list-tile__primary, .pe-list-tile__content":{overflow:"hidden"}},".pe-dialog .pe-menu__content &":{" .pe-list-tile__title":l.mixin.ellipsis("none")},".pe-menu__content &":{":not(.pe-list-tile--disabled)":{cursor:"default","&, .pe-list-tile__primary, .pe-list-tile__secondary":{" .pe-list-tile__title, .pe-list-tile__subtitle":{userSelect:"none"}}}},"html.pe-no-touch &.pe-list-tile--hoverable,       html.pe-no-touch &.pe-list-tile--selectable":{":not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover":{cursor:"pointer"}}}])]},c=function(e,t,l,i){return[r({},e.map(function(e){return e+t}).join(","),{color:l["color_"+i+"_title"],backgroundColor:l["color_"+i+"_background"],".pe-list__header":{color:l["color_"+i+"_list_header"]," .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:"inherit"}}," .pe-list-tile__subtitle":{color:l["color_"+i+"_subtitle"]}," .pe-list-tile__secondary":{color:l["color_"+i+"_secondary"]},".pe-list-tile--disabled":{"&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle":{color:l["color_"+i+"_text_disabled"]}},".pe-list-tile--selected":{" .pe-list-tile__primary, pe-list-tile__secondary":{backgroundColor:l["color_"+i+"_background_selected"]}},"&.pe-list-tile--sticky":{backgroundColor:l["color_"+i+"_background"]||"inherit"}})]},p=function(e,t,l,i){return[r({},e.map(function(e){return e+t+":hover"}).join(","),{":not(.pe-list__header):not(.pe-list-tile--disabled)":{" .pe-list-tile__primary, .pe-list-tile__secondary":{backgroundColor:l["color_"+i+"_background_hover"]}}})]},u=function(e,t){return[c([".pe-dark-tone",".pe-dark-tone "],e,t,"dark"),c(["",".pe-light-tone",".pe-light-tone "],e,t,"light"),p(["html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable","html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable "],e,t,"dark"),p(["html.pe-no-touch .pe-list-tile--hoverable","html.pe-no-touch .pe-list-tile--hoverable ","html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable","html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable "],e,t,"light")]},h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},g=[d,u],b="."+o.component,f=function(e,t){return l.styler.generateStyles([e,b],h({},s,t),g)};l.styler.generateStyles([b],s,g);var y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},v=function(e){return e.attrs.element||"div"},m=f,k=function(e,l){var i=l.keys,n=e.attrs,r=n.subtitle?o.hasSubtitle:n.highSubtitle?o.hasHighSubtitle:n.front||n.indent?o.hasFront:null;return y({},t.filterSupportedAttributes(n),{className:[o.component,n.selected?o.selected:null,n.disabled?o.disabled:null,n.sticky?o.sticky:null,n.compact?o.compact:null,n.hoverable?o.hoverable:null,n.selectable?o.selectable:null,"dark"===n.tone?"pe-dark-tone":null,"light"===n.tone?"pe-light-tone":null,r,n.className||n[i.class]].join(" ")})},x=function(e,l,i,n){var r=i.element?i.element:i.url?"a":"div",s=o.content+" "+o.contentFront,_=i.front?e("div",y({},l?{key:"front"}:null,{className:s}),i.front):i.indent?e("div",y({},l?{key:"front"}:null,{className:s})):null;return e(r,y({},t.filterSupportedAttributes(i),i.url,i.events,{className:o.primary,style:null}),[_,e("div",{className:o.content,style:i.style},[i.content?y({},l?{key:"content"}:null,i.content):n,i.title&&!i.content?e("div",y({},l?{key:"title"}:null,{className:o.title}),i.title):null,i.subtitle?e("div",y({},l?{key:"subtitle"}:null,{className:o.subtitle}),i.subtitle):null,i.highSubtitle?e("div",y({},l?{key:"high-subtitle"}:null,{className:o.subtitle+" "+o.highSubtitle}),i.highSubtitle):null])])},S=function(e,l,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e(n.element?n.element:n.url?"a":"div",y({},n.url,{className:o.secondary},l?{key:"secondary"}:null,t.filterSupportedAttributes(n)),e("div",{className:o.content},[n.icon?e(i,n.icon):null,n.content?n.content:null]))},z=function(e,t){var l=t.renderer,i=t.requiresKeys,n=t.keys,r=t.Ripple,o=t.Icon,s=e.attrs,_=y({},i?{key:"primary"}:null,s);return delete _.id,delete _[n.class],[s.ink&&!s.disabled?l(r,y({},s.ripple,i?{key:"ripple"}:null)):null,x(l,i,_,s.children||e.children),s.secondary?S(l,i,o,s.secondary):null]},w=Object.freeze({getElement:v,theme:m,createProps:k,createContent:z});e.coreListTile=w,e.classes=o,e.vars=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-list-tile.js.map
