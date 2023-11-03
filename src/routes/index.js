const { Router } = require('express');
const routes = Router();
const userRoutes = require('./userRoutes');
const validateBody = require('../middlewares/validateBody');
const { user: userSchema } = require('../schemas/user');
const { createUser } = require('../controllers/userController');


routes.get('/', (req, res) => {
  return res.status(200).json({ mensage: 'NILmultimarcas ta on no server' });
});

routes.post('/registration', validateBody(userSchema), createUser);

routes.post('/login', (req, res) => {
  return res.status(200).json({ mensage: 'NILmultimarcas Rota para login' });
});

routes.use('/user', userRoutes);

module.exports = routes;
