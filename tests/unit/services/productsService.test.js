const { describe } = require('mocha')
const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../models/productsModel')
const productsService = require('../../../services/productsService');

describe('Retorna os produtos', () => {
  describe('quando nao ha produtos', () => {
    const productsArray = [[]];
    before(() => {
      sinon.stub(productsModel, 'getAll')
        .resolves(productsArray);
    });
    after(() => {
      productsModel.getAll.restore();
    });
    it('retorna um array vazio', async () => {
      const response = await productsService.getAll();
      expect(response).to.be.an('array');
      expect(response[0]).to.be.empty;
    });

  });

  describe('quando ha produtos', () => {
    const productsArray =
    [[
      {
        "id": 1,
        "name": "produto A",
        "quantity": 10
      },
      {
        "id": 2,
        "name": "produto B",
        "quantity": 20
      }
    ]]

    before(() => {
      sinon.stub(productsModel, 'getAll')
        .resolves(productsArray);
    });

    after(() => {
      productsModel.getAll.restore();
    });

    it('retorna produtos', async () => {
      const [response] = await productsService.getAll();
      expect(response).to.be.a('array');
      expect(response[0]).to.have.property('id');
      expect(response[0]).to.have.property('name');
      expect(response[0]).to.have.property('quantity');
    });
  });
});
