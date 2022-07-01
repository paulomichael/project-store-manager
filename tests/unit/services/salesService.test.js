const { describe } = require('mocha')
const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../models/salesModel')
const salesService = require('../../../services/salesService');

describe('Retorna as vendas', () => {
  describe('quando nao ha vendas', () => {
    const salesArray = [[]];
    before(() => {
      sinon.stub(salesModel, 'getAll')
        .resolves(salesArray);
    });
    after(() => {
      salesModel.getAll.restore();
    });
    it('retorna um array vazio', async () => {
      const response = await salesService.getAll();
      expect(response).to.be.an('array');
      expect(response[0]).to.be.empty;
    });

  });

  describe('quando ha vendas', () => {
    const salesArray =
    [[
      {
        saleId: 1,
        date: '2022-06-20T02:05:03.000Z',
        productId: 1,
        quantity: 5
      },
      {
        saleId: 1,
        date: '2022-06-20T02:05:03.000Z',
        productId: 2,
        quantity: 10
      },
      {
        saleId: 2,
        date: '2022-06-20T02:05:03.000Z',
        productId: 3,
        quantity: 15
      }

    ]]
    before(() => {
      sinon.stub(salesModel, 'getAll')
        .resolves(salesArray);
    });

    after(() => {
      salesModel.getAll.restore();
    });

    it('retorna vendas', async () => {
      const [response] = await salesService.getAll();
      expect(response).to.be.a('array');
      expect(response[0]).to.have.property('saleId');
      expect(response[0]).to.have.property('date');
      expect(response[0]).to.have.property('productId');
      expect(response[0]).to.have.property('quantity');

    });

  });
});
