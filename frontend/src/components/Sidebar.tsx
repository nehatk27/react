import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { user } = useAuth();
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

        {user?.role === "Admin" && <NavLink to="/admin">Admin</NavLink>}
      </nav>
    </aside>
  );
}

export default Sidebar;
