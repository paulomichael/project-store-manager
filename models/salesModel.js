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

const getById = async (id) => {
  const query = `SELECT
    s.date,
    sp.product_id as productId,
    sp.quantity
  FROM sales s
  JOIN sales_products sp
    on s.id = sp.sale_id
  WHERE s.id = ?;`;
  const [sale] = await connection.execute(query, [Number(id)]);
  return sale;
};

const getProductById = async (productId) => {
  const query = 'SELECT * FROM sales_products WHERE product_id = ?';
  const [rows] = await connection.execute(query, [productId]);
  const [product] = rows;
  return product;
};

const create = async (productId, quantity) => {
  try {
    const query1 = 'INSERT INTO sales (date) VALUES (NOW())';
    // const query2 = 'INSERT INTO sales_products ( sale_id, product_id, quantity) VALUES (?, ? ,?)';
    const query2 = 'INSERT INTO sales_products ( sale_id, product_id, quantity) VALUES (?, ? ,?)';

//    console.log('----=====> salesModel.create():');
//    console.log('----=====> salesModel.productId:', productId);
//    console.log('----=====> salesModel.quantity:', quantity);

    const [sale] = await connection.execute(query1);
//    console.log('----=====> salesModel.sale:', sale);
    const saleId = sale.insertId;
//    console.log('----=====> salesModel.saleId:', saleId);
    await connection.execute(query2, [saleId, productId, quantity]);
    return { saleId, productId, quantity };
  } catch (e) {
  console.error(e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  getProductById,
};
