import { auth } from "@/lib/auth";
import { createMiddleware } from "hono/factory";

export const requirePermission = (requiredPermissionMap) => {
  return createMiddleware(async (c, next) => {
    const user = c.get("user");

    const has = await auth.api.userHasPermission({
      body: {
        role: user.role,
        permissions: requiredPermissionMap,
      },
    });

    console.log(has);
    if (!has) {
      return c.json({ message: "Forbidden: Missing required permission" }, 403);
    }

    await next();
  });
};
