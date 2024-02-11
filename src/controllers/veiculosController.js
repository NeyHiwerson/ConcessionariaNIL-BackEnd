const AppError = require('../errors/AppError');
const { executefindVeiculos, executefindVeiculoMedia, executefindMedia } = require('../services/veiculosService');

const findAllVeiculos = async (req, res) => {
  try {
      const allVeiculos = await executefindVeiculos();
      const allVeiculoMedia = await executefindVeiculoMedia();
      const allMedia = await executefindMedia();
      let veiculos = [];
      allVeiculos.forEach(veiculo => {
        const { id_veiculo, nome, motor, tipo, valvulas, combustivel, cambio, valor, quilometragem, cidade, estado, ano_fabricacao, ano_modelo } = veiculo;

        // Encontrar o id_media correspondente no allVeiculoMedia
        const veiculoMedia = allVeiculoMedia.find(vm => vm.id_veiculo === id_veiculo);

        if (veiculoMedia) {
            // Encontrar o link_1 correspondente no allMedia
            const media = allMedia.find(m => m.id_media === veiculoMedia.id_media);

            if (media) {
                // Adicionar os atributos do veículo e do link_1 ao objeto final
                const veiculoCompleto = {
                    id_veiculo,
                    nome,
                    motor,
                    tipo,
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

module.exports = {
  findAllVeiculos
}
