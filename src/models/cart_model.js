import {sequelize, DataTypes} from "../config/database.js";

const CartsModel = sequelize.define('tbl_cart', {
    id_product: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
});

export default CartsModel;