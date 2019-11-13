import React, { useContext } from "react";
import AuthForm from "../common/AuthForm";
import { login } from "../../services/auth";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const Login = () => {
  const { setUser } = useContext(AppContext);
  const [form, handleInputs] = useForm();
  const { push } = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = form;
    login(email, password).then(res => {
      const { user, token } = res.data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      setUser(user);
      push("/");
    });
  };

  return (
    <div className="uk-section">
      <div className="uk-container uk-flex uk-flex-center">
        <AuthForm
          submit={handleSubmit}
          action="Login"
          handleChange={handleInputs}
          {...form}
        />
      </div>
    </div>
  );
};

export default Login;
