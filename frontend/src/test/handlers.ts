import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("http://localhost:3000/auth/login", async () => {
    return HttpResponse.json({
      user: {
        id: 1,
        name: "Neha",
        email: "neha@example.com",
        role: "User",
      },
    });
  }),

  http.get("http://localhost:3000/auth/session", () => {
    return new HttpResponse(null, { status: 401 });
  }),

  http.get("http://localhost:3000/issues", () => {
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
];
