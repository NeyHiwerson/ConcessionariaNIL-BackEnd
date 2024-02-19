const { Router } = require('express');
const routes = Router();
const { findAllUsers } = require('../controllers/userController');

routes.get('/:cpfCnpj', (req, res) => {
  const { cpfCnpj } = req.params;
  console.log(cpfCnpj);
  return res.status(200).json({ mensage: 'Rota para buscar cliente no banco' });
});

module.exports = routes;
