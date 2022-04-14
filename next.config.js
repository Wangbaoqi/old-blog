const { remarkMdxCodeMeta } = require('remark-mdx-code-meta')


const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkMdxCodeMeta
    ],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})



module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  
  webpack: (config, { dev, isServer }) => {

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config
  },
})