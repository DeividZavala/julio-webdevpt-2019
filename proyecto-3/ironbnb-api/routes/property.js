const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

router.get("/", (req, res) => {
  Property.find()
    .populate("owner", "username profilepic")
    .then(properties => {
      res.status(200).json({ properties });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.post("/", (req, res) => {
  const { files, user } = req;
  const images = files.map(file => file.secure_url);
  Property.create({ ...req.body, owner: user._id, images })
    .populate("owner", "username profilepic")
    .then(property => {
      // Property.populate(property, {
      //   path: "owner",
      //   select: "username profilepic"
      // });
      res.status(200).json({ property });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Property.findById(id)
    .populate("owner", "username profilepic")
    .then(property => {
      res.status(200).json({ property });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  Property.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
    .populate("owner", "username profilepic")
    .then(property => {
      res.status(200).json({ property });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Property.findByIdAndRemove(id)
    .then(property => {
      res.status(200).json({ property });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

module.exports = router;
