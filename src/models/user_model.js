import {sequelize, DataTypes} from "../config/database.js";

const UsersModel = sequelize.define('tbl_user', {
    name: DataTypes.STRING(60), 
    username: DataTypes.STRING(60), 
    password: DataTypes.STRING(60), 
    email: DataTypes.STRING(60), 
    avatar: DataTypes.STRING(60), 
});

export default UsersModel;