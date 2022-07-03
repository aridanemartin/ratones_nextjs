import { useState } from "react";
import emailjs from "emailjs-com";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form, //copia de la variable de estado
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    //si no hay errores enviar
    if (Object.keys(errors).length === 0) {
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

      setLoading(true);
      setTimeout(() => setLoading(false), 5000);
      setTimeout(
        () =>
          setForm({
            name: "",
            email: "",
            message: "",
          }),
        5000
      );
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

// const sendEmail = (e) => {
//     e.preventDefault();
//     console.log(e.target);

//     emailjs
//       .sendForm(
//         `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
//         `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
//         form.current,
//         `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   };
