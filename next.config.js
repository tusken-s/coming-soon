/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure SWC (Speedy Web Compiler)
  compiler: {
    // Enable all SWC optimizations
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Ensure images from external domains can be optimized
  images: {
    domains: ['tuskens.com'],
  },
  // Handle redirects for old routes if needed
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;