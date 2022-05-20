import { Footer, HeaderWrapper, Header  } from '@components/layouts';
import Search from "@components/search/search";
import SEO from '@components/seo/index';

export default function Layout({ children, type, title, description }) {
  return (
    <>
      <SEO title={title} description={description}/>
      <div className="relative min-h-screen">
        <Header />

        <HeaderWrapper type={ type }/>
        <main className='max-w-6xl mx-auto lg:px-5'>{children}</main>
        <Search />
        <Footer />
      </div>
    </>
  )
}
