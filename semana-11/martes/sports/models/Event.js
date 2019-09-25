const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema({
  title: String,
  location: String,
  participants: [String],
  sport: String,
  schedule: Date,
  winner: String
});

module.exports = model("Event", eventSchema);
