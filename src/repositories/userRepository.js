const knex = require('../database/connection');

const insert = async(name, email, password, useradm) => {
  console.log("no repository"+ name, email, password, useradm);
  return await knex('users').insert({name, email, password, useradm}).returning(['id_user', 'name', 'email']);
};

const findAll = async() => {
  return await knex('users').select('*');
};

const findEmail = async(email) => {
  return await knex('users').where('email', email).first();  // Retorna o primeiro registro encontrado.
};

module.exports = {
  insert,
  findAll,
  findEmail
}
