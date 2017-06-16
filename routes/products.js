const express = require('express');
const router  = express.Router();
const reviews = require('./reviews')

const { Product } = require('../models')

router.get('/', (request, response) => {
  Product.findAll()
    .then((products) => {
      response.render('products/index', { products: products})
    })
})

router.get('/new', (request, response) => {
  const product = Product.build()

  response.render('products/new', { product: product })
})

router.post('/', (request, response) => {
  const title = request.body.title
  const description = request.body.description
  const price = request.body.price

  Product.create({
    title: title,
    description: description,
    price: price
  }).then((product) => {
    response.redirect('/products/' + product.id)
  }).catch((error) => {
    console.log(error)
  })
})

router.get('/:id', async(request, response, next) => {
  const id = request.params.id

  try {
    const product = await Product.findById(id)
    const reviews = await product.getReviews()

    response.render('products/show', { product: product, reviews: reviews })
  } catch(error) {
    next(error);
  }
})

router.use('/:productId/reviews', reviews)

module.exports = router
