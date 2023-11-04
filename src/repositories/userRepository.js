const knex = require('../database/connection');

const insert = async(name, email, password) => {
  return await knex('usuarios').insert({ name, email, password}).returning(['id_usuario', 'name', 'email']);
};

module.exports = {
  insert
}
