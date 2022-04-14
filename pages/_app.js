import '../styles/globals.css'
import { motion } from 'framer-motion';
import Layout from '@components/Layout/Layout';
import Footer from '@components/Footer/Footer';



function MyApp({ Component, pageProps, router }) {

  return (
  <>
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
      <Footer />
    </motion.div>
  </>
  
  )
}

export default MyApp
