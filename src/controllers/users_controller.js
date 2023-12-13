import bcrypt from 'bcrypt';
import UsersModel from '../models/user_model.js';

// todo: get all users
const getAllUsers =  async (req, res) => {
    try {
        await UsersModel.findAll().then((results) => {
            res.status(200).json({
                status: 200,
                message: "GET all users",
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

// todo: create new user
const createNewUser = (req, res) => {
    let body = req.body;
    try {
        // todo: encrypt password user
        bcrypt.hash(body.password, 10, async (err, hash) => {
            body.password = hash;
            await UsersModel.create(body).then((result) => {
                res.status(200).json({
                    status: 200,
                    message: "POST create new user",
                    data: result,
                });
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
}

// todo: update user
const updateUser = async (req, res) => {
    const idUser = req.params.id_user;
    const body = req.body;
    try {
        if('password' in body){
            bcrypt.hash(body.password, 10, async (err, hash) => {
                body.password = hash;
                await UsersModel.update(body, {where: {id: idUser}}).then(() => {
                    res.status(200).json({
                        status: 200,
                        message: `PATCH update user id:${idUser}`,
                        data: {
                            id: +idUser,
                            ...body
                        },
                    });
                });
            });
        }else{
            await UsersModel.update(body, {where: {id: idUser}}).then(() => {
                res.status(200).json({
                    status: 200,
                    message: `PATCH update user id:${idUser}`,
                    data: {
                        id: +idUser,
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
}

// todo: delete user
const deleteUser = async(req, res) => {
    const idUser = req.params.id_user;
    try {
        UsersModel.destroy({where: {id: idUser}}).then(() => {
            res.status(200).json({
                status: 200,
                message: `DELETE delete user id:${idUser}`,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
}

export default {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}