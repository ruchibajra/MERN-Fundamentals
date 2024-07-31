const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const authorizeRole = require('../Middleware/authorizationMiddleware');
const {createCategory, updateCategory, deleteCategory, getCategories, getCategory} = require('../controllers/categoryController');



router.post('/create', authMiddleware, authorizeRole("admin"), createCategory);
router.patch('/update/:id', authMiddleware, authorizeRole('admin'), updateCategory);
router.delete('/delete/:id', authMiddleware, authorizeRole('admin'), deleteCategory);
router.get('/', getCategories);
router.get('/:id', getCategory);




// patch only some field update, patch says only this data updated
// put says all data udpated, and it can update all
module.exports = router;

