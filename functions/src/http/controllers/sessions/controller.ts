import { CreateSessionDTO, createSessionDTO } from "./dto";
import express, { NextFunction, Request, Response } from "express";

import { autoValidate } from "../../middelwares/joi";
import { userRepo } from "../../../users";

async function createSession(req: Request, res: Response, next: NextFunction) {
  try {
    const body: CreateSessionDTO = req.body;
    const user = await userRepo.upsert(body);
    res.json({ user, token: user.token.toString("hex") });
  } catch (err) {
    next(err);
  }
}

export function sessionRoutes() {
  const router = express.Router();
  router.post("/", autoValidate(createSessionDTO), createSession);

  router.get("/", (_, res) => res.json("omo"));

  return router;
}
