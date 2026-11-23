import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type { PluginOptions } from "@easyops-cn/docusaurus-search-local";

const config: Config = {
  title: "Fetch Client",
  tagline:
    "Free, open-source REST API testing, automation, and performance testing tool for VS Code.",
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
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "google-site-verification",
        content: "7YQ8fxwOerk4JrUmlS4vENvQG6hUlgxW0VlJIKH4kL4",
      },
    },
  ],
  clientModules: ["./src/clientModules/imageZoom.ts"],
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
          breadcrumbs: true,
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
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
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
          type: "docSidebar",
          sidebarId: "extensionSidebar",
          label: "Extension",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "cliSidebar",
          label: "CLI",
          position: "left",
        },
        {
          href: "https://ganesan-chandran.github.io/",
          position: "right",
          className: "header-author-link",
          "aria-label": "Author",
        },
        {
          href: "https://github.com/fetchclient/vscode-fetch-client",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          href: "https://ganesan-chandran.github.io/",
          label: "Author",
          position: "right",
          className: "navbar-mobile-only",
        },
        {
          href: "https://github.com/fetchclient/vscode-fetch-client",
          label: "GitHub",
          position: "right",
          className: "navbar-mobile-only",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Extension", to: "/docs/extension/introduction" },
            { label: "CLI", to: "/docs/cli/introduction" },
            { label: "What's new", to: "/blog" },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/fetchclient/vscode-fetch-client",
            },
            {
              label: "Report an issue",
              href: "https://github.com/fetchclient/vscode-fetch-client/issues",
            },
          ],
        },
        {
          title: "Get it",
          items: [
            {
              label: "VS Code Marketplace",
              href: "https://marketplace.visualstudio.com/items?itemName=GanesanChandran.fetch-client",
            },
            { label: "Credits", to: "/docs/credits" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://ganesan-chandran.github.io/" target="_blank" rel="noopener noreferrer">Ganesan Chandran</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "powershell", "json"],
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
