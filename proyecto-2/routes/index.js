const express = require("express");
const router = express.Router();
const { isAuth } = require("../helpers/authMiddlewares");

/* GET home page */
router.get("/home", isAuth, (req, res, next) => {
  res.render("index");
});

module.exports = router;
