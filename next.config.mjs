/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/api/articles/[slug]/views": [
        "./data/article-views.json",
      ],
      "/api/send-emails": [
        "./src/lib/content/**/*",
      ],
    },
  },
};

export default nextConfig;
