!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("polythene-style"),require("polythene-utilities"),require("polythene-core-css")):"function"==typeof define&&define.amd?define(["exports","polythene-style","polythene-utilities","polythene-core-css"],e):e((t=t||self).polythene={},t["polythene-style"],t["polythene-utilities"],t["polythene-core-css"])}(this,function(t,e,i,o){"use strict";var n=function(){return[{" html":{"box-sizing":"border-box"}," *, *:before, *:after":{"box-sizing":"inherit"}," *":[{"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},{"-webkit-tap-highlight-color":"transparent"}]," a, a:active, a:focus, input:active, *:focus":{outline:0}," input:disabled":{opacity:1}}]},r=function(){return[{"html, body, button, input, select, textarea":{fontFamily:"Roboto, Helvetica, Arial, sans-serif"}}]},h=function(){return[{" h1, h2, h3, h4, h5, h6, p":{margin:0,padding:0}},{" h1, h2, h3, h4, h5, h6":{" small":{"font-weight":e.vars.font_weight_normal,"line-height":e.vars.line_height,"letter-spacing":"-0.02em","font-size":"0.6em"}}},{" h1":{"font-size":"56px","font-weight":e.vars.font_weight_normal,"line-height":e.vars.line_height,"margin-top":"24px","margin-bottom":"24px"}},{" h2":{"font-size":"45px","font-weight":e.vars.font_weight_normal,"line-height":e.vars.line_height,"margin-top":"24px","margin-bottom":"24px"}},{" h3":{"font-size":"34px","font-weight":e.vars.font_weight_normal,"line-height":e.vars.line_height,"margin-top":"24px","margin-bottom":"24px"}},{" h4":{"font-size":"24px","font-weight":e.vars.font_weight_normal,"line-height":e.vars.line_height,"-moz-osx-font-smoothing":"grayscale","margin-top":"24px","margin-bottom":"16px"}},{" h5":{"font-size":"20px","font-weight":e.vars.font_weight_medium,"line-height":e.vars.line_height,"letter-spacing":"-0.02em","margin-top":"24px","margin-bottom":"16px"}},{" h6":{"font-size":"16px","font-weight":e.vars.font_weight_normal,"line-height":e.vars.line_height,"letter-spacing":"0.04em","margin-top":"24px","margin-bottom":"16px"}},{" html, body":{"font-size":"14px","line-height":e.vars.line_height,"font-weight":e.vars.font_weight_normal}," p":{"font-size":"14px","font-weight":e.vars.font_weight_normal,"line-height":e.vars.line_height,"letter-spacing":"0","margin-bottom":"16px"}," blockquote":{position:"relative","font-size":"24px","font-weight":e.vars.font_weight_normal,"font-style":"italic","line-height":e.vars.line_height,"letter-spacing":"0.08em","margin-top":"24px","margin-bottom":"16px"}," ul, ol":{"font-size":"14px","font-weight":e.vars.font_weight_normal,"line-height":e.vars.line_height,"letter-spacing":0}," b, strong":{"font-weight":e.vars.font_weight_medium}}]},a=[r,n,h],l=[function(){return[{"@import":"url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700')"}]},r,n,h],s=o.styler.createAddStyle("",a,e.vars),g=function(){i.addWebFont("google",{families:["Roboto:400,500,700,400italic:latin"]})};t.addRoboto=g,t.addStyle=s,t.addTypography=function(){g(),o.styler.add("pe-material-design-typography",a.map(function(t){return t()}))},t.getStyle=function(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.mediaQuery,h=void 0===r?"":r,a=n.scope,s=void 0===a?"":a;return o.styler.getStyle({selectors:[t,""],fns:l,vars:e.vars,customVars:i,mediaQuery:h,scope:s})},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-typography.js.map
