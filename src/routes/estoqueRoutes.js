const { Router } = require('express');
const routes = Router();
const { findAllVeiculos, findVeiculoById } = require('../controllers/veiculosController');
const { validateIdParam } = require('../middlewares/validateParam');
const { idParam: idParamSchema } = require('../schemas/idParam');

routes.get('/', findAllVeiculos);
routes.get('/veiculo/:id', validateIdParam(idParamSchema), findVeiculoById);
module.exports = routes;
