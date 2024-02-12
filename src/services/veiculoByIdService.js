const AppError = require('../errors/AppError');
const { findVeiculoById, findVeiculoMediaById, findMediaById } = require('../repositories/veiculosByIdRepository');

const executefindVeiculoById = async (id) => {
  const veiculo = await findVeiculoById(id);
  if (!veiculo) {
    throw new AppError('Veiculo não encontrado', 404);
  }
  return veiculo;
}

const executefindVeiculoMediaById = async (id) => {
  const veiculoMedia = await findVeiculoMediaById(id);
  if (!veiculoMedia) {
    throw new AppError('Veiculo-mídia não encontrado', 404);
  }
  return veiculoMedia;
}

const executefindMediaById = async (id) => {
  const media = await findMediaById(id);
  if (!media) {
    throw new AppError('Mídia não encontrada', 404);
  }
  return media;
}

module.exports = {
  executefindVeiculoById,
  executefindVeiculoMediaById,
  executefindMediaById
}
