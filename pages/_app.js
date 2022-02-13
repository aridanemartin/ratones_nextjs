import '../styles/globals.css'
import Head from 'next/head';
import { motion } from 'framer-motion';
import Nav from '@components/Nav/Nav';
import Layout from '@components/Layout/Layout';

function MyApp({ Component, pageProps, router }) {
  return (
  <>
    <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
    </Head>
    <motion.div 
    key={router.route}
    initial="pageInitial" 
    animate="pageAnimate"
    variants={{ 
        pageInitial: {
            opacity: 0
        },
        pageAnimate: {
            opacity: 1
        }
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  </>
  
  )
}

export default MyApp
