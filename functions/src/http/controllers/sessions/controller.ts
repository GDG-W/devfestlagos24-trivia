import { CreateSessionDTO, createSessionDTO } from "./dto";
import express, { NextFunction, Request, Response } from "express";

import { autoValidate } from "../../middelwares/joi";
import { usersRepo } from "../../../users";

async function createSession(req: Request, res: Response, next: NextFunction) {
  try {
    const body: CreateSessionDTO = req.body;
    const user = await usersRepo.upsert(body);
    user.token = user.token.toString("hex");
    res.json(user);
  } catch (err) {
    next(err);
  }
}

export function sessionRoutes() {
  const router = express.Router();
  router.post("/", autoValidate(createSessionDTO), createSession);
  return router;
}
