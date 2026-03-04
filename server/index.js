import { Hono } from 'hono';
import { cors } from "hono/cors";
import { VERSION } from "@app/shared";

const app = new Hono();
app.use('/*', cors());

app.get('/health', (c) => c.json({ status: 'ok', version: VERSION }));

console.log("Server running on http://localhost:3000");
export default { port: 3000, fetch: app.fetch };
