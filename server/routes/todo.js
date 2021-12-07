const express = require("express");
const todoController = require("../controllers/Todo");

const TodoRouter = express.Router();

TodoRouter.route("/").get(todoController.getTodo);
TodoRouter.post("/add", todoController.createTodo);
TodoRouter.patch("/:id", todoController.updateTodo);
TodoRouter.delete("/:id", todoController.DeleteTodo);

module.exports = TodoRouter;
