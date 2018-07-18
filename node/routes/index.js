var express = require('express');
var router = express.Router();
const searchController  = require('../controllers/searchController');
const productController  = require('../controllers/productController');

router.get('/api/items', searchController.get);
router.get('/api/items/:id', productController.get);

module.exports = router;
