import { Router } from "express";
import {
  listProjectController,
  getProjectByIdController,
} from "./projects.controller.js";

const projectsRouter = Router();

projectsRouter.get("/", listProjectController);
projectsRouter.get("/:id", getProjectByIdController);

export default projectsRouter;
