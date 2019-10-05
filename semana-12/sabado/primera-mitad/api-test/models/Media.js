const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mediaSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    release_date: {
      type: Date
    },
    media_type: {
      type: String,
      enum: ["movie", "serie"]
    },
    genre: {
      type: [String]
    }
  },
  { timestamps: true }
);

module.exports = model("Media", mediaSchema);
