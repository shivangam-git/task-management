import { Router } from 'express';
import { getTasks, getTask, createTask, updateTask, deleteTask } from '../controllers/task.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { validate, validateQuery } from '../middleware/validate.middleware';
import { createTaskSchema, updateTaskSchema, taskQuerySchema } from '../validators/task.validator';

const router = Router();

// All routes are protected
router.use(authMiddleware);

// GET /api/tasks - Get all tasks for the user
router.get('/', validateQuery(taskQuerySchema), getTasks);

// POST /api/tasks - Create a new task
router.post('/', validate(createTaskSchema), createTask);

// GET /api/tasks/:id - Get a single task
router.get('/:id', getTask);

// PUT /api/tasks/:id - Update a task
router.put('/:id', validate(updateTaskSchema), updateTask);

// DELETE /api/tasks/:id - Delete a task
router.delete('/:id', deleteTask);

export default router;
