import * as express from "express";
import * as functions from "firebase-functions";

import helmet from "helmet";

const app = express();
app.use(helmet());

app.get("/", (req, res) => {
  res.json({ ts: Date.now() });
});

export const api = functions.https.onRequest(app);
