import ProjectCard from "./ProjectCard";
import type { ProjectResponse } from "../../api/projects";

type ProjectsSectionProps = {
  projects: ProjectResponse[];
};

function ProjectsSection({ projects }: ProjectsSectionProps) {
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
              issueCount={project.issueCount}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
