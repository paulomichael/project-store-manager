const productsModel = require('../models/productsModel');

const getAll = () => productsModel.getAll();

const getById = async (id) => productsModel.getById(id);

const create = async (name) => productsModel.create(name);

const update = async (id, name, quantity) => productsModel.update(id, name, quantity);

module.exports = {
  getAll,
  getById,
  create,
  update,
};
