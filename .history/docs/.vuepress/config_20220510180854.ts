import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3390650_mlfk2jsf6e.js",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "iCode Coding",
      description: "A demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "iCode Coding",
      description: "Learn to Coding ",
    },
  },

  theme,
});
