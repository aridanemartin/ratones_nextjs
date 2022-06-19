import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.scss";
import Image from "next/image";

import formImage from "../../public/images/fotosVictor/_DSC0145.jpg";

export const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={styles.contactFormWrapper}>
      {/* <div className={styles.backgroundWrapper}>
        <Image
          src={formImage}
          alt="Contact Form"
          objectFit="cover"
          layout="fill"
        />
      </div> */}

      <div className={styles.contactForm}>
        <div className={styles.imageWrapper}>
          {/* <Image
            src={formImage}
            alt="Contact Form"
            objectFit="cover"
            layout="fill"
          /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.49697429807!2d-3.6859413999999995!3d40.397839999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42263e9c7ff531%3A0xea709ef82282a29a!2sC.%20de%20Juan%20de%20Mariana%2C%2012%2C%2028045%20Madrid!5e0!3m2!1ses!2ses!4v1655287470616!5m2!1ses!2ses"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.formWrapper}>
          <h1>Contacta con nosotros</h1>
          <label className={styles.primaryLabel}>Nombre</label>
          <input type="text" name="user_name" />
          <label className={styles.primaryLabel}>Email</label>
          <input type="email" name="user_email" />
          <label className={styles.primaryLabel}>Mensaje</label>
          <p>
            Escríbenos aquí tu mensaje y te contactaremos a la mayor brevedad
            posible
          </p>
          <textarea name="message" />
          <fieldset>
            <legend>
              Selecciona los servicios en los que puedas estar interesado:
            </legend>
            <div className={styles.checkboxWrapper}>
              <div className={styles.checkbox}>
                <label className={styles.secondaryLabel} htmlFor="produccion">
                  Producción Musical
                </label>
                <input type="checkbox" id="produccion" name="produccion" />
              </div>
              <div className={styles.checkbox}>
                <label className={styles.secondaryLabel} htmlFor="grabacion">
                  Grabación de guitarras
                </label>
                <input type="checkbox" id="grabacion" name="grabacion" />
              </div>
              <div className={styles.checkbox}>
                <label
                  className={styles.secondaryLabel}
                  htmlFor="audiovisuales"
                >
                  Música para audiovisuales
                </label>
                <input
                  type="checkbox"
                  id="audiovisuales"
                  name="audiovisuales"
                />
              </div>
              <div className={styles.checkbox}>
                <label className={styles.secondaryLabel} htmlFor="mezcla">
                  Mezcla y Máster
                </label>
                <input type="checkbox" id="mezcla" name="mezcla" />
              </div>
            </div>
          </fieldset>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
