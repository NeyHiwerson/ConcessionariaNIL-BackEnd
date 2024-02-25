const AppError = require('../errors/AppError');
const { executeCreateEndereco, executeCreateClienteEndereco } = require('../services/enderecoService');
const { executeFindEnderecos, executeUpdateEndereco } = require('../services/enderecoService');

const createEndereco = async (req, res) => {
  const { id: id_cliente } = req.params;
  const { rua, numero, complemento, bairro, cep, tipo_endereco, cidade, uf_estado} = req.body
  console.log(rua, numero, complemento, bairro, cep, tipo_endereco, cidade, uf_estado);
  try {
    const endereco = await executeCreateEndereco(rua, numero, complemento, bairro, cep, tipo_endereco, cidade, uf_estado);
    const { id_endereco } = endereco;
    const clienteEndereco = await executeCreateClienteEndereco(id_cliente, id_endereco);
    return res.status(201).json(endereco);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Controller server error.' });
  }
};

const findEnderecos = async (req, res) => {
  const { id: id_cliente } = req.params;
  console.log(id_cliente);
  try {
    const enderecos = await executeFindEnderecos(id_cliente);
    res.status(200).json(enderecos);
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      console.error(error);
      res.status(500).json({ message: 'Controller server error.' });
    }
  }
};

const updateEndereco = async (req, res) => {
  const { id: id_endereco } = req.params;
  const { rua, numero, complemento, bairro, cep, tipo_endereco, cidade, uf_estado} = req.body;
  try {
    const endereco = await executeUpdateEndereco(id_endereco, rua, numero, complemento, bairro, cep, tipo_endereco, cidade, uf_estado);
    res.status(200).json(endereco);
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      console.error(error);
      res.status(500).json({ message: 'Controller server error.' });
    }
  }
};


module.exports = {
  createEndereco,
  findEnderecos,
  updateEndereco
}
