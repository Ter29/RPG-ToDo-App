import express from 'express';
import { getTasksController } from '../controllers/taskController';
import { createTaskController } from '../controllers/taskController';
import { updateTaskController } from '../controllers/taskController';


const router = express.Router();

router.post('/tasks', createTaskController);
router.get("/tasks", getTasksController);
router.patch('/tasks/:id', updateTaskController);

export default router;
