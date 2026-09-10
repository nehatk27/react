import { Router } from "express";
import { loginUserController } from "./auth.controller.js";

const authRouter = Router();

authRouter.post("/login", loginUserController);

export default authRouter;
