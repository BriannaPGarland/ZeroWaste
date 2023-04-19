const mongoose = require("mongoose");

const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const testOwnerSchema = new Schema({
  _id: ObjectId,
  name: {
    first_name: String,
    last_name: String,
  },
  contact_info: {
    phone: String,
    email: String,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  accountType: String,
  restaurant_id: ObjectId,
  beneficiary_id: ObjectId,
});

const restaurantSchema = new Schema({
  _id: ObjectId,
  owner_id: ObjectId,
  contact_info: {
    phone: String,
    email: String,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  ingredients: [
    {
      name: String,
      TotalAmount: Number,
      minimum_needed: Number,
      storage: [
        {
          _id: ObjectId,
          amount: Number,
          shelf_life: Date,
        },
      ],
    },
  ],
  ingredients_expiring_soon: [
    {
      name: String,
      TotalAmount: Number,
      minimum_needed: Number,
      storage: [
        {
          _id: ObjectId,
          amount: Number,
          shelf_life: Date,
        },
      ],
    },
  ],
  ingredients_expired: [
    {
      name: String,
      TotalAmount: Number,
      minimum_needed: Number,
      storage: [
        {
          _id: ObjectId,
          amount: Number,
          shelf_life: Date,
        },
      ],
    },
  ],
  recipes: [
    {
      name: String,
      ingredients: [
        {
          name: String,
          amount: Number,
        },
      ],
      daily_produced: Number,
      surplus_created: Number,
    },
  ],
  money_saved: Number,
  total_donations: Number,
  is_food_claimed: Boolean,
});

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
});

module.exports = mongoose.model("Recipe", recipeSchema, "Allrecipes");
