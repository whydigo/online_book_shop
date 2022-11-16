const { Router } = require("express")
const { bookController } = require('../controllers/books.controllers')
const route = Router()

route.get('/admin/books', bookController.getAllBooks)
route.get('/admin/books/:id', bookController.getBooksByGenre)
route.get('/admin/books/byId/:id', bookController.getBookById)
route.post('/admin/books/', bookController.addBook)
route.patch('/admin/books/addreview/:id', bookController.addReview)
route.delete('/admin/books/:id', bookController.deleteBook)
route.patch("/admin/:clientId/:bookId/banned", bookController.goToBan)

route.get('/books', bookController.getAllBooks)
route.get('/books/:id', bookController.getBooksByGenre)
route.get('/books/byId/:id', bookController.getBookById)

module.exports = route