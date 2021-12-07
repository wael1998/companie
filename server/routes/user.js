const express = require("express");
const userController = require("../controllers/User");

const UserRouter = express.Router();

router.route("/").get(userController.getProduct);
router.post("/register", userController.createProduct);
router.patch("/:id", userController.updateProduct);
router.delete("/:id", userController.DeleteProduct);

module.exports = UserRouter;
