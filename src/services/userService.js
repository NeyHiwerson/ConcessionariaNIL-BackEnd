const knex = require('../database/connection');
const AppError = require('../errors/AppError');


const executeCreate = async (name, email, password) => {
  const user = { name, email, password };
  try {
    await knex('usuarios').insert(user);

  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Server error.' });
  }
};

module.exports = {
  executeCreate
};
