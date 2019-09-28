const express = require("express");
const router = express.Router();
const passport = require("../helpers/passport");
const User = require("../models/User");

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  passport.authenticate("local", (err, user, info = {}) => {
    const { message: error } = info;
    if (error) {
      return res.render("login", { error });
    }

    req.login(user, err => {
      res.redirect("/");
    });
  })(req, res);
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  const { password, email } = req.body;

  let error;

  if (password !== req.body["confirm-pass"]) {
    error = "Las contras no son las mismas";
    return res.render("register", { error });
  }

  if (!email || !password) {
    error = "Email o contraseña incorrectos";
    return res.render("register", { error });
  }

  User.register({ email }, password)
    .then(user => {
      req.login(user, err => {
        res.redirect("/");
      });
    })
    .catch(error => {
      res.render("register", { error });
    });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
