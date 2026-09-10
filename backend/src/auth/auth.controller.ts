import type { Request, Response } from "express";
import { loginUser } from "./auth.service.js";

export async function loginUserController(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      message: "Email and password are required",
    });
    return;
  }

  const user = await loginUser(email, password);

  if (!user) {
    res.status(401).json({
      message: "Invalid email or password",
    });
    return;
  }

  res.status(200).json({
    user,
  });
}
