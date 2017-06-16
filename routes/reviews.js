const express = require('express');
const router  = express.Router({ mergeParams: true })

const { Review } = require('../models')

router.post('/', (request, response) => {
  const { productId } = request.params
  const { content, rating } = request.body
console.log(request.params)
  Review.create({
    ProductId: productId,
    content: content,
    rating: rating
  }).then((review) => {
    console.log(review)
    response.redirect('/products/' + productId)
  })
})

module.exports = router
