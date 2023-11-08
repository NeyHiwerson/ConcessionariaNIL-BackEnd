const bcrypt = require('bcrypt');
const { insert, findAll } = require('../repositories/userRepository');
const AppError = require('../errors/AppError');
const { findByEmail } = require('../utils/userUtils');

const executeCreate = async (name, email, password, userAdm) => {
    try {
        const findEmail = await findByEmail(email);
        if (findEmail) {
            throw new AppError('Email already exists.', 400); // Lança uma exceção genérica
        }
        const encriptPassword = await bcrypt.hash(password, 10);
        const user = await insert(name, email, encriptPassword, userAdm);
        return user[0];
    } catch (error) {
        if (error instanceof AppError) {
            throw error; // Lança a exceção para ser tratada no controlador
        }
        throw new AppError('Server error.', 500); // Lança uma exceção genérica
    }
};

const executefindUsers = async () => {
    const allUsers = await findAll();
    return allUsers;
};

module.exports = {
    executeCreate,
    executefindUsers,
};
