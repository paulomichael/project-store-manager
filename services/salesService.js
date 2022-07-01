const salesModel = require('../models/salesModel');

const getAll = () => salesModel.getAll();

const create = async (productId, quantity) => {
  console.log('====> salesService.create()');
  const product = salesModel.getProductById(productId);
  if (product === undefined) {
    return { error: 'productId does not exist!' };
  }
  const sale = await salesModel.create(productId, quantity);
  // console.log('====> salesService.sale: ', sale);
  if (sale === undefined) {
    return { error: 'DB returned undefined sale' };
  }
  return sale;
};

module.exports = {
  getAll,
  create,
};
