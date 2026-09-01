import issues from "../../data/issues";
import IssueCard from "./IssueCard";
import EmptyState from "../EmptyState";

function IssuesSection() {
  return (
    <section>
      <h2>Issues:</h2>
      <div className="issues">
        {issues.length === 0 ? (
          <EmptyState />
        ) : (
          issues.map((issue) => <IssueCard key={issue.id} issue={issue} />)
        )}
      </div>
    </section>
  );
}

export default IssuesSection;
                                             