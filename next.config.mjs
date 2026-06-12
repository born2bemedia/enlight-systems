/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/api/articles/[slug]/views": [
        "./data/article-views.json",
      ],
    },
  },
};

export default nextConfig;
