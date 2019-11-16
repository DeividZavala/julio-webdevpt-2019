import React from "react";

const AuthForm = ({
  submit,
  action,
  email = "",
  password = "",
  username = "",
  handleChange
}) => (
  <form className="uk-form-stacked" onSubmit={submit}>
    <div className="uk-margin">
      <label className="uk-form-label">Email:</label>
      <div className="uk-inline">
        <span className="uk-form-icon" uk-icon="icon: user"></span>
        <input
          onChange={handleChange}
          name="email"
          value={email}
          className="uk-input"
          type="email"
        />
      </div>
    </div>

    {action === "signup" ? (
      <div className="uk-margin">
        <label className="uk-form-label">Username:</label>
        <div className="uk-inline">
          <span className="uk-form-icon" uk-icon="icon: user"></span>
          <input
            onChange={handleChange}
            name="username"
            value={username}
            className="uk-input"
            type="text"
          />
        </div>
      </div>
    ) : null}

    <div className="uk-margin">
      <label className="uk-form-label">Password</label>
      <div className="uk-inline">
        <span className="uk-form-icon" uk-icon="icon: lock"></span>
        <input
          onChange={handleChange}
          name="password"
          value={password}
          className="uk-input"
          type="password"
        />
      </div>
    </div>
    <button className="uk-button uk-button-primary" type="submit">
      {action}
    </button>
  </form>
);

export default AuthForm;
