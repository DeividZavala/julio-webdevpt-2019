const express = require("express");
const router = express.Router();
const { isAuth } = require("../helpers/authMiddlewares");
const uploader = require("../helpers/multer");
const Auction = require("../models/Auction");

// Get- form de crear
router.get("/new", isAuth, (req, res) => {
  res.render("newAuction", { title: "New Auction", create: true });
});

// Post- form de crear
router.post("/new", isAuth, uploader.array("images"), (req, res) => {
  const {
    user: { _id: author }
  } = req;
  const { body } = req;
  const images = req.files.map(file => file.secure_url);
  let { lat, lng, address, ...auction } = body;
  auction = {
    author,
    images,
    ...auction,
    location: { address, coords: [lng, lat] }
  };
  Auction.create(auction)
    .then(auction => {
      res.redirect("/profile");
    })
    .catch(errorMessage => {
      res.render("newAuction", {
        title: "New Auction",
        create: true,
        errorMessage
      });
    });
});

// Get- form de editar
router.get("/update/:id", isAuth, (req, res) => {
  const { id } = req.params;
  Auction.findById(id).then(auction => {
    res.render("newAuction", { title: "Edit auction", auction, create: false });
  });
});

// Post- form de editar
router.post("/update/:id", isAuth, uploader.array("images"), (req, res) => {
  const { id } = req.params;
  const { body: auction } = req;
  const images = req.files.map(file => file.secure_url);
  Auction.findByIdAndUpdate(id, { $set: { ...auction, images } }, { new: true })
    .then(auction => {
      //res.redirect("/profile");
      res.status(200).json({ auction });
    })
    .catch(errorMessage => {
      res.render("newAuction", { title: "New Auction", errorMessage });
    });
});

router.get("/delete/:id", (req, res) => {
  const { id } = req.params;
  Auction.findByIdAndDelete(id).then(() => {
    res.redirect("/profile");
  });
});

module.exports = router;
