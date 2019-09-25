const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema({
  title: String,
  location: String,
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "Participant"
    }
  ],
  sport: String,
  schedule: Date,
  winner: String
});

module.exports = model("Event", eventSchema);
