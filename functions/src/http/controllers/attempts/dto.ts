import Joi from "joi";

export interface RecordAttemptDTO {
  moves: number;
  duration: number;
}

export const recordAttemptDTO = Joi.object().keys({
  moves: Joi.number().required().min(1),
  duration: Joi.number().required().min(1),
});
