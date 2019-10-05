const express = require("express");
const router = express.Router();
const Media = require("../models/Media");

/*
  /api/media/ get
  /api/media/:id get
  /api/media/ post
  /api/media/:id patch
  /api/media/:id delete
*/

/* GET home page */
router.get("/", (req, res, next) => {
  Media.find().then(media => {
    res.status(200).json({ media });
  });
});

router.post("/", (req, res) => {
  const { body: media } = req;
  Media.create(media).then(media => {
    res.status(200).json({ media });
  });
});

router.patch("/:id", (req, res) => {
  const { body: media } = req;
  const { id } = req.params;
  Media.findByIdAndUpdate(id, { $set: media }, { new: true }).then(media => {
    res.status(200).json({ media });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Media.findByIdAndDelete(id).then(media => {
    res.status(200).json({ media });
  });
});

module.exports = router;
