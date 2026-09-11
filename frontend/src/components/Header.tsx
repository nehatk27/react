import { useNavigate } from "react-router";
import Avatar from "./Avatar";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header>
      <Avatar name={user?.name ?? "User"} />
      <h1>Issue Dashboard project</h1>

      {user && <span>Welcome, {user.name} </span>}

      <button
        onClick={async () => {
          await logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
