import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "/blog/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    /* "/": {
      lang: "en-US",
      title: "",
      description: "",
    }, */
    "/": {
      lang: "zh-CN",
      title: "iCode",
      description: "Learning to Coding",
    },
  },

  theme,

  plugins: [
    
    docsearchPlugin({
      // 你的选项
      // appId, apiKey 和 indexName 是必填的
      appId: "0W2BTKIM6W",
      apiKey: "010263e6e839168368a7df709a2445ce",
      indexName: "icodea",

      locales: {
        /* "/zh/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        }, */
      },
    }),
  ],

});
