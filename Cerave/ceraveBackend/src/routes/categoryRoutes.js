const express = require('express');
const categoryController = require('../controllers/categoryController');
const router = express.Router();

router.post('/category', categoryController);


// patch only some field update, patch says only this data updated
// put says all data udpated, and it can update all
module.exports = router;

