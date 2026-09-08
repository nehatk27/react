import type { Request, Response } from "express";
import { listProjects } from "./projects.service.js";

async function listProjectController(req: Request, res: Response) {
  const projects = await listProjects();
  res.status(200).json(projects);
}

export default listProjectController;
