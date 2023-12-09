import dbConn from '../config/database.js'

const getAllUsers = () => {
    const SQLQuery = "SELECT * FROM tbl_user";

    return dbConn.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO tbl_user (name, username, password, email, avatar) VALUES ('${body.name}', '${body.username}', '${body.password}', '${body.email}', '${body.avatar}')`;

    return dbConn.execute(SQLQuery);
}

const updateUser = (idUser, body) => {
    const SQLQuery = `UPDATE tbl_user SET name='${body.name}', username='${body.username}', password='${body.password}', email='${body.email}', avatar='${body.avatar}' WHERE id=${idUser}`;

    return dbConn.execute(SQLQuery);
}

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM tbl_user WHERE id=${idUser};`

    return dbConn.execute(SQLQuery);
}

export default {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}