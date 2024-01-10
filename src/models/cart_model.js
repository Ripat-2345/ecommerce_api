import { sequelize, DataTypes } from "../config/database.js";

const CartsModel = sequelize.define('tbl_cart', {
    id_product: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tbl_product', // 'fathers' refers to table name
            key: 'id', // 'id' refers to column name in fathers table
        }
    },
    id_user: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
});

export default CartsModel;