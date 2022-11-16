const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    reviewAuthor: String,
    text: String,
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }
})

const Review = mongoose.model('Review', reviewSchema)
module.exports = Review