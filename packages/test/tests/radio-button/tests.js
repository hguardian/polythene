import m from "mithril";
import radioButton from "polythene-radio-button";
import iconStarOutline from "mmsvg/google/msvg/toggle/star-border";
import iconStar from "mmsvg/google/msvg/toggle/star";

radioButton.theme(".tests-radio-button-themed-radio", {
  label_font_size: 28,
  color_light_on: "#2196F3",
  color_light_off: "#2196F3",
  color_dark_on: "#2196F3",
  color_dark_off: "#2196F3",
  color_light_label: "#2196F3",
  color_dark_label: "#2196F3"
});

const sizeNames = ["small", "regular", "medium", "large"];

let idCounter = 0;

const group = (attrs1, attrs2 = attrs1) => {
  const name = attrs1.name || `name-${idCounter++}}`;
  return {
    view: () => [
      m(radioButton, {
        ...attrs1,
        name
      }),
      m(radioButton, {
        ...attrs2,
        name
      })
    ]
  };
};

const radioGroup = {
  view: () => [
    m(radioButton, {
      name: "setting",
      label: "Label"
    }),
    m(radioButton, {
      name: "setting",
      label: "Label",
      checked: true
    })
  ]
};

export const tests = [
  {
    name: "Option: label",
    component: radioGroup
  },
  {
    name: "Option: checked",
    component: group(
      {
        label: "Label"
      },
      {
        label: "Label",
        checked: true
      }
    )
  },
  {
    name: "Option: value",
    component: group(
      {
        label: "Label",
        name: "worth",
        value: "notable"
      }
    )
  },
  {
    name: "Option: size",
    component: {
      view: () => m("div", sizeNames.map(size => {
        const options = {
          name: size,
          label: "Label",
          size: size
        };
        return m("div", {
          style: {
            marginBottom: "1rem"
          }
        }, [
          m(radioButton, options),
          m(radioButton, options)
        ]);
      }))
    }
  },
  {
    name: "Themed radio button (color and font size)",
    component: group(
      {
        label: "Label",
        class: "tests-radio-button-themed-radio"
      },
      {
        label: "Label",
        class: "tests-radio-button-themed-radio",
        checked: true
      }
    )
  },
  {
    name: "Option: style (colors)",
    component: group(
      {
        label: "Label",
        style: {
          color: "#EF6C00"
        }
      },
      {
        label: "Label",
        style: {
          color: "#EF6C00"
        },
        checked: true
      }
    )
  },
  {
    name: "Option: iconOn, iconOff (custom icon)",
    component: {
      view: () => m("div", sizeNames.map(size => {
        const options = {
          name: size,
          label: "Label",
          size: size,
          iconOn: {
            msvg: iconStar
          },
          iconOff: {
            msvg: iconStarOutline
          }
        };
        return m("div", {
          style: {
            marginBottom: "1rem"
          }
        }, [
          m(radioButton, options),
          m(radioButton, options)
        ]);
      }))
    }
  },

  // // Interactive

  {
    name: "Select with TAB and ENTER",
    interactive: true,
    exclude: true,
    component: {
      view: () => {
        const options = {
          label: "Label",
          name: "enter"
        };
        return [
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, "On desktop, TAB can be used to give focus, ENTER to select."),
          m(radioButton, options),
          m(radioButton, options)
        ];
      }
    },
  },
  {
    name: "Option: disabled",
    interactive: true,
    component: group(
      {
        label: "Off",
        disabled: true
      },
      {
        label: "On",
        disabled: true,
        checked: true
      }
    )
  },
  {
    name: "Option: selectable (true)",
    interactive: true,
    component: group(
      {
        label: "Always",
        selectable: () => true
      }
    )
  },
  {
    name: "Option: iconButton (custom hover behaviour)",
    interactive: true,
    component: group(
      {
        label: "Hover me",
        iconButton: {
          wash: true,
          ink: false
        }
      }
    )
  },
  {
    name: "Option: getState",
    interactive: true,
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.radio = {},
      view: vnode => {
        const options = (label, value) => ({
          name: "getState",
          value,
          label,
          getState: state => vnode.state.radio = state
        });
        return [
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, `Value: ${vnode.state.radio.value}`),
          m(radioButton, options("First", "first")),
          m(radioButton, options("Second", "second"))
        ];
      }
    },
  },
  {
    name: "Setting the value from outside",
    interactive: true,
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.value = undefined,
      view: vnode => {
        return [
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, [
            m(radioButton, {
              label: "Initiator 1",
              name: "initiator",
              value: "first",
              getState: state => vnode.state.value = state.value
            }),
            m(radioButton, {
              label: "Initiator 2",
              name: "initiator",
              value: "second",
              getState: state => vnode.state.value = state.value
            })
          ]),
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, [
            m(radioButton, {
              label: "Receiver 1",
              name: "receiver",
              value: "first",
              disabled: true,
              checked: () => vnode.state.value === "first"
            }),
            m(radioButton, {
              label: "Receiver 2",
              name: "receiver",
              value: "second",
              disabled: true,
              checked: () => vnode.state.value === "second"
            })
          ])
        ];
      }
    },
  },
  {
    name: "Option: events",
    interactive: true,
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.value = undefined,
      view: vnode => {
        const options = (label, value) => ({
          name: "events",
          value,
          checked: () => vnode.state.value === value,
          events: {
            onclick: () => vnode.state.value = value
          }
        });
        return [
          m("div", {
            style: {
              marginBottom: "1rem"
            }
          }, `Value: ${vnode.state.value}`),
          m(radioButton, options("First", "first")),
          m(radioButton, options("Second", "second"))
        ];
      }
    },
  },

  // // Dark theme

  {
    name: "Option: checked -- dark theme class",
    class: "pe-dark-tone",
    component: group(
      {
        label: "Label"
      },
      {
        label: "Label",
        checked: true
      }
    )
  },
  {
    name: "Themed radio button (colors) -- dark theme class",
    class: "pe-dark-tone",
    component: group(
      {
        label: "Label",
        class: "tests-radio-button-themed-radio"
      },
      {
        label: "Label",
        class: "tests-radio-button-themed-radio",
        checked: true
      }
    )
  },
  {
    name: "Option: disabled -- dark theme class",
    class: "pe-dark-tone",
    interactive: true,
    component: group(
      {
        label: "Off",
        disabled: true
      },
      {
        label: "On",
        disabled: true,
        checked: true
      }
    )
  },
  {
    name: "Dark theme class + light theme class",
    class: "pe-dark-tone",
    component: {
      view: () => 
        m("div", {
          style: {
            background: "#fff",
            padding: "20px"
          },
          class: "pe-light-tone"
        },
        m(radioGroup)
      )
    }
  },
  {
    name: "Dark theme class + light tone",
    class: "test-dark-theme",
    component: {
      view: () => 
        m("div", {
          style: {
            background: "#fff",
            padding: "20px"
          },
        },
        m({
          view: () => [
            m(radioButton, {
              name: "setting",
              label: "Label",
              tone: "light"
            }),
            m(radioButton, {
              name: "setting",
              label: "Label",
              checked: true,
              tone: "light"
            })
          ]
        })
      )
    }
  },

];