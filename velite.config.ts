import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const computedFields = <T extends { path: string; title: string }>(
  data: T,
) => ({
  ...data,
  pathAsParams: data.path.split("/").slice(1).join("/"),
  slug: data.title.toLowerCase().replace(/ /g, "-"),
  id: parseInt(data.path.split("/").slice(-1)[0].replace(".mdx", "")),
});

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      image: s.string(),
      date: s.isodate(),
      author: s.string().max(99),
      tags: s.array(s.string()).optional(),
      published: s.boolean(),
      path: s.path(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "github-dark" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
