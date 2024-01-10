import express from 'express';
import ProductController from '../controllers/products_controller.js';
import AccessValidation from '../middlewares/accessValidation.js';
import MiddlewareUploadImage from '../middlewares/uploadImageMiddleware.js';

const router = express.Router();

// todo: CREATE - POST
router.post('/', [AccessValidation, MiddlewareUploadImage.single('picture')], ProductController.createNewProduct);

// todo: READ - GET
router.get('/', ProductController.getAllProduct);

router.get('/:id_user', AccessValidation, ProductController.getAllProductByIdUser);

// todo: UPDATE - PATCH
router.patch('/:id_product', [AccessValidation, MiddlewareUploadImage.single('picture')], ProductController.updateProduct);

// todo: DELETE - DEL
router.delete('/:id_product', AccessValidation, ProductController.deleteProduct);

export default router;