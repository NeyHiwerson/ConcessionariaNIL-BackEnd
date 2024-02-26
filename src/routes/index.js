const { Router } = require('express');
const routes = Router();
const estoqueRoutes = require('./estoqueRoutes');
const userRoutes = require('./userRoutes');
const veiculoRoutes = require('./veiculoRoutes');
const clienteRoutes = require('./clienteRoutes');
const enderecoRoutes = require('./enderecoRoutes');
const validateBody = require('../middlewares/validateBody');
const { validateToken } = require('../middlewares/validateToken');
const { duvidas: duvidasSchema } = require('../schemas/duvidas');
const { createDuvida } = require('../controllers/duvidasController');
const { user: userSchema, login: loginSchema } = require('../schemas/user');
const { createUser, loginUser } = require('../controllers/userController');
const { createVenda } = require('../controllers/vendaController');


routes.get('/', (req, res) => {
  return res.status(200).json({ mensage: 'NILmultimarcas ta on no server' });
});
routes.post('/duvidas', validateBody(duvidasSchema), createDuvida);

routes.use('/estoque', estoqueRoutes);

routes.post('/registration', validateBody(userSchema), createUser);
routes.post('/login', validateBody(loginSchema), loginUser);

routes.use(validateToken);

routes.use('/user', userRoutes);

routes.use('/veiculo',veiculoRoutes);

routes.use('/cliente', clienteRoutes);

routes.use('/endereco', enderecoRoutes);

routes.post('/venda', createVenda)

module.exports = routes;
