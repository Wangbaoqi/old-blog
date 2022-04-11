import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Header from './header'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen ">
        {/* <Alert preview={preview} /> */}
        <Header />
        
        <main className='max-w-screen-xl mx-auto'>{children}</main>
      </div>
      <Footer />
    </>
  )
}
