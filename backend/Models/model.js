const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  recipe: {
    required: true,
    type: String,
  },
  ingridients: {
    required: true,
    type: Array,
  },
  // date:{
  //   required:true,
  //   date: Date()
  // }
});

module.exports = mongoose.model("Data", dataSchema);
