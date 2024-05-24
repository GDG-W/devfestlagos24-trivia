import "./config/postgres";

import * as functions from "firebase-functions";

import { errors } from "./http/middelwares/error";
import express from "express";
import helmet from "helmet";
import { sessionRoutes } from "./http/controllers/sessions/controller";

const app = express();
app.use(express.json());
app.use(helmet());
app.use("/sessions", sessionRoutes());

app.use((_req, res, _next) => {
  return res.status(404).send("Whoops! Route doesn't exist.");
});
app.use(errors);
app.listen(2024, () => console.log("server listening on port 2024"));

export const api = functions.https.onRequest(app);
