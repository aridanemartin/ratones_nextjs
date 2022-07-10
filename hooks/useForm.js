import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    {
      checked
        ? setForm({ ...form, [name]: "SÍ" })
        : setForm({ ...form, [name]: "NO" });
    }
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
      setSuccess(true);
      setTimeout(
        () =>
          setForm({
            name: "",
            email: "",
            message: "",
            produccion: "",
            grabacion: "",
            audiovisuales: "",
            mezcla: "",
          }),
        5000
      );
    } else {
      return;
    }
  };

  return {
    success,
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleCheckbox,
    handleSubmit,
  };
};
