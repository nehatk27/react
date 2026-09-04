import { NavLink } from "react-router";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Goto:</h2>
      <nav>
        <NavLink to="/" end>
          Dashboard
        </NavLink>
        <NavLink to="/projects" end>
          Projects
        </NavLink>
        <NavLink to="/issues" end>
          Issues
        </NavLink>
        <NavLink to="/profile" end>
          Profile
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
