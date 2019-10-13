const express = require("express");
const router = express.Router();
const Auction = require("../models/Auction");
const { isAuth } = require("../helpers/authMiddlewares");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/home", isAuth, (req, res) => {
  const { user } = req;
  Auction.find()
    .populate({
      path: "lider",
      populate: {
        path: "author"
      }
    })
    .then(auctions => {
      res.render("home", { user, auctions });
    });
});

router.get("/profile", isAuth, (req, res) => {
  const { user } = req;
  Auction.find({ author: user._id }).then(auctions => {
    res.render("profile", { user, auctions });
  });
});

module.exports = router;
