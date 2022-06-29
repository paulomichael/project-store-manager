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

const create = async (name) => {
  try {
  const query = 'INSERT INTO products (name) VALUES (?)';
  const [rows] = await connection.execute(query, [name]);
  const result = {
    id: rows.insertId,
    name,
    };
  return result;
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
};
