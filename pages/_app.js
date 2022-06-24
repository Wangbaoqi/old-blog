import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux'
import store from 'store/store';
import { event } from "nextjs-google-analytics";

import '@docsearch/css';
import '@styles/index.css';
import '@styles/global.css';
import '@styles/codeStyle.css';


export function reportWebVitals(metric) {
  console.log(metric, 'metric');
  const { id, name, label, value } = metric;
  switch (metric.name) {
    case 'FCP':
      // handle FCP results
      break
    case 'LCP':
      // handle LCP results
      console.log(metric, 'LCP');
      break
    case 'CLS':
      // handle CLS results
      break
    case 'FID':
      // handle FID results
      break
    case 'TTFB':
      // handle TTFB results
      break
    default:
      break
  }
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

export default function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);
  useEffect(() => {
    setShowing(true);

    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.log('LCP candidate:', entry.startTime, entry);
      }
    }).observe({type: 'largest-contentful-paint', buffered: true});
  }, []);

  if (!showing) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>
  } else {
    return (
      <Provider store={store} >
        <ThemeProvider attribute="class" defaultTheme='dark' enableSystem={true} enableColorScheme >
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }


  
}
