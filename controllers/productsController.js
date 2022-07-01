// const products = require('express').Router();

const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const allProducts = await productsService.getAll();
  res.status(200).json(allProducts);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const product = await productsService.getById(id);
    if (product === undefined) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(product);
  };

const create = async (req, res) => {
    const { name } = req.body;
    const product = await productsService.create(name);
    return res.status(201).json(product);
  };

const update = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const product = await productsService.update(id, name, quantity);
  res.status(200).json(product);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
