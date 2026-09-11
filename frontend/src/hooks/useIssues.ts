import { useEffect, useState } from "react";
import { getIssues, type IssueResponse } from "../api/issues";
import type { Issue } from "../types/issue";

function useIssues() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchIssues() {
    try {
      setIsLoading(true);
      setError(null);

      const data = await getIssues();

      const mappedIssues: Issue[] = data.map((issue: IssueResponse) => ({
        id: issue.id,
        title: issue.title,
        description: issue.description,
        project: issue.project,
        assigneeName: issue.assigneeName,
        status: issue.status,
        priority: issue.priority,
        dueDate: issue.dueDate,
        labels: issue.labels,
      }));

      setIssues(mappedIssues);
    } catch {
      setError("Failed to load issues.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  return {
    issues,
    isLoading,
    error,
    retry: fetchIssues,
  };
}

export default useIssues;
