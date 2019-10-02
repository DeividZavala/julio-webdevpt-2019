const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/map", (req, res) => {
  res.render("maps");
});

router.get("/new", (req, res) => {
  res.render("new");
});

module.exports = router;
