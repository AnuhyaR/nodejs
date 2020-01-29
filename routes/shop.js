const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData=require('./admin.js');

const productController=require('../controllers/product');


const router = express.Router();

router.get('/',productController.getProducts );

module.exports = router;
