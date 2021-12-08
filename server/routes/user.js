const express = require("express");
const userController = require("../controllers/User");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const UserRouter = express.Router();

UserRouter.get("/", auth, userController.getUser);
UserRouter.post("/login", userController.login);
UserRouter.post("/register", userController.register);
module.exports = UserRouter;
