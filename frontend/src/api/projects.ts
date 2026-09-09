import { apiClient } from "./client";

export type ProjectResponse = {
  id: number;
  name: string;
  description: string;
  issueCount: number;
};

export function getProjects() {
  return apiClient<ProjectResponse[]>("/projects");
}

export function getProject(id: number) {
  return apiClient<ProjectResponse>(`/projects/${id}`);
}
