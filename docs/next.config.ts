import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  cleanDistDir: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    unoptimized: true,
  },
  eslint: { ignoreDuringBuilds: true /* disable eslint on build */ },
  devIndicators: { position: 'bottom-right' },
}

export default nextConfig
