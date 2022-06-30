require('dotenv').config();
const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT
    s.id as saleId,
    s.date,
    sp.product_id as productId,
    sp.quantity
  FROM sales s
  JOIN sales_products sp
    on s.id = sp.sale_id;`;
  const [sales] = await connection.execute(query);
  return sales;
};

const create = async (productId, quantity) => {
  try {
    const query1 = 'INSERT INTO sales (date) VALUES (NOW())';
    const query2 = 'INSERT INTO sales_products ( sale_id, product_id, quantity) VALUES (?, ? ,?)';
    console.log('=====> salesModel.create():');
    console.log('=====> salesModel.product_id:', productId);
    console.log('=====> salesModel.quantity:', quantity);
    const [sale] = await connection.execute(query1);
    const saleId = sale.insertId;
    await connection.execute(query2, [saleId, productId, quantity]);
    return { saleId, productId, quantity };
  } catch (e) {
  console.error(e);
  }
};

module.exports = {
  getAll,
  create,
};
