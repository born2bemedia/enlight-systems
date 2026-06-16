export const ARTICLE_SLUGS = [
  "marketing-automation-for-crypto-projects",
  "10-reasons-for-low-roi-in-crypto-marketing-common-pitfalls-to-avoid",
  "agile-budgeting-in-crypto-marketing-maximising-roi",
  "crypto-funnel-onboarding-optimization",
  "crypto-marketing-metrics-key-performance-indicators-for-success",
  "crypto-product-differentiation-how-to-stand-out-from-the-crowd",
  "navigating-compliance-in-crypto-marketing-a-practical-guide",
  "trust-reputation-in-crypto-marketing",
];

export function isArticleSlug(slug) {
  return ARTICLE_SLUGS.includes(slug);
}
