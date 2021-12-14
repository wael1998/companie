var Employer = require("../models/Employer");
const axios = require("axios");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");

const getEmployer = async (req, res) => {
 
 
  axios.get('http://localhost:8086/api/employers',{
    data: {},
  }).then(resp => {
    res.status(200).json(resp.data)
  
})
.catch(function (error) {
  console.log(error);
})

};

const createEmployer = async (req, res) => {
  var newEmployer = new Employer();
  newEmployer.nom = req.body.nom;
  newEmployer.prenom = req.body.prenom;
  newEmployer.email = req.body.email;
  newEmployer.salaire = req.body.salaire;


  axios.post('http://localhost:8086/api/employers', newEmployer)
  .then(response =>  res.status(200).json(newEmployer))
  .catch(error => {
      console.error('There was an error!', error);
  });
};

const updateEmployer = async (req, res) => {
  const { id } = req.params;
  axios.put(`http://localhost:8086/api/employers/${id}`, {
     nom: req.body.nom,
     prenom: req.body.prenom,
     email: req.body.email,
     salaire: req.body.salaire
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(err);
  });
};

const deleteEmployer = async (req, res) => {
  const { id } = req.params;

  axios.delete(`http://localhost:8086/api/employers/${id}`);
  res.json({ message: "Emloyer deleted successfully." });
};

module.exports = { getEmployer, createEmployer, updateEmployer, deleteEmployer };
