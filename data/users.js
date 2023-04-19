const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  //username: { type: String },
  email: { type: String, required: true, unique: true },
  uid: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", userSchema, "User");
