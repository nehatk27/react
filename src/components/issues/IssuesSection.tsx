import IssueCard from "./IssueCard";

function IssuesSection() {
  return (
    <section>
      <h2>IssueSection</h2>
      <div className="issues">
        <IssueCard username="DemoIssue" title="Demotitle" status="Open" />
        <IssueCard username="DemoIssue2" title="Demotitle1" status="Closed" />
        <IssueCard username="DemoIssue3" title="Demotitle2" status="Open" />
      </div>
    </section>
  );
}

export default IssuesSection;
