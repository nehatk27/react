import { apiClient } from "./client";

export type User = {
  id: number;
  name: string;
  email: string;
  role: "User" | "Admin";
};

export type LoginResponse = {
  user: User;
};

export function login(email: string, password: string) {
  return apiClient<LoginResponse>("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}

export function getSession() {
  return apiClient<LoginResponse>("/auth/session");
}

export function logout() {
  return apiClient<{ message: string }>("/auth/logout", {
    method: "POST",
  });
}
