const salesModel = require('../models/salesModel');

const getAll = () => salesModel.getAll();

const create = async (productId, quantity) => {
  const sale = await salesModel.create(productId, quantity);
  return sale;
};

module.exports = {
  getAll,
  create,
};
