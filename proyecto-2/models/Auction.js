const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const auctionSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    lider: {
      type: Schema.Types.ObjectId,
      ref: "Bid"
    },
    initial_date: {
      type: Date,
      required: true
    },
    end_date: {
      type: Date,
      required: true
    },
    currency: {
      type: String,
      enum: ["MXN", "USD"],
      default: "MXN"
    },
    initial_price: {
      type: Number,
      min: 100000,
      required: true
    },
    image: {
      type: [String],
      minlength: 1
    }
  },
  { timestamps: true }
);

module.exports = model("Auction", auctionSchema);
