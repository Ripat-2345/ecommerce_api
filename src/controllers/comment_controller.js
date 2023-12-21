import CommentsModel from '../models/comment_model.js';

// todo: get all comment by id_product
const getAllbyIDProduct =  async (req, res) => {
    const idComment = req.params.id_product
    try {
        await CommentsModel.findAll({where: {id_product : idComment,},}).then((results) => {
            res.status(200).json({
                status: 200,
                message: "GET all Comment from Product",
                data: results,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

// todo: create new comment
const createNewComment = (req, res) => {
    const body = req.body;
    try {
        CommentsModel.create(body).then((result) => {
            res.status(200).json({
                status: 200,
                message: "POST create new comment",
                data: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
}

// todo: update comment
const updateComment = (req, res) => {
    const idComment = req.params.id_comment;
    const body = req.body;
    try {
        CommentsModel.update(body, {where: {id:idComment, id_user: body.id_user}}).then((result) => {
            res.status(200).json({
                status: 200,
                message: `PATCH update comment id:${idComment}`,
                data: {
                    id_comment: +idComment,
                    ...body
                },
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

// todo: delete comment
const deleteComment = (req, res) => {
    const idComment = req.params.id_comment;
    try {
        CommentsModel.destroy({where: {id: idComment}}).then(() => {
            res.status(200).json({
                status: 200,
                message: `DELETE delete comment id:${idComment}`,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

export default {
    getAllbyIDProduct,
    createNewComment,
    updateComment,
    deleteComment,
}