export const create = async (c) => {
  console.log("new employee was created!");
  return c.json({ message: "success" }, 200);
};
