const express = require('express');
const multer = require('multer');
const { storage } = require('../middlewares/multer');

const router = express.Router();

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
  fileFilter: (_req, file, callback) => {
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
});

const controller = require('../controllers/productControllers');

router.get('/', controller.getAllProductsControllers);
router.post('/add', upload.single('imagem'), controller.addProductControllers);
router.delete('/delete/:id', controller.deleteProductControllers);
router.put('/update/:id', controller.updateProductControllers);

module.exports = router;
