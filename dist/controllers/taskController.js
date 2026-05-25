"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasksController = getTasksController;
exports.createTaskController = createTaskController;
exports.updateTaskController = updateTaskController;
const taskService_1 = require("../services/taskService");
const taskService_2 = require("../services/taskService");
const taskService_3 = require("../services/taskService");
async function getTasksController(req, res) {
    try {
        const tasks = await (0, taskService_1.getTasks)();
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}
async function createTaskController(req, res) {
    try {
        const task = await (0, taskService_2.createTask)(req.body);
        res.json(task);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating task' });
    }
}
async function updateTaskController(req, res) {
    try {
        const taskId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const updatedTask = await (0, taskService_3.updateTask)(taskId);
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        return res.status(200).json(updatedTask);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error updating task' });
    }
}
//# sourceMappingURL=taskController.js.map