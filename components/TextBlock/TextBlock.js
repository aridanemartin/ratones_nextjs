import styles from './TextBlock.module.css';

const TextBlock = (props) => {

    
    return ( 
        <>
            <div className={styles.textBlockContainer}>
                <h2 className={styles.mainTitle}>{props.title1}&nbsp;<strong>{props.title2}</strong></h2>
                <div className={styles.divider}></div>
                {props.description && <p className={styles.shortDescription}>{props.description}</p>}
                <p className={styles.mainDesc}>
                    {props.text1}<br/><br/>
                    {props.text2}<br/><br/>
                    {props.text3}
                </p>
            </div>
        </>

    );
}

export default TextBlock;