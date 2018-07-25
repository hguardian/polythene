import interactive from "./components/interactive";
import { ShadowCSS } from "polythene-css";

export default ({ Shadow, renderer: h, keys: k }) => {

  ShadowCSS.addStyle(".tests-shadow-themed-shadow-style", {
    shadow_bottom_depth_1: "10px 10px 10px 0px rgba(45,58,112,.5)"
  });

  ShadowCSS.addStyle(".tests-shadow-themed-shadow-depth", {
    shadow_depth: 3
  });


  return [
    // {
    //   name: "Child node",
    //   component: Shadow,
    //   attrs: {},
    //   children: ["Child"]
    // },
    {
      name: "Option: content",
      component: Shadow,
      attrs: {
        content: "Content"
      }
    },
    {
      name: "Option: shadowDepth (0)",
      component: Shadow,
      attrs: {
        shadowDepth: 0
      }
    },
    {
      name: "Option: shadowDepth (1)",
      component: Shadow,
      attrs: {
        shadowDepth: 1
      }
    },
    {
      name: "Option: shadowDepth (2)",
      component: Shadow,
      attrs: {
        shadowDepth: 2
      }
    },
    {
      name: "Option: shadowDepth (3)",
      component: Shadow,
      attrs: {
        shadowDepth: 3
      }
    },
    {
      name: "Option: shadowDepth (4)",
      component: Shadow,
      attrs: {
        shadowDepth: 4
      }
    },
    {
      name: "Option: shadowDepth (5)",
      component: Shadow,
      attrs: {
        shadowDepth: 5
      }
    },
    {
      name: "Themed (shadow appearance)",
      component: Shadow,
      attrs: {
        shadowDepth: 1,
        className: "tests-shadow-themed-shadow-style"
      }
    },
    {
      name: "Themed (shadow depth 3)",
      component: Shadow,
      attrs: {
        className: "tests-shadow-themed-shadow-depth"
      }
    },
    {
      name: "Add to an element (default depth)",
      component: {
        view: () => 
          h("div", [
            h(".absolute.absolute--fill",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
              },
              "Some element"
            ),
            h(Shadow)
          ])
      },
    },

    {
      name: "Interactive option: animated",
      interactive: true,
      exclude: true,
      component: interactive({ h, k, Shadow })
    },

    {
      section: "Dark tone",
    },
    {
      name: "Interactive option: animated -- dark tone class",
      interactive: true,
      className: "pe-dark-tone",
      component: interactive({ h, k, Shadow })
    },
  ];
};


