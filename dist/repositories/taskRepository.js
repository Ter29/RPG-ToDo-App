"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRepository = void 0;
const tasks = [
    { id: "1", title: "Go gym", xp: 5, completed: false },
    { id: "2", title: "Learn React", xp: 10, completed: false }
];
async function getAllTasks() {
    return tasks;
}
async function createTask(task) {
    tasks.push(task);
    return task;
}
async function toggleTaskCompletion(id) {
    const task = tasks.find((currentTask) => currentTask.id === id);
    if (!task) {
        return null;
    }
    task.completed = !task.completed;
    return task;
}
exports.taskRepository = {
    getAllTasks,
    createTask,
    toggleTaskCompletion,
};
//# sourceMappingURL=taskRepository.js.map