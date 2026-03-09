import { Hono } from "hono";
import * as handlers from "./employees-handlers";
import { requireAuth } from "@/middleware/auth";

const router = new Hono();

router.use(requireAuth);
router.post("/", handlers.create);

export default router;
