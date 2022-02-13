import Hero from '@components/Hero/Hero'
import PageLayout from '@components/PageLayout/Layout'
import Pasos from '@components/Pasos/Pasos'
import SocialBanner from '@components/SocialBanner/SocialBanner'
import styles from '../styles/Home.module.css'
import useTranslation from 'next-translate/useTranslation';
import TextBlock from '@components/TextBlock/TextBlock'


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

        </PageLayout>      
    </div>
  )
}
