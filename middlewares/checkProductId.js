const checkProductId = async (req, res, next) => {
    const [{ productId }] = req.body;
  console.log('====> checkProductId.productId: ', productId);
    if (productId === undefined) {
      res.status(400).json({ message: '"productId" is required' });
    }
    next();
};
module.exports = checkProductId;
