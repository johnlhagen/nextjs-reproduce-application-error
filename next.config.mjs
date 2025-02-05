/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/a",
        destination: "/_dynamic-pages/1",
      },
    ];
  },
};

export default nextConfig;
