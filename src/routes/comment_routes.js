import express from 'express';
import CommentController from '../controllers/comment_controller.js';
import AccessValidation from '../middlewares/accessValidation.js';

const router = express.Router();

// todo: READ - GET
router.get('/:id_product', AccessValidation, CommentController.getAllbyIDProduct);

// todo: CREATE - POST
router.post('/', AccessValidation, CommentController.createNewComment);

// todo: UPDATE - PATCH
router.patch('/:id_comment', AccessValidation, CommentController.updateComment);

// todo: DELETE - DELETE
router.delete('/:id_comment', AccessValidation, CommentController.deleteComment);

export default router;