const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  name: String,
  units: String,
  numberOfUnits: Number,
});

const dataSchema = new mongoose.Schema({
  recipe: {
    required: true,
    type: String,
  },
  ingredients: {
    required: true,
    type: Array,
  },
  inventory: {
    type: [inventorySchema],
    default: [],
  },
});

module.exports = mongoose.model("Data", dataSchema);
