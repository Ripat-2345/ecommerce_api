import express, { application } from 'express';
import AuthRoutes from './routes/auth_routes.js';
import UsersRoutes from './routes/users_routes.js';
import CommentRoutes from './routes/comment_routes.js'
import ProductRoutes from './routes/products_routes.js'
import MiddlewareLogRequest from './middlewares/logs.js';
import HeaderMiddleware from './middlewares/headerMiddleware.js'
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// todo: block code middleware here
app.use(MiddlewareLogRequest);
app.use(HeaderMiddleware);
app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, '../images')));

// todo: block code use route here
app.use('/auth', AuthRoutes);
app.use('/users', UsersRoutes);
app.use('/comments', CommentRoutes)
app.use('/products', ProductRoutes)

app.listen(PORT, () => {
    console.log(`server running in localhost:${PORT}`);
});