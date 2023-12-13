import {Sequelize, DataTypes} from 'sequelize';

const sequelize = new Sequelize("ecommerce", "root", "", {
        host: 'localhost', 
        dialect: 'mysql', 
});

export {sequelize, DataTypes};