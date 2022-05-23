import { getServerSideSitemap } from 'next-sitemap';
import fs from 'fs';


export const getServerSideProps = async (ctx) => {

  const baseUrl = 'http://localhost:3000'

  // const staticPages = fs
  //   .readdirSync("pages")
  //   .filter((staticPage) => {
  //     return ![
  //       "_app.js",
  //       "_document.js",
  //       "_error.js",
  //       "sitemap.xml.js",
  //     ].includes(staticPage);
  //   })
  //   .map((staticPagePath) => {
  //     return `${baseUrl}/${staticPagePath}`;
  //   });
  
  // console.log(staticPages, 'DD');
  
  const fields = [
    {
      loc: 'https://www.wangbaoqi.tech/', // Absolute url
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://www.wangbaoqi.tech/category', // Absolute url
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://www.wangbaoqi.tech/algorithm', // Absolute url
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://www.wangbaoqi.tech/posts/javaScript/this', // Absolute url
      lastmod: new Date().toISOString(),
    },
  ]
  return getServerSideSitemap(ctx, fields)
}
export default () => {};