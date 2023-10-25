const express = require('express');
const router = express.Router();
require('dotenv').config();
const port = process.env.PORT || 3003;

const app = express();
app.use(express.json());
app.use(router);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
router.get('/', (req, res) => {
    return res.status(200).json({ mensage: 'NILmultimarcas ta on' });
});
