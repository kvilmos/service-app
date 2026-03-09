import { auth } from "@/lib/auth";

export const create = async (c) => {
  await auth.api.createUser({
    body: {
      email: "hustlerspuma47@gmail.com",
      password: "secret47!",
      name: "Test Name",
      role: "employee",
    },
  });

  return c.json({ message: "success" }, 201);
};
