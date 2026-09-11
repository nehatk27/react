import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router";

import { http, HttpResponse } from "msw";

import ProtectedRoute from "../components/ProtectedRoute";
import { AuthProvider } from "../context/AuthContext";
import { server } from "./setup";

describe("ProtectedRoute", () => {
  test("redirects unauthenticated users to the login page", async () => {
    render(
      <MemoryRouter initialEntries={["/protected"]}>
        <AuthProvider>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/protected" element={<h1>Protected Page</h1>} />
            </Route>

            <Route path="/login" element={<h1>Login Page</h1>} />
          </Routes>
        </AuthProvider>
      </MemoryRouter>,
    );

    expect(
      await screen.findByRole("heading", {
        name: "Login Page",
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", {
        name: "Protected Page",
      }),
    ).not.toBeInTheDocument();
  });

  test("allows authenticated users to access protected content", async () => {
    server.use(
      http.get("http://localhost:3000/auth/session", () => {
        return HttpResponse.json({
          user: {
            id: 1,
            name: "Neha",
            email: "neha@example.com",
            role: "User",
          },
        });
      }),
    );

    render(
      <MemoryRouter initialEntries={["/protected"]}>
        <AuthProvider>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/protected" element={<h1>Protected Page</h1>} />
            </Route>

            <Route path="/login" element={<h1>Login Page</h1>} />
          </Routes>
        </AuthProvider>
      </MemoryRouter>,
    );

    expect(
      await screen.findByRole("heading", {
        name: "Protected Page",
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", {
        name: "Login Page",
      }),
    ).not.toBeInTheDocument();
  });
});
