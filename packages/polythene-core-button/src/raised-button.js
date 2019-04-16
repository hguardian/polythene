import { isServer, pointerStartMoveEvent, pointerEndMoveEvent, deprecation } from "polythene-core";

// Don't export 'getElement': it will be the wrapped Button component (set in polythene-xxx-button)

const DEFAULT_SHADOW_DEPTH = 1;
const DEFAULT_SHADOW_DEPTH_INCREASE = 1;
const MAX_SHADOW_DEPTH = 5;

let tapStart,
  tapEndAll = () => {},
  downButtons = [];

const animateZ = (which, vnode) => {
  const shadowDepthBase = vnode.state.shadowDepthBase;
  const increase = vnode.attrs.increase || DEFAULT_SHADOW_DEPTH_INCREASE;
  const shadowDepth = vnode.state.shadowDepth();
  const newShadowDepth = which === "down" && shadowDepthBase < MAX_SHADOW_DEPTH
    ? Math.min(shadowDepthBase + increase, MAX_SHADOW_DEPTH)
    : which === "up"
      ? Math.max(shadowDepth - increase, shadowDepthBase)
      : shadowDepth;
  if (newShadowDepth !== shadowDepth) {
    vnode.state.shadowDepth(newShadowDepth);
  }
};

const tapHandler = (which, vnode) => {
  if (which === "down") {
    downButtons.push(Object.assign({}, vnode));
  }
  const animateOnTap = vnode.attrs.animateOnTap !== false ? true : false;
  if (animateOnTap) {
    animateZ(which, vnode);
  }
};

const initTapEvents = vnode => {
  if (isServer) return;
  tapStart = () => tapHandler("down", vnode);
  tapEndAll = () => {
    downButtons.map(buttonVnode =>
      tapHandler("up", buttonVnode));
    downButtons = [];
  };
  pointerStartMoveEvent.forEach(evt =>
    vnode.dom.addEventListener(evt, tapStart));
  pointerEndMoveEvent.forEach(evt =>
    document.addEventListener(evt, tapEndAll));
};

const clearTapEvents = vnode => {
  pointerStartMoveEvent.forEach(evt =>
    vnode.dom.removeEventListener(evt, tapStart));
  pointerEndMoveEvent.forEach(evt =>
    document.removeEventListener(evt, tapEndAll));
};

export const getInitialState = (vnode, createStream) => {
  const attrs = vnode.attrs;
  const shadowDepthBase = attrs.shadowDepth !== undefined
    ? attrs.shadowDepth
    : attrs.z !== undefined // deprecated
      ? attrs.z
      : DEFAULT_SHADOW_DEPTH; 
  const shadowDepth = createStream(shadowDepthBase);
  const tapEventsInited = createStream(false);
  return {
    shadowDepthBase,
    shadowDepth,
    tapEventsInited,
    redrawOnUpdate: createStream.merge([shadowDepth])
  };
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (attrs.z !== undefined) {
    deprecation("RaisedButton", { option: "z", newOption: "shadowDepth" });
  }
  if (!state.tapEventsInited()) {
    initTapEvents(vnode);
    state.tapEventsInited(true);
  }
};

export const onUnMount = vnode => {
  if (vnode.state.tapEventsInited()) {
    clearTapEvents(vnode);
  }
};

export const createProps = vnode => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  const children = attrs.children || vnode.children || [];
  return {
    raised: true,
    animateOnTap: false,
    wash: attrs.wash !== undefined
      ? attrs.wash
      : false,
    children,
    ...attrs,
    shadowDepth: attrs.disabled ? 0 : state.shadowDepth(),
  };
};

export const createContent = vnode =>
  vnode.children;
