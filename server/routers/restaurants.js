const express = require('express')
const router = express.Router()
const restaurantsController = require('../controllers/restaurantsController')

router.get('/hotels', restaurantsController.getRestaurants)
router.post('/add-food', restaurantsController.addFood)

module.exports = router