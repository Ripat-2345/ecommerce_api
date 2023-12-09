import express from 'express';
import UserController from '../controllers/users_controller.js';

const router = express.Router();

// todo: READ - GET
router.get('/', UserController.getAllUsers);

// todo: CREATE - POST
router.post('/', UserController.createNewUser);

// todo: UPDATE - PATCH
router.patch('/:id_user', UserController.updateUser);

// todo: DELETE - DELETE
router.delete('/:id_user', UserController.deleteUser);

export default router;