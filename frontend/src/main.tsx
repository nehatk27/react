import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import App from "./App.tsx";

import Dashboard from "./components/Dashboard.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import RoleRoute from "./components/RoleRoute.tsx";

import NotFoundPage from "./pages/NotFoundPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import IssuesPage from "./pages/IssuesPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import ProjectDetails from "./pages/ProjectDetails.tsx";
import IssueDetails from "./pages/IssueDetails.tsx";
import UnauthorizedPage from "./pages/UnauthorizedPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";

import { AuthProvider } from "./context/AuthContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "projects",
            element: <ProjectsPage />,
          },
          {
            path: "issues",
            element: <IssuesPage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "projects/:id",
            element: <ProjectDetails />,
          },
          {
            path: "issues/:id",
            element: <IssueDetails />,
          },
          {
            path: "unauthorized",
            element: <UnauthorizedPage />,
          },
          {
            element: <RoleRoute />,
            children: [
              {
                path: "admin",
                element: <AdminPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);
