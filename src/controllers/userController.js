const AppError = require('../errors/AppError');
const { executeCreate, executeLogin, executefindUsers } = require('../services/userService');

const createUser = async (req, res) => {
    const { name, email, password, userAdm } = req.body;
    try {
        const createdUser = await executeCreate(name, email, password, userAdm);
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
        return res.status(200).json(token);
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
        console.log(userId);
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

module.exports = {
    createUser,
    loginUser,
    findAllUsers,
};
