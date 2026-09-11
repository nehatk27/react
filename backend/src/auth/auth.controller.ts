import type { Request, Response } from "express";
import { getSessionUser, loginUser } from "./auth.service.js";

export async function loginUserController(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      message: "Email and password are required",
    });
    return;
  }

  const result = await loginUser(email, password);
  if (!result) {
    res.status(401).json({
      message: "Invalid email or password",
    });
    return;
  }

  res.cookie("token", result.token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 1000,
  });

  res.status(200).json({
    user: result.user,
  });
}

export async function getSessionController(req: Request, res: Response) {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({
      message: "Not authenticated",
    });
    return;
  }

  const user = await getSessionUser(token);
  if (!user) {
    res.status(401).json({
      message: "Invalid or expired session",
    });
    return;
  }

  res.status(200).json({
    user,
  });
}

export function logoutController(_req: Request, res: Response) {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  res.status(200).json({
    message: "Logged out successfully",
  });
}

export function adminController(req: Request, res: Response) {
  res.status(200).json({
    message: `Welcome Admin ${req.user?.name}`,
  });
}
