/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: "/rewrite-to-b", destination: "/b" }];
  },
};

export default nextConfig;
