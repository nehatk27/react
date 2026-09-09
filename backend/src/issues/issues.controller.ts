import type { Request, Response } from "express";
import { listAllIssues, getIssueById } from "./issues.service.js";

export async function listIssuesController(req: Request, res: Response) {
  const issues = await listAllIssues();
  res.status(200).json(issues);
}

export async function getIssueByIdController(req: Request, res: Response) {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      message: "Invalid issue ID",
    });
    return;
  }

  const issue = await getIssueById(id);

  if (!issue) {
    res.status(404).json({
      message: "Issue not found",
    });
    return;
  }

  res.status(200).json(issue);
}
