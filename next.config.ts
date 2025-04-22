/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yourdomain.com'], // Add image domains if using external images
  },
  experimental: {
    serverActions: true, // Optional, if you're using server actions
  },
}

module.exports = nextConfig