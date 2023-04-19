const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  numberOfUnits: {
    type: Number,
    required: true,
  },
});

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [ingredientSchema],
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema, "Allrecipes");
