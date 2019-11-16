const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: "Nombre de usuario no disponible"
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    profilepic: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
