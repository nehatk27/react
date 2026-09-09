import type { Request, Response } from "express";
import { listProjects, getProjectById } from "./projects.service.js";

export async function listProjectController(req: Request, res: Response) {
  const projects = await listProjects();
  res.status(200).json(projects);
}

export async function getProjectByIdController(req: Request, res: Response) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    res.status(400).json({
      message: "Invalid project ID",
    });
    return;
  }

  const project = await getProjectById(id);

  if (!project) {
    res.status(404).json({
      message: "Project not found",
    });
    return;
  }

  res.status(200).json(project);
}
