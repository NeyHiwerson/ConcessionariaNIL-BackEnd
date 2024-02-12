const knex = require('../database/connection');

const insertDuvida = async(nome, email, assunto, mensagem) => {
  return await knex('contato')
      .insert({ nome, email, assunto, mensagem })
      .returning(['id_contato','nome','email','assunto', 'mensagem']);
};

module.exports = {
  insertDuvida
}
