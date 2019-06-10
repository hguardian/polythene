!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],o):o((e=e||self).polythene={},e["polythene-core-css"],e["polythene-theme"])}(this,function(e,o,t){"use strict";function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(){return(r=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var n={general_styles:function(){return[{" .pe-dialog-pane__body":{borderColor:"transparent"}}]}},d=function(e){var t;return i(t={},"color_"+e+"_background",function(t,i){return[o.sel(t,{backgroundColor:i["color_"+e+"_background"]})]}),i(t,"color_"+e+"_title_text",function(t,i){return[o.sel(t,{" .pe-dialog-pane__header .pe-dialog-pane__title":{color:i["color_"+e+"_title_text"]}})]}),i(t,"color_"+e+"_body_text",function(t,i){return[o.sel(t,{" .pe-dialog-pane__body":{color:i["color_"+e+"_body_text"]}})]}),i(t,"color_"+e+"_body_border",function(t,i){return[o.sel(t,{".pe-dialog-pane--border-top .pe-dialog-pane__body":{borderTopColor:i["color_"+e+"_body_border"]},".pe-dialog-pane--border-bottom .pe-dialog-pane__body":{borderBottomStyle:"solid",borderBottomColor:i["color_"+e+"_body_border"]}})]}),t},a=r({},n,d("light")),l=r({},n,d("dark")),_=o.createColor({varFns:{lightTintFns:a,darkTintFns:l}}),p=function(e,o){var t,r=o.max_width+2*o.side_padding_mobile;return i(t={},"@media (max-width: "+r+"px)",i({},e,{maxWidth:"calc(100vw - ".concat(2*o.side_padding_mobile,"px)")})),i(t,"@media (min-width: "+(r+1)+"px)",i({},e,{maxWidth:o.max_width+"px"})),t},h=function(e,t){return o.sel(e,{" .pe-dialog-pane__header--title":{paddingTop:t.padding-4+"px",paddingRight:t.padding+"px",paddingBottom:t.header_bottom-4+"px",paddingLeft:t.padding+"px"}})},g=function(e,t){return o.sel(e,{" .pe-dialog-pane__body":{maxHeight:"calc(100vh - (".concat(t.header_height,"px + ").concat(t.footer_height,"px + 2 * ").concat(t.margin_vertical,"px))")}})},c={general_styles:function(e){return[o.sel(e,[o.flex.layoutVertical,{position:"relative",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit",borderBottomLeftRadius:"inherit",borderBottomRightRadius:"inherit",margin:0," .pe-dialog-pane__content":{width:"100%",display:"flex",flexDirection:"column",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit",borderBottomLeftRadius:"inherit",borderBottomRightRadius:"inherit"}," .pe-dialog-pane__title":{fontSize:t.vars.font_size_title+"px",fontWeight:t.vars.font_weight_medium,"& + div":{marginTop:"16px"}}," .pe-dialog-pane__header, .pe-dialog-pane__content > .pe-toolbar":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"," .pe-dialog-pane__title":{width:"100%",wordBreak:"break-all",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}," .pe-dialog-pane__body":[{overflowY:"auto","-webkit-overflow-scrolling":"touch",borderTopStyle:"solid",borderBottomStyle:"solid"," p":{margin:0}," p + p":{marginTop:"16px"}}],".pe-dialog-pane--body-full-bleed .pe-dialog-pane__body":{padding:0,borderStyle:"none"}," .pe-dialog-pane__header--title + .pe-dialog-pane__body":{paddingTop:0}," .pe-dialog-pane__footer":{display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"center","&, > .pe-toolbar":{borderBottomLeftRadius:"inherit",borderBottomRightRadius:"inherit"},".pe-dialog-pane__footer--high":{paddingBottom:"8px"},".pe-dialog-pane__footer--buttons":{padding:"0 8px",fontSize:0}}," .pe-dialog-pane__actions":[o.flex.layoutHorizontal,o.flex.layoutEndJustified,o.flex.layoutWrap,{alignItems:"center"}]}]),{" .pe-dialog__content.pe-menu__content":i({}," ".concat(e),{" .pe-dialog-pane__body":{padding:0,border:"none"}})}]},max_width:function(e,o){return[void 0!==o.side_padding_mobile&&p(e,o)]},side_padding_mobile:function(e,o){return[void 0!==o.side_padding_mobile&&p(e,o)]},min_width:function(e,t){return[o.sel(e,{minWidth:t.min_width+"px"})]},margin_vertical:function(e,t){return[o.sel(e,{maxHeight:"calc(100vh - 2 * ".concat(t.margin_vertical,"px)")}),void 0!==t.header_height&&void 0!==t.footer_height&&g(e,t)]},line_height_title:function(e,t){return[o.sel(e,{" .pe-dialog-pane__title":{lineHeight:t.line_height_title+"px"}})]},header_height:function(e,t){return[o.sel(e,{" .pe-dialog-pane__header":{height:t.header_height+"px"}}),void 0!==t.footer_height&&void 0!==t.margin_vertical&&g(e,t)]},footer_height:function(e,t){return[o.sel(e,{" .pe-dialog-pane__footer--buttons .pe-dialog-pane__actions":{minHeight:t.footer_height+"px"}}),void 0!==t.header_height&&void 0!==t.footer_height&&void 0!==t.margin_vertical&&g(e,t)]},padding:function(e,t){return[o.sel(e,{" .pe-dialog-pane__body":{padding:t.padding+"px"},".pe-dialog-pane--footer":{" .pe-dialog-pane__body":{paddingBottom:t.padding-10+"px"}}}),void 0!==t.header_bottom&&h(e,t)]},header_bottom:function(e,o){return[h(e,o)]},border_width:function(e,t){return[o.sel(e,{" .pe-dialog-pane__body":{borderWidth:t.border_width+"px"}})]}},u=o.createLayout({varFns:c}),s={general_styles:!0,border_width:1,footer_height:52,header_bottom:20,header_height:64,line_height_title:24,max_width:7*t.vars.grid_unit_menu,min_width:5*t.vars.grid_unit_menu,padding:3*t.vars.grid_unit_component,side_padding_mobile:6*t.vars.grid_unit,max_height:8*t.vars.grid_unit_component,margin_vertical:8*t.vars.grid_unit_component,color_light_title_text:"inherit",color_light_body_text:"inherit",color_light_body_border:o.rgba(t.vars.color_light_foreground,t.vars.blend_light_border_light),color_light_background:"inherit",color_dark_title_text:"inherit",color_dark_body_text:"inherit",color_dark_body_border:o.rgba(t.vars.color_dark_foreground,t.vars.blend_dark_border_light),color_dark_background:"inherit"},b=[u,_],f=".".concat("pe-dialog-pane"),m=o.styler.createAddStyle(f,b,s),y=o.styler.createGetStyle(f,b,s);e.addGeneralStyleToHead=function(){return o.styler.addStyle({selectors:[f],fns:b,vars:s})},e.addStyle=m,e.color=_,e.fullScreen=function(e){return o.sel(e,{" .pe-dialog-pane":{borderRadius:0}," .pe-dialog-pane__content":{borderRadius:0,maxWidth:"none",height:"100vh",width:"100vw"," > *":{flexShrink:0}," > .pe-dialog-pane__body":{flexShrink:1,maxHeight:"none"}}," .pe-dialog-pane, .pe-dialog-pane__body":{height:"100vh",maxHeight:"100vh",borderTopStyle:"none",maxWidth:"none"}})},e.getStyle=y,e.layout=u,e.vars=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-dialog-pane.js.map
