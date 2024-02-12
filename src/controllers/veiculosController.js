const AppError = require('../errors/AppError');
const { executefindVeiculos, executefindVeiculoMedia, executefindMedia } = require('../services/veiculosService');
const { executefindVeiculoById, executefindVeiculoMediaById, executefindMediaById } = require('../services/veiculoByIdService');
const findAllVeiculos = async (req, res) => {
  try {
      const allVeiculos = await executefindVeiculos();
      const allVeiculoMedia = await executefindVeiculoMedia();
      const allMedia = await executefindMedia();
      let veiculos = [];
      allVeiculos.forEach(veiculo => {
        const { id_veiculo, modelo, marca, motor, tipo, cor, valvulas, combustivel, cambio, valor, quilometragem, cidade, estado, ano_fabricacao, ano_modelo } = veiculo;

        // Encontrar o id_media correspondente no allVeiculoMedia
        const veiculoMedia = allVeiculoMedia.find(vm => vm.id_veiculo === id_veiculo);

        if (veiculoMedia) {
            // Encontrar o link_1 correspondente no allMedia
            const media = allMedia.find(m => m.id_media === veiculoMedia.id_media);

            if (media) {
                // Adicionar os atributos do veículo e do link_1 ao objeto final
                const veiculoCompleto = {
                    id_veiculo,
                    modelo,
                    marca,
                    motor,
                    tipo,
                    cor,
                    valvulas,
                    combustivel,
                    cambio,
                    valor,
                    quilometragem,
                    cidade,
                    estado,
                    ano_fabricacao,
                    ano_modelo,
                    link_1: media.link_1
                };

                // Adicionar o objeto ao array veiculos
                veiculos.push(veiculoCompleto);
            }
        }
    });

    return res.json(veiculos);

  } catch (error) {
      if (error instanceof AppError) {
          return res.status(error.statusCode).json({ message: error.message });
      }
      console.log(error);
      return res.status(500).json({ message: 'Controller Find Server error.' });
  }
};

const findVeiculoById = async (req, res) => {
  const veiculoId = req.params.id;

  try {
    const veiculoById = await executefindVeiculoById(veiculoId);
    const veiculoMediaById = await executefindVeiculoMediaById(veiculoId);
    console.log(veiculoMediaById);
    const mediaId = veiculoMediaById[0].id_media;
    const mediaById = await executefindMediaById(mediaId);

    //objetoVeiculoById
    const { id_veiculo, codigo_renavam, placa, ano_fabricacao, ano_modelo, exercicio_atual, marca, modelo, versao, especie, tipo, chassi, cor, combustivel, categoria, potencia, motor, valvulas, cambio, peso, eixos, carroceria, lotacao, capacidade, quilometragem, portas, cidade, estado, nome, cpfcnpj, valor, disponivel } = veiculoById;
    const { link_1, link_2, link_3, link_4, link_5, link_6, link_7, link_8, link_9, link_10 } = mediaById;
    const veiculoByIdCompleto = {
      id_veiculo, codigo_renavam, placa, ano_fabricacao, ano_modelo, exercicio_atual, marca, modelo, versao, especie, tipo, chassi, cor, combustivel, categoria, potencia, motor, valvulas, cambio, peso, eixos, carroceria, lotacao, capacidade, quilometragem, portas, cidade, estado, nome, cpfcnpj, valor, disponivel, link_1, link_2, link_3, link_4, link_5, link_6, link_7, link_8, link_9, link_10
    }
    return res.json(veiculoByIdCompleto);
  } catch (error) {
      if (error instanceof AppError) {
          return res.status(error.statusCode).json({ message: error.message });
      }
      console.log(error);
      return res.status(500).json({ message: 'Controller Find Server error.' });
  }

}

module.exports = {
  findAllVeiculos,
  findVeiculoById
}
