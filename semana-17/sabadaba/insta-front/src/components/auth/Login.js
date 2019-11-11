import React, { useState, useContext } from "react";
import AuthForm from "../common/AuthForm";
import { login } from "../../services/auth";
import { AppContext } from "../../AppContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AppContext);
  const { push } = useHistory();

  const handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
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
          handleChange={handleChange}
          email={email}
          password={password}
        />
      </div>
    </div>
  );
};

export default Login;
