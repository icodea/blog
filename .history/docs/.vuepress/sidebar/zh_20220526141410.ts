import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/zh/": [
    "",
    "home",
    //"slide",
    /* {
      text: "如何使用",
      icon: "git",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    }, */
     {
      text: "Git",
      icon: "git",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    }, 
    {
      text: "macOS",
      icon: "chrome",
      prefix: "posts/",
      children: [
        {
          text: "文章 1-4",
          icon: "note",
          collapsable: true,
          prefix: "article/",
          children: ["article1", "article2", "article3", "article4"],
        },
        {
          text: "文章 5-12",
          icon: "note",
          children: [
            {
              text: "文章 5-8",
              icon: "note",
              collapsable: true,
              prefix: "article/",
              children: ["article5", "article6", "article7", "article8"],
            },
            {
              text: "文章 9-12",
              icon: "note",
              children: ["article9", "article10", "article11", "article12"],
            },
          ],
        },
      ],
    },
    {
      text: "Web 前端学习",
      icon: "vue",
      prefix: "webfront/",
      children: [
        {
          text: "HTML",
          icon: "html",
          collapsable: true,
          //prefix: "article/",
          children: ["article1", "article2", "article3", "article4"],
        },
        {
          text: "CSS",
          icon: "css",
          collapsable: true,
          //prefix: "article/",
          children: ["article1", "article2", "article3", "article4","article5", "article6", "article7", "article8"],
        },
        {
          text: "JavaScript",
          icon: "javascript",
          collapsable: true,
          children: [
            {
              text: "JavaScript 基础",
              icon: "javascript",
              collapsable: true,
              prefix: "article/",
              children: ["article5", "article6", "article7", "article8"],
            },
            {
              text: "JavaScript 进阶",
              icon: "javascript",
              collapsable: true,
              children: ["article9", "article10", "article11", "article12"],
            },
          ],
        },
        
      ],
    },
    {
      text: "操作系统",
      icon: "windows",
      prefix: "OS/",
      children: [
        {
          text: "文章 1-8",
          icon: "note",
          collapsable: true,
          //prefix: "article/",
          children: ["article1", "article2", "article3", "article4","article5", "article6", "article7", "article8"],
        },
        
      ],
    },
  ],
});
