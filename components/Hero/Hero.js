import Image from "next/image";
import HeroLogo from "../HeroLogo/HeroLogo";
import styles from "./Hero.module.css";

const Hero = (props) => {
  return (
    <div className={styles.mainTitleWrapper}>
      <div className={styles.bgWrap}>
        <Image
          alt="Background image"
          src={props.image}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <h1 className={styles.mainTitle}>{props.title}</h1>
    </div>
  );
};

export default Hero;
