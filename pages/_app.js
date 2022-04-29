
import { ThemeProvider } from 'next-themes'

import '@styles/index.css';
import '@styles/global.css';

import '@styles/codeStyle.css';


export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={ true }>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
