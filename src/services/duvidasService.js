const AppError = require('../errors/AppError');
const { insertDuvida } = require('../repositories/duvidasRepository');


const createDuvidaService = async ( nome, email, assunto, mensagem ) => {
  //console.log("service: ", nome, email, assunto, mensagem);
  try {
    // Tente inserir a dúvida
    const duvida = await insertDuvida(nome, email, assunto, mensagem);
    return duvida[0];
  } catch (error) {
    // Se for um erro específico do aplicativo, lance-o para ser tratado no controlador
    if (error instanceof AppError) {
        throw error;
    }
    // Caso contrário, lance uma exceção genérica de erro de servidor
    throw new AppError('Service error.', 500);
  }

}

module.exports = {
  createDuvidaService
}
