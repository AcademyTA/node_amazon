const express = require('express');
const router = express.Router()

const { Product } = require('../models')

router.get('/', (request, response) => {
  Product.findAll()
    .then((products) => {
      response.render('products/index', { products: products})
    })
})

router.get('/:id', (request, response) => {
  const id = request.params.id

  Product.findById(id)
    .then((product) => {
      response.render('products/show', { product: product })
    })
})

module.exports = router
