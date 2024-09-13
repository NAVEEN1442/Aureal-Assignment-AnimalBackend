// models/animal.js
const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  created_At:{
    type:Date,
  },
  
});

module.exports = mongoose.model("Animal", animalSchema);
