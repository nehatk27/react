import type { Issue } from "../types/issue";

const issues: Issue[] = [
  {
    id: "i1",
    title: "Fix login bug",
    assigneeName: "Fida",
    status: "Open",
    priority: "High",
    dueDate: "2026-08-30",
  },
  {
    id: "i2",
    title: "Authentication issue",
    assigneeName: "Varsha",
    status: "In-progress",
    priority: "Medium",
    dueDate: "2026-09-10",
  },
  {
    id: "i3",
    title: "Darkmode not rendering",
    assigneeName: "Leni",
    status: "Closed",
    priority: "Low",
    dueDate: "2026-09-05",
  },
  {
    id: "i4",
    title: "Issue with settings data",
    assigneeName: "Aami",
    status: "Open",
    priority: "Medium",
    dueDate: "2026-09-08",
  },
];

export default issues;
