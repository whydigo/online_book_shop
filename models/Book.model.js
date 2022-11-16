const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre'
    },
    rented: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }],
    reviev: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book