const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const { verifyToken } = require("../helpers/auth");
const uploader = require("../helpers/multer");

//crear post
router.post("/", verifyToken, uploader.single("image"), (req, res, next) => {
  const { id } = req.user;
  const { secure_url } = req.file;
  const post = { ...req.body, author: id, image: secure_url };
  Post.create(post)
    .then(post => {
      res.status(200).json({ data: post });
    })
    .catch(error => {
      res.status(500).json({ error, msg: "No se pudo crear el post" });
    });
});

// get post
router.get("/:postID", verifyToken, (req, res, next) => {
  let { postID } = req.params;
  Post.findById(postID)
    .then(post => {
      res.status(200).json({ data: post });
    })
    .catch(error => {
      res.status(404).json({ error });
    });
});

//traer posts
router.get("/", verifyToken, (req, res) => {
  Post.find()
    .then(posts => {
      res.status(200).json({ data: posts });
    })
    .catch(error => {
      res.status(404).json({ error });
    });
});

module.exports = router;
