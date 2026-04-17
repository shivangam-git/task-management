import { Router } from 'express';
import { register, login, refresh, logout, getMe } from '../controllers/auth.controller';
import { validate } from '../middleware/validate.middleware';
import { authMiddleware } from '../middleware/auth.middleware';
import { registerSchema, loginSchema, refreshTokenSchema } from '../validators/auth.validator';

const router = Router();

// POST /api/auth/register
router.post('/register', validate(registerSchema), register);

// POST /api/auth/login
router.post('/login', validate(loginSchema), login);

// POST /api/auth/refresh
router.post('/refresh', validate(refreshTokenSchema), refresh);

// POST /api/auth/logout
router.post('/logout', validate(refreshTokenSchema), logout);

// GET /api/auth/me - Get current user (protected)
router.get('/me', authMiddleware, getMe);

export default router;
