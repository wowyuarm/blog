export interface BilingualContent {
  en: string;
  zh: string;
}

export function parseBilingualContent(
  markdown: string | undefined
): BilingualContent {
  const content = markdown || "";
  const separator = "<!-- zh-CN -->";
  const parts = content.split(separator);

  return {
    en: parts[0]?.trim() || "",
    zh: parts[1]?.trim() || "",
  };
}

export function hasChineseContent(content: string | undefined): boolean {
  if (!content) return false;
  return content.includes("<!-- zh-CN -->");
}

export function detectBrowserLanguage(): "en" | "zh-CN" {
  if (typeof window === "undefined") return "en";

  const browserLang =
    navigator.language ||
    (navigator as { userLanguage?: string }).userLanguage ||
    "en";

  if (browserLang.startsWith("zh") || browserLang.startsWith("CN")) {
    return "zh-CN";
  }

  return "en";
}
