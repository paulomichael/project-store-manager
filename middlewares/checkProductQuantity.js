const checkProductQuantity = async (req, res, next) => {
  console.log('====> checkProductQuantity req.body: ', req.body);
  const [{ quantity }] = req.body;
  console.log('====> checkProductQuantity.quantity:', quantity);
  console.log('-------------------> CHECK!');
  if (!quantity || quantity === undefined) {
    return res
      .status(400)
      .json({ message: '"quantity" is required' });
  }
  if (typeof quantity !== 'number' || quantity <= 0) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  console.log('====> checkProductQuantity END');
  next();
};

module.exports = checkProductQuantity;
