const { Router } = require('express');
const routes = Router();
const userRoutes = require('./userRoutes');

routes.get('/', (req, res) => {
  return res.status(200).json({ mensage: 'NILmultimarcas ta on no server' });
});

routes.use('/user', userRoutes);

module.exports = routes;
