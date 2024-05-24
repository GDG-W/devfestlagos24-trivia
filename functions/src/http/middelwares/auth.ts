import { NextFunction, Request, Response } from "express";

import { ApplicationError } from "../../internal/error";
import { usersRepo } from "../../users";

export async function authenticate(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const authSession = req.headers.authorization;

  if (!authSession) {
    return next(
      new ApplicationError(401, "We could not authenticate your request")
    );
  }

  const [scheme, token] = authSession.split(/\s+/);

  if (scheme !== "Bearer") {
    return next(
      new ApplicationError(
        401,
        `${scheme} is not supported. Please use the Bearer scheme`
      )
    );
  }

  req.session = await usersRepo.findByToken(token);
  if (!req.session) {
    return next(
      new ApplicationError(401, "We could not find a session for your token")
    );
  }

  return next();
}
