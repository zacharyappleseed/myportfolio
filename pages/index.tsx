import Head from 'next/head'
import Html from 'next/head'
import GoogleFontsComp from './components/FontsComp'
import MainContent from './components/MainContent'



export default function Home() {
  return (
    <>
      <Head>
        <>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <title>Zachary Pagliaro</title>
        </>
      </Head>
      <body className="bg-body text-white font-poppins pb-12">
        <MainContent />
        <GoogleFontsComp />
      </body>
    </>
  )
}
