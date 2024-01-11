import express from 'express';
import AuthController from '../controllers/auth_controller.js';
import AccessValidation from '../middlewares/accessValidation.js';
import MiddlewareUploadImage from '../middlewares/uploadImageMiddleware.js';

const router = express.Router();

// todo: Login - POST
router.post('/login', AuthController.login);

// todo: Register - POST
router.post('/register', MiddlewareUploadImage.single('avatar'), AuthController.register);

// todo: Forgot Password - POST
router.post('/forgot-password', AuthController.forgotPassword);

// todo: Change Password - POST
router.post('/change-password', AuthController.changePassword);
export default router;