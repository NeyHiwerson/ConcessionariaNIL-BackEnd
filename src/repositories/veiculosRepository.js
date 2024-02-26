const knex = require('../database/connection');

const findAllVeiculos = async () => {
  return await knex('veiculo').select('*').where('disponivel', true);
};

const findAllVeiculoMedia = async() => {
  return await knex('veiculo_media').select('*');
};

const findAllMedia = async() => {
  return await knex('media').select('*');
};

module.exports = {
  findAllVeiculos,
  findAllVeiculoMedia,
  findAllMedia
}
