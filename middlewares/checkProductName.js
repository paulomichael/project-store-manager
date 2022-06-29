const checkProductName = async (req, res, next) => {
  const { name } = req.body;

  if (name === undefined) {
     return res.status(400).json({ name });
  }
  next();
};

module.exports = checkProductName;
