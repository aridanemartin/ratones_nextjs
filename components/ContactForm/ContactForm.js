import React from "react";
import styles from "./ContactForm.module.scss";
import { useForm } from "hooks/useForm";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import ratonesLogo from "../../public/images/logoLarge.webp";
// import Link from "next/link";

// import Instagram from "../../public/images/icons/instagram.webp";
// import Facebook from "../../public/images/icons/facebook.webp";
// import vimeo from "../../public/images/icons/vimeo.webp";
import email from "../../public/images/icons/mail.png";
import phone from "../../public/images/icons/phone-call.png";

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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10826.461571389951!2d-3.6872770522070377!3d40.40723137071332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42278f7c2b90b7%3A0xd3c275e76a14fa94!2sRatone&#39;s%20Room!5e0!3m2!1sen!2ses!4v1662925019950!5m2!1sen!2ses"
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
              {/* <div className={styles.contactWrapper}>
                <a href="mailto:someone@yoursite.com">
                  hola@victormartinezgaleote.com
                </a>
                <p>+34 659 670 788</p>
                <p>Hablemos por teléfono, WhatsApp o Skype </p>
              </div> */}
              <div className={styles.contactWrapper}>
                {/* <p>Hablemos por teléfono, WhatsApp o Skype</p> */}
                <a
                  href="mailto:info@ratonesroom.com?subject=Solicitud%20de%20información"
                  className={styles.email}
                >
                  <div className={styles.contactIcon}>
                    <Image src={email} layout="fill" objectFit="cover" />
                  </div>
                  <p>info@ratonesroom.com</p>
                </a>
                <a
                  className={styles.phone}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send?phone=34659670788"
                >
                  <div className={styles.contactIcon}>
                    <Image src={phone} layout="fill" objectFit="cover" />
                  </div>
                  <p>+34 659 670 788</p>
                </a>
              </div>

              {/* <div className={styles.socialWrapper}>
                <div className={styles.socialBannerLinkWrap}>
                  <Link href="https://www.instagram.com/ratonesroom/">
                    <a className={styles.socialBannerLink} target="_blank">
                      <Image
                        src={Instagram}
                        layout="fill"
                        objectFit="contain"
                        // maxWidth={35}
                        // height={35}
                        className={styles.socialBannerLink}
                        alt="Ratone's Room - Instagram"
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles.socialBannerLinkWrap}>
                  <Link href="https://www.facebook.com/ratonesroom/">
                    <a className={styles.socialBannerLink} target="_blank">
                      <Image
                        src={Facebook}
                        layout="fill"
                        objectFit="contain"
                        // maxWidth={40}
                        // height={40}
                        alt="Ratone's Room - Facebook"
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles.socialBannerLinkWrap}>
                  <Link href="https://vimeo.com/ratonesroom">
                    <a className={styles.socialBannerLink} target="_blank">
                      <Image
                        src={vimeo}
                        layout="fill"
                        objectFit="contain"
                        // maxWidth={40}
                        // height={40}
                        className={styles.socialBannerLink}
                        alt="Victor Martinez - Vimeo"
                      />
                    </a>
                  </Link>
                </div>
              </div> */}
            </form>
          </div>
        </>
      )}
    </div>
  );
};
