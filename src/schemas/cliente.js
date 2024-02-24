const Joi = require('joi');

const cliente = Joi.object({
    cpfcnpj: Joi.alternatives()
        .try(
            Joi.string()
                .length(11)
                .pattern(/^[0-9]+$/)
                .messages({
                    'string.length': 'The field cpfcnpj must have exactly 11 characters.',
                    'string.pattern.base': 'The field cpfcnpj must contain only numeric characters.',
                }),
            Joi.string()
                .length(14)
                .messages({
                    'string.length': 'The field cpfcnpj must have exactly 14 characters.',
                })
        )
        .required()
        .messages({
            'any.required': 'The field cpfcnpj is required.',
        }),
});

module.exports = {
    cliente
};
