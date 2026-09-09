import { findAllProjects, findProjectById } from "./projects.repository.js";

export async function listProjects() {
  const projects = await findAllProjects();
  return projects.map((project) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    issueCount: project._count.issues,
  }));
}

export async function getProjectById(id: number) {
  const project = await findProjectById(id);

  if (!project) {
    return null;
  }

  return {
    id: project.id,
    name: project.name,
    description: project.description,
    issueCount: project._count.issues,
  };
}
