const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployerShema = new Schema({
  nom: { type: String },
  prenom: { type: String },
  email: { type: String },
  salaire: { type: Number},
});

module.exports = mongoose.model("Employer", EmployerShema);
