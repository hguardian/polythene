!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react-hyperscript"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","react-hyperscript","react","react-dom"],e):e(t.polythene=t.polythene||{},t["react-hyperscript"],t.react,t["react-dom"])}(this,function(t,e,n,r){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e="default"in e?e.default:e,r="default"in r?r.default:r;var b={class:"className",className:"className",formaction:"formAction",onblur:"onBlur",onchange:"onChange",onclick:"onClick",onfocus:"onFocus",onkeydown:"onKeyDown",onkeyup:"onKeyUp",onmousedown:"onMouseDown",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",tabindex:"tabIndex"},m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),g=function(t){return function(e){function n(e){o(this,n);var r=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return r.state=m({},t,{state:{}}),r.state.oninit&&r.state.oninit(r.state),r}return i(n,e),_(n,[{key:"componentDidMount",value:function(){var t=this;this.state.state.redrawOnUpdate&&this.state.state.redrawOnUpdate.map(function(){return t.forceUpdate()})}},{key:"render",value:function(){return this.state.view({state:this.state.state,attrs:this.props},this.props.children)}}]),n}(n.Component)},O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return"object"===O(n[0])?e.call.apply(e,[null,g(n[0])].concat(s(n.slice(1)))):e.call.apply(e,[null].concat(n))};w.trust=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div";return null==t&&(t=""),e(n,{dangerouslySetInnerHTML:{__html:t}})};var j=function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t){!function(){function e(){function t(){return arguments.length>0&&arguments[0]!==j&&r(t,arguments[0]),t._state.value}return n(t),arguments.length>0&&arguments[0]!==j&&r(t,arguments[0]),t}function n(t){t.constructor=e,t._state={id:w++,value:void 0,state:0,derive:void 0,recover:void 0,deps:{},parents:[],endStream:void 0,unregister:void 0},t.map=t["fantasy-land/map"]=l,t["fantasy-land/ap"]=p,t["fantasy-land/of"]=e,t.valueOf=d,t.toJSON=h,t.toString=d,Object.defineProperties(t,{end:{get:function(){if(!t._state.endStream){var n=e();n.map(function(e){return!0===e&&(f(t),n._state.unregister=function(){f(n)}),e}),t._state.endStream=n}return t._state.endStream}}})}function r(t,e){o(t,e);for(var n in t._state.deps)a(t._state.deps[n],!1);null!=t._state.unregister&&t._state.unregister(),i(t)}function o(t,e){t._state.value=e,t._state.changed=!0,2!==t._state.state&&(t._state.state=1)}function a(t,e){var n=t._state.parents;if(n.length>0&&n.every(v)&&(e||n.some(b))){var r=t._state.derive();if(r===j)return!1;o(t,r)}}function i(t){t._state.changed=!1;for(var e in t._state.deps)t._state.deps[e]._state.changed=!1}function s(t,n){if(!n.every(y))throw new Error("Ensure that each item passed to stream.combine/stream.merge is a stream");return u(e(),n,function(){return t.apply(this,n.concat([n.filter(b)]))})}function u(t,e,n){var r=t._state;return r.derive=n,r.parents=e.filter(m),c(t,r.parents),a(t,!0),t}function c(t,e){for(var n=0;n<e.length;n++)e[n]._state.deps[t._state.id]=t,c(t,e[n]._state.parents)}function f(t){for(var e=0;e<t._state.parents.length;e++)delete t._state.parents[e]._state.deps[t._state.id];for(var n in t._state.deps){var r=t._state.deps[n],o=r._state.parents.indexOf(t);o>-1&&r._state.parents.splice(o,1)}t._state.state=2,t._state.deps={}}function l(t){return s(function(e){return t(e())},[this])}function p(t){return s(function(t,e){return t()(e())},[t,this])}function d(){return this._state.value}function h(){return null!=this._state.value&&"function"==typeof this._state.value.toJSON?this._state.value.toJSON():this._state.value}function y(t){return t._state}function v(t){return 1===t._state.state}function b(t){return t._state.changed}function m(t){return 2!==t._state.state}function _(t){return s(function(){return t.map(function(t){return t()})},t)}function g(t,e,n){var r=s(function(n){return e=t(e,n._state.value)},[n]);return 0===r._state.state&&r(e),r}function O(t,e){var n=t.map(function(t){var e=t[0];return 0===e._state.state&&e(void 0),e});return s(function(){var r=arguments[arguments.length-1];return n.forEach(function(n,o){r.indexOf(n)>-1&&(e=t[o][1](e,n._state.value))}),e},n)}var w=0,j={};e["fantasy-land/of"]=e,e.merge=_,e.combine=s,e.scan=g,e.scanMerge=O,e.HALT=j,t.exports=e}()}),S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},P=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),k=function(t){var e=t.createContent,o=void 0===e?function(){return{}}:e,a=t.createProps,i=void 0===a?function(){return{}}:a,s=t.element,l=t.component,p=t.getInitialState,d=void 0===p?function(){return{}}:p,h=t.onMount,y=void 0===h?function(){}:h,v=t.onUnmount,m=void 0===v?function(){}:v;return function(t){function e(t){u(this,e);var n=c(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)),r=S({},l,n.createVirtualNode(),{redrawValues:void 0}),o=d(r,j);return n.state=o,n}return f(e,t),P(e,[{key:"componentDidMount",value:function(){var t=this;y(this.createVirtualNode()),this.state.redrawOnUpdate&&this.state.redrawOnUpdate.map(function(e){return t.setState({redrawValues:e})})}},{key:"componentWillUnmount",value:function(){m(this.createVirtualNode())}},{key:"createVirtualNode",value:function(){var t=S({},this.props);return{state:this.state,attrs:t,children:t.children,dom:this.dom}}},{key:"render",value:function(){var t=this,e=this.createVirtualNode();return w(l||e.attrs.element||s,S({},i(e,{renderer:w,requiresKeys:!0,keys:b}),{ref:function(e){t.dom||(t.dom=r.findDOMNode(e))}}),[e.attrs.before,o(e,{renderer:w,requiresKeys:!0,keys:b}),e.attrs.after])}}]),e}(n.Component)},N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},x=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),C=function(t){var e=t.createContent,o=void 0===e?function(){return{}}:e,a=t.createProps,i=void 0===a?function(){return{}}:a,s=t.element,u=t.component;return function(t){function e(){return l(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return d(e,t),x(e,[{key:"createVirtualNode",value:function(){var t=N({},this.props);return{attrs:t,children:t.children,dom:this.dom}}},{key:"render",value:function(){var t=this,e=this.createVirtualNode();return w(u||e.attrs.element||s,N({},i(e,{renderer:w,requiresKeys:!0,keys:b}),{ref:function(e){t.dom||(t.dom=r.findDOMNode(e))}}),[e.attrs.before,o(e,{renderer:w,requiresKeys:!0,keys:b}),e.attrs.after])}}]),e}(n.Component)},E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},M=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),T=function(t){function e(t){h(this,e);var n=y(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={visible:t.permanent||t.show||!1,transitioning:!1},n}return v(e,t),M(e,[{key:"componentWillReceiveProps",value:function(t){t.permanent||this.state.transitioning||(!this.state.visible&&t.show?this.setState({visible:!0}):this.state.visible&&t.hide&&this.setState({visible:!1}))}},{key:"updateState",value:function(){this.props.getState&&this.props.getState({visible:this.state.visible,transitioning:this.state.transitioning})}},{key:"render",value:function(){var t=this;return this.state.visible?w(this.props.instance,E({},this.props,{setVisible:function(e){return t.setState({visible:e},t.updateState)},setTransitioning:function(e){return t.setState({transitioning:e},t.updateState)}})):w("span",{className:this.props.placeholderClassName})}}]),e}(n.Component);t.keys=b,t.renderer=w,t.stateComponent=k,t.viewComponent=C,t.Toggle=T,t.MithrilToReact=g,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-base.js.map
