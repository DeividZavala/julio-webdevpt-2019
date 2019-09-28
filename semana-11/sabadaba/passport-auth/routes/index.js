const express = require("express");
const router = express.Router();

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.redirect("/login");
};

/* GET home page */
router.get("/", isAuth, (req, res, next) => {
  const { user } = req;
  res.render("index", { user });
});

module.exports = router;
