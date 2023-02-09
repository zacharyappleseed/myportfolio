import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'


export default function App({ Component, pageProps }: AppProps) {
  <Script src="listenscroll.js" />
  return <Component {...pageProps} />
}
