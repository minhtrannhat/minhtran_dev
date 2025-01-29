import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
//@ts-expect-error
import pkg from "@vinxi/plugin-mdx";
import { blogPostsPlugin } from "./build-helpers/blogPostsPlugin";
import remarkFrontmatter from "remark-frontmatter";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import { mdxPrism } from "./build-helpers/mdxPrism";
import remarkToc from "remark-toc";

const { default: mdx } = pkg;
export default defineConfig({
	extensions: ["mdx", "md"],
	vite: {
		plugins: [
			tailwindcss(),
			mdx.withImports({})({
				remarkPlugins: [remarkFrontmatter, remarkToc],
				rehypePlugins: [rehypeMdxCodeProps, mdxPrism],
				jsx: true,
				jsxImportSource: "solid-js",
				providerImportSource: "solid-mdx",
			}),
			blogPostsPlugin(),
		],
		build: {
			target: "esnext",
		},
	},
	server: {
		prerender: {
			crawlLinks: true,
		},
	},
});
