const salesService = require('../services/salesService');

const getAll = async (_req, res) => {
  const allSales = await salesService.getAll();
  res.status(200).json(allSales);
};

const create = async (req, res) => {
  const [{ productId, quantity }] = req.body;
  const sale = await salesService.create(productId, quantity);
  const saleObject = {
    id: sale.saleId,
    itemsSold: req.body,
  };
  return res.status(201).json(saleObject);
};

module.exports = {
  getAll,
  create,
};
