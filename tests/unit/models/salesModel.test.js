const { describe } = require('mocha')
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');

describe('Através todas as compras devem ser retornadas', () => {
  describe('Quando nao ha venda registrada', () => {
    before(() => {
      const salesArray =[[]]
      sinon.stub(connection, 'execute').resolves(salesArray);
      })

      after(() => {
        connection.execute.restore();
      })

      it('Retorna um array vazio', async() => {
        const response = await salesModel.getAll();
        expect(response).to.be.empty;
        expect(response).to.be.an('array');
      })
    })
  describe('Quando ha venda registrada', () => {
    before(() => {
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
      sinon.stub(connection, 'execute').resolves(salesArray);
      })

      after(() => {
        connection.execute.restore();
      })

      it('Retorna um array de vendas', async() => {
        const response = await salesModel.getAll();
        expect(response[0]).to.be.an('object');
        expect(response).to.have.lengthOf(3);
        expect(response[0]).to.have.property('saleId');
      })

      it('Retorna apenas a venda com id dado', async() => {
        const response = await salesModel.getById(1);
        expect([response]).to.have.lengthOf(1);
        expect(response[0]).to.have.property('saleId');
        expect(response[0]).to.have.property('date');
        expect(response[0]).to.have.property('productId');
        expect(response[0]).to.have.property('quantity');
      })

//      it('Cria', async() => {
//        const response = await salesModel.create(1,1);
//        expect(response).to.have.property('productId');
//        expect(response).to.have.property('saleId');
//        expect(response).to.have.property('quantity');
//      })


    })
})

