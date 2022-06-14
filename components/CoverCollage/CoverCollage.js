import React from "react";
import styles from "./CoverCollage.module.css";
import Image from "next/image/";

import { useState } from "react";

import ModalCover from "@components/ModalCover/ModalCover";

export default function CoverCollage({
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
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  title8,
  title9,
  title10,
  artist1,
  artist2,
  artist3,
  artist4,
  artist5,
  artist6,
  artist7,
  artist8,
  artist9,
  artist10,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
  url1,
  url2,
  url3,
  url4,
  url5,
  url6,
  url7,
  url8,
  url9,
  url10,
}) {
  const coverData = [
    [img1, title1, artist1, text1, url1],
    [img2, title2, artist2, text2, url2],
    [img3, title3, artist3, text3, url3],
    [img4, title4, artist4, text4, url4],
    [img5, title5, artist5, text5, url5],
    [img6, title6, artist6, text6, url6],
    [img7, title7, artist7, text7, url7],
    [img8, title8, artist8, text8, url8],
    [img9, title9, artist9, text9, url9],
    [img10, title10, artist10, text10, url10],
  ];

  const [modalImage, setModalImage] = useState();
  const [modalTitle, setModalTitle] = useState();
  const [modalArtist, setModalArtist] = useState();
  const [modalText, setModalText] = useState("");
  const [modalUrl, setModalUrl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  function handleModalState() {
    setModalOpen(!modalOpen);
  }

  return (
    <div className={styles.coverCollageWrapper}>
      <ModalCover
        image={modalImage}
        title={modalTitle}
        artist={modalArtist}
        text={modalText}
        url={modalUrl}
        handleModalState={handleModalState}
        modalOpen={modalOpen}
      />

      {coverData.map((coverData, index) => {
        return (
          <a className={styles.singleCover}>
            <Image
              onClick={() => {
                setModalImage(coverData[0]);
                setModalTitle(coverData[1]);
                setModalArtist(coverData[2]);
                setModalText(coverData[3]);
                setModalUrl(coverData[4]);
                handleModalState();
              }}
              src={coverData[0]}
              layout="fill"
              objectFit="cover"
            />
          </a>
        );
      })}
    </div>
  );
}
