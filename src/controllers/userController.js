const AppError = require('../errors/AppError');
const { executeCreate } = require('../services/userService');

const createUser = async(req, res) => {
  const { name, email, password } = req.body;
  try {
    const createdUser = await executeCreate(name, email, password);
    return res.status(201).json(createdUser);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Server error.' });
  }
};

const findAllUsers = ( async(req, res) => {
  const allUsers = await knex('usuarios').select('*');
  return res.json(allUsers);
});

module.exports = {
  createUser,
  findAllUsers,

}
