const express = require('express');
const router  = express.Router({ mergeParams: true })

const { Review } = require('../models')

router.delete('/:id', (request, response, next) => {
  const { id, productId } = request.params;

  Review.findById(id)
    .then(review => review.destroy())
    .then(() => response.redirect(`/products/${productId}`))
    .catch(error => next(error))
});

router.post('/', (request, response) => {
  const { productId } = request.params
  const { content, rating } = request.body

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
