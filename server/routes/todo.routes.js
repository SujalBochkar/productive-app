const express = require("express");
const router = express.Router();

const { addTaskTypeMiddleware } = require("../middleware/taskTypeAdd");
const {
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
  getSingleTodo,
  completeTodo,
  incompleteTodo,
  getTodosByStatus,
} = require("../controller/todo.controller");

const {
  getTaskTypes,
  addTaskType,
  deleteTaskType,
} = require("../controller/taskType.controller");

// api/v1/todo/
router.get("/all", getTodo);
router.post("/add", addTaskTypeMiddleware, addTodo);
router.post("/update/:id", addTaskTypeMiddleware, updateTodo);
router.post("/delete/:id", deleteTodo);

router.get("/single/:id", getSingleTodo);
router.post("/complete/:id", completeTodo);
router.post("/incomplete/:id", incompleteTodo);
router.get("/status/:status", getTodosByStatus);

router.get("/taskType", getTaskTypes);
router.post("/taskType/add", addTaskType);
router.delete("/taskType/delete/:id", deleteTaskType);

module.exports = router;
