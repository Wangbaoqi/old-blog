import { Footer, HeaderWrapper, Header  } from '@components/layouts';

export default function Layout({ children, type }) {
  return (
    <>
      <div className="min-h-screen">
        <Header />

        <HeaderWrapper type={ type }/>
        <main className='max-w-6xl mx-auto lg:px-5'>{children}</main>
      </div>
      <Footer />
    </>
  )
}
