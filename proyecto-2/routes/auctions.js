const express = require("express");
const router = express.Router();
const { isAuth } = require("../helpers/authMiddlewares");
const uploader = require("../helpers/multer");
const Auction = require("../models/Auction");
const auctionController = require("../controllers/auctions");

// Get- form de crear
router.get("/new", isAuth, (req, res) => {
  res.render("newAuction", { title: "New Auction", create: true });
});

// Post- form de crear
router.post(
  "/new",
  isAuth,
  uploader.array("images"),
  auctionController.createAuction
);

// Get- form de editar
router.get("/update/:id", isAuth, (req, res) => {
  const { id } = req.params;
  Auction.findById(id).then(auction => {
    res.render("newAuction", { title: "Edit auction", auction, create: false });
  });
});

// Post- form de editar
router.post(
  "/update/:id",
  isAuth,
  uploader.array("images"),
  auctionController.updateAuction
);

router.get("/delete/:id", isAuth, auctionController.deleteAuction);

module.exports = router;
