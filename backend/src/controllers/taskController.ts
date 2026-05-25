import { getTasks } from '../services/taskService';
import { Request, Response } from 'express';
import { createTask } from '../services/taskService';
import { updateTask } from '../services/taskService';

export async function getTasksController(req: Request, res: Response) {
    try {
        const tasks = await getTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}


export async function createTaskController(req: Request, res: Response) {
  try {
    const task = await createTask(req.body);
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task' });
  }
}

export async function updateTaskController(req: Request, res: Response) {
  try {
    const taskId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const updatedTask = await updateTask(taskId);

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    return res.status(200).json(updatedTask);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating task' });
  }
}
