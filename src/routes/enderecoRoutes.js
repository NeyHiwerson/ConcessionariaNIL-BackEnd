const { Router } = require('express');
const routes = Router();
const { validateIdParam } = require('../middlewares/validateParam');
const { idParam: idParamSchema } = require('../schemas/idParam');
const { createEndereco, findEnderecos, updateEndereco } = require('../controllers/enderecoController');

routes.post('/:id', validateIdParam(idParamSchema), createEndereco);

routes.get('/:id', validateIdParam(idParamSchema), findEnderecos);

routes.put('/:id', validateIdParam(idParamSchema), updateEndereco);


module.exports = routes;
