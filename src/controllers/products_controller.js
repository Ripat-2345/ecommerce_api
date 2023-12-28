import ProductsModel from '../models/products_model.js';

// todo: get all cart by id_product
const getAllProduct = (req, res) => {
    const idProduct = req.params.id_product
    try {
        ProductsModel.findAll().then((results) => {
            res.status(200).json({
                status: 200,
                message: "GET all cart by id_product",
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

const createNewProduct = (req, res) => {
    const body = req.body;
    try {
        ProductsModel.create(body).then((result) => {
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

const updateProduct = (req, res) => {
    const idProduct = req.params.id_product;
    const body = req.body;
    try {
        ProductsModel.update(body, {where: {id:idProduct}}).then((result) => {
            res.status(200).json({
                status: 200,
                message: `PATCH update cart id:${idProduct}`,
                data: {
                    id: +idProduct,
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

const deleteProduct = (req, res) => {
    const idProduct = req.params.id_product;
    try {
        ProductsModel.destroy({where: {id: idProduct}}).then(() => {
            res.status(200).json({
                status: 200,
                message: `DELETE delete cart id:${idProduct}`,
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
    getAllProduct,
    createNewProduct,
    updateProduct,
    deleteProduct,
}