!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).polythene={})}(this,function(e){"use strict";function n(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function t(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},o=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),o.forEach(function(t){n(e,t,i[t])})}return e}function i(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],i=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);i=!0);}catch(e){o=!0,r=e}finally{try{i||null==s.return||s.return()}finally{if(o)throw r}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var r="hidden",a="visible",s="exposing",u="hiding",d=function(e,n){return e[n]=1,e},c=["key","style","href","id","data-index","tabIndex","tabindex","oninit","oncreate","onupdate","onbeforeremove","onremove","onbeforeupdate"],l=function(e){return"function"==typeof e?e():e},f="undefined"!=typeof document,m=!f,h={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"},p=function(e){var n=e.element,t=e.selector,i=e.pseudoSelector,o=e.prop,r=e.equals,a=e.contains,s=t?n.querySelector(t):n;if(!s)return!1;var u=document.defaultView;if(u){if(void 0!==r)return r===u.getComputedStyle(s,i).getPropertyValue(o);if(void 0!==a)return-1!==u.getComputedStyle(s,i).getPropertyValue(o).indexOf(a)}return!1},v=function(e){var n=parseFloat(e)*(-1===e.indexOf("ms")?1e3:1);return isNaN(n)?0:n},w=!m&&"ontouchstart"in document.documentElement,y=w?["touchstart","click"]:["click"],g=w?["click","mouseup"]:["mouseup"],b=w?["touchstart","mousedown"]:["mousedown"],S=w?["touchmove","mousemove"]:["mousemove"],E=w?["touchend","mouseup"]:["mouseup"];if(f){var C=document.querySelector("html");C&&C.classList.add(w?"pe-touch":"pe-no-touch")}var D={},O=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.05,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f?window:{},i=!1;return function(){for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];i||(e.apply(t,r),i=!0,setTimeout(function(){return i=!1},n))}},T=function(e,n,t){D[e]=D[e]||[],D[e].push(t?O(n,t):n)},P=function(e,n){if(D[e]){var t=D[e].indexOf(n);t>-1&&D[e].splice(t,1)}},x=function(e,n){D[e]&&D[e].forEach(function(e){return e(n)})};f&&(window.addEventListener("resize",function(e){return x("resize",e)}),window.addEventListener("scroll",function(e){return x("scroll",e)}),window.addEventListener("keydown",function(e){return x("keydown",e)}),g.forEach(function(e){return window.addEventListener(e,function(n){return x(e,n)})}));var I=function(e){var n=e.options,r=[],a=function(e){x(n.name,e)},s=function(e){var n=u(e);return r.indexOf(n)},u=function(e){for(var n=0;n<r.length;n++)if(r[n].instanceId===e)return r[n]},d=function(){r.length&&(r[0].show=!0),a({id:r.length?r[0].instanceId:null,name:"next"})},c=function(){var e,t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.defaultId;n.queue?(r.shift(),d()):-1!==(t=s(e=i))&&(r.splice(t,1),a({id:e,name:"removeItem"}))},m=function(e,n){var t=u(n);t&&(t.pause=e,t.unpause=!e,a({id:n,name:e?"pause":"unpause"}))},h=function(){r.length=0,a({id:null,name:"removeAll"})};return{clear:h,count:function(){return r.length},hide:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id||n.defaultId,t=n.queue&&r.length?r[0]:u(e);return t&&(t.hide=!0),a({id:e,name:"hide"}),t?t.hidePromise:Promise.resolve(e)},pause:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.defaultId;return m(!0,e)},remove:c,show:function(){var e,i,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},m=f.id||n.defaultId,h=function(e,i,o){var r,s,u=l(e),d=new Promise(function(e){return r=e}),f=new Promise(function(e){return s=e});return t({},n,{instanceId:i,spawn:o,props:e,show:!n.queue,showPromise:d,hidePromise:f,didShow:function(){return u.didShow&&u.didShow(i),a({id:i,name:"didShow"}),r(i)},didHide:function(){return u.didHide&&u.didHide(i),a({id:i,name:"didHide"}),c(i),s(i)}})}(o,m,f.spawn||n.defaultId);a({id:m,name:"show"}),n.queue?(r.push(h),1===r.length&&d()):u(m)?(e=h,-1!==(i=s(m))&&(r[i]=e)):r.push(h);return h.showPromise},unpause:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.defaultId;return m(!1,e)},render:function(e){var a=e.h,s=e.useState,u=e.useEffect,d=i(e,["h","useState","useEffect"]),c=o(s(),2)[1];u(function(){return T(n.name,c),function(){P(n.name,c)}},[]);var m=d.spawn||n.defaultId,p=r.filter(function(e){return e.show&&e.spawn===m});return n.htmlShowClass&&f&&document.documentElement&&document.documentElement.classList[p.length?"add":"remove"](n.htmlShowClass),p.length?a(n.holderSelector,{className:"container"===d.position?"pe-multiple--container":"pe-multiple--screen"},p.map(function(e){return a(n.instance,t({},l(d),{fromMultipleClear:h,spawnId:m,fromMultipleClassName:n.className,holderSelector:n.holderSelector,transitions:n.transitions,fromMultipleDidHide:e.didHide,fromMultipleDidShow:e.didShow,hide:e.hide,instanceId:e.instanceId,key:void 0!==e.key?e.key:e.keyId,pause:e.pause,show:e.show,unpause:e.unpause},l(e.props)))})):a(n.placeholder)}}};I.displayName="Multi";var k="show",M="hide",H="show-done",j="hide-done",A=function(e){return q(e,"show")},L=function(e){return q(e,"hide")},q=function(e,n){var t=e.el;return t?new Promise(function(i){var o=t.style,r=f?window.getComputedStyle(t):{},a=e.hasDuration&&void 0!==e.duration?1e3*e.duration:v(r.transitionDuration),s=e.hasDelay&&void 0!==e.delay?1e3*e.delay:v(r.transitionDelay),u=e.timingFunction||r.transitionTimingFunction;e.transitionClass&&(e.transitionClassElement||t).classList.add(e.transitionClass);var d=function(){o.transitionDuration="0ms",o.transitionDelay="0ms",e.before&&"function"==typeof e.before&&e.before()},c=e.before&&"show"===n?d:e.before&&"hide"===n?d:null,l=function(){e.after&&"function"==typeof e.after&&e.after()},m=function(){!function(){o.transitionDuration=a+"ms",o.transitionDelay=s+"ms",u&&(o.transitionTimingFunction=u),e.showClass&&(e.showClassElement||t).classList["show"===n?"add":"remove"](e.showClass);e.transition&&e.transition()}(),setTimeout(function(){(l&&l(),e.transitionClass)&&((e.transitionClassElement||t).classList.remove(e.transitionClass),t.offsetHeight);i()},a+s)},h=function(){0===a?m():setTimeout(m,0)};c?(c(),t.offsetHeight,setTimeout(function(){h()},0)):h()}):Promise.resolve()};e.Multi=I,e._Conditional=function(e){var n=e.h,d=e.useState,c=e.useEffect,l=i(e,["h","useState","useEffect"]),f=o(d(l.permanent?a:l.permanent||l.show?a:r),2),m=f[0],h=f[1];c(function(){var e=m;l.permanent?m===a&&l.show?e=s:m!==s||l.show||(e=u):m===r&&l.show?e=a:m!==a||l.show||(e=u),e!==m&&h(e)},[l]);var p=n("span",{className:l.placeholderClassName});return l.didHide?m!==r?n(l.instance,t({},l,{didHide:function(e){return l.didHide(e),h(l.permanent?a:r)}},m===u?{show:!0,hide:!0}:void 0)):p:l.permanent||l.inactive||l.show?n(l.instance,l):p},e.classForSize=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"regular";return function(e){return{small:e.small,regular:e.regular,medium:e.medium,large:e.large,fab:e.fab}}(e)[n]},e.deprecation=function(e,n){var t=n.option,i=n.newOption,o=n.newComponent,r=n.since,a=r?"Since version ".concat(r,"."):"";return t&&console.warn("".concat(e,": option '").concat(t,"' is deprecated and will be removed in later versions. Use '").concat(i,"' instead. ").concat(a)),o&&!i&&console.warn("".concat(e,": this component is deprecated and will be removed in later versions. Use component '").concat(o,"' instead. ").concat(a)),o&&i&&console.warn("".concat(e,": this component is deprecated and will be removed in later versions. Use component '").concat(o,"' with option '").concat(i,"' instead. ").concat(a))},e.emit=x,e.filterSupportedAttributes=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.add,i=n.remove,o=i?i.reduce(d,{}):{},r=(t?c.concat(t):c).filter(function(e){return!o[e]}).reduce(d,{});return Object.keys(e).reduce(function(n,t){return r[t]&&(n[t]=e[t]),n},{})},e.getAnimationEndEvent=function(){if(f){var e=document.createElement("fakeelement");for(var n in h)if(void 0!==e.style[n])return h[n]}},e.getStyle=function(e){var n=e.element,t=e.selector,i=e.pseudoSelector,o=e.prop,r=t?n.querySelector(t):n;if(r){if(r.currentStyle)return r.currentStyle;if(window.getComputedStyle){var a=document.defaultView;if(a){var s=a.getComputedStyle(r,i);if(s)return s.getPropertyValue(o)}}}},e.hide=L,e.iconDropdownDown='<svg xmlns="http://www.w3.org/2000/svg" id="dd-down-svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>',e.iconDropdownUp='<svg xmlns="http://www.w3.org/2000/svg" id="dd-up-svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/></svg>',e.initialTransitionState={isVisible:!1,isTransitioning:!1},e.isClient=f,e.isRTL=function(e){var n=e.element,t=void 0===n?document:n,i=e.selector;return p({element:t,selector:i,prop:"direction",equals:"rtl"})},e.isServer=m,e.isTouch=w,e.pointerEndDownEvent=E,e.pointerEndEvent=g,e.pointerMoveEvent=S,e.pointerStartDownEvent=b,e.pointerStartEvent=y,e.show=A,e.styleDurationToMs=v,e.stylePropCompare=p,e.subscribe=T,e.throttle=O,e.transitionComponent=function(e){var n=e.dispatchTransitionState,i=e.isTransitioning,o=e.instanceId,r=e.isShow,a=e.props,s=e.domElements,u=e.beforeTransition,d=e.afterTransition,c=e.showClass,l=e.transitionClass;e.referrer;if(i)return Promise.resolve();n(r?k:M),u&&u();var f=r?a.showDuration:a.hideDuration,m=r?a.showDelay:a.hideDelay,h=r?a.showTimingFunction:a.hideTimingFunction,p=a.transitions,v=r?A:L,w=t({},a,s,{showClass:c,transitionClass:l,duration:f,delay:m,timingFunction:h}),y=t({},w,p?(r?p.show:p.hide)(w):void 0);return v(t({},y,{duration:void 0!==y.duration?y.duration:.24,hasDuration:void 0!==y.duration,delay:void 0!==y.delay?y.delay:0,hasDelay:void 0!==y.delay})).then(function(){var e=o;d&&d(),(r?a.fromMultipleDidShow:a.fromMultipleDidHide)?(r?a.fromMultipleDidShow:a.fromMultipleDidHide)(e):(r?a.didShow:a.didHide)&&(r?a.didShow:a.didHide)(e),n(r?H:j)})},e.transitionStateReducer=function(e,n){switch(n){case k:return t({},e,{isTransitioning:!0,isVisible:!0});case M:return t({},e,{isTransitioning:!0});case H:return t({},e,{isTransitioning:!1,isVisible:!0});case j:return t({},e,{isTransitioning:!1,isVisible:!1});default:throw new Error("Unhandled action type: ".concat(n))}},e.unpackAttrs=l,e.unsubscribe=P,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core.js.map
