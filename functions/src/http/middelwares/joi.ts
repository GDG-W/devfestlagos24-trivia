import { DataValidationError, validate } from "../../internal/joi";
import { NextFunction, Request, Response } from "express";

import { ApplicationError } from "../../internal/error";
import { SchemaLike } from "joi";

/**
 * Creates a middleware that validate the given request based on the
 * context and respond with status code `400`(with appropriate metadata) when
 * schema validation fails.
 * @param schema schema to use for validation
 * @param context whether to validate the request body or its query. Defaults to request body
 * @returns a middleware
 */
export function autoValidate(schema: SchemaLike) {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      req.body = validate(req.body, schema);
      next();
    } catch (err) {
      if (err instanceof DataValidationError) {
        const message = "Your request body is invalid";
        throw new ApplicationError(422, message, err.messages);
      }
      throw err;
    }
  };
}
