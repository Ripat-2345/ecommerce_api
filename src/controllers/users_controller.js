import bcrypt from 'bcrypt';
import UsersModel from '../models/user_model.js';

// todo: get all users
const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
        res.status(200).json({
            status: 200,
            message: "GET all users",
            data: data,
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
            await UsersModel.createNewUser(body).then(() => {
                res.status(200).json({
                    status: 200,
                    message: "POST create new user",
                    data: body,
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
        await UsersModel.updateUser(idUser, body);
        res.status(200).json({
            status: 200,
            message: `PATCH update user id:${idUser}`,
            data: {
                id: idUser,
                ...body
            },
        });
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
        await UsersModel.deleteUser(idUser);
        res.status(200).json({
            status: 200,
            message: `DELETE delete user id:${idUser}`,
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