import express from "express";

import moduleRoutes from "./service/module_name";

import { ErrorHandle } from "@middlewares";

export default async function (app) {
  const router = express.Router().use(moduleRoutes);

  app.use("/", router).use(ErrorHandle);
  return app;
}
