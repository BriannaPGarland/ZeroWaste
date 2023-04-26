const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  accountType: { type: String, required: true },
  phone: { type: Number, required: true },
  restaurantName: { type: String },
  uid: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema, "User");
