import { useCallback, useEffect, useState } from "react";
import { getProject, type ProjectResponse } from "../api/projects";

function useProject(id: number | undefined) {
  const [project, setProject] = useState<ProjectResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProject = useCallback(async () => {
    if (id === undefined || !Number.isInteger(id)) {
      setError("Invalid project ID");
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const data = await getProject(id);

      setProject(data);
    } catch {
      setError("Failed to load project");
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  return {
    project,
    isLoading,
    error,
    retry: fetchProject,
  };
}

export default useProject;
