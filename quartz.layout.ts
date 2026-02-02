import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.RecentNotes({ title: "Recent", showTags: false, limit: 5 })
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/hersh-gupta/tldr-responsible-ai",
      "Bluesky": "https://bsky.app/profile/hershgupta.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.AdditionalMeta(),
    Component.TagList()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({
      sortFn: (a, b) => {
        // Folders first, then files
        if (!a.file && !b.file) {
          // Both folders: sort alphabetically
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        if (a.file && b.file) {
          // Both files: sort by date (newest first), then alphabetically
          // Note: Quartz maps frontmatter 'date' to 'created'
          const dateA = a.file?.frontmatter?.created
            ? new Date(a.file.frontmatter.created as string).getTime()
            : 0
          const dateB = b.file?.frontmatter?.created
            ? new Date(b.file.frontmatter.created as string).getTime()
            : 0
          if (dateA !== dateB) {
            return dateB - dateA // Descending (newest first)
          }
          return a.displayName.localeCompare(b.displayName)
        }
        // Folders before files
        return a.file ? 1 : -1
      },
      mapFn: (node) => {
        // dont change name of root node
        if (node.depth > 0) {
          // set emoji for file/folder
          if (node.file) {
            node.displayName = "📄 " + node.displayName
          } else {
            node.displayName = "📁 " + node.displayName
          }
        }
      },
      order: ["filter", "sort", "map"], // Sort before adding emojis
      folderDefaultState: "collapsed"
    }),
  ],
  right: [
    /* Component.Graph(), */
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks()
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.AdditionalMeta(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [],
}
