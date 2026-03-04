const error = (err, c) => {
  console.error(`${err}`);
  return c.json({ message: "Internal Server Error", error: err }, 500);
};

export default error;
