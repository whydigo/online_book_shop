const Client = require('../models/Client.model')
const Book = require('../models/Book.model')

module.exports.clientController = {

    addClient: (req, res) => {
        Client.create({
            name: req.body.name,
            isBlocked: req.body.isBlocked
        }).then((data) => {
            res.json(data)
        })
    },

    removeClient: (req, res) => {
        Client.findByIdAndRemove(req.params.id).then(() => {
            res.json("Client deleted success")
        })
    },

    updateClient: (req, res) => {
        Client.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            isBlocked: req.body.isBlocked
        }, { new: true }).then((data) => {
            res.json(data)
        })
    },

    getAllClients: (req, res) => {
        Client.find().then((data) => {
            res.json(data)
        })
    },

    getClientById: (req, res) => {
        Client.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },

    takeBook: async (req, res) => {
        try {
            const client = await Client.findById(req.params.id);
            const book = await Book.findById(req.body.book)       
            if (client.isBlocked) {
                return res.json("Пользователь заблокирован")
            }
            if (client.rentBooks.length > 3) {
                return res.json("Нельзя арендовать больше 3-х книг")
            }

            if (book.rented) {                                    
                return res.json("Книга у арендована другим клиентом")
            }
            await Client.findByIdAndUpdate(req.params.clientId, {
                $addToSet: {
                    rentBooks: req.body.book,
                },
            })
            await Book.findByIdAndUpdate(req.body.book, {
                $addToSet: { rented: req.params.userId },
            });
            res.json("Книга добавлена в корзину")
        }
        catch (err) {
            res.json(err)
        }
    },

    removeBookInBascket: async (req, res) => {
        try {
            await Client.findByIdAndUpdate(req.params.clientId, {
                $pull: { rentBooks: req.body.book }
            })
            await Book.findByIdAndUpdate(req.body.Book, {
                $pull: {
                    rented: req.params.clientId
                }
            })
            res.json("Книга удалена из корзины клиента")
        } catch (error) {
            res.json(error)
        }
    }
}