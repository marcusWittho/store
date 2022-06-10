const express = require('express');

const router = express.Router();

const controller = require('../controllers/userControllers');

router.get('/', controller.getAllControllers);
router.post('/login', controller.loginControlelrs);
router.post('/add', controller.addUserControllers);
router.delete('/delete/:id', controller.deleteUserControllers);
router.put('/update/:id', controller.updateUserControllers);

module.exports = router;
