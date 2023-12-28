import express from 'express';
import UserController from '../controllers/products_controller.js';
import AccessValidation from '../middleware/accessValidation.js';


const router = express.Router();


router.post('/', AccessValidation, UserController.createNewComment);

router.get('/', AccessValidation, UserController.getAllProduct);

router.get('/:id_product', AccessValidation, UserController.getAllProduct);

router.get('/:id_user', AccessValidation, UserController.getAllProduct);

router.patch('/:id_product', AccessValidation, UserController.updateProduct);

router.delete('/:id_product', AccessValidation, UserController.deleteProduct);
