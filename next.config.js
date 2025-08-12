/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir is no longer experimental in Next.js 14
  },
  images: {
    domains: ['images.unsplash.com'],
    // Better mobile handling
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enhanced mobile development configuration
  webpack: (config, { dev, isServer }) => {
    // Add GLSL support
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    });

    // Enhanced mobile development fixes
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.git', '**/.next'],
      }
      
      // Better handling for mobile device simulation
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }

      // Mobile simulation optimizations
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            mobile: {
              test: /[\\/]components[\\/]MobileDevHelper/,
              name: 'mobile-helper',
              chunks: 'all',
              priority: 10,
            },
          },
        },
      }
    }

    return config;
  },
  // Mobile-friendly settings
  poweredByHeader: false,
  compress: true,
  // Enhanced mobile development
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Mobile-specific headers
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  // Better mobile handling
  async rewrites() {
    return [
      {
        source: '/mobile-dev',
        destination: '/',
      },
      // Asset fallback for mobile simulation
      {
        source: '/:path*',
        destination: '/:path*',
        has: [
          {
            type: 'header',
            key: 'user-agent',
            value: '.*Mobile.*',
          },
        ],
      },
    ]
  },
  // Asset optimization for mobile
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : undefined,
  // Better error handling for mobile
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig
