const { describe } = require('mocha')
const { expect } = require('chai');
const sinon = require('sinon');

const productsController = require('../../../controllers/productsController');
const productsService = require('../../../services/productsService')

describe('Ao chamar o controller de getAll', () => {
  describe('quando ha produto', () => {
    const response = {};
    const request = {};
    const productsArray =
    [[
      {
        "id": 1,
        "name": "produto A",
      },
      {
        "id": 2,
        "name": "produto B",
      }
    ]];

    beforeEach(() => {
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsService, 'getAll').resolves(productsArray);
    });

    afterEach(() => {
      productsService.getAll.restore();
    });

    it('quando ha produtos', async () => {
      const getAll = await productsService.getAll();
      expect(getAll).to.be.an('array');

    });

  });

});


