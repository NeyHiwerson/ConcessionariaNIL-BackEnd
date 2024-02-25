const AppError = require('../errors/AppError');
const { createEndereco, createClienteEndereco, findEnderecos, updateEndereco } = require('../repositories/enderecoRepository');

const executeCreateEndereco = async (rua, numero, complemento, bairro, cep, tipo_endereco, cidade, uf_estado) => {
  const endereco = await createEndereco(rua, numero, complemento, bairro, cep, tipo_endereco, cidade, uf_estado);
  return endereco[0];
};

const executeCreateClienteEndereco = async (id_cliente, id_endereco) => {
  const clienteEndereco = await createClienteEndereco(id_cliente, id_endereco);
  return clienteEndereco[0];
};

const executeFindEnderecos = async (id_cliente) => {
  const enderecos = await findEnderecos(id_cliente);
  return enderecos;
};

const executeUpdateEndereco = async (id_endereco, rua, numero, complemento, bairro, cep, tipo_endereco, cidade, uf_estado) => {
  const endereco = await updateEndereco(id_endereco, rua, numero, complemento, bairro, cep, tipo_endereco, cidade, uf_estado);
  return endereco[0];
};


module.exports = {
  executeCreateEndereco,
  executeCreateClienteEndereco,
  executeFindEnderecos,
  executeUpdateEndereco
};
