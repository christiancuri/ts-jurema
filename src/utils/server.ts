import express from "express";
import { json, urlencoded } from "body-parser";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import http from "http";

import logger from "./logger";

const app = express();
const httpServer = http.createServer(app);

app
  .use(helmet())
  .use(cors())
  .use(
    json({
      limit: "20mb",
    }),
  )
  .use(
    urlencoded({
      extended: true,
      limit: "20mb",
    }),
  )
  .use(
    morgan("combined", {
      stream: {
        write: (info) => logger.info(info.trim()),
      },
      skip: (req) => req.method === "OPTIONS",
    }),
  )
  .set("trust proxy", true);

const port = process.env.PORT || 3000;
httpServer.listen(port, () => logger.info(`Running on port ${port}`));

export default app;
