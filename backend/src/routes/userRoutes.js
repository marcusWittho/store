const express = require('express');

const router = express.Router();

const controller = require('../controllers/userControllers');

router.get('/', controller.getAllControllers);
router.post('/add', controller.addUserControllers);
router.delete('/delete/:id', controller.deleteUserControllers);

module.exports = router;
