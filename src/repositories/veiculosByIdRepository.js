const knex = require('../database/connection');

const findVeiculoById = async (id) => {
  return await knex('veiculo').where('id_veiculo', id).select('*').first();
};

const findVeiculoMediaById = async (veiculoId) => {
  return await knex('veiculo_media').where('id_veiculo', veiculoId).select('*');
};

const findMediaById = async (mediaId) => {
  return await knex('media').where('id_media', mediaId).select('*').first();
};

module.exports = {
  findVeiculoById,
  findVeiculoMediaById,
  findMediaById
};
