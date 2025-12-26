import { visit } from "unist-util-visit";
import type { Root } from "mdast";

/* eslint-disable @typescript-eslint/no-explicit-any */

const CJK_PATTERN =
  /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/;

const ALPHANUMERIC_PATTERN = /[a-zA-Z0-9]/;

function needsSpace(left: string, right: string): boolean {
  const leftChar = left[left.length - 1];
  const rightChar = right[0];

  const isLeftCJK = CJK_PATTERN.test(leftChar);
  const isRightCJK = CJK_PATTERN.test(rightChar);
  const isLeftAlpha = ALPHANUMERIC_PATTERN.test(leftChar);
  const isRightAlpha = ALPHANUMERIC_PATTERN.test(rightChar);

  if (isLeftAlpha && isRightCJK) return true;
  if (isLeftCJK && isRightAlpha) return true;

  return false;
}

export function remarkAutoSpace() {
  return (tree: Root) => {
    visit(tree, "text", (node: any) => {
      const text = node.value;
      if (!text || text.length < 2) return;

      const result: string[] = [];

      for (let i = 0; i < text.length - 1; i++) {
        const currentChar = text[i];
        const nextChar = text[i + 1];

        result.push(currentChar);

        if (needsSpace(currentChar, nextChar)) {
          result.push(" ");
        }
      }

      result.push(text[text.length - 1]);

      node.value = result.join("");
    });
  };
}
