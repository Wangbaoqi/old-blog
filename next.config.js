module.exports = {
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  
  webpack: (config, { dev, isServer }) => {

    // if (!isServer) {
    //   config.resolve.fallback.fs = false;
    // }

    return config
  },
}