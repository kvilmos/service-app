import { createMiddleware } from "hono/factory";

export const requireEmailVerification = createMiddleware(async (c, next) => {
  const user = c.get("user");

  if (!user.emailVerified) {
    return c.json({ message: "Email not verified" }, 403);
  }

  await next();
});
