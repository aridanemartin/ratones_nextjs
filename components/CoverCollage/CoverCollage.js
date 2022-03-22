import styles from "./CoverCollage.module.css";
import Image from "next/image/";
import Link from "next/link/";
import { useState } from "react";
import ModalCover from "@components/ModalCover/ModalCover";

export default function CoverCollage(props) {
  const {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  } = props;

  const [modalImage, setModalImage] = useState(img2);
  const [modalOpen, setModalOpen] = useState(false);

  function handleModalState(){
    setModalOpen(!modalOpen);
  }

  return (
    <div className={styles.coverCollageWrapper}>
      <ModalCover 
      image={modalImage} 
      open={modalOpen}
      />

      <button onClick={() => {setModalImage(img1); handleModalState();}}>
        <a className={styles.singleCover}>
          <Image src={img1} layout="fill" objectFit="cover" />
        </a>
      </button>
      <Link href="/">
        <a className={styles.singleCover}>
          <Image src={modalImage} layout="fill" objectFit="cover" />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.singleCover}>
          <Image src={img3} layout="fill" objectFit="cover" />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.singleCover}>
          <Image src={img4} layout="fill" objectFit="cover" />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.singleCover}>
          <Image src={img5} layout="fill" objectFit="cover" />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.singleCover}>
          <Image src={img6} layout="fill" objectFit="cover" />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.singleCover}>
          <Image src={img7} layout="fill" objectFit="cover" />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.singleCover}>
          <Image src={img8} layout="fill" objectFit="cover" />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.singleCover}>
          <Image src={img9} layout="fill" objectFit="cover" />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.singleCover}>
          <Image src={img10} layout="fill" objectFit="cover" />
        </a>
      </Link>
    </div>
  );
}
