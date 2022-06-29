const { describe } = require('mocha')
const { expect } = require('chai');
const sinon = require('sinon');

const productsControllers = require('../../../controllers/productsControllers');
const productsServices = require('../../../services/productsServices')

describe('Ao chamar o controller de getAll', () => {
  describe('quando ha produto', () => {
    const response = {};
    const request = {};
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
    ]];

    beforeEach(() => {
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsServices, 'getAll').resolves(productsArray);
    });

    afterEach(() => {
      productsServices.getAll.restore();
    });

    it('quando ha produtos', async () => {
      const getAll = await productsServices.getAll();
      expect(getAll).to.be.an('array');

    });

  });

});


