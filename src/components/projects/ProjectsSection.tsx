import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section>
      <h2>Projects Section</h2>

      <div className="projects">
        <ProjectCard
          name="Demotitle"
          description="Demodescription"
          issueCount={2}
        />
        <ProjectCard
          name="Demotitle2"
          description="Demodescription2"
          issueCount={4}
        />
        <ProjectCard
          name="Demotitle3"
          description="Demodescription3"
          issueCount={1}
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
