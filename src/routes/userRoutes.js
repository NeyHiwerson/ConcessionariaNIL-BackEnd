const { Router } = require('express');
const routes = Router();
const { findAllUsers } = require('../controllers/userController');

routes.get('/', findAllUsers);

routes.post('/', (req, res) => {
  const { name, email, password } = req.body;
  return res.status(201).json({ mensage: `NILmultimarcas userRoute createUser ${name}, ${email}, ${password}` });

});


module.exports = routes;
