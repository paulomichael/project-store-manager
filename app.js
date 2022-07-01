const express = require('express');
const bodyParser = require('body-parser');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');
const checkProductName = require('./middlewares/checkProductName');
// const checkProductBody = require('./middlewares/checkProductBody');
// const checkProductId = require('./middlewares/checkProductId');
// const checkProductQuantity = require('./middlewares/checkProductQuantity');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAll);
app.get('/products/:id', productsController.getById);
app.post('/products/', checkProductName, productsController.create);
app.put('/products/:id', checkProductName, productsController.update);
app.delete('/products/:id', productsController.remove);

app.get('/sales', salesController.getAll);
app.get('/sales/:id', salesController.getById);
// app.post('/sales', checkProductId, checkProductQuantity, salesController.create);
// app.post('/sales', checkProductBody, salesController.create);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
