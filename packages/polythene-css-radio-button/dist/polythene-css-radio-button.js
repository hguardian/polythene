!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-css-selection-control")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-css-selection-control"],t):t((e=e||self).polythene={},e["polythene-core-css"],e["polythene-css-selection-control"])}(this,function(e,t,o){"use strict";var r=t.createColor({superColor:o.color}),l=t.createLayout({varFns:{general_styles:function(){return{" .pe-radio-group":{display:"flex"}}}},superLayout:o.layout}),s={general_styles:!0},n=[l,r],c=".".concat("pe-radio-control"),y=t.styler.createAddStyle(c,n,s),a=t.styler.createGetStyle(c,n,s);t.styler.addStyle({selectors:[c],fns:n,vars:s}),e.addStyle=y,e.getStyle=a,e.color=r,e.layout=l,e.vars=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-radio-button.js.map
