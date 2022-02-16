require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `前端不好玩`,
    author: {
      name: `Nate Wang`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: [
      {
        twitter: `kylemathews`,

      }
    ],
    menuLinks:[
      {
        title: '首页',
        path: '/'
      },{
        title: '标签',
        path: '/tags/html'
      },{
        title: '归档',
        path: '/archive'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `1000`,
              icon: `<svg fill="var(--primary)" aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `autolink`,
              enableCustomId: true,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: true,
              elements: [`h1`, `h2`, `h3`, `h4`],
            },
          },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          // `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
        ],
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          loading: "eager",
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     queries: require("./src/utils/algolia-queries")
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-algolia-docsearch`,
    //   options: {
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY, // required
    //     indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // required
    //     inputSelector: "ALGOLIA_DOCUSEARCH_INPUT_SELCTOR", // required
    //     debug: false // (bool) Optional. Default `false`
    //   }
    // }
    `gatsby-plugin-react-helmet`,
  ],
}
