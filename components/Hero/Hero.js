import HeroLogo from "@components/HeroLogo/HeroLogo";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = ({ logo, image, title }) => {
  return (
    <div className={styles.mainTitleWrapper}>
      <div className={styles.bgWrap}>
        <Image
          alt="Background image"
          src={image}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      {logo && <HeroLogo image={logo} />}
      <h1 className={styles.mainTitle}>{title}</h1>
    </div>
  );
};

export default Hero;
