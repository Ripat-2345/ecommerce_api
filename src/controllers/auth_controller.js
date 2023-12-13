import bcrypt from 'bcrypt';
import UsersModel from '../models/user_model.js';

// todo: login user
const login = async (req, res) => {
    try {
        const password = req.body.password;
        await UsersModel.findOne({where:{email:req.body.email}}).then((data) => {
            if(data != null){
                bcrypt.compare(password, data.dataValues.password).then((result) => {
                    if(result == true){
                        res.status(200).json({
                            status: 200,
                            message: "User Login",
                            data: data.dataValues,
                        });
                    }else{
                        res.status(401).json({
                            status: 401,
                            message: "Password Salah!",
                        });
                    }
                });
            }else{
                res.status(401).json({
                    status: 401,
                    message: "Email Tidak Ditemukan!",
                });
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
}

// todo: register new user
const register = (req, res) => {
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

export default {
    login,
    register,
}