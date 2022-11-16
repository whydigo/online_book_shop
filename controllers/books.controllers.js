const Book = require('../models/Book.model')
const Client = require('../models/Client.model')
// const Genre = require('../models/Genre.model')

module.exports.bookController = {

  getAllBooks: (req, res) => {
    Book.find().populate('reviev').then((data) => {
      res.json(data)
    })
  },

  getBookById: (req, res) => {
    Book.findById(req.params.id).then((data) => {
      res.json(data)
    })
  },

  getBooksByGenre: (req, res) => {
    Book.find({ genre: req.params.id }).then((data) => {
      res.json(data)
    })
  },

  addBook: (req, res) => {
    Book.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
      reviev: req.body.reviev
    }).then((data) => {
      res.json(data)
    })
  },

  deleteBook: (req, res) => {
    Book.findByIdAndDelete(req.params.id).then(() => {
      res.json("Book deleted success")
    })
  },

  addReview: (req, res) => {
    Book.findByIdAndUpdate(req.params.id, { $push: { review: req.body.review } }, { new: true }).then((data) => {
      res.json(data)
    })
  },

  goToBan: async (req, res) => {
    try {
      await Client.findByIdAndUpdate(req.params.clientId, {
        $set: {
          rentBooks: [],
        },
      });
      await Client.findByIdAndUpdate(req.params.clientId, { isBlocked: true });
      await Book.findByIdAndUpdate(req.params.bookId, {
        $pull: { rented: req.params.clientId },
      });
      res.json("Пользователь заблокирован");
    } catch (err) {
      res.json(err);
    }
  }
}