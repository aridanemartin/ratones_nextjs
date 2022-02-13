import styles from '@styles/TextBlock.module.css';

const TextBlock = (props) => {

    
    return ( 
        <>
            <h2 className={styles.mainTitle}>{props.title1}&nbsp;<strong>{props.title2}</strong></h2>
            <div className={styles.divider}></div>
            <p className={styles.mainDesc}>
                {props.text1}<br/><br/>
                {props.text2}<br/><br/>
                {props.text3}
            </p>
        </>

    );
}

export default TextBlock;