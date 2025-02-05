const getDynamicPagesRewrites = require("./getDynamicPagesRewrites.js");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const dynamicPagesRewrites = await getDynamicPagesRewrites();
    return [...dynamicPagesRewrites];
  },
};

module.exports = nextConfig;
