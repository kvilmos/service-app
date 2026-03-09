import { auth } from "@/lib/auth";
import { createMiddleware } from "hono/factory";

export const requireAuth = createMiddleware(async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  if (!session) {
    return c.json({ message: "Unauthorized" }, 401);
  }

  c.set("user", session.user);
  c.set("session", session.session);

  if (!session.user.emailVerified) {
    return c.json(
      { message: "Email not verified", needsVerification: true },
      403,
    );
  }

  await next();
});
