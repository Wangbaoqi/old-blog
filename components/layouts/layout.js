
import { Footer, HeaderWrapper } from '@components/layouts';


export default function Layout({ children, type }) {
  return (
    <>
      <div className="min-h-screen">
        <HeaderWrapper />

        <main className='max-w-screen-xl mx-auto'>{children}</main>
      </div>
      <Footer />
    </>
  )
}
