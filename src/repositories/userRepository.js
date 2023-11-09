const knex = require('../database/connection');

const insert = async(name, email, password, useradm) => {
  console.log("no repository"+ name, email, password, useradm);
  return await knex('users').insert({name, email, password, useradm}).returning(['id_user', 'name', 'email']);
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
