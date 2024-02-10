const { Router } = require('express');
const routes = Router();
const { findAllVeiculos } = require('../controllers/veiculosController');

routes.get('/', findAllVeiculos);

module.exports = routes;
