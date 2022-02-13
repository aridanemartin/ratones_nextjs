import styles from '@styles/Pasos.module.css';
import Image from 'next/image';

// images
import Paso1 from "../../public/images/talking2.jpg";
import Paso2 from "../../public/images/working.jpg";
import Paso3 from "../../public/images/listening1.jpg";

const Pasos = () => {
    return ( 
        <>
            
            <div className={styles.pasosWrapper}>
                <div className={styles.text1}> 
                    <h3 className={styles.title}>Primer Paso: <strong>Hablemos</strong></h3>
                    <p className={styles.text}>En primer lugar nos pondremos en contacto para que nos expliques que tienes en mente, estudiaremos tus necesidades y cerraremos un presupuesto personalizado.</p>
                </div>
                <div className={styles.image1}>
                    <Image
                        src={Paso1}
                        layout="fill"
                        objectFit="cover"
                        alt="Primer paso para grabar tu maqueta"
                    />
                </div>
                <div className={styles.text2}> 
                    <h3 className={styles.title}>Segundo Paso: <strong>¡A trabajar!</strong></h3>
                    <p className={styles.text}>En segundo lugar, comenzaremos a trabajar en tu proyecto. Te consultaremos cuantas veces haga falta y te enviaremos premixes para que con nuestra experiencia y tu feedback encontremos el sonido que buscas.</p>
                </div>
                <div className={styles.image2}>
                    <Image
                        src={Paso2}
                        layout="fill"
                        objectFit="cover"
                        alt="Primer paso para grabar tu maqueta"
                    />
                </div>
                <div className={styles.text3}> 
                    <h3 className={styles.title}>Tercer Paso: <strong>¡Disfruta!</strong></h3>
                    <p className={styles.text}>Ponte cómodo y !Disfruta del resultado! Recuerda que en Ratone's Room ofrecemos revisiones ilimitadas con tal de que encuentres el sonido que buscabas y acabes 100% satisfecho.</p>
                </div>  
                <div className={styles.image3}>                 
                    <Image
                        src={Paso3}
                        layout="fill"
                        objectFit="cover"
                        alt="Primer paso para grabar tu maqueta"
                    />
                </div> 
            </div>
        </>
    );
}

export default Pasos;