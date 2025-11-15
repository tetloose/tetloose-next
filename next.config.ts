import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: { implementation: 'sass-embedded' },
  reactStrictMode: true,
  images: {
    deviceSizes: [480, 768, 1024, 1280, 1536],
    imageSizes: [320, 640, 1024, 1280]
  },
  async headers() {
    return [
      {
        source: '/api/:path*.json',
        headers: [
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }
        ]
      },
      {
        source: '/api/media/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      }
    ]
  },
  async rewrites() {
    return []
  }
}

export default nextConfig
