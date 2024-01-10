import ProductsModel from '../models/products_model.js';
import fs from 'fs';
import path from 'path';


// todo: get all cart by id_product
const getAllProduct = (req, res) => {
    try {
        ProductsModel.findAll().then((results) => {
            res.status(200).json({
                status: 200,
                message: "GET all products",
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

const getAllProductByIdUser = (req, res) => {
    const idUser = req.params.id_user
    try {
        ProductsModel.findAll({ where: { id_user: idUser } }).then((results) => {
            res.status(200).json({
                status: 200,
                message: `GET all product by ${idUser}`,
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
    let body = req.body;
    const image = req.file.path;
    try {
        if (!req.file) {
            res.status(422).json({
                status: 422,
                message: "Picture Harus Di Upload!",
            });
        }
        body.picture = image
        ProductsModel.create(body).then((result) => {
            res.status(200).json({
                status: 200,
                message: "POST create new product",
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
    let body = req.body;
    try {
        if (typeof req.file !== 'undefined') {
            ProductsModel.findOne({ where: { id: idProduct } }).then((data) => {
                body.picture = req.file.path;
                ProductsModel.update(body, { where: { id: idProduct } }).then(() => {
                    fs.unlinkSync(path.join(`images/${data.picture.split('\\')[1]}`));
                    res.status(200).json({
                        status: 200,
                        message: `PATCH update product id:${idProduct}`,
                        data: {
                            id: +idProduct,
                            ...body
                        },
                    });
                });
            })
        } else {
            ProductsModel.update(body, { where: { id: idProduct } }).then(() => {
                res.status(200).json({
                    status: 200,
                    message: `PATCH update product id:${idProduct}`,
                    data: {
                        id: +idProduct,
                        ...body
                    },
                });
            });
        }
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
        ProductsModel.findOne({ where: { id: idProduct } }).then((data) => {
            ProductsModel.destroy({ where: { id: idProduct } }).then(() => {
                fs.unlinkSync(path.join(`images/${data.picture.split('\\')[1]}`));
                res.status(200).json({
                    status: 200,
                    message: `DELETE delete product id:${idProduct}`,
                });
            });
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

export default {
    getAllProduct,
    getAllProductByIdUser,
    createNewProduct,
    updateProduct,
    deleteProduct,
}