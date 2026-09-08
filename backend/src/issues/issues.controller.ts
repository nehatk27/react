import type { Request, Response } from "express";
import { listAllIssues } from "./issues.service.js";

export async function listIssuesController(req: Request, res: Response) {
  const issues = await listAllIssues();
  res.status(200).json(issues);
}

