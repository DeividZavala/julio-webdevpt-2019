const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const propertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    title: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    },
    description: {
      type: String,
      minlength: 50
    },
    capacity: {
      type: Number,
      required: true
    },
    images: {
      type: [String],
      minlength: 2
    },
    price: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("Property", propertySchema);
