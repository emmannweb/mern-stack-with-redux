const express = require('express');
const router = express.Router();
const { createProduct,
    displayProduct,
    deleteProduct,
    productCategory,
    updateProduct,
    productSingle } = require("../controllers/productController")
const { isAuthenticated, isAdmin } = require("../middleware/auth");


//router.post('/product/create', isAuthenticated, isAdmin, createProduct);
router.post('/product/create', createProduct);
router.get('/products/all', displayProduct);
router.delete('/product/delete/:id', deleteProduct);
router.get('/product/:id', productSingle);
//router.delete('/product/delete/:id', isAuthenticated, isAdmin, deleteProduct);
router.put('/product/update/:id', updateProduct);
//router.put('/product/update/:id', isAuthenticated, isAdmin, updateProduct);
router.get('/product/categories', productCategory);





module.exports = router;