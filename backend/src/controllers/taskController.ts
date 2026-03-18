import { getTasks } from '../services/taskService';
import { Request, Response } from 'express';
import { createTask } from '../services/taskService';

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