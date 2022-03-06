import styles from './Banner.module.css';
import Link from 'next/link';

export default function Banner(props) {
    return (
    <div className={styles.bannerWrap}>
        <h3 className={styles.bannerText}>{props.text}</h3>
        <Link href={props.link}>
            <a className={styles.button}>{props.buttonText}</a>
        </Link>
    </div>
    );
}
