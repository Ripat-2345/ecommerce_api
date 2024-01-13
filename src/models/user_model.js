import {sequelize, DataTypes} from "../config/database.js";
import CommentsModel from './comment_model.js';

const UsersModel = sequelize.define('tbl_user', {
    name: DataTypes.STRING(60), 
    username: DataTypes.STRING(60), 
    password: DataTypes.STRING(60), 
    email: DataTypes.STRING(60), 
    avatar: DataTypes.STRING(60), 
});

UsersModel.hasMany(CommentsModel,  {
    foreignKey: 'id',
});

CommentsModel.belongsTo(UsersModel, {
    foreignKey: 'id_user'
});

export default UsersModel;