import bcrypt from 'bcrypt';
import AuthModel from '../models/auth_model.js';

// todo: login user
const login = async (req, res) => {
    try {
        const [data] = await AuthModel.loginUser(req.body);
        if(data.length > 0){
            bcrypt.compare(req.body.password, data[0].password).then((result) => {
                if(result == true){
                    res.status(200).json({
                        status: 200,
                        message: "User Login",
                        data: data,
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
            await AuthModel.registerUser(body).then(() => {
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

export default {
    login,
    register,
}