const Genre = require('../models/Genre.model')

module.exports.genreController = {
    addGenre: (req, res) => {
        Genre.create({
            nameGenre: req.body.nameGenre,
            description: req.body.description
        }).then((data) => {
            res.json(data)
        })
    },
    getAllGenres: (req, res) => {
        Genre.find().then((data) => {
            res.json(data)
        })
    },
    removeGenre: (req, res) => {
        Genre.findByIdAndRemove(req.params.id).then(() => {
            res.json("Genres deleted success")
        })
    },
    getBooksByGenre: (req, res) => {
        Genre.find({ _id: req.params.id }, { books: req.body.books }).then((data) => {
            res.json(data)
        })
    }
}