const { describe } = require('mocha')
const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const productsModels = require('../../../models/productsModels');

describe('Através do caminho /products, todos os produtos devem ser retornados', () => {
  describe('Quando nao ha produto registrado', () => {
    before(() => {
      const productsArray =[[]]
      sinon.stub(connection, 'execute').resolves(productsArray);
      })

      after(() => {
        connection.execute.restore();
      })

      it('Retorna um array vazio', async() => {
        const response = await productsModels.getAll();
        expect(response).to.be.empty;
        expect(response).to.be.an('array').that.is.empty;
        expect(response).to.be.an('array');
      })
    })
  describe('Quando ha produto registrado', () => {
    before(() => {
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
      sinon.stub(connection, 'execute').resolves(productsArray);
      })

      after(() => {
        connection.execute.restore();
      })

      it('Retorna um array de produtos', async() => {
        const response = await productsModels.getAll();
        expect(response).to.be.an('array');
        expect(response).to.have.lengthOf(2);
        expect(response[0]).to.have.property('id');
      })

      it('Retorna apenas o produto com id dado', async() => {
        const response = await productsModels.getById(1);
        expect([response]).to.have.lengthOf(1);
        expect(response).to.have.property('id');
        expect(response).to.have.property('name');
        expect(response).to.have.property('quantity');
      })
    })


    describe('Quando nao ha produto registrado com nome', () => {
      before(() => {
        const productsArray =[[]]
        sinon.stub(connection, 'execute').resolves(productsArray);
      })

      after(() => {
        connection.execute.restore();
      })

      it('Retorna undefined para busca de produto inexistente', async() => {
        const response = await productsModels.getByName('produto A');
        expect(response).to.be.undefined;
          // expect(response).to.be.empty;
          // expect(response).to.be.an('array').that.is.empty;
        })
      })
    describe('Quando ha produto registrado com o nome', () => {
      before(() => {
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
        sinon.stub(connection, 'execute').resolves(productsArray);
        })

        after(() => {
          connection.execute.restore();
        })

        it('Retorna um array de produtos', async() => {
          const response = await productsModels.getByName('produto A');
          expect(response).to.be.an('object');
          // expect(response).to.have.lengthOf(2);
          expect(response).to.have.property('id');
          expect(response).to.have.property('name');
          expect(response).to.have.property('quantity');

        })

        it('Retorna apenas o produto com id dado', async() => {
          const response = await productsModels.getById(1);
          expect([response]).to.have.lengthOf(1);
          expect(response).to.have.property('id');
          expect(response).to.have.property('name');
          expect(response).to.have.property('quantity');
        })

        it('Cria', async() => {
          const response = await productsModels.create('name', 1);
          expect(response).to.have.property('id');
          expect(response).to.have.property('name');
          expect(response).to.have.property('quantity');
        })
      })
})


