const Review = require('../models/Review.model')

module.exports.reviewController = {
    addReview: (req, res) => {
        Review.create({
            reviewAuthor: req.body.reviewAuthor,
            text: req.body.text,
            book: req.body.book
        }).then((data) => {
            res.json(data)
        })
    },
    deleteReview: (req, res) => {
        Review.findByIdAndDelete(req.params.id).then(() => {
            res.json("Review deleted Succes")
        })
    },
    updateReview: (req, res) => {
        Review.findByIdAndUpdate(req.params.id, { text: req.body.text }, { new: true }).then((data) => {
            res.json(data)
        })
    },
    getReviewById: (req, res) => {
        Review.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getAllReviews: (req, res) => {
        Review.find().then((data) => {
            res.json(data)
        })
    }
}