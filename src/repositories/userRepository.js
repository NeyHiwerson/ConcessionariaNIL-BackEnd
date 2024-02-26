const knex = require('../database/connection');

const insert = async(nome, email, password, cargo, dt_nascimento, telefone,
  ctt_emergencia, filial_atual) => {
  return await knex('colaborador').insert({nome, email, password, cargo, dt_nascimento, telefone,
    ctt_emergencia, filial_atual}).returning(['id_colaborador', 'nome', 'email']);
};

const findAll = async() => {
  return await knex('colaborador').select('*');
};

const findEmail = async(email) => {
  return await knex('colaborador').where('email', email).first();
};

const findUser = async(id_colaborador) => {
  return await knex('colaborador').where('id_colaborador', id_colaborador).first();
};

const findUserByUserId = async(id_colaborador) => {
  return await knex('colaborador').where('id_colaborador', id_colaborador).select('id_colaborador', 'nome', 'cargo', 'telefone', 'filial_atual');
}

module.exports = {
  insert,
  findAll,
  findEmail,
  findUser,
  findUserByUserId
}
