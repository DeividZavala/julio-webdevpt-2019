const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

/* GET home page */
router.get("/", (req, res, next) => {
  Place.find().then(places => {
    res.render("index", { places });
  });
});

router.get("/map", (req, res) => {
  res.render("maps");
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/new", (req, res) => {
  let { lat, lng, address, ...place } = req.body;
  place = { ...place, location: { address, coords: [lng, lat] } };
  Place.create(place).then(place => {
    res.redirect("/");
  });
});

module.exports = router;
