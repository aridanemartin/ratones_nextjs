import { useState } from "react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    const formData = {
      name: form.name,
      email: form.email,
      message: form.message,
      produccion: form.produccion,
      grabacion: form.grabacion,
      audiovisuales: form.audiovisuales,
      mezcla: form.mezcla,
    };

    if (Object.keys(errors).length === 0) {
      const response = await fetch("/api/send-form", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

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
