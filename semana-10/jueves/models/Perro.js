const mongoose = require("mongoose");
const { Schema } = mongoose;

const perroSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  age: {
    type: Number,
    max: 20,
    min: 0
  },
  hasOwner: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Perro", perroSchema);
