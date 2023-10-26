const { Router } = require('express');
const routes = Router();

routes.get('/', (req, res) => {
  return res.status(200).json({ mensage: 'NILmultimarcas userRoute createUser' });
});


module.exports = routes;
