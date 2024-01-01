import express from 'express';
import ProductController from '../controllers/products_controller.js';
import AccessValidation from '../middlewares/accessValidation.js';
import MiddlewareUploadImage from '../middlewares/uploadImageMiddleware.js';

const router = express.Router();

// todo: CREATE - POST
router.post('/', [AccessValidation, MiddlewareUploadImage.single('picture')], ProductController.createNewProduct);

// todo: READ - GET
router.get('/', AccessValidation, ProductController.getAllProduct);

// router.get('/:id_product', AccessValidation, ProductController.getAllProduct);

// router.get('/:id_user', AccessValidation, ProductController.getAllProduct);

// todo: UPDATE - PATCH
router.patch('/:id_product', AccessValidation, ProductController.updateProduct);

// todo: DELETE - DEL
router.delete('/:id_product', AccessValidation, ProductController.deleteProduct);

export default router;