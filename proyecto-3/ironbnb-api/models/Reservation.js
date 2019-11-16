const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reservationsSchema = new Schema(
  {
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true
    },
    guest: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    checkin: {
      type: Date,
      required: true
    },
    checkout: {
      type: Date,
      required: true
    },
    guest_number: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("Reservation", reservationsSchema);
