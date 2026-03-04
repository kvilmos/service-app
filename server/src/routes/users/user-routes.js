import { Hono } from "hono";
import * as handlers from "./user-handlers";

const router = new Hono();

router.get("/", handlers.create);
router.get("/:id", handlers.getById);

export default router;
