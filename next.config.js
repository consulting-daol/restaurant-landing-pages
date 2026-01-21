/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  transpilePackages: ['framer-motion'],
}

module.exports = nextConfig
