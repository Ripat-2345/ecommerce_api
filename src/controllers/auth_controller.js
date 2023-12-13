import bcrypt from 'bcrypt';
import UsersModel from '../models/user_model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

// todo: login user
const login = async (req, res) => {
    try {
        const password = req.body.password;
        await UsersModel.findOne({where:{email:req.body.email}}).then((data) => {
            if(data != null){
                bcrypt.compare(password, data.dataValues.password).then((result) => {
                    if(result == true){
                        // todo: create token jwt
                        const payload = {
                            status: 200,
                            message: "User Login",
                            data: data.dataValues,
                        }
                        const secret = process.env.JWT_SECRET;
                        const expiresIn = 60 * 60 * 1
                        const token = jwt.sign(payload, secret, {expiresIn: expiresIn});
                        
                        // todo: send response with token jwt
                        res.status(200).json({
                            status: 200,
                            message: "User Login",
                            data: data.dataValues,
                            token: token,
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