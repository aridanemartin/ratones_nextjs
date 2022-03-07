import styles from './SocialBanner.module.css';
import Link from 'next/link';
import Image from 'next/image';

import Instagram from '../../public/images/instagram.webp';
import Facebook from '../../public/images/facebook.webp';
import youtube from '../../public/images/youtube.png';
import vimeo from '../../public/images/vimeo.png';
import linkedin from '../../public/images/linkedin.png';


const SocialBanner = () => {
    return ( 
        <div className={styles.socialBannerWrap}>
            <div className={styles.socialBanner}>
                <div className={styles.socialBannerLinkWrap}>
                    <Link 
                    href="https://www.linkedin.com/in/v%C3%ADctor-mart%C3%ADnez-galeote-14b6821a4/?originalSubdomain=es"
                    >
                        <a className={styles.socialBannerLink} target="_blank">
                            <Image 
                            src={linkedin}
                            layout="fill"
                            objectFit="contain"
                            // maxWidth={40}
                            // height={40}
                            className={styles.socialBannerLink}
                            alt="Victor Martinez - Website"
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
                            layout="fill"
                            objectFit="contain"
                            // maxWidth={40}
                            // height={40}
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
                            src={youtube}
                            layout="fill"
                            objectFit="contain"
                            // maxWidth={40}
                            // height={40}
                            className={styles.socialBannerLink}
                            alt="Victor Martinez - Website"
                            />
                        </a>       
                    </Link>
                </div>
                <div className={styles.socialBannerLinkWrap}>
                    <Link 
                    href="https://www.instagram.com/ratonesroom/"
                    >
                        <a className={styles.socialBannerLink} target="_blank">
                            <Image 
                            src={Instagram}
                            layout="fill"
                            objectFit="contain"
                            // maxWidth={35}
                            // height={35}
                            className={styles.socialBannerLink}
                            alt="Ratone's Room - Instagram"
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
                            src={vimeo}
                            layout="fill"
                            objectFit="contain"
                            // maxWidth={40}
                            // height={40}
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