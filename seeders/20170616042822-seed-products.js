'use strict';

const faker = require('faker');

// const Product = require('../models/product');
const { Product } = require('../models');

const products = Array.from({ length: 100 }).map(() => {
  let price = faker.commerce.price()
  return Product.create({
    title: faker.commerce.productName(),
    description: faker.company.catchPhraseDescriptor(),
    price: price
  })
})

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return Promise.all(products)
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return Product.destroy({where: {}})
  }
};
