const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: {
    email: String,
    password: String,
  },
});

module.exports = mongoose.model("user", userSchema);
