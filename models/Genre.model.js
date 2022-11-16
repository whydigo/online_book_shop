const mongoose = require("mongoose")

const genreSchema = mongoose.Schema({
    nameGenre: String,
    description: String,
    books: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }
})

const Genre = mongoose.model('Genre', genreSchema)
module.exports = Genre