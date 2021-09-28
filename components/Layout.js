import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Footer from './Footer';
import NavigationBar from './NavBar';

export default function Layout({ children }) {
  return (
    <>
        <Head>
          <NextSeo 
            title="Carbon Zero - MCKL Service Learning"
          />
            <title>Carbon Zero - MCKL Service Learning</title>
            <meta property="og:title" content="Carbon Zero - MCKL Service Learning" />
            <meta property="og:description" content="Carbon Zero is a service learning project carried out by students of MCKL to raise awareness on carbon footprint." />
            <meta property="og:image" content="https://i.ibb.co/ZxgwW14/ogimage.png" />
            <meta property="description" content="Carbon Zero is a service learning project carried out by students of MCKL to raise awareness on carbon footprint." />
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