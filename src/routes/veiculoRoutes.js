const { Router } = require('express');
const routes = Router();
const { createVeiculo } = require('../controllers/veiculoController');

routes.post('/', createVeiculo);

module.exports = routes;
