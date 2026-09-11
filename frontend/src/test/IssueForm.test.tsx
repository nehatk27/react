import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import IssueForm from "../components/issues/IssueForm";

describe("IssueForm", () => {
  test("shows validation errors when submitted empty", async () => {
    const user = userEvent.setup();
    render(<IssueForm onSubmit={vi.fn()} />);

    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(
      screen.getAllByText("Issue must have a title with atleast 3 characters."),
    ).toHaveLength(2);
    expect(screen.getAllByText("Issue must have a description")).toHaveLength(
      2,
    );
    expect(screen.getAllByText("Issue must be of a project")).toHaveLength(2);
    expect(screen.getAllByText("Issue must have a assigneeName")).toHaveLength(
      2,
    );
    expect(screen.getAllByText("Issue must have a dueDate")).toHaveLength(2);
  });

  test("submits a valid issue", async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();
    render(<IssueForm onSubmit={handleSubmit} />);

    await user.type(screen.getByLabelText("Title"), "New issue");
    await user.type(
      screen.getByLabelText("Description"),
      "This is a new issue",
    );
    await user.type(screen.getByLabelText("project name"), "Authentication");
    await user.type(screen.getByLabelText("assigneeName"), "Neha");
    await user.type(screen.getByLabelText("dueDate"), "2026-09-20");
    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText("Title")).toHaveValue("");
  });
});
