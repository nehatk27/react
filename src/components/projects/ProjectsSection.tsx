import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";
import issues from "../../data/issues";

function ProjectsSection() {
  return (
    <section>
      <h2>These are the existing projects:</h2>

      <div className="projects">
        {projects.length === 0 ? (
          <h3>No projects found!</h3>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              issueCount={
                issues.filter((issue) => issue.project === project.name).length
              }
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
