import ProjectsSection from "../components/projects/ProjectsSection";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useProjects from "../hooks/useProjects";

function ProjectsPage() {
  useDocumentTitle("Projects");

  const { projects, isLoading, error, retry } = useProjects();

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
        <button onClick={retry}>Retry</button>
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
