import React, { useContext } from "react";
import AuthForm from "./AuthForm";
import useForm from "~hooks/useForm";
import { login } from "~services/auth";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";
import UIkit from "uikit";

const Login = () => {
  const { form, handleInput } = useForm();
  const { setUser } = useContext(AppContext);
  const { push } = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    login(form)
      .then(res => {
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setUser(user);
        push("/home");
      })
      .catch(res => {
        const { error } = res.response.data;
        UIkit.notification({
          message: `<span uk-icon='close'></span> ${error}`,
          pos: "top-right",
          status: "danger"
        });
      });
  };

  return (
    <div className="uk-section">
      <div className="uk-container uk-flex uk-flex-center">
        <AuthForm
          submit={handleSubmit}
          action="login"
          handleChange={handleInput}
          {...form}
        />
      </div>
    </div>
  );
};

export default Login;
