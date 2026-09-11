import { useParams } from "react-router";
import useProject from "../hooks/useProject";
import useDocumentTitle from "../hooks/useDocumentTitle";

function ProjectDetails() {
  useDocumentTitle("Project Details");
  const { id } = useParams();
  const projectId = id ? Number(id) : undefined;
  const { project, isLoading, error, retry } = useProject(projectId);

  if (isLoading) {
    return (
      <main>
        <h2>Project details:</h2>
        <p>Loading project..</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h2>Project Details</h2>
        <p>{error}</p>
        <button onClick={retry}>Retry</button>
      </main>
    );
  }

  if (!project) {
    return (
      <main>
        <h2>Project not found</h2>
        <p>The project you are looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main>
      <h2>Project Details:</h2>
      <p>ID: {project.id}</p>
      <p>Name: {project.name}</p>
      <p>Description: {project.description}</p>
    </main>
  );
}

export default ProjectDetails;
