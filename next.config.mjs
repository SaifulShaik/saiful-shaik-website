/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Only use basePath in production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/saiful-shaik-website' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig; 