// const { getById } = require('../services/productsService');

const checkProductId = async (req, res, next) => {
    const { id } = req.params;
//    const productId = await getById(id);
//    if (!productId || productId === undefined) {
//      return res.status(404).json({ message: 'Product not found' });
//    }
    //
    if (!id || id === undefined) {
      return res.status(404).json({ message: 'Product not found' });
    }
    next();
};
module.exports = checkProductId;
