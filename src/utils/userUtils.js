const { findEmail, findUser } = require('../repositories/userRepository')

const findByEmail = (email) => {
  return findEmail(email);
};

const findUserById = (id) => {
  return findUser(id);
};





module.exports = {
  findByEmail,
  findUserById
}
