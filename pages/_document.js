import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className='scroll-smooth'>
        <Head />
          
        <body className='dark:bg-primary-bg dark:text-primary-color font-Fira text-bs text-bs text-tiny '>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
