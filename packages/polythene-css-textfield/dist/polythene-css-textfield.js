!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],t):t((e=e||self).polythene={},e["polythene-core-css"],e["polythene-theme"])}(this,function(e,t,i){"use strict";function _(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var _ in i)Object.prototype.hasOwnProperty.call(i,_)&&(e[_]=i[_])}return e}).apply(this,arguments)}var r={general_styles:function(e){return[t.sel(e,{" .pe-textfield__input-area":{color:"inherit","&:after":{backgroundColor:"currentcolor"}},".pe-textfield--disabled, &.pe-textfield--readonly":{" .pe-textfield__input-area:after":{backgroundColor:"transparent"}},".pe-textfield--invalid:not(.pe-textfield--hide-validation)":{" .pe-textfield__input":{boxShadow:"none"}}})]}},n=function(e){var i;return _(i={},"color_"+e+"_focus_border",function(i,_){return[t.sel(i,{color:_["color_"+e+"_focus_border"]})]}),_(i,"color_"+e+"_input_background",function(i,_){return[t.sel(i,{" .pe-textfield__input-area":{backgroundColor:_["color_"+e+"_input_background"]}," .pe-textfield__input:-webkit-autofill":{"-webkit-box-shadow":"0 0 0px 1000px "+_["color_"+e+"_input_background"]+" inset"}})]}),_(i,"color_"+e+"_input_text",function(i,_){return[t.sel(i,{" .pe-textfield__input":{color:_["color_"+e+"_input_text"]}," .pe-textfield__input:-webkit-autofill":{color:_["color_"+e+"_input_text"]+" !important"}})]}),_(i,"color_"+e+"_counter_ok_border",function(i,_){return[t.sel(i,{".pe-textfield--counter ":{" .pe-textfield__input-area:after":{backgroundColor:_["color_"+e+"_counter_ok_border"]}}})]}),_(i,"color_"+e+"_input_bottom_border",function(i,_){return[t.sel(i,{" .pe-textfield__input":{borderColor:_["color_"+e+"_input_bottom_border"]}})]}),_(i,"color_"+e+"_label_text",function(i,_){return[t.sel(i,{" .pe-textfield__label":{color:_["color_"+e+"_label_text"]}})]}),_(i,"color_"+e+"_disabled_label_text",function(i,_){return[t.sel(i,{".pe-textfield--disabled, &.pe-textfield--readonly":{" .pe-textfield__input-area:after":{backgroundImage:"linear-gradient(to right, "+_["color_"+e+"_disabled_label_text"]+" 20%, rgba(255, 255, 255, 0) 0%)"}},".pe-textfield--disabled":{" .pe-textfield__input, .pe-textfield__label":{color:_["color_"+e+"_disabled_label_text"]}}})]}),_(i,"color_"+e+"_readonly_label_text",function(i,_){return[t.sel(i,{".pe-textfield--readonly":{" .pe-textfield__input, .pe-textfield__label":{color:_["color_"+e+"_readonly_label_text"]}}})]}),_(i,"color_"+e+"_highlight_text",function(i,_){return[t.sel(i,{".pe-textfield--focused":{".pe-textfield--floating-label .pe-textfield__label":{color:_["color_"+e+"_highlight_text"]}}})]}),_(i,"color_"+e+"_required_symbol",function(i,_){return[t.sel(i,{".pe-textfield--focused":{".pe-textfield--required.pe-textfield--floating-label":{" .pe-textfield__required-indicator":{color:_["color_"+e+"_required_symbol"]}}}})]}),_(i,"color_"+e+"_help_text",function(i,_){return[t.sel(i,{" .pe-textfield__help, .pe-textfield__counter":{color:_["color_"+e+"_help_text"]}})]}),_(i,"color_"+e+"_input_error_border",function(i,_){return[t.sel(i,{".pe-textfield--invalid:not(.pe-textfield--hide-validation)":{" .pe-textfield__input":{borderColor:_["color_"+e+"_input_error_border"]},"&, &.pe-textfield--counter":{" .pe-textfield__input-area:after":{backgroundColor:_["color_"+e+"_input_error_border"]}}}})]}),_(i,"color_"+e+"_input_error_text",function(i,_){return[t.sel(i,{".pe-textfield--invalid:not(.pe-textfield--hide-validation)":{" .pe-textfield__label":{color:_["color_"+e+"_input_error_text"]}," .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help":{color:_["color_"+e+"_input_error_text"]},".pe-textfield--required .pe-textfield__label":{color:_["color_"+e+"_input_error_text"]}}})]}),i},o=l({},r,n("light")),d=l({},r,n("dark")),a=t.createColor({varFns:{lightTintFns:o,darkTintFns:d}}),p=function(e){return function(){return{" .pe-textfield__counter":{textAlign:e?"left":"right",float:e?"left":"right",padding:e?"0 16px 0 0":"0 0 0 16px"}}}},f=p(!1),u=p(!0),c=function(e,i){return t.sel(e,{" .pe-textfield__label":{top:i.vertical_spacing_top+i.input_padding_v+"px"}})},s=function(e,i){return t.sel(e,{".pe-textfield--floating-label .pe-textfield__label":{top:i.floating_label_vertical_spacing_top+i.input_padding_v+"px"}})},x=function(e,i){return t.sel(e,{".pe-textfield--floating-label.pe-textfield--dense .pe-textfield__label":{top:i.dense_floating_label_vertical_spacing_top+i.input_padding_v+"px"}})},g=function(e,i){return t.sel(e,{" .pe-textfield__input":{padding:i.input_padding_v+"px "+i.input_padding_h+"px"}," textarea.pe-textfield__input":{margin:i.input_padding_v+"px "+i.input_padding_h+"px"}})},b=function(e,i){return t.sel(e,{".pe-textfield--full-width":{" .pe-textfield__input":{padding:i.full_width_input_padding_v+"px "+i.full_width_input_padding_h+"px"}}})},h=function(e,i){return t.sel(e,{".pe-textfield--full-width.pe-textfield--dense":{" .pe-textfield__input":{padding:i.dense_full_width_input_padding_v+"px "+i.dense_full_width_input_padding_h+"px"}}})},v={general_styles:function(e){return[t.sel(e,[f(),t.mixin.clearfix(),{position:"relative",lineHeight:i.vars.line_height,display:"inline-block",boxSizing:"border-box",margin:0,overflow:"visible",width:"100%",maxWidth:"100%"," .pe-textfield__input-area":{position:"relative","&:after":{position:"absolute",content:'""',bottom:0,left:0,width:"100%",opacity:0}},".pe-textfield--focused .pe-textfield__input-area:after":{opacity:1}," .pe-textfield__input":{display:"block",width:"100%",background:"none",color:"inherit",borderStyle:"none none solid none",borderRadius:0,margin:0,"&:textfield--invalid":{boxShadow:"none"},":invalid":{boxShadow:"none"},"::-ms-clear":{width:0,height:0}}," textarea.pe-textfield__input":{padding:0,display:"block"},".pe-textfield--focused .pe-textfield__input":{outline:"none"}," .pe-textfield__label":{position:"absolute",display:"block",bottom:0,pointerEvents:"none",whiteSpace:"nowrap",cursor:"text"},".pe-textfield--dirty .pe-textfield__label":{visibility:"hidden"},"&:not(.pe-textfield--no-char)":{" .pe-textfield__required-indicator, .pe-textfield__optional-indicator":{padding:"0 0 0 .25em"}},".pe-textfield--floating-label":{".pe-textfield--focused, &.pe-textfield--dirty":{" .pe-textfield__label":{visibility:"visible"}}},".pe-textfield--disabled, &.pe-textfield--readonly":{" .pe-textfield__label":{cursor:"auto"}," .pe-textfield__input":{"border-bottom":"none"}," .pe-textfield__input-area:after":{opacity:1,height:"1px",bottom:"-1px",backgroundPosition:"top",backgroundSize:"4px 1px",backgroundRepeat:"repeat-x"}}," .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter":{lineHeight:i.vars.line_height}," .pe-textfield__help-focus":[t.mixin.defaultTransition("opacity"),{opacity:0}],".pe-textfield--focused .pe-textfield__help-focus, &.pe-textfield--dirty .pe-textfield__help-focus":{opacity:1},".pe-textfield--hide-clear":{" .pe-textfield__input::-ms-clear":{display:"none"}},".pe-textfield--hide-spinner":{" input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button":{"-webkit-appearance":"none",margin:0}," input[type=number]":{"-moz-appearance":"textfield"}},".pe-textfield--full-width":{width:"100%",padding:0," .pe-textfield__input-area":{padding:0}}}]),_({},"*[dir=rtl] ".concat(e,", .pe-rtl ").concat(e),[u()])]},vertical_spacing_bottom:function(e,i){return[t.sel(e,{paddingBottom:i.vertical_spacing_bottom+"px"})]},floating_label_vertical_spacing_bottom:function(e,i){return[t.sel(e,{".pe-textfield--floating-label":{paddingBottom:i.floating_label_vertical_spacing_bottom+"px"},".pe-textfield--dense":{paddingBottom:i.dense_floating_label_vertical_spacing_bottom+"px"}})]},vertical_spacing_top:function(e,i){return[t.sel(e,{" .pe-textfield__input-area":{paddingTop:i.vertical_spacing_top+"px"}}),c(e,i)]},input_padding_v:function(e,t){return[c(e,t),s(e,t),x(e,t),g(e,t)]},input_padding_h:function(e,i){return[t.sel(e,{" .pe-textfield__label":{left:i.input_padding_h+"px",right:i.input_padding_h+"px"}}),g(e,i)]},floating_label_vertical_spacing_top:function(e,i){return[t.sel(e,{".pe-textfield--floating-label":{" .pe-textfield__input-area":{paddingTop:i.floating_label_vertical_spacing_top+"px"}}}),s(e,i)]},dense_floating_label_vertical_spacing_top:function(e,i){return[t.sel(e,{".pe-textfield--floating-label.pe-textfield--dense":{" .pe-textfield__input-area":{paddingTop:i.dense_floating_label_vertical_spacing_top+"px"}}}),x(e,i)]},input_focus_border_animation_duration:function(e,i){return[t.sel(e,{" .pe-textfield__input-area:after":t.mixin.defaultTransition("opacity",i.input_focus_border_animation_duration)})]},input_focus_border_width:function(e,i){return[t.sel(e,{" .pe-textfield__input-area:after":{height:i.input_focus_border_width+"px"}})]},font_size_error:function(e,_){return[t.sel(e,{" .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter":{fontSize:_.font_size_error+"px",minHeight:_.font_size_error*i.vars.line_height+"px"}})]},font_size_input:function(e,i){return[t.sel(e,{" .pe-textfield__input, .pe-textfield__label":{fontSize:i.font_size_input+"px"}})]},line_height_input:function(e,i){return[t.sel(e,{" .pe-textfield__input, .pe-textfield__label":{lineHeight:i.line_height_input+"px"}})]},input_border_width:function(e,i){return[t.sel(e,{" .pe-textfield__input":{borderWidth:i.input_border_width+"px"},".pe-textfield--focused .pe-textfield__input":{borderWidth:i.input_border_width+"px",outline:"none"}})]},full_width_input_padding_v:function(e,i){return[t.sel(e,{".pe-textfield--full-width":{" .pe-textfield__label":{top:i.full_width_input_padding_v+"px"}}}),b(e,i)]},full_width_input_padding_h:function(e,i){return[t.sel(e,{".pe-textfield--full-width":{" .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter":{paddingLeft:i.full_width_input_padding_h+"px",paddingRight:i.full_width_input_padding_h+"px"}," .pe-textfield__label":{left:i.full_width_input_padding_h+"px",right:i.full_width_input_padding_h+"px"}}}),b(e,i)]},dense_font_size_input:function(e,i){return[t.sel(e,{".pe-textfield--dense":{"&, .pe-textfield__input, .pe-textfield__label":{fontSize:i.dense_font_size_input+"px"}}})]},dense_full_width_font_size_input:function(e,i){return[t.sel(e,{".pe-textfield--dense":{" .pe-textfield__input":{fontSize:i.dense_full_width_font_size_input+"px"}," .pe-textfield__label":{fontSize:i.dense_full_width_font_size_input+"px"}}})]},dense_full_width_input_padding_v:function(e,i){return[t.sel(e,{".pe-textfield--full-width":{".pe-textfield--dense":{" .pe-textfield__label":{top:i.dense_full_width_input_padding_v+"px"}}}}),h(e,i)]},dense_full_width_input_padding_h:function(e,i){return[t.sel(e,{".pe-textfield--full-width":{".pe-textfield--dense":{" .pe-textfield__label":{left:i.dense_full_width_input_padding_h+"px",right:i.dense_full_width_input_padding_h+"px"}}}}),h(e,i)]},margin_top_error_message:function(e,i){return[t.sel(e,{" .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter":{marginTop:i.margin_top_error_message+"px"}})]},floating_label_animation_duration:function(e,i){return[t.sel(e,{".pe-textfield--floating-label":{" .pe-textfield__label":t.mixin.defaultTransition("all",i.floating_label_animation_duration)}})]},dense_font_size_floating_label:function(e,i){return[t.sel(e,{".pe-textfield--floating-label":{".pe-textfield--dense":{".pe-textfield--focused, &.pe-textfield--dirty":{fontSize:i.dense_font_size_floating_label+"px"}}}})]},dense_floating_label_top:function(e,i){return[t.sel(e,{".pe-textfield--floating-label":{".pe-textfield--dense":{".pe-textfield--focused, &.pe-textfield--dirty":{" .pe-textfield__label":{top:i.dense_floating_label_top+"px"}}}}})]},floating_label_top:function(e,i){return[t.sel(e,{".pe-textfield--floating-label":{".pe-textfield--focused, &.pe-textfield--dirty":{" .pe-textfield__label":{top:i.floating_label_top+"px"}}}})]},font_size_floating_label:function(e,i){return[t.sel(e,{".pe-textfield--floating-label":{".pe-textfield--focused, &.pe-textfield--dirty":{" .pe-textfield__label":{fontSize:i.font_size_floating_label+"px"}}}})]}},y=t.createLayout({varFns:v}),m={general_styles:!0,dense_floating_label_top:10,dense_floating_label_vertical_spacing_bottom:4,dense_floating_label_vertical_spacing_top:23,dense_font_size_floating_label:13,dense_font_size_input:13,dense_full_width_font_size_input:13,dense_full_width_input_padding_h:16,dense_full_width_input_padding_v:15,floating_label_animation_duration:".12s",floating_label_top:14,floating_label_vertical_spacing_bottom:7,floating_label_vertical_spacing_top:30,font_size_error:12,font_size_floating_label:12,font_size_input:16,full_width_input_padding_h:20,full_width_input_padding_v:18,input_border_width:1,input_focus_border_animation_duration:i.vars.animation_duration,input_focus_border_width:2,input_padding_h:0,input_padding_v:7,line_height_input:20,margin_top_error_message:6,vertical_spacing_bottom:7,vertical_spacing_top:6,color_light_input_text:t.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_primary),color_light_input_background:"transparent",color_light_highlight_text:t.rgba(i.vars.color_primary,i.vars.blend_light_text_primary),color_light_input_bottom_border:t.rgba(i.vars.color_light_foreground,i.vars.blend_light_border_light),color_light_input_error_text:t.rgba("221, 44, 0"),color_light_input_error_border:t.rgba("221, 44, 0"),color_light_input_placeholder:t.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_tertiary),color_light_label_text:t.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_tertiary),color_light_disabled_label_text:t.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_disabled),color_light_readonly_label_text:t.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_tertiary),color_light_help_text:t.rgba(i.vars.color_light_foreground,i.vars.blend_light_text_tertiary),color_light_required_symbol:t.rgba("221, 44, 0"),color_light_focus_border:t.rgba(i.vars.color_primary),color_light_counter_ok_border:t.rgba(i.vars.color_primary),color_dark_input_text:t.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_primary),color_dark_input_background:"transparent",color_dark_highlight_text:t.rgba(i.vars.color_primary,i.vars.blend_dark_text_primary),color_dark_input_bottom_border:t.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_border_light),color_dark_input_error_text:t.rgba("222, 50, 38"),color_dark_input_error_border:t.rgba("222, 50, 38"),color_dark_input_placeholder:t.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_tertiary),color_dark_label_text:t.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_tertiary),color_dark_disabled_label_text:t.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_disabled),color_dark_readonly_label_text:t.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_tertiary),color_dark_help_text:t.rgba(i.vars.color_dark_foreground,i.vars.blend_dark_text_tertiary),color_dark_required_symbol:t.rgba("221, 44, 0"),color_dark_focus_border:t.rgba(i.vars.color_primary),color_dark_counter_ok_border:t.rgba(i.vars.color_primary)},k=[y,a],w=".".concat("pe-textfield"),z=t.styler.createAddStyle(w,k,m),S=t.styler.createGetStyle(w,k,m);e.addGeneralStyleToHead=function(){return t.styler.addStyle({selectors:[w],fns:k,vars:m})},e.addStyle=z,e.color=a,e.getStyle=S,e.layout=y,e.vars=m,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-textfield.js.map
