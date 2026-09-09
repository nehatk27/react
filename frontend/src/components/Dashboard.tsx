import { Link } from "react-router";
import useProjects from "../hooks/useProjects";
import useIssues from "../hooks/useIssues";
import useDocumentTitle from "../hooks/useDocumentTitle";

function Dashboard() {
  useDocumentTitle("Dashboard");

  const {
    projects,
    isLoading: projsLoading,
    error: projsError,
  } = useProjects();
  const { issues, isLoading: issuesLoading, error: issuesError } = useIssues();

  if (projsLoading || issuesLoading) {
    return (
      <main>
        <h1>Welcome to issue Dashboard</h1>
        <p>Loading dashboard...</p>
      </main>
    );
  }

  if (projsError || issuesError) {
    return (
      <main>
        <h1>Welcome to issue Dashboard</h1>
        <p>{projsError || issuesError}</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Welcome to issue Dashboard</h1>
      <p>Total Projects: {projects.length}</p>
      <p>Total Issues: {issues.length}</p>

      <Link to="/projects">View all projects</Link>
      <Link to="/issues">View all issues</Link>
    </main>
  );
}

export default Dashboard;
