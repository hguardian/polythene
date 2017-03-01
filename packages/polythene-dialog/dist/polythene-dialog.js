!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("polythene-core"),require("mithril"),require("polythene-shadow"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","mithril","polythene-shadow","polythene-css","polythene-theme"],o):o(e.polythene=e.polythene||{},e["polythene-core"],e.m,e["polythene-shadow"],e["polythene-css"],e["polythene-theme"])}(this,function(e,o,t,r,i,n){"use strict";function l(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}t="default"in t?t.default:t,r="default"in r?r.default:r;var d=n.vars.rgba,s={border_radius:n.vars.unit_block_border_radius,padding:3*n.vars.grid_unit_component,header_bottom:20,header_height:60,footer_height:52,color_light_content_background:d(n.vars.color_light_background),color_light_title_text:d(n.vars.color_light_foreground,n.vars.blend_light_text_primary),color_light_body_text:d(n.vars.color_light_foreground,n.vars.blend_light_text_regular),color_light_body_border:d(n.vars.color_light_foreground,n.vars.blend_light_border_light),color_light_backdrop_background:"rgba(0, 0, 0, .4)",color_dark_content_background:d(n.vars.color_dark_background),color_dark_title_text:d(n.vars.color_dark_foreground,n.vars.blend_dark_text_primary),color_dark_body_text:d(n.vars.color_dark_foreground,n.vars.blend_dark_text_regular),color_dark_body_border:d(n.vars.color_dark_foreground,n.vars.blend_dark_border_light),color_dark_backdrop_background:"rgba(0, 0, 0, .5)"},c=24,p=function(e,o){var t;return[(t={},l(t,e,[i.flex.layoutCenterCenter,{transitionTimingFunction:"ease-out",transitionProperty:"opacity",position:"fixed",top:0,left:0,right:0,bottom:0,"z-index":n.vars.z_dialog,height:"100%",padding:o.padding+"px 40px",opacity:0,"&.pe-dialog--visible":{opacity:1},"&.pe-dialog--fullscreen":{padding:0," .pe-dialog__content":{"border-radius":0,"max-width":"none",height:"100%",width:"100%"," .pe-dialog__header, .pe-dialog__footer":{display:"none"}," .pe-dialog__body":{padding:0,height:"100%","max-height":"calc(100%)",border:"none"}}}," .pe-dialog__header, pe-dialog__body, pe-dialog__header":{"z-index":1}," .pe-dialog__content":[i.flex.layoutVertical,{position:"relative","max-height":"100%","min-width":"280px","max-width":7*n.vars.grid_unit_menu+"px","border-radius":o.border_radius+"px"," > .pe-shadow":{"z-index":-1},"&.pe-menu__content":{" .pe-dialog__body":{padding:0,border:"none"}}}]," .pe-dialog__title":{"font-size":n.vars.font_size_title+"px","line-height":c+"px","font-weight":n.vars.font_weight_medium,"& + div":{"margin-top":"16px"}}," .pe-dialog__header":{padding:[o.padding-4,o.padding,o.header_bottom-4,o.padding].map(function(e){return e+"px"}).join(" "),"min-height":o.header_height+"px"," .pe-dialog__title":[i.mixin.ellipsis(1),{width:"100%"}]}," .pe-dialog__body":[i.flex.selfStretch,i.mixin.hairline("border-top"),{"border-top-style":"solid"},i.mixin.hairline("border-top"),{"border-bottom-style":"solid"},{padding:[o.padding,o.padding,o.padding-5,o.padding].map(function(e){return e+"px"}).join(" "),"overflow-y":"auto","-webkit-overflow-scrolling":"touch","border-width":"1px","border-style":"solid none","border-color":"transparent","max-height":"calc(100vh - "+2*o.padding+"px - "+(o.header_height+o.footer_height)+"px)"}]," .pe-dialog__header + .pe-dialog__body":{"padding-top":0}," .pe-dialog__footer":{padding:"2px 8px","min-height":o.footer_height+"px","font-size":0,"&.pe-dialog__footer--high":{"padding-bottom":"8px"}}," .pe-dialog__actions":[i.flex.layoutHorizontal,i.flex.layoutEndJustified,i.flex.layoutWrap,{margin:"0 -4px"," .pe-button":{height:"36px","margin-top":"6px","margin-bottom":"6px",padding:0}}]}]),l(t," body.pe-dialog--open",{overflow:"hidden",left:0,"-webkit-overflow-scrolling":"touch",top:0,width:"100%"}),t)]},_=function(e,o,t,r){return[a({},e+o,{"&.pe-dialog--backdrop":{"background-color":t["color_"+r+"_backdrop_background"]}," .pe-dialog__content":{"background-color":t["color_"+r+"_content_background"]}," .pe-dialog__header .pe-dialog__title":{color:t["color_"+r+"_title_text"]}," .pe-dialog__body":{color:t["color_"+r+"_body_text"]},"&.pe-dialog--overflow-top .pe-dialog__body":{"border-top-color":t["color_"+r+"_body_border"]},"&.pe-dialog--overflow-bottom .pe-dialog__body":{"border-bottom-color":t["color_"+r+"_body_border"]}})]},g=function(e,o){return[_("",e,o,"light"),_(".pe-dark-theme",e,o,"dark"),_(".pe-dark-theme ",e,o,"dark")]},u=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h=[p,g],f=".pe-dialog",b=function(e,o){return i.styler.generateStyles([e,f],u({},s,o),h)};i.styler.generateStyles([f],s,h);var v=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m={component:"pe-dialog",visible:"pe-dialog--visible",body:"pe-dialog__body",fullscreen:"pe-dialog--fullscreen",content:"pe-dialog__content",header:"pe-dialog__header",footer:"pe-dialog__footer",footerHigh:"pe-dialog__footer--high",title:"pe-dialog__title",actions:"pe-dialog__actions",hasBackdrop:"pe-dialog--backdrop",hasTopOverflow:"pe-dialog--overflow-top",hasBottomOverflow:"pe-dialog--overflow-bottom",menuContent:"pe-menu__content"},y=150,w=function(e){var o=e.scrollEl;o&&(e.topOverflow=o.scrollTop>0,e.bottomOverflow=o.scrollHeight-(o.scrollTop+o.getBoundingClientRect().height)>0)},x=function(e){var o=e.footerEl;if(o){var t=window.getComputedStyle(o),r=o.getBoundingClientRect().height,i=parseInt(t.minHeight,10);r>i?o.classList.add(m.footerHigh):o.classList.remove(m.footerHigh)}},k=function(e,t){var r=e.id;return e.isTransitioning=!0,o.show(v({},t,{el:e.el,showClass:m.visible})).then(function(){e.isTransitioning=!1,e.visible=!0,e.didShow&&e.didShow(r)})},O=function(e,r){var i=e.id;return e.isTransitioning=!0,o.hide(v({},r,{el:e.el,showClass:m.visible})).then(function(){S.remove(i),e.isTransitioning=!1,e.visible=!1,e.didHide&&e.didHide(i),setTimeout(t.redraw,0)})},T=function(e,o){var r=o.body||o.menu,i=o.updateContentOnScroll||!1,n=!i&&e.isScrolling;return t("div",{class:m.body,oncreate:function(o){var t=o.dom;return e.scrollEl=t},onbeforeupdate:!n,onscroll:function(){e.isScrolling=!0,w(e),clearTimeout(e.scrollWatchId),e.scrollWatchId=setTimeout(function(){e.isScrolling=!1},y)}},r)},H=function(e,i){var n=function(){w(e),x(e),t.redraw()},l=function(o){i.fullscreen||i.modal||27!==o.which||e.isTransitioning||(a(),O(e,v({},i,{hideDelay:0})))},a=function(){o.unsubscribe("resize",n),o.unsubscribe("keydown",l)},d=i.element||"form",s=v({},o.filterSupportedAttributes(i),{style:null,class:[m.component,i.fullscreen?m.fullscreen:null,i.backdrop?m.hasBackdrop:null,e.topOverflow||i.borders?m.hasTopOverflow:null,e.bottomOverflow||i.borders?m.hasBottomOverflow:null,e.visible?m.visible:null,i.class].join(" "),oncreate:function(r){var a=r.dom;e.el=a,o.subscribe("resize",n),o.subscribe("keydown",l),w(e),k(e,i).then(function(){w(e),x(e),(e.topOverflow||e.bottomOverflow)&&setTimeout(t.redraw,0)})},onremove:a,onclick:function(o){o.target===e.el&&(i.modal||e.isTransitioning||O(e,v({},i,{hideDelay:0})))}},i.formOptions?i.formOptions:null),c=T(e,i),p=t("div",{class:[m.content,i.menu?m.menuContent:null].join(" "),style:i.style},[i.fullscreen?null:t(r,{z:e.z,animated:!0}),i.fullscreen?null:i.title?t("div",{class:m.header,oncreate:function(o){var t=o.dom;e.headerHeight=t.scrollHeight}},t("div",{class:m.title},i.title)):null,c,i.fullscreen?null:i.footer?t("div",{class:m.footer,oncreate:function(o){var t=o.dom;e.footerHeight=t.scrollHeight,e.footerEl=t,x(e)},onupdate:function(o){var t=o.dom;return e.footerHeight=t.scrollHeight,x(e)}},[t("div",{class:m.actions},i.footer)]):null]);return t(d,s,[i.before,p,i.after])},z={theme:b,oninit:function(e){var o=e.attrs,t=o.opts,r=void 0!==t.z?t.z:3;e.state=v(e.state,o,{id:o.instanceId,z:r,scrollEl:void 0,footerEl:void 0,topOverflow:!1,bottomOverflow:!1,scrollWatchId:0,isScrolling:!1,headerHeight:0,footerHeight:0,el:void 0,visible:!1,isTransitioning:!1})},view:function(e){var o=e.state,t=e.attrs,r="function"==typeof t.opts?t.opts():t.opts;return t.hide&&!o.isTransitioning&&O(o,r),H(o,r)}},S=o.multiple({instance:z,defaultId:"default_dialog",element:".pe-dialog__holder",placeholder:"span.pe-dialog__placeholder",bodyShowClass:"pe-dialog--open"});e.default=S,e.classes=m,e.vars=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-dialog.js.map
