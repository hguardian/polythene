"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneElementElement=require("polythene/element/element");var _polytheneElementElement2=_interopRequireDefault(_polytheneElementElement);var block={view:function view(ctrl,args){return _mithril2["default"].component(_polytheneElementElement2["default"],args.element)}};var titleBlock={view:function view(ctrl,args){return(0,_mithril2["default"])(".p-block",{"class":args["class"]||""},[(0,_mithril2["default"])(".p-block-header",args.title),args.content])}};var _module={};_module.view=function(){return(0,_mithril2["default"])(".module-element",[_mithril2["default"].component(titleBlock,{title:"Testing an element",content:[_mithril2["default"].component(block,{element:{content:"This is an element"}})]})])};exports["default"]=_module;module.exports=exports["default"];