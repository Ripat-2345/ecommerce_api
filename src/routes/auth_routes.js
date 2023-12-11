import express from 'express';
import AuthController from '../controllers/auth_controller.js';

const router = express.Router();

// todo: Login - POST
router.post('/login', AuthController.login);

// todo: Register - POST
router.post('/register', AuthController.register);

export default router;