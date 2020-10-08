import * as service from "./service";
import { Request, Response } from "express";

import { IStates } from "./interfaces";

export async function getStates(
  req: Request,
  res: Response,
): Promise<Response> {
  return service.getStates().then((states: IStates) => res.json(states));
}
