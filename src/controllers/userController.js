const AppError = require('../errors/AppError');
const { executeCreate, executefindUsers } = require('../services/userService');


const createUser = async(req, res) => {
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


const findAllUsers = ( async(req, res) => {
  const allUsers = await executefindUsers();
  return res.json(allUsers);

});

module.exports = {
  createUser,
  findAllUsers
}
