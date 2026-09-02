export type Issue = {
  id: string;
  title: string;
  assigneeName: string;
  status: "Open" | "In-progress" | "Closed";
  priority: "Low" | "Medium" | "High";
  dueDate: string;
};
 