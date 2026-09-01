import Avatar from "../Avatar";
import Badge from "./Badge";

type IssueCardProps = {
  username: string;
  title: string;
  status: string;
};

function IssueCard({ username, title, status }: IssueCardProps) {
  return (
    <article>
      <Avatar name={username} />
      <h2>{title}</h2>
      <Badge label={status} />
    </article>
  );
}

export default IssueCard;
