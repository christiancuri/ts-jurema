import express from "express";
import * as controller from "./controller";
import { CatchErrors } from "@utils";
export default express
  .Router()
  .get("/estados", CatchErrors(controller.getStates))
  .get("/populacao/:uf", CatchErrors(controller.getPopulationByUf));
