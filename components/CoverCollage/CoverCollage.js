import React from 'react';
import styles from "./CoverCollage.module.css";
import Image from "next/image/";

import { useState } from "react";

import ModalCover from "@components/ModalCover/ModalCover";

export default function CoverCollage(props) {
  const { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } = props;

  const [modalImage, setModalImage] = useState(img5);
  const [modalOpen, setModalOpen] = useState(false);
 
  function handleModalState() {
    setModalOpen(!modalOpen);
  }

  return (

    <div className={styles.coverCollageWrapper}>
      
      <ModalCover image={modalImage} handleModalState={handleModalState} modalOpen={modalOpen}/>
      
      <a className={styles.singleCover}>
        <Image
          onClick={() => {
            setModalImage(img1);
            handleModalState();
          }}
          src={img1}
          layout="fill"
          objectFit="cover"
        />
      </a>
      <a className={styles.singleCover}>
        <Image
          onClick={() => {
            setModalImage(img2);
            handleModalState();
          }}
          src={img2}
          layout="fill"
          objectFit="cover"
        />
      </a>
      <a className={styles.singleCover}>
        <Image
          onClick={() => {
            setModalImage(img3);
            handleModalState();
          }}
          src={img3}
          layout="fill"
          objectFit="cover"
        />
      </a>
      <a className={styles.singleCover}>
        <Image
          onClick={() => {
            setModalImage(img4);
            handleModalState();
          }}
          src={img4}
          layout="fill"
          objectFit="cover"
        />
      </a>
      <a className={styles.singleCover}>
        <Image
          onClick={() => {
            setModalImage(img5);
            handleModalState();
          }}
          src={img5}
          layout="fill"
          objectFit="cover"
        />
      </a>
      <a className={styles.singleCover}>
        <Image
          onClick={() => {
            setModalImage(img6);
            handleModalState();
          }}
          src={img6}
          layout="fill"
          objectFit="cover"
        />
      </a>
      <a className={styles.singleCover}>
        <Image
          onClick={() => {
            setModalImage(img7);
            handleModalState();
          }}
          src={img7}
          layout="fill"
          objectFit="cover"
        />
      </a>
      <a className={styles.singleCover}>
        <Image
          onClick={() => {
            setModalImage(img8);
            handleModalState();
          }}
          src={img8}
          layout="fill"
          objectFit="cover"
        />
      </a>
      <a className={styles.singleCover}>
        <Image
          onClick={() => {
            setModalImage(img9);
            handleModalState();
          }}
          src={img9}
          layout="fill"
          objectFit="cover"
        />
      </a>
      <a className={styles.singleCover}>
        <Image
          onClick={() => {
            setModalImage(img10);
            handleModalState();
          }}
          src={img10}
          layout="fill"
          objectFit="cover"
        />
      </a>
    </div>

  );
}
