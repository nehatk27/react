import type { NextFunction, Request, Response } from "express";
import { getSessionUser } from "./auth.service.js";

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
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

  req.user = user;
  next();
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.user?.role !== "Admin") {
    res.status(403).json({
      message: "Admin access required",
    });
    return;
  }

  next();
}
