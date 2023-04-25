const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  uid: { type: String, required: true, unique: true },
  accountType: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
  restaurantName: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema, "User");
