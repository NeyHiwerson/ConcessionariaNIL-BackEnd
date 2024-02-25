const knex = require('../database/connection');

const createEndereco = async (rua, numero, complemento, bairro, cep, tipo_endereco, cidade, uf_estado) => {
  return await knex('endereco')
  .insert({ rua, numero, complemento, bairro, cep, tipo_endereco, cidade, uf_estado })
  .returning(['id_endereco', 'rua', 'numero', 'complemento', 'bairro', 'cep', 'tipo_endereco', 'cidade', 'uf_estado']);
};

const createClienteEndereco = async (id_cliente, id_endereco) => {
  return await knex('cliente_endereco').insert({ id_cliente, id_endereco }).returning('id_cliente_end','id_cliente','id_endereco');
};

const findEnderecos = async (id_cliente) => {
  const clienteEnderecos = await knex('cliente_endereco')
      .where({ id_cliente })
      .select('id_endereco');
  console.log(clienteEnderecos);
    if (clienteEnderecos.length == 0) {
      return [];
    }
    const idEnderecos = clienteEnderecos.map((row) => row.id_endereco);
    const enderecos = await knex('endereco')
      .whereIn('id_endereco', idEnderecos);
  console.log(enderecos);
    return enderecos;
};

const updateEndereco = async (id_endereco, rua, numero, complemento, bairro, cep, tipo_endereco, cidade, uf_estado) => {
  return await knex('endereco')
    .where({ id_endereco })
    .update({ rua, numero, complemento, bairro, cep, tipo_endereco, cidade, uf_estado })
    .returning(['id_endereco', 'rua', 'numero', 'complemento', 'bairro', 'cep', 'tipo_endereco', 'cidade', 'uf_estado']);
};

module.exports = {
  createEndereco,
  createClienteEndereco,
  findEnderecos,
  updateEndereco
};
