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
  const countPromise = Media.count();
  const mediaPromise = Media.find();
  Promise.all([countPromise, mediaPromise])
    .then(results => {
      const [count, media] = results;
      res.status(200).json({ media, count });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Media.findById(id)
    .then(media => {
      res.status(200).json({ media });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

router.post("/", (req, res) => {
  const { body: media } = req;
  Media.create(media)
    .then(media => {
      res.status(200).json({ media });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

router.patch("/:id", (req, res) => {
  const { body: media } = req;
  const { id } = req.params;
  Media.findByIdAndUpdate(id, { $set: media }, { new: true })
    .then(media => {
      res.status(200).json({ media });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Media.findByIdAndDelete(id)
    .then(media => {
      res.status(200).json({ media });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

module.exports = router;
