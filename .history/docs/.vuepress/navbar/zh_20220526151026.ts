import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  "/zh/",
  "/zh/home",
  // { text: "使用指南", icon: "creative", link: "/zh/guide/" },
  // { text: "macOS ", icon: "creative", link: "/zh/macos/" },
  // { text: "Linux ", icon: "creative", link: "/zh/linux/" },
  // { text: "Web前端 ", icon: "creative", link: "/zh/webfront/" },
  
  
  {
    text: "Web 前端",
    icon: "vue",
    prefix: "/zh/webfront/",
    children: [
      {
        text: "HTML",
        icon: "html",
        prefix: "HTML/",
        children: [
          { text: "文章 1", icon: "html", link: "article1" },
          { text: "文章 2", icon: "html", link: "article2" },
          //"article3",
          //"article4",
        ],
      },
      {
        text: "CSS",
        icon: "css",
        prefix: "CSS/",
        children: [
          { text: "文章 1", icon: "css", link: "article1" },
          { text: "文章 2", icon: "css", link: "article2" },
          //"article3",
          //"article4",
        ],
      },
      {
        text: "JavaScript",
        icon: "javascript",
        prefix: "JavaScript/",
        children: [
          {
            text: "文章 5",
            icon: "javascript",
            link: "article/article5",
          },
          {
            text: "文章 6",
            icon: "javascript",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      {
        text: "Vue.js",
        icon: "vue",
        prefix: "Vue/",
        children: [
          {
            text: "文章 5",
            icon: "vue",
            link: "article/article5",
          },
          {
            text: "vue",
            icon: "vue",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      {
        text: "TypeScript",
        icon: "typescipt",
        prefix: "TypeScript/",
        children: [
          {
            text: "typescipt",
            icon: "typescipt",
            link: "article1",
          },
          {
            text: "typescipt",
            icon: "typescipt",
            link: "article2",
          },
          "article/article7",
          "article/article8",
        ],
      },
    ],
  },
  

  {
    text: "macOS 进阶",
    icon: "git",
    prefix: "/zh/posts/",
    children: [
      {
        text: "文章 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "文章 1", icon: "edit", link: "article1" },
          { text: "文章 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      },
      {
        text: "文章 5-12",
        icon: "edit",
        children: [
          {
            text: "文章 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "文章 6",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      { text: "文章 9", icon: "edit", link: "article9" },
      { text: "文章 10", icon: "edit", link: "article10" },
      "article11",
      "article12",
    ],
  },
  
  {
    text: "Windows 美化",
    icon: "windows",
    prefix: "/zh/posts/",
    children: [
      {
        text: "文章 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "文章 1", icon: "edit", link: "article1" },
          { text: "文章 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      },
      {
        text: "文章 5-12",
        icon: "edit",
        children: [
          {
            text: "文章 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "文章 6",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      { text: "文章 9", icon: "edit", link: "article9" },
      { text: "文章 10", icon: "edit", link: "article10" },
      "article11",
      "article12",
    ],
  },
  /* {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  }, */
]);
