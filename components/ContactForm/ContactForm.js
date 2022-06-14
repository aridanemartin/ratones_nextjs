import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <fieldset>
        <legend>
          Selecciona los servicios en los que puedas estar interesado:
        </legend>

        <div>
          <input
            type="checkbox"
            id="Producción Musical"
            name="Producción Musical"
          />
          <label htmlFor="Producción Musical">Producción Musical</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Grabación de guitarras"
            name="Grabación de guitarras"
          />
          <label htmlFor="Grabación de guitarras">Grabación de guitarras</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Música para audiovisuales"
            name="Música para audiovisuales"
          />
          <label htmlFor="Música para audiovisuales">
            Música para audiovisuales
          </label>
        </div>
        <div>
          <input type="checkbox" id="Mezcla y Máster" name="Mezcla y Máster" />
          <label htmlFor="Mezcla y Máster">Mezcla y Máster</label>
        </div>
      </fieldset>

      <input type="submit" value="Send" />
    </form>
  );
};
