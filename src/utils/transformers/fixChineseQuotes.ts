import { visit } from "unist-util-visit";
import type { Root } from "mdast";

/* eslint-disable @typescript-eslint/no-explicit-any */

export function remarkFixChineseQuotes() {
  return (tree: Root) => {
    visit(tree, "text", (node: any) => {
      let text = node.value;

      text = text.replace(
        /\*\*(""|"|"|"|"|')([^*]*?)\1\*\*/g,
        (_match: string, quote: string, content: string) => {
          return `${quote}**${content}**${quote}`;
        }
      );

      text = text.replace(
        /(""|"|"|"|"|')([^*]*?)\1/g,
        (_match: string, quote: string, content: string) => {
          return `${quote}*${content}*${quote}`;
        }
      );

      node.value = text;
    });
  };
}
