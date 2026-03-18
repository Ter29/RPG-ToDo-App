import { Task } from '../models/task';

const tasks: Task[] = [
  { id: "1", title: "Go gym", xp: 5, completed: false },
  { id: "2", title: "Learn React", xp: 10, completed: false }
];

async function getAllTasks() {
  return tasks;
}

async function createTask(task: Task) {
  tasks.push(task);
  return task;
}

export const taskRepository = {
  getAllTasks,
  createTask,
};