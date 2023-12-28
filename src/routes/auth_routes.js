import express from 'express';
import AuthController from '../controllers/auth_controller.js';
import AccessValidation from '../middleware/accessValidation.js';

const router = express.Router();

// todo: Login - POST
router.post('/login', AuthController.login);

// todo: Register - POST
router.post('/register', AuthController.register);

// todo: Forgot Password - POST
router.post('/forgot-password', AuthController.forgotPassword);

// todo: Change Password - GET
router.get('/change-password/:token', AuthController.getPayloadChangePassword);

// todo: Change Password - POST
router.post('/change-password/:id', AccessValidation, AuthController.changePassword);
export default router;