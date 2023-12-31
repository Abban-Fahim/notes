import { remarkWikiLink } from "@portaljs/remark-wiki-link";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
// import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";
// import GithubSlugger from "github-slugger";
import wikiLinkPlugin from "remark-wiki-link";
import macros from "./preamble.json";
import remarkTextr from "remark-textr";
import ImgWikiLink from "./imgWikiLink";

const slugify = (string) => {
	return string
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-/\.]+/g, "")
		.replace(".md", "");
};

const replaceWaypoints = (string) => {
	return string.replace("%% Begin Waypoint %%", " ").replace("%% End Waypoint %%", " ");
};

const imgPathResolve = ({ fileDetails: { filePath, cwd }, imageSrc }) => {
	console.log(filePath);
	const backDir = filePath.split("\\").reverse().indexOf("src") - 3;
	let fileStr = "";
	for (let i = 0; i < backDir; i++) {
		fileStr += "../";
	}
	return fileStr + imageSrc;
};

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [
			remarkMath,
			[
				wikiLinkPlugin,
				{
					pageResolver: (slug) => {
						return ["/notes/" + slugify(slug)];
					},
					hrefTemplate: (slug) => {
						return slug;
					},
					aliasDivider: "|",
				},
			],
			[
				ImgWikiLink,
				{
					relativePathResolver: imgPathResolve,
				},
			],
			[remarkTextr, { plugins: [replaceWaypoints] }],
		],
		rehypePlugins: [
			[
				rehypeKatex,
				{
					macros,
				},
			],
		],
	},
});
