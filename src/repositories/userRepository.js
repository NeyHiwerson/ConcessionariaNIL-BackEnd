const knex = require('../database/connection');

const insert = async(nome, email, password, cargo, dt_nascimento, telefone,
  ctt_emergencia, filial_atual) => {
  console.log("no repository",nome, email, password, cargo, dt_nascimento, telefone,
  ctt_emergencia, filial_atual);
  return await knex('colaborador').insert({nome, email, password, cargo, dt_nascimento, telefone,
    ctt_emergencia, filial_atual}).returning(['id_colaborador', 'nome', 'email']);
};
//
const findAll = async() => {
  return await knex('colaborador').select('*'); // Retorna todos os registros
};

const findEmail = async(email) => {
  return await knex('colaborador').where('email', email).first();  // Retorna o primeiro registro encontrado.
};

const findUser = async(id_colaborador) => {
  return await knex('colaborador').where('id_colaborador', id_colaborador).first();  // Retorna o primeiro registro encontrado.

};

module.exports = {
  insert,
  findAll,
  findEmail,
  findUser
}
