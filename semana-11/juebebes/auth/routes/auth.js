const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  console.log(req.body);

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
});

module.exports = router;
