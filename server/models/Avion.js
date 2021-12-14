const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AvionShema = new Schema({
  id: { type: String },
  capasité: { type: String },
  type: { type: String },
  constructeur: { type: String},
});

module.exports = mongoose.model("Avion", AvionShema);
