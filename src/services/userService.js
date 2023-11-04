const bcrypt = require('bcrypt');
const { insert } = require('../repositories/userRepository');
const AppError = require('../errors/AppError');

const executeCreate = async (name, email, password) => {
  //implementar o find by email para validar o email unico**
  try {
    const encriptPassword = await bcrypt.hash(password, 10);
    const user = await insert(name, email, encriptPassword);
    return user[0];
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
