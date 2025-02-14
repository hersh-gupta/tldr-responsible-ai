import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "📖 tl;dr Responsible AI",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
/*     analytics: {
      provider: "plausible",
    }, */
    locale: "en-US",
    baseUrl: "hersh-gupta.github.io/tldr-responsible-ai",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "DM Sans",
        body: "DM Sans",
        code: "DM Mono",
      },
      colors: {
        lightMode: {
          light: "#fbfbf8",
          lightgray: "#e8eae3",
          gray: "#b2b5ab",
          darkgray: "#4b4f44",
          dark: "#272a22",
          secondary: "#147B58",      // The requested teal-green
          tertiary: "#45997C",       // Lighter teal that complements secondary
          highlight: "rgba(20, 123, 88, 0.15)",
          textHighlight: "#45997C88",
        },
        darkMode: {
          light: "#1a1c16",
          lightgray: "#272a22",
          gray: "#6b7265",
          darkgray: "#d4d7cf",
          dark: "#f4f5f1",
          secondary: "#45997C",      // Lighter version of the teal for dark mode
          tertiary: "#147B58",       // Original teal as accent
          highlight: "rgba(69, 153, 124, 0.15)",
          textHighlight: "#147B5888",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
