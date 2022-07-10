import React from "react";
import styles from "./ContactForm.module.scss";
import { useForm } from "hooks/useForm";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import ratonesLogo from "../../public/images/logoLarge.webp";

const initialForm = {
  name: "",
  email: "",
  message: "",
  produccion: "NO",
  grabacion: "NO",
  audiovisuales: "NO",
  mezcla: "NO",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,300}$/;

  if (!form.name.trim()) {
    errors.name = "Nombre requerido / Name required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name =
      "Solo letras y espacios en blanco / only letters and spaces are allowed";
  }

  if (!form.email.trim()) {
    errors.email = "Email requerido / Email required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email =
      "El 'Email' debe tener un formato válido / The 'Email' must have a valid format";
  }

  if (!form.message.trim()) {
    errors.message = "Mensaje requerido / Message required";
  } else if (!regexMessage.test(form.message.trim())) {
    errors.message = "Máximo de 300 caracteres / Maximum of 300 characters";
  }

  return errors;
};

export const ContactForm = () => {
  let { t } = useTranslation();

  const {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleCheckbox,
    handleSubmit,
    success,
  } = useForm(initialForm, validationsForm);

  return (
    <div className={styles.contactFormWrapper}>
      {loading ? (
        <div className={styles.loading}>
          <p>{t("common:contactForm.loading")}</p>
          <div className={styles.logoWrap}>
            <Image
              src={ratonesLogo}
              layout="responsive"
              quality="50"
              priority="true"
              as="image"
            />
          </div>
        </div>
      ) : (
        <>
          <div className={styles.contactForm}>
            <div className={styles.imageWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.49697429807!2d-3.6859413999999995!3d40.397839999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42263e9c7ff531%3A0xea709ef82282a29a!2sC.%20de%20Juan%20de%20Mariana%2C%2012%2C%2028045%20Madrid!5e0!3m2!1ses!2ses!4v1655287470616!5m2!1ses!2ses"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
            <form
              ref={form}
              onSubmit={(e) => handleSubmit(e)}
              className={styles.formWrapper}
            >
              <h1>{t("common:contactForm.title")}</h1>
              {success && (
                <p className={styles.success}>
                  &#10003; {t("common:contactForm.success")}
                </p>
              )}
              <label className={styles.primaryLabel}>
                {t("common:contactForm.name")}
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && (
                <p className={styles.fieldError}>{errors.name}</p>
              )}
              <label className={styles.primaryLabel}>
                {t("common:contactForm.email")}
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && (
                <p className={styles.fieldError}>{errors.email}</p>
              )}
              <label className={styles.primaryLabel}>
                {t("common:contactForm.message")}
              </label>
              <textarea
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t("common:contactForm.messagePlaceholder")}
              />
              {errors.message && (
                <p className={styles.fieldError}>{errors.message}</p>
              )}
              <fieldset>
                <legend>{t("common:contactForm.servicesDescription")}</legend>
                <div className={styles.checkboxWrapper}>
                  <div className={styles.checkbox}>
                    <label
                      className={styles.secondaryLabel}
                      htmlFor="produccion"
                    >
                      {t("common:servicios.0")}
                    </label>
                    <input
                      type="checkbox"
                      id="produccion"
                      name="produccion"
                      onChange={handleCheckbox}
                    />
                  </div>
                  <div className={styles.checkbox}>
                    <label
                      className={styles.secondaryLabel}
                      htmlFor="grabacion"
                    >
                      {t("common:servicios.1")}
                    </label>
                    <input
                      type="checkbox"
                      id="grabacion"
                      name="grabacion"
                      onChange={handleCheckbox}
                    />
                  </div>
                  <div className={styles.checkbox}>
                    <label
                      className={styles.secondaryLabel}
                      htmlFor="audiovisuales"
                    >
                      {t("common:servicios.2")}
                    </label>
                    <input
                      type="checkbox"
                      id="audiovisuales"
                      onChange={handleCheckbox}
                      name="audiovisuales"
                    />
                  </div>
                  <div className={styles.checkbox}>
                    <label className={styles.secondaryLabel} htmlFor="mezcla">
                      {t("common:servicios.3")}
                    </label>
                    <input
                      type="checkbox"
                      id="mezcla"
                      name="mezcla"
                      onChange={handleCheckbox}
                    />
                  </div>
                </div>
              </fieldset>

              <button type="submit" onClick={handleSubmit}>
                {t("common:contactForm.send")}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
