const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/login", (req, res, next) => {
  let { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ msg: "Contraseña invalida" });
      }
      jwt.sign(
        {
          id: user._id
        },
        process.env.SECRET,
        {
          expiresIn: 86400
        },
        (err, token) => {
          delete user._doc.password;

          if (err) return res.status(500).json({ err });
          res.status(200).json({ user, token });
        }
      );
    })
    .catch(err => {
      res.status(404).json({ err, msg: "Email incorrecto" });
    });
});

router.post("/signup", (req, res, next) => {
  let { password, ...newUser } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  User.create({ ...newUser, password: hashPassword }).then(user => {
    jwt.sign(
      {
        id: user._id
      },
      process.env.SECRET,
      {
        expiresIn: 86400
      },
      (err, token) => {
        delete user._doc.password;

        if (err) return res.status(500).json({ err });
        res.status(200).json({ user, token });
      }
    );
  });
});
module.exports = router;
