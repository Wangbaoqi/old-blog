
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux'
import store from 'store/store';
import { event } from "nextjs-google-analytics";


import '@styles/index.css';
import '@styles/global.css';
import '@styles/codeStyle.css';


export function reportWebVitals({ id, name, label, value }) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store} >
      <ThemeProvider attribute="class" defaultTheme='dark' enableSystem={true} enableColorScheme >
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
   
  )
}
