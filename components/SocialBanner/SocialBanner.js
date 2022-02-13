import styles from './SocialBanner.module.css';
import Link from 'next/link';
import Image from 'next/image';

import Instagram from '../../public/images/instagram.webp';
import Facebook from '../../public/images/facebook.webp';
import Web from '../../public/images/corchea.png'

const SocialBanner = () => {
    return ( 
        <div className={styles.socialBannerWrap}>
            <div className={styles.socialBanner}>
                <div className={styles.socialBannerLinkWrap}>
                    <Link 
                    href="https://www.instagram.com/ratonesroom/"
                    >
                        <a className={styles.socialBannerLink} target="_blank">
                            <Image 
                            src={Instagram}
                            layout="fixed"
                            width={35}
                            height={35}
                            className={styles.socialBannerLink}
                            alt="Ratone's Room - Instagram"
                            />
                        </a>       
                    </Link>
                </div>
                <div className={styles.socialBannerLinkWrap}>
                    <Link 
                    href="https://www.facebook.com/ratonesroom/"
                    >
                        <a className={styles.socialBannerLink} target="_blank">
                            <Image 
                            src={Facebook}
                            layout="fixed"
                            width={40}
                            height={40}
                            alt="Ratone's Room - Facebook"
                            />
                        </a>       
                    </Link>
                </div>
                <div className={styles.socialBannerLinkWrap}>
                    <Link 
                    href="https://www.victormartinezgaleote.com/"
                    >
                        <a className={styles.socialBannerLink} target="_blank">
                            <Image 
                            src={Web}
                            layout="fixed"
                            width={40}
                            height={40}
                            className={styles.socialBannerLink}
                            alt="Victor Martinez - Website"
                            />
                        </a>       
                    </Link>
                </div>
                
                
            </div>
        </div>

     );
}
 
export default SocialBanner;