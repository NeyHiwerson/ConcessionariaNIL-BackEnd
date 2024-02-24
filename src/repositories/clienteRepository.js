const knex = require('../database/connection');

const findCliente = async (cpfCnpj) => {
  return await knex('cliente').where('cpfcnpj', cpfCnpj).first();
};

const findClienteByEmail = async (email) => {
  return await knex('cliente').where('email', email).first();
};

const createCliente = async (nome, dt_nascimento, email, cpfcnpj, telefone, ctt_telefone, rg, renda, dt_cadastro) => {
  return await knex('cliente').insert({ nome, dt_nascimento, email, cpfcnpj, telefone, ctt_telefone, rg, renda, dt_cadastro }).returning(['id_cliente','nome','dt_nascimento','email','cpfcnpj','telefone','ctt_telefone','dt_cadastro','rg','renda']);
};

const updateCliente = async (id_cliente, nome, dt_nascimento, email, cpfcnpj, telefone, ctt_telefone, dt_cadastro, rg, renda) => {
  return await knex('cliente').where('id_cliente', id_cliente).update({ nome, dt_nascimento, email, cpfcnpj, telefone, ctt_telefone, dt_cadastro, rg, renda }).returning(['id_cliente', 'nome', 'dt_nascimento', 'email', 'cpfcnpj', 'telefone', 'ctt_telefone', 'dt_cadastro', 'rg', 'renda']);
};



module.exports = {
  findCliente,
  findClienteByEmail,
  createCliente,
  updateCliente
}
