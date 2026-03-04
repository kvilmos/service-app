import { Hono } from "hono";

const router = new Hono();

router.get("/", (c) => {
  return c.json({ message: "Server is running..." });
});

export default router;
