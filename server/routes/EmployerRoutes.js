const express = require("express");
const EmployerController = require("../controllers/Employer");


const { body, validationResult } = require("express-validator");
const EmployerRoutes = express.Router();

EmployerRoutes.route("/").get(EmployerController.getEmployer);
EmployerRoutes.post(
  "/add",
  EmployerController.createEmployer
);
EmployerRoutes.patch("/:id", EmployerController.updateEmployer);
EmployerRoutes.delete("/:id", EmployerController.deleteEmployer);

module.exports = EmployerRoutes;
