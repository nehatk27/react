import { useParams } from "react-router";
import useIssue from "../hooks/useIssue";
import useDocumentTitle from "../hooks/useDocumentTitle";

function IssueDetails() {
  useDocumentTitle("Issue Details");
  const { id } = useParams();
  const issueId = id ? Number(id) : undefined;
  const { issue, isLoading, error, retry } = useIssue(issueId);

  if (isLoading) {
    return (
      <main>
        <h2>Issue details:</h2>
        <p>Loading issue..</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h2>Issue Details</h2>
        <p>{error}</p>
        <button onClick={retry}>Retry</button>
      </main>
    );
  }

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
    </main>
  );
}

export default IssueDetails;
