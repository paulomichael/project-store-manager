const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM products';
  const products = await connection.execute(query);
  return products[0];
};

const getById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  const [rows] = await connection.execute(query, [id]);
  const [product] = rows;
  return product;
};

module.exports = {
  getAll,
  getById,
};
