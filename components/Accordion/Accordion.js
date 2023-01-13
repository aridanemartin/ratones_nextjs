import styles from "./Accordion.module.scss";
import { useState } from "react";
import Image from "next/image";

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <ul className={styles.accordion}>
      <li>
        <div className={styles.accordion__question} onClick={toggle}>
          <h3>{props.title}</h3>
          <div
            className={
              isOpen
                ? `${styles.accordion__icon} ${styles.accordion__iconOpen}`
                : `${styles.accordion__icon}`
            }
          >
            <Image
              src={"/images/icons/add.png"}
              alt="plus"
              width={30}
              height={30}
              objectFit="contain"
            />
          </div>
        </div>
        <div
          className={
            isOpen ? styles.accordion__wrapperOpen : styles.accordion__wrapper
          }
        >
          <p
            className={
              isOpen
                ? `${styles.accordion__text} ${styles.accordion__textOpen}`
                : `${styles.accordion__text}`
            }
          >
            {props.text}
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Accordion;
