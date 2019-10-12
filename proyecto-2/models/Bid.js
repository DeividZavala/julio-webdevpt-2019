const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bidSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    auction: {
      type: Schema.Types.ObjectId,
      ref: "Auction",
      required: true
    },
    bid: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("Bid", bidSchema);
