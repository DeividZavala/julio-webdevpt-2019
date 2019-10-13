const express = require("express");
const router = express.Router();
const Auction = require("../models/Auction");
const Bid = require("../models/Bid");
const { isAuth } = require("../helpers/authMiddlewares");

router.post("/:id", isAuth, (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const { bid } = req.body;
  //Bid.create({ ...req.body, author: user._id, auction: id });
  Auction.findById(id)
    .populate("lider", "bid")
    .then(auction => {
      if (bid > auction.initial_price || bid > auction.lider.bid) {
        Bid.create({ ...req.body, author: user._id, auction: id }).then(bid => {
          Auction.findByIdAndUpdate(auction._id, {
            $set: { lider: bid._id }
          }).then(() => {
            return res.redirect("/home");
          });
        });
      }
      return res.redirect("/home");
    });
});

module.exports = router;
