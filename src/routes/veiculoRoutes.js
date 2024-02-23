const { Router } = require('express');
const routes = Router();
const { createVeiculo, editVeiculo } = require('../controllers/veiculoController');
const { validateIdParam } = require('../middlewares/validateParam');
const { idParam: idParamSchema } = require('../schemas/idParam');

routes.post('/', createVeiculo);

routes.post('/:id', validateIdParam(idParamSchema), editVeiculo);

module.exports = routes;
