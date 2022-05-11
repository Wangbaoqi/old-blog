
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux'

import store from 'store/store';

import '@styles/index.css';
import '@styles/global.css';
import '@styles/codeStyle.css';


export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
       <ThemeProvider attribute="class" enableSystem={ true }>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
   
  )
}
