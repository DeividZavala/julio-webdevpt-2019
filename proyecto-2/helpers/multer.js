const cloudinary = require("cloudinary");
const multer = require("multer");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "auctions",
  allowedFormats: ["jpg", "png", "jpeg"],
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

module.exports = multer({ storage });
