import { Router } from "express";
import {
  adminController,
  getSessionController,
  loginUserController,
  logoutController,
} from "./auth.controller.js";

import { requireAuth, requireAdmin } from "./auth.middleware.js";

const authRouter = Router();

authRouter.post("/login", loginUserController);
authRouter.get("/session", getSessionController);
authRouter.post("/logout", logoutController);
authRouter.get("/admin", requireAuth, requireAdmin, adminController);

export default authRouter;
