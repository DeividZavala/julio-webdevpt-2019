const express = require("express");
const router = express.Router();

const isAuth = (req, res, next) => {
  const { currentUser: user } = req.session;
  if (user) {
    next();
  } else {
    res.redirect("/login");
  }
};

router.get("/", isAuth, (req, res) => {
  res.render("index");
});

module.exports = router;
