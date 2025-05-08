import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: ['lucide-react'],
  eslint: {
    dirs: ['src'] // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  }
}

export default nextConfig
