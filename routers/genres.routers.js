const { Router } = require("express")
const { reviewController } = require('../controllers/reviews.controllers')
const route = Router()

route.get('/admin/reviews', reviewController.getAllReviews)
route.get('/admin/reviews/:id', reviewController.getReviewById)
route.post('/admin/reviews', reviewController.addReview)
route.patch('/admin/reviews/:id', reviewController.updateReview)
route.delete('/admin/reviews/:id', reviewController.deleteReview)

route.get('/reviews', reviewController.getAllReviews)
route.get('/reviews/:id', reviewController.getReviewById)
route.post('/reviews', reviewController.addReview)
route.patch('/reviews/:id', reviewController.updateReview)
route.delete('/reviews/:id', reviewController.deleteReview)

module.exports = route