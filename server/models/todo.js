const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo: {
    title: String,
    description: String,
    deadline: Date,
  },
});

module.exports = mongoose.model("todo", todoSchema);
