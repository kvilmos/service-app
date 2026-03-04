import app from "./app.js";

const port = process.env.PORT || 3000;

console.log(`Server is running on port http://localhost:${port}`);

export default {
  port: port,
  fetch: app.fetch,
};
