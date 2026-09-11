import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router";
import { http, HttpResponse } from "msw";

import Sidebar from "../components/Sidebar";
import { AuthProvider } from "../context/AuthContext";
import { server } from "./setup";

describe("Sidebar", () => {
  test("navigates to the Projects page when Projects is clicked", async () => {
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

    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <AuthProvider>
          <Sidebar />

          <Routes>
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="/projects" element={<h1>Projects Page</h1>} />
          </Routes>
        </AuthProvider>
      </MemoryRouter>,
    );

    await screen.findByRole("link", { name: "Projects" });
    await user.click(screen.getByRole("link", { name: "Projects" }));

    expect(
      screen.getByRole("heading", { name: "Projects Page" }),
    ).toBeInTheDocument();
  });
});
