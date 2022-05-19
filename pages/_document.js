import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className='scroll-smooth'>
        <Head />
        <body className='bg-primary-bg text-primary-color font-wotfard text-bs text-bs text-tiny '>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
