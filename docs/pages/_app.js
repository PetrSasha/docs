import 'tailwindcss/tailwind.css'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head'
import {SessionProvider} from "next-auth/react"

function MyApp({ Component, pageProps:{session, ...pageProps} }) {
  return (
    <>
    <Head>
      <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
/>
    </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      

    </>
  )
  
}

export default MyApp
