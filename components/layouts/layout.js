import { Footer, HeaderWrapper, Header  } from '@components/layouts';
import Search from "@components/search/search";

export default function Layout({ children, type }) {
  return (
    <>
      <div className="min-h-screen">
        <Header />

        <HeaderWrapper type={ type }/>
        <main className='max-w-6xl mx-auto lg:px-5'>{children}</main>
        <Search />
        <Footer />
      </div>
    </>
  )
}
