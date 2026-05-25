"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controllers/taskController");
const taskController_2 = require("../controllers/taskController");
const taskController_3 = require("../controllers/taskController");
const router = express_1.default.Router();
router.post('/tasks', taskController_2.createTaskController);
router.get("/tasks", taskController_1.getTasksController);
router.patch('/tasks/:id', taskController_3.updateTaskController);
exports.default = router;
//# sourceMappingURL=taskRoute.js.map