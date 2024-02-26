const { Router } = require('express');
const routes = Router();
const { findAllUsers, findUser } = require('../controllers/userController');

routes.get('/', findAllUsers);

routes.get('/colaborador', findUser)

module.exports = routes;
