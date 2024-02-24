const { Router } = require('express');
const routes = Router();
const validateBody = require('../middlewares/validateBody');
const { cliente: clienteSchema } = require('../schemas/cliente');
const { validateIdParam } = require('../middlewares/validateParam');
const { idParam: idParamSchema } = require('../schemas/idParam');
const { findCliente, createCliente, updateCliente } = require('../controllers/clienteController');

routes.get('/', validateBody(clienteSchema), findCliente)

routes.post('/', createCliente)

routes.post('/:id', validateIdParam(idParamSchema), updateCliente)
/* ((req, res) => {
  const { cpfcnpj } = req.body;
  console.log(cpfCnpj);
  return res.status(200).json({ mensage: 'Rota para buscar cliente no banco' });
}); */

module.exports = routes;
