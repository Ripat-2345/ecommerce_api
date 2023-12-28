import bcrypt from 'bcrypt';
import UsersModel from '../models/user_model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config()

// todo: login user
const login = async (req, res) => {
    try {
        const password = req.body.password;
        await UsersModel.findOne({ where: { email: req.body.email } }).then((data) => {
            if (data != null) {
                bcrypt.compare(password, data.dataValues.password).then((result) => {
                    if (result == true) {
                        // todo: create token jwt
                        const payload = {
                            status: 200,
                            message: "User Login",
                            data: data.dataValues,
                        }
                        const secret = process.env.JWT_SECRET;
                        const expiresIn = 60 * 60 * 1
                        const token = jwt.sign(payload, secret, { expiresIn: expiresIn });

                        // todo: send response with token jwt
                        res.status(200).json({
                            status: 200,
                            message: "User Login",
                            data: data.dataValues,
                            token: token,
                        });
                    } else {
                        res.status(401).json({
                            status: 401,
                            message: "Password Salah!",
                        });
                    }
                });
            } else {
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

// todo: forgot password
const forgotPassword = async (req, res) => {
    const email = req.body.email;
    try {
        await UsersModel.findOne({ where: { email: email } }).then((data) => {
            if (data != null) {
                const payload = {
                    status: 200,
                    message: "User Data",
                    data: data.dataValues,
                }
                const secret = process.env.JWT_SECRET;
                const expiresIn = 60 * 60 * 1
                const token = jwt.sign(payload, secret, { expiresIn: expiresIn });

                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'ripatalsafar@gmail.com',
                        pass: 'rqpd dxxu kjle ftjz'
                    }
                });

                var mailOptions = {
                    from: 'ecommerceApp@gmail.com',
                    to: email,
                    subject: 'Change Your Password From Ecommerce App',
                    text: `Save your link dont share : http://localhost:54003/change-password/${token}`
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                        // todo: send response with token jwt
                        res.status(200).json({
                            status: 200,
                            message: "Check User Email",
                            token: token,
                        });
                    }
                });

            } else {
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

const getPayloadChangePassword = (req, res) => {
    try {
        const token = req.params.token;
        const secret = process.env.JWT_SECRET;
        const jwtDecode = jwt.verify(token, secret);
        res.status(200).json({
            ...jwtDecode
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
}

// todo: change password
const changePassword = async (req, res) => {
    let body = req.body;
    const password = req.body.password;
    let confirmPassword = req.body.confirmPassword;
    const idUser = req.params.id;
    try {
        if (password == confirmPassword) {
            bcrypt.hash(body.password, 10, async (err, hash) => {
                body.password = hash;
                await UsersModel.update(body, { where: { id: idUser } }).then(() => {
                    res.status(200).json({
                        status: 200,
                        message: `PATCH change password user id:${idUser}`,
                        data: {
                            id: +idUser,
                            ...body
                        },
                    });
                });
            });
        } else {
            res.status(401).json({
                status: 401,
                message: "Password Tidak Valid!",
            });
        }
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
    forgotPassword,
    getPayloadChangePassword,
    changePassword
}