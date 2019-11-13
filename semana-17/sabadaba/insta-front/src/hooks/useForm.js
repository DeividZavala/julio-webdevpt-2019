import { useState } from "react";

export const useForm = () => {
  const [form, setForm] = useState({});

  const handleInputs = e => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileInput = e => {
    const { name, files } = e.target;
    setForm(prevState => ({ ...prevState, [name]: files }));
  };

  return [form, handleInputs, handleFileInput];
};
