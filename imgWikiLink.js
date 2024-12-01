/**
 * A slightly modified and debugged version of this library: https://github.com/ChildishhAlbino/remark-obsidian-img
 * Credits and thanks for this go to Connor (https://github.com/ChildishhAlbino)
 * */

import { visit } from "unist-util-visit";
export default function remarkObsidianImg({ absolutePrefix, relativePathResolver }) {
	if (!absolutePrefix && !relativePathResolver) {
		throw Error("You must supply one path method.");
	}

	return (tree, file) => {
		visit(tree, "paragraph", (node) => {
			const matches = node.children[0].value?.match(/!\[\[(.*\..*)\]\]/);
			// console.log("eeee", matches);
			if (!matches) {
				return;
			}
			// console.log("bruhh", matches[0]);
			const imageSrc = matches[1];
			node.type = "image";
			node.url = "/notes/" + getPath(absolutePrefix, relativePathResolver, { filePath: file.history[0], cwd: file.cwd }, imageSrc);
			// console.log(node.url);
			node.alt = imageSrc;
		});
	};
}

function getPath(absolutePrefix, relativePathResolver, fileDetails, imageSrc) {
	if (absolutePrefix) {
		return `${absolutePrefix}/${imageSrc}`;
	}
	return relativePathResolver({ fileDetails, imageSrc });
}
