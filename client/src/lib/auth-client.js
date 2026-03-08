import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "/api/v1/auth",
});
