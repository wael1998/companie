const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: {
    email: { type: String },
    password: { type: String },
  },
});

module.exports = mongoose.model("user", userSchema);
