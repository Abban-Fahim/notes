import rehypeKatex from "rehype-katex";
import rehypeMathjax from "rehype-mathjax";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const string = `
$$L = \\frac{1}{2} \\rho v^2 S C_L$$
`;

const file = await unified()
	.use(remarkParse)
	.use(remarkMath)
	.use(remarkRehype)
	.use(rehypeMathjax)
	.use(rehypeStringify)
	.process(string);

console.log(String(file));
