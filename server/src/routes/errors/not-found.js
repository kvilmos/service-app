const notFound = (c) => {
  return c.json({ message: "Not Found" }, 404);
};

export default notFound;
