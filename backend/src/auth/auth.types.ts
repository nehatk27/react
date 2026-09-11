import type { UserRole } from "../generated/prisma/enums.js";

export type AuthUser = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
};
