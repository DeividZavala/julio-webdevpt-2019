const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { verifyToken } = require("../helpers/auth");
const uploader = require("../helpers/multer");

router.get("/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then(user => {
      res.status(200).json({ user });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

router.patch("/:id", verifyToken, uploader.single("profilepic"), (req, res) => {
  const { id } = req.params;
  let newUserData = { ...req.body };
  if (req.file) {
    const { secure_url: profilepic } = req.file;
    newUserData = { ...newUserData, profilepic };
  }
  User.findByIdAndUpdate(
    id,
    { $set: { ...newUserData } },
    { new: true, select: "email username profilepic createdAt updatedAt" }
  )
    .then(user => {
      res.status(200).json({ user });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

module.exports = router;
