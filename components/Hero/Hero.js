import Image from 'next/image';
import HeroLogo from '../HeroLogo/HeroLogo';
import RatonesLogo from '../../public/images/logoLarge.png';  


import styles from './Hero.module.css';
import Completa from '../../public/images/cover1.jpg';

const Hero = () => {

    return ( 
        <>      
            <div className={styles.bgWrap}>
                <Image
                    
                    alt="Tagorock Mundo Vertical - Escuela de Escalada en Las Palmas de Gran Canaria / Climbing School in Las Palmas de Gran Canaria"
                    src={Completa}
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
            </div> 
            <div className={styles.heroLogoCentered}>
                <HeroLogo 
                image={RatonesLogo}
                maxWidth={40}
                minWidth={18}
                /> 
            </div>
        
        </>
    );
}

export default Hero;