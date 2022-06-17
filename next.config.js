
const securityHeaders = [
  
  {
    key: 'Content-Security-Policy',
    value: `frame-ancestors 'self'`
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
]
module.exports = {
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts', 'config'],
  },
  images: {
    domains: ['media.wangbaoqi.tech'],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {

    // if (!isServer) {
    //   config.resolve.fallback.fs = false;
    // }

    return config
  },
}