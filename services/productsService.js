const productsModel = require('../models/productsModel');

const getAll = () => productsModel.getAll();

const getById = async (id) => productsModel.getById(id);

const create = async (name) => productsModel.create(name);

const update = async (id, name) => {
  const productExists = await productsModel.getById(id);
  if (!productExists || productExists === undefined) {
    return { error: 'Product not found' };
  }
  const product = await productsModel.update(id, name);
  return product;
};

const remove = async (id) => {
  const productExists = await productsModel.getById(id);
  if (!productExists || productExists === undefined) {
    return { error: 'Product not found' };
  }
  const product = await productsModel.remove(id);
  return product;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
