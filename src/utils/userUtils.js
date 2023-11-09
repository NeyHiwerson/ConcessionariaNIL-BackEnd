const { findEmail, findUser } = require('../repositories/userRepository')

const findByEmail = (email) => {
  return findEmail(email);
};

const findUserById = (id_user) => {
  return findUser(id_user);
};


module.exports = {
  findByEmail,
  findUserById
}
