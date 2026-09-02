type ProjectCardProps = {
  name: string;
  description: string;
  issueCount: number;
};

function ProjectCard({ name, description, issueCount }: ProjectCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <span>{issueCount} issues</span>
    </article>
  );
}

export default ProjectCard;
