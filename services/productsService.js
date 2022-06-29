const productsModels = require('../models/productsModel');

const getAll = () => productsModels.getAll();

const getById = async (id) => productsModels.getById(id);

module.exports = {
  getAll,
  getById,
};
