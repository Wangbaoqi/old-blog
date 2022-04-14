import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className='scroll-smooth'>
        <Head>
          <title>Next.js Blog Example with</title>
        </Head>
        <body className='bg-white text-black dark:bg-primary-bg dark:text-primary-color font-sans text-base'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
