export const create = async (c) => {
  return c.json({ message: "user" }, 200);
};

export const getById = async (c) => {
  const id = c.req.param("id");

  return c.json({ id, name: "test users" });
};
