import ProjectsSection from "./projects/ProjectsSection";
import IssuesSection from "./issues/IssuesSection";
function Dashboard() {
  return (
    <main>
      <h1>Dashboard</h1>
      <ProjectsSection />
      <IssuesSection />
    </main>
  );
}

export default Dashboard;
