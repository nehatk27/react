import IssuesSection from "../components/issues/IssuesSection";
import useDocumentTitle from "../hooks/useDocumentTitle";
import useIssues from "../hooks/useIssues";

function IssuesPage() {
  useDocumentTitle("Issues");

  const { issues, isLoading, error, retry } = useIssues();

  if (isLoading) {
    return (
      <main>
        <h1>Issues</h1>
        <p>Loading issues...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h1>Issues</h1>
        <p>{error}</p>
        <button onClick={retry}>Retry</button>
      </main>
    );
  }

  return (
    <main>
      <h1>Issues</h1>
      <IssuesSection initialIssues={issues} />
    </main>
  );
}

export default IssuesPage;
