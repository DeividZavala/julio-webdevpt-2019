const express = require("express");
const router = express.Router();
const passport = require("../helpers/passport");
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (error, user, info) => {
    console.log(error, user, info);
  })(req, res);
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  console.log(req.body);

  const bcryptSalt = 10;

  let error;
  const { password, email } = req.body;

  if (!email || !password) {
    error = "No enviaste un email con contraseña valida";
    return res.render("register", { error });
  }

  if (password !== req.body["confirm-pass"]) {
    error = "Las contraseñas no son las mismas";
    return res.render("register", { error });
  }

  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  User.findOne({ email }).then(user => {
    if (user) {
      error = "Ya hay un usuario registrado con ese email";
      return res.render("register", { error });
    }

    User.create({ email, password: hashPass }).then(user => {
      res.redirect("/login");
    });
  });
});

module.exports = router;
