import { Hono } from "hono";
import * as handlers from "./employees-handlers";

const router = new Hono();

router.post("/", handlers.create);

export default router;
