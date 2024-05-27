import "./config/postgres";

import * as functions from "firebase-functions";

import { attemptRoutes } from "./http/controllers/attempts/controller";
import cors from "cors";
import { errors } from "./http/middelwares/error";
import express from "express";
import helmet from "helmet";
import { sessionRoutes } from "./http/controllers/sessions/controller";

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use("/sessions", sessionRoutes());
app.use("/attempts", attemptRoutes());

app.use((_req, res, _next) => {
  return res.status(404).send("Whoops! Route doesn't exist.");
});
app.use(errors);
export const api = functions.https.onRequest(app);
