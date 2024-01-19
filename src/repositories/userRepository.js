const knex = require('../database/connection');

const insert = async(nome, email, password, cargo, dt_nascimento, telefone,
  ctt_emergencia, filial_atual) => {
  console.log("no repository"+ nome, email, password, cargo, dt_nascimento, telefone,
  ctt_emergencia, filial_atual);
  return await knex('users').insert({nome, email, password, cargo, dt_nascimento, telefone,
    ctt_emergencia, filial_atual}).returning(['id_user', 'nome', 'email']);
};

const findAll = async() => {
  return await knex('users').select('*'); // Retorna todos os registros
};

const findEmail = async(email) => {
  return await knex('users').where('email', email).first();  // Retorna o primeiro registro encontrado.
};

const findUser = async(id_user) => {
  return await knex('users').where('id_user', id_user).first();  // Retorna o primeiro registro encontrado.

};

module.exports = {
  insert,
  findAll,
  findEmail,
  findUser
}
