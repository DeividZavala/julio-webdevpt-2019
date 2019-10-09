const express = require("express");
const router = express.Router();
const uploader = require("../helpers/multer");
const Place = require("../models/Place");

/* GET home page */
router.get("/", (req, res, next) => {
  Place.find().then(places => {
    res.render("index", { places });
  });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", uploader.array("images"), (req, res) => {
  const images = req.files.map(file => file.secure_url);
  Place.create({ ...req.body, images }).then(place => res.redirect("/"));
});

module.exports = router;
