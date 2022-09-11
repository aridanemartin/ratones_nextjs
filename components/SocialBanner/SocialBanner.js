import styles from "./SocialBanner.module.css";
import Link from "next/link";
import Image from "next/image";

import Instagram from "../../public/images/icons/instagram.webp";
import Facebook from "../../public/images/icons/facebook.webp";
import vimeo from "../../public/images/icons/vimeo.webp";
import youtube from "../../public/images/icons/youtube.webp";

const SocialBanner = () => {
  return (
    <div className={styles.socialBannerWrap}>
      <div className={styles.socialBanner}>
        <div className={styles.socialBannerLinkWrap}>
          <Link href="https://www.instagram.com/ratonesroom/">
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
          <Link href="https://www.facebook.com/ratonesroom/">
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
          <Link href="https://www.youtube.com/channel/UCjOzjLGy6SeUs9VW2JJAQUA">
            <a className={styles.socialBannerLink} target="_blank">
              <Image
                src={youtube}
                layout="fill"
                objectFit="contain"
                // maxWidth={40}
                // height={40}
                className={styles.socialBannerLink}
                alt="Victor Martinez - Youtube"
              />
            </a>
          </Link>
        </div>
        <div className={styles.socialBannerLinkWrap}>
          <Link href="https://vimeo.com/ratonesroom">
            <a className={styles.socialBannerLink} target="_blank">
              <Image
                src={vimeo}
                layout="fill"
                objectFit="contain"
                // maxWidth={40}
                // height={40}
                className={styles.socialBannerLink}
                alt="Victor Martinez - Vimeo"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialBanner;
