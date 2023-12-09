import express from 'express';
import UsersRoutes from './routes/users_routes.js';
import MiddlewareLogRequest from './middleware/logs.js';

const app = express();

// todo: block code middleware here
app.use(MiddlewareLogRequest);
app.use(express.json());

// todo: block code use route here
app.use('/users', UsersRoutes);

app.listen(3000, () => {
    console.log(`server running in localhost:3000`);
});