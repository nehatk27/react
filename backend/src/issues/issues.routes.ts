import { Router } from "express";
import { listIssuesController } from "./issues.controller.js";

const issuesRouter = Router();

issuesRouter.get("/", listIssuesController);

export default issuesRouter;
