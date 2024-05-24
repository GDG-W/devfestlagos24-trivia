import { NextFunction, Request, Response } from "express";
import { RecordAttemptDTO, recordAttemptDTO } from "./dto";

import { attemptsRepo } from "../../../attempts/attempt.repo";
import { authenticate } from "../../middelwares/auth";
import { autoValidate } from "../../middelwares/joi";
import express from "express";

async function recordAttempt(req: Request, res: Response, next: NextFunction) {
  try {
    const attempt: RecordAttemptDTO = req.body;
    await attemptsRepo.record({ ...attempt, user_id: req.session.id });
    res.json(null);
  } catch (err) {
    next(err);
  }
}

async function getRankings(req: Request, res: Response, next: NextFunction) {
  try {
    const leaderboard = await attemptsRepo.geRankings();
    res.json(leaderboard);
  } catch (err) {
    next(err);
  }
}

export function attemptRoutes() {
  const router = express.Router();

  router.post("/", authenticate, autoValidate(recordAttemptDTO), recordAttempt);

  router.get("/rankings", getRankings);

  return router;
}
