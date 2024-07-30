const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.post('/product', productController);

module.exports = router;

