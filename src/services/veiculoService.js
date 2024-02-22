const { insertVeiculo, insertMedia, insertVeiculoMedia } = require('../repositories/veiculoRepository');
const AppError = require('../errors/AppError');

const executeCreateVeiculo = async (codigo_renavam, placa, ano_fabricacao, ano_modelo, exercicio_atual, marca, modelo, versao, especie, tipo, chassi, cor, combustivel, categoria, potencia, motor, valvulas, cambio, peso, eixos, carroceria, lotacao, capacidade, quilometragem, portas, cidade, estado, nome, cpfcnpj, valor, disponivel) => {
  try {
      const veiculo = await insertVeiculo(codigo_renavam, placa, ano_fabricacao, ano_modelo, exercicio_atual, marca, modelo, versao, especie, tipo, chassi, cor, combustivel, categoria, potencia, motor, valvulas, cambio, peso, eixos, carroceria, lotacao, capacidade, quilometragem, portas, cidade, estado, nome, cpfcnpj, valor, disponivel);
      return veiculo[0];
  } catch (error) {
      if (error instanceof AppError) {
          throw error;
      }
      throw new AppError('Server veiculo error.', 500);
  }
};

const executeCreateMedia = async (link_1, link_2, link_3, link_4, link_5, link_6, link_7, link_8, link_9, link_10) => {
  try {
      const media = await insertMedia(link_1, link_2, link_3, link_4, link_5, link_6, link_7, link_8, link_9, link_10);
      return media[0];
  } catch (error) {
      if (error instanceof AppError) {
          throw error;
      }
      throw new AppError('Server media error.', 500);
  }
};

const executeCreateVeiculoMedia = async (id_veiculo, id_media) => {
  try {
      const veiculoMedia = await insertVeiculoMedia(id_veiculo, id_media);
      return veiculoMedia[0];
  } catch (error) {
      if (error instanceof AppError) {
          throw error;
      }
      throw new AppError('Server veiculoMedia error.', 500);
  }
};

module.exports = {
  executeCreateVeiculo,
  executeCreateMedia,
  executeCreateVeiculoMedia
}
