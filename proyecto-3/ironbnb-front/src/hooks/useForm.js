import { useState } from "react";

const useForm = () => {
  const [form, setForm] = useState({});

  const handleInput = e => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  return { form, handleInput };
};

export default useForm;
