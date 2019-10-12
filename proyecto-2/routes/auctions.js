const express = require("express");
const router = express.Router();
const { isAuth } = require("../helpers/authMiddlewares");
const uploader = require("../helpers/multer");

router.get("/new", isAuth, (req, res) => {
  res.render("newAuction", { title: "New Auction" });
});

router.post("/new", isAuth, uploader.array("images"), (req, res) => {
  const { body: auction } = req;
  const images = req.files.map(file => file.secure_url);
  Auction.create({ auction, images });
});

router.get("/update/:id", isAuth, (req, res) => {
  const { id } = req.params;
  Auction.findById(id).then(auction => {
    res.render("newAuction", { title: "Edit auction", auction });
  });
});

router.post("/update/:id", isAuth, uploader.array("images"), (req, res) => {
  const { id } = req.params;
  const { body: auction } = req;
  const images = req.files.map(file => file.secure_url);
  Auction.findByIdAndUpdate(id, { $set: { ...auction, images } }, { new: true })
    .then(() => {
      res.redirect("/profile");
    })
    .catch(errorMessage => {
      res.render("newAuction", { title: "New Auction", errorMessage });
    });
});

module.exports = router;
