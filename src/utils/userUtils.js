const { findEmail, findUser } = require('../repositories/userRepository')

const findByEmail = (email) => {
  return findEmail(email);
};

const findUserById = (id_colaborador) => {
  return findUser(id_colaborador);
};

module.exports = {
  findByEmail,
  findUserById
}
