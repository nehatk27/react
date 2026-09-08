import { useEffect, useState } from "react";
import ProjectsSection from "../components/projects/ProjectsSection";
import { getProjects, type ProjectResponse } from "../api/projects";

function ProjectsPage() {
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
      setError("Failed to load projects.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <main>
        <h1>Projects</h1>
        <p>Loading projects...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h1>Projects</h1>
        <p>{error}</p>
        <button onClick={fetchProjects}>Retry</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Projects</h1>
      <ProjectsSection projects={projects} />
    </main>
  );
}

export default ProjectsPage;
