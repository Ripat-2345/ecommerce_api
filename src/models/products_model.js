import {sequelize, DataTypes} from "../config/database.js";
import CartsModel from './cart_model.js';

const ProductsModel = sequelize.define('tbl_products', {
    name: DataTypes.STRING(60), 
    description: DataTypes.TEXT, 
    price: DataTypes.INTEGER(30), 
    picture: DataTypes.STRING(60), 
    id_user: DataTypes.INTEGER(11),
    datetime: DataTypes.TIME 
});

ProductsModel.hasMany(CartsModel,  {
    foreignKey: 'id',
});

CartsModel.belongsTo(ProductsModel, {
    foreignKey: 'id_product'
});

export default ProductsModel;