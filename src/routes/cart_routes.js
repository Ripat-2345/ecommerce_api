import express from 'express';
import CartController from '../controllers/cart_controller.js';
import AccessValidation from '../middleware/accessValidation.js';

const router = express.Router();

// todo: READ - GET
router.get('/:id_user', AccessValidation, CartController.getAllCartUser);

// todo: CREATE - POST
router.post('/', AccessValidation, CartController.createdNewCart);

// todo: UPDATE - PATCH
router.patch('/:id_cart', AccessValidation, CartController.updatedCartUser);

// todo: DELETE - DELETE
router.delete('/:id_cart', AccessValidation, CartController.deleteCartUser);

export default router;