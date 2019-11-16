const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { send } = require("../helpers/mailer");

router.post("/login", (req, res, next) => {
  const { password, email } = req.body;
  User.findOne({ email })
    .then(user => {
      const isValid = bcrypt.compareSync(password, user.password);
      if (!isValid)
        return res.status(401).json({ error: "Las contraseñas no coincinden" });

      jwt.sign(
        {
          id: user._id
        },
        process.env.SECRET,
        (error, token) => {
          delete user._doc.password;

          if (error) return res.status(500).json({ error });
          res.status(200).json({ user, token });
        }
      );
    })
    .catch(error => {
      res.status(404).json({ error, msg: "Email incorrecto" });
    });
});

router.post("/signup", (req, res, next) => {
  const { password } = req.body;

  if (password.length <= 5)
    return res.status(500).json({ error: "La tienes muy corta" });

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  User.create({ ...req.body, password: hashedPassword })
    .then(user => {
      const options = {
        filename: "register",
        email: user.email,
        message: "Confirma tu correo",
        subject: "Confirma tu correo"
      };

      send(options);

      jwt.sign(
        {
          id: user._id
        },
        process.env.SECRET,
        (error, token) => {
          delete user._doc.password;

          if (error) return res.status(500).json({ error });
          res.status(200).json({ user, token });
        }
      );
    })
    .catch(error => {
      res.status(404).json({ error, msg: "Error al crear tu usuario" });
    });
});

module.exports = router;
