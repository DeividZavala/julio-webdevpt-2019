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
    .populate("author", "username email")
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
    .populate("author", "username email")
    .then(posts => {
      res.status(200).json({ data: posts });
    })
    .catch(error => {
      res.status(404).json({ error });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Post.findByIdAndDelete(id).then(post => {
    res.status(200).json({ post, msg: "Borrado con éxito" });
  });
});

module.exports = router;
