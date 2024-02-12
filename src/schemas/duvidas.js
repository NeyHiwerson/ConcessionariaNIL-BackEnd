const Joi = require('joi');

const duvidas = Joi.object({
    nome: Joi.string().required().messages({
        'any.required': 'The field name is required.',
        'string.base': 'The field name must be a text.',
        'string.empty': 'The field name cannot be empty.',
    }),
    email: Joi.string().email().required().messages({
        'any.required': 'The field email is required.',
        'string.base': 'Invalid email.',
        'string.email': 'Invalid email.',
    }),
    assunto: Joi.string().required().messages({
        'any.required': 'The field name is required.',
        'string.base': 'The field name must be a text.',
        'string.empty': 'The field name cannot be empty.',
    }),
    mensagem: Joi.string().required().messages({
        'any.required': 'The field name is required.',
        'string.base': 'The field name must be a text.',
        'string.empty': 'The field name cannot be empty.',
    }),
});

module.exports = {
  duvidas
};
