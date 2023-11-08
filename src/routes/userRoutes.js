const { Router } = require('express');
const routes = Router();
const { findAllUsers } = require('../controllers/userController');

routes.get('/', findAllUsers);

module.exports = routes;
