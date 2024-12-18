const express = require('express');
const router = express.Router();
const { addProduct, getProducts, getProductById, updatePrice, deleteProduct, updateDiscountPrice, addComment, updateReviews, updateRatings, updateStockQuantity, getProductsByClientId } = require('../Controllers/Products');


router.post('/addProduct',addProduct);
router.get('/getProducts',getProducts);
router.post('/getProductById/:_id',getProductById);
router.post('/getProductsByClientId',getProductsByClientId);
router.delete('/deleteProduct/:_id', deleteProduct); 
router.put('/updatePrice/:_id', updatePrice); 
router.put('/updateDiscountPrice/:_id', updateDiscountPrice); 
router.put('/updateStockQuantity/:_id', updateStockQuantity); 
router.put('/updateRatings/:_id', updateRatings); 
router.put('/updateReviews/:_id', updateReviews); 
router.post('/addComment/:_id',addComment);

module.exports = router;