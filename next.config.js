const getDynamicPagesRewrites = require("./getDynamicPagesRewrites.js");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: "/rewrite-of-b", destination: "/b" }];
  },
};

module.exports = nextConfig;
