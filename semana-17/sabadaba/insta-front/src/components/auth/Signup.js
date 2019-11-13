import React, { useContext } from "react";
import AuthForm from "../common/AuthForm";
import { register } from "../../services/auth";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import UIkit from "uikit";

const Signup = () => {
  const [form, handleInputs] = useForm();
  const { setUser } = useContext(AppContext);
  const { push } = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = form;
    register(email, password)
      .then(res => {
        UIkit.notification({
          message: `<span uk-icon='check'></span> Cuenta creada con éxito`,
          status: "success",
          pos: "top-right"
        });
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        setUser(user);
        push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="uk-section">
      <div className="uk-container uk-flex uk-flex-center">
        <AuthForm
          submit={handleSubmit}
          action="Signup"
          handleChange={handleInputs}
          {...form}
        />
      </div>
    </div>
  );
};

export default Signup;
