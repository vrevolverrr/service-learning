import Head from 'next/head';
import Footer from './Footer';
import NavigationBar from './NavBar';

export default function Layout({ children }) {
  return (
    <>
        <Head>
            <title>Service Learning</title>
            <meta name="description" content="Carbon Zero is a service learning project carried out by students of MCKL to raise awareness on carbon footprint." />
            <meta name="keywords" content="environment, carbon footprint, save the planet" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavigationBar />
        <main>{children}</main>
        <Footer/>
    </>
  )
}