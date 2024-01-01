import express from 'express';
import UserController from '../controllers/users_controller.js';
import AccessValidation from '../middlewares/accessValidation.js';
import MiddlewareUploadImage from '../middlewares/uploadImageMiddleware.js';

const router = express.Router();

// todo: READ - GET
router.get('/', AccessValidation, UserController.getAllUsers);

// todo: CREATE - POST
router.post('/', [AccessValidation, MiddlewareUploadImage.single('avatar')], UserController.createNewUser);

// todo: UPDATE - PATCH
router.patch('/:id_user', AccessValidation, UserController.updateUser);

// todo: DELETE - DELETE
router.delete('/:id_user', AccessValidation, UserController.deleteUser);

export default router;