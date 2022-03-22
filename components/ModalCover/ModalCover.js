import styles from './ModalCover.module.css';

import Image from 'next/image'


export default function ModalCover({ image, open }) {

    
  return (
      <>
    {open &&
    <div className={styles.modalWrapper}>
        {image ? <div className={styles.modalImageWrapper}>
            <Image
                src={image}
                layout="fill"
                objectFit="cover"
            />
        </div> : ''}
    </div>
    }
    </>
  )
}
