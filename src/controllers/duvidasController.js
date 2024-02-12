const AppError = require('../errors/AppError');
const { createDuvidaService } = require('../services/duvidasService');

const createDuvida = async (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;
  try {
    const createdDuvida = await createDuvidaService( nome, email, assunto, mensagem );
    return res.status(201).json(createdDuvida);
  } catch (error) {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    console.log(error);
    return res.status(500).json({ message: 'Controller Server error.' });
  }
}

module.exports = {
  createDuvida
}
