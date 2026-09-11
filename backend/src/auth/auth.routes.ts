import { Router } from "express";
import {
  getSessionController,
  loginUserController,
  logoutController,
} from "./auth.controller.js";

const authRouter = Router();

authRouter.post("/login", loginUserController);
authRouter.get("/session", getSessionController);
authRouter.post("/logout", logoutController);

export default authRouter;
