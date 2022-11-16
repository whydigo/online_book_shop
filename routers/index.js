const { Router } = require('express')
const router = Router()
const genresRoute = require('./genres.routers')
const revievsRoute = require('./reviews.routers')
const clientsRoute = require('./clients.routers')
const booksRoute = require('./books.routers')


router.use(genresRoute)
router.use(revievsRoute)
router.use(clientsRoute)
router.use(booksRoute)

module.exports = router