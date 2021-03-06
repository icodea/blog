import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://www.icodea.github.io",

  author: {
    name: "iCode",
    url: "https://www.icodeu.icu",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "icodea/icodea.github.io",

  docsDir: "demo/src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      // Baidu: "https://example.com",
      GitHub: "https://github.com/icodea",
      Gmail: "https://icodexu@gmail.com",
      Wechat: "https://example.com",
      QQ: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "https://icodexu@icloud.com",
      // Evernote: "https://example.com",
      Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      
      Gitlab: "https://example.com",
      Instagram: "https://example.com",
      Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // Qzone: "https://example.com",
      Reddit: "https://example.com",
      // Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: "Default footer",

      displayFooter: true,

      blog: {
        description: "A FrontEnd programmer",
        intro: "/intro.html",
      },
    },

    /**
     * Chinese locale config
     */
    /* "/zh/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: "????????????",

      displayFooter: true,

      blog: {
        description: "?????????????????????",
        intro: "/zh/intro.html",
      },
    }, */
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/zh/guide/encrypt.html": ["1234"],
    },
  },

  themeColor: {
      VeryPeri: "#6667AB",
      pink: "#F58E9D",
      green: "#44B5A9",
      pure: "#1B41B2",
      purple: "#F7E00D",
      
      //green: "#91A8D0",
      //orange: "#F7CAC9",
      //puregreen: "#039472",
    },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using giscus
       */
      provider: "Giscus",
      repo: "icodea/blog",
      repoId: "R_kgDOHcWQIw",
      category: "Announcements",
      categoryId: "DIC_kwDOHcWQI84CPcj9",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },

    
  },
});
