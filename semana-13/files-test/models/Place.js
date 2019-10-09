const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: String,
    images: [String]
  },
  { timestamps: true }
);

module.exports = model("Place", placeSchema);
