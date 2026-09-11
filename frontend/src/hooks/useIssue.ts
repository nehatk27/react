import { useCallback, useEffect, useState } from "react";
import { getIssue, type IssueResponse } from "../api/issues";

function useIssue(id: number | undefined) {
  const [issue, setIssue] = useState<IssueResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchIssue = useCallback(async () => {
    if (id === undefined || !Number.isInteger(id)) {
      setError("Invalid issue ID");
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const data = await getIssue(id);

      setIssue(data);
    } catch {
      setError("Failed to load issue");
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchIssue();
  }, [fetchIssue]);

  return {
    issue,
    isLoading,
    error,
    retry: fetchIssue,
  };
}

export default useIssue;
