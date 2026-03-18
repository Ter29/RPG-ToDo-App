import express from 'express';
import { getTasksController } from '../controllers/taskController';
import { createTaskController } from '../controllers/taskController';


const router = express.Router();

router.post('/tasks', createTaskController);
router.get("/tasks", getTasksController);

export default router;