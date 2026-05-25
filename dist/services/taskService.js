"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasks = getTasks;
exports.createTask = createTask;
exports.updateTask = updateTask;
const taskRepository_1 = require("../repositories/taskRepository");
async function getTasks() {
    return await taskRepository_1.taskRepository.getAllTasks();
}
async function createTask(task) {
    const newTask = {
        ...task,
        id: Date.now().toString()
    };
    return await taskRepository_1.taskRepository.createTask(newTask);
}
async function updateTask(id) {
    return await taskRepository_1.taskRepository.toggleTaskCompletion(id);
}
//# sourceMappingURL=taskService.js.map