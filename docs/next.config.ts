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
  turbopack: {},
  devIndicators: { position: 'bottom-right' },
  transpilePackages: ['@litte/react'],
  // Fix for issue: `[webpack.cache.PackFileCacheStrategy] Serializing big strings`
  webpack: (config: { cache: { type: string } }) => {
    config.cache = { type: 'memory' }
    return config
  },
}

export default nextConfig
