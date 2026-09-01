import type { Issue } from "../../types/issue";
import Avatar from "../Avatar";
import Badge from "./Badge";

type IssueCardProps = {
  issue: Issue;
};

function IssueCard({ issue }: IssueCardProps) {
  const issueDueDate = new Date(issue.dueDate);
  const isOverdue = issueDueDate < new Date() && issue.status !== "Closed";

  return (
    <article>
      <Avatar name={issue.assigneeName} />

      <div className="issue-content">
        <h3>{issue.title}</h3>
        <p>Priority: {issue.priority}</p>
        <p>Due date: {issue.dueDate}</p>
        {isOverdue && <p>Overdue!</p>}
      </div>

      <Badge label={issue.status} />
    </article>
  );
}

export default IssueCard;
