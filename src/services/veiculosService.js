const { findAllVeiculos, findAllVeiculoMedia, findAllMedia } = require('../repositories/veiculosRepository');

const executefindVeiculos = async () => {
  const allVeiculos = await findAllVeiculos();
  return allVeiculos;
};

const executefindVeiculoMedia = async () => {
  const allVeiculoMedia = await findAllVeiculoMedia();
  return allVeiculoMedia;
};

const executefindMedia = async () => {
  const allMedia = await findAllMedia();
  return allMedia;
}

module.exports = {
  executefindVeiculos,
  executefindVeiculoMedia,
  executefindMedia
};
