import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/card-icon.png" />
        <title>Card Application</title>
        <meta name="description" content="The app should contain cards, each with different numbers that will be randomly generated." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
