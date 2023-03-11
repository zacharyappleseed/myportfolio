import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import TopBarNav from './components/TopBarNav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBarNav />
      <Component {...pageProps} />
    </>
  )
}
