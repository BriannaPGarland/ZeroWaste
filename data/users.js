const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  uid: { type: String, required: true },
  owner_id: ObjectId,
  phone: { type: String, required: true },
  email: { type: String, required: true },
  restaurantName: { type: String, required: true },
  address: { type: String, required: true },
  accountType: { type: String, required: true },
  ingredients: [
    {
      name: String,
      TotalAmount: Number,
      minimum_needed: Number,
      storage: [
        {
          _id: ObjectId,
          amount: Number,
          expire_date: Date,
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
          expire_date: Date,
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
          expire_date: Date,
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

module.exports = mongoose.model("Restaurants", restaurantSchema, "Restaurants");
