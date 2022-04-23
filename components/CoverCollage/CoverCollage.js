import React from 'react';
import styles from "./CoverCollage.module.css";
import Image from "next/image/";

import { useState } from "react";

import ModalCover from "@components/ModalCover/ModalCover";

export default function CoverCollage(props) {
  const { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, url1, url2, url3, url4, url5, url6, url7, url8, url9, url10 } = props;

  const [modalImage, setModalImage] = useState();
  const [modalText, setModalText] = useState('');
  const [modalUrl, setModalUrl] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
 
  function handleModalState() {
    setModalOpen(!modalOpen);
  }

  return (

    <div className={styles.coverCollageWrapper}>
      
      <ModalCover 
      image={modalImage} 
      text={modalText} 
      url={modalUrl}
      handleModalState={handleModalState} 
      modalOpen={modalOpen}/>
      
      <a className={styles.singleCover}>
        <Image
          onClick={() => {
            setModalText(text1);
            setModalImage(img1);
            setModalUrl(url1);
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
            setModalText(text2);
            setModalImage(img2);
            setModalUrl(url2);
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
            setModalText(text3);
            setModalImage(img3);
            setModalUrl(url3);
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
            setModalText(text4);
            setModalImage(img4);
            setModalUrl(url4);
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
            setModalText(text5);
            setModalImage(img5);
            setModalUrl(url5);
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
            setModalText(text6);
            setModalImage(img6);
            setModalUrl(url6);
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
            setModalText(text7);
            setModalImage(img7);
            setModalUrl(url7);
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
            setModalText(text8);
            setModalImage(img8);
            setModalUrl(url8);
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
            setModalText(text9);
            setModalImage(img9);
            setModalUrl(url9);
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
            setModalText(text10);
            setModalImage(img10);
            setModalUrl(url10);
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
