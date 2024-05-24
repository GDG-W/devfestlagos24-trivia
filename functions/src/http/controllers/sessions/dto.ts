import Joi from "joi";

export interface CreateSessionDTO {
  name: string;
  email_address: string;
}

export const createSessionDTO = Joi.object().keys({
  name: Joi.string().trim().required(),
  email_address: Joi.string().email().lowercase().required(),
});
