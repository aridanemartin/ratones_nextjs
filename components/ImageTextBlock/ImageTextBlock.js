import styles from './ImageTextBlock.module.css';
import Image from 'next/image';

const ImageTextBlock = ({ img, txt1, txt2 }) => {

  return (
    <div className={styles.blockWrapper}>
      <div className={styles.imageWrapper}>
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.textWrapper}>
        <p>
        {txt1}        
        </p>
        {txt2 &&
            <p>{txt2}</p>
        }
      </div>
    </div>
  );
};

export default ImageTextBlock;
