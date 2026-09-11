import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router";
import IssuesSection from "../components/issues/IssuesSection";
import type { Issue } from "../types/issue";

const issues: Issue[] = [
  {
    id: 1,
    title: "Fix login bug",
    description: "Login is failing",
    project: "Authentication",
    assigneeName: "Neha",
    status: "Open",
    priority: "High",
    dueDate: "2026-09-20",
    labels: ["bug"],
  },
  {
    id: 2,
    title: "Update dashboard",
    description: "Improve dashboard UI",
    project: "Dashboard",
    assigneeName: "Admin",
    status: "Closed",
    priority: "Low",
    dueDate: "2026-09-25",
    labels: ["ui"],
  },
];

describe("IssuesSection", () => {
  test("displays the existing issues", () => {
    render(
      <MemoryRouter>
        <IssuesSection initialIssues={issues} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Fix login bug")).toBeInTheDocument();
    expect(screen.getByText("Update dashboard")).toBeInTheDocument();
  });

  test("filters issues by search text", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <IssuesSection initialIssues={issues} />
      </MemoryRouter>,
    );

    const searchInput = screen.getByRole("searchbox");
    await user.type(searchInput, "login");

    expect(screen.getByText("Fix login bug")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText("Update dashboard")).not.toBeInTheDocument();
    });
  });

  test("filters issues by status", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <IssuesSection initialIssues={issues} />
      </MemoryRouter>,
    );

    const statusSelect = screen.getByRole("combobox", {
      name: "Status",
    });
    await user.selectOptions(statusSelect, "Closed");

    expect(screen.getByText("Update dashboard")).toBeInTheDocument();
    expect(screen.queryByText("Fix login bug")).not.toBeInTheDocument();
  });

  test("shows empty state when no issues match the filters", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <IssuesSection initialIssues={issues} />
      </MemoryRouter>,
    );

    const searchInput = screen.getByRole("searchbox");
    await user.type(searchInput, "does-not-exist");

    await waitFor(() => {
      expect(screen.queryByText("Fix login bug")).not.toBeInTheDocument();
      expect(screen.queryByText("Update dashboard")).not.toBeInTheDocument();
    });
    expect(screen.getByText("No issues found!")).toBeInTheDocument();
  });

  test("clears the filters", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <IssuesSection initialIssues={issues} />
      </MemoryRouter>,
    );

    const searchInput = screen.getByRole("searchbox");
    await user.type(searchInput, "login");

    await waitFor(() => {
      expect(screen.queryByText("Update dashboard")).not.toBeInTheDocument();
    });
    await user.click(screen.getByRole("button", { name: "Clear filters" }));
    await waitFor(() => {
      expect(screen.getByText("Fix login bug")).toBeInTheDocument();
      expect(screen.getByText("Update dashboard")).toBeInTheDocument();
    });
  });
});
