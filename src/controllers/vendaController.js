const AppError = require('../errors/AppError');
const { executeCreate } = require('../services/vendaService');

const createVenda = async (req, res) => {
    const id_colaborador = req.id_user;
    const { id_cliente, id_endereco, id_veiculo, valor, dt_venda } = req.body;
    const user = await executeCreate(id_cliente, id_endereco, id_veiculo, valor, dt_venda, id_colaborador);
    res.status(200).json(user);
};







module.exports = {
  createVenda
}
