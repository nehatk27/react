import { Link } from "react-router";

type ProjectCardProps = {
  id: number;
  name: string;
  description: string;
  issueCount: number;
};

function ProjectCard({ id, name, description, issueCount }: ProjectCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <span>{issueCount} issues</span>
      <Link to={`/projects/${id}`}>View details</Link>
    </article>
  );
}

export default ProjectCard;
