import Image from "next/image";
import styles from "@styles/Servicios.module.css";

// Images
import grabacion from "../../public/images/grabacion.png";
import audiovisuales from "../../public/images/audiovisuales.png";
import mezcla from "../../public/images/mezcla.png";
import produccion from "../../public/images/produccion.png";
import Link from "next/link";

const Servicios = () => {
    return ( 
        <>  
            <div className={styles.serviciosContainer}>
                <div className={styles.servicio + ' ' +styles.servicio1}>
                    <div className={styles.servicioImage}>
                        <Image
                            src={produccion}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h2>Produccion Musical</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci sint quisquam quo sed dolorem est doloremque aliquam dignissimos ad cum pariatur eum placeat, exercitationem harum eaque blanditiis dicta minus!
                    Quos sit odio cumque dolores, aperiam asperiores possimus?
                    </p>
                    <Link href="/">
                        <a>Más Información</a>
                    </Link>
                </div>
                <div className={styles.servicio + ' ' + styles.servicio2}>
                    <div className={styles.servicioImage}>
                        <Image
                            src={grabacion}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h2>Grabacion de guitarras</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci sint quisquam quo sed dolorem est doloremque aliquam dignissimos ad cum pariatur eum placeat, exercitationem harum eaque blanditiis dicta minus!
                    Quos sit odio cumque dolores, aperiam asperiores possimus?
                    </p>
                    <Link href="/">
                        <a>Más Información</a>
                    </Link>
                </div>
                <div className={styles.servicio + ' ' + styles.servicio3}>
                    <div className={styles.servicioImage}>
                        <Image
                            src={audiovisuales}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h2>Musica para Audiovisuales</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci sint quisquam quo sed dolorem est doloremque aliquam dignissimos ad cum pariatur eum placeat, exercitationem harum eaque blanditiis dicta minus!
                    Quos sit odio cumque dolores, aperiam asperiores possimus?
                    </p>
                    <Link href="/">
                        <a>Más Información</a>
                    </Link>
                </div>
                <div className={styles.servicio + ' ' + styles.servicio4}>
                    <div className={styles.servicioImage}>
                        <Image
                            src={mezcla}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h2>Mezcla y Master</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci sint quisquam quo sed dolorem est doloremque aliquam dignissimos ad cum pariatur eum placeat, exercitationem harum eaque blanditiis dicta minus!
                    Quos sit odio cumque dolores, aperiam asperiores possimus?
                    </p>
                    <Link href="/">
                        <a>Más Información</a>
                    </Link>   
                </div>
            </div>
        </>
    );
}

export default Servicios;