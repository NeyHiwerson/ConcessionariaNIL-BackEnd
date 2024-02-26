const knex = require('../database/connection');

const createVenda = async (id_cliente, id_endereco, id_veiculo, valor, dt_venda, id_colaborador) => {
  return await knex('venda').insert({ id_cliente, id_endereco, id_veiculo, valor, dt_venda, id_colaborador })
  .returning(['id_venda','id_cliente','id_endereco','id_veiculo','valor','dt_venda','id_colaborador'
  ]);
};

const baixaVeiculo = async (id_veiculo) => {
  return await knex('veiculo').update({ disponivel: false }).where({ id_veiculo });
};

module.exports = {
  createVenda,
  baixaVeiculo
}
