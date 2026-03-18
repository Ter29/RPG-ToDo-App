import { Task } from '../models/task';
import { taskRepository } from '../repositories/taskRepository';

export async function getTasks() {
  return await taskRepository.getAllTasks();
}

export async function createTask(task: Task) {
  const newTask = {
    ...task,
    id: Date.now().toString()
  };

  return await taskRepository.createTask(newTask);
}