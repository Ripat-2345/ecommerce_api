import {sequelize, DataTypes} from "../config/database.js";

const CommentsModel = sequelize.define('tbl_comment', {
    comment_text: DataTypes.TEXT, 
    datetime: DataTypes.TIME, 
    id_product: DataTypes.INTEGER, 
    id_user : DataTypes.INTEGER
});

export default CommentsModel;