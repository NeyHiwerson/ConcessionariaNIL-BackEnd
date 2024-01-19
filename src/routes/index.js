const { Router } = require('express');
const routes = Router();
const userRoutes = require('./userRoutes');
const validateBody = require('../middlewares/validateBody');
const { validateToken } = require('../middlewares/validateToken');
const { user: userSchema, login: loginSchema } = require('../schemas/user');
const { createUser, loginUser } = require('../controllers/userController');


routes.get('/', (req, res) => {
  return res.status(200).json({ mensage: 'NILmultimarcas ta on no server' });
});
// 
routes.post('/registration', validateBody(userSchema), createUser);
routes.post('/login', validateBody(loginSchema), loginUser);

routes.use(validateToken);

routes.use('/user', userRoutes);

module.exports = routes;
