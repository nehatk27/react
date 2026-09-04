import { Link } from "react-router";
import projects from "../data/projects";
import issues from "../data/issues";

function Dashboard() {
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
