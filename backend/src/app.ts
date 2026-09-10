import express from "express";
import cors from "cors";
import authRouter from "./auth/auth.routes.js";
import projectsRouter from "./projects/projects.routes.js";
import issuesRouter from "./issues/issues.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    message: "Backend is running",
  });
});

app.use("/auth", authRouter);
app.use("/projects", projectsRouter);
app.use("/issues", issuesRouter);

export default app;
