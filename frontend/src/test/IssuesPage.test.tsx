import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router";
import { http, HttpResponse } from "msw";

import IssuesPage from "../pages/IssuesPage";
import { server } from "./setup";

describe("IssuesPage", () => {
  test("shows loading state while issues are being fetched", () => {
    server.use(
      http.get("http://localhost:3000/issues", async () => {
        await new Promise(() => {});
        return HttpResponse.json([]);
      }),
    );

    render(
      <MemoryRouter>
        <IssuesPage />
      </MemoryRouter>,
    );

    expect(screen.getByText("Loading issues...")).toBeInTheDocument();
  });

  test("shows an error when loading issues fails", async () => {
    server.use(
      http.get("http://localhost:3000/issues", () => {
        return new HttpResponse(null, {
          status: 500,
        });
      }),
    );

    render(
      <MemoryRouter>
        <IssuesPage />
      </MemoryRouter>,
    );

    expect(
      await screen.findByText("Failed to load issues."),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Retry" })).toBeInTheDocument();
  });

  test("retries loading issues after an error", async () => {
    let requestCount = 0;

    server.use(
      http.get("http://localhost:3000/issues", () => {
        requestCount++;

        if (requestCount === 1) {
          return new HttpResponse(null, {
            status: 500,
          });
        }

        return HttpResponse.json([
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
        ]);
      }),
    );

    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <IssuesPage />
      </MemoryRouter>,
    );

    const retryButton = await screen.findByRole("button", {
      name: "Retry",
    });
    await user.click(retryButton);

    expect(await screen.findByText("Fix login bug")).toBeInTheDocument();
    expect(requestCount).toBe(2);
  });
});
