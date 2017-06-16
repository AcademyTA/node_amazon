const express = require('express');
const router = express.Router()

const { Product } = require('../models')

router.get('/', (request, response) => {
  Product.findAll()
    .then((products) => {
      response.render('products/index', { products: products})
    })
})

module.exports = router
