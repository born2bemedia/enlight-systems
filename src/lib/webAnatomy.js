export const WEB_ANATOMY_ANALYZER_URL =
  "https://www.webanatomy.ai/landing-page-analyzer";

export function formatPageUrl(value) {
  const trimmed = (value || "").trim();
  if (!trimmed) return "";

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed.replace(/\/+$/, "");
  }

  const host = trimmed
    .replace(/^www\./i, "")
    .replace(/\/.*$/, "")
    .trim();

  return host ? `https://${host}` : "";
}

export function getWebAnatomyAnalyzerUrl(pageUrl) {
  const params = new URLSearchParams({ url: pageUrl });
  return `${WEB_ANATOMY_ANALYZER_URL}?${params.toString()}`;
}
