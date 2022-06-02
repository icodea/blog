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
          {
            text: "HTML 01",
            icon: "html",
            link: "article1",
          },
          {
            text: "HTML 02",
            icon: "html",
            link: "article2",
          },
          {
            text: "HTML 03",
            icon: "html",
            link: "article3",
          },
        ],
      },
      {
        text: "CSS",
        icon: "css",
        prefix: "CSS/",
        children: [
          {
            text: "CSS 01",
            icon: "css",
            link: "article1",
          },
          {
            text: "CSS 02",
            icon: "css",
            link: "article2",
          },
          {
            text: "CSS 03",
            icon: "css",
            link: "article3",
          },
        ],
      },
      {
        text: "JavaScript",
        icon: "javascript",
        prefix: "JavaScript/",
        children: [
          {
            text: "JavaScript 01",
            icon: "javascript",
            link: "article1",
          },
          {
            text: "JavaScript 02",
            icon: "javascript",
            link: "article2",
          },
          {
            text: "JavaScript 03",
            icon: "javascript",
            link: "article3",
          },
        ],
      },
      {
        text: "Node.js",
        icon: "node",
        prefix: "Nodejs/",
        children: [
          {
            text: "Node.js 01",
            icon: "node",
            link: "article1",
          },
          {
            text: "Node.js 02",
            icon: "node",
            link: "article2",
          },
          {
            text: "Node.js 03",
            icon: "node",
            link: "article3",
          },
        ],
      },
      {
        text: "Vue.js",
        icon: "vue",
        prefix: "Vuejs/",
        children: [
          {
            text: "Vue.js 01",
            icon: "vue",
            link: "article1",
          },
          {
            text: "Vue.js 02",
            icon: "vue",
            link: "article2",
          },
          {
            text: "Vue.js 03",
            icon: "vue",
            link: "article3",
          },
        ],
      },
      {
        text: "TypeScript",
        icon: "typescript",
        prefix: "TypeScript/",
        children: [
          {
            text: "TypeScript 01",
            icon: "typescript",
            link: "article1",
          },
          {
            text: "TypeScript 02",
            icon: "typescript",
            link: "article2",
          },
          {
            text: "TypeScript 03",
            icon: "typescript",
            link: "article3",
          },
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
