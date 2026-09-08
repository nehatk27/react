import { Router } from "express";
import listProjectController from "./projects.controller.js";

const projectsRouter = Router();

projectsRouter.get("/", listProjectController);

export default projectsRouter;
