const express = require('express');
const router = express.Router();
const ngoController = require('../controllers/ngoController')

router.get('/get-all-ngo', ngoController.getAllNGOs)
router.post('/community', ngoController.registerNGO)

module.exports = router