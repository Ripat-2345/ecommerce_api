import mysql from 'mysql2';

const dbConn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce'
});

export default dbConn.promise();
