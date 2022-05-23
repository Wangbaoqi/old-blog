module.exports = {
  siteUrl: 'https://wangbaoqi.tech',
  generateRobotsTxt: true, // (optional)
  // ...other options,
  exclude: ['/sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://wangbaoqi.tech/sitemap.xml', // <==== Add here
    ],
  },
}