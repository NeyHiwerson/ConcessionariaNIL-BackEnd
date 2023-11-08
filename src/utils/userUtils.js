const { findEmail } = require('../repositories/userRepository')

const findByEmail = (email) => {
  return findEmail(email);
};






module.exports = {
  findByEmail
}
