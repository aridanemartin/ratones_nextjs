import '../styles/globals.css'
import { motion } from 'framer-motion';
import Layout from '@components/Layout/Layout';

// swipper /// eslint-disable-next-line
// import "swiper/css/bundle";
import "@styles/swiperStyles.css";
import 'normalize.css/normalize.css';

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
    </motion.div>
  </>
  
  )
}

export default MyApp
