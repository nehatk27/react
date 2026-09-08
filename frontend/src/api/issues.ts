import { apiClient } from "./client";

export type IssueResponse = {
  id: number;
  title: string;
  description: string;
  projectId: number;
  project: string;
  assigneeName: string;
  status: "Open" | "InProgress" | "Closed";
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  labels: string[];
};

export function getIssues() {
  return apiClient<IssueResponse[]>("/issues");
}
