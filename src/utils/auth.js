const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = async (id_user) => {
  const token = jwt.sign({ id_user }, process.env.JWT_SECRET, {
    expiresIn: '4h',
  });
  return token;
};
module.exports = {
  generateToken
}
