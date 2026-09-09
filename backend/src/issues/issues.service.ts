import findAllIssues, { findIssueById } from "./issues.repository.js";

export async function listAllIssues() {
  const issues = await findAllIssues();

  return issues.map((issue) => ({
    id: issue.id,
    title: issue.title,
    description: issue.description,
    projectId: issue.projectId,
    project: issue.project.name,
    assigneeName: issue.assigneeName,
    status: issue.status,
    priority: issue.priority,
    dueDate: issue.dueDate,
    labels: issue.labels,
  }));
}

export async function getIssueById(id: number) {
  const issue = await findIssueById(id);

  if (!issue) {
    return null;
  }

  return {
    id: issue.id,
    title: issue.title,
    description: issue.description,
    projectId: issue.projectId,
    project: issue.project.name,
    assigneeName: issue.assigneeName,
    status: issue.status,
    priority: issue.priority,
    dueDate: issue.dueDate,
    labels: issue.labels,
  };
}
