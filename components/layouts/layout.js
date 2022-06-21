import { Footer, HeaderWrapper, Header  } from '@components/layouts';
import Search from "@components/search/search";
import SEO from '@components/seo/index';
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function Layout({ children, type, title, description, showFooter = true }) {
  return (
    <>
      <SEO title={title} description={description}/>
      <div className="relative min-h-screen">
        <Header />

        <HeaderWrapper type={ type }/>
        <main className='max-w-6xl mx-auto lg:px-5'>{children}</main>
        <Search />
        { showFooter ? <Footer /> : null }
        
      </div>
      <GoogleAnalytics strategy="lazyOnload"/>
    </>
  )
}
