import { useEffect, useState } from "react";
import { getProjects, type ProjectResponse } from "../api/projects";

function useProjects() {
  const [projects, setProjects] = useState<ProjectResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function fetchProjects() {
    try {
      setIsLoading(true);
      setError(null);

      const data = await getProjects();
      setProjects(data);
    } catch {
      setError("Failed to load projects!");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    isLoading,
    error,
    retry: fetchProjects,
  };
}

export default useProjects;
