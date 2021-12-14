const express = require("express");
const AvionController = require("../controllers/Avion");


const { body, validationResult } = require("express-validator");
const AvionRoutes = express.Router();

AvionRoutes.route("/").get(AvionController.getAvion);
AvionRoutes.post(
  "/add",
  AvionController.createAvion
);
AvionRoutes.patch("/:id", AvionController.updateAvion);
AvionRoutes.delete("/:id", AvionController.deleteAvion);

module.exports = AvionRoutes;
