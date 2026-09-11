import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

function RoleRoute() {
  const { user } = useAuth();

  if (user?.role !== "Admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

export default RoleRoute;
