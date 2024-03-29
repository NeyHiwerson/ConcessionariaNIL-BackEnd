const AppError = require('../errors/AppError');
const { executeCreate, executeLogin, executefindUsers, executeFindUser } = require('../services/userService');

const createUser = async (req, res) => {
    const { nome, email, password, cargo, dt_nascimento, telefone,
        ctt_emergencia, filial_atual} = req.body;
    try {
        const createdUser = await executeCreate(nome, email, password, cargo, dt_nascimento, telefone,
            ctt_emergencia, filial_atual);
        return res.status(201).json(createdUser);
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: 'Controller Server error.' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await executeLogin(email, password);
        return res.status(200).json({ type: 'Bearer', token });
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: 'Server error.' });
    }
};

const findAllUsers = async (req, res) => {
    try {
        const userId = req.id_user;
        const allUsers = await executefindUsers(userId);
        return res.json(allUsers);
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: 'Controller Find Server error.' });
    }
};

const findUser = async (req, res) => {
    const id = req.id_user;
    const user = await executeFindUser(id);
    res.status(200).json(user);
};

module.exports = {
    createUser,
    loginUser,
    findAllUsers,
    findUser
};
