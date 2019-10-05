const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { send } = require("../helpers/mailer");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/register", (req, res) => {
  const { body: user } = req;
  User.create(user).then(user => {
    // TODO mandar correo
    const options = {
      filename: "register",
      email: user.email,
      message: "Valida tu correo",
      subject: "Confirma correo"
    };
    send(options);
    res.render("index");
  });
});

module.exports = router;
