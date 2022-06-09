const express = require('express');

const router = express.Router();

const controller = require('../controllers/productControllers');

router.get('/', controller.getAllProductsControllers);
router.post('/add', controller.addProductControllers);
router.delete('/delete/:id', controller.deleteProductControllers);
router.put('/update/:id', controller.updateProductControllers);

module.exports = router;
