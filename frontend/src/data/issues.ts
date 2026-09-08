import type { Issue } from "../types/issue";

const issues: Issue[] = [
  {
    id: 1,
    title: "Fix login bug",
    description: "Resolve the login bug.",
    project: "Authentication",
    assigneeName: "Fida",
    status: "Open",
    priority: "High",
    dueDate: "2026-08-30",
    labels: [],
  },
  {
    id: 2,
    title: "Authentication issue",
    description: "Investigate the authentication issue.",
    project: "Authentication",
    assigneeName: "Varsha",
    status: "InProgress",
    priority: "Medium",
    dueDate: "2026-09-10",
    labels: [],
  },
  {
    id: 3,
    title: "Darkmode not rendering",
    description: "Fix dark mode rendering.",
    project: "UI",
    assigneeName: "Leni",
    status: "Closed",
    priority: "Low",
    dueDate: "2026-09-05",
    labels: [],
  },
  {
    id: 4,
    title: "Issue with settings data",
    description: "Resolve the settings data issue.",
    project: "Settings",
    assigneeName: "Aami",
    status: "Open",
    priority: "Medium",
    dueDate: "2026-09-08",
    labels: [],
  },
];

export default issues;
