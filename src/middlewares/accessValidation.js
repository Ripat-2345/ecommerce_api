import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

const accessValidation = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json({
            message: 'Token Diperlukan!',
        });
    }
    const token = authorization.split(' ')[1];
    const secret = process.env.JWT_SECRET;
    try {
        const jwtDecode = jwt.verify(token, secret);
        req.userData = jwtDecode;
    }
    catch (error) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    next();
};

export default accessValidation;

