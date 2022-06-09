const express = require('express');

const router = express.Router();

const controller = require('../controllers/productControllers');

router.get('/', controller.getAllProductsControllers);
router.post('/add', controller.addProductControllers);

module.exports = router;
