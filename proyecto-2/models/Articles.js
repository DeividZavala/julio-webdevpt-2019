const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    user: {
      type: String,
      unique: true,
      required: true
    },
    article: {
      type: String,
      unique: true,
      required: true
    },
    price_i: {
      type: String,
      required: true
    },
    price_f: {
      type: String,
      required: true
    },
    image: []
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
