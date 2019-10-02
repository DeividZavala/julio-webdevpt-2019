const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    capacity: {
      type: Number,
      default: 0
    },
    image: {
      type: String
    },
    location: {
      type: {
        type: String,
        default: "Point"
      },
      address: {
        type: String
      },
      coords: {
        type: [Number],
        required: true
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Place", placeSchema);
