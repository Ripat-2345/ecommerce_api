import CartsModel from '../models/cart_model.js';

// todo: get all cart by id_user
const getAllCartUser = (req, res) => {
    try {
        CartsModel.findAll({where:{id_user: req.params.id_user}}).then((results) => {
            res.status(200).json({
                status: 200,
                message: "GET all cart by id_user",
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

const createdNewCart = (req, res) => {
    const body = req.body;
    try {
        CartsModel.create(body).then((result) => {
            res.status(200).json({
                status: 200,
                message: "POST create new cart",
                data: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

const updatedCartUser = (req, res) => {
    const idCart = req.params.id_cart;
    const body = req.body;
    try {
        CartsModel.update(body, {where: {id:idCart, id_user: body.id_user}}).then((result) => {
            res.status(200).json({
                status: 200,
                message: `PATCH update cart id:${idCart}`,
                data: {
                    id: +idCart,
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

const deleteCartUser = (req, res) => {
    const idCart = req.params.id_cart;
    try {
        CartsModel.destroy({where: {id: idCart}}).then(() => {
            res.status(200).json({
                status: 200,
                message: `DELETE delete cart id:${idCart}`,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

export default{
    getAllCartUser,
    createdNewCart,
    updatedCartUser,
    deleteCartUser,
}