import React from "react";
import styles from "./List.module.css";
import Image from 'next/image';

export const List = ({
  img,
  li1,
  li2,
  li3,
  li4,
  li5,
  li6,
  li7,
  li8,
  li9
}) => {
  return (
    <div className={styles.listWrapper}>
      <ul className={styles.list}>
        <li>{li1}</li>
        <li>{li2}</li>
        {li3 && <li>{li3}</li>}
        {li4 && <li>{li4}</li>}
        {li5 && <li>{li5}</li>}
        {li6 && <li>{li6}</li>}
        {li7 && <li>{li7}</li>}
        {li8 && <li>{li8}</li>}
        {li9 && <li>{li9}</li>}
      </ul>
      <div className={styles.imageWrapper}>
        <Image
        src={img}
        layout="fill"
        objectFit="cover"
        />
      </div>
    </div>
  );
};
