import { Hono } from "hono";
import { cors } from "hono/cors";
import { VERSION } from "@app/shared";

import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "./src/db/schema";

const db = drizzle(process.env.DATABASE_URL);

const app = new Hono();
app.use("/*", cors());

app.get("/", (c) => c.json({ status: "ok" }));

app.post("/users", async (c) => {
  try {
    const body = await c.req.json();
    const insertUser = await db
      .insert(usersTable)
      .values({
        email: body.email,
        password: body.password,
        fullName: body.fullName,
        birthDate: new Date(body.birthDate),
      })
      .returning();

    return c.json(
      {
        success: true,
        user: insertUser[0],
      },
      201,
    );
  } catch (error) {
    console.log(error);
    return c.json({ success: false, message: error }, 500);
  }
});

app.get("/health", (c) => c.json({ status: "ok", version: VERSION }));

console.log("Server running on http://localhost:3000");
export default { port: 3000, fetch: app.fetch };
