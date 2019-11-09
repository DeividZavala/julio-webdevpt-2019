const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/login", (req, res, next) => {
  let { email, password } = req.body;
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
