import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { PluginOptions } from "@easyops-cn/docusaurus-search-local";

const config: Config = {
  title: "Fetch Client",
  tagline: "REST API testing without leaving VS Code 🚀",
  favicon: "img/fetch-client.png",
  future: {
    v4: false,
  },
  url: "https://fetchclient.github.io",
  baseUrl: "/",
  organizationName: "fetchclient",
  projectName: "fetchclient.github.io",
  onBrokenLinks: "throw",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  trailingSlash: false,
  themes: [
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {PluginOptions} */
      {
        hashed: true,
        language: ["en"],
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/fetchclient/fetchclient.github.io/tree/main/",
        },
        blog: {
          blogSidebarCount: "ALL",
          postsPerPage: "ALL",
          showReadingTime: true,
          editUrl:
            "https://github.com/fetchclient/fetchclient.github.io/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: "img/fetch-client.png",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Fetch Client",
      style: "dark",
      logo: {
        alt: "Fetch Client Logo",
        src: "img/fetch-client.png",
      },
      items: [
        {
          label: "Documentation",
          position: "left",
          items: [
            {
              type: "docSidebar",
              sidebarId: "extensionSidebar",
              label: "Fetch Client Extension",
            },
            {
              type: "docSidebar",
              sidebarId: "cliSidebar",
              label: "Fetch Client CLI",
            },
          ],
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://ganesan-chandran.github.io/",
          position: "right",
          className: "header-author-link",
          "aria-label": "Author",
        },
        {
          href: "https://github.com/Ganesan-Chandran/vscode-fetch-client",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://ganesan-chandran.github.io/" target="_blank" rel="noopener noreferrer">Ganesan Chandran</a>.<br/><br/>Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    markdown: {
      mermaid: true,
      hooks: {
        onBrokenMarkdownLinks: "warn",
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
