import {sequelize, DataTypes} from "../config/database.js";

const ProductsModel = sequelize.define('tbl_products', {
    name: DataTypes.STRING(60), 
    description: DataTypes.TEXT, 
    price: DataTypes.INTEGER(30), 
    picture: DataTypes.STRING(60), 
    id_user: DataTypes.INTEGER(11),
    datetime: DataTypes.TIME 
});

export default ProductsModel;