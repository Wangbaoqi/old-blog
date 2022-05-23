import { getServerSideSitemap } from 'next-sitemap';


export const getServerSideProps = async (ctx) => {

  
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