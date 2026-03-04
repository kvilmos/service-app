import db from "../../db";
import { usersTable } from "../../db/schema";

export const create = async (c) => {
  console.log("user");
  const [user] = await db
    .insert(usersTable)
    .values({
      email: "test@email.com",
      password: "password",
      fullName: "Full Name",
      birthDate: new Date("2000-01-01"),
    })
    .returning();

  return c.json(user, 200);
};

export const getById = async (c) => {
  const id = c.req.param("id");

  return c.json({ id, name: "test users" });
};
