const AppError = require('../errors/AppError');
const { executeCreateVeiculo, executeCreateMedia, executeCreateVeiculoMedia } = require('../services/veiculoService');
const { executeUpdateVeiculo, executeGetVeiculoMedia, executeUpdateMedia } = require('../services/veiculoService');

const createVeiculo = async (req, res) => {
    const { codigo_renavam, placa, ano_fabricacao, ano_modelo, exercicio_atual, marca, modelo, versao, especie, tipo, chassi, cor, combustivel, categoria, potencia, motor, valvulas, cambio, peso, eixos, carroceria, lotacao, capacidade, quilometragem, portas, cidade, estado, nome, cpfcnpj, valor, disponivel, link_1, link_2, link_3, link_4, link_5, link_6, link_7, link_8, link_9, link_10} = req.body;
    try {
        const createdVeiculo = await executeCreateVeiculo(codigo_renavam, placa, ano_fabricacao, ano_modelo, exercicio_atual, marca, modelo, versao, especie, tipo, chassi, cor, combustivel, categoria, potencia, motor, valvulas, cambio, peso, eixos, carroceria, lotacao, capacidade, quilometragem, portas, cidade, estado, nome, cpfcnpj, valor, disponivel);
        const createdMedia = await executeCreateMedia(link_1, link_2, link_3, link_4, link_5, link_6, link_7, link_8, link_9, link_10)
        const veiculoMedia = await executeCreateVeiculoMedia(createdVeiculo.id_veiculo, createdMedia.id_media)
        const veiculoNovo = {
          ...createdVeiculo,
          link_1: createdMedia.link_1,
          link_2: createdMedia.link_2,
          link_3: createdMedia.link_3,
          link_4: createdMedia.link_4,
          link_5: createdMedia.link_5,
          link_6: createdMedia.link_6,
          link_7: createdMedia.link_7,
          link_8: createdMedia.link_8,
          link_9: createdMedia.link_9,
          link_10: createdMedia.link_10
      };
        return res.status(201).json(veiculoNovo);
    } catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: 'Controller Server error.' });
    }
};

const editVeiculo = async (req, res) => {
    const veiculoId = req.params.id;
    const { codigo_renavam, placa, ano_fabricacao, ano_modelo, exercicio_atual, marca, modelo, versao, especie, tipo, chassi, cor, combustivel, categoria, potencia, motor, valvulas, cambio, peso, eixos, carroceria, lotacao, capacidade, quilometragem, portas, cidade, estado, nome, cpfcnpj, valor, disponivel, link_1, link_2, link_3, link_4, link_5, link_6, link_7, link_8, link_9, link_10} = req.body;
    try {
        const updatedVeiculo = await executeUpdateVeiculo(veiculoId, codigo_renavam, placa, ano_fabricacao, ano_modelo, exercicio_atual, marca, modelo, versao, especie, tipo, chassi, cor, combustivel, categoria, potencia, motor, valvulas, cambio, peso, eixos, carroceria, lotacao, capacidade, quilometragem, portas, cidade, estado, nome, cpfcnpj, valor, disponivel);
        //buscar veiculoMedia
        const veiculoMedia = await executeGetVeiculoMedia(veiculoId);
        const {id_media} = veiculoMedia;
        const updatedMedia = await executeUpdateMedia(id_media, link_1, link_2, link_3, link_4, link_5, link_6, link_7, link_8, link_9, link_10);
        const veiculoEditado = {
            ...updatedVeiculo,
            link_1: updatedMedia.link_1,
            link_2: updatedMedia.link_2,
            link_3: updatedMedia.link_3,
            link_4: updatedMedia.link_4,
            link_5: updatedMedia.link_5,
            link_6: updatedMedia.link_6,
            link_7: updatedMedia.link_7,
            link_8: updatedMedia.link_8,
            link_9: updatedMedia.link_9,
            link_10: updatedMedia.link_10
        };

        return res.status(201).json(veiculoEditado);
    }
    catch (error) {
        if (error instanceof AppError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        console.log(error);
        return res.status(500).json({ message: 'Controller Server error.' });
    }

};

module.exports = {
  createVeiculo,
  editVeiculo
}
