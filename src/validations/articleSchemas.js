import { Joi } from 'celebrate';

export const getOne = Joi.object(
  { id: Joi.string().required() },
).required();
