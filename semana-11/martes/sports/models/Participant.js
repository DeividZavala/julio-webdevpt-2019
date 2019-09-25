const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const participantSchema = new Schema({
  type: {
    type: String,
    enum: ["team", "single"],
    required: true
  },
  name: String,
  sport: String
});

module.exports = model("Participant", eventSchema);
