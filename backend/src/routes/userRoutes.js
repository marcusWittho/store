const express = require('express');

const router = express.Router();

const controller = require('../controllers/userControllers');

router.get('/', controller.getAllController);

module.exports = router;
