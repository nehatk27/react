import { useParams } from "react-router";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((project) => project.id === id);

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
      <p></p>
    </main>
  );
}

export default ProjectDetails;
