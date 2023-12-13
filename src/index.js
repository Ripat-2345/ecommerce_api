import express from 'express';
import AuthRoutes from './routes/auth_routes.js';
import UsersRoutes from './routes/users_routes.js';
import MiddlewareLogRequest from './middleware/logs.js';
import dotenv from 'dotenv';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000

// todo: block code middleware here
app.use(MiddlewareLogRequest);
app.use(express.json());

// todo: block code use route here
app.use('/auth', AuthRoutes);
app.use('/users', UsersRoutes);

app.listen(PORT, () => {
    console.log(`server running in localhost:${PORT}`);
});