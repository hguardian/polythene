!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("j2c-plugin-prefix-browser"),require("polythene-core"),require("j2c")):"function"==typeof define&&define.amd?define(["exports","j2c-plugin-prefix-browser","polythene-core","j2c"],t):t(e.polythene={},e["j2c-plugin-prefix-browser"],e["polythene-core"],e.j2c)}(this,function(e,t,l,i){"use strict";i=i&&i.hasOwnProperty("default")?i.default:i;var n=[{display:"-webkit-box"},{display:"-moz-box"},{display:"-ms-flexbox","-ms-flex-preferred-size":"initial"},{display:"-webkit-flex"},{display:"flex"}],o=[n,{"-ms-flex-align":"center","-webkit-align-items":"center","align-items":"center"}],r=[n,{"-ms-flex-pack":"center","-webkit-justify-content":"center","justify-content":"center"}],a={flex:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return[{"-webkit-box-flex":e},{"-moz-box-flex":e},{"-webkit-flex":e},{"-ms-flex":e},{flex:e},1===e?{"-webkit-flex-basis":"0.000000001px"}:{},1===e?{"flex-basis":"0.000000001px"}:{}]},flexAuto:{"-ms-flex":"1 1 auto","-webkit-flex-basis":"auto","flex-basis":"auto"},flexAutoVertical:{"-ms-flex":"1 1 auto","-webkit-flex-basis":"auto","flex-basis":"auto"},flexIndex:function(e){return{"-ms-flex":e,"-webkit-flex":e,flex:e}},flexGrow:function(e){return{"-webkit-flex-grow":e,"flex-grow":e}},layout:n,layoutAroundJustified:[n,{"-ms-flex-pack":"distribute","-webkit-justify-content":"space-around","justify-content":"space-around"}],layoutCenter:o,layoutCenterCenter:[r,o],layoutCenterJustified:r,layoutEnd:[n,{"-ms-flex-align":"end","-webkit-align-items":"flex-end","align-items":"flex-end"}],layoutEndJustified:[n,{"-ms-flex-pack":"end","-webkit-justify-content":"flex-end","justify-content":"flex-end"}],layoutHorizontal:[n,{"-ms-flex-direction":"row","-webkit-flex-direction":"row","flex-direction":"row"}],layoutHorizontalReverse:[n,{"-ms-flex-direction":"row-reverse","-webkit-flex-direction":"row-reverse","flex-direction":"row-reverse"}],layoutInline:[n,{display:"-ms-inline-flexbox"},{display:"-webkit-inline-flex"},{display:"inline-flex"}],layoutJustified:[n,{"-ms-flex-line-pack":"stretch","-ms-flex-pack":"justify","-webkit-justify-content":"space-between","justify-content":"space-between"}],layoutStart:[n,{"-ms-flex-align":"start","-webkit-align-items":"flex-start","align-items":"flex-start"}],layoutStartJustified:[n,{"-ms-flex-align":"start","-ms-flex-pack":"start","-webkit-justify-content":"flex-start","justify-content":"flex-start"}],layoutVertical:[n,{"-ms-flex-direction":"column","-webkit-flex-direction":"column","flex-direction":"column"}],layoutVerticalReverse:[n,{"-ms-flex-direction":"column-reverse","-webkit-flex-direction":"column-reverse","flex-direction":"column-reverse"}],layoutWrap:[n,{"-ms-flex-wrap":"wrap","-webkit-flex-wrap":"wrap","flex-wrap":"wrap"}],layoutWrapReverse:[n,{"-ms-flex-wrap":"wrap-reverse","-webkit-flex-wrap":"wrap-reverse","flex-wrap":"wrap-reverse"}],selfCenter:{"-ms-flex-item-align":"center","-ms-align-self":"center","-webkit-align-self":"center","align-self":"center"},selfEnd:{"-ms-flex-item-align":"end","-ms-align-self":"flex-end","-webkit-align-self":"flex-end","align-self":"flex-end"},selfStart:{"-ms-flex-item-align":"start","-ms-align-self":"flex-start","-webkit-align-self":"flex-start","align-self":"flex-start"},selfStretch:{"-ms-flex-item-align":"stretch","-ms-align-self":"stretch","-webkit-align-self":"stretch","align-self":"stretch"}},f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},s={clearfix:function(){return{"&:after":{content:'""',display:"table",clear:"both"}}},defaultTransition:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";return{transitionDelay:"0ms",transitionDuration:arguments.length>1&&void 0!==arguments[1]?arguments[1]:".18s",transitionTimingFunction:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ease-out",transitionProperty:e}},ellipsis:function(e,t){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";return"none"===e?{textOverflow:"initial",overflow:"initial",display:"block",height:"auto",maxHeight:"none"}:f({},{overflow:"hidden",textOverflow:"ellipsis",textRendering:"auto"},void 0!==e?{"-webkit-line-clamp":e,"-webkit-box-orient":"vertical",display:"-webkit-box"}:null,void 0!==t?{maxHeight:e*t+l}:null)},fit:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)+"px";return{position:"absolute",top:e,right:e,bottom:e,left:e}},fontSmoothing:function(){return!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"}:{"-webkit-font-smoothing":"subpixel-antialiased","-moz-osx-font-smoothing":"auto"}},sticky:function(){return{position:"sticky",top:0,zIndex:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}},u=new i(t.prefixPlugin),x=/[^a-z0-9\\-]/g,c=function(e){for(var t=arguments.length,l=Array(t>1?t-1:0),i=1;i<t;i++)l[i-1]=arguments[i];y.apply(void 0,[{id:e}].concat(l))},d=function(e){if(!l.isServer&&e){var t=document.getElementById(e);t&&t.parentNode&&t.parentNode.removeChild(t)}},y=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];if(!l.isServer){var o=e.id.replace(x,"_"),r=e.document||window.document;d(o);var a=r.createElement("style");o&&a.setAttribute("id",o),i.forEach(function(e){Object.keys(e).length&&e.forEach(function(e){var t={"@global":e},l=u.sheet(t);a.appendChild(r.createTextNode(l))})}),r.head.appendChild(a)}},p={add:c,addToDocument:y,createStyleSheets:function(e,t,l){var i=e.join("");return l.map(function(e){return e(i,t)})},generateStyles:function(e,t,l){var i=e.join(""),n=i.trim().replace(/^[^a-z]?(.*)/,"$1");c(n,l.map(function(e){return e(i,t)}))},remove:d},b=function(e){var t=parseInt(e.substring(1),16);return(t>>16&255)+","+(t>>8&255)+","+(255&t)},m=function(e){return"rgba("+e+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1)+")"},w=[{".layout, .layout.horizontal":a.layout,".layout.horizontal.inline, .layout.vertical.inline":a.layoutInline,".layout.horizontal":a.layoutHorizontal,".layout.horizontal.reverse":a.layoutHorizontalReverse,".layout.vertical":a.layoutVertical,".layout.vertical.reverse":a.layoutVerticalReverse,".layout.wrap":a.layoutWrap,".layout.wrap.reverse":a.layoutWrapReverse,".flex":a.flex(1),".span.flex":{display:"block"},".flex.auto-vertical":a.flexAutoVertical,".flex.auto":a.flexAuto,".flex.none":a.flexIndex("none"),".flex.one":a.flexIndex(1),".flex.two":a.flexIndex(2),".flex.three":a.flexIndex(3),".flex.four":a.flexIndex(4),".flex.five":a.flexIndex(5),".flex.six":a.flexIndex(6),".flex.seven":a.flexIndex(7),".flex.eight":a.flexIndex(8),".flex.nine":a.flexIndex(9),".flex.ten":a.flexIndex(10),".flex.eleven":a.flexIndex(11),".flex.twelve":a.flexIndex(12),".layout.start":a.layoutStart,".layout.center, .layout.center-center":a.layoutCenter,".layout.end":a.layoutEnd,".layout.start-justified":a.layoutStartJustified,".layout.center-justified, .layout.center-center":a.layoutCenterJustified,".layout.end-justified":a.layoutEndJustified,".layout.around-justified":a.layoutAroundJustified,".layout.justified":a.layoutJustified,".self-start":a.selfStart,".self-center":a.selfCenter,".self-end":a.selfEnd,".self-stretch":a.selfStretch}],g=[{".pe-block":{display:"block"},".pe-inline-block":{display:"inline-block"},".pe-hidden":{display:"none !important"},".pe-relative":{position:"relative"},".pe-absolute":{position:"absolute"},".pe-fit":{position:"absolute",top:0,right:0,bottom:0,left:0},".pe-fullbleed":{margin:0,height:"100vh"}}],v=[w,g],h=function(){return p.add("pe-layout",w,g)};e.flex=a,e.mixin=s,e.styler=p,e.hex=b,e.rgba=m,e.layoutStyles=v,e.addLayoutStyles=h,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-css.js.map
