const salesModel = require('../models/salesModel');

const getAll = () => salesModel.getAll();

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  if (!sale || sale.length === 0) {
    return { error: 'Sale not found' };
  }
  return sale;
};

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
  getById,
  create,
};
