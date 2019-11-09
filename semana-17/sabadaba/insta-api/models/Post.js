const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    image: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);
