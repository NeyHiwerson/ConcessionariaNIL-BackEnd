const AppError = require('../errors/AppError');
const { findCliente, findClienteByEmail } = require('../repositories/clienteRepository');
const { createCliente, updateCliente } = require('../repositories/clienteRepository');

const executefindCliente = async (cpfCnpj) => {
    const cliente = await findCliente(cpfCnpj);
    return cliente;
};

const executefindClienteByEmail = async (email) => {
    const cliente = await findClienteByEmail(email);
    return cliente;
};

const executeCreateCliente = async (nome, dt_nascimento, email, cpfcnpj, telefone, ctt_telefone, rg, renda, dt_cadastro) => {
  const cliente = await createCliente(nome, dt_nascimento, email, cpfcnpj, telefone, ctt_telefone, rg, renda, dt_cadastro);
  return cliente[0];
};

const executeUpdateCliente = async (id_cliente, nome, dt_nascimento, email, cpfcnpj, telefone, ctt_telefone, dt_cadastro, rg, renda) => {
  const cliente = await updateCliente(id_cliente, nome, dt_nascimento, email, cpfcnpj, telefone, ctt_telefone, dt_cadastro, rg, renda);
  return cliente[0];
};


module.exports = {
  executefindCliente,
  executefindClienteByEmail,
  executeCreateCliente,
  executeUpdateCliente
};
