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

const update = async (id, name, quantity) => {
  try {
    const query = 'UPDATE products SET name = ?, quantity = ?  WHERE id = ?';
    const [rows] = await connection.execute(query, [name, quantity, id]);
    const result = {
      id: rows.insertId,
      name,
      quantity,
      };
    return result;
  } catch (e) {
    console.error(e);
  }
};

const remove = async (id) => {
  try {
    const productId = await getById(id);
    if (!productId || productId === undefined) {
      return ({ message: 'Product not found' });
    }
    const query = 'DELETE FROM products WHERE id = ?';
    const product = await connection.execute(query, [id]);
//    console.log('product:', product);
  return product;
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
