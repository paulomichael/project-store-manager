const { describe } = require('mocha')
const { expect } = require('chai');
const sinon = require('sinon');

const salesController = require('../../../controllers/salesController');
const salesService = require('../../../services/salesService')

 describe('Ao chamar o controller de getAll', () => {
   describe('quando ha vendas', () => {
     const response = {};
     const request = {};
     const salesArray =
     [[
       {
         saleId: 1,
         date: '2022-06-20T02:05:03.000Z',
       },
       {
         saleId: 1,
         date: '2022-06-20T02:05:03.000Z',
       },
       {
         saleId: 2,
         date: '2022-06-20T02:05:03.000Z',
       }

     ]]

     before(() => {
       request.body = {};
       response.status = sinon.stub()
         .returns(response);
       response.json = sinon.stub()
         .returns();
       sinon.stub(salesService, 'getAll')
         .resolves(salesArray);
     });

     after(() => {
       salesService.getAll.restore();
     });

     it('quando retorna um objetos', async () => {
       const getAll = await salesService.getAll();
       expect(getAll).to.be.an('array');

     });

//         it('quando...', async () => {
//       const getById = await salesController.getById(1);
//       expect(getById).to.be.an('array');
//
//     });

   });

 });

describe('Função getAll()', () => {
  describe('Quando retorna uma resposta', () => {
    const mockResponse = [
      {
        saleId: 1,
        date: "2021-09-09T04:54:29.000Z",
        productId: 1,
        quantity: 2
      },
      {
        saleId: 1,
        date: "2021-09-09T04:54:54.000Z",
        productId: 2,
        quantity: 2
      }
    ];

    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'getAll').resolves(mockResponse);
    });

    after(() => salesService.getAll.restore());

    it('Retorna um array.', async () => {
      await salesController.getAll(req, res);
      expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
    })
  })
});
