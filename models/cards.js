const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  task: [{ description: String, completed: Boolean }],
});

module.exports = mongoose.model("Card", cardSchema);
