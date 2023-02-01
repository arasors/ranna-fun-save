/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['flagcdn.com','images.unsplash.com', 'firebasestorage.googleapis.com']
  },
  resolve: {
    fallback: {
      "fs": false
    }
  },
  outDir: 'out',
  buildDir: 'build',
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  env: {
  },
  experimental: {
    images: { allowFutureImage: true, unoptimized : false },
    runtime: 'experimental-edge'
  },
  trailingSlash: true,
  future: { webpack5: true }
}

module.exports = nextConfig
