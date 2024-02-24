const AppError = require('../errors/AppError');
const { executefindCliente, executefindClienteByEmail } = require('../services/clienteService');
const { executeCreateCliente, executeUpdateCliente } = require('../services/clienteService');

const createCliente = async (req, res) => {
  try {
    const { nome, dt_nascimento, email, cpfcnpj, telefone, ctt_telefone, rg, renda } = req.body;
    const dt_cadastro = new Date();
    const clienteByCpfCnpj = await executefindCliente(cpfcnpj);
    if (clienteByCpfCnpj) {
      throw new AppError('CPF/CNPJ já cadastrado', 400);
    }
    const emailCliente = await executefindClienteByEmail(email);
    if (emailCliente) {
      throw new AppError('Email já cadastrado', 400);
    }
    const cliente = await executeCreateCliente(nome, dt_nascimento, email, cpfcnpj, telefone, ctt_telefone, rg, renda, dt_cadastro);
    res.status(201).json(cliente);

  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      console.error(error);
      res.status(500).json({ message: 'Controller server error.' });
    }
  }
};

const findCliente = async (req, res) => {
  const { cpfcnpj } = req.body;
  try {
    const cliente = await executefindCliente(cpfcnpj);
    res.status(200).json(cliente);
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ message: error.message });
    } else {
      console.error(error);
      res.status(500).json({ message: 'Controller server error.' });
    }
  }
};

const updateCliente = async (req, res) => {
  const { id } = req.params;
  const { id_cliente, nome, dt_nascimento, email, cpfcnpj, telefone, ctt_telefone, dt_cadastro, rg, renda } = req.body;

  try {
    const clienteByCpfCnpj = await executefindCliente(cpfcnpj);
    if (clienteByCpfCnpj.id_cliente != id) {
      throw new AppError('CPF/CNPJ já cadastrado', 400);
    }

    const clienteByEmail = await executefindClienteByEmail(email);
    if (clienteByEmail.id_cliente != id) {
      throw new AppError('Email já cadastrado', 400);
    }

    const clienteUpdate = await executeUpdateCliente(id_cliente, nome, dt_nascimento, email, cpfcnpj, telefone, ctt_telefone, dt_cadastro, rg, renda);
    res.status(201).json(clienteUpdate);
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
  findCliente,
  createCliente,
  updateCliente
};
