export type IssueFormData = {
  title: string;
  description: string;
  project: string;
  assigneeName: string;
  status: "Open" | "In-progress" | "Closed";
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  labels: string[];
};

export type Issue = {
  id: string;
  title: string;
  description: string;
  project: string;
  assigneeName: string;
  status: "Open" | "In-progress" | "Closed";
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  labels: string[];
};
