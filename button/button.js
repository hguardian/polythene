"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}require("polythene/common/object.assign");var _polythenePolythenePolythene=require("polythene/polythene/polythene");var _polythenePolythenePolythene2=_interopRequireDefault(_polythenePolythenePolythene);var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polytheneRippleRipple=require("polythene/ripple/ripple");var _polytheneRippleRipple2=_interopRequireDefault(_polytheneRippleRipple);var _polytheneShadowShadow=require("polythene/shadow/shadow");var _polytheneShadowShadow2=_interopRequireDefault(_polytheneShadowShadow);require("polythene-theme/button/button");var startType=undefined,endType=undefined,tapStart=undefined,tapEnd=undefined;var initTapEvents=function initTapEvents(el,ctrl,opts){var isTouch=_polythenePolythenePolythene2["default"].isTouch();startType=isTouch?"click":"mousedown";endType="mouseup";var animateOnTap=opts.animateOnTap&&!isTouch;var tapHandler=function tapHandler(evt){if(opts.onTap){opts.onTap(evt)}if(!animateOnTap){return}var baseZ=ctrl.baseZ();if(baseZ===5){return}var MAX_Z=5;var increase=opts.increase||1;var z=ctrl.z();if(evt==="down"){z=z+increase;z=Math.min(z,MAX_Z)}else if(evt==="up"){z=z-increase;z=Math.max(z,baseZ)}if(z!==ctrl.z()){ctrl.z(z);_mithril2["default"].redraw()}};tapStart=function(e){e.preventDefault();tapHandler("down")};tapEnd=function(e){e.preventDefault();tapHandler("up")};el.addEventListener(startType,tapStart);document.body.addEventListener(endType,tapEnd)};var clearTapEvents=function clearTapEvents(el){el.removeEventListener(startType,tapStart);document.body.removeEventListener(endType,tapEnd)};var createView=function createView(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var tag=undefined,label=undefined;opts.ripple=opts.ripple||{};opts.shadow=opts.shadow||{};opts.animateOnTap=opts.animateOnTap!==undefined?opts.animateOnTap:true;tag=opts.tag||"a";var noink=opts.ink!==undefined&&!opts.ink;var disabled=opts.disabled===true;if(disabled){tag+="[disabled]"}if(noink){tag+=".noink"}if(opts.raised){tag+=".raised"}var props0={"class":[opts.parentClass||"button",opts.selected?"selected":null,opts.disabled?"disabled":null,opts["class"]].join(" "),id:opts.id||""};var buttonConfig=function buttonConfig(el,isInited,context){if(isInited){return}initTapEvents(el,ctrl,opts);context.onunload=function(){clearTapEvents(el)}};var optsConfig=opts.config||function(){};var urlConfig=opts.url&&opts.url.config?opts.url.config:function(){};var props=Object.assign({},props0,opts.url?opts.url:null,opts.events?opts.events:null,{config:function config(){return[buttonConfig.apply(undefined,arguments),optsConfig.apply(undefined,arguments),urlConfig.apply(undefined,arguments)]}});label=null;if(opts.content){label=opts.content}else if(opts.label){if(typeof opts.label==="object"){label=opts.label}else{label=(0,_mithril2["default"])(".label",opts.label)}}var content=(0,_mithril2["default"])("div",{"class":"content"},[label,disabled||noink?null:_mithril2["default"].component(_polytheneRippleRipple2["default"],opts.ripple),disabled||opts.wash!==undefined&&!opts.wash?null:(0,_mithril2["default"])(".wash.fit"),opts.raised&&!disabled?_mithril2["default"].component(_polytheneShadowShadow2["default"],{z:ctrl.z(),animated:true}):null]);return(0,_mithril2["default"])(tag,props,_polythenePolythenePolythene2["default"].insertContent(content,opts))};var component={controller:function controller(){var opts=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var z=opts.z!==undefined?opts.z:1;return{baseZ:_mithril2["default"].prop(z),z:_mithril2["default"].prop(z)}},view:function view(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];return createView(ctrl,opts)}};exports["default"]=component;module.exports=exports["default"];