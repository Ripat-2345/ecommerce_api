import dbConn from '../config/database.js'

const loginUser = (body) => {
    const SQLQuery = `SELECT * FROM tbl_user WHERE email='${body.email}'`;

    return dbConn.execute(SQLQuery);
}

const registerUser = (body) => {
    const SQLQuery = `INSERT INTO tbl_user (name, username, password, email, avatar) VALUES ('${body.name}', '${body.username}', '${body.password}', '${body.email}', '${body.avatar}')`;

    return dbConn.execute(SQLQuery);
}

export default {
    loginUser,
    registerUser
}