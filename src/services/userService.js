const bcrypt = require('bcrypt');
const { insert, findAll, findUserByUserId } = require('../repositories/userRepository');
const AppError = require('../errors/AppError');
const { findByEmail, findUserById } = require('../utils/userUtils');
const { generateToken } = require('../utils/auth');

const executeCreate = async (nome, email, password, cargo, dt_nascimento, telefone,
    ctt_emergencia, filial_atual) => {
    try {
        const findEmail = await findByEmail(email);
        if (findEmail) {
            throw new AppError('Email already exists.', 400);
        }
        const encriptPassword = await bcrypt.hash(password, 10);
        const user = await insert(nome, email, encriptPassword, cargo, dt_nascimento, telefone,
            ctt_emergencia, filial_atual);
        return user[0];
    } catch (error) {
        if (error instanceof AppError) {
            throw error;
        }
        throw new AppError('Server error.', 500);
    }
};

const executeLogin = async (email, password) => {
    const user = await findByEmail(email);
    if (!user) {
        throw new AppError('Email or password invalid.', 401);
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new AppError('Email or password invalid.', 401);
    }
    return generateToken(user.id_colaborador);
};

const executefindUsers = async (userId) => {
    const user = await findUserById(userId);
    if (!user.user_adm){
        throw new AppError('You are not authorized to access this resource.', 401);
    }
    const allUsers = await findAll();
    return allUsers;
};

const executeFindUser = async (userId) => {
    const user = await findUserByUserId(userId);
    return user[0];
};

module.exports = {
    executeCreate,
    executeLogin,
    executefindUsers,
    executeFindUser
};
