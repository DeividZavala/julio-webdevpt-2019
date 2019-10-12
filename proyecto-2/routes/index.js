const express = require("express");
const router = express.Router();
const { isAuth } = require("../helpers/authMiddlewares");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/home", isAuth, (req, res) => {
  res.render("home");
});

module.exports = router;
