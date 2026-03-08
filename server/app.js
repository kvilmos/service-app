import { Hono } from "hono";
import { logger } from "hono/logger";

import index from "./src/routes/index-routes";

import notFound from "./src/routes/errors/not-found";
import error from "./src/routes/errors/error";
import { auth } from "@/lib/auth";

const app = new Hono();

app
  .use("*", logger())
  .on(["POST", "GET"], "/api/v1/auth/*", (c) => auth.handler(c.req.raw))
  .route("/api/v1", index)
  .notFound(notFound)
  .onError(error);

export default app;
