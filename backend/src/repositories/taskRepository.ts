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

async function toggleTaskCompletion(id: string) {
  const task = tasks.find((currentTask) => currentTask.id === id);

  if (!task) {
    return null;
  }

  task.completed = !task.completed;
  return task;
}

export const taskRepository = {
  getAllTasks,
  createTask,
  toggleTaskCompletion,
};
