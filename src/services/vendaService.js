const { createVenda, baixaVeiculo } = require('../repositories/vendaRepository');

const executeCreate = async (id_cliente, id_endereco, id_veiculo, valor, dt_venda, id_colaborador) => {
  const venda = await createVenda(id_cliente, id_endereco, id_veiculo, valor, dt_venda, id_colaborador);
  executeBaixaVeiculo(id_veiculo);
  return venda[0]
};

const executeBaixaVeiculo = async (id_veiculo) => {
  await baixaVeiculo(id_veiculo);
}

module.exports = {
  executeCreate
}
