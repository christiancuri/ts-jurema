import * as service from "./service";
import { Request, Response } from "express";

export async function listRoles(
  req: Request,
  res: Response,
): Promise<Response> {
  return res.json();
}
