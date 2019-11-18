import { useState } from "react";

const useForm = () => {
  const [form, setForm] = useState({});

  const handleInput = e => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileInput = e => {
    const { name, files } = e.target;
    setForm(prevState => ({ ...prevState, [name]: files }));
  };

  return { form, handleInput, handleFileInput };
};

export default useForm;
