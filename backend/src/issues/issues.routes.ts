import { Router } from "express";
import {
  listIssuesController,
  getIssueByIdController,
} from "./issues.controller.js";

const issuesRouter = Router();

issuesRouter.get("/", listIssuesController);
issuesRouter.get("/:id", getIssueByIdController);

export default issuesRouter;
