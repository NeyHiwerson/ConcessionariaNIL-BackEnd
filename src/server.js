const express = require('express');
const router = express.Router();
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(router);

router.get('/', (req, res) => {
  return res.status(200).json({ mensage: 'NILmultimarcas ta on' });
});

module.exports = app;
