export type IssueFormData = {
  title: string;
  description: string;
  project: string;
  assigneeName: string;
  status: "Open" | "InProgress" | "Closed";
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  labels: string[];
};

export type Issue = {
  id: number;
  title: string;
  description: string;
  project: string;
  assigneeName: string;
  status: "Open" | "InProgress" | "Closed";
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  labels: string[];
};
