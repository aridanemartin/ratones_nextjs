import Hero from '@components/Hero/Hero'
import PageLayout from '@components/PageLayout/Layout'
import Pasos from '@components/Pasos/Pasos'
import SocialBanner from '@components/SocialBanner/SocialBanner'
import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation';
import TextBlock from '@components/TextBlock/TextBlock'
import Servicios from '@components/Servicios/Servicios'
import CoverSlider from '@components/CoverSlider/CoverSlider'
import Banner from '@components/Banner/Banner'
import InfiniteCarrousel from '@components/InfiniteCarrousel/InfiniteCarrousel'
import Footer from '@components/Footer/Footer'


export default function Home() {
  let { t } = useTranslation();

  return (
    <div className={styles.container}>
        <Hero/>
        <SocialBanner/>
        <PageLayout>       
        <TextBlock 
                title1={t('index:introTitle1')}
                title2={t('index:introTitle2')}
                text1={t('index:introText1')}
                text2={t('index:introText2')}
                text3={t('index:introText3')}
        />
        <Pasos/>
        <TextBlock 
                title1={t('index:serviciosTitle1')}
                text1={t('index:serviciosText1')}
                description={t('index:serviciosDescription')}
        />
        <Servicios/>
        <TextBlock
          title1={t('index:grabacionesTitle')}
          description={t('index:grabacionesDescription')}
          text1={t('index:grabacionesText1')}
        />
        <CoverSlider/>  
        </PageLayout> 
        <Banner
          text={t('index:BANNER.text')}
          buttonText={t('index:BANNER.buttonText')}
          link="/"
        />
        
        <InfiniteCarrousel
          text1={t('index:CARROUSEL.text1')}
          desc1={t('index:CARROUSEL.desc1')}
          grupo1={t('index:CARROUSEL.grupo1')}
          lugar1={t('index:CARROUSEL.lugar1')}
          text2={t('index:CARROUSEL.text2')}
          desc2={t('index:CARROUSEL.desc2')}
          grupo2={t('index:CARROUSEL.grupo2')}
          lugar2={t('index:CARROUSEL.lugar2')}
          text3={t('index:CARROUSEL.text3')}
          desc3={t('index:CARROUSEL.desc3')}
          grupo3={t('index:CARROUSEL.grupo3')}
          lugar3={t('index:CARROUSEL.lugar3')}
          text4={t('index:CARROUSEL.text4')}
          desc4={t('index:CARROUSEL.desc4')}
          grupo4={t('index:CARROUSEL.grupo4')}
          lugar4={t('index:CARROUSEL.lugar4')}          
        />
        <Footer/>
        
    </div>
  )
}
