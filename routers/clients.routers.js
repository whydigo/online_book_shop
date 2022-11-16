const { Router } = require("express")
const { clientController } = require('../controllers/clients.controllers')
const route = Router()

route.get('/admin/clients', clientController.getAllClients)
route.get('/admin/clients/:id', clientController.getClientById)
route.post('/admin/clients', clientController.addClient)
route.patch('/admin/clients/:id', clientController.updateClient)
route.delete('/admin/clients/:id', clientController.removeClient)

route.patch("/books/renter/:clientId/add", clientController.takeBook);
route.patch("/books/renter/:clientId/:remove", clientController.removeBookInBascket);




module.exports = route