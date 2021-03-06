import menuClasses from "./menu";

export default {
  component:         "pe-dialog",

  // elements
  placeholder:       "pe-dialog__placeholder",
  holder:            "pe-dialog__holder",
  content:           "pe-dialog__content",
  backdrop:          "pe-dialog__backdrop",
  touch:             "pe-dialog__touch",

  // states
  fullScreen:        "pe-dialog--full-screen",
  modal:             "pe-dialog--modal",
  open:              "pe-dialog--open",    // class set to html element
  visible:           "pe-dialog--visible", // class set to dialog element
  showBackdrop:      "pe-dialog--backdrop",
  transition:        "pe-dialog--transition",

  // lookup
  menuContent:       menuClasses.content,
};
