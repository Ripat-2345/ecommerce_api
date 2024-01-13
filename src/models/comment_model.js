import { sequelize, DataTypes } from "../config/database.js";

const CommentsModel = sequelize.define('tbl_comment', {
    comment_text: DataTypes.TEXT,
    datetime: DataTypes.TIME,
    id_product: DataTypes.INTEGER,
    id_user: {
        type: DataTypes.INTEGER, references: {
            model: 'tbl_user', // 'fathers' refers to table name
            key: 'id', // 'id' refers to column name in fathers table
        },
    }
});

export default CommentsModel;