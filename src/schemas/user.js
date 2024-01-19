const Joi = require('joi');

const user = Joi.object({
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
    password: Joi.string().min(6).required().messages({
        'any.required': 'The field password is required.',
        'string.base': 'The password must contain valid characters.',
        'string.min': 'The password must at least 6 characters.',
    }),
    cargo: Joi.string().required().messages({
        'any.required': 'The field name is required.',
        'string.base': 'The field name must be a text.',
        'string.empty': 'The field name cannot be empty.',
    }),
    dt_nascimento: Joi.string().required().messages({
        'any.required': 'The field dt_nascimento is required.',
        'string.base': 'The field dt_nascimento must be a string object.',
        'date.empty': 'The field dt_nascimento cannot be empty.',
    }),
    telefone: Joi.string().required().messages({
        'any.required': 'The field telefone is required.',
        'string.base': 'The field name must be a text.',
        'string.empty': 'The field name cannot be empty.',
    }),
    ctt_emergencia: Joi.string().required().messages({
        'any.required': 'The field telefone is required.',
        'string.base': 'The field name must be a text.',
        'string.empty': 'The field name cannot be empty.',
    }),
    filial_atual: Joi.string().required().messages({
        'any.required': 'The field telefone is required.',
        'string.base': 'The field name must be a text.',
        'string.empty': 'The field name cannot be empty.',
    }),
});

const login = Joi.object({
    email: Joi.string().email().required().messages({
        'any.required': 'The field email is required.',
        'string.base': 'Invalid email.',
        'string.email': 'Invalid email.',
    }),
    password: Joi.string().min(6).required().messages({
        'any.required': 'The field password is required.',
        'string.base': 'The password must contain valid characters.',
        'string.min': 'The password must at least 6 characters.',
    }),
});

module.exports = {
    user,
    login
};
