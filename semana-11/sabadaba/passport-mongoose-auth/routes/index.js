const express = require("express");
const router = express.Router();

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/login");
};

const checkRole = roles => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      return next();
    }
    return res.redirect("/");
  };
};

/* GET home page */
router.get("/", isAuth, (req, res, next) => {
  const { user } = req;
  res.render("index", { user });
});

router.get("/admin", isAuth, checkRole(["admin"]), (req, res) => {
  const { user } = req;
  res.render("admin", { user });
});

module.exports = router;
