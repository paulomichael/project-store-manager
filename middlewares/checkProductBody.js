const checkProductBody = async (req, res, next) => {
    const [{ productId, quantity }] = req.body;
  console.log('----------------------------------------------------');
  console.log('====> checkProductBody.req.body: ', req.body);
//  console.log('====> checkProductBody.productId: ', productId);
//  console.log('====> checkProductBody.quantity: ', quantity);

  if (productId === undefined) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  if (quantity === undefined) {
    return res
      .status(400)
      .json({ message: '"quantity" is required' });
  }
  if (typeof quantity !== 'number' || quantity <= 0) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  console.log('====> checkProductBody END');
  next();
};
module.exports = checkProductBody;

