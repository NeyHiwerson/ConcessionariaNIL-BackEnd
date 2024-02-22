const knex = require('../database/connection');

const insertVeiculo = async(codigo_renavam, placa, ano_fabricacao, ano_modelo, exercicio_atual, marca, modelo, versao, especie, tipo, chassi, cor, combustivel, categoria, potencia, motor, valvulas, cambio, peso, eixos, carroceria, lotacao, capacidade, quilometragem, portas, cidade, estado, nome, cpfcnpj, valor, disponivel) => {
  return await knex('veiculo').insert({codigo_renavam, placa, ano_fabricacao, ano_modelo, exercicio_atual, marca, modelo, versao, especie, tipo, chassi, cor, combustivel, categoria, potencia, motor, valvulas, cambio, peso, eixos, carroceria, lotacao, capacidade, quilometragem, portas, cidade, estado, nome, cpfcnpj, valor, disponivel}).returning(['id_veiculo', 'codigo_renavam', 'placa', 'ano_fabricacao', 'ano_modelo',
    'exercicio_atual', 'marca', 'modelo', 'versao', 'especie', 'tipo', 'chassi',
    'cor', 'combustivel', 'categoria', 'potencia', 'motor', 'valvulas', 'cambio',
    'peso', 'eixos', 'carroceria', 'lotacao', 'capacidade', 'quilometragem',
    'portas', 'cidade', 'estado', 'nome', 'cpfcnpj', 'valor', 'disponivel'
  ]);
};

const insertMedia = async(link_1, link_2, link_3, link_4, link_5, link_6, link_7, link_8, link_9, link_10) => {
  return await knex('media').insert({link_1, link_2, link_3, link_4, link_5, link_6, link_7, link_8, link_9, link_10}).returning(['id_media', 'link_1', 'link_2', 'link_3', 'link_4', 'link_5', 'link_6', 'link_7', 'link_8', 'link_9', 'link_10'
  ]);
};

const insertVeiculoMedia = async(id_veiculo, id_media) => {
  return await knex('veiculo_media').insert({id_veiculo, id_media}).returning(['id_veiculo_media', 'id_veiculo', 'id_media']);
};






module.exports = {
  insertVeiculo,
  insertMedia,
  insertVeiculoMedia
}
