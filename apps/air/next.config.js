/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    domains: ['www.nbc.com', 'encrypted-tbn0.gstatic.com'],
  },
};

module.exports = nextConfig
