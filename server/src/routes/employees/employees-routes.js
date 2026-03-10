import { Hono } from "hono";
import * as handlers from "./employees-handlers";
import { requireAuth } from "@/middleware/auth";
import { requireEmailVerification } from "@/middleware/email-verification";
import { requirePermission } from "@/middleware/role";
import { PERMISSIONS } from "@/constants/roles";

const router = new Hono();

router.use(requireAuth, requireEmailVerification);
router.post(
  "/",
  requirePermission({ employee: [PERMISSIONS.EMPLOYEE.HIRE] }),
  handlers.create,
);

export default router;
