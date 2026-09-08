import { findAllProjects } from "./projects.repository.js";

export async function listProjects() {
  const projects = await findAllProjects();
  return projects.map((project) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    issueCount: project._count.issues,
  }));
}
