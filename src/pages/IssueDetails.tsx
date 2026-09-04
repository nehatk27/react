import { useParams } from "react-router";
import issues from "../data/issues";

function IssueDetails() {
  const { id } = useParams();
  const issue = issues.find((issue) => issue.id === id);
  if (!issue) {
    return (
      <main>
        <h2>Issue not found</h2>
        <p>The issue you are looking for does not exist.</p>
      </main>
    );
  }
  return (
    <main>
      <h2>Issue Details:</h2>
      <p>ID: {id}</p>

      <p>Issue: {issue.title ?? "Issue not found"}</p>
      <p>Description: {issue.description}</p>
      <p>Status: {issue.status}</p>
      <p>Priority: {issue.priority}</p>
      <p>Duedate: {issue.dueDate}</p>
      <p>Assignee name: {issue.assigneeName}</p>
      <p>Project name: {issue.project}</p>

      <p></p>
    </main>
  );
}

export default IssueDetails;
