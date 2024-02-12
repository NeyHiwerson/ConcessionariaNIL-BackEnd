const AppError = require('../errors/AppError');
const { insertDuvida } = require('../repositories/duvidasRepository');

const createDuvidaService = async ( nome, email, assunto, mensagem ) => {
  try {
    const duvida = await insertDuvida(nome, email, assunto, mensagem);
    return duvida[0];
  } catch (error) {
    if (error instanceof AppError) {
        throw error;
    }
    throw new AppError('Service error.', 500);
  }
}

module.exports = {
  createDuvidaService
}
