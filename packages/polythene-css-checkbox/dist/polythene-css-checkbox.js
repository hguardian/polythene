!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core-css"),require("polythene-css-selection-control")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-css-selection-control"],t):t((e=e||self).polythene={},e["polythene-core-css"],e["polythene-css-selection-control"])}(this,function(e,t,o){"use strict";var l=t.createColor({superColor:o.color}),r=t.createLayout({superLayout:o.layout}),s={general_styles:!0},c=[r,l],n=".".concat("pe-checkbox-control"),y=t.styler.createAddStyle(n,c,s),a=t.styler.createGetStyle(n,c,s);t.styler.addStyle({selectors:[n],fns:c,vars:s}),e.addStyle=y,e.getStyle=a,e.color=l,e.layout=r,e.vars=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-css-checkbox.js.map
