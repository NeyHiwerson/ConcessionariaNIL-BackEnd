const Joi = require('joi');

const user = Joi.object({
name: Joi.string().required().messages({
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
});


module.exports = {
  user
};
