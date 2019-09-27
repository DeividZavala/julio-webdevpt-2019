const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

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

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  let error;

  if (!email || !password) {
    error = "No enviaste un email o contraseña valida";
    return res.render("login", { error });
  }

  User.findOne({ email }).then(user => {
    if (!user) {
      error = "Email incorrecto";
      return res.render("login", { error });
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (isValidPassword) {
      req.session.currentUser = user;
      return res.redirect("/");
    } else {
      error = "Contraseña incorrecta";
      return res.render("login", { error });
    }
  });
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
